var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://congress.api.app/"',
  SAVE_PATH: '"index.php"',
  UPLOAD_IMAGE_PATH: '"upload_image.php"',
  CONFIRM_EMAIL_PATH: '"validate_email.php"'
})
