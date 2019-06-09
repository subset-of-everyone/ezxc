import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Sections = new Mongo.Collection("Sections");

const SectionSchema = new SimpleSchema({
  sectionNumber: String,
  instructors: [{
    instructorName: String,
    instructorType: ["Professor", "TA"],
  }],
  roster: [{
    studentName: String,
    formsFilledOut: Array,
    pointsReceived: [{
      formNumber: Number,
      points: Number,
    }],
  }],
}, { tracker: Tracker });

Sections.attachSchema(SectionSchema);

export { Sections, SectionSchema };
