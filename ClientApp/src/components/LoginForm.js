export default function LoginForm()
{
    return (
        <div>
            <form action="https://localhost:44440/feed">
                <label for="username-textbox">Username:</label><br></br>
                <input type="text" id="username-textbox" name="username-textbox"></input><br></br>
                <label for="password-textbox">Password:</label><br></br>
                <input type="text" id="password-textbox" name="password-textbox"></input><br></br>
                <button type="submit" id="login-button">Submit</button>
            </form>
        </div>
    );
}