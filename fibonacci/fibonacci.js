const fibonacci = function(a) {
    if (a <= 0) {
        return "OOPS";
    }
    function recurse(a) {
        if (a == 1 || a == 2) {
            return 1;
        }
        else {
            return recurse(a - 1) + recurse(a - 2);
        }
    }
    return recurse(a);
}

module.exports = fibonacci
