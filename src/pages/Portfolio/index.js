import React from "react";
import data from "../../data.json";

function Porfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <section className="portfolio">
        {data.map(function (proj) {
          return (
            <div className="projCard">
              <img src={proj.image} alt={proj.name} />
              <h2>{proj.name}</h2>
              <div>
                <a href={proj.repo}>
                  <button>Repo</button>
                </a>
                <a href={proj.live}>
                  <button>Live</button>
                  
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Porfolio;
