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

export default function YouTubeAfunjaBass() {
    return (
        <div>
            <YouTube
                videoId="_weGxRrwx64"
                opts={opts}
            />
            <p>
                <small><strong>Afunja - Afunja</strong></small>
            </p>
        </div>
    );
}
