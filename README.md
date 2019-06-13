# AWS Step Funtions token demo

Create stack:

```
aws cloudformation package --template-file template.yaml --s3-bucket BUCKET_NAME --output-template-file .template.yaml --force-upload
aws cloudformation deploy --template-file .template.yaml --stack-name aws-ugs --capabilities CAPABILITY_IAM
```

Get token from Dynamodb table

```
aws stepfunctions send-task-success --task-output '{"success": true}' --task-token TOKEN 
```
