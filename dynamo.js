'use strict';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

module.exports = {
    insert: (event, context, callback) => {
        const body = JSON.parse(event.body);
        const param = {
            TableName: `${event.requestContext.stage}-comments`,
            Item: {
                id: { "S": body.id },
                user_id: { "S": body.user_id },
            },
        };
        dynamodb.putItem(param, (err, data) => {
            const response = {
                statusCode: 201,
                body: JSON.stringify({
                    func: 'insert',
                    error: err ? err : null,
                    data: data ? data : null,
                }),
            };
            callback(null, response);
        });
    },

    select: (event, context, callback) => {
        const param = {
            TableName: `${event.requestContext.stage}-comments`,
            Limit: 100,
        };
        dynamodb.scan(param, (err, data) => {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    func: 'select',
                    error: err ? err : null,
                    data: data ? data : null,
                }),
            };
            callback(null, response);
        });
    },

    del: (event, context, callback) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                func: 'delete',
            }),
        };
        callback(null, response);
    },
};
