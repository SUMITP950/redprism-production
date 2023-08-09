import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function JobDetails() {
  useEffect(() => {
    document.title = "Job Details";
  }, []);
  return (
    <>
      {" "}
      <div class="bg-white shadow-sm border-bottom">
        <div class="container body-padding">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex align-items-center py-3">
                <div class="profile-left">
                  <h5 class="font-weight-bold text-dark mb-1 mt-0">
                    Senior Ruby Developer
                  </h5>
                  <p class="mb-0 text-muted">
                    <a class="mr-2 font-weight-bold" href="#">
                      Envato
                    </a>{" "}
                    <i class="feather-map-pin"></i> Melbourne, AU -- DatePosted
                    2 weeks ago
                  </p>
                </div>
                <div class="profile-right ml-auto">
                  <button type="button" class="btn btn-light mr-1">
                    {" "}
                    Save{" "}
                  </button>
                  <button type="button" class="btn btn-warning">
                    {" "}
                    Apply{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="container-fluid body-padding">
          <div class="row">
            <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Job Details</h6>
                </div>
                <div class="box-body ">
                  <table class="table table-borderless mb-0">
                    <tbody>
                      <tr class="border-bottom text-left">
                        <th class="p-3">Seniority Level</th>
                        <td class="p-3">Mid-Senior level</td>
                      </tr>
                      <tr class="border-bottom text-left">
                        <th class="p-3">Industry</th>
                        <td class="p-3">
                          Internet Information Technology & Services
                        </td>
                      </tr>
                      <tr class="border-bottom text-left">
                        <th class="p-3">Employment Type</th>
                        <td class="p-3">Full-time</td>
                      </tr>
                      <tr class="border-bottom text-left">
                        <th class="p-3">Salary</th>
                        <td class="p-3">₹50,000 - ₹68,000 a month</td>
                      </tr>
                      <tr class="border-bottom text-left">
                        <th class="p-3">Job Functions</th>
                        <td class="p-3">Other</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Overview</h6>
                </div>
                <div class="box-body p-3">
                  <p>
                    Headquartered in Melbourne, Australia, Envato is a
                    completely online company with an ecosystem of sites and
                    services to help people get creative. We’ve consistently
                    been named as one of the Best Places to Work in Australia,
                    since 2015, in the BRW Awards , and we’ve also been awarded
                    the title of Australia's Coolest Company for Women and
                    Diversity by JobAdvisor.
                  </p>
                  <p class="mb-0">
                    Envato was found in 2006 and, since then, we’ve helped a
                    community of creative sellers earn more than $500 Million .
                    Millions of people around the world choose our marketplace,
                    studio and courses to buy files, hire freelancers, or learn
                    the skills needed to build websites, videos, apps, graphics
                    and more. Find out more at Envato Market , Envato Elements ,
                    Envato Sites , Envato Studio and Tuts+...{" "}
                    <a class="mr-2 font-weight-bold" href="#">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </main>
            <aside class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
              <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                <div class="p-3 border-top border-bottom text-left">
                  <h6 class="mb-0 text-muted ">
                    Urgent opening for MYSQL/MSSQL Developer - Experienced
                  </h6>
                  <h6 class="pt-3">₹2,40,000 - ₹3,00,000 a year</h6>
                </div>
                <ul class="text-left pt-3">
                  <li>
                    Total <b>work</b>: 1 year (Preferred).
                  </li>
                  <li>Should have hands-on database development knowledge.</li>
                  <li>
                    Candidate should have strong knowledge in relational
                    database schema.
                  </li>
                </ul>
                <div class="p-3">
                  <div class="d-flex align-items-top mb-2">
                    <p class="mb-0 text-muted">Posted</p>
                    <p class="font-weight-bold text-dark mb-0 mt-0 ml-auto">
                      1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            <aside class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Similar Jobs</h6>
                </div>
                <div class="box-body p-3">
                  <a href="job-profile.html">
                    <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                      <div class="p-2 border-top border-bottom text-left">
                        <h6 class="mb-0 text-muted">
                          Urgent opening for MYSQL/MSSQL Developer - Experienced
                        </h6>
                        <h6 class="pt-3">₹2,40,000 - ₹3,00,000 a year</h6>
                      </div>
                      <div class="p-3">
                        <div class="d-flex align-items-top mb-2">
                          <p class="mb-0 text-muted">Posted</p>
                          <p class="font-weight-bold text-dark mb-0 mt-0 ml-auto">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="job-profile.html">
                    <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                      <div class="p-2 border-top border-bottom text-left">
                        <h6 class="mb-0 text-muted">
                          Urgent opening for MYSQL/MSSQL Developer - Experienced
                        </h6>
                        <h6 class="pt-3">₹2,40,000 - ₹3,00,000 a year</h6>
                      </div>
                      <div class="p-3">
                        <div class="d-flex align-items-top mb-2">
                          <p class="mb-0 text-muted">Posted</p>
                          <p class="font-weight-bold text-dark mb-0 mt-0 ml-auto">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div class="text-center">
                    <button type="button" class="btn btn-light mr-1">
                      {" "}
                      &nbsp; More Jobs &nbsp;{" "}
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
