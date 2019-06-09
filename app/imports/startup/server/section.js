import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Sections } from "../../api/section/section.js";

//  if (Meteor.isServer)
//  {
  Meteor.publish("Section", function publish()
  {
    if (this.userId)
    {
      const studentUsername = Meteor.users.findOne(this.userId).username;
      return Sections.find({ roster: { $elemMatch: { studentName: studentUsername } } });
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
    return Sections.find({ instructors: { $elemMatch: { instructorName: instructorUsername } } });
  }
  return this.ready();
});
