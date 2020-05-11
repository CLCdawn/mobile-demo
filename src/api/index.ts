import axios from 'axios'

const http = axios.create({
  baseURL: 'http://180.76.245.160:8801/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    let newData = ''
    for (const k in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
      }
    }
    return newData
  }]
})

function apiAxios ({ method, url, params, response }: { method: any; url: any; params: any; response: any }) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null
  }).then(function (res) {
    response(res)
  }).catch(function (err) {
    response(err)
  })
}

export default {
  get: function (url: any, params: any, response: any) {
    return apiAxios({ method: 'GET', url: url, params: params, response: response })
  },
  post: function (url: any, params: any, response: any) {
    return apiAxios({ method: 'POST', url: url, params: params, response: response })
  },
  put: function (url: any, params: any, response: any) {
    return apiAxios({ method: 'PUT', url: url, params: params, response: response })
  },
  delete: function (url: any, params: any, response: any) {
    return apiAxios({ method: 'DELETE', url: url, params: params, response: response })
  }
}
