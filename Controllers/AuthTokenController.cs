using sepia_journal.Models;

namespace sepia_journal.Controllers
{
    public class AuthTokenController
    {
        AuthTokenModel model;

        public AuthTokenController() 
        { 
            AuthTokenModel model = new AuthTokenModel();
        }

        public string GetToken() 
        {
            return model.generateAuthToken();
        }
    }
}
