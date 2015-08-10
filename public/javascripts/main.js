$(document).ready(function () {
    $('#submit').on('click', function (){
        var userInput = $('form').serializeArray().reduce(function(obj, item) {
            obj[item.name] = obj[item.name] || [];
            obj[item.name].push(item.value);
            return obj;
        }, {});

        alert(JSON.stringify(userInput));


    });
});