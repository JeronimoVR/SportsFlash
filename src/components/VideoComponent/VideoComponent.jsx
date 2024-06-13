import React from "react";
import "./VideoComponent.css";

function VideoComponent({ urlVideo,classStyle,nameVideo }) {
    return (
        <div className={classStyle}>
            <iframe
                title={nameVideo}
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
