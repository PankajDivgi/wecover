import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Image from "next/image";
// import CompanyLogo1 from "../../Images/company1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const Company = ({ handleBack, handleReset, quotationList }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [seeMore, setSeeMore] = React.useState("");

  // to open and close accorian 
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const dataList = quotationList?.data?.quotes;
  // console.log("quotationList", quotationList?.data?.quotes);
  return (
    <>
    {/* back button */}
      <button className="insurance-back-btn" onClick={handleBack}>
        <ArrowBackIcon /> Back
      </button>
      {/* reset button */}
      <button className="insurance-start-over-btn" onClick={handleReset}>
        <ReplayIcon /> Start Over
      </button>
      <div className="flex justify-center items-center pt-10">
        <div className="select-health-company">
          <div style={{ width: "20%" }}>
            {/* search bar */}
            <div className="search-type">
              <SearchIcon />{" "}
              <input
                type="text"
                placeholder="Search by key-word"
                className="w-full"
              />
            </div>
            {/* Accordion start */}
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="lowtohigh"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="lowtohigh"
                      control={<Radio />}
                      label="Price, low to high"
                    />
                    <FormControlLabel
                      value="hightolow"
                      control={<Radio />}
                      label="Price, high to low"
                    />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Add-Ons</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Add</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Medical cover</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Add</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Bagage Loss</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Add</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Cancelation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Add</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>Insurer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Add</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* Accordion end */}
          </div>
          {/* map all data from quotation list*/}
          <div
            className="w-4/5"
            style={{ overflow: "scroll", height: "calc(100vh - 332px)" }}
          >
            {quotationList?.data?.quotes.map((at) => (
              <div
                key={at.id}
                className="flex p-2 mb-2"
                style={{ border: "1px solid #F2F2F2", borderRadius: "20px" }}
              >
                <div style={{ width: "90px" }}>
                  <Image
                    src={at.companyLogo}
                    width={130}
                    height={60}
                    alt="Company Logo"
                  />
                </div>
                <div className="w-full px-4">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h1>{at.planName}</h1>
                      <p style={{ fontSize: "12px", color: "#919EAB" }}>
                        {at.companyName}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p style={{ fontSize: "12px", color: "#919EAB" }}>
                        Final Price:
                      </p>
                      <p className="ml-2" style={{ fontSize: "12px" }}>
                        AED
                      </p>
                      <h1 className="ml-2" style={{ fontSize: "26px" }}>
                        {at.startingPrice}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full mt-2">
                    <div>
                      <p style={{ fontSize: "12px", color: "#919EAB" }}>
                        Max. Annual Coverage
                      </p>
                      <p>AED {at.coverages}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "#919EAB" }}>
                        Network Coverage
                      </p>
                      <p>134 Hospitals</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "#919EAB" }}>
                        Coverage
                      </p>
                      <p>UAE</p>
                    </div>
                  </div>
                  {at.id === seeMore ? (
                    <>
                      <div className="mt-2">
                        <p style={{ fontSize: "12px", color: "#919EAB" }}>
                          Add-Ons
                        </p>
                        <div className="flex">
                          <p style={{ fontSize: "12px" }}>Dental Care</p>
                          <p
                            className="ml-10"
                            style={{ fontSize: "12px", color: "#919EAB" }}
                          >
                            +AED 80
                          </p>
                        </div>
                        <div className="flex">
                          <p style={{ fontSize: "12px" }}>Vision Care</p>
                          <p
                            className="ml-10"
                            style={{ fontSize: "12px", color: "#919EAB" }}
                          >
                            +AED 30
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "12px", color: "#919EAB" }}>
                          What is Covered
                        </p>
                        <p style={{ fontSize: "12px" }}>
                          Geographical scope of coverage UAE
                        </p>
                        <p style={{ fontSize: "12px", color: "#919EAB" }}>
                          +AED 100,000
                        </p>
                        <p style={{ fontSize: "12px" }}>
                          Laboratory test services
                        </p>
                        <p style={{ fontSize: "12px", color: "#919EAB" }}>
                          +AED 10,000
                        </p>
                      </div>
                      <div className="flex items-center w-full mt-2">
                        <div>
                          <p style={{ fontSize: "12px", color: "#919EAB" }}>
                            Network List
                          </p>
                          <div>
                            <button className="view-download-btn">
                              <LocationOnIcon style={{ fontSize: "14px" }} />{" "}
                              View
                            </button>
                            <button className="view-download-btn ml-2">
                              <SimCardDownloadIcon
                                style={{ fontSize: "14px" }}
                              />{" "}
                              Download
                            </button>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p style={{ fontSize: "12px", color: "#919EAB" }}>
                            Table of Benefits
                          </p>
                          <div>
                            <button className="view-download-btn">
                              <LocationOnIcon style={{ fontSize: "14px" }} />{" "}
                              View
                            </button>
                            <button className="view-download-btn ml-2">
                              <SimCardDownloadIcon
                                style={{ fontSize: "14px" }}
                              />{" "}
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="flex flex-col" style={{ width: "110px" }}>
                  <button className="apply-btn">Apply</button>
                  <div className="flex flex-col justify-center align-center mt-4">
                    <p
                      className="text-center"
                      style={{ fontSize: "12px", color: "#919EAB" }}
                    >
                      Compare
                    </p>
                    <input type="checkbox" />
                  </div>
                  <button className="mt-4" onClick={() => setSeeMore(at.id)}>
                    {at.id === seeMore ? "" :"See more"}
                  </button>
                  {/* <button className="mt-auto" onClick={()=>setSeeMore(0)}>See less</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
