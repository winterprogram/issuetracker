/* external libraries */
const mongoose = require('mongoose');
const shortid = require('shortid');
/* Libraries */
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib');
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib');
//to titlecase library
const titleCase = require('title-case');


/* Models */

const WatcherModel = mongoose.model('Watcher');
const CommentModel = mongoose.model('Comment');


let postCommentFunction = (req, res) => {

    let RequestParameterValidate = (req, res) => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.issueId)) {
                logger.error('error issueId can\'t be blank', 'postCommentFunction:RequestParameterValidate', 10);
                let apiResponse = response.generate(true, 'error issueId can\'t be blank', 400, null);
                reject(apiResponse);
            } else if (check.isEmpty(req.body.description)) {
                logger.error('error comment can\t be blank', 'commentController : postCommentFunction=> RequestParameterValidate', 10);
                let apiResponse = response.generate(true, 'error comment can\t be blank', 500, null);
                reject(apiResponse);
            } else if (check.isEmpty(req.body.createdBy)) {
                logger.error('created By is missing in the request', 'commentController : postCommentFunction=> RequestParameterValidate', 10);
                let apiResponse = response.generate(true, 'created by is missing in the request', 400, null);
                reject(apiResponse);
            } else {
                let commentObj = {
                    issueId: req.body.issueId,
                    description: req.body.description,
                    createdBy: req.body.createdBy,
                    createdOn: time.getLocalTime()
                }
                resolve(commentObj);
            }
        });
    }; //end of RequestParameterValidate

    let saveData = (data) => {
        return new Promise((resolve, reject) => {

            let model = new CommentModel(data);
            model.save((err, result) => {
                if (err) {
                    logger.error(err.message, 'commentController:postCommentFunction=>saveData', 10);
                    let apiResponse = response.generate(true, 'Unable to create new comment', 400, null);
                    reject(apiResponse);
                } else {
                    let generatedComment = result.toObject();
                    resolve(generatedComment);
                }
            });
        });
    }; //end of saveData
    RequestParameterValidate(req, res)
        .then(saveData)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Comment added successfully', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            logger.error(err, 'While saving comment', 10);
            res.status(err.status)
            res.send(err)
        });
}; //end of postComment Function


let addWatcherFunction = (req, res) => {
    let RequestParameterValidate = (req, res) => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.issueId)) {
                logger.error('Issue id is missing in the request', 'commentController : addWatcherFunction=> RequestParameterValidate', 10);
                let apiResponse = response.generate(true, 'Issue id is missing in the request', 400, null);
                reject(apiResponse);
            } else if (check.isEmpty(req.body.userId)) {
                logger.error('user id is empty', 'commentController : addWatcherFunction=> RequestParameterValidate', 10);
                let apiResponse = response.generate(true, 'user id is empty', 400, null);
                reject(apiResponse);
            } else {
                resolve();
            }
        });
    }; //end of RequestParameterValidate

    let saveData = () => {
        return new Promise((resolve, reject) => {

            var model = new WatcherModel({
                issueId: req.body.issueId,
                watcherId: req.body.userId,
                createdOn: time.getLocalTime()
            });

            model.save((err, result) => {
                if (err) {
                    logger.error(err.message, 'commentController:addWatcherFunction=>saveData', 10);
                    let apiResponse = response.generate(true, 'Unable to add new watcher', 400, null);
                    reject(apiResponse);
                } else {
                    let generatedWatcher = result.toObject();
                    resolve(generatedWatcher);
                }
            });
        });
    }; //end of saveData
    RequestParameterValidate(req, res)
        .then(saveData)
        .then((resolve) => {
            let apiResponse = response.generate(false, `You've successfully added as watcher for the issue`, 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            logger.error(err, 'While saving watcher', 10);
            res.status(err.status)
            res.send(err)
        });
}; //end of addWatcherFunction

let getCommentFunction = (req, res) => {

    // function to validate params.
    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.issueId)) {
                logger.info('issue id is missing', 'getUsersChat handler', 9)
                let apiResponse = response.generate(true, 'issue id is missing.', 400, null)
                reject(apiResponse)
            } else {
                resolve()
            }
        });
    } // end of the validateParams function.

    let fetchComment = () => {

        return new Promise((resolve, reject) => {
            CommentModel.find({ 'issueId': req.params.issueId })
                .select()
                .sort('-createdOn')
                .skip(parseInt(req.query.skip) || 0)
                .limit(10)
                .populate({ 'path': 'createdBy', 'select': '_id userId name' })
                .lean()
                .exec((err, data) => {
                    if (err) {
                        logger.error('error while fetching comments ' + err, 'issueController: viewByIssueId => validateInput', 10);
                        let apiResponse = response.generate(true, 'error while fetching comments ' + err, 500, null);
                        reject(apiResponse);
                    } else if (check.isEmpty(data)) {
                        logger.info('No Comment Found', 'Comment Controller: getComment=>fetchComment')
                        let apiResponse = response.generate(true, 'No Comment Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let reverseResult = data.reverse()
                        console.log('\n\n\n\n\n\n\nissue')
                        console.log(reverseResult)
                        resolve(reverseResult);
                    }
                });
        });
    }; //end of fetch comments
    validateParams()
        .then(fetchComment)
        .then((result) => {
            let apiResponse = response.generate(false, 'comments fetched', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            res.send(error)
        })
}; //end of getCommentFunction

let getWatchersFunction = (req, res) => {
    // function to validate params.
    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.issueId)) {
                logger.info('issue id is missing', 'commentController: getwatcherfunction=>validateparams', 9)
                let apiResponse = response.generate(true, 'issue id is missing.', 400, null)
                reject(apiResponse)
            } else {
                resolve()
            }
        });
    } // end of the validateParams function.

    let fetchWatchers = () => {
        return new Promise((resolve, reject) => {
            WatcherModel.find({ 'issueId': req.params.issueId })
                .select()
                .sort('-createdOn')
                //.skip(parseInt(req.query.skip) || 0)
                //.limit(2)
                .populate({ 'path': 'watcherId', 'select': '_id userId name' })
                .lean()
                .exec((err, data) => {
                    if (err) {
                        logger.error('error while fetching watcher ' + err, 'Comment Controller: getWatchers=>fetchWatchers', 10);
                        let apiResponse = response.generate(true, 'error while fetching watcher ' + err, 500, null);
                        reject(apiResponse);
                    } else if (check.isEmpty(data)) {
                        logger.info('No Watchers Found', 'Comment Controller: getWatchers=>fetchWatchers')
                        let apiResponse = response.generate(true, 'No Watchers Found', 204, null)
                        reject(apiResponse)
                    } else {
                        let reverseResult = data.reverse()
                        resolve(reverseResult);
                    }
                });
        });
    }; //end of fetch comments
    validateParams()
        .then(fetchWatchers)
        .then((result) => {
            let apiResponse = response.generate(false, 'watchers fetched', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            res.send(error)
        })
}; //end of getWatchersFunction
module.exports = {
     addWatcher: addWatcherFunction,
    getWatchers: getWatchersFunction,
    postComment: postCommentFunction,
    getComment: getCommentFunction
};