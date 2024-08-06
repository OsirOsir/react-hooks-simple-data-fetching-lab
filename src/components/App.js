import React, { useEffect, useState } from 'react';

function App() {
  // State to manage the image URL and loading state
  const [imageUrl, setImageUrl] = useState(''); // Initialize with an empty string
  const [loading, setLoading] = useState(true); // Initialize with true

  useEffect(() => {
    // Fetch random dog image from API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        // Update state with image URL and set loading to false
        setImageUrl(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        setLoading(false); // Ensure loading is false even if there's an error
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
