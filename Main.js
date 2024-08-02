let Change = document.getElementById("Change");
let NormText = document.getElementById("Norm");
let ZovText = document.getElementById("Zov");
let center = document.getElementById("center");

let SixTeenBit = "";
let elenent;

center.onclick = function (event) {
    if (elenent == "Norm") {
        ZovText.value = BinaryToZov(NormText.value);
    }
    else if (elenent == "Zov") {
        
        NormText.value = ZovToBinary(ZovText.value)
    }
    else if (elenent == "Change") {
        
    }



    elenent = event.target.id;
}

function BinaryToZov(text) {
    let Zov = ""
    for (var i = 0; i < text.length; i++) {
        for (j = 0; j < (text[i].charCodeAt(0).toString(2) + "").length; j++) {

            if ((text[i].charCodeAt(0).toString(2)[j] + "") == "1") {
                Zov += "z"
            }
            else if ((text[i].charCodeAt(0).toString(2)[j] + "") == "0") {
                Zov += "v"
            }
        }
        Zov += " "
    }
    return Zov
}
function ZovToBinary(text) {
    let binary = "";
    let normtext = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] == "z") {
            binary += "1"
        }
        else if (text[i] == "v") {
            binary += "0"
        }
        else if (text[i] == " ") {
            binary += " "
        }    }
    binary.split(' ').map(function(bin) {
        normtext += String.fromCharCode(parseInt(bin, 2));
      });
    return normtext
}