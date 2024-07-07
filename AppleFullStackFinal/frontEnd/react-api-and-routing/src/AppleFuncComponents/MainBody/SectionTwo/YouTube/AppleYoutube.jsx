import {useEffect, useState} from 'react'


function AppleYoutube() {


  const[youTubeVideos,  setYouTubeVideos ] = useState([]);


  useEffect(()=>{
    fetch("https://www.googleapis.com/youtube/v3/search?key={yourapi key}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
.then((res)=>res.json())
.then((data)=>{
  // console.log('YouTube videos fetched:', data);
  setYouTubeVideos(data.items)  // update state with fetched YouTube videos
  // console.log((data.items));
});

}, []);  // empty dependency array to run the effect only once when the component mounts


// console.log(youTubeVideos);
  return (
    <section className='youTubeVideosWrapper'> 
    <div className='allVideosWrapper'>
      <div className="container">

        <div className='row justify-content-center  text-center'>
          <div className='col-12'>
            <div className="title-Wrapper">
              <br />
              <h1>Latest Videos</h1>
              <br />
            </div>
          </div>
          {youTubeVideos?.map((singleVideo, i)=>{

            let videId = singleVideo.id.videoId;
            // console.log('Video ID:', videId);
            let videLink =` https://www.youtube.com/watch?v=${videId}`;
            //  console.log('Video Link:', videLink);
            // console.log('Video Title:', singleVideo.snippet.title);
            //   console.log('Video Description:', singleVideo.snippet.description);
            //   console.log('Video Thumbnail URL:', singleVideo.snippet.thumbnails.high.url);

            let videoWrapper = (
              <div key={i}  className='col-sm-12 col-md-6 col-lg-4' >
<div className='singleVideoWrapper'>
  <div className='videoThumbnail'> <a href={videLink} target='_blank' rel='noreferrer'>
    <img src={singleVideo.snippet.thumbnails.high.url}  alt='thumbnails'/> {singleVideo.snippet.title}
  </a>
    
    </div>
    <div className='videoDesc'>
      {singleVideo.snippet.description}
      
      
      </div>
              </div>
              </div>
              

            );
            // console.log( videoWrapper);


            return videoWrapper;

          })}
        </div>
      </div>
          
      </div>
      </section>
  )
}

export default AppleYoutube