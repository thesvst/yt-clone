import scriptContent from './scriptContent';
import { FB_AUTH_SCRIPT, STORAGE_FB_AUTH_ITEM } from './consts';

class FBAuthScriptManager {
  static checkIfScriptExists() {
    const script = document.getElementById('fbAuthScript');

    return !!script;
  }

  static appendScript() {
    const scriptExists = FBAuthScriptManager.checkIfScriptExists();
    if (scriptExists) return;

    const script = document.createElement('script');
    script.id = FB_AUTH_SCRIPT;
    script.innerHTML = scriptContent;
    document.body.appendChild(script);
  }

  static getToken() {
    const storageItem = JSON.parse(sessionStorage.getItem(STORAGE_FB_AUTH_ITEM));
    if (!storageItem) {
      return null;
    }

    return storageItem?.authResponse?.accessToken;
  }
}

export default FBAuthScriptManager;
