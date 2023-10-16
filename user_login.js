var a=document.getElementById("loginBtn");
var b=document.getElementById("registerBtn");
var x=document.getElementById("login");
var y=document.getElementById("register");

function login(){
    x.style.left="4px";
    y.style.right="-520px";
    a.className+=" white-btn";
    b.className="btn";
    x.style.opacity=1;
    y.style.opacity=0;
}

function register(){
    x.style.left="-520px";
    y.style.right="5px";
    a.className="btn";
    b.className+=" white-btn";
    x.style.opacity=0;
    y.style.opacity=1;
}

function myMenuFunction(){
    var x=document.getElementById("navMenu");
    if(x.className === "nav-menu"){
        x.className+=" responsive";
    }else{
        x.className="nav-menu";
    }
}

// Login form validation
function validatelogin() {
    const userid = $("#userid");
    const password = $("#password2");

    if (userid.val().trim() === "" || password.val().trim() === "") {
        alert("Please fill in all fields.");
        console.log("Please fill in all fields.");
        return false;
    }

    // Add additional validation checks here if needed

    return true;
}

// Registration form validation
function validateregister() {
    const fname = $("#fname");
    const lname = $("#lname");
    const email = $("#email");
    const mobile = $("#mobile");
    const password = $("#password");

    if (fname.val().trim() === "" || lname.val().trim() === "" || email.val().trim() === "" || mobile.val().trim() === "" || password.val().trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.val().trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate mobile number format
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile.val().trim())) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Add additional validation checks here if needed

    return true;
}

// Attach validation functions to submit buttons
$(document).ready(function() {
    $("#login-submit").click(function() {
        return validatelogin();
    });

    $("#register-submit").click(function() {
        return validateregister();
    });
});