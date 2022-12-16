var lengthOfLastWord = function(s) {
  let str=s.trim().split(" ").filter(el=> !el=="");
 for(let i = str.length - 1; i >= 0; i--){
    let high=0;
    if(str[i].length>high){
     high=str[i].length;
    }
  return high;
};
   
};
lengthOfLastWord( "   fly me   to   the moon  ");
