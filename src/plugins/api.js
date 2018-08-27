import axios from '@src/plugins/axios'
import { BASC_URL } from '@src/config'

const MakeApi = (apiconfig, options) => {
  console.log('api', options)
  if (options && options.BASC_URL) {
    apiconfig.url = options.BASC_URL + apiconfig.url
  } else {
    apiconfig.url = BASC_URL + apiconfig.url
  }
  return axios(apiconfig)
}


export default MakeApi