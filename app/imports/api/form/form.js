import { Mongo } from "meteor/mongo";
import { SimpleSchema } from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Forms = new Mongo.Collection("Forms");

const FormSchema = new SimpleSchema({
  formNumber: Number,
  sectionNumber: String,
  date: Date,
  roster: [{
    studentName: String,
    studentId: String,
    presentOrNot: Boolean,
    points: Number,
  }],
}, { tracker: Tracker });

Forms.attachSchema(FormSchema);

export { Forms, FormSchema };
