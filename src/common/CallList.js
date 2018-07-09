export default class CallList {
    constructor(...args) {
        this.stack = [];
        this.args = args;
    }

    add(fn) {
        this.stack.push(fn);
    }

    remove(fn) {
        const i = this.stack.indexOf(fn);

        if(i !== -1) {
            this.stack.splice(i, 1);
            return true;
        }

        return false;
    }

    fire(...args) {
        let args2 = [...this.args, ...args];

        for(let i = 0, l = this.stack.length; i < l; i++) {
            if(this.stack[i](...args2) === CallList.BREAK) {
                break;
            }
        }
    }
}


// An object that can be returned to force CallList to break.
CallList.BREAK = {};
