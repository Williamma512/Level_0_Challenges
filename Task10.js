function getSameletter(str1, str2) { 
    let commonletter=[]; 
      let count = 0; 
      const object = str2.split(""); 
      for(const str of str1){ 
        let idx = object.findIndex(s => s === str); 
        if(idx >= 0){ 
        commonletter.push(object.find(s => s === str)); 
          count++; 
          object.splice(idx, 1); 
      } 
    } 
    console.log("Common letters are :" + commonletter);
    } 
     
  getSameletter("Julia", "William")