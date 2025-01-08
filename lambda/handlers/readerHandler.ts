import { APIGatewayProxyResult } from 'aws-lambda';
import { getPersonByName } from '../utils/dynamoDB';

export const handleReaderIntent = async (event: any): Promise<APIGatewayProxyResult> => {
    const personName = event.request.intent.slots.PersonName.value;

    try {
        const personData = await getPersonByName(personName);

        if (!personData) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    outputSpeech: {
                        type: 'PlainText',
                        text: `I'm sorry, I couldn't find any information about ${personName}.`
                    },
                    shouldEndSession: true
                })
            };
        }

        const responseText = `${personData.firstName} ${personData.lastName}, born in ${personData.yearOfBirth}, passed away in ${personData.yearOfDeath}. ${personData.description}`;

        return {
            statusCode: 200,
            body: JSON.stringify({
                outputSpeech: {
                    type: 'PlainText',
                    text: responseText
                },
                shouldEndSession: true
            })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                outputSpeech: {
                    type: 'PlainText',
                    text: 'There was an error processing your request.'
                },
                shouldEndSession: true
            })
        };
    }
};