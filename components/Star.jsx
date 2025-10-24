import { useRef, useEffect } from "react";
import './Star.css';

function Star({ id, position, onDestroy }) {
  const starRef = useRef(null); // Ref to the star element

  useEffect(() => {
    if (starRef.current) { 
      starRef.current.focus();
    }
  }, []); // useEffect to focus on the star when it mounts

  const handleClick = () => {
    onDestroy(id);
  };

  return (
    <div
      ref={starRef}
      className="star"
      style={{ left: position.x, top: position.y, position: 'absolute' }}
      tabIndex="0"
      onClick={handleClick}
    >
      ★
    </div> // Return a star div with styles and event handlers
  );
}

export default Star;
