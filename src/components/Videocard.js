import React from 'react'


const Videocard = ({info}) => {
    // Log to check the structure of `info`
    console.log(info);

    // Guard clause: Check if info exists
    if (!info || !info.snippet || !info.statistics) {
        return <div>Loading...</div>;  // Show a loading message or placeholder
    }

    // Destructure after confirming `info` is defined
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-4 mx-10 m-2 w-[350px] bg-white rounded-lg shadow-lg transition  hover:scale-105 hover:shadow-2xl'>
    {/* Thumbnail image with rounded corners */}
    <img className='rounded-lg mb-4 w-full  ' alt='thumbnail' src={thumbnails?.medium?.url} />
    
    <ul>
        {/* Channel title */}
        <li className='text-gray-700 font-semibold mb-1 truncate'>{channelTitle}</li>
        
        {/* Video title */}
        <li className='text-gray-900 font-bold mb-2 line-clamp-2'>{title}</li>
        
        {/* View count */}
        <li className='text-gray-500 text-sm'>{statistics.viewCount} views</li>
    </ul>
</div>

    );
}
//Higher order component
export const AdVideoCard = ({info}) =>{
    return (
      <div className='table'>
        <Videocard info={info}/>
      </div>
    );
  } ;

export default Videocard;
