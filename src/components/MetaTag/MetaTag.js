import React from 'react';
import MetaTags from 'react-meta-tags';

export default function MetaTag() {

  return (
    <div>
          <MetaTags>
            <title>Afunja Music Ⓟ</title>
            <meta name="description" content="Afunja - Afunja Music Publishing Ltd Ⓟ. Afunja Music is African Funk &amp; Jazz." />
            <meta name="author" content="Music by Afolabi Lipede (Flame) and Mark Christopher." />
            <meta property="og:title" content="Afunja Music" />
            <meta property="og:type" content="Afunja Music Website"/>
            <meta property="og:site_name" content="afunja.com"/>
            {/* <meta property="og:image" content="/src/assets/img/og-image.jpg" /> */}
          </MetaTags>
        </div>
  );
}