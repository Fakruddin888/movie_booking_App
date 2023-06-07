import React from "react";

const Card = ({ curElem, cardDetailHandler, setSummaryToggle }) => {
  const { id, image, url, name, language, genres, status } = curElem.show;
  console.log("data1", curElem);
  console.log();

  return (
    <div className="card">
      <img className="image" src={image.medium} alt="..." />
      <div className="card-body">
        <div>
          <span>{name}</span>
          <p>Status: {status}</p>
          <span>Language: {language}</span><br/>
          <span>
            {genres[0]}
            {genres[1]}
          </span>
          </div>
          <div className="btn-detailes">
            <button
              className="detailsButton"
              onClick={() => cardDetailHandler(id)}
            >
             More Details
            </button>
          </div>

        
      </div>
    </div>
  );
};

export default Card;
