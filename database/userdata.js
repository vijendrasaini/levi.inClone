let userDetails = JSON.parse(localStorage.getItem("users"));

function signIn() {
  if (userDetails.length === 0) {
    alert("User not found!");
  }

  let siEmail = document.getElementById("si_email").value;
  let siPassword = document.getElementById("si_password").value;
  let i = 0;
  let j = 0;
  while (i < userDetails.length) {
    if (userDetails[i].email == siEmail) {
      j++;
      if (userDetails[i].password == siPassword) {
        userDetails[i].status = true;
        alert("User Found!");
        let currentUser = userDetails[i];
        console.log(currentUser);
        localStorage.setItem("currentuser", JSON.stringify(currentUser));

        // window.location.href = "index.html";
        //---------->Redirect to Home page here<----------------

        break;
      } else {
        alert("Password Incorrect!");
        break;
      }
    }

    i++;
  }
  if (j == 0) {
    alert("User not found!");
  }
}

function signUp() {
  // console.log(userDetails);

  let suEmail = document.getElementById("suEmail").value;

  let suPhone = document.getElementById("suPhone").value;

  if (suPhone.length !== 10) {
    alert("Enter valid mobile number");
    return;
  }
  for (let i = 0; i < userDetails.length; i++) {
    if (suEmail == userDetails[i].email) {
      alert("Email already exists");
      return;
    }
    if (suPhone == userDetails[i].phone) {
      alert("Phone number already taken");
      return;
    }
  }
  let suPassword = document.getElementById("suPassword").value;
  if (suPassword.length < 8) {
    alert("Enter valid password");
    return;
  }
  let newUser = {
    email: suEmail,
    password: suPassword,
    phone: suPhone,
    cart: [],
    orders: [],
    status: true,
  };

  userDetails.push(newUser);
  let currentUser = newUser;
  // console.log(currentUser);
  localStorage.setItem("currentuser", JSON.stringify(currentUser));
  alert("Account created successfully!");

  // window.location.href = "index.html";
  //--------->redirect to home page here<---------

  localStorage.setItem("users", JSON.stringify(userDetails));
}

let modal = document.getElementById("forgot_popup");
function forgot() {
  modal.style.display = "block";
  // console.log("here");
}

function closePopup() {
  let span = document.getElementById("close_popup");

  modal.style.display = "none";
}
