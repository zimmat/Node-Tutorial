
var users = [];


users.push({ first_name : 'Jack', last_name : 'Bradshaw'},
{first_name : 'Callum', last_name : 'Bradshaw'},
{first_name : 'Neil', last_name : 'Bradshaw'}
);


users.forEach(function(user){
  console.log('Hi,' +  ' ' + user.first_name + ' ' + user.last_name + '!');

});

// for(var i = 0; i < users.length; i++){
//   console.log(users[i]);
// }
