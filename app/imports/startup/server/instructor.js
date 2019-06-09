import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Instructors } from "../../api/instructor/instructor.js";
import { Students } from "../../api/student/student.js";

/** Initialize the database with a default data document. */


/** This subscription publishes only the document from Instructors
 that has the same sectionNumber as the logged in user. */
Meteor.publish("Instructor", function publish()
{
  if (this.userId)
  {
    const studentUsername = Meteor.users.findOne(this.userId).username;
    const studentSectionNumber = Students.findOne({ studentName: studentUsername }).sectionNumber;
    return Instructors.find({ sectionNumber: studentSectionNumber });
  }
  return this.ready();
});

/** This subscription publishes only the document from Instructors
 that has the same sectionNumber as the logged in user. */
Meteor.publish("InstructorAdmin", function publish()
{
  if (this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const instructorUsername = Meteor.users.findOne(this.userId).username;
    const instructorSectionNumber = Instructors.findOne({ instructorName: instructorUsername }).sectionNumber;
    return Instructors.find({ sectionNumber: instructorSectionNumber });
  }
  return this.ready();
});
