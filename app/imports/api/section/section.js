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
  forms: [{
    formNumber: Number,
    attendance: [{
      studentName: String,
      presentOrNot: Boolean,
    }],
    pointsGivenLog: [{
      givenName: String,
      given: [{
        receivedName: String,
        points: Number,
      }],
    }],
    groups: [{
      groupId: String,
      members: Array,
    }],
  }],
}, { tracker: Tracker });

Sections.attachSchema(SectionSchema);

export { Sections, SectionSchema };
