const mod = require("mod");
function EncodeStr(number) {

  if(!parseInt(number)){
      let codemsg = "请传入数字类型";
      return {
          success:false,
          msg:codemsg
      }
  }
  let randomInsertStr = 'a';
  var chars = '0123456789bcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      radix = chars.length,
      qutient = +number,
      arr = [];
  do {
      mod = qutient % radix;
      qutient = (qutient - mod) / radix;
      arr.unshift(chars[mod]);
  } while (qutient);
  let  codeStr = arr.join('');
  codeStr = codeStr.length < 6 ?  (codeStr+randomInsertStr + randomWord(false,5-codeStr.length,0,[randomInsertStr])):codeStr;
  return codeStr;
}
let randomWord = (randomFlag, min, max,ruledOutStr)=>{
  var str = "",
      range = min,
      pos='',
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if(ruledOutStr){
      ruledOutStr.map(item=>{
          arr = arr.join("").split(item).join('').split('')
      })
  }

  // 随机产生
  if(randomFlag){
      range = Math.round(Math.random() * (max-min)) + min;
  }
  for(var i=0; i<range; i++){
      pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
  }
  return str;
};