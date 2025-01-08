import { RequestHandler } from 'ask-sdk-core';
import { getPersonByName } from '../../lambda/utils/dynamoDB';

const readerIntent: RequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'ReaderIntent';
    },
    async handle(handlerInput) {
        const personName = handlerInput.requestEnvelope.request.intent.slots?.PersonName?.value;
        if (!personName) {
            const speechText = `I'm sorry, I couldn't understand the name.`;
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        }

        const data = await getPersonByName(personName);

        if (data) {
            const speechText = `The person you asked about is ${data.firstName} ${data.lastName}. They were born in ${data.yearOfBirth} and passed away in ${data.yearOfDeath}. ${data.description}`;
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        } else {
            const speechText = `I'm sorry, I couldn't find any information about ${personName}.`;
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        }
    }
};

export default readerIntent;