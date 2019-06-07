import { Mongo } from "meteor/mongo";
import { SimpleSchema } from "simpl-schema";
import { Tracker } from "meteor/tracker";

const Forms = new Mongo.Collection("Forms");

const FormSchema = new SimpleSchema({
  formNumber: Number,
  sectionNumber: String,
  date: Date,
  topic: String,
}, { tracker: Tracker });

Forms.attachSchema(FormSchema);

export { Forms, FormSchema };
