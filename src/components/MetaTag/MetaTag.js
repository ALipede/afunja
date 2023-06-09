import React from 'react';
import MetaTags from 'react-meta-tags';

export default function MetaTag() {

  return (
    <div>
          <MetaTags>
            <title>Afunja Ⓟ</title>
            <meta name="description" content="Afunja - African Funk &amp; Jazz. Afunja Music Publishing Ltd Ⓟ." />
            <meta name="author" content="Afunja Music by Afolabi Lipede (Flame) and Mark Christopher." />
            <meta name="copyright" content="Copyrights © Afunja Music Publishing Ltd Ⓟ and igi iroko | multimedia." />
            <meta property="og:locale" content="en_UK" />
            <meta property="og:title" content="Afunja Ⓟ" />
            <meta property="og:type" content="Afunja Music Website"/>
            <meta property="og:site_name" content="afunja.com"/>
            <meta property="og:image" content="./../../assets/img/afunja-fb-cover.jpg" />
            <meta property="og:url" content="https://afunja.com" />
            <meta property="twitter:image" content="./../../assets/img/afunja-tw-cover.jpg" />
            <meta property="twitter:description" content="Afunja - African Funk &amp; Jazz. Afunja Music by Afolabi Lipede (Flame) and Mark Christopher." />
          </MetaTags>
        </div>
  );
}