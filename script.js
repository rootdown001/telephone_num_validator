function telephoneCheck(str) {
    let answer;
    let regExp = /(1[ -])?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})/g;
  
    answer = regExp.test(str);
  
    return answer;
  }
  
  console.log(telephoneCheck("1 555-555-5555"));