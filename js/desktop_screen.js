let double_clicks = 0;
let load_guest_desktop = () => {
    document.querySelectorAll("section").forEach(ww => ww.setAttribute("inactive", "true"))
    setTimeout(() => {
        document.querySelector("#guest_desktop_screen").removeAttribute("inactive")
    }, 3000)
    document.querySelectorAll(".file").forEach(el => {
        el.addEventListener("click", (evn) => {
            if (double_clicks){
                console.log("action")
                console.log(evn.currentTarget)
            }
        })
    })
}
setInterval(() => {
    if (double_clicks != 0){
        double_clicks = 0
    }
}, 900);