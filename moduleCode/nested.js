const college = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(college.unique);
console.log(college.unique.result.gpa);

// to delete a property delete objectName.propertyName

delete college.class;
console.log(college);
