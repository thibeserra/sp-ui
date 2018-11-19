import axios from 'axios';

export async function makeRequest(method, endpoint) {
    const header = {
        headers: {
            'Content-Type': 'application/json',
            authorization: 'token'
        }
    }

    switch (method) {
        case 'get':
            try {
                const result = await axios.get(endpoint, header)
                return (result)
            } catch (e) {
                console.log(e)
            }
            break
    }
}

const request = (() => {
    const requestObject = {}
    const methods = ['get', 'post', 'put', 'patch', 'delete']
    const acceptedArgs = ['body', 'headers']
    methods.forEach(method => {
      requestObject[method] = (endpoint, args = {}, argsMessage = {}) => {
        const invalidOptions = Object.keys(args).filter(
          value => !acceptedArgs.includes(value)
        )
        if (invalidOptions.length) {
          return Promise.reject(
            new Error(
              `invalid ${
                invalidOptions.length <= 1 ? 'option' : 'options'
              } ${invalidOptions} passed to request.${method}`
            )
          )
        }
        return makeRequest(method, endpoint, args.body, argsMessage)
      }
    })
    return requestObject
  })()

  export default request