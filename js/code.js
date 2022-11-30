let PersonDetails = {
    firstName:'Meezaan',
    lastName:'Davids',
    email:'Meezaan@gmail.com'
}

Object.defineProperty(PersonDetails, "test" , {
    get : function () {
        return this.firstName
    }   
});

Object.defineProperty(PersonDetails, "test1", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(PersonDetails.firstName);
console.log(PersonDetails.lastName);
console.log(PersonDetails.email);

