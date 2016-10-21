import {
    Meteor
} from 'meteor/meteor';
import {
    SubscriptionDetails
} from '../subscription';

Meteor.publish('all_subscription', function() {
    return SubscriptionDetails.find({});
});
