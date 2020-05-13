import axios from 'axios'

const http = axios.create({
  baseURL: 'http://180.76.245.160:8801/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
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
