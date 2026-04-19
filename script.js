function login() {
  let user = document.getElementById("loginUser").value.trim();
  let pass = document.getElementById("loginPass").value.trim();

  if (user === "" || pass === "") {
    alert("All fields are required!");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  alert("Login Successful");
  window.location = "events.html";
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

  if (name === "") return alert("Enter name");
  if (username.length < 4) return alert("Username too short");

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(pattern)) return alert("Invalid email");

  if (dob === "") return alert("Select DOB");
  if (password.length < 6) return alert("Weak password");
  if (password !== confirmPassword) return alert("Passwords not match");
  if (!gender) return alert("Select gender");

  alert("Registered Successfully");
  window.location = "index.html";
}

// LOGOUT
function logout() {
  alert("Logged out");
  window.location = "index.html";
}

// CART
function addToCart(name, price) {
  if (!name || price <= 0) {
    alert("Invalid event");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find(i => i.name === name);

  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

// LOAD CART
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let table = document.getElementById("cartTable");
  let total = 0;

  table.innerHTML = "";

  cart.forEach((item, index) => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>$${item.price}</td>
        <td>$${item.price * item.qty}</td>
        <td><button class="btn btn-danger" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
    total += item.price * item.qty;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

// REMOVE
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// CHECKOUT
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Booking Confirmed!");
  localStorage.removeItem("cart");
  window.location = "events.html";
}


