function myFunction(){
  let password = document.getElementById('pass');
  if(password.type === 'text'){
    password.type = 'password';
  }
  else{
    password.type = 'text';
  }
}

const dialog = document.getElementById("terms-dialog");

document.querySelector("[commandfor='terms-dialog']").addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
});
