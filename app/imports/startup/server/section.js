import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { Sections } from "../../api/section/section.js";

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

/** This subscription publishes only the document from Sections that the logged in admin teaches. */
Meteor.publish("SectionAdmin", function publish()
{
  if (this.userId && Roles.userIsInRole(this.userId, "admin"))
  {
    const username = Meteor.users.findOne(this.userId).username;
    return Sections.find({ instructors: { $elemMatch: { instructorName: username } } }, { "instructors.$": 1 });
  }
  return this.ready();
});
