/*! pie-chart - v1.0.0 - 2013-10-29
* https://github.com/n3-charts/pie-chart
* Copyright (c) 2013 n3-charts  Licensed ,  */
'use strict';

/*global window */

describe('n3-piechart', function() {
  var elm, scope, isolatedScope;

  beforeEach(module('n3-pie-chart'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element('<div id="toto">' +
      '<pie-chart data="data" options="options"></pie-chart>' +
      '</div>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  beforeEach(function() {
    this.addMatchers({
      toBeSameStyleAs: function(expected) {
        var actual = this.actual;
        var notText = this.isNot ? " not" : "";

        this.message = function () {
          return "Expected " + actual + notText + " to be same as " + expected;
        };

        var exp = expected.split(/\s*;\s*/g);
        var comp = actual.split(/\s*;\s*/g);

        var colors = ['fill', 'stroke'];

        for (var key in exp) {
          if (comp[key] === undefined) {
            return false;
          }

          if (comp[key] !== exp[key]) {
            var spl = comp[key].split(/\s*:\s*/);
            var expSpl = exp[key].split(/\s*:\s*/);

            if (colors.indexOf(spl[0]) !== -1) {
              if (d3.rgb(spl[1]).toString() !== d3.rgb(expSpl[1]).toString()) {
                return false;
              }
            } else {
              return false;
            }
          }
        }

        return true;
      }
    });
  });

describe('directive', function() {
  
  beforeEach(inject(function($utils) {
    spyOn($utils, 'getDefaultMargins').andReturn(
      {top: 20, right: 50, bottom: 30, left: 50}
    );
  }));
  
  it('should draw camemberts parts', function() {
    
  });
});
});