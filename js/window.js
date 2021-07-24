class windows{
    width = 400
    height = 200
    id;
    constructor(title = "", text = "", width = this.width, height = this.height){
        this.width = width;
        this.height = height
        this.id = "window_" + new Date().getTime();
        this.open_window(width, height, title, text)
    }
    open_window(width, height, title, text){
        document.querySelector("section.desktop").insertAdjacentHTML("afterbegin", `
            <window id="${this.id}" style="position: absolute;width: ${width}px;height: ${height}px;z-index: 1;">
                <div>
                    <p>${title}</p>
                    <div>
                        <ul class="window_actions">
                            <li class="win_ac_btn" ac="close">
                                X
                            </li>
                            <li class="win_ac_btn" ac="minimize">
                                _
                            </li>
                        </ul>
                    </div>
                </div>
                <div><span>${text}</span></div>
            </window>
        `);
        document.querySelectorAll(".win_ac_btn").forEach(el => {
            el.addEventListener("click", sa => {
                let main = sa.currentTarget;
                let win_id = main.parentElement.
            })
        })
    }
    close_window(){
        document.getElementById(this.id).remove()
    }
}