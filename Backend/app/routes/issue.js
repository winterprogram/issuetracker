const express = require('express');
const router = express.Router();
const issueController = require("../controllers/issueController");
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

var upload = multer({
    storage: storage
});
module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issues`;

    // params: email, password.
    app.post(`${baseUrl}/get/reportedBy/:assignedTo`, auth.isAuthorized, issueController.getIssuesReporterWise);
    /**
                    * @apiGroup User Issue
                    * @apiVersion 0.0.1
                    * @api {post} /get/reportedBy/:assignedTo api to assign issue. 
                    * 
                    * @apiParam {string} status status of the bug. (body params)(required)
                    * @apiParam {string} title title of the bug. (body params)(required)
                    * @apiParam {string} description description of the bug entered by user. (body params)(required)
                    * @apiParam {string} assignedTo list of user whom to assign. (body params)(required)
                    * @apiParam {string} createdBy bug reported by. (body params)(required)
                    * @apiParam {string} modifiedBy bug modified by by. (body params)(required)
                    * @apiParam {string} authToken authToken of the user. (header params)(required)
                    * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                    * 
                    * 
                    * @apiSuccessExample {object} Success-Response:
                    * {
                      "error": false,
                      "status": 200,
                      "message": "issue was reported successfully",
                      "data":[ 
                          {
	                 "attachment" : [
		             "1590430109400-IMG_20200320_155906.jpg"
	                   ],
	                "status" : "In-Progress",
	                "issueId" : "Tui2fmKTo",
	                "title" : "Hdbdh",
	                "description" : "<p>ejbfejk</p>",
	                "assignedTo" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                "modifiedBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                "createdOn" : ISODate("2020-05-25T23:38:29.000+05:30"),
	                "lastModifiedOn" : ISODate("2020-05-25T23:38:29.000+05:30")
                    }
                    ]
                       * @apiErrorExample Error-Response:
                       {
                        "error": true,
                        "message": "Unable to add new issue",
                        "status": 400,
                        "data": null
                        }
                   */
    //get all issues
    app.post(`${baseUrl}/get/all`, auth.isAuthorized, issueController.getAllIssue);

    /**
                   * @apiGroup User Issue
                   * @apiVersion 0.0.1
                   * @api {post} /get/all api to get list of issue. 
                   * 
                   * @apiParam {string} createdBy bug reported by. (body params)(required)
                   * @apiParam {string} authToken authToken of the user. (header params)(required)
                   * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                   * 
                   * 
                   * @apiSuccessExample {object} Success-Response:
                   * {
                     "error": false,
                     "status": 200,
                     "message": "issue found",
                     "data":[ 
                         {
                    "attachment" : [
                    "1590430109400-IMG_20200320_155906.jpg"
                      ],
                   "status" : "In-Progress",
                   "issueId" : "Tui2fmKTo",
                   "title" : "Hdbdh",
                   "description" : "<p>ejbfejk</p>",
                   "assignedTo" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "modifiedBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "createdOn" : ISODate("2020-05-25T23:38:29.000+05:30"),
                   "lastModifiedOn" : ISODate("2020-05-25T23:38:29.000+05:30")
                   }
                   ]
                      * @apiErrorExample Error-Response:
                      {
                       "error": true,
                       "message": "failed to fetch issue",
                       "status": 400,
                       "data": null
                       }
                  */

    app.get(`${baseUrl}/get/count`, auth.isAuthorized, issueController.getCountDasboard);

    /**
                   * @apiGroup User Issue
                   * @apiVersion 0.0.1
                   * @api {get} /get/count api to get count of issues. 
                   * 
                   * @apiParam {string} createdBy bug reported by. (body params)(required)
                   * @apiParam {string} authToken authToken of the user. (header params)(required)
                   * 
                   * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                   * 
                   * 
                   * @apiSuccessExample {object} Success-Response:
                   * {
                     "error": false,
                     "status": 200,
                     "message": "Found",
                     "data":[ 
                         {
               
                         allIssues: 3,
                         inProgress: 4,
                         inBacklog: 1,
                         inTest: 2,
                         inDone: 7
                    }
                   ]
                      * @apiErrorExample Error-Response:
                      {
                       "error": true,
                       "message": "failed to fetch count",
                       "status": 400,
                       "data": null
                       }
                  */

    app.get(`${baseUrl}/view/:issueId`, auth.isAuthorized, issueController.viewByIssueId);


    app.post(`${baseUrl}/get/createdby/:createdBy`, auth.isAuthorized, issueController.getAllIssuePostedByUser);
    
    /**
                   * @apiGroup User Issue
                   * @apiVersion 0.0.1
                   * @api {post} /get/createdby/:createdBy api to get list of issue by user. 
                   * 
                   * @apiParam {string} createdBy bug reported by. (body params)(required)
                   * @apiParam {string} authToken authToken of the user. (header params)(required)
                   * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                   * 
                   * 
                   * @apiSuccessExample {object} Success-Response:
                   * {
                     "error": false,
                     "status": 200,
                     "message": "issue found for user",
                     "data":[ 
                         {
                    "attachment" : [
                    "1590430109400-IMG_20200320_155906.jpg"
                      ],
                   "status" : "In-Progress",
                   "issueId" : "Tui2fmKTo",
                   "title" : "Hdbdh",
                   "description" : "<p>ejbfejk</p>",
                   "assignedTo" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "modifiedBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
                   "createdOn" : ISODate("2020-05-25T23:38:29.000+05:30"),
                   "lastModifiedOn" : ISODate("2020-05-25T23:38:29.000+05:30")
                   },
                   {
	                 "attachment" : [
		                "1589816281538-CIRP Cost Conglome_1_Page_1 (1).jpg"
	                    ],
	                 "status" : "In-Backlog",
	                "issueId" : "gvGNwUKsQ",
	                "title" : "Csbcd",
	                "description" : "<p>cshcsaj</p>",
	                "assignedTo" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                "modifiedBy" : ObjectId("5ec0ff414668d019c8b81bdc"),
	                 "createdOn" : ISODate("2020-05-18T21:08:01.000+05:30"),
	                "lastModifiedOn" : ISODate("2020-05-18T21:08:01.000+05:30"),
	
                     }
                   ]
                      * @apiErrorExample Error-Response:
                      {
                       "error": true,
                       "message": "failed to fetch issue",
                       "status": 400,
                       "data": null
                       }
                  */

    app.post(`${baseUrl}/create/:issueId/upload`, upload.single('photo'), auth.isAuthorized, issueController.uploadPhoto);
    //delete photo
    app.delete(`${baseUrl}/delete/photo`, auth.isAuthorized, issueController.deletePhoto);

    app.put(`${baseUrl}/:issueId`, auth.isAuthorized, issueController.updateIssue);
}