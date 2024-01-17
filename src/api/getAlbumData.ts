import axios from 'axios'

const apiUrl: string = process.env.environment === 'development' ? 'http://localhost:4000' : 'https://pure-harbor-08948.herokuapp.com'

const getAlbumData = () => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/get-data`
  }).then(resp => resp.data)
}

export default getAlbumData
