
module.exports = function check(str, bracketsConfig) {
  function closed(bracket, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == bracket) {
        return bracketsConfig[i][1];
      }
    }
  }
  function open(brackets, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == brackets && bracketsConfig[i][1] == brackets) {
        return 2;
      }
      if (bracketsConfig[i][0] == brackets) {
        return true;
      }
    }
    return false;
  }

  let a = str.split('');
  let arrStack = [];
  for (let i = 0; i < a.length; i++) {
    if (open (a[i], bracketsConfig)==2){
      if (arrStack.length > 0 && a[i] == arrStack[arrStack.length-1]){
        arrStack.pop(); 
      }
      else {
        arrStack.push(a[i]);
      }

    }
    else {
    if (open (a[i], bracketsConfig)==true) {
        arrStack.push(a[i]);
    } 
    else {
      if (arrStack.length == 0){
        return false;
      }
      let b = arrStack.pop(); 
        if (closed (b[0],bracketsConfig) !== a[i]) { 
          return false;
        }
      }
    }
  }
  if (arrStack.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
