import React from "react";
import SubNews from "./SubNews";

const News = () => {
  // Static country data
  const countries = ["India", "USA", "Australia", "Swizerland"];

  return (
    <div className="news">
      <div className="news-header">
        <p style={{color:'#51C2FE'}}>Recent Releases</p>
        <div className="dropdown">
          {/* Static dropdown for country selection */}
          <select>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <div className="news-content">
        <div className="news-info">
         <SubNews title="Indusrtial Production"/>
         <SubNews title="CPI Inflation"/>
        </div>
      </div>
    </div>
  );
};

export default News;
