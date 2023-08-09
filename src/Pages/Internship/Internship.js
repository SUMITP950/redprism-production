import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton ,{ SkeletonTheme }  from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Internship() {
  useEffect(() => {
    document.title = "Internship";
  }, []);

  const [data1, SetData] = useState([]);
  const [load, SetLoad] = useState(true);
  useEffect(() => {
    
    axios.get("https://dummyjson.com/products").then((res) => {
      SetData(res.data.products);
    });
    // console.log(data.products[0]);})
  });
  const trial=()=>{
    
  }

  // const [isLoading, setIsLoading] = useState(true);
  // try {
  //   const { data } = await axios({
  //     method: "put",
  //     url: "https://fakestoreapi.com/products/",
  //     data: {
  //       title: "Making PUT Requests with Axios",
  //       status: "published",
  //     },
  //   });

  //   console.log(data);
  // } catch (err) {
  //   if (err.response.status === 404) {
  //     console.log("Resource could not be found!");
  //   } else {
  //     console.log(err.message);
  //   }
  // }
  // useEffect(() => {
  //   const url = "https://fakestoreapi.com/products/";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //       setData(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
        {/* <Skeleton count={3} /> */}
      <div class="py-4">
        <div class="container-fluid body-padding">


          <div class="row justify-content-around">
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
   
    
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="row">
                {data1.map((item, id) => {
                  return (
                    <div class="col-md-3" key={id}>
                      <a href="#">
                        <div class="border-i network-item rounded mb-3">
                          <div class="p-3 d-flex align-items-center network-item-header">
                            <div class="dropdown-list-image mr-3">
                              <img
                                class="rounded-circle"
                                src={item.images[0]}
                                alt=""
                              />
                            </div>
                            <div class="font-weight-bold">
                              <h6
                                class="font-weight-bold text-dark mb-0 dataoveri"
                                title={item.title }
                              >
                                {item.title }
                              </h6>
                              <div class="small text-black-50">
                                Photographer at Photography
                              </div>
                            </div>
                          </div>

                          <div class="network-item-footer py-2 d-flex text-center">
                            <div class="col-6 pl-3 pr-1">
                              <button
                                style={{ fontSize: "14px !importent" }}
                                type="button"
                                class="btn apply-btn-intern btn-sm btn-block"
                              >
                                {" "}
                                Apply Now{" "}
                              </button>
                            </div>
                            <div class="col-6  pl-1">
                              <button
                                type="button"
                                class="btn share-btn-intern btn-sm btn-block"
                              >
                                <img
                                  src="img/icon/whatsapp.png"
                                  alt=""
                                  class="whatsapp-img-intern"
                                />
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </main>
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
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
