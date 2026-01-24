// IMAGE CAROUSEL
const images = [
    {
        src: "images/japan1.jpg",
        alt: "Snow-capped Mount Fuji towering over a distant village and forest, with autumn foliage in the foreground under a clear sky."
    },
    {
        src: "images/japan2.jpg",
        alt: "Red Japanese torii gates surrounded by lush green shrubs and trees in a tranquil garden."
    },
    {
        src: "images/japan3.jpg",
        alt: "Traditional Japanese village street with wooden houses and manicured trees under a cloudy sky, lit by soft sunlight from the right."
    },
    {
        src: "images/japan4.jpg",
        alt: "Japanese castle surrounded by cherry blossom trees at sunset."
    },
    {
        src: "images/japan5.jpg",
        alt: "Japanese castle and Mount Fuji with cherry blossoms in spring."
    },
    {
        src: "images/japan6.jpg",
        alt: "Kyoto in winter at sunset."
    },
    {
        src: "images/japan7.jpg",
        alt: "Traditional red-and-white Japanese temple complex beside a pond, set against lush green mountains."
    },
    {
        src: "images/japan8.jpg",
        alt: "Illuminated wooden Japanese temple overlooking a forested hillside and city at dusk."
    },
    {
        src: "images/japan9.jpg",
        alt: "Kinkaku-ji (Golden Pavilion) reflected in a pond, surrounded by trees in Kyoto."
    },
    {
        src: "images/japan10.jpg",
        alt: "A five-story Japanese pagoda surrounded by lush green trees, a garden pond, and forested hills."
    },
    {
        src: "images/japan11.jpg",
        alt: "Japanese torii gate over water at sunset."
    },
    {
        src: "images/japan12.jpg",
        alt: "A red Japanese pagoda overlooking cherry blossoms and Mount Fuji at sunset."
    }
];

const imgElement = document.getElementById("carousel-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function updateCarousel() {
    imgElement.src = images[currentIndex].src;
    imgElement.alt = images[currentIndex].alt;
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

if (imgElement && nextBtn && prevBtn) {

    // Initialize
    updateCarousel();

    // Mouse / click
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Keyboard: Arrow keys when carousel is focused
    document.addEventListener("keydown", (e) => {
        if (document.activeElement.closest(".carousel")) {
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        }
    });

    // Keyboard: Enter / Space on buttons
    [nextBtn, prevBtn].forEach(btn => {
        btn.setAttribute("tabindex", "0");

        btn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                btn.click();
            }
        });
    });
}


//IMAGE GALLERY
const originalImage = document.getElementById("image");
const originalText = originalImage.innerHTML;
const originalBackground = originalImage.style.backgroundImage;

function upDate(previewPic) {
    console.log("Mouse hover on / focus for image:", previewPic.alt + " (" + previewPic.src + ").");
    originalImage.style.backgroundImage = `url(${previewPic.src})`;
    originalImage.innerHTML = `<span>${previewPic.alt}</span>`;
    originalImage.style.fontSize = "1em";
}

function unDo() {
    console.log("Mouse hover off / blur image.");
    originalImage.innerHTML = originalText;
    originalImage.style.backgroundImage = originalBackground;
    originalImage.style.fontSize = "1em";
}

window.addEventListener("load", addTabFocus);

function addTabFocus() {
    console.log("Load event triggered: Adding tabindex values")

    const previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
    }
}

const previews = document.querySelectorAll(".preview");
previews.forEach(preview => {
    preview.addEventListener("mouseover", () => upDate(preview));
    preview.addEventListener("mouseout", unDo);

    preview.addEventListener("focus", () => upDate(preview));
    preview.addEventListener("blur", unDo);
});