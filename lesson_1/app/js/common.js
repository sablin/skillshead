$.ajax({
        url: 'https://randomuser.me/api/?inc=name,email,picture',
        dataType: 'json',
        success: function(data) {
           console.log(data);
        }
    });

