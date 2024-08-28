// This is a program in design aimed to achieve:
// 1. Automatically create new objects with object names assigned in the format: 'staff_' + a whole number, depending on the desired number of objects,
// 2. Allow for dynamically (manually or automated) setting the first name, last name, age and role during new object creation,
// 3. 

const staff_list = [];

class Staff {
    constructor( first_name, last_name, age, role ) {
        this.First_Name = first_name;
        this.Last_Name = last_name;
        this.Age = age;
        this.Role = role;
    }
    // Staff_Role() {
    //     console.log('this works');
    // }
}



function arrange_staff() {   
    
    let staff_1 = new Staff('Ejike', 'Uduogu', 24, 'Porter');
    let staff_2 = new Staff('Ben', 'Uduogu', 24, 'Porter');
    let staff_3 = new Staff('Caleb', 'Okafor', 28, 'Porter');
    let staff_4 = new Staff('John', 'McGinn', 30, 'Porter');
    let staff_5 = new Staff('Stella', 'Barbara', 25, 'Porter');
    let staff_6 = new Staff('Rufus', 'Linus', 40, 'Porter');
    let staff_7 = new Staff('Chika', 'Okezie', 33, 'Porter');
    let staff_8 = new Staff('James', 'MacTee', 35, 'Porter');
    let staff_9 = new Staff('Linus', 'Torvalds', 60, 'Porter');
    let staff_10 = new Staff('Ben', 'Tirrel', 42, 'Porter');
    let staff_11 = new Staff('Cyriacus', 'Olemgbe', 69, 'Porter');
    
    let i;
   
    for(i = 1; i < 333; i++){
        let staff = 'staff_' + i;
        staff = new Staff;
        staff_list.push(staff);
    }

    console.log(staff_list[6]);
}
arrange_staff();