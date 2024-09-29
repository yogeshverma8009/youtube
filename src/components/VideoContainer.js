import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import Videocard, { AdVideoCard } from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items);
  };

  return (
<div className='flex flex-wrap '>
  {videos[0] && <AdVideoCard info={videos[0]}/>}
  {videos && videos.length > 0 ? (
    videos.map((video) => (
      <Link to={"/watch?v=" + video.id} key={video.id}>
        <Videocard info={video} />
      </Link>
    ))
  ) : (
    <p>Loading videos...</p> // Or handle empty state as you prefer
  )}
</div>

  )
};



export default VideoContainer