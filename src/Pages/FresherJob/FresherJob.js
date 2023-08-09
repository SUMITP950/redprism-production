/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { GiSkills } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

export default function JobSearch() {
  const [userDetails, SetUserDetails] = useState("");
  const [techno, setTechno] = useState("");
  const [technoData, SetTechnoData] = useState([]);
  const [experience, setExperience] = useState("");
  const [experienceData, SetExperienceData] = useState([]);
  const [location, setLocation] = useState("");
  const [locationData, SetLocationData] = useState([]);
  const [getpost, setGetpost] = useState([]);
  const [submitCv, setSubmitCv] = useState();
  const [jobDescription, setJobdescription] = useState("");
  const [jobPostId, setJobPostId] = useState("");

  useEffect(() => {
    document.title = "Job Search";
  }, []);

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  // Get user details
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/getUserDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetUserDetails(res.data.userDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Get tech list
  useEffect(() => {
    axios
      .get(
        "http://testredprism.co/api/jobSearch/getTechList",

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        // console.log(res.data.techList)
        SetTechnoData(res.data.techList);
        setTechno(res.data.techList[0]._id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Get experience list
  useEffect(() => {
    axios
      .get(
        "http://testredprism.co/api/jobSearch/getExpList",

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        SetExperienceData(res.data.expList);
        setExperience(res.data.expList[0]._id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // get location list
  useEffect(() => {
    axios
      .get(
        "http://testredprism.co/api/jobSearch/getLocationList",

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((res) => {
        SetLocationData(res.data.locationList);
        setLocation(res.data.locationList[0]._id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // get last search details
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://testredprism.co/api/jobSearch/getLastSearchDetails",

  //       {
  //         headers: {
  //           "auth-token": localStorage.getItem("authToken"),
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setTechno(res.data.employeeSearchDetails.tech_code);
  //       setLocation(res.data.employeeSearchDetails.location_code);
  //       setExperience(res.data.employeeSearchDetails.exp_code);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // get job list
  useEffect(() => {
    joblist();
  }, []);

  useEffect(() => {
    joblist();
  }, [experience]);

  useEffect(() => {
    joblist();
  }, [techno]);

  useEffect(() => {
    joblist();
  }, [location]);

  const joblist = () => {
    document.getElementById("loader").style.display="flex";
    setGetpost([]);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/jobSearch/getJobList`,
        {
          tech_code: techno,
          location_code: location,
          exp_code: experience,
          type: "Fresher",
          from_index: 0,

        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setGetpost(response.data.jobsList);
        }
        if (response.data.status === "error") {
          // console.log(response.data);
        }
        document.getElementById("loader").style.display="none";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // upload cv
  const handleFile = (e) => {
    setSubmitCv(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // getting jobpostid
  const jobpostcode = (id) => {
    setJobPostId(id);
  };

  //job apply
  const jobApply = () => {
    document.getElementById("loader").style.display="flex";
    const formData = new FormData();
    formData.append("job_post_code", jobPostId);
    formData.append("message", jobDescription);
    formData.append("resume", submitCv);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/jobSearch/jobApply`,
        formData,
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
          // console.log(response.data.mssg);
        }
        document.getElementById("loader").style.display="none";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div class="py-1  bg-white">
        <div class="container-fluid body-padding ">
          <div class="row justify-c-center">
            <div class="col-lg-8 dropdown-m-hide">
              <div
                class="d-flex justify-content-around mt-3 p-3"
                style={{
                  borderRadius: "50px",
                  border: "1px solid #e8e942",
                  padding: "10px",
                  backgroundColor: "#fdf8e9",
                }}
              >
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <GiSkills
                      size={40}
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                    />
                    <select
                      class="form-control form-control-lg"
                      style={{
                        backgroundColor: "#fdf8e9",
                      }}
                      name="currentCompany"
                      id="currentCompany"
                      onChange={(e) => {
                        setTechno(e.target.value);
                        // joblist();
                      }}
                      value={techno}
                    >
                      <option value="">All</option>
                      {technoData.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.tech_name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <PiStudentBold
                      size={40}
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                    />
                    <select
                      class="form-control form-control-lg"
                      name="currentCompany"
                      id="currentCompany"
                      style={{
                        backgroundColor: "#fdf8e9",
                      }}
                      onChange={(e) => {
                        setExperience(e.target.value);
                        // joblist();
                      }}
                      value={experience}
                    >
                      <option value="">All</option>
                      {experienceData.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.experience}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div class="dropdown">
                  <div className="d-flex align-items-center">
                    <FaLocationDot
                      size={28}
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                    />
                    <select
                      class="form-control form-control-lg"
                      name="currentCompany"
                      id="currentCompany"
                      style={{
                        backgroundColor: "#fdf8e9",
                      }}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        // joblist();
                      }}
                      value={location}
                    >
                      <option value="">All</option>
                      {locationData.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {`${item.area}, ${item.city}, ${item.state}`}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            <div class="row mt-5">
              <table class="table table-m-view" style={{ border: "none" }}>
                <thead class="thead-pink">
                  <tr>
                    <th scope="col">Job Name</th>
                    <th scope="col">Post Employee Type</th>
                    <th scope="col">Post Employee Email</th>

                    <th scope="col">Post Date</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Experience</th>

                    <th scope="col">Sevice Area</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {getpost != [] &&
                  getpost.map((data, i2) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{data.job_title}</td>
                          <td>{data.post_employee_type}</td>
                          <td>{data.email}</td>

                          <td>{data.post_datetime.slice(0, 10)}</td>
                          <td>{data.company_details[0].company_name}</td>
                          <td>{data.salary_range[0].salary_range}</td>
                          <td>{data.experience_master[0].experience}</td>

                          <td>{data.service_area_details[0].service_area}</td>
                          <td>
                            {userDetails.employee_type === "Hr" ? null : (
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#staticBackdrop1"
                                onClick={() => jobpostcode(data._id)}
                                class="btn btn-light d-none d-lg-inline color-black upload-btn-text  upload-btn"
                              >
                                {" "}
                                Apply Now
                              </button>
                            )}

                            <button class="share-btn">
                              <WhatsappShareButton
                                title="Sharing Content"
                                url="https://www.redprismgroup.com/"
                              >
                                <WhatsappIcon
                                  logoFillColor="white"
                                  round={true}
                                  size={23}
                                ></WhatsappIcon>
                              </WhatsappShareButton>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          }

          {/* modal body */}

          <div
            class="modal fade"
            id="staticBackdrop1"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Do you want to Apply?
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <br />

                  <div
                    style={{
                      display: "block",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <label
                  for="filecv"
                  style={{
                    backgroundColor: "lightblue",
                    fontSize: 16,
                    borderRadius: "10px",
                  }}
                >
                  <i class="feather-file text-primary "></i> Upload CV
                </label> */}
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFile}

                      // style={{ display: "none", visibility: "none" }}
                    />
                    <br />
                    <br />
                    <textarea
                      type="text"
                      placeholder="Enter job description"
                      rows={5}
                      cols="60"
                      value={jobDescription}
                      onChange={(e) => setJobdescription(e.target.value)}
                    />
                    <br />

                    <button
                      class="btn btn-success "
                      style={{ width: "80px", borderRadius: "20px" }}
                      onClick={jobApply}
                      // data-dismiss="modal"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
