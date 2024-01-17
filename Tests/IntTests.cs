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
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            string username = "testinguser";
            string password = "testinguserpass";
            var usernameTextBox = driver.FindElement(By.Id("username-textbox"));
            var passwordTextBox = driver.FindElement(By.Id("password-textbox"));
            var loginButton = driver.FindElement(By.Id("login-button"));

            usernameTextBox.SendKeys(username);
            passwordTextBox.SendKeys(password);
            loginButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
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
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            title = driver.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal - New Post");

            //-he writes a quick entry and clicks Post
            string newPost = "fourth post, this is the one";
            var postTextBox = driver.FindElement(By.Id("new-post-textbox"));
            var submitButton = driver.FindElement(By.Id("submit-post-button"));
            postTextBox.SendKeys(newPost);
            submitButton.Click();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            title = driver.Title;
            title.Should().Be("Sepia Journal - testinguser's Journal");

            //- he gets taken back to his feed; the new post is in the list now, showing up at the top and dated most recent
            posts.Add(newPost);
            feed = driver.FindElement(By.Id("post-feed"));
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
            edge.Manage().Timeouts().ImplicitWait = TimeSpan.FromMilliseconds(500);
            feed = edge.FindElement(By.Id("post-feed"));
            feedPosts = feed.FindElements(By.ClassName("journal-post"));
            for (int i = 0; i < posts.Count; i++)
            {
                feedPosts[i].Text.Should().Be(posts[i]);
            }

            driver.Quit();
        }
    }
}
