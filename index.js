function scuberGreetingForFeet(someValue){
  if(someValue<=400){
    return 'This one is on me!'
  }
  else if(someValue>2000 && someValue<2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return "No can do."
  }
  
  
  // Write your code here!
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(ternCity){
  if(ternCity==='NYC'){
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }

  
  
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  if(tip==='generous'){
    return 'Thank you so much.'
  }
  else if (tip=='not as generous'){
    return 'Thank you.'
  }
  else{
  return 'Bye.'
  }
}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')