class BackToTopDeveloper {
    constructor() {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
        document.head.appendChild(linkElement);
    }
    backToTopFun() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    backToTop(iconOptions) {
        const backToTopDiv = document.createElement("div");
        backToTopDiv.classList.add("top_pop_backto_top");
        backToTopDiv.style.backgroundColor = iconOptions.backColor ? iconOptions.backColor : "red";
        backToTopDiv.style.position = "fixed";
        backToTopDiv.style.right = "3rem";
        backToTopDiv.style.bottom = "3rem";
        backToTopDiv.style.width = "50px";
        backToTopDiv.style.height = "50px";
        backToTopDiv.style.display = "flex";
        backToTopDiv.style.justifyContent = "center";
        backToTopDiv.style.alignItems = "center";
        backToTopDiv.style.borderRadius = "50%";
        backToTopDiv.style.cursor = "pointer";
        backToTopDiv.style.color = "white";
        backToTopDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        backToTopDiv.innerHTML = `<i class='fas fa-arrow-up'></i>`;
        document.body.appendChild(backToTopDiv);
        backToTopDiv.addEventListener("click", () => {
            this.backToTopFun();
        });
        window.addEventListener("load", () => {
            this.handelWhenToShowTheBackToTopButton(backToTopDiv);
        });
        window.addEventListener("scroll", () => {
            this.handelWhenToShowTheBackToTopButton(backToTopDiv);
        });
    }
    handelWhenToShowTheBackToTopButton(backToTopDiv) {
        const howMuchUserScroll = document.documentElement.scrollTop;
        if (howMuchUserScroll <= 0) {
            backToTopDiv.style.display = "none";
        }
        else {
            backToTopDiv.style.display = "flex";
        }
    }
}
const backToTopDeveloper = new BackToTopDeveloper();
export { backToTopDeveloper };
//# sourceMappingURL=backToTopDeveloper.js.map