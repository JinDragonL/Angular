export interface JwtTokenModel {
	jti: string;
	iss: string;
	iat: string;
	aud: string[];
	exp: number;
	username: string;
	nbf: number;
}