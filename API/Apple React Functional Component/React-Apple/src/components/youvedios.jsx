import React from "react";
import { useEffect, useState } from "react";

function youvedios() {
  const [YoutubeVideos, setYoutubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCTDfryXGP88ucF7v3yhDp2WFSXStFixNg "
    )
      .then((response) => response.json())
      .then((data) => {
        setYoutubeVideos(data.items);
      });
  }, []);
  console.log(YoutubeVideos);
}

export default youvedios;
