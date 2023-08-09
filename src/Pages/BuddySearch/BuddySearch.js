import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Select from "react-select";

export default function BuddySearch(props) {
  useEffect(() => {
    document.title = "Buddy Search";
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div class="py-4">
        <div class="container-fluid body-padding">
          <div class="row justify-content-around">
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="pt-3" style={{ backgroundColor: "#edf2f6" }}>
                <div class="container-fluid">
                  <div class="row justify-content-center">
                    <div class="col-md-12">
                      <div
                        class="d-flex justify-content-around"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid rgb(6, 6, 6)",
                          padding: "10px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <div class="dropdown">
                          <div className="d-flex align-items-center">
                            <img
                              class="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/000000/circuit.png"
                              alt=""
                            />
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,

                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,

                                  border: "none",
                                  backgroundColor: "#fff",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Technology"}
                            />
                          </div>
                        </div>

                        <div class="dropdown">
                          <div className="d-flex align-items-center">
                            <img
                              class="dropdown-menu-img"
                              src="https://img.icons8.com/ios/50/popular-man.png"
                              alt=""
                            />
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,

                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,

                                  border: "none",
                                  backgroundColor: "#fff",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Type"}
                            />
                          </div>
                        </div>

                        <div class="dropdown">
                          <div className="d-flex align-items-center">
                            <i class="feather-map-pin left-menu-icon"></i>
                            <Select
                              styles={{
                                container: (baseStyles, state) => ({
                                  ...baseStyles,

                                  display: "inherit",
                                }),
                                control: (baseStyles, state) => ({
                                  ...baseStyles,

                                  border: "none",
                                  backgroundColor: "#fff",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  color: "Black",
                                  fontWeight: "bold",
                                }),
                                indicatorSeparator: (baseStyles, state) => ({
                                  ...baseStyles,
                                  display: "none",
                                }),
                              }}
                              options={options}
                              isMulti
                              placeholder={"Location"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 ">
                  {" "}
                  <div
                    class="col-md-12 mt-5 "
                    style={{
                      border: "1px solid gray",
                      borderRadius: "15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div class="row px-2 padding-bottom">
                      <div className="col-md-3">
                        <img
                          src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <h4 class="text-dark mt-2">Username</h4>
                        <p class=" ">
                          Business Development Manager
                          <br />
                          Confidential
                          <br />
                          Mumbai, Maharashtra
                        </p>
                      </div>
                      <div className="col-md-4 d-flex align-items-center">
                        <div className="ml-4">
                          <Link className="btn btn-dark">
                            <i className="feather-plus-circle"></i> Add buddies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-12 mt-5 "
                    style={{
                      border: "1px solid gray",
                      borderRadius: "15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div class="row px-2 padding-bottom">
                      <div className="col-md-3">
                        <img
                          src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <h4 class="text-dark mt-2">Username</h4>
                        <p class=" ">
                          Business Development Manager
                          <br />
                          Confidential
                          <br />
                          Mumbai, Maharashtra
                        </p>
                      </div>
                      <div className="col-md-4  d-flex align-items-center">
                        <div className="ml-4">
                          <Link className="btn btn-dark">
                            <i className="feather-plus-circle"></i> Add buddies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 dn">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-4 pb-4">
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-user left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">User Name</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-edit left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Edit Profile</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">User Profile</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Buddies</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Jobs</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">My Jobs</span>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 dn">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm">
                  <h6 class="pt-3 text-center">Other Option</h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Settings</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Sign Out</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Simple Resume</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
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
                      <span class="font-weight-bold">Trainings</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
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
                      <span class="font-weight-bold">Fresher Jobs</span>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="https://static.thenounproject.com/png/960899-200.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <span class="font-weight-bold">Internship</span>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
