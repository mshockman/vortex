/**
 * @method trigger
 * @mixin
 */
export default class ObjectEvents {
    constructor() {
        this.events = {};
    }


    on(event, fn) {
        if(!this.events[event]) {
            this.events[event] = [];
        }

        if(typeof fn !== 'function') {
            throw new TypeError('Callback was not a function.')
        }

        if(this.events[event].indexOf(fn) === -1) {
            this.events[event].push(fn);
        }
    }

    indexOf(event, fn) {
        if(this.events && this.events[event]) {
            return this.events[event].indexOf(fn);
        }

        return -1;
    }

    off(event, fn) {
        let i = this.indexOf(event, fn);

        if(i !== -1) {
            return this.events[event].splice(i, 1)[0];
        }
    }

    trigger(event, ...args) {
        if(this.events && this.events[event]) {
            for(let fn of this.events[event]) {
                if(fn(...args) === ObjectEvents.BREAK) {
                    break;
                }
            }
        }
    }
}


ObjectEvents.BREAK = {};
