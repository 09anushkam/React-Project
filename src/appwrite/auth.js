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
        .setProject(config.appwriteProjectId);
        
        this.account=new Account(this.client);

        // Bind methods to ensure correct context
        this.login = this.login.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.logout = this.logout.bind(this);
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
        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        try {
            // console.log("Appwrite service :: login :: Attempting to login with email:", email);
            const session = await this.account.createEmailPasswordSession(email, password); //some error
            // console.log("Appwrite service :: login :: Successfully logged in", session);
            return session;
        } 
        catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    // getUser async method - to check if logged in
    // some error
    async getCurrentUser(){
        try {
            // Check if the user is authenticated
            const session = await this.account.getSession("current"); //
            if (!session) {
                throw new Error("No active session found. User is not authenticated.");
            }

            const user = await this.account.get();
            // console.log("Appwrite service :: getCurrentUser :: user", user);
            return user;
        } 
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
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
