import DocumentTitle from "./DocumentTitle.js"

//            IWebElement feed = driver.FindElement(By.Id("post-feed"));
//IList < IWebElement > feedPosts = feed.FindElements(By.ClassName("journal-post"));

export default function Feed() {
    DocumentTitle("Sepia Journal - testinguser's Journal")
    return (
        <div id="feed-body">
        <div id="journal-feed">
            <div class="journal-post">
                <p>first post</p>
            </div>
            <div class="journal-post">
                <p>second post</p>
            </div>
            <div class="journal-post">
                <p>third post</p>
            </div>
        </div>
            <div>
                <form action="https://localhost:44440/new-post">
                    <button type="submit" id="new-post-button">New Post</button>
                </form>
         </div>
        </div>
    )
}