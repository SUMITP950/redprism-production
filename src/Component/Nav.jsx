import React,{ useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import {  FaRegUser} from "react-icons/fa";
import {PiMessengerLogoBold} from "react-icons/pi";
import { AiOutlineNotification} from "react-icons/ai";
import { IoHomeOutline} from "react-icons/io5";



export default function Nav() {
 const navigate = useNavigate()


const protectingPage=()=>{
  if (!localStorage.getItem("authToken")) {
    navigate("/");
  }
}


  
  const handleLogout =(event) => {
    event.preventDefault();
   localStorage.removeItem("authToken")
   protectingPage();
  };
  return (
    <div>
      <nav
        class="navbar bg-dark navbar-expand osahan-nav-top head-padding osahan-nav-top"
        id="navbar"
      >
        <div class="container-fluid">
        
          <Link class="menuzord-brand navbar-brand mr-2 " to="/Home"><img src="https://www.redprismgroup.com/img/logo-white.png" alt="RedPrism logo"/></Link>
          
          <form class="d-none d-sm-inline-block form-inline m-auto my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control shadow-none border-0 search-btn search-placeholder"
                placeholder="Search Buddies"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn search-icon" type="button">
                  <i class="feather-search searchicon"></i>
                </button>
              </div>
            </div>
          </form>
          <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="feather-search mr-2"></i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control border-0 shadow-none"
                      placeholder="Search people, jobs and more..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn" type="button">
                        <i class="feather-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" to="/Home">
              <IoHomeOutline size={22} className="text-light "/>
              </Link>
            </li>
            <li class="nav-item desktop-view-menu">
             
              <Link class="nav-link mx-2" to="/MyBuddies">
              <FaRegUser size={20} className="text-light"/>
              </Link>
            </li>

            {/* mobile menu view start */}
            <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown mobile-view-menu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="feather-users mr-2 menu-icon"></i>

                {/* <span class="badge badge-danger badge-counter">8</span> */}
              </a>

              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#" data-toggle="modal" data-target="#staticBackdrop"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-upload-cloud left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Upload Resume</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-user left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> User Name</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-edit left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Edit Profile</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <img src="img/icon/smile.svg" alt="" />
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> User Profile</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-users left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> My Buddies</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-briefcase left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Jobs</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-save left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> My Jobs</div>
                  </div>
                </a>
              </div>
            </li>
            {/* mobile menu view end */}

            <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
              <Link
                class="nav-link dropdown-toggle mx-2"
               
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                
              <PiMessengerLogoBold size={22} className="text-light"/>
              
              </Link>

              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                <h6 class="dropdown-header">Message Center</h6>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/p1.png" alt="" />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/p2.png" alt="" />
                    <div class="status-indicator"></div>
                  </div>
                  <div class="overflow-hidden">
                    <div class="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/p3.png" alt="" />
                    <div class="status-indicator bg-warning"></div>
                  </div>
                  <div class="overflow-hidden">
                    <div class="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/p4.png" alt="" />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="overflow-hidden">
                    <div class="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <Link to="/Message"  class="dropdown-item text-center small text-gray-500"
                 >
             
                 
               
                  Read More Messages
                
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow osahan-list-dropdown">
              <Link
                class="nav-link dropdown-toggle mx-2 "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                 <AiOutlineNotification size={23} className="text-light"/>
              </Link>

              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                <h6 class="dropdown-header">Alerts Center</h6>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="notifications.html"
                >
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="feather-download-cloud text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="notifications.html"
                >
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="feather-edit text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="notifications.html"
                >
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="feather-folder text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </a>
                <Link to="/Notifications"  class="dropdown-item text-center small text-gray-500">
              
                  Show All Alerts
                
                </Link>
              </div>
            </li>

            {/*Settings mobile menu view start */}
            <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown mobile-view-menu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="feather-settings left-menu-icon menu-icon"></i>

                {/* <span class="badge badge-danger badge-counter">8</span> */}
              </a>

              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-file-text left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Simple Resume</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <img src="img/icon/training.png" alt="" class="icon-image" />
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Trainings</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <img src="img/icon/2255545.png" alt="" class="icon-image" />
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Fresher Jobs</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <img src="https://static.thenounproject.com/png/960899-200.png" alt="" class="icon-image" />
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Internship</div>
                  </div>
                </a>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-save left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> My Jobs</div>
                  </div>
                </a>

                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <div class="dropdown-list-icon">
                    <i class="feather-log-out left-menu-icon"></i>
                  </div>
                  <div class="font-weight-bold overflow-hidden">
                    <div class="text-truncate"> Sign Out</div>
                  </div>
                </a>
              </div>
            </li>
            {/* Settings mobile menu view end */}

            <li class="nav-item ml-3">
              <button
                type="button"
                class="btn btn-light d-none d-lg-inline color-black upload-btn-text  upload-btn"
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                <i class="feather-log-out text-danger "></i>
                &nbsp; Sign Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* modal body */}

      <div
        class="modal fade"
        id="staticBackdrop"
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
               Do you want to logout? 
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
              <form className="d-none d-sm-inline-block form-inline m-auto my-md-0 mw-100 navbar-search">
            <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <button class=" btn btn-danger" data-dismiss="modal" onClick={handleLogout} style={{marginLeft:30,marginRight:20,width:'80px',borderRadius:"20px"}}>Yes</button>
              <button class="btn btn-success " data-dismiss="modal" style={{width:'80px',borderRadius:"20px"}}>No</button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
