import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";

import Home from "./Pages/Home/home";

import Profile from "./Pages/profile/profile";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Message from "./Pages/Message/Message";
import Notifications from "./Pages/Notifications/Notifications";
// import EditProfile from "./Pages/EditProfile/EditProfile";
import Connection from "./Pages/connection/connection";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import JobProfile from "./Pages/JobProfile/JobProfile";
import SigninAsHr from "./Pages/SigninAsHr/SigninAsHr";
import LandingPage from "./Pages/LandingPage/LandingPage";
import RegisterJobSheeker from "./Pages/RegisterJobSheeker/RegisterJobSheeker";
import BuddySearch from "./Pages/BuddySearch/BuddySearch";
import JobSearch from "./Pages/JobSearch/JobSearch";
import Internship from "./Pages/Internship/Internship";
import Rnav from "./Component/Rnav";
import RnavHR from "./Component/RnavHR";
import EmployerJobPost from "./Pages/JobPost/JobPost";
import EmployerJobPostHR from "./Pages/JobPostHR/JobPost";
import Training from "./Pages/Training/Training";
import MyBuddies from "./Pages/MyBuddies/MyBuddies";
import FresherJob from "./Pages/FresherJob/FresherJob";
import SampleResume from "./Pages/SampleResume/SampleResume";
import Sendotp from "./Pages/Send-otp/Sendotp";
import JobDetails from "./Pages/JobDetails/JobDetails";
import ProfileEdit from "./Pages/ProfileEdit/ProfileEdit";
import Registerhr from "./Pages/RegisterHR/Registerhr";
import CompanyAddDetails from "./Pages/Companyadd/CompanyAddDetails";
import Sendotpjobseeker from "./Pages/Send-otp/Sendotpjobseeker";
import WalkingJob from "./Pages/WalkingJob/WalkingJob";
import JobPost from "./Pages/JobPost/JobPost";


export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Nav /> <Home />
              </>
            }
          />
          <Route
            path="/WalkingJob"
            element={
              <>
                <Nav /> <WalkingJob />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Nav />
                <Profile />
              </>
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route
            path="/Message"
            element={
              <>
                <Nav />
                <Message />
              </>
            }
          />
          <Route
            path="/Notifications"
            element={
              <>
                <Nav />
                <Notifications />
              </>
            }
          />
          {/* <Route
            path="/EditProfile"
            element={
              <>
                <Nav />
                <EditProfile />
              </>
            }
          /> */}
          <Route
            path="/Connection"
            element={
              <>
                <Nav />
                <Connection />
              </>
            }
          />
          <Route
            path="/CompanyProfile"
            element={
              <>
                <Nav />
                <CompanyProfile />
              </>
            }
          />
          <Route
            path="/JobProfile"
            element={
              <>
                <Nav />
                <JobProfile />
              </>
            }
          />
          <Route
            path="/BuddySearch"
            element={
              <>
                <Nav />
                <BuddySearch />
              </>
            }
          />
          <Route
            path="/SigninAsHr"
            element={
              <>
                <SigninAsHr />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />

          <Route
            path="/RegisterJobSheeker"
            element={
              <>
                <Rnav />

                <RegisterJobSheeker />
              </>
            }
          />
          <Route
            path="/companyadddetails"
            element={
              <>
                <CompanyAddDetails />
              </>
            }
          />

          
          
          
          
          <Route
            path="/Registerhr"
            element={
              <>
                <RnavHR />

                <Registerhr />
              </>
            }
          />
          
          
          <Route
            path="/JobSearch"
            element={
              <>
                <Nav />
                <JobSearch />
              </>
            }
          />
          <Route
            path="/Internship"
            element={
              <>
                <Nav />
                <Internship />
              </>
            }
          />
          <Route
            path="/jobPost"
            element={
              <>
                <Nav />
                <JobPost/>
              </>
            }
          />
          <Route
            path="/walkingjob"
            element={
              <>
                <Nav />
               <WalkingJob/>
              </>
            }
          />
          <Route
            path="/JobPostHR"
            element={
              <>
                <Nav />
                <EmployerJobPostHR />
              </>
            }
          />
          <Route
            path="/Training"
            element={
              <>
                <Nav />
                <Training />
              </>
            }
          />
          <Route
            path="/MyBuddies"
            element={
              <>
                <Nav />
                <MyBuddies />
              </>
            }
          />
          <Route
            path="/FresherJob"
            element={
              <>
                <Nav />
                <FresherJob />
              </>
            }
          />
          <Route
            path="/SampleResume"
            element={
              <>
                <Nav />
                <SampleResume />
              </>
            }
          />
          <Route
            path="/JobDetails"
            element={
              <>
                <Nav />
                <JobDetails />
              </>
            }
          />
          <Route
            path="/ProfileEdit"
            element={
              <>
                <Nav />
                <ProfileEdit />
              </>
            }
          />
          <Route
            path="/Sendotp"
            element={
              <>
                <Sendotp />
              </>
            }
          />
          <Route
            path="/sendotpjobseeker"
            element={
              <>
                <Sendotpjobseeker />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
