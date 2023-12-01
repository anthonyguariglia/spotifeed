import axios from 'axios'

const getAlbumData = (token: string) => {
  const apiUrl = process.env.PRD_URL

  return axios({
    method: 'GET',
    url: `${apiUrl}/getData`,
    headers: {
      token: `Authorization - Bearer ${token}`
    }
  })
}

export default getAlbumData
