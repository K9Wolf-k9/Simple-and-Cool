var box = document.getElementById('box')

function changeBTLR(){
    var btlr = document.getElementById('btlr').value
    box.style.borderTopLeftRadius = btlr + 'px'

    var txt = document.getElementById('BTLRtxt')
    txt.innerHTML = `border-top-left-radius = ${btlr}px`
}

function changeBTRR(){
    var btrr = document.getElementById('btrr').value
    box.style.borderTopRightRadius = btrr + 'px'

    var txt = document.getElementById('BTRRtxt')
    txt.innerHTML = `border-top-right-radius = ${btrr}px`
}

function changeBBRR(){
    var bbrr = document.getElementById('bbrr').value
    box.style.borderBottomRightRadius = bbrr + 'px'

    var txt = document.getElementById('BBRRtxt')
    txt.innerHTML = `border-bottom-right-radius = ${bbrr}px`
}

function changeBBLR(){
    var bblr = document.getElementById('bblr').value
    box.style.borderBottomLeftRadius = bblr + 'px'

    var txt = document.getElementById('BBLRtxt')
    txt.innerHTML = `border-bottom-left-radius = ${bblr}px`
}