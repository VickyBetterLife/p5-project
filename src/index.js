const get = require('./common.js')

let div = document.createElement('div')
div.innerHTML = "vicky mm"
div.style = "background-color:red"
document.body.appendChild(div)

function show() {
    document.write("webapck")
}

show()

get();