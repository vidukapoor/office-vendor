import { Mongo } from 'meteor/mongo';

export const SubscriptionDetails = new Mongo.Collection("subscription_details", {
    idGeneration: 'MONGO'
});
