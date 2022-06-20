// Hooks for state management and data loading
import React, { useState, useEffect } from "react";  
import './App.css';

function App() {
  const [data, setData] = useState([]);
  
  // Function to help with data fetching
  useEffect(() =>  {
    const fetchData = async() => {
      // Use browser fetch API, wait for data
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        // Take the response and turn it into json
        response => response.json()
      );

      // set result as new value for data
      setData(result);
    };
    fetchData();
  }, []); // Empty array to fetch one time

  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))}
    </div>
  );
}

export default App;
