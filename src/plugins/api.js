import axios from '@src/plugins/axios'
import { BASC_URL } from '@src/config'

const MakeApi = (options) => {
  // console.log('api', options)
  if (options && options.BASC_URL) {
    options.url = options.BASC_URL + options.url
  } else {
    options.url = BASC_URL + options.url
  }
  return axios(options)
}


export default MakeApi