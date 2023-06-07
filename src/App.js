import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./component/Card";
import axios from "axios";
import Summary from "./component/Summary";
const App = () => {
  const [mydata, setmyData] = useState([]);
  const [summaryToggle, setSummaryToggle] = useState(false);
 
  const[summaryData,setSummaryData] = useState({});
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      console.log(res.data);

      setmyData(res.data);
    });
  }, []);
  const cardDetailHandler = (id) => {
   
    let res =mydata.find(val => val.show.id == id);
    setSummaryData(res);
    setSummaryToggle(true);
    console.log(id,res);
  };
  const setSummaryHandler = ()=>{
    setSummaryToggle(false)
    
  }
 
  return (
    <>
      {!summaryToggle ? (
        <>
          <h1 className="company_name">QuadB <span style={{marginLeft:"8px", color:"orange"}}>Tech</span></h1>
          <div className="container">
            {mydata.map((curElem) => {
              return (
                <Card curElem={curElem} cardDetailHandler={cardDetailHandler} />
              );
            })}
          </div>
        </>
      ) : (
        
        <Summary summaryData={summaryData} setSummaryToggle={setSummaryHandler} />
      )}
    </>
  );
};

export default App;
