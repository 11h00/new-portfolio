class windows{
    width = 400
    height = 200
    id;
    constructor(width = this.width, height = this.height, title = "", text = ""){
        this.width = width;
        this.height = height
        this.id = "window_" + new Date().getTime();
        this.open_window(width, height, title, text)
    }
    open_window(width, height, title, text){
        document.querySelector("section.desktop").insertAdjacentHTML("afterbegin", `
            <window id="${this.id}" style="position: absolute;width: ${width}px;height: ${height}px;z-index: 9999;">
                <div>
                    <p>${title}</p>
                    <div>

                    </div>
                </div>
                <div>${text}</div>
            </window>
        `);
    }
    close_window(){

    }
}