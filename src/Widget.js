import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const NewsArticle = (heading, subtitle) => {
    return (
      <div className="widget__article">
        <div className="widget__articleleft">
          <FiberManualRecordIcon />
        </div>
        <div className="widget__articleright">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {NewsArticle("React is MasterClass", "2334 readers")}
      {NewsArticle("Pandemic Striking Again", "Top News")}
      {NewsArticle("CoronaVirus Outbreak in India", "321 readers")}
      {NewsArticle("Elon musk, the richest", "Trending")}
      {NewsArticle("AI is overtaking humans", "Trending")}
      {NewsArticle("Jobs In India", "1234 readers")}

      {NewsArticle("Work from home is hectic nowadaya", "Trending")}
    </div>
  );
}

export default Widget;
