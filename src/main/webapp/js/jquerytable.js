/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
   
   $.ajax({
            url: 'http://localhost:8080/angularjquery/api/members',
            method: 'GET',
            success: function(data){
                $.each(data, function(key, value){
                    table = $('.table tr:last');
                    var friendslist = "";
                    for(i = 0; i< value.friends.length; i++){
                        friendslist += '<p>' + value.friends[i].name + '</p>';
                    }
                    table.after('<tr>' +
                                '<td>' + value.id + '</td>' +
                                '<td>' + value.age + '</td>' +
                                '<td>' + value.eyeColor + '</td>' +
                                '<td>' + value.name + '</td>' +
                                '<td>' + value.email + '</td>' + 
                                '<td>' + friendslist + '</td>' +
                                '</tr>');
                });
            }
        }); 
});