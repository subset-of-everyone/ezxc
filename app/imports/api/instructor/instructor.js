import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Instructors = new Mongo.Collection("Instructors");

const InstructorSchema = new SimpleSchema({
  instructorFirstName: String,
  instructorLastName: String,
  instructorType: ["TA", "Professor"],
  sectionNumber: String,
}, { tracker: Tracker });

Instructors.attachSchema(InstructorSchema);

export { Instructors, InstructorSchema };
