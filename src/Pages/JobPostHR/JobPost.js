import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { SearchBar } from "../../Component/SearchBar/SearchBar";
import { SearchResultsList } from "../../Component/SearchBar/SearchResultList";

const EmployerJobPostHR = () => {
  useEffect(() => {
    document.title = "HR Job Post";
  }, []);
  const [results, setResults] = useState([]);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experienceYear, setExperienceYear] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleMobieChange = (event) => {
    setMobile(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
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
      technicalSkills: technicalSkills,
      salaryRange: salaryRange,
      experienceYear: experienceYear,
      mobile: mobile,
    };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      // Handle success or display a success message
      console.log("Form submitted successfully");
    } catch (error) {
      // Handle error or display an error message
      console.error("Form submission error:", error);
    }

    setSubmitting(false);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Job Post By HR </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter the job title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>

                {/* <div className="form-group">
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
                    placeholder="Select skills"
                    value={options.filter((option) =>
                      technicalSkills.includes(option.value)
                    )}
                    onChange={handleTechnicalSkillsChange}
                    required
                  />
                </div> */}

                <div className="form-group">
                  <label htmlFor="salaryRange">Salary Range</label>
                  <select
                    className="form-control"
                    id="salaryRange"
                    value={salaryRange}
                    onChange={handleSalaryRangeChange}
                    required
                  >
                    <option value="">-- Select Salary Range --</option>
                    <option value="60k-1LPA">60k - 1LPA</option>
                    <option value="1LPA-2LPA">1LPA - 2LPA</option>
                    <option value="2LPA-6LPA">2LPA - 6LPA</option>
                    <option value="6LPA-12LPA">6LPA - 12LPA</option>
                    <option value="12LPA-Above">12LPA and Above</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="salaryRange">Location</label>
                  <div className="search-bar-container">
                    <SearchBar setResults={setResults} name="Type City" />
                    {results && results.length > 0 && (
                      <SearchResultsList results={results} />
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="salaryRange">Technology</label>
                  <div className="search-bar-container">
                    <SearchBar
                      setResults={setResults}
                      name={"Type Technology"}
                    />
                    {results && results.length > 0 && (
                      <SearchResultsList results={results} />
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="experienceYear">Experience in Year</label>
                  <select
                    className="form-control"
                    id="experienceYear"
                    value={experienceYear}
                    onChange={handleExperienceYearChange}
                    required
                  >
                    <option value="">-- Select Experience in Year --</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Year">0-1 Year</option>
                    <option value="1-2 Year">1-2 Year</option>
                    <option value="2-3 Year">2-3 Year</option>
                    <option value="3-4 Year">3-4 Year</option>
                    <option value="4-5 Year">4-5 Year</option>
                    <option value="5-6 Year">5-6 Year</option>
                    <option value="6-7 Year">6-7 Year</option>
                    <option value="7-8 Year">7-8 Year</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="title">Mobile No.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="title"
                    placeholder="Enter the job title"
                    value={mobile}
                    onChange={handleMobieChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Job Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    placeholder="Enter the job description"
                    rows="5"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn apply-btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerJobPostHR;
