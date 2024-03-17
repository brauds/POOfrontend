import { AppController } from "./AppController.ts";
import { GuiController } from "./GuiController.ts";

const appInstance = new AppController();
appInstance.setGuiController(new GuiController());

export { appInstance };
