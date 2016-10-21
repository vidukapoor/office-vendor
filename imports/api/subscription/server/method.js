import {
    SubscriptionDetails
} from '../subscription';

Meteor.methods({
    saveSubs(json) {
        SubscriptionDetails.insert(json);
        return 'Saved';
    },
    removeSubscriber(id) {
        SubscriptionDetails.remove(new Mongo.Collection.ObjectID(id));
        console.log('delected id: ' + new Mongo.Collection.ObjectID(id));
    },
    updateSubscriber(newMail, userId) {
        SubscriptionDetails.update({
            _id: new Mongo.Collection.ObjectID(userId)
        }, {
            $set: {
                "emailId": newMail
            }
        });
        console.log('edited id: ' + new Mongo.Collection.ObjectID(userId));
        return 'edited id: ' + new Mongo.Collection.ObjectID(userId);
    },
})
