import React, { useState, useEffect } from "react";
import "../youtube/YouTubeVideo.css";
function YoutubeVideos() {
  const [YoutubeVideo, setvideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA7K1bJ-_3rNGGe7rjb4h84WmXl5gAEoBg&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
    // json is to convert to javascript object
      .then((response) => {
        console.log(response);
      return response.json();
      })
      .then((data) => {
        const youTubeVideoss = data.items;

        console.log(youTubeVideoss);
        setvideos(youTubeVideoss);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100  justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper ">
                Latest Videos
              </div>
             
            </div>
            {YoutubeVideo.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
             
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={vidLink}
                        target="_blank"
                        // rel="noopener noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="Video Thumbnail"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                      <div className="videoDate">
                        {singleVideo.snippet.publishedAt}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
              // So, the return statement in the YoutubeVideos component is crucial for defining what content should be rendered by that component when it's rendered in the application.
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
