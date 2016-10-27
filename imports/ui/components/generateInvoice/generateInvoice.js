import {
    ReactiveVar
} from 'meteor/reactive-var';

import {
    Template
} from 'meteor/templating';

import './generateInvoice.html';

Template.generate_invoice.onCreated(function subsDetail() {
    this.selectedDate = new ReactiveVar;
    this.orderList = new ReactiveVar;
});


Template.generate_invoice.rendered = function() {
    $('#datePicker').datepicker({
        format: 'dd-mm-yyyy',
        endDate: '0d',
        autoclose: true
    })
};

Template.generate_invoice.events({
    'change #datePicker' (e, instance) {
        if ($(e.currentTarget).val()) {
            Meteor.call('getOrder', $(e.currentTarget).val(), function(error, result) {
                if (error) {
                    swal("Oops...", "Please try again", "error");
                } else {
                    if (result.order.length > 0) {
                        instance.orderList.set(result);
                        console.log(result);
                    } else {
                        swal("Oops...", "No Order Available", "error");
                    }
                }
            })
        }
    }
})

Template.generate_invoice.helpers({
    returnList() {
        if (Template.instance().orderList.get()) {
            return Template.instance().orderList.get();
        }
    },
    serial(index) {
        return index + 1;
    },
    getItems(items){
      if (items) {
        var values=[];
        items.forEach(function (item) {
          values.push(item.itemName);
        })
        var itemNames = values.join(', ');
        return itemNames;
      }
    },
    ShowTable(){
      if (Template.instance().orderList.get()) {
        return true;
      }
    }
})
