import { Artist, Image, MediaType, PlaylistType } from "../types/types"

export const mockImage: Image = {
  height: 640,
  width: 640,
  url: 'https://i.scdn.co/image/ab67616d00001e02fc554082225c3ed429d78ad9'
}

export const mockArtist: Artist = {
  externalUrls: [],
  name: 'tones',
  href: '',
  id: '',
  uri: ''
}

export const mockAlbum: MediaType = {
  id: '',
  title: 'My New Album',
  artists: [ mockArtist ],
  releaseDate: '8/27/2022',
  images: [ mockImage ]
}

export const mockPlaylist: PlaylistType = {
  name: 'tony'
}