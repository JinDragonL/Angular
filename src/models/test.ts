public class JwtModel
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Username { get; set; }
        public string Fullname { get; set; }
    }
    
    
export interface JwtModel {
    accessToken: string;
    refreshToken: string;
    username: string;
    fullname: string;
}