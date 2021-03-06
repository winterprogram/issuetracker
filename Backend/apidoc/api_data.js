define({ "api": [
  {
    "group": "User_Comment",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/comments",
    "title": "api user can comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue raised. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>comment entered by user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy user _id. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                  \"error\": false,\n                  \"status\": 200,\n                  \"message\": \"Comment added successfully\",\n                  \"data\":[ \n                 {\n\t              \"_id\" : ObjectId(\"5ecd7540535c8c25c02f46b6\"),\n\t              \"createdOn\" : ISODate(\"2020-05-27T01:30:00.000+05:30\"),\n\t              \"issueId\" : \"gvGNwUKsQ\",\n\t              \"description\" : \"hd\",\n\t              \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\t\n                  }\n                   \n                ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"Unable to create new comment\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/comment.js",
    "groupTitle": "User_Comment",
    "name": "PostApiV1Comments"
  },
  {
    "group": "User_Comment",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/comments/get/issueId",
    "title": "api to fetch comment by issueId",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue raised. (query params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                  \"error\": false,\n                  \"status\": 200,\n                  \"message\": \"Comment added successfully\",\n                  \"data\":[ \n                 {\n\t              \"_id\" : ObjectId(\"5ecd7540535c8c25c02f46b6\"),\n\t              \"createdOn\" : ISODate(\"2020-05-27T01:30:00.000+05:30\"),\n\t              \"issueId\" : \"gvGNwUKsQ\",\n\t              \"description\" : \"hd\",\n\t              \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\t\n                  }\n                   \n                ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"No Comment Found\",\n \"status\": 404,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/comment.js",
    "groupTitle": "User_Comment",
    "name": "PostApiV1CommentsGetIssueid"
  },
  {
    "group": "User_Issue",
    "version": "0.0.1",
    "type": "get",
    "url": "/get/count",
    "title": "api to get count of issues.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>bug reported by. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                     \"error\": false,\n                     \"status\": 200,\n                     \"message\": \"Found\",\n                     \"data\":[ \n                         {\n               \n                         allIssues: 3,\n                         inProgress: 4,\n                         inBacklog: 1,\n                         inTest: 2,\n                         inDone: 7\n                    }\n                   ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"failed to fetch count\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "User_Issue",
    "name": "GetGetCount"
  },
  {
    "group": "User_Issue",
    "version": "0.0.1",
    "type": "post",
    "url": "/get/all",
    "title": "api to get list of issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>bug reported by. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                     \"error\": false,\n                     \"status\": 200,\n                     \"message\": \"issue found\",\n                     \"data\":[ \n                         {\n                    \"attachment\" : [\n                    \"1590430109400-IMG_20200320_155906.jpg\"\n                      ],\n                   \"status\" : \"In-Progress\",\n                   \"issueId\" : \"Tui2fmKTo\",\n                   \"title\" : \"Hdbdh\",\n                   \"description\" : \"<p>ejbfejk</p>\",\n                   \"assignedTo\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"modifiedBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"createdOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\"),\n                   \"lastModifiedOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\")\n                   }\n                   ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"failed to fetch issue\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "User_Issue",
    "name": "PostGetAll"
  },
  {
    "group": "User_Issue",
    "version": "0.0.1",
    "type": "post",
    "url": "/get/createdby/:createdBy",
    "title": "api to get list of issue by user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>bug reported by. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                     \"error\": false,\n                     \"status\": 200,\n                     \"message\": \"issue found for user\",\n                     \"data\":[ \n                         {\n                    \"attachment\" : [\n                    \"1590430109400-IMG_20200320_155906.jpg\"\n                      ],\n                   \"status\" : \"In-Progress\",\n                   \"issueId\" : \"Tui2fmKTo\",\n                   \"title\" : \"Hdbdh\",\n                   \"description\" : \"<p>ejbfejk</p>\",\n                   \"assignedTo\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"modifiedBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n                   \"createdOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\"),\n                   \"lastModifiedOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\")\n                   },\n                   {\n\t                 \"attachment\" : [\n\t\t                \"1589816281538-CIRP Cost Conglome_1_Page_1 (1).jpg\"\n\t                    ],\n\t                 \"status\" : \"In-Backlog\",\n\t                \"issueId\" : \"gvGNwUKsQ\",\n\t                \"title\" : \"Csbcd\",\n\t                \"description\" : \"<p>cshcsaj</p>\",\n\t                \"assignedTo\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                \"modifiedBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                 \"createdOn\" : ISODate(\"2020-05-18T21:08:01.000+05:30\"),\n\t                \"lastModifiedOn\" : ISODate(\"2020-05-18T21:08:01.000+05:30\"),\n\t\n                     }\n                   ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"failed to fetch issue\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "User_Issue",
    "name": "PostGetCreatedbyCreatedby"
  },
  {
    "group": "User_Issue",
    "version": "0.0.1",
    "type": "post",
    "url": "/get/reportedBy/:assignedTo",
    "title": "api to assign issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the bug. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the bug. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the bug entered by user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>list of user whom to assign. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>bug reported by. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>bug modified by by. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                      \"error\": false,\n                      \"status\": 200,\n                      \"message\": \"issue was reported successfully\",\n                      \"data\":[ \n                          {\n\t                 \"attachment\" : [\n\t\t             \"1590430109400-IMG_20200320_155906.jpg\"\n\t                   ],\n\t                \"status\" : \"In-Progress\",\n\t                \"issueId\" : \"Tui2fmKTo\",\n\t                \"title\" : \"Hdbdh\",\n\t                \"description\" : \"<p>ejbfejk</p>\",\n\t                \"assignedTo\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                \"createdBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                \"modifiedBy\" : ObjectId(\"5ec0ff414668d019c8b81bdc\"),\n\t                \"createdOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\"),\n\t                \"lastModifiedOn\" : ISODate(\"2020-05-25T23:38:29.000+05:30\")\n                    }\n                    ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"Unable to add new issue\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "User_Issue",
    "name": "PostGetReportedbyAssignedto"
  },
  {
    "group": "User_Manage",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/get",
    "title": "api to get list of users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authtoken",
            "description": "<p>authtoken of the user. (headers response)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                   \"error\": false,\n                   \"message\": \"Users data found successfully\",\n                   \"status\": 200,\n                   \"data\": [\n                    {\n                     \"_id\": \"5ec0ff414668d019c8b81bdc\",\n                     \"userId\": \"EECGTXc9O\",\n                     \"name\": \"Sandeep\"\n                    },\n                    {\n                     \"_id\": \"5ec2a3cb0f016e0894047973\",\n                     \"userId\": \"qaXcEC3Jn\",\n                     \"name\": \"sandeep chakladar\"\n                    },\n                    {\n                     \"_id\": \"5ecc2ad67e24c22bc4567f35\",\n                     \"userId\": \"kUsVtRMML\",\n                     \"name\": \"Abc\"\n                     }\n                        ]\n                     }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"No data found\",\n \"status\": 404,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User_Manage",
    "name": "PostApiV1UsersGet"
  },
  {
    "group": "User_Manage",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api to login user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                   \"error\": false,\n                   \"message\": \"Login Successful\",\n                   \"status\": 200,\n                   \"data\": {\n                   \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjVNRHpaRjRnRCIsImlhdCI6MTU5MDUxOTA2NDk1NiwiZXhwIjoxNTkwNjA1NDY0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nQXBwIiwiZGF0YSI6eyJ1c2VySWQiOiJFRUNHVFhjOU8iLCJuYW1lIjoiU2FuZGVlcCIsInByb3ZpZGVyIjoibG9jYWwiLCJwcm92aWRlcklkIjoiIiwicGhvdG9VcmwiOiIxNTg5NzA2NTYxNjQ1LWNvdXBvbi5wbmciLCJfaWQiOiI1ZWMwZmY0MTQ2NjhkMDE5YzhiODFiZGMiLCJlbWFpbCI6ImNoYWtsYWRhci5zYW5kZWVwM0BnbWFpbC5jb20ifX0._g8CNzHJIHeOmV9KrTJzVf-mqXBRSzL8NiOD2H5Ho3I\",\n                   \"userDetails\": {\n                   \"userId\": \"EECGTXc9O\",\n                   \"name\": \"Sandeep\",\n                   \"provider\": \"local\",\n                   \"providerId\": \"\",\n                   \"photoUrl\": \"1589706561645-coupon.png\",\n                   \"email\": \"chakladar.sandeep3@gmail.com\"\n                       }\n                     }\n                 }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"Invalid Username\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User_Manage",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User_Manage",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/register",
    "title": "api to register user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photoUrl",
            "description": "<p>image uploaded by the user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                  \"error\": false,\n                  \"status\": 200,\n                  \"message\": \"user registered successfully\",\n                  \"data\": {\n                     \"userId\" : \"kUsVtRMML\",\n                     \"name\" : \"Abc\",\n                     \"password\" : \"$2a$10$7AcDqy4kudbaGS01Ujr/1.XKFGH8smtBCvY/WhF2uTJ2lV31gQb0S\",\n                     \"provider\" : \"local\",\n                     \"providerId\" : \"\",\n                     \"photoUrl\" : \"1590438614248-IMG_20200320_155906.jpg\",\n                     \"createdOn\" : \"2020-05-26T02:00:14.000+05:30\",\n                     \"email\" : \"abc@gmail.com\",\n                       }\n                   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"unable to register user\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User_Manage",
    "name": "PostApiV1UsersRegister"
  },
  {
    "group": "User_Manage",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/users/signInSocial",
    "title": "api to register user using social media.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user. (api response)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user. (api params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (api params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photoUrl",
            "description": "<p>image uploaded by the user. (api params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                  \"error\": false,\n                  \"status\": 200,\n                  \"message\": \"user registered successfully\",\n                  \"data\": {\n                     \"userId\" : \"qaXcEC3Jn\",\n\t                 \"name\" : \"sandeep chakladar\",\n\t                 \"password\" : \"\",\n\t                 \"provider\" : \"google\",\n\t                 \"providerId\" : \"101438645230693974729\",\n\t                 \"photoUrl\" : \"https://lh5.googleusercontent.com/-WUY4efDFy8E/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclktSfI_kMIpencZkXGUGYN4I4xRQ/s96-c/photo.jpg\",\n\t                 \"createdOn\" : ISODate(\"2020-05-18T20:33:39.000+05:30\"),\n\t                 \"email\" : \"chakladarsandeep3@gmail.com\",\n                       }\n                   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n \"error\": true,\n \"message\": \"unable to register user\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User_Manage",
    "name": "PostApiV1UsersSigninsocial"
  },
  {
    "group": "User_Watcher",
    "version": "0.0.1",
    "type": "get",
    "url": "/api/v1/watch/get/issueId/:issueId",
    "title": "api to fetch list of watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue raised. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                      \"error\": false,\n                      \"status\": 200,\n                      \"message\": \"watchers fetched\",\n                      \"data\":[ \n                      {\n\t                  \"createdOn\" : ISODate(\"2020-05-28T01:39:55.000+05:30\"),\n\t                  \"issueId\" : \"gvGNwUKsQ\",\n\t                  \"watcherId\" : \"5ecc2ad67e24c22bc4567f35\",\n\t                  }\n                       \n                    ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"No Watchers Found\",\n \"status\": 204,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/watcher.js",
    "groupTitle": "User_Watcher",
    "name": "GetApiV1WatchGetIssueidIssueid"
  },
  {
    "group": "User_Watcher",
    "version": "0.0.1",
    "type": "post",
    "url": "/api/v1/watch",
    "title": "api to add a watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue raised. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherId",
            "description": "<p>is the same as issueid. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (header params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "API",
            "description": "<p>Response shows error status, message, http status code and result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                      \"error\": false,\n                      \"status\": 200,\n                      \"message\": \"You've successfully added as watcher for the issue\",\n                      \"data\":[ \n                     {\n\t                  \"createdOn\" : ISODate(\"2020-05-28T01:39:55.000+05:30\"),\n\t                  \"issueId\" : \"gvGNwUKsQ\",\n\t                  \"watcherId\" : \"5ecc2ad67e24c22bc4567f35\",\n\t                  }\n                       \n                    ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"Unable to add new watcher\",\n \"status\": 400,\n \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/watcher.js",
    "groupTitle": "User_Watcher",
    "name": "PostApiV1Watch"
  }
] });
