// let userDetails = JSON.parse(localStorage.getItem("users"));

let url1 = "http://127.0.0.1:7000/api/allusers";

async function signIn() {
  try {
    let data = await fetch(url1);
    let response = await data.json();
    console.log(response);
    let userDetails = response[0].users;
    let currentUser = response[1].currentuser;

    console.log(userDetails, currentUser);
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
          currentUser = userDetails[i];
          console.log(currentUser);
          updateCurUser();
          async function updateCurUser() {
            try {
              const url = "http://127.0.0.1:7000/api/allusers/2";
              const q = {
                id: 2,
                currentuser: currentUser,
              };
              console.log("here");
              const arg = {
                method: "PUT",
                body: JSON.stringify(q),
                headers: {
                  "Content-Type": "application/json",
                },
              };
              const response = await fetch(url, arg);
              const result = await response.json();
              console.log(result);
              window.location.href = "index.html";
            } catch (error) {
              console.log(error);
            }
          }
          // localStorage.setItem("currentuser", JSON.stringify(currentUser));

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
  } catch (error) {
    console.log("error is:", error);
  }
}

async function signUp() {
  // console.log(userDetails);
  try {
    let data = await fetch(url1);
    let response = await data.json();
    let userDetails = response[0].users;
    let currentUser = response[1].currentuser;

    console.log(userDetails, currentUser);
    let suEmail = document.getElementById("suEmail").value;

    let suPhone = document.getElementById("suPhone").value;
    if (suEmail.indexOf("@") == -1 || suEmail.length === 0) {
      alert("Enter valid Email id");
      return;
    }
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
    console.log(userDetails);
    updateUsers();
    async function updateUsers() {
      try {
        const url = "http://127.0.0.1:7000/api/allusers/1";
        const o = {
          id: 1,
          users: userDetails,
        };
        console.log("here");
        const arg = {
          method: "PUT",
          body: JSON.stringify(o),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, arg);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    updateCurUser();
    async function updateCurUser() {
      try {
        const url = "http://127.0.0.1:7000/api/allusers/2";
        const q = {
          id: 2,
          currentuser: currentUser,
        };
        console.log("here");
        const arg = {
          method: "PUT",
          body: JSON.stringify(q),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, arg);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    currentUser = newUser;
    console.log(currentUser, userDetails);
    alert("Account created successfully!");

    // window.location.href = "index.html";
    //--------->redirect to home page here<---------
  } catch (error) {
    console.log("error is:", error);
  }
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

function sendOtp() {
  let f_content = document.getElementById("forgot_content");
  let cred = document.getElementById("forgot_cred");
  // let f_input = document.getElementById("forgot_email");
  let f_email = document.getElementById("forgot_email").value;
  let i = 0;
  let otp_sent;
  while (i < userDetails.length) {
    if (userDetails[i].email == f_email) {
      otp_sent = Math.floor(Math.random() * 899999 + 100000);
      alert("Your OPT is :  " + otp_sent);
      break;
    }
    i++;
    if (i == userDetails.length) {
      // alert("");
      let alert1 = document.getElementById("alert1");
      alert1.textContent = "Email ID not Registered";
      cred.append(alert1);
      return;
    }
  }

  let enter_otp = document.createElement("input");
  enter_otp.setAttribute("placeholder", "Enter OTP");
  cred.append(enter_otp);

  let submit_btn = document.getElementById("send_otp");
  submit_btn.style.display = "none";

  let submit_otp = document.createElement("button");
  submit_otp.textContent = "SUBMIT";
  submit_otp.setAttribute("id", "submit_otp");
  submit_otp.onclick = validateOtp;
  f_content.append(submit_otp);

  function validateOtp() {
    let otp = enter_otp.value;
    console.log(otp_sent, otp);
    if (otp_sent == otp) {
      alert("OTP match");
    }
  }
}
