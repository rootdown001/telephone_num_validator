function telephoneCheck(str) {
    let answer;
    let regExp = /^((1[ -]|(1))?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?(\d{4}))$/g;
  
    answer = regExp.test(str);
  
    return answer;
  }
  
  console.log("(6054756961) - " + telephoneCheck("(6054756961)"));
  