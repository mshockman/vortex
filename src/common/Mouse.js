
export default class Mouse {
    constructor() {
        this.isMouseTracked = false;
    }

    trackMousePosition(callback) {
        if(this.isMouseTracked) {
            return;
        }

        const $doc = $(document);

        const untrack = () => {
            $doc.off('mousemove', onMouseMove);
            this.isMouseTracked = false;
            this._untrackMousePosition = null;
        };

        const onMouseMove = (event) => {
            callback(event, [event.pageX, event.pageY]);
        };

        this.isMouseTracked = true;
        this._untrackMousePosition = untrack;
        $doc.on('mousemove', onMouseMove);

        return {
            $doc: $doc,
            untrack: untrack,
            callback: callback
        };
    }

    untrackMousePosition() {
        if(this._untrackMousePosition) {
            this._untrackMousePosition();
            return true;
        }

        return false;
    }
}
