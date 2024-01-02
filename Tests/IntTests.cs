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
            string websiteURL = "sepiajournalsite";
            VisitWebsite(websiteURL);

            //-user logs in
            //-user is able to successfully authenticate with password
            string username = "testinguser";
            string password = "testinguserpass";
            LoginWebsite(username, password);

            //-sees a list of his recent dated journal entries in an organized feed, from most to least recent
            List<string> posts = new List<string>() { "first post", "second post", "third post" };

            AssertPost(posts);

            //- he clicks New Post and gets taken to a new screen to post
            ClickButton("New Post");

            //-he writes a quick entry and clicks Post
            string newPost = "fourth post, this is the one";
            WritePost(newPost);
            ClickButton("Submit");

            //- he gets taken back to his feed; the new post is in the list now, showing up at the top and dated most recent
            posts.Add(newPost);
            AssertPost(posts);

            //- he wants to share this with someone, so he grabs the URL of his journal page
            string getURL = GetURL();

            //-he posts it elsewhere and someone else opens it up in a different browser
            OpenEdgeBrowser();
            VisitWebsite(getURL);

            //- the reader doesn't need to log in, they're taken to the feed and can read them in order; but doesn't have the option to make a new post
            AssertPost(posts);
        }
    }
}
