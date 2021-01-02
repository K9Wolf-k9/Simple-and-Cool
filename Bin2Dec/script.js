function convert() {
    var bin = document.getElementById('txtbin').value
    var dec = 0 //1001

    for(var i = 0; i < bin.length; i++)
    {
        var num = parseInt(bin[i])
        if(num != 0 || num != 1)
        {
            window.alert('Enter a binary number')
            break
        }
    }
    
    if (bin.length == 0)
    {
        window.alert('Enter a binary number')
    }
    else
    {
        for (var i = bin.length-1; i >= 0; i--) //-1 porque o indice começa no 0
        {
            dec +=  parseInt(bin[i]) * Math.pow(2, bin.length-1-i) // 0 += 1 * 2^4-1-3 = 1 / 1 += 0 * 2^4-1-2 = 1 / 1 += 0 * 2^4-1-1 = 1 / 1 += 1 * 2^4-1-0 = 9
            // dec = parseInt(bin, 2)
        }
        document.getElementById('txtres').value = dec
    }
}
