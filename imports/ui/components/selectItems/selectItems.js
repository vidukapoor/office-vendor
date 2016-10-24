import {
    Template
} from 'meteor/templating';

import './selectItems.html';

Template.selectItems.onCreated(function subsDetail() {
    this.itemList = new ReactiveVar;
    this.subscribe('all_items');
});


Template.selectItems.rendered = function() {
    var instance = Template.instance();
    Meteor.call('callItems', function(error, result) {
        if (error) {
            console.log(error);
        } else {
            instance.itemList.set(result);
            console.log(result);
        }
    })
};


Template.selectItems.events({
    'click #submitItem': function(event) {
        event.preventDefault();
        var json = {
            'itemName': $("#itemName").val(),
            'itemAmount': $("#itemAmount").val(),
            timeStamp: new Date()
        };
    },
});


Template.selectItems.helpers({
    serial(index) {
        return index + 1;
    },
    today() {
        return moment().format('DD-MMM-YYYY');
    },
    returnList() {
        return Template.instance().itemList.get().item;
    },
    returnImage() {
        return Template.instance().itemList.get().image;
    }
});
