function letterCount(input) {
  let output = {}
  for(let i=0; i<input.length; i++){
    if(input[i] in output)
      output[input[i]]++;
    else
      output[input[i]] = 1;
  }
  console.log(output);
  return output
}

letterCount(1)





module.exports = letterCount;
