import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import Videocard from './Videocard';
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
    <div className='flex flex-wrap scroll-mt-16'>
      {videos.map(video => (
      <Link to={"/watch?v=" + video.id}>
       <Videocard  key={video.id} info={video}/>
    </Link>
    ))}
    </div>
  )
}

export default VideoContainer