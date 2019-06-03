import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Instructors = new Mongo.Collection("Instructors");

const InstructorSchema = new SimpleSchema({
  instructorName: String,
  type: ["TA", "Professor"],
  sectionNumber: String,
}, { tracker: Tracker });

Instructors.attachSchema(InstructorSchema);

export { Instructors, InstructorSchema };
