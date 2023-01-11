import axios from 'axios';
import _ from "lodash";

 const PATH = "./randomQuotes.txt";

const getQuotes = async (author: string) =>{

  try{
  const response = await axios.get(`${PATH}`);
  console.log(response);

  let quotes = _.filter(response.data, {"author": author});
  return quotes;
  } catch(error){
    console.log(error);

  }

}

export {getQuotes};
