import React from "react";

const Summary = ({ summaryData,setSummaryToggle }) => {
  console.log("summaryData------", summaryData);
  const {
    id,
    image,
    url,
    name,
    rating,
    language,
    schedule,
    premiered,
    network,
  } = summaryData?.show;
 

  return (
    <>
      <div className="summary-container">
      <button className="backButton" onClick={()=>setSummaryToggle()} >Go to Back</button>
      <div className="sum_card">
        <img className="sum_image" src={image.medium} alt="img" />
        <div className="sum-card-body">
          <div className="sum_head">
            <div>
              <h5>{name}</h5>
            </div>
            <div className="schedule">
              <span>{schedule.days} - </span>
              <span>{schedule.time}</span>
            </div>
          </div>

          <p className="card-text"></p>
          <p>Rating: {rating.average}</p>
          <p>{network.country.name}</p>
          <p>Language: {language}</p>
          <p>Release On: {premiered}</p>
          <button className="book-btn"><a href={url}>Book Here</a></button>
          
          <br />
        </div>
      </div>
      </div>
    </>
  );
};

export default Summary;
