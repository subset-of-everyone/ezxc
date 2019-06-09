import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Students } from "../../api/student/student.js";
import { Instructors } from "../../api/instructor/instructor.js";

/** This subscription publishes only the document associated with the logged in user. */
Meteor.publish("Students", function publish()
{
  if (this.userId)
  {
    const studentUsername = Meteor.users.findOne(this.userId).username;
    return Students.find({ studentName: studentUsername });
  }
  return this.ready();
});

/** This subscription publishes only the document from Students
 that has the same sectionNumber as the logged in admin. */
Meteor.publish("StudentAdmin", function publish()
{
  if (this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const instructorUsername = Meteor.users.findOne(this.userId).username;
    const instructorSectionNumber = Instructors.findOne({ instructorName: instructorUsername }).sectionNumber;
    return Students.find({ sectionNumber: instructorSectionNumber });
  }
  return this.ready();
});
