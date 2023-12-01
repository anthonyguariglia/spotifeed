import React from 'react'

type SpotifyIFrameProps = {
  redirectUrl: string
}

export function SpotifyIFrame ({ redirectUrl }: SpotifyIFrameProps) {
  return (
    <iframe src={redirectUrl}></iframe>
  )
}