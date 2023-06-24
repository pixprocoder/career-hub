// use local storage to manage cart data
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
    return;
  } else {
    appliedJobs.push(job);
    localStorage.setItem("applied-job", JSON.stringify(appliedJobs));
  }

  localStorage.setItem("applied-job", JSON.stringify(appliedJobs));
};

// const removeFromDb = (id) => {
//   const shoppingCart = getShoppingCart();
//   if (id in shoppingCart) {
//     delete shoppingCart[id];
//     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
//   }
// };

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get Applied Jobs from local storage
  const jobs = localStorage.getItem("applied-job");
  if (jobs) {
    appliedJobs = JSON.parse(jobs);
  }
  return appliedJobs;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getAppliedJobs, deleteShoppingCart };
