import React, { useState } from "react";
import "./App.css";

const App = () => {
  const rawData = [
    { id: 1, taskName: "List 1", isSelcted: false, position: "left" },
    { id: 2, taskName: "List 2", isSelcted: false, position: "left" },
    { id: 3, taskName: "List 3", isSelcted: false, position: "left" },
    { id: 4, taskName: "List 4", isSelcted: false, position: "left" },
    { id: 5, taskName: "List 5", isSelcted: false, position: "left" },
    { id: 6, taskName: "List 6", isSelcted: false, position: "left" },
  ];

  const [data, setData] = useState(rawData);

  const handleCheckBox = (id) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, isSelcted: true } : item))
    );
  };

  const handleMoveOneRight = () => {
    setData(
      data.map((item) =>
        item.isSelcted === true
          ? { ...item, position: "right", isSelcted: false }
          : item
      )
    );
  };
  const handleMoveDoubleRight = () => {
    setData(data.map((item) => ({ ...item, position: "right" })));
  };
  const handleMoveOneLeft = () => {
    setData(
      data.map((item) =>
        item.isSelcted === true
          ? { ...item, position: "left", isSelcted: false }
          : item
      )
    );
  };
  const handleMoveDoubleLeft = () => {
    setData(data.map((item) => ({ ...item, position: "left" })));
  };
  return (
    <div className="container">
      <div className="content_container">
        {data.map((item) => (
          <>
            {item.position === "left" ? (
              <div key={item.id} className="list_container">
                <input
                  type="checkbox"
                  className="checkbox_container"
                  checked={item.isSelcted}
                  onChange={() => handleCheckBox(item.id)}
                />
                <div>{item.position === "left" && item.taskName}</div>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
      <div className="btn_container">
        <button className="btn" onClick={handleMoveOneRight}>
          &gt;
        </button>
        <button className="btn" onClick={handleMoveDoubleRight}>
          &gt;&gt;
        </button>
        <button className="btn" onClick={handleMoveOneLeft}>
          &lt;
        </button>
        <button className="btn" onClick={handleMoveDoubleLeft}>
          &lt;&lt;
        </button>
      </div>
      <div className="content_container">
        {data.map((item) => (
          <div key={item.id} className="list_container">
            {item.position === "right" ? (
              <>
                <input
                  type="checkbox"
                  className="checkbox_container"
                  checked={item.isSelcted}
                  onChange={() => handleCheckBox(item.id)}
                />
                <div>{item.position === "right" && item.taskName}</div>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
