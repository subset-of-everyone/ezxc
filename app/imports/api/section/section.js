import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Sections = new Mongo.Collection("Sections");

const SectionSchema = new SimpleSchema({
  sectionNumber: String,
  instructors: [{
    instructorName: String,
    instructorType: ["Professor", "TA"],
    roster: [{
      studentName: String,
      studentId: String,
    }],
    forms: [{
      formNumber: Number,
      date: Date,
    }],
  }],
}, { tracker: Tracker });

Sections.attachSchema(SectionSchema);

export { Sections, SectionSchema };
