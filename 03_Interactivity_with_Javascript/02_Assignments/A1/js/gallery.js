const originalImage = document.getElementById("image");
const originalText = originalImage.innerHTML;
const originalBackground = originalImage.style.backgroundImage;

function upDate(previewPic) {
    console.log("Hovered image:", previewPic.alt, previewPic.src);
    originalImage.style.backgroundImage = `url(${previewPic.src})`;
    originalImage.innerHTML = previewPic.alt;
}

function unDo() {
    originalImage.innerHTML = originalText;
    originalImage.style.backgroundImage = originalBackground;
}

const previews = document.querySelectorAll(".preview");
previews.forEach(preview => {
    preview.addEventListener("mouseover", () => upDate(preview));
    preview.addEventListener("mouseout", unDo);
});