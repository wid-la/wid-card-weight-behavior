/**
   * Use `Polymer.WidCardWeightBehavior` to implement a card that can be used in a `wid-cards-grid` element.
   * @polymerBehavior 
   */
"use strict";

Polymer.WidCardWeightBehavior = {

  properties: {
    /**
     * The card importance
     * @type {Number}
     */
    horizontalWeight: {
      type: Number,
      value: 1
    },
    verticalWeight: {
      type: Number,
      value: 1
    }
  }

};