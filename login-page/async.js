const studentDatabase = [
  {
    id: 1,
    firstName: "Kamogelo",
    lastName: "Sekgobela",
    email: "kamogelo.s@ul.ac.za",
    course: "Computer Science",
    age: 23,
  },
  {
    id: 2,
    firstName: "Lerato",
    lastName: "Dlamini",
    email: "lerato.d@ul.ac.za",
    course: "Information Technology",
    age: 21,
  },
  {
    id: 3,
    firstName: "Sipho",
    lastName: "Nkosi",
    email: "sipho.n@ul.ac.za",
    course: "Cybersecurity",
    age: 24,
  },
  {
    id: 4,
    firstName: "Ayanda",
    lastName: "Mokoena",
    email: "ayanda.m@ul.ac.za",
    course: "Statistics",
    age: 22,
  },
  {
    id: 5,
    firstName: "Tebogo",
    lastName: "Mashile",
    email: "tebogo.m@ul.ac.za",
    course: "Network Engineering",
    age: 20,
  },
];


function demonstrateSynchronous() {
  console.log("Step-1 - The function is starting");
  console.log("Step-2 - The Process is in action");
  console.log("Step-3 - The function reached the final stage");
}

demonstrateSynchronous();

function fetchAllStudents() {
  console.log("Fetching student records... please wait 3 seconds.");

  setTimeout(function () {
    console.log("Student records retrieved after 3-second delay:\n");
    studentDatabase.forEach(function (student) {
      console.log(
        `ID: ${student.id} | Name: ${student.firstName} ${student.lastName} | ` +
        `Email: ${student.email} | Course: ${student.course} | Age: ${student.age}`
      );
    });
  }, 4000);
}

fetchAllStudents();