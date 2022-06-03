const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  // set item to localStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  //set item to sessionStorage
  //   sessionStorage.setItem("taxRate", taxRate);
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
});

//capturing method

// let productsDiv = document.querySelector(".products");
// productsDiv.addEventListener("click", (event) => {
//   if (event.target.className == "minus") {
//     console.log("minus button clicked");
//   } else if (event.target.classList.contains("plus")) {
//     console.log(event.target.classList);
//     // console.log("plus button clicked");
//   } else if (event.target.classList.contains("remove-product")) {
//     console.log("remove button clicked");
//   } else {
//     console.log("other element clicked");
//   }
//   console.log(event.target);
// });

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateProductAndCartTotal();
    } else {
      if (confirm("Product will be deleted ?")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }
  } else if (event.target.classList.contains("plus")) {
    calculateProductAndCartTotal();
    event.target.previousElementSibling.innerText++;
  } else if (event.target.classList.contains("remove-product")) {
    event.target.parentElement.parentElement.parentElement.remove();
  } else {
    console.log("other elements clicked");
  }
  //   console.log(event.target);
});

const calculateProductAndCartTotal = () => {};

const calculateCartTotal = () => {};
