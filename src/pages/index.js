import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/wavy_001.png'
import dotImage from '../assets/images/dot-grid-gry.png'

import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg').default,
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
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
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
          
            <div style={{ backgroundImage: `url(${dotImage})`}} alt="" />
            <img src={dotImage} alt="" />
          </span>
        </div>
      </section>
  </Layout>
);

export default IndexPage;
