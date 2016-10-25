var mocha = require('mocha');
var should = require('should');
var arrayToLinkedlist = require('./');

describe('error', function() {
  it('Error should be thrown because the passed value is not a valid array', function() {
    (function() {
      arrayToLinkedlist("String");
    }).should.throw('array-to-linkedlist expects an array.');
  });
});

describe('empty array', function() {
  it('An empty array should be returned as a null value is passed', function() {
    arrayToLinkedlist().should.eql([]);
    arrayToLinkedlist(undefined).should.eql([]);
    arrayToLinkedlist(null).should.eql([]);
  })
});

describe('sortJsonArray', function() {
  it('Array should be converted into linkedlist', function() {
    var arr = [1, 2, 3];
    var list = arrayToLinkedlist(arr);
    list.data.should.eql(1);
    list.next.data.should.eql(2);
    list.next.next.data.should.eql(3);
  });

});
