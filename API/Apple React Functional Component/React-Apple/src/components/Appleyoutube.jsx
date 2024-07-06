import React from "react";

import { useEffect, useState } from "react";
function Appleyoutube() {
  const [YoutubeVideos, setYoutubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      " https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCTDfryXGP88ucF7v3yhDp2WFSXStFixNg"
    )
      .then((response) => response.json())
      .then((data) => {
        setYoutubeVideos(data.items);
      });
  }, []);
  console.log(YoutubeVideos);
  return (
    <section className="youtubeVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center  text-center ">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper ">
              Latest Videos
            </div>
          </div>
          {YoutubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </section>
  );
}
// videoWrapper is a variable that contains JSX representing the structure of each video element in the list of fetched YouTube videos.
export default Appleyoutube;
