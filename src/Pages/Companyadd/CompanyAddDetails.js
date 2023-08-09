import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { SearchBar } from "../../Component/SearchBar/SearchBar";
import { SearchResultsList } from "../../Component/SearchBar/SearchResultList";
import { toast } from "react-toastify";

const CompanyAddDetails = () => {
  useEffect(() => {
    document.title = "Job Post";
  }, []);
  // const [results, setResults] = useState([]);
  const options = [
    { value: "Kolkata", label: "Kolkata" },
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
  ];
  const options1 = [
    { value: "React js", label: "React js" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [location, setLoctions] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experienceYear, setExperienceYear] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleLocationsChange = (selectedOptions) => {
    const locations = selectedOptions.map((option) => option.value);
    setLoctions(locations);
  };

  const handleTechnicalSkillsChange = (selectedOptions) => {
    const selectedSkills = selectedOptions.map((option) => option.value);
    setTechnicalSkills(selectedSkills);
  };

  const handleSalaryRangeChange = (event) => {
    setSalaryRange(event.target.value);
  };

  const handleExperienceYearChange = (event) => {
    setExperienceYear(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = {
      title: title,
      description: description,
      location: location,
      technicalSkills: technicalSkills,
      salaryRange: salaryRange,
      experienceYear: experienceYear,
    };

    try {
      await axios.post("http://localhost:3030/job_post", formData);
      // console.log("Form submitted successfully");
      toast.success(`Form submitted successfully`);
    } catch (error) {
      // console.error("Form submission error:", error);
      toast.success(`Failed : ${error.message}`);
    }
    setSubmitting(false);
    setTitle("");
    setDescription("");
    setLoctions("");
    setTechnicalSkills("");
    setSalaryRange("");
    setExperienceYear("");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add New Company</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyname"
                    placeholder="Enter Company Name"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyname"
                    placeholder="Enter Phone Number"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Company Logo</label>
                  <input
                    type="file"
                    className="form-control"
                    id="companyname"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Company banner </label>
                  <input
                    type="file"
                    className="form-control"
                    id="companyname"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn apply-btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Add Company"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddDetails;
