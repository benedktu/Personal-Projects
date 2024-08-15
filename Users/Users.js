class Group {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bio = [name, age, email];
    }

    add_user_data() {
        const  data_list = [];
        data_list.push(this.bio);
        console.log(data_list);
    }
}

const new_name = prompt('New Name:');
const new_age = prompt('New Age:');
const new_email = prompt('New Email:')

// TO CREATE NEW USERS AUTOMATICALLY WITH RANDOM NAMES, AGES AND EMAILS
    function make_new_users() {
    let i = 1;
    for (i <= 10; i++;) {
        
    }
}

const user_1 = new Group(new_name, new_age, new_email);
const user_2 = new Group(new_name, new_age, new_email);
user_one.add_user_data();
