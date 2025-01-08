import { APIGatewayProxyHandler } from 'aws-lambda';
import { handleReaderIntent } from './handlers/readerHandler';

export const handler: APIGatewayProxyHandler = async (event) => {
    const { requestType } = JSON.parse(event.body || '{}');

    if (requestType === 'LaunchRequest') {
        return handleLaunchRequest();
    } else if (requestType === 'IntentRequest') {
        return handleIntentRequest(event);
    } else {
        return handleUnknownRequest();
    }
};

const handleLaunchRequest = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            version: '1.0',
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'Welcome to the memorial information service. You can ask about a deceased person.'
                },
                shouldEndSession: false
            }
        })
    };
};

const handleIntentRequest = async (event: any) => {
    const intentName = event.request.intent.name;

    if (intentName === 'ReaderIntent') {
        return await handleReaderIntent(event);
    } else {
        return handleUnknownRequest();
    }
};

const handleUnknownRequest = () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            version: '1.0',
            response: {
                outputSpeech: {
                    type: 'PlainText',
                    text: 'I\'m sorry, I didn\'t understand that. Please try again.'
                },
                shouldEndSession: true
            }
        })
    };
};