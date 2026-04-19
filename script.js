// LOGIN
function login() {
  let user = document.getElementById("loginUser").value.trim();
  let pass = document.getElementById("loginPass").value.trim();

  if (user === "" || pass === "") {
    alert("All fields required!");
    return false;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters!");
    return false;
  }

  alert("Login Successful");
  window.location = "catalog.html";
  return false;
}

// REGISTER
function register() {
  let name = document.getElementById("name").value.trim();
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  if (name === "") return alert("Enter name"), false;
  if (username.length < 4) return alert("Username too short"), false;

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(pattern)) return alert("Invalid email"), false;

  if (dob === "") return alert("Select DOB"), false;
  if (password.length < 6) return alert("Weak password"), false;
  if (password !== confirmPassword) return alert("Passwords not match"), false;
  if (!gender) return alert("Select gender"), false;

  alert("Registered Successfully");
  window.location = "index.html";
  return false;
}

// LOGOUT
function logout() {
  alert("Logged out");
  window.location = "index.html";
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let table = document.getElementById("cartTable");
  let total = 0;

  cart.forEach((item, index) => {
    let row = table.insertRow();

    row.insertCell(0).innerText = item.name;
    row.insertCell(1).innerText = item.qty;
    row.insertCell(2).innerText = "$" + item.price;
    row.insertCell(3).innerText = "$" + item.price * item.qty;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.className = "remove-btn";
    btn.onclick = () => removeItem(index);

    row.insertCell(4).appendChild(btn);

    total += item.price * item.qty;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Cart empty!");
    return;
  }

  alert("Order placed!");
  localStorage.removeItem("cart");
  window.location = "catalog.html";
}