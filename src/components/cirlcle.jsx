import { useState } from "react";

const CircleApp = () => {
  const [circles, setCircles] = useState([]);

  const handleAddCircle = (e) => {
    const newCircle = {
      id: Date.now(),
      left: e.clientX,
      top: e.clientY,
      bgColor: "#3498db", // Initial background color
    };
    setCircles([...circles, newCircle]);
  };

  const handleRemoveBg = (id) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id ? { ...circle, bgColor: "transparent" } : circle
      )
    );
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      onClick={handleAddCircle}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          onClick={(e) => {
            e.stopPropagation(); // Prevent new circle creation
            handleRemoveBg(circle.id);
          }}
          style={{
            position: "absolute",
            left: circle.left - 25,
            top: circle.top - 25,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: circle.bgColor,
            border: "2px solid #3498db",
            cursor: "pointer",
          }}
        ></div>
      ))}
    </div>
  );
};

export default CircleApp;