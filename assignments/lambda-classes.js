// CODE here for your Lambda Classes

// `lambda-classes` - We need a roster of Lambda School personnel.Build it!

//     * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of`people`.
//   * ** Instructors ** - extensions of Person
//     * ** Students ** - extensions of Person
//         * ** Project Managers ** - extensions of Instructors
//             * ** IMPORTANT ** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

//                 ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base - class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
//     * Instructor has the following methods:
//   * `demo` receives a`subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a`student` object and a`subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.cathcPhrase = instructorOptions.catchPhrase;
        this.pastTime = instructorOptions.pastTime;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
};
// #### Student

//     * Now we need some students!
//         * Student uses the same attributes that have been set up by Person
//             * Student has the following unique props:
//   * `previousBackground` i.e.what the Student used to do before Lambda School
//     * `className` i.e.CS132
//         * `favSubjects`.i.e.an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//             * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//     * `PRAssignment` a method that receives a subject as an argument and logs out that the`student.name has submitted a PR for {subject}`
//         * `sprintChallenge` similar to PRAssignment but logs out`student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects(favSubjects) {
        for (i = 0; i < favSubjects.length; i--) {
            return favSubjects;
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
};
// #### Project Manager
class projectManager extends Instructor {
    constructor(projectManagerOptions) {
        super(projectManagerOptions);
        this.gradClassName = projectManagerOptions.gradClassName;
        this.favInstructor = projectManagerOptions.favInstructor;
        this.favFood = projectManagerOptions.favFood;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name} 's code on ${subject}`)

    }
};
//     * Now that we have instructors and students, we'd be nowhere without our PM's
//         * ProjectManagers are extensions of Instructors
//             * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e.CS1
//     * `favInstructor`: i.e.Sean
//         * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs`{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{ name } debugs { student.name } 's code on {subject}`
const dan = new Instructor({
    name: 'Dan',
    location: 'San Francisco',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});

const josh = new Instructor({
    name: 'Josh',
    location: 'San Francisco',
    age: 40,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Trees in the Forest`,
    pastTime: 'Being a Dad',
});

const candace = new Student({
    name: 'Candace',
    location: 'Miami',
    age: 34,
    previousBackground: 'Mortgage Analyst',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const majai = new Student({
    name: 'Majai',
    location: "New York",
    age: 1,
    previousBackground: 'Being a Baby',
    className: 'CS321',
    favSubjects: ['Javascript, Java, Computer Science']
});

const nick = new projectManager({
    name: 'Nick',
    location: "New Mexico",
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    gradClassName: 'CS1',
    favInstructor: 'Luis'
});

const brandy = new projectManager({
    name: 'Brandy',
    location: "San Francisco",
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    gradClassName: 'CS2',
    favInstructor: 'Dan',
    favFood: 'Nano Chips'
});

console.log(dan.location); // 'TEXAS'
console.log(dan.demo('Computer Science')); // `Today we are learning about Computer Science'
console.log(josh.grade(majai, 'Javascript')); // 'Majai receives a perfect score on Javascript'
console.log(candace.previousBackground); // 'Mortgage Analyst'
console.log(nick.specialty); // 'Back-end'
console.log(brandy.debugsCode(candace, 'Javascript')); // `Nick debugs Candace s code on Javascript`
console.log(nick.standUp("Web 21")); // 'Brandy announces to Web 21, @channel standby times!'
console.log(majai.sprintChallenge('Javascript')); // 'Majai has begun sprint challenge on Javascript'
console.log(candace.PRAssignment('CSS')); // 'Candace has submitted a PR for CSS'
console.log(majai.favSubjects); //'Javascript, Java, Computer Science'