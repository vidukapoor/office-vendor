import {
    itemsDetails
} from '../../addItems/addItems';

import {
    orderDetails
} from '../selectItems';

Meteor.methods({
    callItems() {
        var toReturn = {
            item: itemsDetails.find().fetch(),
            image: Meteor.user().services.google.picture
        }
        console.log('testing');
        return toReturn;
    },
    submitOrder(json) {
      orderDetails.insert(json);
      console.log('tested');
      return 'json saved';
    }
})
