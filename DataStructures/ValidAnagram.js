var isAnagram = function(s, t) {
    let sortedS= Array.from(s).sort().join("");
    let sortedT= Array.from(t).sort().join("");
    if(sortedS === sortedT ){
    return    true;
    }
return false;
};
