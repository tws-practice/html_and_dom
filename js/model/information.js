function Information(className,idNumber,studentName){
  this.className = className;
  this.idNumber = idNumber;
  this.studentName = studentName;
}

Information.prototype.check = function(){
  if(!this.className){
    $('#class-modal').modal('show');
    $('#form-class').addClass('has-error');
    $('#class-name').focus();
    return false;
  }

  if(!this.idNumber){
    $('#id-modal').modal('show');
    $('#form-id').addClass('has-error');
    $('#id-number').focus();
    return false;
  }

  if(!this.studentName){
    $('#name-modal').modal('show');
    $('#form-name').addClass('has-error');
    $('#student-name').focus();
    return false;
  }
  return true;
};
