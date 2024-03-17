import { GuiController } from "./GuiController.ts";

export class AppController {
    private guiCtrl: GuiController; 

    setGuiController(guiCtrlInstance: GuiController) {
        this.guiCtrl = guiCtrlInstance;
    }
}

