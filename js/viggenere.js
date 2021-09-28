"use strict";

var app = new function () {

    this.doCrypt = function (isDecrypt) {
        var keyStr = document.getElementById("key").value;
        if (keyStr.length == 0) {
            alert("La llave está vacía.");
            return;
        }

        var keyArray = filterKey(keyStr);
        if (keyArray.length == 0) {
            alert("La llave no contiene letras.");
            return;
        }

        if (isDecrypt) {
            for (var i = 0; i < keyArray.length; i++)
                keyArray[i] = (26 - keyArray[i]) % 26;
        }

        var textElem = document.getElementById("text");
        textElem.value = crypt(textElem.value, keyArray);
    };

    function crypt(input, key) {
        var output = "";
        for (var i = 0, j = 0; i < input.length; i++) {
            var c = input.charCodeAt(i);
            if (isUppercase(c)) {
                output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
                j++;
            } else if (isLowercase(c)) {
                output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
                j++;
            } else {
                output += input.charAt(i);
            }
        }
        return output;
    }

    function filterKey(key) {
        var result = [];
        for (var i = 0; i < key.length; i++) {
            var c = key.charCodeAt(i);
            if (isLetter(c))
                result.push((c - 65) % 32);
        }
        return result;
    }

    function isLetter(c) {
        return isUppercase(c) || isLowercase(c);
    }

    function isUppercase(c) {
        return 65 <= c && c <= 90;
    }

    function isLowercase(c) {
        return 97 <= c && c <= 122;
    }

};
