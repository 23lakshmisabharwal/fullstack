// Change total price based on selected option
document.addEventListener("DOMContentLoaded", () => {
    const unit1 = document.getElementById("unit1");
    const unit2 = document.getElementById("unit2");
    const unit3 = document.getElementById("unit3");
    const totalText = document.querySelector(".total span");
  
    unit1.addEventListener("change", () => totalText.innerText = "$10.00 USD");
    unit2.addEventListener("change", () => totalText.innerText = "$18.00 USD");
    unit3.addEventListener("change", () => totalText.innerText = "$24.00 USD");
  });
  