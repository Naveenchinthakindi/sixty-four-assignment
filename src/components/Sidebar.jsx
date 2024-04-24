import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="mb-4">
        <button className="btn1 text-center" onClick={handleToggle}>
          N
        </button>
      </div>

      <div className="sidebar_toggle">
        {isOpen && (
          <div className="text-center">
            <ul className="list-unstyled d-flex flex-column justify-content-between">
              <li className="my-2">
                <i className="bi bi-search"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-display"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-question-circle"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-calendar-event"></i>
              </li>

              <li className="my-2">
                <i className="bi bi-search"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-display"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-question-circle"></i>
              </li>
              <li className="my-2">
                <i className="bi bi-calendar-event"></i>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
