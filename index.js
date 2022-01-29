
function changeTheme() {
      document.body.classList.toggle('dark-theme'); 
  }
  function sendJSON() {
      let name = document.querySelector('#name');
      let password = document.querySelector('#password');
      let email = document.querySelector('#email');
      let result = document.querySelector('.result');
      let xhr = new XMLHttpRequest();
      let url = "http://mihailmaximov.ru/projects/json/json.php";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          result.innerHTML = this.responseText;
        }
      };
      var data = JSON.stringify({ "name": name.value, "password": password.value, "email": email.value });
      xhr.send(data);
    }
  
  
