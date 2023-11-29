import axios from 'axios'

const getAlbumData = () => {
  const apiUrl = process.env.PRD_URL

  return axios.get(`${apiUrl}/getData`)
}

export default getAlbumData
