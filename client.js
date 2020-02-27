class Box {

    dom = document.createElement('div')

    constructor() {
        this._initStyle()
        document.body.appendChild(this.dom)
    }

    _initStyle() {
        const {innerWidth, innerHeight} = window
        this.dom.style.border = '1px solid green'
        const size = Math.min(innerWidth, innerHeight) / 10
        this.dom.style.width = `${size}px`
        this.dom.style.height = `${size}px`
        this.dom.style.position = 'absolute'
        this.dom.style.top = `0px`
        this.dom.style.left = `0px`
    }

    moveX(dir) {
        this.dom.style.left = parseInt(this.dom.style.left) + dir
    }

    moveY(dir) {
        this.dom.style.top = parseInt(this.dom.style.top) + dir
    }

    handleClick(cb) {
        this.dom.onclick = () => {
            cb()
        }
    }
}

const box = new Box()

store.subscribe('MOVE_RIGHT', () => {
    box.moveX(20)
})

store.subscribe('MOVE_DOWN', () => {
    box.moveY(20)
})

const animatorActions = [new AnimatorAction('MOVE_RIGHT', 100), new AnimatorAction('MOVE_DOWN', 100)]
var i = 0
window.onclick  = () => {
    const index = Math.floor(i / 2) % 2
    if (i % 2 == 0) {
        animatorActions[index].start()
    } else {
        animatorActions[index].stop()
    }
    i++
}
