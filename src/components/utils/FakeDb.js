import { toast } from "react-toastify";

const addToDb = (job) => {
  const existingData = localStorage.getItem("applied-job");
  let appliedJobs = [];
  if (existingData) {
    appliedJobs = JSON.parse(existingData);
  }
  if (!Array.isArray(appliedJobs)) {
    appliedJobs = [];
  }

  const jobExists =
    appliedJobs.filter((appliedJob) => appliedJob.id === job.id).length > 0;

  if (jobExists) {
    return toast.error("Already Applied");
  } else {
    appliedJobs.push(job);
    localStorage.setItem("applied-job", JSON.stringify(appliedJobs));
  }

  localStorage.setItem("applied-job", JSON.stringify(appliedJobs));
  toast.success("Job Applied Successfully");
};

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get Applied Jobs from local storage
  const jobs = localStorage.getItem("applied-job");
  if (jobs) {
    appliedJobs = JSON.parse(jobs);
  }
  return appliedJobs;
};

export { addToDb, getAppliedJobs };
