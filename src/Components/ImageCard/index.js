import React from 'react'

import { ImageContainer, Img } from './styles';

export default function ImageCard({ photo }) {
  return (
    <ImageContainer>
      <Img src={photo.urls.small} alt="Photo"/>
    </ImageContainer>
  )
}
