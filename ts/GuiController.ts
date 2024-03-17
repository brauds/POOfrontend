class GuiController {
    private btnToggleDrawer: HTMLElement | null;
    private menuDrawer: HTMLElement | null;

    constructor() {
        this.btnToggleDrawer = document.getElementById("btnToggleDrawer");
        this.menuDrawer = document.getElementById("drawerMenu");

        function toggleDrawer() {
            if (this.menuDrawer?.style.display === "") {
                this.menuDrawer.style.display = "block";
                return;
            }

            if (this.menuDrawer?.style.display === "none") {
                this.menuDrawer.style.display = "block";
            } else {
                this.menuDrawer.style.display = "none";
            }
        }

        this.btnToggleDrawer?.addEventListener("click", toggleDrawer.bind(this));
    }
}

export { GuiController };
