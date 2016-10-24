import {
    Meteor
} from 'meteor/meteor';
import {
    itemsDetails
} from '../addItems';

Meteor.publish('all_items', function() {
    return itemsDetails.find({});
});
