import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoGallery() {
  const [videos, setVideos] = useState([
    {id:1, title:"React with Chatgpt", date:"10/04/2023"},
    {id:2, title:"React with Chatgpt", date:"10/04/2023"},
    {id:3, title:"React with Chatgpt", date:"10/04/2023"},
    {id:4, title:"React with Chatgpt", date:"10/04/2023"},
    {id:5, title:"React with Chatgpt", date:"10/04/2023"}
]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get('http://localhost:5000/api/videos');
      setVideos(response.data);
    console.log(response)
    }
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Video Gallery</h1>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-4" key={video.id}>
            <div className="card mb-4 shadow-sm">
              <video className="card-img-top" controls>
                <source src={`http://localhost:5000/api/video/${video.id}`} type="video/mp4" />
              </video>
              <div className="card-body">
                <p className="card-text">{video.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{video.date}</small>
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
