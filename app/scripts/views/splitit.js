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

        initialize: function () {
            $(this.el).html(this.template());
        }

    });

    return SplitItView;

});
