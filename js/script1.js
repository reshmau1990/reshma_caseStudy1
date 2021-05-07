
$.ajax({url: 'https://jsonplaceholder.typicode.com/todos', dataType: 'json', success: function(data) {

        for (var i=0; i<data.length; i++) {
            
            if(data[i].completed==false){
                var row = $('<tr><td>' + data[i].id +'</td><td>' + data[i].title + '</td><td>' + '<input type="checkbox" onChange="valueChange(this)">' + '</td></tr>');
            }
            else{
                var row = $('<tr><td>'+ data[i].id +'</td><td>' + data[i].title+ '</td><td>' + '<input type="checkbox" checked disabled>' + '</td></tr>');
            }
            $('#table').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});

var count=0;
valueChange = function(element){
    if ( $( element ).is( ":checked" ) ){
        completedPromise().then();
    }
    else{
        count--;
    }
    
}

function completedPromise(){
    return new Promise(function(resolve, reject){
    count++;
    if(count==5){
        alert("Congrats. 5 Tasks have been Successfully Completed");
}
resolve();
});
}
