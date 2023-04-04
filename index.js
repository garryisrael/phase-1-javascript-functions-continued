function saturdayFun(string="roller-skate"){
  return "This Saturday, I want to "+string+"!";
}

let mondayWork = function(activity="go to the office"){
  return "This Monday, I will "+activity+".";
}

function wrapAdjective(expression){
  const innerfunction = function(message="special"){
     return `You are ${expression}${message}${expression}!`
  }
    return innerfunction;
}