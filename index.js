const wallImg = document.querySelector(".img-card");
wallImg.addEventListener("mouseleave", () => {
  wallImg.src = "https://cdn.radiofrance.fr/s3/cruiser-production/2020/12/d6b7321e-f410-4f21-a625-b085525a59fb/870x489_gettyimages-959217164.webp";
});

function translationButtonLink() {
  const movingButton = document.getElementById("animation");
  movingButton.classList.add("new-translation");
}
