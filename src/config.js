
let DEV = {}
DEV.API_URL = 'http://congress-api.app/'
DEV.SAVE_PATH = DEV.API_URL + 'index.php'
DEV.UPLOAD_IMAGE_PATH = DEV.API_URL + 'upload_image.php'
DEV.CONFIRM_EMAIL_PATH = DEV.API_URL + 'validate_email.php'

let PRODUCTION = {}
PRODUCTION.API_URL = 'http://congress.codeams.me/api/v1/'
PRODUCTION.SAVE_PATH = PRODUCTION.API_URL + 'index.php'
PRODUCTION.UPLOAD_IMAGE_PATH = PRODUCTION.API_URL + 'upload_image.php'
PRODUCTION.CONFIRM_EMAIL_PATH = PRODUCTION.API_URL + 'validate_email.php'

const config = DEV

export default config
