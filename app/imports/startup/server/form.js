import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Forms } from "../../api/form/form.js";
import { Students } from "../../api/student/student.js";
import { Instructors } from "../../api/instructor/instructor.js";

/** This subscription publishes only the document from Forms that has the same sectionNumber as the logged in user. */
Meteor.publish("Forms", function publish()
{
  if (Forms.find().count() !== 0 && this.userId)
  {
    const studentUsername = Meteor.users.findOne(this.userId).username;
    const studentSectionNumber = Students.findOne({ studentName: studentUsername }).sectionNumber;
    return Forms.find({ sectionNumber: studentSectionNumber });
  }
  return this.ready();
});

/** This subscription publishes only the document from Forms that has the same sectionNumber as the logged in admin. */
Meteor.publish("FormAdmin", function publish()
{
  if (Forms.find().count() !== 0 && this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const instructorUsername = Meteor.users.findOne(this.userId).username;
    const instructorSectionNumber = Instructors.findOne({ instructorName: instructorUsername }).sectionNumber;
    return Forms.find({ sectionNumber: instructorSectionNumber });
  }
  return this.ready();
});
