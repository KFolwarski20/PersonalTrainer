function openImage(img) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.border = "5px solid #fff";
    enlargedImg.style.borderRadius = "10px";

     overlay.appendChild(enlargedImg);

    document.body.appendChild(overlay);

    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };
}