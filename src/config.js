const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "lonestarresumes-1",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://alhfe96qx2.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_o09nD86Uh",
      APP_CLIENT_ID: "6jstb5ulvhj4no88n9chkv1hb3",
      IDENTITY_POOL_ID: "us-east-1:884904a8-9f16-4980-82fa-620d67a5bb55",
    },
    STRIPE_KEY: "pk_test_51HqO1LBZZu9uF7XwmSzLpwuCcMUev9WQLl8yjyLMODegaJUSn1qugRv87euLZIAqiJ9Wj12E0CjTQkM6wKbR38y000Nniy9sU7",
  };
  
  export default config;