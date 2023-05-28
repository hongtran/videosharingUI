import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({videoUrl}) {
    const videoId = extractVideoId(videoUrl);
    function extractVideoId(url) {
        const videoIdRegex = /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/\d{1,2}\/|\/embed\?video_id=|\/embed\?v=|\/embed\/videoseries\?list=)([^#\&\?]{11})/;
        const match = url.match(videoIdRegex);
        return match && match[1] ? match[1] : null;
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
        autoplay: 1,
        },
    };
    
    const onReady = (event) => {
        event.target.pauseVideo();
    };
    
    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

export default VideoPlayer;
