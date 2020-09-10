let findTheOldest = function(a) {

    let time = new Date();
    let year = time.getFullYear();

    a.map(a => {
        a.age = ("yearOfDeath" in a)? a.yearOfDeath - a.yearOfBirth : year - a.yearOfBirth;
    })
    a.sort((before, after) =>{
        return after.age - before.age; 
    })
    return a[0];
}

module.exports = findTheOldest
