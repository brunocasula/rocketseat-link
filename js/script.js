function toggleMode() {
    const body = document.body;
    body.classList.toggle("light");

    // if (body.classList.contains("light")) {
    //     body.classList.remove("light")
    // }
    // else {
    //     body.classList.add("light")
    // }

    const img = document.querySelector(".switch-img")

    console.log(img);

    if (body.classList.contains("light")) {
        img.setAttribute('src', './assets/moon-stars.svg')
    } else {
        img.setAttribute('src', './assets/sun.svg')
    }

}