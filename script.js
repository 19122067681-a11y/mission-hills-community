const header = document.querySelector(".site-header");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeButton = document.querySelector(".lightbox-close");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll(".card-preview").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const alt = button.querySelector("img")?.alt || "Resource card preview";
    lightboxImage.src = image;
    lightboxImage.alt = alt;
    lightbox.hidden = false;
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
}

closeButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});
