function Information(className,idNumber,studentName){
  this.className = className;
  this.idNumber = idNumber;
  this.studentName = studentName;
}

Information.prototype.check = function(){
  if(!this.className){
    alert('请填写班级！');
    return false;
  }

  if(!this.idNumber){
    alert('请填写学号！');
    return false;
  }

  if(!this.studentName){
    alert('请填写姓名！');
    return false;
  }
  return true;
};
