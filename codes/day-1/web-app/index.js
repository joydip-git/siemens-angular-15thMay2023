function changeContent(e) {
    //fetch()
    console.log(e)
    var divRef = e.target
    console.log(divRef)
    divRef.innerText = "We are exploring JS"
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        var div = document.getElementById('lastDiv')
        div.addEventListener('mouseover', changeContent)
    }
)

