const caesar = function(a, b) {
    let i;
    let charcode;
    let newarr = [];
    for (i = 0; i < a.length; i++) {
        charcode = a.charCodeAt(i);
        if (charcode > 64 && charcode < 91) {
            // 65 to 90
            charcode = charcode + b;
            while(charcode < 65) {
                charcode += 26;
            }
            while(charcode > 90) {
                charcode -= 26;
            }
            newarr[i] = String.fromCharCode(charcode);
        }
        else if (charcode > 96 && charcode < 123) {
            // 97 to 122
            charcode = charcode + b;
            while(charcode < 97) {
                charcode += 26;
            }
            while(charcode > 122) {
                charcode -= 26;
            }
            newarr[i] = String.fromCharCode(charcode);
        }
        else {
            newarr[i] = a[i];
        }
    }
    return newarr.join("");
}

module.exports = caesar
