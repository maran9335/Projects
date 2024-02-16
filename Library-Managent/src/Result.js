import React from 'react'

function Result({secretNum,term}) {
  let result;

  if(term){
  if(term > secretNum){
    result="heigher";
  }
    else if(term < secretNum){
    result="lower"
    }
    else if(term == secretNum){
      result ="yiepee its correct";
    }
    else{
      result="enter valid input";
    }
  }
  return (
    <div>
      <h3>U gused:{result} </h3>
    </div>
  )
}

export default Result
