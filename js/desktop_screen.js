let load_guest_desktop = () => {
    document.querySelectorAll("section").forEach(ww => ww.setAttribute("inactive", "true"))
    setTimeout(() => {
        document.querySelector("#guest_desktop_screen").removeAttribute("inactive")
    }, 3000)
}