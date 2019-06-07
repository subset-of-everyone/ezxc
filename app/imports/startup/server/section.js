import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Sections } from "../../api/section/section.js";
import { Students } from "../../api/student/student.js";
import { Instructors } from "../../api/instructor/instructor.js";

/** Initialize the database with a default data document. */
function addData(data)
{
  console.log(`   Adding: ${data.name} (${data.owner})`);
  Sections.insert(data);
}

/** Initialize the collection if empty. */
if (Sections.find().count() === 0)
{
  if (Meteor.settings.defaultData)
  {
    console.log("Creating default sections.");
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

//  if (Meteor.isServer)
//  {
  Meteor.publish("Section", function publish()
  {
    if (this.userId)
    {
      const studentUsername = Meteor.users.findOne(this.userId).username;
      const studentSectionNumber = Students.find({ studentName: studentUsername }).sectionNumber;
      return Sections.find(
          { roster: { $elemMatch: { studentName: studentUsername } } },
          { sectionNumber: studentSectionNumber },
          { fields: { forms: 0 } },
      );
    }
    return this.ready();
  });
//  }

/** This subscription publishes only the document from Sections that the logged in admin teaches. */
Meteor.publish("SectionAdmin", function publish()
{
  if (this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const instructorUsername = Meteor.users.findOne(this.userId).username;
    const instructorSectionNumber = Instructors.find({ instructorName: instructorUsername }).sectionNumber;
    return Sections.find(
        { instructors: { $elemMatch: { instructorName: instructorUsername } } },
        { "instructors.$": 1 },
        { sectionNumber: instructorSectionNumber },
    );
  }
  return this.ready();
});
