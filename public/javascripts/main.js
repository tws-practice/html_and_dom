$(document).ready(function () {
    $('#submit').on('click', function (){
        if(!($('#class-name').val() && $('#id-number').val() && $('#student-name').val())){
            $('#modal').show();
        } else {
            $('#form').submit();
        }
    });
});