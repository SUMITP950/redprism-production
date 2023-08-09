/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Training(props) {
  const [userDetails, SetUserDetails] = useState("");
  useEffect(() => {
    document.title = "Training";
  });

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


  const [text, setText] = useState("");
  const [data, SetData] = useState([]);
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    document.getElementById("loader").style.display="flex";
    axios
      .get("http://testredprism.co/api/trainings/getTrainingList", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        SetData(res.data.trainingList);
        document.getElementById("loader").style.display="none";
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
  
  return (
    <>
      <div className="py-4">
        <div className="container-fluid body-padding">
          <div className="row justify-content-around">
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-3 pb-4">
                  <h6 class="pt-3 text-center">Other Option</h6>
                  <Link  to="/Setting" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                     
                        <span class="font-weight-bold">Settings</span>
                      
                    </div>
                  </Link>
                  <Link to="/SampleResume" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                     
                        <span class="font-weight-bold">Sample Resume</span>
                      
                    </div>
                  </Link >
                  <Link to="/Training" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                     
                        <span class="font-weight-bold">Trainings</span>
                      
                    </div>
                  </Link>
                  <Link  to="/FresherJob" class="dropdown-item d-flex align-items-center">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/training.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      
                        <span class="font-weight-bold">Fresher Jobs</span>
                      
                    </div>
                  </Link>
                  <Link to="/Internship" class="dropdown-item d-flex align-items-center">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/2255545.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      
                        <span class="font-weight-bold">Internship</span>
                     
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
            <main className="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-md-8 my-3">
                    <h5>Recommended Training</h5>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      placeholder="Search Trainings..."
                      className="form-control my-1"
                      value={text}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div
                  className="row mt-4 p-4 rounded"
                  style={{ border: "1px solid black" }}
                >
                  {" "}
                  {data
                    .filter((value) => {
                      if (text === "") {
                        return value;
                      } else if (
                        value.title
                          .toLowerCase()
                          .trim()
                          .startsWith(text.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((item, id) => {
                      return (
                        <div className="col-md-4 mb-4" key={id}>
                          <div className="card">
                            <img
                              src={`http://testredprism.co/${item.trainings_poster}`}
                              className="card-img-top crdimg"
                              alt="..."
                            />

                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text">
                                {item.details.substring(0, 100)}...
                              </p>
                            </div>
                            <div className="card-footer">
                              <Link to="https://www.redprismgroup.com/online-training" className="btn btn-block apply-btn">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </main>

            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 ">
              <div class="border rounded bg-white mb-3">
              <div class="shadow-sm pt-4 pb-3">
                  <div class="dropdown-item d-flex align-items-center">
                    <div class="mr-2">
                      <div class="icon-circle-profile">
                        <i class="feather-user left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="font-weight-bold">{userDetails.user_name}</h5>
                    </div>
                    <div>
                      <h6
                        class="font-weight-bold ml-1 "
                        style={{
                          whiteSpace: "nowrap",
                          width: "50px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        ({userDetails.employee_type})
                      </h6>
                    </div>
                  </div>
                  <Link to="/Profile" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                     
                        <span class="font-weight-bold">My Profile</span>
                      
                    </div>
                  </Link >
                  <Link  to="/MyBuddies" class="dropdown-item d-flex align-items-center">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      
                        <span class="font-weight-bold">My Buddies</span>
                     
                    </div>
                  </Link>
                  <Link  to="/jobPost" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                    
                        <span class="font-weight-bold">Job Post</span>
                      
                    </div>
                  </Link>
                  <Link to="/walkingjob" class="dropdown-item d-flex align-items-center" >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      
                        <span class="font-weight-bold">Walking Job</span>
                     
                    </div>
                  </Link>
                  <Link to="/Jobsearch" class="dropdown-item d-flex align-items-center">
                    <div class="mr-3">
                      <div class="icon-circle-profile ">
                        <img
                          src="img/icon/2255545.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      
                        <span class="font-weight-bold">Job Search</span>
                      
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
