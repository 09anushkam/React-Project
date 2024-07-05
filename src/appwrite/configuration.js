import config from "../config/config"
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    
    // client object
    client = new Client();

    // databases
    databases;

    // bucket
    bucket;

    // constructor
    constructor(){

        this
        .client
        .setEndpoint(config.appwriteUrl)
        .setEndpoint(config.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

    // create post async method
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    // update post async method
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }

    // delete post async method
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error ",error);
            return false;
        }
    }

    // get post async method
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error ",error);
            return false;
        }
    }

    // get post async method needs indexes which is status
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                100,
                0,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            return false;
        }
    }

    // file upload async method
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    // file delete async method
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
        }
    }

    // get file preview method
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }

};

// service Object
const service=new Service();

export default service;