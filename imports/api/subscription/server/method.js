import {
    SubscriptionDetails
} from '../subscription';

// import {
//     Email
// } from 'meteor/email'

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
    sendMail() {
        var data = SubscriptionDetails.find().fetch();
        var emailArray = [];
        data.forEach(function(item) {
            emailArray.push(item.emailId)
        })
        console.log(emailArray);

        console.log('this module started working');
    },
    "sendmail": function(name, subject, email, message) {
        Email.send({
            to: "vishwadeepkapoor@cybuzzsc.com",
            from: 'vishwadeepkapoor@gmail.com',
            subject: "edewd",
            html: "Edewde",
            replyTo: "vishwadeepkapoor@cybuzzsc.com"
        });
        return "Mail Send Successfully";
    }
})
