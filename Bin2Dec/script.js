function convert() {
    var bin = document.getElementById('txtbin').value
    var dec = 0 //1001

    if (bin.length == 0) //bin === ''
    {
        window.alert('Enter a binary number')
    } 
    else
    {

        bin.split('').map(char => { 
            if (char !== '0' && char !== '1') return alert('Enter a binary number')
        })
        dec = parseInt(bin, 2)
        
        document.getElementById('txtres').value = dec
    }
}

        /*for (var i = bin.length-1; i >= 0; i--) //-1 porque o indice começa no 0
        {
            dec +=  parseInt(bin[i]) * Math.pow(2, bin.length-1-i)  0 += 1 * 2^4-1-3 = 1 / 1 += 0 * 2^4-1-2 = 1 / 1 += 0 * 2^4-1-1 = 1 / 1 += 1 * 2^4-1-0 = 9
        }
        */

        /*
            bin.split('').map(caract)

            function caract(char){
                if (char !== '0' && char !== '1') return alert('Enter a binary number')
            }
        */ 
