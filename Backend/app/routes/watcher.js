const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController");
const appConfig = require("../../config/appConfig");
const auth = require('../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/watch`;

    // body params: issueId, userId.
    app.post(`${baseUrl}`, auth.isAuthorized, commentController.addWatcher);

    /**
                    * @apiGroup User Watcher
                    * @apiVersion 0.0.1
                    * @api {post} /api/v1/watch api to add a watcher
                    * 
                    * @apiParam {string} issueId issueId of the issue raised. (body params)(required)
                    * @apiParam {string} watcherId is the same as issueid. (body params)(required)
                    * @apiParam {string} authToken authToken of the user. (header params)(required)
                    * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                    *
                    * 
                    * @apiSuccessExample {object} Success-Response:
                    * {
                      "error": false,
                      "status": 200,
                      "message": "You've successfully added as watcher for the issue",
                      "data":[ 
                     {
	                  "createdOn" : ISODate("2020-05-28T01:39:55.000+05:30"),
	                  "issueId" : "gvGNwUKsQ",
	                  "watcherId" : "5ecc2ad67e24c22bc4567f35",
	                  }
                       
                    ]
                       * @apiErrorExample Error-Response:
                       {
                        "error": true,
                        "message": "Unable to add new watcher",
                        "status": 400,
                        "data": null
                        }
                   */


    app.get(`${baseUrl}/get/issueId/:issueId`, auth.isAuthorized, commentController.getWatchers);

    /**
                    * @apiGroup User Watcher
                    * @apiVersion 0.0.1
                    * @api {get} /api/v1/watch/get/issueId/:issueId api to fetch list of watcher
                    * 
                    * @apiParam {string} issueId issueId of the issue raised. (body params)(required)
                    * @apiParam {string} authToken authToken of the user. (header params)(required)
                    * 
                    * @apiSuccessExample {object} Success-Response:
                    * {
                      "error": false,
                      "status": 200,
                      "message": "watchers fetched",
                      "data":[ 
                      {
	                  "createdOn" : ISODate("2020-05-28T01:39:55.000+05:30"),
	                  "issueId" : "gvGNwUKsQ",
	                  "watcherId" : "5ecc2ad67e24c22bc4567f35",
	                  }
                       
                    ]
                       * @apiErrorExample Error-Response:
                       {
                        "error": true,
                        "message": "No Watchers Found",
                        "status": 204,
                        "data": null
                        }
                   */

}