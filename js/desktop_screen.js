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
                console.log(evn.currentTarget.children[1].innerText)
                let titll = evn.currentTarget.children[1].innerText
                let conren = evn.currentTarget.children[1].attributes.cdn.value
                new windows(titll, conren)
            }
        })
    })
    document.getElementById("log_me_out").addEventListener("click", () => {
        document.querySelectorAll("section").forEach(ww => ww.setAttribute("inactive", "true"))
        setTimeout(() => {
            document.querySelector("#login_screen").removeAttribute("inactive")
        }, 2000)
    })
}

let load_mathias_desktop = () => {
    document.querySelectorAll("section").forEach(ww => ww.setAttribute("inactive", "true"))
    setTimeout(() => {
        document.querySelector("#mathias777_desktop_screen").removeAttribute("inactive")
    }, 3000)
    document.querySelectorAll(".file").forEach(el => {
        el.addEventListener("click", (evn) => {
            if (double_clicks){
                console.log("action")
                console.log(evn.currentTarget.children[1].innerText)
                let titll = evn.currentTarget.children[1].innerText
                let conren = evn.currentTarget.children[1].attributes.cdn.value
                new windows(titll, conren, "taskbar_list_2", 1)
            }
        })
    })
    document.getElementById("log_me_out").addEventListener("click", () => {
        document.querySelectorAll("section").forEach(ww => ww.setAttribute("inactive", "true"))
        setTimeout(() => {
            document.querySelector("#login_screen").removeAttribute("inactive")
        }, 2000)
    })
}
setInterval(() => {
    if (double_clicks != 0){
        double_clicks = 0
    }
}, 900);