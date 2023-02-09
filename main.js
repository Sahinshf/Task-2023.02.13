const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// ==> 1

//#region All First Name
console.log(
  "All First Name: ",
  persons.map((itemA) => itemA.name)
);
//#endregion

//#region All Heights
console.log(
  "All Heights: ",
  persons.map((itemA) => itemA.height)
);
//#endregion

//#region Name and Height properties
let nameAndHeight = [];
for (let i = 0; i < persons.length; i++) {
  nameAndHeight[i] = persons[i].name.concat("-", persons[i].height);
}
console.log("Name and Heights: ", nameAndHeight);
//#endregion

//#region All First Names
let firstNameArr = [];
for (let j = 0; j < persons.length; j++) {
  let firstName = persons[j].name.split(" ");
  firstNameArr[j] = firstName[0];
}
console.log("All First Names", firstNameArr);

//#endregion

console.log("****************************************");

// ==> 2

//#region Mass Greater Than 100
console.log(
  "Mass Greater Than 100:",
  persons.filter((item) => item.mass > 100)
);
//#endregion

//#region Height Less Than 200
console.log(
  "Height Less Than 200:",
  persons.filter((item) => item.height < 200)
);
//#endregion

//#region All Males Characters
console.log(
  "All Males Characters:",
  persons.filter((item) => item.gender == "male")
);
//#endregion

//#region All Females Characters
console.log(
  "All Females Characters:",
  persons.filter((item) => item.gender == "female")
);
//#endregion

console.log("****************************************");

// ==>3

//#region Sort by Name
let orderedName = persons.map((itemA) => itemA.name);

console.log(
  "Sort by Name:",
  orderedName.sort((a, b) => a.localeCompare(b))
);
//#endregion

//#region Sort by Mass
// let orderedMass = persons.map((itemA) => itemA.mass);
console.log(
  "Sort by Mass: ",
  persons.map((itemA) => itemA.mass).sort((a, b) => a - b)
);
//#endregion

//#region Sort by Height
console.log(
  "Sort by Height: ",
  persons.map((itemA) => itemA.height).sort((a, b) => a - b)
);
//#endregion

//#region Sort by Gender
console.log(
  "Sort by Gender: ",
  persons.map((itemA) => itemA.gender).sort((a, b) => a.localeCompare(b))
);

//#endregion

console.log("****************************************");

// ==>4

//#region Does every character have blue eyes?
console.log(
  "Does every character have blue eyes?",
  persons.every((item) => item.eye_color == "blue")
);
//#endregion

//#region Does every character have mass more than 40?
console.log(
  "Does every character have mass more than 40?",
  persons.every((item) => item.mass > 40)
);
//#endregion

//#region Is every character shorter than 200?
console.log(
  "Is every character shorter than 200?",
  persons.every((item) => item.height < 200)
);

//#endregion

//#region Is every character male?
console.log(
  "Is every character male?",
  persons.every((item) => item.gender == "male")
);
//#endregion

console.log("****************************************");

// ==> 5
//#region Is there at least one male character?
console.log(
  "Is there at least one male character?",
  persons.some((item) => item.gender == "male")
);
//#endregion

//#region Is there at least one character with blue eyes?
console.log(
  "Is there at least one character with blue eyes?",
  persons.some((item) => item.eye_color == "blue")
);
//#endregion

//#region Is there at least one character taller than 200?
console.log(
  "Is there at least one character taller than 200?",
  persons.some((item) => item.height > 200)
);
//#endregion

//#region Is there at least one character that has mass less than 50?
console.log(
  "Is there at least one character that has mass less than 50?",
  persons.some((item) => item.mass > 50)
);
//#endregion
