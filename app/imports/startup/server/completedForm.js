import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { CompletedForms } from "../../api/completedForm/completedForm.js";
import { Forms } from "../../api/form/form.js";
import { Students } from "../../api/student/student.js";
import { Instructors } from "../../api/instructor/instructor.js";

/** This subscription publishes only the document from Forms that has the same sectionNumber as the logged in user. */
Meteor.publish("CompletedForms", function publish()
{
  if (CompletedForms.find().count() !== 0 && this.userId)
  {
    const studentUsername = Meteor.users.findOne(this.userId).username;
    const studentId = Students.findOne({ studentName: studentUsername }).studentId;
    return CompletedForms.find({ studentId: studentId });
  }
  return this.ready();
});

/** This subscription publishes only the document from Forms that has the same sectionNumber as the logged in admin. */
Meteor.publish("CompletedFormAdmin", function publish()
{
  if (CompletedForms.find().count() !== 0 && this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const instructorUsername = Meteor.users.findOne(this.userId).username;
    const instructorSectionNumber = Instructors.find({ instructorName: instructorUsername }).sectionNumber;
    const formNumberArray = [];

    Forms.find({ sectionNumber: instructorSectionNumber }).each(formNum => (formNumberArray.push(formNum._id)));

    return CompletedForms.find({ originalFormId: { $in: [formNumberArray] } });
  }
  return this.ready();
});
