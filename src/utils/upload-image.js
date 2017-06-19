
import Axios from 'axios'
import config from '@/config'

let base64ToBlob = (base64, mime) => {
  mime = mime || ''
  var sliceSize = 1024
  var byteChars = window.atob(base64)
  var byteArrays = []

  for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
    var slice = byteChars.slice(offset, offset + sliceSize)

    var byteNumbers = new Array(slice.length)
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    var byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, {type: mime})
}

let uploadImage = (image) => {
  return new Promise((resolve, reject) => {
    if (!image) {
      resolve('')
      return
    }

    let extension
    try {
      extension = image.match(/(png|jpg|jpeg)/g)[0];
    } catch (typeError) {
      alert('El ticket debe ser una imagen.')
      reject(typeError)
      return
    }

    let base64ImageContent = image.replace(/^data:image\/(png|jpg|jpeg);base64,/, '')
    let blob = base64ToBlob(base64ImageContent, 'image/png')

    let data = new FormData()
    data.append('image', blob)
    data.append('extension', extension)

    Axios.post(config.UPLOAD_IMAGE_PATH, data)
      .then(response => {
        resolve(response.data['image_relative_path'])
      }).catch(error => {
        reject(error)
      })
  })
}

export default uploadImage
