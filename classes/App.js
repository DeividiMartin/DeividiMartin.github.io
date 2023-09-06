import { Router } from "../controller/Router.js";

export class App{
    static startWeb(){
        window.addEventListener('load', () => {
            const router = new Router();
            router.navigate();
        
            window.addEventListener('hashchange', () => {
                router.navigate();
            });
        });
    }
}

