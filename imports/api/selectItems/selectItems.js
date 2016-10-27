import { Mongo } from 'meteor/mongo';

export const orderDetails = new Mongo.Collection("order_details", {
    idGeneration: 'MONGO'
});
