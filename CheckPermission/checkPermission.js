class Data {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    checkPermission() {
        if (this.age >= 18 && this.gender == "male") {
           return true;
        } else  {
           return false;
        }
     }
     consoler() {
       return this;
     }
}

let user  = new Data('John', 25, 'male'); // Object instance of Data Class
if  (user.checkPermission()) {
    console.log('Access granted');
}
