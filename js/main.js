let images = document.querySelectorAll(".timeout"),
  counter = images.length;
let imgCounter = 0;
setInterval(function Timer() {
  images[imgCounter].style.display = "block";
  images.forEach(function (element, index) {
    if (index != imgCounter) {
      images[index].style.display = "none";
    }
  });

  imgCounter++;
  if (imgCounter == counter) {
    imgCounter = 0;
  }
}, 5000);

let indexValue = 1;
showImg(indexValue);
function blockall(e) {
  showImg((indexValue = e));
}
function showImg(e) {
  let i;
  const img = document.querySelectorAll(".sectionsecondblock");
  const slider = document.querySelectorAll(".blockall .blocks");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.background = "#f9f9f9";
  }
  img[indexValue - 1].style.display = "block";
  slider[indexValue - 1].style.background = "#15263e";
}
/////
let indexValue1 = 1;
showImg1(indexValue1);
function pxblockall(e) {
  showImg1((indexValue1 = e));
}
function showImg1(e) {
  let i;
  const img1 = document.querySelectorAll(".slide");
  const slider1 = document.querySelectorAll(".pxblockall .pxblock");
  if (e > img1.length) {
    indexValue1 = 1;
  }
  if (e < 1) {
    indexValue1 = img1.length;
  }
  for (i = 0; i < img1.length; i++) {
    img1[i].style.display = "none";
  }
  for (i = 0; i < slider1.length; i++) {
    slider1[i].style.background = "#f9f9f9";
  }
  img1[indexValue1 - 1].style.display = "flex";
  slider1[indexValue1 - 1].style.background = "#e93656";
}

//8
// sendMessage({
//   name: "zuka",
//   email: "zukakhimshiashvili1@gmail.com",
//   website: "website",
//   message: "hello world!",
// });
// function sendMessage(message) {
//   let request = new XMLHttpRequest();
//   request.open("POST", "http://borjomi.loremipsum.ge/api/send-message");
//   request.onloadend = function (data) {
//     if (data.status == 1) {
//       // alert("Thank you for getting in touch! We appreciate you contacting us.");
//     }
//   };

//   request.send(message);
// }
const signupForm = document.querySelector("#user-signup-form");
const first_name = document.querySelector("#first_name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const message = document.querySelector("#message");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    name: first_name.value,
    email: email.value,
    website: website.value,
    message: message.value,
  };
  createUser(userData);
  signupForm.reset();
});
async function createUser(userData) {
  try {
    const res = await fetch("http://borjomi.loremipsum.ge/api/send-message", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataFrom = await res.json();
    console.log(dataFrom);
    // await response.json();
  } catch (e) {
    console.log("Error - ", e);
  }
}

const modalOpenBtn = document.querySelector("#button");
const myModal = document.querySelector(".my-modal");

modalOpenBtn.addEventListener("click", () => {
  openModal(".my-modal");
});

function openModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add("visible");

  const closeBtn = modalNode.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    closeModal(modalSelector);
  });
}
function closeModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove("visible");
}
