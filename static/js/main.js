var form = document.getElementById('form');
      form.addEventListener('submit',function(event){
            event.preventDefault();
            var username = document.getElementById('username').value;
            var first_name = document.getElementById('first_name').value;
            var last_name = document.getElementById('last_name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            console.log('user name' +username);
            console.log('first name' +first_name);
            console.log('last name' +last_name);
            console.log('email ' +email);
            console.log('phone ' +phone);

            
});