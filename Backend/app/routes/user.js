const express = require('express');
const userController = require("../controllers/userController");
const appConfig = require("./../../config/appConfig");

const auth = require('./../middlewares/auth')


const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
//const auth = require('../middlewares/auth');

var upload = multer({ storage: storage })
let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // defining routes.


    app.post(`${baseUrl}/register`, upload.single('photo'), userController.register);

    /**
                * @apiGroup User Manage
                * @apiVersion 0.0.1
                * @api {post} /api/v1/users/register api to register user 
                * 
                * @apiParam {string} name name of the user. (body params)(required)
                * @apiParam {string} email email id of the user. (body params)(required)
                * @apiParam {string} password password of the user. (body params)(required)
                * @apiParam {string} photoUrl image uploaded by the user. (body params)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                *{
                  "error": false,
                  "status": 200,
                  "message": "user registered successfully",
                  "data": {
                     "userId" : "kUsVtRMML",
                     "name" : "Abc",
                     "password" : "$2a$10$7AcDqy4kudbaGS01Ujr/1.XKFGH8smtBCvY/WhF2uTJ2lV31gQb0S",
                     "provider" : "local",
                     "providerId" : "",
                     "photoUrl" : "1590438614248-IMG_20200320_155906.jpg",
                     "createdOn" : "2020-05-26T02:00:14.000+05:30",
                     "email" : "abc@gmail.com",
                       }
                   }
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "unable to register user",
                    "status": 400,
                    "data": null
                    }
               */
    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);

/**
                * @apiGroup User Manage
                * @apiVersion 0.0.1
                * @api {post} /api/v1/users/login api to login user 
                * 
                * @apiParam {string} email email id of the user. (body params)(required)
                * @apiParam {string} password password of the user. (body params)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                *{
                   "error": false,
                   "message": "Login Successful",
                   "status": 200,
                   "data": {
                   "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjVNRHpaRjRnRCIsImlhdCI6MTU5MDUxOTA2NDk1NiwiZXhwIjoxNTkwNjA1NDY0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nQXBwIiwiZGF0YSI6eyJ1c2VySWQiOiJFRUNHVFhjOU8iLCJuYW1lIjoiU2FuZGVlcCIsInByb3ZpZGVyIjoibG9jYWwiLCJwcm92aWRlcklkIjoiIiwicGhvdG9VcmwiOiIxNTg5NzA2NTYxNjQ1LWNvdXBvbi5wbmciLCJfaWQiOiI1ZWMwZmY0MTQ2NjhkMDE5YzhiODFiZGMiLCJlbWFpbCI6ImNoYWtsYWRhci5zYW5kZWVwM0BnbWFpbC5jb20ifX0._g8CNzHJIHeOmV9KrTJzVf-mqXBRSzL8NiOD2H5Ho3I",
                   "userDetails": {
                   "userId": "EECGTXc9O",
                   "name": "Sandeep",
                   "provider": "local",
                   "providerId": "",
                   "photoUrl": "1589706561645-coupon.png",
                   "email": "chakladar.sandeep3@gmail.com"
                       }
                     }
                 }
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "Invalid Username",
                    "status": 400,
                    "data": null
                    }
               */

    app.post(`${baseUrl}/signInSocial`, userController.signInSocial);

     /**
                * @apiGroup User Manage
                * @apiVersion 0.0.1
                * @api {post} /api/v1/users/signInSocial api to register user using social media.
                * 
                * @apiParam {string} name name of the user. (api response)(required)
                * @apiParam {string} email email id of the user. (api params)(required)
                * @apiParam {string} password password of the user. (api params)(required)
                * @apiParam {string} photoUrl image uploaded by the user. (api params)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                *{
                  "error": false,
                  "status": 200,
                  "message": "user registered successfully",
                  "data": {
                     "userId" : "qaXcEC3Jn",
	                 "name" : "sandeep chakladar",
	                 "password" : "",
	                 "provider" : "google",
	                 "providerId" : "101438645230693974729",
	                 "photoUrl" : "https://lh5.googleusercontent.com/-WUY4efDFy8E/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclktSfI_kMIpencZkXGUGYN4I4xRQ/s96-c/photo.jpg",
	                 "createdOn" : ISODate("2020-05-18T20:33:39.000+05:30"),
	                 "email" : "chakladarsandeep3@gmail.com",
                       }
                   }
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "unable to register user",
                    "status": 400,
                    "data": null
                    }
               */

    app.get(`${baseUrl}/get`, auth.isAuthorized, userController.getAllUsers);
     /**
                * @apiGroup User Manage
                * @apiVersion 0.0.1
                * @api {post} /api/v1/users/get api to get list of users.
                * 
                * @apiParam {string} authtoken authtoken of the user. (headers response)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                *{
                   "error": false,
                   "message": "Users data found successfully",
                   "status": 200,
                   "data": [
                    {
                     "_id": "5ec0ff414668d019c8b81bdc",
                     "userId": "EECGTXc9O",
                     "name": "Sandeep"
                    },
                    {
                     "_id": "5ec2a3cb0f016e0894047973",
                     "userId": "qaXcEC3Jn",
                     "name": "sandeep chakladar"
                    },
                    {
                     "_id": "5ecc2ad67e24c22bc4567f35",
                     "userId": "kUsVtRMML",
                     "name": "Abc"
                     }
                        ]
                     }
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "No data found",
                    "status": 404,
                    "data": null
                    }
               */

    app.post(`${baseUrl}/create`, upload.array('photos'), userController.createIssue);


}

module.exports = {
    setRouter: setRouter
}