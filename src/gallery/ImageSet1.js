import React from "react";
import TestGallery from "../components/TestGallery";

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg').default,
    title: 'Great Sky',
    desc: 'Be one with the Universe',
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg').default,
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg').default,
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg').default,
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg').default,
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg').default,
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
];

export default function ImageSet1() {
  return (
    <TestGallery images={img_set_1} />
  );
}