const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController");
const appConfig = require("../../config/appConfig");
const auth = require('../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/comments`;

    app.post(`${baseUrl}`, auth.isAuthorized, commentController.postComment);

    /**
                * @apiGroup User Comment
                * @apiVersion 0.0.1
                * @api {post} /api/v1/comments api user can comment 
                * 
                * @apiParam {string} issueId issueId of the issue raised. (body params)(required)
                * @apiParam {string} description comment entered by user. (body params)(required)
                * @apiParam {string} createdBy createdBy user _id. (body params)(required)
                * @apiParam {string} authToken authToken of the user. (header params)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                * {
                  "error": false,
                  "status": 200,
                  "message": "Comment added successfully",
                  "data":[ 
                 {
	              "_id" : ObjectId("5ecd7540535c8c25c02f46b6"),
	              "createdOn" : ISODate("2020-05-27T01:30:00.000+05:30"),
	              "issueId" : "gvGNwUKsQ",
	              "description" : "hd",
	              "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),	
                  }
                   
                ]
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "Unable to create new comment",
                    "status": 400,
                    "data": null
                    }
               */
    app.get(`${baseUrl}/get/issueId/:issueId`, auth.isAuthorized, commentController.getComment);

/**
                * @apiGroup User Comment
                * @apiVersion 0.0.1
                * @api {post} /api/v1/comments/get/issueId api to fetch comment by issueId
                * 
                * @apiParam {string} issueId issueId of the issue raised. (query params)(required)
                * @apiParam {string} authToken authToken of the user. (header params)(required)
                * 
                * @apiSuccess {object}  API Response shows error status, message, http status code and result.
                * 
                * @apiSuccessExample {object} Success-Response:
                * {
                  "error": false,
                  "status": 200,
                  "message": "Comment added successfully",
                  "data":[ 
                 {
	              "_id" : ObjectId("5ecd7540535c8c25c02f46b6"),
	              "createdOn" : ISODate("2020-05-27T01:30:00.000+05:30"),
	              "issueId" : "gvGNwUKsQ",
	              "description" : "hd",
	              "createdBy" : ObjectId("5ec0ff414668d019c8b81bdc"),	
                  }
                   
                ]
                   * @apiErrorExample Error-Response:
                   { 
                    "error": true,
                    "message": "No Comment Found",
                    "status": 404,
                    "data": null
                    }
               */
}