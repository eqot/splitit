/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/splitit.html'
], function ($, Backbone, _, SplitItViewTemplate) {
    'use strict';

    var SplitItView = Backbone.View.extend({

        el: $('#view'),

        template: _.template(SplitItViewTemplate),

        events: {
            'click #calc': 'calc'
        },

        initialize: function () {
            $(this.el).html(this.template());

            // $('#total').val(50000);
            // $('#maxPrice').val(10000);
            // $('#maxCount').val(2);
            // $('#midCount').val(7);
        },

        calc: function (event) {
            event.preventDefault();

            var total = $('#total').val();
            var balance = total;

            var maxPrice = $('#maxPrice').val();
            var maxCount = $('#maxCount').val();
            if (maxPrice && maxCount) {
                balance -= maxPrice * maxCount;
            }

            var midPrice = $('#midPrice').val();
            var midCount = $('#midCount').val();
            if (midPrice && midCount) {
                balance -= midPrice * midCount;
            }

            var minPrice = $('#minPrice').val();
            var minCount = $('#minCount').val();
            if (minPrice && minCount) {
                balance -= minPrice * minCount;
            }

            if (!midPrice) {
                var price = Math.floor(balance / midCount);
                $('#midPrice').val(price);
                balance -= price * midCount;
            }

            $('#balance').val(balance);
        }

    });

    return SplitItView;

});
