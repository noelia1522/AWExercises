import axios from 'axios';

 const BASE_URL = "https://www.boredapi.com/api/activity";

const getActivities = async () =>{

  try{
  const response = await axios.get(`${BASE_URL}`);
  const activity = response.data;
  console.log("Here is today's activity:", activity);
  return activity
  } catch(error){
    console.log(error);

  }

}

export {getActivities, BASE_URL}
