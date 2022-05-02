# CP02
 ### Project Initialization
 #### 1.  npm initialization
 `npm init -y`
<br> 
<br> Generate package.json
 #### 2. git initialization
 `git init`
 #### 3. README initialization

 ### Project Development
 #### 1. Install KOA 
 `npm install koa`
 #### 2. Develop basic App
<br> 2.1 Automatic restart service
`npm i nodemon`
<br> Develop package.json
` "scripts": {
    "dev": "nodemon ./scr/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }`
<br> run `npm run dev` to start service
<br>
<br>2.2 Read env file
`npm i dotenv`
2.3 Create .env file
`APP_PORT = 5050`

2.4 Add routes
