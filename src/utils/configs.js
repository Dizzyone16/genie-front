import {NODE_ENV, BACKEND_URL_DEVELOPMENT, BACKEND_URL_PRODUCTION} from '@env'

const configs = {
  backendUrl: null,
}

if (NODE_ENV === 'development') {
  configs.backendUrl = BACKEND_URL_DEVELOPMENT
} else if (NODE_ENV === 'production') {
  configs.backendUrl = BACKEND_URL_PRODUCTION
}

export default configs
