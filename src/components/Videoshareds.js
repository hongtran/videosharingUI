import React, { useEffect, useState } from 'react';
import api from '../api';
import VideoPlayer from './VideoPlayer';

function Videoshareds() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/videoshareds');
      setVideos(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <VideoPlayer key={video.id} videoUrl={video.url} />
        ))}
      </ul>
    </div>
  );
}

export default Videoshareds;
