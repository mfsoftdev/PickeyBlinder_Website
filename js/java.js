/* progressbar and back to top button js start */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Progress BAr JS start

const pageProgressBar = document.querySelector(".progress-bar");
document.addEventListener("scroll", () => {
    const scrolledPercentage =
    (scrollContainer().scrollTop /
    (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;
    
    pageProgressBar.style.width = `${scrolledPercentage}%`;
    
      if (scrollContainer().scrollTop > showOnPx) {
          backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });
    /* progressbar and back to top button js done */