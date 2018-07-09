/**
 * Decorates a function so that it can be aborted.  Useful for ajax requests.
 * @returns {abort}
 */
import CallList from "./CallList";

export default function abortable(onAbort) {
    let aborted = false;

    function abort() {
        aborted = true;

        if(onAbort) {
            onAbort();
        }
    }

    abort.isAborted = function() {
        return aborted;
    };

    abort.wrap = function(fn) {
        return function() {
            if(!aborted) {
                return fn.apply(this, arguments);
            }
        }
    };

    return abort;
}
