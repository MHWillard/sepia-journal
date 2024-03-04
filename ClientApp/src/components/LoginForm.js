export default function LoginForm()
{
    return (
        <div>
            <form action="https://localhost:44440/feed">
                <label htmlFor="login-username-textbox">Username:</label><br></br>
                <input type="text" id="login-username-textbox" name="username-textbox"></input><br></br>
                <label htmlFor="login-password-textbox">Password:</label><br></br>
                <input type="text" id="login-password-textbox" name="password-textbox"></input><br></br>
                <button type="submit" id="login-button">Submit</button>
            </form>
        </div>
    );
}