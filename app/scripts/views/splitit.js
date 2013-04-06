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
        },

        calc: function (event) {
            event.preventDefault();

            var total = $('#total').val();
            // console.log(total);

            var midCount = $('#midCount').val();

            var midPrice = total / midCount;

            $('#midPrice').val(midPrice);
        }

    });

    return SplitItView;

});
