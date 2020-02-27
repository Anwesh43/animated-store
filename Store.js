class Store {

    cbActionMap = {}

    subscribe(action, cb) {
        if (!(action in this.cbActionMap)) {
            this.cbActionMap[action] = []
        }
        this.cbActionMap[action].push(cb)
    }

    dispatch(action, payload) {
        if (action in this.cbActionMap) {
            this.cbActionMap[action].forEach((cb) => {
                cb(payload)
            })
        } else {
            throw new Error("not a valid action")
        }
    }
}

const store = new Store()

if (typeof module !== "undefined" && module.exports) {
    module.exports = new Store()
}
