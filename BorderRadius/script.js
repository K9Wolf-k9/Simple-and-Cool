var box = document.getElementById('box')

// Change Border-Top-Left-Radius
function changeBTLR(){
    var btlr = document.getElementById('btlr').value
    var txt = document.getElementById('BTLRtxt')

    if (btlr === '')
    {
        btlr = 0
    }
    if (btlr > 150)
    {
        btlr = 150
    }

    txt.innerHTML = `border-top-left-radius = ${btlr}px`
    box.style.borderTopLeftRadius = btlr + 'px'
}

// Change Border-Top-Right-Radius
function changeBTRR(){
    var btrr = document.getElementById('btrr').value
    var txt = document.getElementById('BTRRtxt')

    if (btrr === '')
    {
        btrr = 0
    }
    if (btrr > 150)
    {
        btrr = 150
    }

    txt.innerHTML = `border-top-right-radius = ${btrr}px`
    box.style.borderTopRightRadius = btrr + 'px'
}

// Change Border-Bottom-Right-Radius
function changeBBRR(){
    var bbrr = document.getElementById('bbrr').value
    var txt = document.getElementById('BBRRtxt')

    if (bbrr === '')
    {
        bbrr = 0
    }
    if (bbrr > 150)
    {
        bbrr = 150
    }

    txt.innerHTML = `border-bottom-right-radius = ${bbrr}px`
    box.style.borderBottomRightRadius = bbrr + 'px'
}

// Change Border-Bottom-Left-Radius
function changeBBLR(){
    var bblr = document.getElementById('bblr').value
    var txt = document.getElementById('BBLRtxt')

    if (bblr === '')
    {
        bblr = 0
    }
    if (bblr > 150)
    {
        bblr = 150
    }

    txt.innerHTML = `border-bottom-left-radius = ${bblr}px`
    box.style.borderBottomLeftRadius = bblr + 'px'
}

function copy(){
    var text = document.getElementById('copytxt')
    
    text.select()
    text.setSelectionRange(0, 99999)
    document.execCommand("copy")
    window.alert("The values were copied")
}