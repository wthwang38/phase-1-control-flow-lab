function scuberGreetingForFeet(feet){
  // Write your code here!
  let result
  if(feet <= 400){
    return result = "This one is on me!"
  } else if(feet <= 2000){
    return result = "That will be twenty bucks."
  } else if(feet <= 2500){
    return result = "I will gladly take your thirty bucks."
  } else if(feet >= 2501){ 
    return result = "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityCheck = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
  return cityCheck;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let greeting;
  switch (tip){
    case 'generous':
      greeting = "Thank you so much.";
      break;
    case 'not as generous':
      greeting = "Thank you.";
      break;
    default:
      greeting = "Bye.";
      break;

  }
  return greeting;
}