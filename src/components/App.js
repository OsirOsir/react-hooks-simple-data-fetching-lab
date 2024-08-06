import React, { useEffect, useState } from 'react';

function App() {

  const [imageUrl, setImageUrl] = useState(''); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
     
        setImageUrl(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        setLoading(false);
      });
  }, []);

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
