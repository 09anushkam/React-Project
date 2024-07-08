# React Blog App

1. Installing required dependencies/packages
npm create vite@latest  
npm i  
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form  
2. setup of appwrite
3. .env file variables
4. config folder and file to get those env variables and coverting them into string and storing in an object
5. writing appwrite services code for authentication and posts  
6. creating store using redux  
7. creating slice using redux and wraping the App by Provider in main.jsx  
8. writing some code in App.jsx regarding conditional rendering and dispatch  
9. Creating Components - Footer,Header,LogoutButton,Logo,Input  
10. Creating Components - Select,PostCard  
11. Creating Components - Login,Signup,AuthLayout  
12. Adding form and slug values : Creating Components - RTE,Post-Form/PostForm
13. Building pages  
14. Debugging and CORS were added here in appwrite website by adding platform  
15. Deployment -  

- vercel :  
import git repo  
add env variables  
deploy  

- netlify :  
import git repo  
add env variables  
deploy  

Note - login requires some optimization  
Also note that after deployment, login and signup is not working may be there is some issue with appwrite_url or appwrite_endpoint  
debugging is required  
