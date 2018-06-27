import $ from 'jquery';


export default class Application {
    constructor(classes=null) {
        this.classes = classes || {};
        this.page = null;
        this.isLoaded = false;
    }

    registerPage(name, cls) {
        if(this.classes.hasOwnProperty(key) && this.classes[key]) {
            throw new Error("Duplicate Class Key.");
        }

        this.classes[key] = cls;
    }

    init(page, context) {
        if(this.page) {
            throw new Error("Page already loaded.");
        }

        $(async () => {
            this.isLoaded = true;

            const pageClassImporter = this.classes[page],
                PageClass = (await pageClassImporter()).default;

            this.page = new PageClass(context);
            this.page.load();
        });
    }
}
