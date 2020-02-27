class AnimatorAction {

    animated = false
    delay
    actionName
    interval

    constructor(actionName, delay) {
        this.actionName = actionName
        this.delay = delay
    }

    start() {
        if (!this.animated) {
            this.animated = true
            this.interval = setInterval(() => {
                store.dispatch(this.actionName)
            }, this.delay)
        }
    }

    stop() {
        if (this.animated) {
            this.animated = false
            clearInterval(this.interval)
        }
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.export = AnimatorAction
}
