/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Component/auth.js";
import { BiRun } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin3Fill} from "react-icons/ri";

const WalkingJob = () => {
  const [getLocation, setgetLocation] = useState("");
  const [getLocationList, setgetLocationList] = useState([]);
  const [getArea, setArea] = useState("");
  const [getAreaList, setgetAreaList] = useState([]);
  const [wDate, setwDate] = useState();
  const [description, setDescription] = useState("");
  const [walkingJobsListg, setwalkingJobsListg] = useState([]);
  const [mode, setmode] = useState("Submit");
  const [walkingJobId, setWalkingJobId] = useState("");

  // Get user details

  const [userDetails, SetUserDetails] = useState("");

  const fetchUserDetails = async () => {
    const userData = await auth();
    SetUserDetails(userData);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Title
  useEffect(() => {
    document.title = "Walking Job Post";
  }, []);

  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  // get My job postlist
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/walkingJobPost/getMyWalkingJobPost", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setwalkingJobsListg(res.data.walkingJobsList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const reload = () => {
    axios
      .get("http://testredprism.co/api/walkingJobPost/getMyWalkingJobPost", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setwalkingJobsListg(res.data.walkingJobsList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // get service area list
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/walkingJobPost/getServiceAreaList`, {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setgetAreaList(res.data.serviceAreaList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // get locationlist
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/walkingJobPost/getLocationList`, {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setgetLocationList(res.data.locationList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handelsubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/walkingJobPost/saveWalkingJobPost`,
        {
          location_code: getLocation,
          service_area_code: getArea,
          description: description,
          walking_date: wDate,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          setArea("");
          setDescription("");
          setgetLocation("");
          setwDate("");
          setmode("Submit");
          reload();
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const handelUpdate = (item) => {
  const handelEdit = (item) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/walkingJobPost/getWalkingJobPostDetails`,
        {
          walking_job_code: item,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          let jobDetails = response.data.walkingJobsDetails[0];

          setDescription(response.data.walkingJobsDetails[0].description);

          function formatDate(d) {
            var d = new Date(d),
              month = "" + (d.getMonth() + 1),
              day = "" + d.getDate(),
              year = d.getFullYear();

            if (month.length < 2) month = "0" + month;

            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
          }

          setwDate(formatDate(jobDetails.walking_date));

          jobDetails.service_area_details.length > 0
            ? setArea(jobDetails.service_area_details[0]._id)
            : setArea("");
          jobDetails.location.length > 0
            ? setgetLocation(jobDetails.location[0]._id)
            : setgetLocation("");

          var element = document.getElementById("profile-tab");
          element.classList.add("active");
          document.getElementById("home-tab").classList.remove("active");
          var elementMain = document.getElementById("home");
          elementMain.classList.add("active", "show");
          document.getElementById("profile").classList.remove("active");
          setmode("Update");
          setWalkingJobId(item);
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const hadleupdate = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://testredprism.co/api/walkingJobPost/updateWalkingJobPostDetails",
        {
          walking_job_code: walkingJobId,
          location_code: getLocation,
          service_area_code: getArea,
          description: description,
          walking_date: wDate,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          setWalkingJobId("");
          setArea("");
          setDescription("");
          setgetLocation("");
          setwDate("");
          reload();
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (item) => {
    axios
      .post(
        "http://testredprism.co/api/walkingJobPost/deleteWalkingJobPost",
        {
          walking_job_code: item,
        },

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          reload();
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {/* html start */}
      <div className="container-fluid ">
        <div className="row justify-content-around mt-4 " >
          <aside className="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div className="border rounded bg-white mb-3">
              <div className="shadow-sm pt-3 pb-4">
                <h6 className="pt-3 text-center">Other Option</h6>
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
          <main
            className="col rounded col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12 pb-5"
            style={{ backgroundColor: "#fff" }}
          >
            <ul
              className="nav nav-justified border-bottom osahan-line-tab mb-5"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                ><BiRun size={30} className="text-primary"/>
                  Enter New Walkling Job
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="home-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                ><BsCardChecklist size={30} className="text-primary"/>
                 &nbsp; List Job
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTab p-3">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Post a Job</h3>
                  </div>
                  <div className="card-body ">
                    <form>
                      <div className="form-group">
                        <label htmlFor="salaryRange">Walking Date</label>
                        <input
                          type="date"
                          value={wDate}
                          onChange={(e) => setwDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Location
                        </b>
                        <div className="form-group">
                          <select
                            onChange={(e) => setgetLocation(e.target.value)}
                            value={getLocation}
                            className="form-control"
                            id="salaryRange"
                          >
                            <option>-- Select Location --</option>
                            {getLocationList.map((item, id) => {
                              return (
                                <>
                                  <option value={item._id} key={id._id}>
                                    {item.state} , {item.city} , {item.area}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <b htmlFor="description" style={{ paddingLeft: "8px" }}>
                          Service Area
                        </b>
                        <div className="form-group">
                          <select
                            onChange={(e) => setArea(e.target.value)}
                            value={getArea}
                            className="form-control"
                            id="salaryRange"
                          >
                            <option>-- Select Location --</option>
                            {getAreaList.map((item, id) => {
                              return (
                                <>
                                  <option value={item._id} key={id._id}>
                                    {item.service_area}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Job Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Enter the job description"
                          rows="5"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        id="subnitUpdate"
                        className="btn apply-btn"
                        onClick={mode === "Submit" ? handelsubmit : hadleupdate}
                      >
                        {mode === "Submit" ? "Submit" : "Update"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Walkingjob Date</th>

                        <th scope="col">Location</th>

                        <th scope="col">ServiceArea</th>

                        <th scope="col">Description</th>

                       

                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    {walkingJobsListg &&
                      walkingJobsListg.map((item, id) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{item.walking_date.slice(0,10)}</td>

                              <td key={id._id}>
                                {item.location.length > 0
                                  ? `${item.location[0].area},${item.location[0].city},${item.location[0].state}`
                                  : ""}
                              </td>

                              <td key={id._id}>
                                {item.service_area_details.length > 0
                                  ? item.service_area_details[0].service_area
                                  : ""}
                              </td>

                              <td>{item.description}</td>

                             

                              <td
                                style={{
                                  display: "flex",

                                  alignItems: "center",

                                  justifyContent: "center",
                                }}
                              >
                                 <FaEdit
                                  className="text-success mr-2" 
                                  style={{ cursor: "pointer"}}
                                  size={20} 
                                  onClick={() => handelEdit(item._id)}/>
                                <RiDeleteBin3Fill 
                                className="text-danger" 
                                style={{ cursor: "pointer" }}
                                size={20}
                                onClick={() => handleDelete(item._id)}/>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </table>
                </div>
              </div>
            </div>
          </main>
          <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 ">
            <div class="border rounded bg-white mb-3">
              <div class="shadow-sm pt-4 pb-4">
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-user left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                    <h5 class="font-weight-bold">{userDetails.user_name}</h5>
                  </div>
                  <div>
                    <h6 class="font-weight-bold ml-1 line-reduce">
                      ({userDetails.employee_type})
                    </h6>
                  </div>
                </a>
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

      {/* html start */}
    </>
  );
};

export default WalkingJob;
