using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;

namespace Tests
{
    public class IntTests
    {
        private readonly ITestOutputHelper output;

        public IntTests(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void Test_WalkingSkeleton() {
            //-user visits website(hosted on the cloud)
            IWebDriver driver = new ChromeDriver();
            //string websiteURL = "http://sepia-journal-env-5.eba-vuhpp7mp.us-east-2.elasticbeanstalk.com/"; //sepiajournalsite
            string websiteURL = "https://localhost:44440/";
            driver.Navigate().GoToUrl(websiteURL);
            var title = driver.Title;
            title.Should().Be("Sepia Journal - Home");

            //-user logs in
            //-user is able to successfully authenticate with password
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            string username = "testinguser";
            string password = "testinguserpass";
            var usernameTextBox = driver.FindElement(By.Id("username-textbox"));
            var passwordTextBox = driver.FindElement(By.Id("password-textbox"));
            var loginButton = driver.FindElement(By.Id("login-button"));

            usernameTextBox.SendKeys(username);
            passwordTextBox.SendKeys(password);
            loginButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            title = driver.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal");

            //-sees a list of his recent dated journal entries in an organized feed, from most to least recent
            List<string> posts = new List<string>() { "first post", "second post", "third post" };

            IWebElement feed = driver.FindElement(By.Id("journal-feed"));
            IList<IWebElement> feedPosts = feed.FindElements(By.ClassName("journal-post"));
            for (int i = 0; i < posts.Count; i++)
            {
                feedPosts[i].Text.Should().Be(posts[i]);
            }

            //- he clicks New Post and gets taken to a new screen to post
            var newPostButton = driver.FindElement(By.Id("new-post-button"));
            newPostButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(2000);
            title = driver.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal - New Post");

            //-he writes a quick entry and clicks Post
            string newPost = "fourth post, this is the one";
            var postTextBox = driver.FindElement(By.Id("new-post-textbox"));
            var submitButton = driver.FindElement(By.Id("submit-post-button"));
            postTextBox.SendKeys(newPost);
            submitButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            title = driver.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal");

            //- he gets taken back to his feed; the new post is in the list now, showing up at the top and dated most recent
            posts.Add(newPost);
            feed = driver.FindElement(By.Id("journal-feed"));
            feedPosts = feed.FindElements(By.ClassName("journal-post"));
            for (int i = 0; i < posts.Count; i++)
            {
                feedPosts[i].Text.Should().Be(posts[i]);
            }

            //- he wants to share this with someone, so he grabs the URL of his journal page
            string currentURL = driver.Url;

            //-he posts it elsewhere and someone else opens it up in a different browser
            IWebDriver edge = new EdgeDriver();
            edge.Navigate().GoToUrl(currentURL);
            title = edge.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal");

            //- the reader doesn't need to log in, they're taken to the feed and can read them in order; but doesn't have the option to make a new post
            edge.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            List<string> edgePosts = new List<string>() { "first post", "second post", "third post" };
            feed = edge.FindElement(By.Id("journal-feed"));
            feedPosts = feed.FindElements(By.ClassName("journal-post"));
            for (int i = 0; i < edgePosts.Count; i++)
            {
                feedPosts[i].Text.Should().Be(edgePosts[i]);
            }

            driver.Quit();
        }

        [Fact]
        public void Test_LoginAuthentication()
        {
            //Bill has an exciting (read: boring) story to post about his lint collection. He visits Sepia Journal to begin a journal about lint.
            IWebDriver driver = new ChromeDriver();
            //string websiteURL = "http://sepia-journal-env-5.eba-vuhpp7mp.us-east-2.elasticbeanstalk.com/"; //sepiajournalsite
            string websiteURL = "https://localhost:44440/";
            driver.Navigate().GoToUrl(websiteURL);
            var title = driver.Title;
            title.Should().Be("Sepia Journal - Home");

            //He tries to post but there isn't the New Post button. He has to login first. He actually does try to access the new post route, but because he's not logged in, it doesn't let him do it.
            driver.Navigate().GoToUrl(websiteURL + "new-post");
            title = driver.Title;
            title.Should().Be("Sepia Journal - Page Not Found");

            //He clicks the Login button and it takes him to the Login form. However, he doesn't have an account - he has to make one first. Under the form, he clicks Create New Account.
            var loginButton = driver.FindElement(By.Id("login-button"));
            loginButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - Login");
            var createAccountLink = driver.FindElement(By.Id("create-new-account-link"));
            createAccountLink.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - Create New Account");

            //On the Create New Account page, he fills in his information - his email, his username, and his password. He makes sure his password fulfills certain password criteria.
            var emailTextBox = driver.FindElement(By.Id("email-textbox"));
            var usernameTextBox = driver.FindElement(By.Id("username-textbox"));
            var passwordTextBox = driver.FindElement(By.Id("password-textbox"));
            var createAccountButton = driver.FindElement(By.Id("create-account-button"));

            emailTextBox.SendKeys("bill@billslint.com");
            usernameTextBox.SendKeys("LinterBoy");
            passwordTextBox.SendKeys("lintboy2000");
            createAccountButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            var errorBox = driver.FindElement(By.Id("error-box"));
            Boolean errorBoxShows = errorBox.Displayed;
            string errorText = errorBox.Text;
            errorBoxShows.Should().BeTrue();
            errorText.Should().Be("This password doesn't fit password criteria. Make sure the password is at least eight characters long, contains at least one number, at least one capital letter, and at least one special character.");

//He revises his password and puts in a new one. He then tries to create the new account again, but unfortunately, his chosen username doesn't work - a user already has it. So he modifies it, and it's accepted.
            passwordTextBox.SendKeys("Lintboy2000!");
            createAccountButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);

            errorBox = driver.FindElement(By.Id("error-box"));
            errorBoxShows = errorBox.Displayed;
            errorText = errorBox.Text;
            errorBoxShows.Should().BeTrue();
            errorText.Should().Be("This username already exists. Please pick a different one.");

            usernameTextBox.SendKeys("LinterDude");
            createAccountButton.Click();

            //When account creation is completed, he's redirected back to the login page. Now he puts in his new information, and it works.
            driver.Title.Should().Be("Sepia Journal - Login");
            var loginUsernameBox = driver.FindElement(By.Id("login-username-textbox"));
            var loginPasswordBox = driver.FindElement(By.Id("login-password-textbox"));
            loginButton = driver.FindElement(By.Id("login-button"));

            loginUsernameBox.SendKeys("LinterDude");
            loginPasswordBox.SendKeys("Lintboy2000!");
            loginButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - LinterDude's Journal");
            //From here, he starts small - he clicks New Post, types "I love lint", and submits it. The app redirects to his post feed, now showing his first dated post.
            var newPostButton = driver.FindElement(By.Id("new-post-button"));
            newPostButton.Click();
            driver.Title.Should().Be("Sepia Journal - testinguser's Journal - New Post");
            string newPost = "I like lint.";
            var postTextBox = driver.FindElement(By.Id("new-post-textbox"));
            var submitButton = driver.FindElement(By.Id("submit-post-button"));
            postTextBox.SendKeys(newPost);
            submitButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - testinguser's Journal");
            IWebElement feed = driver.FindElement(By.Id("journal-feed"));
            IList<IWebElement> feedPosts = feed.FindElements(By.ClassName("journal-post"));
            for (int i = 0; i < 1; i++)
            {
                feedPosts[i].Text.Should().Be("I like lint.");
            }

            //Satisfied, he clicks the Logout button and it logs him out, redirecting him back to the home page.
            var logoutButton = driver.FindElement(By.Id("logout-button"));
            logoutButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - Home");

            //However, he forgot to do something, so he manually uses the URL of his new profile to go back to it. He can see his new post, but there's no option to make a new post.
            driver.Navigate().GoToUrl("https://localhost:44440/journal/LinterDude");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - LinterDude's Journal");
            newPostButton = driver.FindElement(By.Id("new-post-button"));
            Boolean newPostButtonShows = newPostButton.Displayed;
            newPostButtonShows.Should().BeFalse();
            //Again, he tries to go to make a new post with a manual URL, but it doesn't work anymore. He decides to do it later.
            driver.Navigate().GoToUrl("https://localhost:44440/profile/LinterDude/post");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(1000);
            driver.Title.Should().Be("Sepia Journal - 404");
            errorBox = driver.FindElement(By.Id("error-box"));
            errorBoxShows = errorBox.Displayed;
            errorText = errorBox.Text;
            errorBoxShows.Should().BeTrue();
            errorText.Should().Be("We're sorry, we were unable to find or access that page. Were you trying to log in? Click here to log into your account.");

            driver.Quit();
        }
    }
}
