export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "	pk_test_51Gs1j5CuXjSgfXdZVxT9ds0DiiBVfmoAUVUZLhk7EpVPcHUFlPGYjM6eitdTKHWNWQJsWPzwmjlDTFuE2j5FqYhr00EEhvglPH",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-sarah"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ldfcdpruw9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aeKfOxfVz",
    APP_CLIENT_ID: "1e0ilenjcl18hipfq57crpibhc",
    IDENTITY_POOL_ID: "us-east-1:2404e221-2f1b-4609-ac16-73d7cf6e4157"
  }
};