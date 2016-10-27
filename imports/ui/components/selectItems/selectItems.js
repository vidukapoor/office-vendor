import {
    Template
} from 'meteor/templating';

import './selectItems.html';

Template.selectItems.onCreated(function subsDetail() {
    this.itemList = new ReactiveVar;
    this.amountSet = new ReactiveVar(0);
    this.orderList = new ReactiveVar([]);
    this.subscribe('all_items');
});


Template.selectItems.rendered = function() {
    var instance = Template.instance();
    Meteor.call('callItems', function(error, result) {
        if (error) {
            swal("Oops...", "Please try again", "error");
        } else {
            instance.itemList.set(result);
            console.log(result);
        }
    })
};


Template.selectItems.events({
    'click #submitOrder' (event, instance) {
        event.preventDefault();
        if (Template.instance().orderList.get().length > 0) {
            var toInsert = {
                date: moment().format('DD-MM-YYYY'),
                userId: Meteor.userId(),
                userName: Meteor.user().profile.name,
                orderList: instance.orderList.get(),
                total: instance.amountSet.get()
            }
            Meteor.call('submitOrder', toInsert, function(error, result) {
                if (error) {
                    swal("Oops...", "Please try again", "error");
                } else {
                    if (result) {
                        instance.orderList.set('');
                        instance.amountSet.set('');
                        swal("Nice!", 'Item successfully Submitted', "success");
                    }
                }
            })
        } else {
            swal("Oops...", "Please select Items from the List", "error");
        }
    },
    'click #addOrder' (event, instance) {
        event.preventDefault();
        var orderCreate = instance.orderList.get();
        var json = {
            itemId: $(event.currentTarget).attr('attrId'),
            itemName: $(event.currentTarget).attr('attrName'),
            itemAmount: $(event.currentTarget).attr('attrAmount')
        }
        orderCreate.push(json);
        instance.orderList.set(orderCreate);
        var orderData = instance.orderList.get();
        var count = instance.amountSet.get();
        orderData.forEach(function(item) {
            count += Number(item.itemAmount);
        })
        instance.amountSet.set(count);
    },
    'click #removeOrder' (event, instance) {
        event.preventDefault();
        var curId = $(event.currentTarget).attr('attrId');
        var list = Template.instance().orderList.get();
        var newAry = []
        list.forEach(function(item) {
            if (item.itemId == curId) {

            } else {
                newAry.push(item)
            }
        })
        instance.orderList.set(newAry);

        var orderData = instance.orderList.get();
        var count = 0;
        orderData.forEach(function(item) {
            count += Number(item.itemAmount);
        })
        instance.amountSet.set(count);
    },
});


Template.selectItems.helpers({
    today() {
        return moment().format('DD-MMM-YYYY');
    },
    returnData() {
        if (Template.instance().itemList.get()) {
            return Template.instance().itemList.get();
        }
    },
    displayItems() {
        if (Template.instance().orderList.get()) {
            return Template.instance().orderList.get();
        }
    },
    returnValue(array, value) {
        if (array) {
            return array[value];
        }
    },
    returnAmount() {
        if (Template.instance().amountSet.get()) {
            return Template.instance().amountSet.get();
        }
    },
    checkButton(itemId) {
      if (Template.instance().orderList.get()) {
        var list = Template.instance().orderList.get();
        var flag = true;
        list.forEach(function(item) {
            if (item.itemId == itemId) {
                flag = false;
            }
        })
        return flag;
      }else {
        return true;
      }
    }
});
