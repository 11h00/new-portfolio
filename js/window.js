class windows{
    width = 400
    height = 200
    id;
    constructor(width = this.width, height = this.height){
        this.width = width;
        this.height = height
        this.id = "window_" + new Date().getTime();
        this.open_window(width, height)
    }
    open_window(width, height, title, text){
        document.querySelector("section.desktop").insertAdjacentHTML("afterbegin", `
            <window style="position: absolute;width: ${this.width};height: ${this.height};"></window>
        `);
    }
    close_window(){

    }
}