/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FeedPost from "./feedPost";

import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [techno, setTechno] = useState("");
  const [technoData, SetTechnoData] = useState([]);
  const [userDetails, SetUserDetails] = useState("");
  const [getpost, setGetpost] = useState([]);
  const [thoughts, setThoughts] = useState(""); // this is for post value
  const [fromindex, setFromIndex] = useState(0); // this is for post value

  const handleThoughtsChange = (e) => {
    setThoughts(e.target.value);
  };

  useEffect(() => {
    document.title = "Home";
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
        "http://testredprism.co/api/home/getTechList",

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

  // Save post data
  const handlePost = () => {
    // console.log("Post Save " + techno);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/saveFeedsPost`,
        {
          tech_code: techno,
          post_details: thoughts,
        },

        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setThoughts("");
        }
        if (response.data.status === "error") {
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get feed post list by default
  useEffect(() => {
    // document.getElementById("loader").style.display = "flex";
    technoChange();
  }, [techno]);

  // useEffect(() => {
  //   technoChange();

  // }, [fromindex]);

  // Get feed post list

  const technoChange = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/getFeedsPost`,
        {
          tech_code: techno,
          from_index: fromindex,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          console.log(response.data);
          let newIndex = fromindex + response.data.limit;
          console.log(newIndex);
          console.log(techno);
          setFromIndex(newIndex);
          // document.getElementById("loader").style.display = "none";
          // setGetpost([...getpost, response.data.feedsList]);
          setGetpost((pre) => [...pre, ...response.data.feedsList]);
          return newIndex;
        }
        if (response.data.status === "error") {
          // console.log(response.data);
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="py-4">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <main className="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div className="wrapper" style={{ overflowX: "inherit" }}>
                  <div class="col-lg-12 ">
                    <div
                      class="d-flex justify-content-around"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid rgb(6, 6, 6)",
                        padding: "10px",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <b style={{ width: "330px" }}>
                          Choose Your Technology &nbsp;&nbsp;
                        </b>
                        <img
                          class="dropdown-menu-img"
                          src="https://img.icons8.com/ios/50/000000/circuit.png"
                          alt=""
                        />
                        <select
                          class="form-control form-control-lg"
                          name="currentCompany"
                          id="currentCompany"
                          onChange={(e) => {
                            setGetpost([]);
                            setTechno(e.target.value);
                            technoChange();
                          }}
                          value={techno}
                        >
                          {/* <option>--Technology--</option> */}
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
                  </div>
                </div>
                <div
                  className="tab-content"
                  id="myTabContent"
                  style={{ zIndex: "9" }}
                >
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="p-3 d-flex w-100" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/icon/smile.svg"
                          alt=""
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="w-100">
                        <textarea
                          placeholder="Write your thoughts..."
                          className="form-control shadow-none"
                          value={thoughts}
                          onChange={handleThoughtsChange}
                          style={{ fontSize: 25 }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top p-3 d-flex align-items-center">
                  <div className="mr-auto">
                    {/* <a href="#" className="text-link">
                      <i className="feather-users"></i> Tag Buddies
                    </a> */}
                  </div>
                  <div className="flex-shrink-1">
                    <button
                      type="button"
                      className="btn btn-sm post-btn"
                      onClick={handlePost}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>

              <InfiniteScroll
                dataLength={fromindex} //This is important field to render the next data
                next={technoChange}
                hasMore={fromindex <= 1}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {getpost != [] &&
                  getpost.map((data, i2) => {
                    return <FeedPost feed_post_data={data} key={i2} />;
                  })}
              </InfiniteScroll>

              <div className=" text-center"></div>
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 aside-tag">
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
                      <h6 className="font-weight-bold ml-1 line-reduce">
                        ({userDetails.employee_type})
                      </h6>
                    </div>
                  </div>

                  <Link
                    to="/Profile"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Profile</span>
                    </div>
                  </Link>
                  <Link
                    to="/MyBuddies"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Buddies</span>
                    </div>
                  </Link>
                  <Link
                    to="/jobPost"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Job Post</span>
                    </div>
                  </Link>
                  <Link
                    to="/walkingjob"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Walk In Job</span>
                    </div>
                  </Link>
                  <Link
                    to="/Jobsearch"
                    class="dropdown-item d-flex align-items-center"
                  >
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
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 aside-tag">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-3 pb-4">
                  <h6 class="pt-2 text-center">Other Option</h6>
                  <Link
                    to="/Setting"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Settings</span>
                    </div>
                  </Link>
                  <Link
                    to="/SampleResume"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Sample Resume</span>
                    </div>
                  </Link>
                  <Link
                    to="/Training"
                    class="dropdown-item d-flex align-items-center"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Trainings</span>
                    </div>
                  </Link>
                  <Link
                    to="/FresherJob"
                    class="dropdown-item d-flex align-items-center"
                  >
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
                  <Link
                    to="/Internship"
                    class="dropdown-item d-flex align-items-center"
                  >
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
          </div>
        </div>
      </div>
    </div>
  );
}
