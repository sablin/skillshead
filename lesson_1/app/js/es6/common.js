'use strict';

$.ajax({
   url: 'https://randomuser.me/api/?inc=name,email,picture',
   dataType: 'json',
   success: function success(data) {
      console.log(data);
   }
});