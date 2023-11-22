import { CookieOptions } from "express";

const fs = require('fs');

const secretsData = fs.readFileSync('../cert/secrets.json'); //We choose to read in the client_secret 
                                                             //from a JSON file stored in /cert folder
                                                             
const secrets = JSON.parse(secretsData); //Contain OIDC registration info

interface AuthConfig {

    //OIDC provider-specific configs
    auth_endpoint: string,          //OIDC provider's authentication endpoint
    token_endpoint: string,         //OIDC provider's token endpoint
    user_info_endpoint: string,     //OIDC provider's user information endpoint
    public_key: string,             //OIDC provider's URI containing public key in JWK format
    response_type: string,          //value as mandated by MIT OIDC server
    grantType: string,              //value as mandated by MIT OIDC server
    tokenType: string,              //value as mandated by MIT OIDC server
    tokenIssuer: string,            //Listed issuer in valid ID tokens

    //Client-specific configs 
    redirect_uri: string,           ///Endpoint to receive authorization response 
    login_uri: string,              //Backend URI to handle user code
    session_id_uri: string,         //Backend URI to handle assigning new session IDs
    client_id: string,              //The client application's identifier (as registered with the OIDC provider)
    client_secret: string,         //The client application's identifier (as registered with the OIDC provider) - DO NOT EXPOSE PUBLICLY
    scope: string,                  //The scope being requested from the OIDC provider

    idtoken_localstorage_name: string, //Name to be given to variable in Local Storage that contains the user's id_token 
                                        //(upon successful authentication)
    state_length: number,           //The byte length of `state` variable to be sent as part of login request
    nonce_length: number,           //The byte length of `state` variable to be generated as part of login flow
    state_localstorage_name: string,//Name of state variable stored in LocalStorage
    nonce_cookie_name: string,      //Name of nonce variable stored in browser cookie
    nonce_cookie_options: CookieOptions
} 

const OIDC_AUTHORITY_URI = "https://petrock.mit.edu"; 
const DOMAIN_URI = "https://dormdigest.xvm.mit.edu"

export const AUTH_CONFIG: AuthConfig = {

    //OIDC provider-specific configs
    auth_endpoint: OIDC_AUTHORITY_URI + "/touchstone/oidc/authorization",
    token_endpoint: OIDC_AUTHORITY_URI + "/oidc/token",
    user_info_endpoint: OIDC_AUTHORITY_URI + "/oidc/userinfo",
    public_key: OIDC_AUTHORITY_URI + "/oidc/jwks",
    response_type: "code",
    grantType: "authorization_code",                    //mandated by MIT OIDC server
    tokenType: "Bearer",                                //mandated by MIT OIDC server
    tokenIssuer: OIDC_AUTHORITY_URI,               
    
    //Client-specific configs 
    redirect_uri: DOMAIN_URI + "/oidc-response", 
    login_uri: DOMAIN_URI + "/api/login",
    session_id_uri: DOMAIN_URI + ":8432/create_session", //Note: Currently using port 8432 for Python backend
    client_id: "szs7ZpAB9HJn", //Safe to save client-side
    client_secret: secrets["client_secret"], 
    scope: "openid email",                             //depends on your application needs

    idtoken_localstorage_name: "id_token",
    state_length: 32,                                  //Note: OIDC docs has no requirement on length 
                                                       //(though can't be infinite), as long as it's long enough to be unguessable
    nonce_length: 32,
    state_localstorage_name: 'oidc-request-state',
    nonce_cookie_name: 'oidc-request-nonce',
    nonce_cookie_options: { path: "/api/login",                            //Restrict access to this backend endpoint only
                            sameSite: "strict",                            //sameSite set to "Strict" to disallow sending on cross-site requests
                            secure: true                                   //secure set to True restrict cookie to be sent over HTTPS only
                        }
};
