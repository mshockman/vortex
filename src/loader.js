import $ from 'jquery';


export default class Loader {
    static loader = null;

    constructor() {
        this.classes = {};
    }

    init() {
        $(this.parse.bind(this));
    }

    register(name, func) {
        if(this.classes.hasOwnProperty(name) && this.classes[name]) {
            throw new Error("Auto Loading name conflict.");
        }

        this.classes[name] = func;
    }

    parse(section=null) {
        if(section === null) {
            section = $("[data-init]");
        } else {
            section = section.find("[data-init]").addBack("[data-init]");
        }

        section.each((x, element) => {
            const classes = element.getAttribute("data-init").split(/\s*,\s*/);

            for(let c of classes) {
                if(c) {
                    try {
                        this.classes[c]({target: element});
                    } catch(error) {
                        if(error instanceof TypeError && error.message === 'Cannot call a class as a function') {
                            new this.classes[c]({target: element});
                        }
                    }
                }
            }
        });
    }

    static register(name, fn) {
        return this.loader.register(name, fn);
    }

    static init() {
        return this.loader.init();
    }
}


Loader.loader = new Loader();
