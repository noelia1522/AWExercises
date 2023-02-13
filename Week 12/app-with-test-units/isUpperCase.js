function isUpperCase(input){
  if(typeof input !== "string"){
    return false;
  }

  if(input.length === 0){
    throw new Error("You entered an empty string!")
  }

  return (input === input.toUpperCase())
}

module.exports = isUpperCase;
