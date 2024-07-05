import config from "../config/config";
import {Client,Account,ID} from "appwrite";

// AuthService Class
export class AuthService {

    // client object
    client=new Client();

    // account
    account;

    // constructor
    constructor(){

        this
        .client
        .setEndpoint(config.appwriteUrl)
        .setEndpoint(config.appwriteProjectId);
        
        this.account=new Account(this.client);
    }

    // createAccount async method
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // call Another Method
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login async method
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    // getUser async method - to check if logged in
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    // logout async method
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }
};

// authService Object
const authService=new AuthService();

export default authService;
