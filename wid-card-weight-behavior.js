/**
   * Use `Polymer.WidCardWeightBehavior` to implement a card that can be used in a `wid-cards-grid` element.
   * @polymerBehavior 
   */
"use strict";

Polymer.WidCardWeightBehavior = {

  properties: {
    /**
     * Cached copy of shared elements.
     */
    importance: {
      type: Number,
      value: 1
    }
  }

};