const {NODE_ENV_USER} = process.env;

const configs = {
  backendUri: null,
};

if (NODE_ENV_USER === 'development') {
  console.log('yaya');
  configs.backendUri = 'http://127.0.0.1:3001';
}
