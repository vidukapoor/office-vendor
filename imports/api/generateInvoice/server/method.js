import {
    orderDetails
} from '../../selectItems/selectItems';

Meteor.methods({
    getOrder(date) {
        var data = orderDetails.find({
            date: date
        }).fetch();

        var count = 0;
        data.forEach(function(item) {
            count += Number(item.total);
        })
        var toReturn = {
            order: data,
            subTotal: count.toFixed(2)
        }
        console.log('order got');
        return toReturn;
    },
})
