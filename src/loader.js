import $ from 'jquery';


export default class Loader {
    static loader = null;

    constructor() {
        this.registry = {};
    }

    init() {
        $(this.parse.bind(this));
    }

    register(name, func) {
        if(this.registry.hasOwnProperty(name) && this.registry[name]) {
            throw new Error("Auto Loading name conflict.");
        }

        this.registry[name] = func;
    }

    parse(section=null) {
        if(section === null) {
            section = $("[data-init]");
        } else {
            section = $(section).find("[data-init]").addBack("[data-init]");
        }

        section.each((x, element) => {
            const classes = element.getAttribute("data-init").split(/\s+/);

            for(let c of classes) {
                if(this.registry[c]) {
                    let target = element,
                        data = {},
                        r;

                    element = $(element);
                    Object.assign(data, element.data());

                    r = this.registry[c](target, data);
                    data = element.data();

                    if(r) {
                        if(!data.initialized) {
                            data.initialized = {};
                        }

                        data.initialized[c] = r;
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
window.Loader = Loader;