const upScreen = document.querySelector("#scroll_to_top")

upScreen.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})


