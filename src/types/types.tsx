
export type ExternalUrl = {
  readonly spotify: string
}

export type Image = {
  readonly height: number
  readonly url: string
  readonly width: number
}

export type Artist = {
  readonly externalUrls: readonly ExternalUrl[]
  readonly href: string
  readonly id: string
  readonly name: string
  readonly uri: string
}

export type MediaType = {
  readonly artists: readonly Artist[]
  readonly id: string
  readonly images: readonly Image[]
  readonly title: string
  readonly releaseDate: string
  readonly type: string
}

export type PlaylistType = {
  readonly name: string
}

export type Action = {
  readonly type: string
  readonly payload: any
}

export type ContextType = {
  readonly token: string
  readonly albums: readonly MediaType[]
  readonly playlists: readonly PlaylistType[]
}

export type GenericModalProps = {
  readonly isOpen: boolean
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
