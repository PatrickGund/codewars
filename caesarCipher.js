var CaesarCipher = function (shift) {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  this.encode = function (string){
    let uc = string.toUpperCase();
    let rs = '';
    for(let i = 0; i < uc.length; i++){
      let idx = alphabet.indexOf(uc[i]);
      if(idx > -1) rs = rs.concat(alphabet[(idx + shift)%26]);
      else rs = rs.concat(uc[i]);
    }
    return rs;
  }
  
  this.decode = function (string){
    let uc = string.toUpperCase();
    let rs = '';
    for(let i = 0; i < uc.length; i++){
      let idx = alphabet.indexOf(uc[i]);
      if(idx > -1) {
        let val = idx-shift;
        if(val < 0) val += 26;
        rs = rs.concat(alphabet[val]);
      }
      else rs = rs.concat(uc[i]);
    }
    return rs;
  }
  
  return this;
};