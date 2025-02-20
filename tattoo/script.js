document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    });

    setTimeout(() => {
        elements.forEach((el) => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 500);
});
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
