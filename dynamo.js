'use strict';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

module.exports = {
    insert: (event, context, callback) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                func: 'insert',
            }),
        };
        callback(null, response);
    },

    select: (event, context, callback) => {
        const param = {
            //TableName: `${event.requestContext.stage}-comments`,
            Limit: 100,
        };
        dynamodb.listTables(param, (err, data) => {
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
