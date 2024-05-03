Instructions:

After cloning or downloading the zip file, navigate to the folder (survey-form) and execute this to run in local.

Stack use: MERN (MongoDB, Express, React, NodeJS)

Server:

1. If you are using VSCode open new terminal.
2. Navigate using "cd .\server\" command and make sure you are in the survey-form directory
3. Install the dependencies use this command "npm i cors express mongoose nodemon"
4. The nodemon package is optional if you've already installed it globally but if not include it to command
5. Run the server using this command "nodemon index.js" or if it's not working include this to the script in package.json for server directory and under the "test" copy and paste this script below it "start": "nodemon index.js" and use the command "npm start" it should start the server
6. Server is running now

Client:
1. Open another terminal and navigate to client directory using this commnad "cd .\client\"
2. Next type "npm install"
3. Also install the dependencies use this command "npm i react-router-dom axios antd"
4. After installing run the client using this command "npm run dev"
5. And the React App will run now and pop out a link in browser with app
6. And the App is running now

