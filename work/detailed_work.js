const imageSets = {
    downloader: {
        basePath: "/images/downloader/",
        files: [
            "thumbnail.png"
        ]
    },
    security_camera: {
        basePath: "/images/security_camera/edited/",
        files: [
            "earth-daiki-login-edited.png",
            "earth-daiki-passkey-edited.png",
            "earth-daiki-main-edited.png",
            "earth-daiki-camera-edited.png",
            "earth-daiki-ec2-log.png",
            "earth-daiki-camera-log.png"
        ]
    },
    pytorch: {
        basePath: "/images/other_stuff/",
        files: [
        ]
    },
    yolo: {
        basePath: "/images/other_stuff/",
        files: [
            "thumbnail.png",
            "yolo/train.jpg",
        ]
    },
    spotify: {
        basePath: "/images/spotify/",
        files: [
            "thumbnail.png"
        ]
    },
    unofficial_api: {
        basePath: "/images/Unofficial_API/",
        files: [
            "user.png",
            "user_post.png",
            "user_story.png",
            "user_highlight.png",
            "download.png",
            "relationship.png",
            "thumbnail.png"
        ]
    },
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const overlay = document.querySelector(".overlay");
setImageCloseBtn();
setOverlayClose();
document.querySelectorAll(".images-section").forEach(section => {
    init(section);
});

function init(section) {
    const container = section.querySelector(".images-container");
    const project = container.dataset.project;
    const current = imageSets[project];

    if (!current || !current.files || current.files.length === 0) return;
    current.files.forEach(fileName => {
        const img = document.createElement("img");
        img.src = current.basePath + fileName;
        container.appendChild(img);
    });

    const images = container.querySelectorAll("img");
    setImgButtonBehavior(section, images);
    setImageOpen(container);
}

function setImgButtonBehavior(section, images) {
    if (!images || images.length === 0) return;

    let index = 0;
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    // 初期表示
    images[index].classList.add("active");
    updateButtons(images, index, prev, next);

    // go to next
    next.addEventListener("click", () => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
        updateButtons(images, index, prev, next);
    });

    // go to prev
    prev.addEventListener("click", () => {
        images[index].classList.remove("active");
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add("active");
        updateButtons(images, index, prev, next);
    });
}

function updateButtons(images, index, prev, next) {
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

function setImageOpen(container) {
    const imgs = container.querySelectorAll("img");
    imgs.forEach(img => {
        img.onclick = () => {
            openImage(img);
        }
    });
}

function setImageCloseBtn() {
    const closeBtn = modal.querySelector(".closeBtn");
    closeBtn.onclick = () => {
        closeImage();
    }
}

function setOverlayClose() {
    overlay.onclick = () => {
        closeImage();
    }
    console.log("overlay");
}

function openImage(img) {
    if (modalImg.src !== img.src) {
        modalImg.src = img.src;
    }

    overlay.style.display = "block";
    modal.style.display = "block";

    document.body.style.overflow = "hidden";
}

function closeImage() {
    overlay.style.display = "none";
    modal.style.display = "none";

    document.body.style.overflow = "auto";
}