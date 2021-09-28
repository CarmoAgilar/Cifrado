var app = new function () {

    this.doCrypt = function (isDecrypt) {
        str = document.getElementById("target").value;
        console.log(str);
        amount = document.getElementById("shift").value;
        console.log(amount)

        if (isDecrypt) {
            amount = (amount - 2 * (amount)) ;
            console.log("ec" + amount);
            document.getElementById("target").value = caesarShift(str, amount);
        } else {
            amount = (amount * 1);
            console.log("ec" + amount);
            document.getElementById("target").value = caesarShift(str, amount);
           
        }



    };



    var caesarShift = function (str, llave) {
        if (llave < 0) {
            return caesarShift(str, llave + 26);
        }

        var output = "";

        for (var i = 0; i < str.length; i++) {
            var c = str[i];

            if (c.match(/[a-z]/i)) {
                var code = str.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    c = String.fromCharCode(((code - 65 + llave) % 26) + 65);
                }

                else if (code >= 97 && code <= 122) {
                    c = String.fromCharCode(((code - 97 + llave) % 26) + 97);
                }
            }

            output += c;
        }

        return output;
    };
    console.log(caesarShift('Attack at dawn!', 12));
    console.log(caesarShift('Mffmow mf pmiz!', -12));
};



