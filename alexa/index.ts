import * as Alexa from 'ask-sdk-core';
import readerIntent from './intents/readerIntent';

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        readerIntent
    )
    .addErrorHandlers((handlerInput, error) => {
        console.log(`Error handled: ${error.message}`);
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    })
    .lambda();