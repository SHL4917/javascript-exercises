const getTheTitles = function(a) {
    let bookarray = [];
    a.map( a =>{
        bookarray.push(a.title)
    });
    return bookarray;
}

module.exports = getTheTitles;
