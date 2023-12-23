URL Shortner Backend Project :-

This assignment aims to assess your backend development skills using Node.js, Express.js, and MongoDB. You will be building a RESTful API crafting a URL shortener service – a tool that transforms lengthy URLs into bite-sized versions. This service should be equipped with the following functionalities: 

Functionalities: 
  ● Users can submit a lengthy URL through a POST request to /shorten. 
  ● The API will generate a unique short URL for the submitted original URL and store it in the database. 
  ● The response should include both the original and shortened URLs. 
  ● Users can access the original URL by visiting the generated short URL. 
  ● Implement basic user registration and login functionalities for secure access. 

Technical Requirements: 
  Backend: 
    ○ Node.js (version LTS) 
    ○ Express.js 
    ○ Mongoose 
    
  Database: MongoDB 
  
  Security: 
    ○ Simple authentication mechanism (e.g., username and password) 
    ○ authentication using passport.js by craeting jesonwebtoken 

APIs:
  http://localhost:8000/register    =>   user register 
  http://localhost:8000/login       =>  user login if user already register
  http://localhost:8000/url         =>  original url pass by user for converting into short url and store in database, Authentication apply
  http://localhost:8000/:shortId    =>  pass short url for redirecting user into original url, Authentication apply

