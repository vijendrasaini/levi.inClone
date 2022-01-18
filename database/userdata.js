let userDetails = [
  {
    email: "demo@levi.com",
    password: 11112222,
    phone: 9876543210,
    cart: [],
    orders: [],
    status: false,
  },
];

localStorage.setItem("users", JSON.stringify(userDetails));

function signIn() {
  let currentUser;
  let userDetails = JSON.parse(localStorage.getItem("users"));
  console.log(userDetails);

  let siEmail = document.getElementById("si_email").value;
  let siPassword = document.getElementById("si_password").value;
  let i = 0;
  let j = 0;
  while (i < userDetails.length) {
    if (userDetails[i].email == siEmail) {
      j++;
      if (userDetails[i].password == siPassword) {
        j--;
        userDetails[i].status = true;
        alert("User Found!");
        currentUser = userDetails[i];
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        // console.log(currentUser);
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

  //   console.log(siEmail);
}

function signUp() {
  let userDetails = JSON.parse(localStorage.getItem("users"));

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
  alert("Account created successfully!");
  // window.location.href = "index.html";

  //--------->redirect to home page here<---------

  localStorage.setItem("users", JSON.stringify(userDetails));
}
