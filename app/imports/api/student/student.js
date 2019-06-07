import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Students = new Mongo.Collection("Students");

const StudentSchema = new SimpleSchema({
  studentName: String,
  studentId: String,
  sectionNumber: String,
  totalPoints: Number,
}, { tracker: Tracker });

Students.attachSchema(StudentSchema);

export { Students, StudentSchema };
