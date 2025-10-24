import { useState, useEffect } from "react";
import Star from "./Star.jsx";
import './Space.css';

function Space() {
  const [stars, setStars] = useState([]);
  const STAR_SIZE = 40;

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(), // Unique ID based on timestamp
        position: {
          x: Math.random() * (window.innerWidth - STAR_SIZE),
          y: Math.random() * (window.innerHeight - STAR_SIZE),
        },
      };
      setStars((prevStars) => [...prevStars, newStar]); // Add the new star to the state
    }, 2500); // Add a new star every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const destroyStar = (id) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id)); // .filter out the destroyed star
  };

  return (
    <div className="space">
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          position={star.position}
          onDestroy={destroyStar}
        /> // Render each star with its position and destroy callback
      ))}
    </div>
  );
} // Return the space div containing all stars

export default Space;
