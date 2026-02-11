const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }, 5000);

  


  function openPopup(id) {
  document.getElementById("popupOverlay").style.display = "flex";

  document.querySelectorAll(".popup-content").forEach(popup => {
    popup.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}


function openCart() {
    const cart = document.getElementById("sideCart");
    cart.classList.add("active");
  }

  function addToCart(name, price) {
    const cart = document.getElementById("sideCart");
    const cartItems = document.getElementById("cartItems");

    // remove empty text
    if (cartItems.querySelector(".empty")) {
      cartItems.innerHTML = "";
    }

    // add product
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<strong>${name}</strong><br>${price}`;
    cartItems.appendChild(item);
    updateCartCount();

    function updateCartCount() {
  document.getElementById("cart-count").textContent = cartItems.querySelectorAll(".item").length;
}




    // open cart
    cart.classList.add("active");
  }

  function closeCart() {
    document.getElementById("sideCart").classList.remove("active");
  }



function openCheckoutForm() {
  document.getElementById("checkoutPopup").style.display = "flex";
}

function closeCheckoutForm() {
  document.getElementById("checkoutPopup").style.display = "none";
}

// OPTIONAL: handle form submit
document.getElementById("checkoutForm").addEventListener("submit", function(e){
  e.preventDefault(); // prevent reload
  alert("Order placed successfully!");
  closeCheckoutForm();
  closeCart(); // close side cart if open
});


function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // add/remove active class
}


document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle('active'); // toggle show
    }
  });
});






const modal = document.getElementById("authModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-btn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

/* Open Modal */
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

/* Close Modal */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Close When Clicking Outside */
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* Switch Forms */
showSignup.addEventListener("click", () => {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

showLogin.addEventListener("click", () => {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});