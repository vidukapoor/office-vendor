import {
    itemsDetails
} from '../addItems';

Meteor.methods({
    saveItems(json) {
        itemsDetails.insert(json);
        return 'Saved';
    },
    removeItem(id) {
        itemsDetails.remove(new Mongo.Collection.ObjectID(id));
        console.log('deleted id: ' + new Mongo.Collection.ObjectID(id));
        return 'deleted id: ' + new Mongo.Collection.ObjectID(id);
    },
})
