class data {
    constructor (name, age, accessAllowed, gender) {
        this.name = name;
        this.age = age;
        this.accessAllowed =  accessAllowed;
        this.gender = gender;
    }
    checkPermission() {
        if (this.age >= 18) {
           return true;
        } else  {
           return false;
        }
     }

     consoler() {
       return this;
     }
}

let user  = new data('John', 25, true, 'male');
if  (user.checkPermission()) {
    console.log('Access granted');
}