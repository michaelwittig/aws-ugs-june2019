const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async function(event) {
  console.log(JSON.stringify(event));
  return dynamodb.putItem({
    TableName: process.env.TABLE_NAME,
    Item: {
      token: {S: event.token}
    }
  }).promise();
};
