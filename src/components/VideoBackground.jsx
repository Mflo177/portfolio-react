import React from 'react';
import './VideoBackground.css'; 


const VideoBackground = () => {
    return (
        <video
            className="video-bg"
            autoPlay
            loop
            muted
            playsInline
            >
                <source src="/video-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.    
        </video>
    );
};

export default VideoBackground;

