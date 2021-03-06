import {
    SubscriptionDetails
} from '../../../api/subscription/subscription';

import {
    ReactiveVar
} from 'meteor/reactive-var';

import {
    Template
} from 'meteor/templating';

import './subscription.html';

Template.subscription.onCreated(function subsDetail() {
    this.selectedUser = new ReactiveVar;
    this.subscribe('all_subscription');
});


Template.subscription.rendered = function() {

};


Template.subscription.events({
    'click #AddSubscriber': function(event) {
        event.preventDefault();
        if ($("#Subscriber").val()) {
            var mailId = $("#Subscriber").val();
            var checkMail = mailId.split('@');
            if (checkMail.length == 2) {
                var json = {
                    'emailId': $("#Subscriber").val(),
                    timeStamp: new Date()
                };
                Meteor.call('saveSubs', json, function(error, result) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(result);
                        $("#Subscriber").val('');
                    }
                })
            } else {
                swal('Please enter valid Mail-Id');
            }
        } else {
            swal('Please enter Mail-Id');
        }
    },
    'click #remove' (e, instance) {
        console.log($(e.currentTarget).attr('attr'));
        Meteor.call('removeSubscriber', $(e.currentTarget).attr('attr'), function(error, result) {
            if (error) {
                console.log(error);
            } else {
                if (result) {
                    swal('SUbscriber Removed');
                    console.log(result);
                }
            }
        })
    },
    'click #edit' (e, instance) {
        var id = new Mongo.Collection.ObjectID($(e.currentTarget).attr('data-title'));
        var check = SubscriptionDetails.find({
            _id: id
        }).fetch();
        instance.selectedUser.set(check[0]);
    },
    'click #updateMailId' () {
        var newMail = $('#newMail').val();
        var userId = $('#updateMailId').attr('data-title');
        if (userId) {
            var splitUser = userId.split('@');
            if (splitUser.length == 2) {
                Meteor.call('updateSubscriber', newMail, userId, function(error, result) {
                    if (error) {
                        console.log(error);
                    } else {
                        if (result) {
                            console.log(result);
                            $('#newMail').val('');
                            $('#updateMailId').val('');
                        }
                    }
                })
            } else {
                swal('Please enter valid Mail-Id');
                $('#newMail').val('');
                $('#updateMailId').val('');
            }
        } else {
            swal('Please enter Mail-Id');
        }
    },
});


Template.subscription.helpers({
    'subscriberAvailable': function() {
        return SubscriptionDetails.find().fetch();
    },
    serial(index) {
        return index + 1;
    },
    modalEdit() {
        return Template.instance().selectedUser.get();
    },
});
