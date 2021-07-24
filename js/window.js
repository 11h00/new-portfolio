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
            <window style="position: absolute;width: ${this.width}px;height: ${this.height}px;"></window>
        `);
    }
    close_window(){

    }
}