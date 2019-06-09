import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

const CompletedForms = new Mongo.Collection("CompletedForms");

const CompletedFormSchema = new SimpleSchema({
  originalFormId: String,
  studentId: String,
  pointsAllocated: [{
    receivedName: String,
    points: Number,
  }],
  groups: [{
    groupId: String,
    members: Array,
  }],
}, { tracker: Tracker });

CompletedForms.attachSchema(CompletedFormSchema);

export { CompletedForms, CompletedFormSchema };
