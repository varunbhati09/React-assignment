
import React, { useState } from 'react';
import './Task1.css';

const Task1 = ({ circleCount, setCircleCount }) => {
  const [circles, setCircles] = useState([
    { id: 1, counter: 0, backgroundColor: 'yellow' },
  ]);

  const handleIncrement = (circleId) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === circleId
          ? { ...circle, counter: circle.counter + 1 }
          : circle
      )
    );
  };

  const handleDuplicate = (circleId) => {
    if (circles.length >= circleCount) {
      alert('Maximum circles reached!');
      return;
    }

    const duplicateCircle = circles.find((circle) => circle.id === circleId);
    const newCircle = { ...duplicateCircle, id: Date.now(), counter: 0 };
    setCircles((prevCircles) => [...prevCircles, newCircle]);

    // Update the circle count
    setCircleCount((prevCount) => prevCount + 1); 
  };

  return (
    <div className="task-container">
      {circles.map((circle) => (
        <div key={circle.id} className="circle-container">
          <div
            className="circle"
            style={{ backgroundColor: circle.backgroundColor }}
          >
            <p className="counter">{circle.counter}</p>
            <p className="background-color">{circle.backgroundColor}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleIncrement(circle.id)}>
              Increment
            </button>
            <button onClick={() => handleDuplicate(circle.id)}>Duplicate</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task1;
