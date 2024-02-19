
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".present").classList.add("show");
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buttonLink").addEventListener("click", function () {
    window.location.href = "public/template/flower.html";
  });
});
