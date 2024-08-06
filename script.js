let faq = document.querySelectorAll(".faq");

console.log(faq.children);

faq.forEach((v) => {
  console.log(v);
  v.addEventListener("click", () => {
    v.nextElementSibling.classList.toggle("scale-y-100");
    v.nextElementSibling.classList.toggle("h-[auto]");

    console.log("Done");
  });
});
