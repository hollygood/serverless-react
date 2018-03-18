export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  apiGateway: {
    URL: "https://bqanbakh5b.execute-api.us-east-2.amazonaws.com/prod",
    REGION: "us-east-2"
  },

  s3: {
    BUCKET: "serverless-react-api-pro-serverlessdeploymentbuck-1ucd3jsulvsbd"
  },

  cognito: {
    USER_POOL_ID: "us-east-2_luKn0Fe8o",
    APP_CLIENT_ID: "8mk6tqtml86f90abfbdkq3dd7",
    REGION: "us-east-2",
    IDENTITY_POOL_ID: "us-east-2:4fa42922-0d02-444b-83a6-0cf3613c68f2",
  }
};
