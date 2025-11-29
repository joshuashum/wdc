const originalImage = document.getElementById("image");
const originalText = originalImage.innerHTML;
const originalBackground = originalImage.style.backgroundImage;

function upDate(previewPic) {
    console.log("Mouse hover on / focus for image:", previewPic.alt + " (" + previewPic.src + ").");
    originalImage.style.backgroundImage = `url(${previewPic.src})`;
    originalImage.innerHTML = `<span>${previewPic.alt}</span>`;
    originalImage.style.fontSize = "1.5em";
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