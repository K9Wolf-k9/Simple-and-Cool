// Global var
var box = document.getElementById('box')
var textArea = document.getElementById('code')

function changeborder(){
    textArea.innerHTML = ''

    var btlr = document.getElementById('btlr').value
    var btrr = document.getElementById('btrr').value
    var bbrr = document.getElementById('bbrr').value
    var bblr = document.getElementById('bblr').value

    // top left
    if (btlr === '')
    {
        btlr = 0
    }
    if (btlr > 150)
    {
        btlr = 150
    }

    //top right
    if (btrr === '')
    {
        btrr = 0
    }
    if (btrr > 150)
    {
        btrr = 150
    }

    //bottom right
    if (bbrr === '')
    {
        bbrr = 0
    }
    if (bbrr > 150)
    {
        bbrr = 150
    }

    //bottom left
    if (bblr === '')
    {
        bblr = 0
    }
    if (bblr > 150)
    {
        bblr = 150
    }

    textArea.innerHTML += `border-top-left-radius = ${btlr}px \n\n`
    box.style.borderTopLeftRadius = btlr + 'px'

    textArea.innerHTML += `border-top-right-radius = ${btrr}px \n\n`
    box.style.borderTopRightRadius = btrr + 'px'

    textArea.innerHTML += `border-bottom-right-radius = ${bbrr}px \n\n`
    box.style.borderBottomRightRadius = bbrr + 'px'

    textArea.innerHTML += `border-bottom-left-radius = ${bblr}px`
    box.style.borderBottomLeftRadius = bblr + 'px'
}

function copy(){
    var text = document.getElementById('code')
    
    text.select()
    text.setSelectionRange(0, 99999)
    document.execCommand("copy")
    window.alert("The values were copied")
}