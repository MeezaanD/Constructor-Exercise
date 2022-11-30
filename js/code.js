function PersonDetails(...details) {
    this.firstName = details[0];
    this.lastName = details[1];
    this.email = details.at(-1)
    
}

let person1 = new PersonDetails("Meezaan", "Davids", "meezaan@gamil.com")
console.log(person1);