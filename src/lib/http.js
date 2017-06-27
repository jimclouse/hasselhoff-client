import request from 'superagent-bluebird-promise'
export function post (path, data){
  if(path.indexOf('https') === -1)
    path = `${process.env.REACT_APP_HASSELHOFF_SERVER}/${path}`
console.log('HTTP POST path %s data %s', path, JSON.stringify(data));
  return request
    .post(path)
    .timeout(60000)
    .withCredentials(true)
    .send(data)
    .then((res) => {
      return res.text?JSON.parse(res.text):null
    })
    .catch((error)=> {
      if(error.status === 403) {
        console.log('server side error: %s', JSON.stringify(error));
          throw Error(error.message)
      }
      else {
        console.log('EPI POST ERROR %s PATH %s DATA %s', JSON.stringify(error), path, JSON.stringify(data))
        throw Error(error.message)
      }
    })
}
export function get (path){
  if(path.indexOf('https') === -1)
    path = `${process.env.REACT_APP_HASSELHOFF_SERVER}/${path}`
  return request
    .get(path)
    .timeout(60000)
    .withCredentials(true)
    .then((res) => {
      return JSON.parse(res.text)
    })
    .catch((error) => {
      if(error.status === 403) {
        console.log('server side error: %s', JSON.stringify(error));
          throw Error(error.message)
      }
      else {
        console.log('EPI GET ERROR %s PATH %s', JSON.stringify(error), path)
        throw Error(error.message)
      }
    })
}
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
