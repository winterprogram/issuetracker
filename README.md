# Issue Tracking App (Issue tracker) 

This application is built to report bug. Typically this web is much more usefull in mid-scale to large-scale companies where there is more than 10 people working on the project.

Project urls:-

1) Angular :- http://13.127.94.119

   Github Link :- https://github.com/winterprogram/meeting_front

2) Node App :- http://13.235.247.68

    Github Link :- https://github.com/winterprogram/meeting_back

Note :- Node url is protected by Cros, please use localhost:3000 to test Rest apis.

## Installing

### Step - 1

Note : You can skip this steps if you have Node ,npm and angularCLI installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) -  to install node (node version >12.0.0)

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) -  install Git

### Step - 2

Note : If you are on linux based OS then perform below commands:-

```
sudo npm install --unsafe-perm
```
1) For windows to install all package dependencies :- 

```
npm install 
```
1) For linus/macOs to install all package dependencies :- 

```
sudo npm install 
```
### Step - 3

To run node server locally

 #### 3.1 Mongodb server
 
 Run mongod on your local machine by running below command:-
 ```
 mongod
 ```
 Note :- If mongodb is not installed please install it using [Mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/). Then set environment variable as "mongod".

#### 3.2 NoSql booster (optional)

[NoSQLBooster](https://nosqlbooster.com/) for MongoDB (formerly MongoBooster) is a shell-centric cross-platform GUI tool for MongoDB. It's of great use during developing any application based on mongodb database. 

#### 3.3 Node server

Run below command to start node sever in your machine locally

```
node index.js
```
##### 3.3.1 Nodemon  (optional)

[Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Run following command locally to install nodemon globally

```
npm install -g nodemon
```

Run below command locally to run node server using nodemon

```
nodemon index.js
```

### Step - 4 

Rest api docs -  [REST Api](/Backend/apidoc/index.html) :- /Backend/apidoc/index.html

Event api docs -  [Event docs](/Backend/eventdoc/index.html) :- /Backend/eventdoc/event.html

Note - These links are not hosted. Please access the docs by visiting the directory as mentioned above.

## More about the application (backend)

1) Config :- It consist of application configration such as mongodb uri, production enviornment etc.

2) Controllers :- This is main folder where the logics are implemented like:- Login, Signup, bug report etc 

3) lib - This folder consist of all custom libs that are used in this app.
  
  3.1) checkLib.js - This libs is used to check if the o/p is empty.
  
  3.2) logerLib.js - We use loger lib to create logs for each functions

  3.3) validateInputLib.js - This is use to valid email and password entered by user using regex.

  3.4) passwordLib.js - We use this lib to encrypt the password entered by user before saving it in db, it is also used for validating the entered passowrd, if that matched with the password in the db. 

  3.5) redisLib.js - It is used to get all online users in the single hash, to set user online and to remove user from online list when it's disconnected.

  3.6) responseLib.js - It is used to structure the api response.

  3.7) socketlib.js - It consist of socket connection using socket.io. It is used to emit events like verifyUser , onlineUsersList etc 

  Note :- For event docs  /Backend/eventdoc/event.html

  3.8) tokenLib.js - It uses JWT token, to generate token and verify claim.

4) Middleware - Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

5) Models - This is constist of all db schema that are required. 

6) routes - In this file we define all routes and method of the applications
 
   Note :- Rest api docs -  [REST Api](/Backend/apidoc/index.html) :- /Backend/apidoc/index.html

           Event api docs -  [Event docs](/Backend/eventdoc/index.html) :- /Backend/eventdoc/event.html

           These links are not hosted. Please access the docs by visiting the directory as mentioned above.



## Installing - Frontend

### Step - 1

Note : You can skip this steps if you have Node and npm installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) -  to install node (node version >12.0.0)

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) -  install Git

3) Use npm to install Angular CLI as shown below

```
npm install -g @angular/cli
```

### Step - 2

```
cd Frontend
```

1) For windows to install all package dependencies :- 

```
npm install 
```
1) For linus/macOs to install all package dependencies :- 

```
sudo npm install 
```

### Step - 3

To run node server locally

```
ng serve
```

## More about the app

Application consist of:-

1) User Module:-
 a) User Module :- This module is responsible for registering users and admin by asking basic deatils like firstname, Country, phone no etc.

 b) Login - User/admin are able to login using the email and password provided during signup.

 c) Forgot password - User/admin can reset password using a link which is sent to their registered mail.

2) Dashboard component :- In this user can have over view of bugs reported.

3) Issue Module :-

 a) Create issue - In this module user can report bug.

 b) my-list - In this compoenent user can view bugs reported.

##  Intuitive Thinking

This Angular app is responsive which can be viewed on mobile browser, but in this era of mobile app, there is a always a need of mobile version. So that people using this can access it from any where. 

### Solution 

We can built a cross platform app, which can run on web, android and iOS using same code base, this is only if the main Angular app that we have coded is responsive for mobile. Alternatively, we can use [NativeScript](https://www.nativescript.org/) but in that we have to change few things and also have to learn NativeScript cli. 

To avoid such things we can use [Cordova](https://cordova.apache.org/) or [Capacitor](https://capacitor.ionicframework.com/)

#### What is Cordova and Capacitor?

Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.

Capacitor invoke Native SDKs on iOS, Android, and the Web with one code base. Optimized for Ionic Framework apps, or use with any web app framework like Angular, Vuejs etc. 

In this case will use Capacitor as it very well optimized for web app framework in our case Angular. 

### To run iOS and Android app in our local system

#### Step - 1 

To install capacitor

```
npm install --save @capacitor/core @capacitor/cli
```

#### Step -2 

To initialize Capacitor with your app information.(Ignore this step as capacitor.config.json is already configured by author)

```
npx cap init
```
Note :- npx is a new utility available in npm 5 or above that executes local binaries/scripts to avoid global installs

#### Step - 3 

Install [Android Studio](https://developer.android.com/studio)

Install [Xcode](https://developer.apple.com/xcode/)

#### Step - 4

To run android app using Android studio, run below command in Visual studio code it will compile android code and open Android studio automatically then AVD to test app. 

```
npx cap open android
```
To run iOS app locally using Xcode, run below command.

```
npx cap open ios
```

Note:- The app works same as it works on web with all notifications (toastr) and functionality. 


