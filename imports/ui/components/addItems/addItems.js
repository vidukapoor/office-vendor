import {
    itemsDetails
} from '../../../api/addItems/addItems';

import {
    ReactiveVar
} from 'meteor/reactive-var';

import {
    Template
} from 'meteor/templating';

import './addItems.html';

Template.addItems.onCreated(function subsDetail() {
    this.selectedUser = new ReactiveVar;
    this.subscribe('all_items');
});


Template.addItems.rendered = function() {

};


Template.addItems.events({
    'click #submitItem': function(event) {
        event.preventDefault();
        if ($("#itemName").val() != '' && $("#itemAmount").val() != '') {
          var json = {
              'itemName': $("#itemName").val(),
              'itemAmount': $("#itemAmount").val(),
              timeStamp: new Date()
          };
          Meteor.call('saveItems', json, function(error, result) {
              if (error) {
                swal("Oops...", "Please try again", "error");
              } else {
                  console.log(result);
                  swal("Nice!", 'Item added successfully', "success");
                  $("#itemName").val('');
                  $("#itemAmount").val('');
              }
          })
        }else {
          swal('All fields Required');
        }

    },
    'click #remove' (e, instance) {
        console.log($(e.currentTarget).attr('attr'));
        Meteor.call('removeItem', $(e.currentTarget).attr('attr'), function(error, result) {
            if (error) {
                console.log(error);
                swal("Oops...", "Please try again", "error");
            } else {
                if (result) {
                    console.log(result);
                    swal("Nice!", 'Item successfully Removed', "success");
                }
            }
        })
    },
});


Template.addItems.helpers({
    'itemAvailable': function() {
        return itemsDetails.find().fetch();
    },
    serial(index) {
        return index + 1;
    },

});
