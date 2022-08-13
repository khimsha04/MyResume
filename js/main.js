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
sendMessage({
  name: "zuka",
  email: "zukakhimshiashvili1@gmail.com",
  website: "website",
  message: "hello world!",
});
function sendMessage(message) {
  let request = new XMLHttpRequest();
  request.open("POST", "http://borjomi.loremipsum.ge/api/send-message");
  request.onloadend = function (data) {
    if (data.status == 1) {
      alert("Thank you for getting in touch! We appreciate you contacting us.");
    }
  };

  request.send(message);
}
