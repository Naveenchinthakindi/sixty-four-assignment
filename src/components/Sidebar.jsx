import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="mb-4">
        <button className="logo" onClick={handleToggle}>
          N
        </button>
      </div>

      <div className="sidebar_toggle">
        {isOpen && (
          <div className="text-center">
            <ul className="list-unstyled d-flex flex-column justify-content-between">
              <li>
              <i class="fa-solid fa-magnifying-glass icon"></i>
              </li>
              <li>
              <i class="fa-solid fa-display icon"></i>
              </li>
              <li>
              <i class="fa-regular fa-circle-question icon"></i>
              </li>
              <li>
              <i class="fa-regular fa-calendar icon"></i>
              </li>

              <li>
              <i class="fa-regular fa-building icon"></i>
              </li>
              <li>
              <i class="fa-solid fa-comment-dollar icon"></i>
              </li>
              <li>
              <i class="fa-solid fa-headphones icon"></i>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
