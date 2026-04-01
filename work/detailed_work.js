const images = document.querySelectorAll(".images-container img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// 初期表示
images[index].classList.add("active");
updateButtons();

// go to next
next.addEventListener("click", () => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
  updateButtons();
});

// go to prev
prev.addEventListener("click", () => {
  images[index].classList.remove("active");
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add("active");
  updateButtons();
});

function updateButtons() {
    if (index === 0) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
    if (images.length - 1 === index) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
}