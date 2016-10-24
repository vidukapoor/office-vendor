import {
    itemsDetails
} from '../../addItems/addItems';

Meteor.methods({
    callItems() {
      var toReturn={
        item:itemsDetails.find().fetch(),
        image:Meteor.user().services.google.picture
      }
      console.log('testing');
        return toReturn;
    },
})
