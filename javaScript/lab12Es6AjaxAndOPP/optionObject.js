
//1st task
function createCourse({
  courseName = "Unknown",
  courseDuration = "Not known",
  courseOwner = "Admin" //default values
} = {}) {
  console.log(`Course Information: Name: ${courseName} ,Duration: ${courseDuration} , and Owner: ${courseOwner}`);
}
// Example usages:
createCourse({
  courseName: "JavaScript Basics",
  courseDuration: "4 weeks",
  courseOwner: "John Doe"
});
createCourse({
  courseName: "Advanced Python",
  courseDuration: "6 weeks"
});
createCourse();




