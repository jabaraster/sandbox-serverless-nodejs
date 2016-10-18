'use strict';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

module exports = {
    insert: (event, context, callback) => {
        const body = JSON.parse(event.body);
        var response = {
            func: 'insert',
        };
        callback(null, response);
    },

    select: (event, context, callback) => {
        const body = JSON.parse(event.body);
        var response = {
            func: 'select',
        };
        callback(null, response);
    },

    del: (event, context, callback) => {
        const body = JSON.parse(event.body);
        var response = {
            func: 'delete',
        };
        callback(null, response);
    },
};
