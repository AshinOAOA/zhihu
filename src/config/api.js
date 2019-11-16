import jsonp from './jsonp'

const options = {
  param:'jsonpCallback',
}

export default (url,data) => {
  return jsonp(url,data,options)
}