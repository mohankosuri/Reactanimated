import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SigninForm from './SigninForm';

// Helper for image URLs
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Parlle() {
  const parallax = useRef(null);

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        {/* Background Layers */}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        {/* About Page */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}
        >
          <div>
             <SigninForm/>
          </div>
        </ParallaxLayer>

        {/* Contact Page */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        >
          <div>
            <h1>Contact Us</h1>
            <p>Get in touch with us for any inquiries.</p>
          </div>
        </ParallaxLayer>

        {/* Blog Page */}
        <ParallaxLayer
          offset={2}
          speed={0.3}
          
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        >
          <div>
            <h1>Blog</h1>
            <p>Read our latest articles and insights.</p>
          </div>
        </ParallaxLayer>

        {/* Scrollable Interactive Layers */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: 'none' }}
        >
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.6}
          speed={-0.1}
          style={{ opacity: 0.4 }}
        >
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
        >
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
