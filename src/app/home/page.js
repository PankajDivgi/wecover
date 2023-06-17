import React from "react";
import "../globals.css";
import Image from "next/image";
import Insurance1 from "../../Images/insurance1.png";
import Insurance2 from "../../Images/insurance2.png";
import Insurance3 from "../../Images/insurance3.png";
import Link from "next/link";
import Header from "../header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="insurance-main">
        <div className="flex justify-center items-start py-4">
          <h1 className="home-header-text">Which Insurance would you like?</h1>
        </div>
        <div className="insurance-card-full">
          {/* select insurance card */}
          <div className="insurance-card">
            <Image
              src={Insurance1}
              className="insurance-card-image"
              alt="no_image"
            />
            <h6>Car Insurance</h6>
            <p>
              Ready, set, go! Wecover's car insurance has got you covered on the
              road.
            </p>
            <p>
              <span style={{ fontSize: "10px" }}>starting from</span>
              <br />
              <span style={{ fontSize: "12px" }}>AED </span>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                195.00
              </span>
            </p>
            {/* Link to Health Insurance Page */}
            <Link href="/health" className="insurance-card-btn">
              Select
            </Link>
          </div>
          {/* 2nd card */}
          <div className="insurance-card">
            <Image
              src={Insurance2}
              className="insurance-card-image"
              alt="no_image"
            />
            <h6>Health Insurance</h6>
            <p>
              What's life without surprises? Our health coverage ensures only
              the good ones find you.
            </p>
            <p>
              <span style={{ fontSize: "10px" }}>starting from</span>
              <br />
              <span style={{ fontSize: "12px" }}>AED </span>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                450.00
              </span>
            </p>
            {/* Link to Health Insurance Page */}
            <Link href="/health" className="insurance-card-btn">
              Select
            </Link>
          </div>
          {/* 3rd card */}
          <div className="insurance-card">
            <Image
              src={Insurance3}
              className="insurance-card-image"
              alt="no_image"
            />
            <h6>Travel Insurance</h6>
            <p>
              What's life without surprises? Our health coverage ensures only
              the good ones find you.
            </p>
            <p>
              <span style={{ fontSize: "10px" }}>starting from</span>
              <br />
              <span style={{ fontSize: "12px" }}>AED </span>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                210.00
              </span>
            </p>
            {/* Link to Health Insurance Page */}
            <Link href="/health" className="insurance-card-btn">
              Select
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
