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

export default function YouTubeAfunja() {
    return (
        <div>
            <YouTube
                videoId="KxSQACrWy6M"
                opts={opts}
            />
            <p>
                <small><strong>Afunja - Afunja</strong></small>
            </p>

            <YouTube
                videoId="MEilIdN8ixk"
                opts={opts}
            />
        </div>
    );
}
