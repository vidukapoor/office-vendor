import { Mongo } from 'meteor/mongo';

export const itemsDetails = new Mongo.Collection("items_details", {
    idGeneration: 'MONGO'
});
