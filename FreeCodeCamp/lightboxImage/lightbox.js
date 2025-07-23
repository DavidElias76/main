// get the reference
const galleryItems = document.querySelectorAll(".gallery-items");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// show lightbox with full image
galleryItems.forEach((item) => {
    item.addEventListener("click", ()=> {
        lightbox.style.display = "flex"; // chang the display property to flex
        const thumbSrc = item.getAttribute("src"); // get the src attribute
        const fullSrc = thumbSrc.replace("-thumbnail", ""); // remove the thumbnail and replace it with a empty string
        console.log(fullSrc); // to check if the link is changed (opitonal)
        lightboxImage.setAttribute("src", fullSrc); // set the full image to lightbox
    });
});

//  close button
closeBtn.addEventListener("click", ()=> {
    lightbox.style.display = "none";
})

// close the lightbox
lightbox.addEventListener("click", ()=> {
    lightbox.style.display = "none";
})