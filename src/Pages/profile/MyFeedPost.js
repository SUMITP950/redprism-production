import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";

import { IoSend } from "react-icons/io5";
import {MdDeleteForever} from "react-icons/md";
import {RiDeleteBin6Fill} from "react-icons/ri";
import { WhatsappShareButton, WhatsappIcon } from "react-share";


const MyFeedPost = (props) => {

  const data = props.feed_post_data;

  let dataMyLike = "No";
  if (data.user_like.length > 0) {
    dataMyLike = "Yes";
  }

  const [getpost, setGetpost] = useState([]);
  const [userDetails, SetUserDetails] = useState("");
  const [thought, setThought] = useState(""); // this is for comment value
  const [comentList, setcomentList] = useState({});
  const [myLike, setmyLike] = useState(dataMyLike); //total comment & like
  const [totalLike, settotalLike] = useState(data.totalLike); //total comment & like
  const [totalComment, settotalComment] = useState(data.totalComments); //total comment & like


  const handleThoughtsChange1 = (e) => {
    setThought(e.target.value);
  };

  const disnan = (postId) => {
    document.getElementById("open_" + postId).style.display = "none";
  };

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

    // Fetch feed post


    // Delete Feedpost
    const deleteFeedpost = (feedpostId) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/profileDetails/deleteMyFeedPost`,
          {
            feeds_post_code: feedpostId,
          },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            // getFeedsPost();
            
            toast.success(`${response.data.mssg}`);
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    // likes
    const handellike = (postId) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/profileDetails/saveFeedsPostLikeDislike`,
          { feeds_post_code: postId, type: "Like" },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
            setmyLike("Yes");
          getPostTotalLikeComments(postId);
            // getFeedsPost();
           
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };


    const getPostTotalLikeComments = (postId) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/home/getTotalLikeComments`,
          { feeds_post_code: postId },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
              settotalLike(response.data.totalLikes);
              settotalComment(response.data.totalComments);
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // Dislike
    const handelDislike = (postId) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/profileDetails/saveFeedsPostLikeDislike`,
          { feeds_post_code: postId, type: "Dislike" },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
            setmyLike("No");
         
          getPostTotalLikeComments(postId);
            // getFeedsPost();
            
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    // comment section api
  
    const handleComent = (id) => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/profileDetails/saveFeedsComment`,
          {
            feeds_post_code: id,
            comment: thought,
          },
          {
            headers: {
              "auth-token": localStorage.getItem("authToken"),
            },
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            disblk(id);
            setThought("");
            // getFeedsPost();
            getPostTotalLikeComments(id);
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      return removeActivity();
    };

    // comment list section api

  const disblk = (postId) => {
    document.getElementById("open_" + postId).style.display = "block";
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/profileDetails/getFeedsPostCommentsList`,
        {
          feeds_post_code: postId,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setcomentList({
            feedId: postId,
            commentlist: response.data.feedsCommentsList,
          });
        }
        if (response.data.status === "error") {
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

     // comment delete section api
  const removeActivity = (commentId, feedpostId) => {
    console.log(commentId);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/home/deleteFeedsComment`,
        {
          feeds_comment_code: commentId,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          disblk(feedpostId);
          getPostTotalLikeComments(feedpostId);
          // getFeedsPost();
        }
        if (response.data.status === "error") {
          // toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
          <div class="dropdown-list-image mr-3">
            <img
              class="rounded-circle"
              src={`${process.env.REACT_APP_API_URL}/${data.employee_details[0].employee_image}`}
              alt=""
            />
            <div class="status-indicator bg-success"></div>
          </div>
          <div class="font-weight-bold">
            <div class="text-truncate">
              {`${data.employee_details[0].first_name} ${data.employee_details[0].last_name} (${data.employee_details[0].employee_type})`}
            </div>

            <div class=" text-gray-500 ">{data.post_datetime.slice(0, 10)}</div>
          </div>
          <span class="ml-auto small">
            <RiDeleteBin6Fill
              size={19}
              className="text-danger"
              data-toggle="modal"
              data-target="#staticBackdrop2"
              // onClick={() => deleteFeedpost(data._id)}
            />
            <br />
          </span>
        </div>
        <div class="p-3 border-bottom osahan-post-body">
          <p
            class="mb-0"
            // key={i}
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            <div>{data.post_details}</div>
          </p>
        </div>
        <div class="p-3 osahan-post-footer text-center d-flex jcc">
          <button
            class="mr-3 text-secondary btn btn-link "
            onClick={
              myLike === "Yes"
                ? () => handelDislike(data._id)
                : () => handellike(data._id)
            }
          >
            {myLike === "Yes" ? (
              <AiFillHeart
                size={18}
                className="text-danger"
                
                style={{ cursor: "pointer" }}
              />
            ) : (
              <AiOutlineHeart
                size={18}
              
                style={{ cursor: "pointer" }}
              />
            )}

            {totalLike} 
          </button>
          <button
            class="mr-3 text-secondary btn btn-link"
            onClick={() => disblk(data._id)}
          >
            <LiaComments size={19} className="text-primary" />

            {totalComment}
          </button>
          <WhatsappShareButton
            title="Sharing Content"
            url="https://www.redprismgroup.com/"
          >
            <WhatsappIcon
              logoFillColor="white"
              round={true}
              size={20}
            ></WhatsappIcon>
          </WhatsappShareButton>
        </div>
         {/* modal body */}
        <div
        class="modal fade"
        id="staticBackdrop2"
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
               Do you want to delete your post ? 
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
              <button class=" btn btn-danger" data-dismiss="modal" onClick={() => deleteFeedpost(data._id)} style={{marginLeft:30,marginRight:20,width:'80px',borderRadius:"20px"}}>Yes</button>
              <button class="btn btn-success " data-dismiss="modal" style={{width:'80px',borderRadius:"20px"}}>No</button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        {/* comment list  */}
        <div id="comment list">
          {comentList.feedId === data._id &&
            comentList.commentlist.map((list, listid) => {
              return (
                <>
                  <div class="border m-3 p-2 rounded">
                    <div class="dropdown-list-image mr-3 d-flex pl-3">
                      <img
                        class="rounded-circle"
                        src={`${process.env.REACT_APP_API_URL}/${list.employee_details[0].employee_image}`}
                        alt=""
                      />
                      <div class="font-weight-bold pl-1">
                        <div class="text-truncate">
                          {`${list.employee_details[0].first_name} ${list.employee_details[0].last_name}`}
                        </div>
                        <div class="small text-gray-500 pl-1">
                          {list.employee_details[0].employee_type}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    >
                      <p
                        class="my-3 px-2 py-1"
                        key={listid}
                        style={{
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        {list.comment}
                      </p>

                      {userDetails._id === list.employee_details[0]._id ? (
                        <button
                          style={{
                            fontWeight: "bold",
                            fontSize: "25",
                            border: "none",
                          }}
                          onClick={() => removeActivity(list._id, data._id)}
                        >
                          <MdDeleteForever size={20} className="text-danger" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        <section
          id={`open_` + data._id}
          style={{ backgroundColor: "#eee", display: "none" }}
        >
          <div class="container m-0 p-0">
            <div class="row d-flex justify-content-center">
              <div class="col-md-12">
                <div class="card">
                  <div
                    class="card-footer py-3 border-0"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div class="d-flex flex-start w-100">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${data.employee_details[0].employee_image}`}
                        style={{
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                      <div class="form-outline w-100">
                        <textarea
                          class="form-control"
                          id="textAreaExample"
                          rows="3"
                          placeholder="Comment...."
                          style={{ background: "#fff" }}
                          value={thought}
                          onChange={handleThoughtsChange1}
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        style={{
                          background: "none",

                          border: "none",

                          cursor: "pointer",
                          outline: "inherit",
                        }}
                        onClick={() => handleComent(data._id)}
                      >
                        <IoSend size={35} className="text-primary" />
                      </button>
                    </div>
                    <div class="float-end mt-2 pt-1">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        onClick={() => disnan(data._id)}
                        // onClick={() => { disnan(data._id);;}}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* comment section end */}
      </div>
    </>
  );
};

export default MyFeedPost;
