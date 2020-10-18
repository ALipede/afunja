import React from 'react'
import YouTube from 'react-youtube'

const opts = {
    height: 340,
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

export default function YouTubeColours() {
    return (
        <div>
            <YouTube
                videoId="MEilIdN8ixk"
                opts={opts}
            />
            <p>
                <small><strong>Afunja - Colours</strong> (Instrumental)
                <br />
                    <em>Featuring Dele Sosimi on keyboard solo, Kate Luxmoore on clarinet and Lekan Babalola on percussion.</em></small>
            </p>
        </div>
    );
}
