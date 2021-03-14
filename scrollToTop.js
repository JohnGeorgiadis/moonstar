const setScrollToTopButtonVisibility = () => {
    const topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

const addScrollToTopButtonListener = () => {
    const topButton = document.getElementById("topButton");

    topButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    setScrollToTopButtonVisibility();
};

addScrollToTopButtonListener();


