import React from "react";
import "./VideoComponent.css";

function VideoComponent({ urlVideo }) {
    return (
        <div className="video-container">
            <iframe
                title="ESPN Video"
                width="640"
                height="360"
                src={urlVideo}
                frameborder="0"
                className="object-fit-cover border rounded video"
            ></iframe>
        </div>
    );
}

export default VideoComponent;
