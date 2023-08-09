import React from "react";
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <>
    <div className="py-4">
      <div className="container-fluid body-padding">
        <div className="row justify-content-around">
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
                  <Link to="/Setting">
                      <span class="font-weight-bold">Settings</span>
                      </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile border-rm">
                      <i class="feather-log-out left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/SampleResume">
                      <span class="font-weight-bold">Simple Resume</span>
                      </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile border-rm">
                      <i class="feather-file-text left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/Training">
                      <span class="font-weight-bold">Trainings</span>
                      </Link>
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
                  <Link to="/FresherJob">
                      <span class="font-weight-bold">Fresher Jobs</span>
                      </Link>
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
                  <Link to="/Internship">
                      <span class="font-weight-bold">Internship</span>
                    </Link>
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
                  <Link to="/">
                      <span class="font-weight-bold">Sign Out</span>
                      </Link>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm rounded bg-white mb-3 osahan-chat">
                <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">
                  Messaging
                </h5>
                <div class="row m-0">
                  <div class="border-right col-lg-5 col-xl-4 px-0">
                    <div class="osahan-chat-left">
                      <div class="position-relative icon-form-control p-3 border-bottom">
                        <i class="feather-search position-absolute"></i>
                        <input
                          placeholder="Search messages"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="osahan-chat-list">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p9.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Ashley Briggs</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center bg-light border-left border-primary  border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p1.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Carl Jenkins</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p3.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Bertha Martin</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p4.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Stacie Hall</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <div class="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">
                              A
                            </div>
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Ashley Briggs</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p1.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Carl Jenkins</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p3.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Bertha Martin</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <div class="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">
                              S
                            </div>
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Stacie Hall</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p3.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Bertha Martin</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p4.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Stacie Hall</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <div class="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">
                              A
                            </div>
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Ashley Briggs</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p1.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Carl Jenkins</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="img/p3.png"
                              alt=""
                            />
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Bertha Martin</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check text-primary"></i>{" "}
                              Pellentesque semper ex diam, at tristique ipsum
                              varius sed. Pellentesque non metus ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                        <div class="p-3 d-flex align-items-center osahan-post-header overflow-hidden">
                          <div class="dropdown-list-image mr-3">
                            <div class="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">
                              S
                            </div>
                          </div>
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">Stacie Hall</div>
                            <div class="small text-truncate overflow-hidden text-black-50">
                              <i class="feather-check"></i> Semper ex diam, at
                              tristique ipsum varius sed. Pellentesque non metus
                              ullamcorper
                            </div>
                          </div>
                          <span class="ml-auto mb-auto">
                            <div class="text-right text-muted pt-1 small">
                              00:21PM
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 col-xl-8 px-0">
                    <div class="p-3 d-flex align-items-center  border-bottom osahan-post-header">
                      <div class="font-weight-bold mr-1 overflow-hidden">
                        <div class="text-truncate">Carl Jenkins</div>
                        <div class="small text-truncate overflow-hidden text-black-50">
                          Askbootstap.com - Become a Product Manager with super
                          power
                        </div>
                      </div>
                      <span class="ml-auto">
                        <button
                          type="button"
                          class="btn btn-light btn-sm rounded"
                        >
                          <i class="feather-phone"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-light btn-sm rounded"
                        >
                          <i class="feather-video"></i>
                        </button>
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="feather-more-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="feather-trash"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="feather-x-circle"></i> Turn Off
                            </button>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div class="osahan-chat-box p-3 border-top border-bottom bg-light">
                      <div class="text-center my-3">
                        <span class="px-3 py-2 small bg-white shadow-sm  rounded">
                          DEC 21, 2020
                        </span>
                      </div>
                      <div class="d-flex align-items-center osahan-post-header">
                        <div class="dropdown-list-image mr-3 mb-auto">
                          <img class="rounded-circle" src="img/p1.png" alt="" />
                        </div>
                        <div class="mr-1">
                          <div class="text-truncate h6 mb-3">Carl Jenkins</div>
                          <p>Hi Marie</p>
                          <p>
                            welcome to Live Chat! My name is Jason. How can I
                            help you today?
                            <a href="#">
                              <span
                                class="__cf_email__"
                                data-cfemail="b2dbd3dfddc1d3dad3dcf2d5dfd3dbde9cd1dddf"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </p>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            00:21PM
                          </div>
                        </span>
                      </div>
                      <div class="text-center my-3">
                        <span class="px-3 py-2 small bg-white shadow-sm rounded">
                          DEC 22, 2020
                        </span>
                      </div>
                      <div class="d-flex align-items-center osahan-post-header">
                        <div class="dropdown-list-image mr-3 mb-auto">
                          <img class="rounded-circle" src="img/p8.png" alt="" />
                        </div>
                        <div class="mr-1">
                          <div class="text-truncate h6 mb-3">
                            Jack P. Angulo
                          </div>
                          <p>
                            Hi, I wanted to check my order status. My order
                            number is 0009483021 😀
                          </p>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            00:21PM
                          </div>
                        </span>
                      </div>
                      <div class="text-center my-3">
                        <span class="px-3 py-2 small bg-white shadow-sm rounded">
                          DEC 23, 2020
                        </span>
                      </div>
                      <div class="d-flex align-items-center osahan-post-header">
                        <div class="dropdown-list-image mr-3 mb-auto">
                          <img class="rounded-circle" src="img/p1.png" alt="" />
                        </div>
                        <div class="mr-1">
                          <div class="text-truncate h6 mb-3">Carl Jenkins</div>
                          <p>Is there anything else that I can do for you?</p>
                          <p>
                            wI understand your concern… I wouldn’t want my
                            child’s gift to arrive late either. It looks like
                            your order is set to arrive in 2 business days, so
                            it should arrive by Friday, just in time!
                          </p>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            00:21PM
                          </div>
                        </span>
                      </div>
                      <div class="text-center my-3">
                        <span class="px-3 py-2 small bg-white shadow-sm rounded">
                          DEC 24, 2020
                        </span>
                      </div>
                      <div class="d-flex align-items-center osahan-post-header">
                        <div class="dropdown-list-image mr-3 mb-auto">
                          <img class="rounded-circle" src="img/p8.png" alt="" />
                        </div>
                        <div class="mr-1">
                          <div class="text-truncate h6 mb-3">
                            Jack P. Angulo
                          </div>
                          <p>
                            Great, thank you! Yes, I also wanted to make sure I
                            entered the right shipping address. My address is
                            12390 Mulberry Ln, Coral Springs, FL 33067. Is that
                            where it’s being shipped to?
                          </p>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            00:21PM
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="w-100 border-top border-bottom">
                      <textarea
                        placeholder="Write a message…"
                        class="form-control border-0 p-3 shadow-none"
                        rows="2"
                      ></textarea>
                    </div>
                    <div class="p-3 d-flex align-items-center">
                      <div class="overflow-hidden">
                        <button
                          type="button"
                          class="btn btn-light btn-sm rounded"
                        >
                          <i class="feather-image"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-light btn-sm rounded"
                        >
                          <i class="feather-paperclip"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-light btn-sm rounded"
                        >
                          <i class="feather-camera"></i>
                        </button>
                      </div>
                      <span class="ml-auto">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm rounded"
                        >
                          <i class="feather-send"></i> Send
                        </button>
                      </span>
                    </div>
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
                  <Link to="/Profile">
                      <span class="font-weight-bold">User Name</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-edit left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/ProfileEdit">
                      <span class="font-weight-bold">Edit Profile</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <img src="img/icon/smile.svg" alt="" />
                    </div>
                  </div>
                  <div>
                  <Link to="/Profile">
                      <span class="font-weight-bold">User Profile</span>
                      </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-users left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/MyBuddies">
                      <span class="font-weight-bold">My Buddies</span>
                      </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-briefcase left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/Jobs">
                      <span class="font-weight-bold">Jobs</span>
                    </Link>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle-profile">
                      <i class="feather-save left-menu-icon"></i>
                    </div>
                  </div>
                  <div>
                  <Link to="/Jobprofile">
                      <span class="font-weight-bold">My Jobs</span>
                     </Link>
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
