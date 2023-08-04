import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      {/* grid of 3 education cells */}
      <div className="grid">
        <div className="box" style={{ margin: "20px", padding: "20px" }}>
          <h3>Indira Gandhi Delhi Technical University For Women</h3>
          <p className="small">B.Tech in ECE</p>
          <p className="small">2021 - 2025</p>
        </div>
        <div className="box" style={{ margin: "20px", padding: "20px" }}>
          <h3>Ryan International School</h3>
          <p className="small">Class 12th</p>
          <p className="small">2020 - 2021</p>
        </div>
        <div className="box" style={{ margin: "20px", padding: "20px" }}>
          <h3>Ryan International School</h3>
          <p className="small">Class 10th</p>
          <p className="small">2018 - 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
