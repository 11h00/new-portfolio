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
                            <li ac="close">
                                X
                            </li>
                            <li ac="minimize">
                                _
                            </li>
                        </ul>
                    </div>
                </div>
                <div><span>${text}</span></div>
            </window>
        `);
    }
    close_window(){

    }
}