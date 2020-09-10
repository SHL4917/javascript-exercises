const palindromes = function(a) {

    a = a.replace(/[' ":;.,><\[\]!@#$%^&*()=+_|`~-]/g, "").toLowerCase();
    
    function checker (a) {
        if (a.length <= 1) {
            return true;
        };
        if (a[0] != a[a.length - 1]) {
            return false;
        }      
        return checker(a.slice(1, -1));
    }
    return checker(a);
}

module.exports = palindromes
