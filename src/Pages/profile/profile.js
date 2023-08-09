/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import MyFeedPost from "./MyFeedPost";



export default function Profile() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [employeeImage, setEmployeeImage] = useState("");
  const [email, setEmail] = useState("");
  const [phnmbr, setPhNumber] = useState("");
  const [lookingjob, setLookingJob] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [immediateJoiner, setImmediateJoiner] = useState("");
  const [fresher, setFresher] = useState("");
  const [cv, setCv] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [technology, setTechnology] = useState("");
  const [experience, setExperience] = useState("");
  const [achievement, setAchievement] = useState("");
  const [progressbar, setProgressBar] = useState(0);
  const [progressbar1, setProgressBar1] = useState(0);
  const [progressbar2, setProgressBar2] = useState(0);
  const [getpost, setGetpost] = useState([]);
 



  //Protecting this page
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);



  //Fetch profile details
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = () => {
    
    document.getElementById("loader").style.display="flex";
    axios
      .get("http://testredprism.co/api/profileDetails/getMyProfileDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setUserName(res.data.profileDetails[0].user_name);
        setFirstName(res.data.profileDetails[0].first_name);
        setLastName(res.data.profileDetails[0].last_name);
        setEmployeeType(res.data.profileDetails[0].employee_type);
        setEmployeeImage(res.data.profileDetails[0].employee_image);
        setEmail(res.data.profileDetails[0].email_id);
        setPhNumber(res.data.profileDetails[0].ph_num);
        setLookingJob(res.data.profileDetails[0].looking_job);
        setNoticePeriod(res.data.profileDetails[0].notice_period);
        setImmediateJoiner(res.data.profileDetails[0].immediate_joinner);
        setFresher(res.data.profileDetails[0].fresher);
        setCv(res.data.profileDetails[0].resume);
        setAchievement(res.data.profileDetails[0].achievement);
        setLocation(
          res.data.profileDetails[0].location.length > 0
            ? `${res.data.profileDetails[0].location[0].area},${res.data.profileDetails[0].location[0].city},${res.data.profileDetails[0].location[0].state}`
            : ""
        );
        setCompany(
          res.data.profileDetails[0].company_details.length > 0
            ? res.data.profileDetails[0].company_details[0].company_name
            : ""
        );
        setTechnology(
          res.data.profileDetails[0].technology.length > 0
            ? res.data.profileDetails[0].technology[0].tech_name
            : ""
        );
        setExperience(
          res.data.profileDetails[0].experience_master.length > 0
            ? res.data.profileDetails[0].experience_master[0].experience
            : ""
        );

        if (res.data.profileDetails[0].employee_type === "Hr") {
          document.getElementById("cv").style.display = "none";
          document.getElementById("tech").style.display = "none";
          document.getElementById("lookingjob").style.display = "none";
          document.getElementById("noticePeriod").style.display = "none";
          document.getElementById("immediateJoiner").style.display = "none";
          document.getElementById("fresher").style.display = "none";
          document.getElementById("experience").style.display = "none";
          document.getElementById("location").style.display = "none";

        }
    document.getElementById("loader").style.display="none";

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFile = (e) => {
    document.getElementById("progress").style.display = "flex";

    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("employee_image", file);
    axios
      .post(
        "http://testredprism.co/api/profileDetails/updateProfilePhoto",
        formdata,
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            setProgressBar(Math.round(100 * event.loaded) / event.total);
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          getProfileDetails();
          getFeedsPost();
          setTimeout(function () {
            document.getElementById("progress").style.display = "none";
          }, 900);
          toast.success(`${res.data.mssg}`);
        }
        if (res.data.status === "error") {
          setTimeout(function () {
            document.getElementById("progress").style.display = "none";
          }, 900);
          toast.error(`${res.data.mssg}`);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCv = (e) => {
    document.getElementById("progress1").style.display = "flex";
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("resume", file);
    axios
      .post(
        "http://testredprism.co/api/profileDetails/uploadResume",
        formdata,
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            setProgressBar1(Math.round(100 * event.loaded) / event.total);
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          getProfileDetails();
          setTimeout(function () {
            document.getElementById("progress1").style.display = "none";
          }, 900);
          toast.success(`${res.data.mssg}`);
        }
        if (res.data.status === "error") {
          setTimeout(function () {
            document.getElementById("progress1").style.display = "none";
          }, 900);
          toast.error(`${res.data.mssg}`);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAchievement = (e) => {
    document.getElementById("progress2").style.display = "flex";
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("achievement", file);
    axios
      .post(
        "http://testredprism.co/api/profileDetails/uploadAchievement",
        formdata,
        {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            setProgressBar2(Math.round(100 * event.loaded) / event.total);
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          getProfileDetails();
          setTimeout(function () {
            document.getElementById("progress2").style.display = "none";
          }, 900);
          toast.success(`${res.data.mssg}`);
        }
        if (res.data.status === "error") {
          setTimeout(function () {
            document.getElementById("progress2").style.display = "none";
          }, 900);
          toast.success(`${res.data.mssg}`);
          toast.error(`${res.data.mssg}`);
        }
      })
      .catch((err) => console.log(err));
  };

  // Fetch feed post

  const getFeedsPost = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/profileDetails/getMyFeedsPost`,
        {
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
          setGetpost(response.data.feedsList);
        }
        if (response.data.status === "error") {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch feed post
  useEffect(() => {
    getFeedsPost();
  }, []);

 

 
  

  
  


  return (
    <div class="py-4">
      <div class="container-fluid ">
        <div class="row">
          <aside class="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
              <div class="py-4 px-3 border-bottom">
                {employeeImage && (
                  <img
                    src={`http://testredprism.co/${employeeImage}`}
                    class="img-fluid mt-2 mb-2 "
                    alt="Responsive image"
                    style={{
                      width: "200px",
                      maxWidth: "100%",
                      height: "200px",
                      borderRadius: "50%",
                    }}
                  />
                )}

                <div
                  className="progress"
                  id="progress"
                  style={{ display: "none" }}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="progressbar"
                    aria-valuenow={progressbar}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${progressbar}%` }}
                  ></div>
                </div>
                <div className="bg-white p-3 rounded w-50 vh-50 m-auto">
                  <label
                    for="file"
                    style={{
                      backgroundColor: "lightblue",
                      fontSize: 16,
                      borderRadius: "10px",
                    }}
                  >
                    <i class="feather-camera text-primary "></i> Upload
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={handleFile}
                    style={{ display: "none", visibility: "none" }}
                  />
                </div>
                <br />
                {/* <div class="text-center mt-2 mb-2">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    <i class="feather-eye"></i>
                    Upload Photo
                  </button>
                </div> */}
                <h5 class="font-weight-bold text-dark mb-1 mt-z">{userName}</h5>
                <p class="mb-0 text-bold">{employeeType}</p>
              </div>

              <div class="col-12 border-bottom p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="icon-image"
                  />
                  {` ${firstName} ${lastName}`}
                </h6>
              </div>

              <div class="col-12 border-bottom p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="icon-image"
                  />{" "}
                  {email}
                </h6>
              </div>
              <div class="col-12 p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLI1ScblWFNWTVofbZc_G6x5bs2bmC0Hw2Og&usqp=CAU"
                    alt=""
                    class="icon-image"
                  />
                  {" " + phnmbr}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="location">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkKdoZusUOBy0bhxG3Yhb27hXXx15tLGo0A&usqp=CAU"
                    alt=""
                    class="icon-image"
                  />{" "}
                  {location}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="tech">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9dcoBfr4PPqB1l1AkxkdX45sRr18X-SItQ&usqp=CAU"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Skills: {technology}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="lookingjob">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjHmwurKlsAZXL7OBdYFallle6yRtzb7Rmw&usqp=CAU"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Looking Job: {lookingjob}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="noticePeriod">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Notice Period : {noticePeriod}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="immediateJoiner">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Immediate Joinner : {immediateJoiner}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="fresher">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Fresher : {fresher}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left" id="experience">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAfv////8AV7AAff8AWrYAev8AffsAc/8Adf8AWLIAd/8Aef8Acv8AVa8AUa4ATKwAT60ARqoASav0+v8AQ6nW6P/t9v8ASKuTwP+92f9qqv+rzf/H3/9ipf83kf+x0f+gx/+Euf9Elv8Yh/9+tP91r//1+//V5v9aoP8ki/9Mm//S4f+Tuv/n8f/E3f/i6PPS2+w8bbhIdrySqdNpov/AzOR6l8qnxv+dsdcYYrZqkcyuvt3H1estZLWEpNZjhsOjttmTrtlBdr9Wfr8BUrkjAAAPPklEQVR4nM2dfVviOhOHG7qlsfSF8iogC4KieHTF111BxJXv/52eFhDSNm0nzYR9fn+d63gd2vskmcxMZlKNKFfrqtM7vehej6ZjbavxdHTdvTjtda5a6h+vKfztSXNwfj2umJRaFcPQA+0Iw380jIpFqVkZX58PmhOFb6GKsNnrTjdk31Rp0jek026vqehNVBA2hzeWaeWyRTmD/+JmqIISm7A+6OqCdCyl3h3Ukd8IlbA1HFFaiO5ASeloiGp/8AgnvVEweBJ03wqGctTDsz1YhGd9ioL3DUn7Z0hvhkJYH45NPLwdpDkeoixJBMLmJbVk1l6adIteIhhXacKzG/ThO8gwb6QnqyTh2U+FfFvGn5KMUoQBn4rpGZUuyShB2BwdgW/LOJJYj4UJW33F85OVYfYLewFFCU/p8fg2jPT0qIRnZeuofKGscrHlWISw3j/SAoxKN/tFXIAChIPKcSfoQUZlcATC+s0/GcCtdPNGeBhFCTvGvxrArQyjo5bw8h8O4Fa6eamQ8G58fBOalDW+U0XYoUpCCCOULvDTOhWZqQKEFzY6oF6hdvmmf3n5PDJsuA+h2xcqCEcUm8+wx7f/7X+/1enC40w6Qie8G6MH8XY34U/3wL6SUYYuRiDhFXYUr9vPXF/6N3Qp6NYVJmEHe5MwtP9SHnVXBk4W3YTZGxDh0Mbl0+hNxtOm0PVgD7EIz7EBczbtMXTC2Oc4hOcmMiDNsfUtsNU2AYj5hJfYgNZz3iMXYNcJ4MLlEl5ib4P6OPelyAPYsNFcxDxC9Cmq2YCN7L1dhv5c7kTNIcQHtG7zAQkpOWiI2YRDdEDdggCSp2oJjpi9aWQSdrC3CegQknevBEe0M7f+LMIr9BEM3gaWhZg0SgKIZpYDl0F4p+BEyYDGBJ4jgKhbGdYrgxDsWgjI+g0kfAgJ4YgZO1A64UhFyommOdxxPW4IwYgZcyOV8AI94A0FXIZ7QjBiuieYRjhQYGUCVYCAu1kqgGimJYtTCO+UJJ00vQwlrH4TQhF1mmJtUghVWBkRws1uIYiYYm34hJeK8qK6DiSc1UrCiBbfCecSdtQswkAmkDDw2sQR+WkNHmFdqnAr+yWAGbKlUxJH1A2epeYR3qg7fLFg2aOZXyoVQDR46R8OoaKNYqMKLFm9ckuFEHlbRpKwrqTAaScdlNu7b8QBgYi6lZynySf2lR4Qgty2h8QQQhGNfj7hL4VzVIMFF581DiAQ0fyVS1hWfARq5w7ijDNHwYhJnyJOeKr6DDTXrbn3nBRCEKIVr7uJEcKTsYVVuc4GrKYCwhBp7MQnRqjWzOxeISvF+e5nAIIQ48YmSthUa2Z2oulJ79dGJiAI0YweS0YJlcT1SVXG/FrDl1I1mw+EGDPXEcKzowyhFp6PdpMO6suynTOAQEQzUgAXIfx5vGIZwx4tGJNQf3mtpdtQQUT9Zxrh0YZw+x6WX1p/PH1+Pn2s3nzPBfJBECODyBIecQi3+uFWQ7kCdCDEyCAyhMcdwo1+iJGBEdlBZAgVhoWpUoTIBooHwuPshXEpQmT2xANh99+UVapBNLpJwvo/GUJNFaJZTxAqDypSpQTxEGLsCVXHhXvpiXJLFYiHIO2b8Ex92BS2wVLbLE9Hz4F+lu19Q6YKRHoWI1QdNoWVpOPu7zPWHb36PbItVYj7IGpHOFE6hHrFLl90eOna1i2tKEKkkwhhT6GdMczybUZnVtdWg2j1IoTKAkPdMvs5uacOVYL4HSZuCVuKNkPdsm7zT31nahDNFkM4VDNJrQqsMOFFCaI1ZAiVTNIKvKHu1VCAuJumG8K6Akuq212BWwNqZQWItL4nHOAT0qlQY+uTqwCRDvaE6Nu9bgt2fN43TvARt5v+hlCkJQciayrUmRTqzcFH3FYNhITIsa9Qz863Xt0SPuImDg4JcQMngyYOuAD69Er4iJsQKiRETdBUxoX6yl8CQnTETbomJMQcQpp9spSqbQENNqK1JcRchkWWIEOIjRguRA01rrCjXlqzAy223BdB4SKG8YWGmWSz2WKP1oVlWvZUkBAXMUy5BYRTpN1Qt1kjemtXwt/Nb5DZauF9vyQmoj4NCbHCe91kpuTdvlXShhH+OZwcYiIGgb5GmjiEus0UzA8OfZKQFhmy2fFVINJmQDhAMTQRwFumTwM4hg/s8RMeojUICM8rGIDsFO0zs0IHmppoDQ0aYuU8ILzGMKXsCD6z0x7YfjCLlUFhIRrXASFGwTNb6PQcmfXAktk/8RIFJER9HBAiTFK28agfMVwG8BKLx0StHhJihWgIaTa7d3jVWEOmDYv0J5xSNhxEs6VdSW8WbDPHbfT/V7QqIl0vHuclURDpldaRJWTr1Hqxdj4KvBMoWROMhUg7mqzfzdYa/ooBAtspyaTNf0kERKunnUpaGsZnacYbMiuwdkrGKUVHrJxql3LbIVPOmewksoHh/kNqPY00onGpycVOTCvORIsDcpsDOOIVrmMhGl3tWmrDZ0xJ8nqXZM01X09ZFYmSiPq1JlfqdTAlo8R6BrdxZVUFyyJqI00q/j1M0pukSYZ2xL7wS/NxEE+mmpxbStMBwf2ia+5miITovMngBaps/M7JlLPlMGVJmapn2BkExJIkoUafm/Ue9x4+G3jLUSKsQEaUJdQM0+Y2SkFDX/IGKS6VQJQmTBPt5cOFmqV4bGiIqgChLmkkBaUEURUhsNGQkHgvJTqiKkJgEjHd6UZDlNwP0wS+4SPd6cZBDPZDrJx+VNDbKbOcbhzEpaRfmiJw3/0H0M4URnS+JGOLFCWaANOU7XQjILpryfgwRVCXNM/plkd057IxPlcG8Egt3+mWRnRfpfM0PJnAo1+A0y2LWP0rnWvjCHKr3kYQp1sS0VvI50uTAl8GBXK65RC9F4Scd0LQC0yATrcUYm2GcW4RE/Q0Bux0yyD6LZSzp6igLinc6S6O6HhI54esoKcxIk53YUTnDesMmBH4wnQRp7soorvGOsc/COySijndBRGrH2i1GHtBT2NEne5iiN4Cr57mW9DTGGGnuxBibYZYE7WVAa2+FHe6iyC2J5h1bRtBXVKylh5CAKKzRK5NFDiNaUnaGRiiO8euL4W7pMWcblFE7xO9RtiE9smUMCZpLmJ7hl3nDT2NSV45V1w/tFREp02wa/WBBUKEzGU3QxCisybI/RZgl1TG6RZArP4hyD0z0AIhOacbjhguQ9S+J92ADqGc0w1GdAnB7V0Du6SyTjcQMdwNcfsPwS6ptNMNQwzcboLaQwp2SQn0RihJRP/QQ4rTB2xCvzGJ4XQDEJ1HciDE6OWG32SN4nTnI4YuG8HsxwefxvCdbserya7OGGKD7cfHmKZgO8N1ut3Sy2wuO3sjiM4XYQnl4wtoISLf6fY2a+ZDNuBgEbeWFPFuE3CKjZfp9ubbvzmyK5RB9OsRQulNH1xdwnO6a6+7vxXPgicQ3RWJEsreMQRO5U+STvf3CGIQ7hHb7zFC2XuiwPmZpJ2prvZ/LHgYxUX8/k2ku75g93SHStiZ6uP+b4UPo5KIlb8JQrn72sAlUAl/xn04/DHZG1QYkSbva5NLuWV+j4hV3J9xlww9Vlz8g3vnnlQcDJ6kcX/GKTFVG6KXfGYgUt69iTLpGvAkjdkZx2UcoRVSgrF08GdihBL3l4I/chQ1lo53f/jTAjF3478ffhflDlrwdh9NIjo1BhAz7metF849wpwvEvAV6R1xfAawjrcIo0OIcxe0Bc2xsRmoyAiSJWJiw2GHEOc+b2jgxLaKOm0W8BHPysSGEOVOdnBZPtOx7Tgs4Aozf8oa0gRhsT0RvFccEsHVJVu9OEdNEPuzDMJiQRQ4NNwTtlfsv5aO7SNy59GHYnzfAvxBvPetZ+00Ptl/+4oK6LSzv29RJMSAJ9lI+O0Dt/HILkHkKVry/saeifCdGXC9bLDrrf3SPLpM1riAzkn8mQjfCgKnEXl6wNwmSvGdgksobmzAhiap+hvyCYa7SjwD4ZtdptAdkKxmVWRAx4N8s0v4u2u2wC2eES3yPiojrPYi+RSEb+dRzk9A9Ip+iuiuOY+R//6hwGbBavKAa0RDVaHfPxT7hiW4Mj+idw//lNR/4T1J/jukhQif0JdgMIKv3EfJf0u2wCy9X+LP0LDgWYRQ5HvAwpbmU8EAxuLNfEKRLcMUu7D0/kHJIbfP2SgyCQW+yy3m03yoGMDA4f5IeyDCt9XB5XqBXhxkP3Qn9yv1kemEE3CUAe0CIvePoC+rics5SferMtLxd1AH1YLVQt2vGvh74Fa1FCuTQ0iuoNYG8qXm+7kyPqcxy3hw5pFKJ361VYryN/2ZuvErlRpcXwZESIbAUTTGmfHFYumr4yv5n1nPziEk51BEIxFbf+t97quoY9ur/TcbIe/gD4qo0zVnMdRf5vKlTtmqpW6EQML4VY8ZjP7y6f0wWeuzxeuyIfLhxmKAfHdbhJBcQi1q+aRaa7gP69Vq9bj0GjXldCBAACF4omrlH+F5hBvIkS5ugqmdN0VhhOQcuGkEo3gUrr38v4C3B5UYDP8vEWOHA1KEpGMCHbhy0bvxCih7oxckJFdQH/Voo+jUslw1cUJyl7z48Z8iuicZznYhwiBeBG6MR0H00uPB4oTkwobNVPWIjg/YJQoQkg4wPaUa0WnDbIw4YbAYYXlUtYjeG3QJihOGLhxoGFVuGn6+oyZDSDrcey6PN4puVWSGFiEkk2vQMCpCbK+hVRHFCQkZVCDDqGKiul5a2heXkNT7kGFEH0XHXwkPYEFCQn6VAUYVF9HxTlITJQoICTml+VMVc6K6eekYdELS6pq5jGij6PjzQt+rkyIkpDnKXY44iI7/BYwjkAkJOfuZx4gwUd32Q7EFiEG4Ycyeq7Kj6PhyfNKEAeNNNqMUous/SvIhEAbrsUuzMgCFJ6rj+XMhH1sZYeACDMcZA1lsFN32258iG3xCKISBzvrUSoMUR3S89kp6eu6ERRi45L2RmQIphuh4ja9F0Vq5pPAIA7WGI0p5JWPwteh6/tdn4d2dJ1TCQPVBXw+GMk4JGUXHqdbc+QJl8THCJgzVHN5YccocRMf1arX1HwnXJVUqCEM1e90ppVZlz5kyUR3HrXo1fzlfqKALpYow1KQ5OL8eV8wNqaH/2B9IOaXwhKrqBWje2+pjMcOzK0mpJNypddXpnV50r0fLtx3h2/JrPf/4u3iZodoUvv4Ho7N9koIy8d8AAAAASUVORK5CYII="
                    alt=""
                    class="icon-image"
                  />{" "}
                  Experience : {experience}
                </h6>
              </div>
              <div class="col-12 border-top p-3 text-left">
                <h6 class="font-weight-bold text-dark mb-1">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="icon-image"
                  />{" "}
                  Company : {company}
                </h6>
              </div>
            </div>
          </aside>

          <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            {getpost !== [] &&
              getpost.map((data, i2) => {
                return (
                  <MyFeedPost feed_post_data={data} key={i2 } />
                )
              })}
          </main>
          <aside class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div class="overflow-hidden text-center p-6 mb-2">
          
          <Link to="/ProfileEdit"class="d-flex align-items-center font-weight-bold btn btn-light rounded p-3 " >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-edit left-menu-icon " ></i>
                      </div>
                    </div>
                    <div>
                     
                        <h6 class=" mt-2 ml-1">Edit Profile</h6>
                 
                    </div>
                  </Link>
                  </div>
            <div
              class="shadow-sm border rounded bg-white job-item mb-3"
              id="cv"
            >
              <div class="d-flex align-items-center  justify-content-between p-3 job-item-header">
                <div class="overflow-hidden mr-2">
                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                    Resume
                  </h6>
                </div>

                {cv && (
                  <img
                    src={`http://testredprism.co/${cv}`}
                    class="img-fluid mt-2 rounded-circle"
                    alt="Responsive image"
                    style={{
                      width: "70px",
                      maxWidth: "100%",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div
                className="progress"
                id="progress1"
                style={{ display: "none", width: "90%", margin: "auto" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-label="progressbar"
                  aria-valuenow={progressbar1}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${progressbar1}%` }}
                ></div>
              </div>
              <div className="bg-white p-3 rounded w-50 vh-50 m-auto">
                <label
                  for="filecv"
                  style={{
                    backgroundColor: "lightblue",
                    fontSize: 16,
                    borderRadius: "10px",
                  }}
                >
                  <i class="feather-camera text-primary "></i> Upload
                </label>
                <input
                  type="file"
                  id="filecv"
                  onChange={handleCv}
                  style={{ display: "none", visibility: "none" }}
                />
              </div>
              {/* <div class="text-center mb-3">
                <button type="button" class="btn btn-outline-primary btn-sm">
                  <i class="feather-eye"></i>
                  Upload
                </button>
              </div> */}
              <div class="p-3 job-item-footer"></div>
            </div>
            <div class="shadow-sm border rounded bg-white job-item mb-3">
              <div class="d-flex align-items-center justify-content-between p-3 job-item-header">
                <div class="overflow-hidden mr-2">
                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                    Achievement
                  </h6>
                </div>
                {achievement && (
                  <img
                    src={`http://testredprism.co/${achievement}`}
                    class="img-fluid mt-2 rounded-circle"
                    alt="Responsive image"
                    style={{
                      width: "70px",
                      maxWidth: "100%",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div
                className="progress"
                id="progress2"
                style={{ display: "none", width: "90%", margin: "auto" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-label="progressbar"
                  aria-valuenow={progressbar2}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${progressbar2}%` }}
                ></div>
              </div>
              <div className="bg-white p-3 rounded w-50 vh-50 m-auto">
                <label
                  for="fileach"
                  style={{
                    backgroundColor: "lightblue",
                    fontSize: 16,
                    borderRadius: "10px",
                  }}
                >
                  <i class="feather-camera text-primary "></i> Upload
                </label>
                <input
                  type="file"
                  id="fileach"
                  onChange={handleAchievement}
                  style={{ display: "none", visibility: "none" }}
                />
              </div>
              <div class="p-3 job-item-footer "></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
