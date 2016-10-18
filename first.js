'use strict';

module.exports = {
    hello: (event, context, callback) => {
        const body = JSON.parse(event.body);
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, ${body.userName}!`,
            }),
        };
        callback(null, response);
    },
    echo: (event, context, callback) => {
        const body = JSON.parse(event.body);
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                input: body,
            }),
        };
        callback(null, response);
    },

    sandbox: (event, context, callback) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                func: 'select',
                event: event,
                context: context,
            }),
        };
        callback(null, response);
    },
}
