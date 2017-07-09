
var LabArr =[4,9,14,19,24,29];
var LabObjNew = {
  Num0:0
};
var o=0;

function labFn(a,i){
  return a[i]+1;
}

// forEach
LabArr.forEach(function(){
  o++;
  console.log(labFn(LabArr,o));
  var labEle = labFn(LabArr,o);
  LabObjNew["num"+o] = labEle;
  }
);

//forLoop
for (var i = 0; i < LabArr.length; i++) {
  console.log(labFn(LabArr,i));
  var labEle = labFn(LabArr,i);
  LabObjNew["num"+i] = labEle;
}

console.log(LabArr);
console.log(LabObjNew);
