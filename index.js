function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400){
    result = 'This one is on me!';
  }

  else if (feet > 2500){
    result = 'No can do.';
  }
  else {
    result = 'I will gladly take your thirty bucks.';
  }
  return result;
}


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip){
  switch(tip){
    case'generous':
      return'Thank you so much.';
    case'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}




