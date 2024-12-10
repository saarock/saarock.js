import { toastsDeveloper } from "../../developers/saarockJsLibary/toastsDeveloper.js";
import { BackToTop, Toast, ToastsManagerOptions } from "../../../types/index.js";
import { backToTopDeveloper } from "../../developers/saarockJsLibary/backToTopDeveloper.js";


/**
 * BackToTop Manager
 */
class BackToTopManager {
  public backToTop(backToTopOption: BackToTop) {
    backToTopDeveloper.backToTop(backToTopOption);
  }
}


/**
 * Toast Manager
 */

class ToastsManager extends BackToTopManager implements ToastsManagerOptions {
  public async success(toast: Toast, type = "success") {
    await toastsDeveloper.addToastToQueue(toast, type);
  }

  public async error(toast: Toast, type = "error") {
    await toastsDeveloper.addToastToQueue(toast, type);
  }

  public async loading(toast: Toast, type = "loading") {
    await toastsDeveloper.addToastToQueue(toast, type);
  }

  public async warning(toast: Toast, type = "warning") {
    await toastsDeveloper.addToastToQueue(toast, type);
  }
}

/**
 * Main manager 
 */
class Saarock extends ToastsManager {

}


const saarock = new Saarock();


export { saarock };
