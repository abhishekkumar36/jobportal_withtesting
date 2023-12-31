import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postNewJobAction } from "../../store/slices/recruiter/recruiternewjobslice";

const PostNewJob = () => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobDescription: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    qualification: "",
    vacancies: "",
    companyName: "",
    skillSet: "",
  });
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.newJobPostApp);

  const handleInputChange = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submited jobdata  ", jobData);
    await dispatch(postNewJobAction(jobData));

    setResponseMessage("Job Posted Sucessfully");

    setTimeout(() => {
      setResponseMessage(null);
    }, 2000);
  };

  return (
    <>
      <div> {responseMessage && <p>{responseMessage}</p>}</div>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          onChange={handleInputChange}
          required
        />

        <Input
          type="text"
          name="location"
          placeholder="Job Location"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="jobType"
          placeholder="Job Type"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="experience"
          placeholder="Experience"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleInputChange}
          required
        />

        <Input
          type="text"
          name="qualification"
          placeholder="Qualification"
          onChange={handleInputChange}
          required
        />

        <Input
          type="text"
          name="vacancies"
          placeholder="Vacancies"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="companyName"
          placeholder="companyName"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="skillSet"
          placeholder="Skillset"
          onChange={handleInputChange}
          required
        />

        <TextArea
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          type="text"
          name="jobDescription"
          placeholder="Job Description"
          onChange={handleInputChange}
          required
        ></TextArea>

        <Button type="submit" disabled={loading}>
          POST JOB
        </Button>
        <div style={{ textAlign: "center" }}>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </Form>
    </>
  );
};

export default PostNewJob;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
  max-height: 300px;
  overflow: auto;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #428bca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  grid-column-start: 2;
  grid-column-end: 3;
  width: 120px;
`;

//   {
//     "jobTitle":"Python full stack developer",-----
//      "jobDescription":"Expected to -----have knowledge on both frontend and backend technologies",
//       "location":"Hyderabad",------
//        "jobType":"Full type",--------
//         "experience":"2 years",-------
//          "salary":"10LPA",---------
//           "qualification":"Btech",---------
//            "vacancies":"30",---------
//            "recruiterId":"2",
//            "skillset":"react",----
//            "companyName":"Persistent"---
// }
