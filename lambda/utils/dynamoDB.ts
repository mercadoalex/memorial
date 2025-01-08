import * as AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE || 'DeceasedPersons';

export const getPersonByName = async (name: string) => {
    const params = {
        TableName: tableName,
        Key: {
            id: name
        }
    };

    const result = await dynamoDB.get(params).promise();
    return result.Item;
};