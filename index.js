function Node(value){
  this.data = value;
  this.next = null;
}

function SinglyList(){
  this.head = null;
}

SinglyList.prototype.add = function(data) {
  currentNode = this.head;
  for (var i in data){
    var newNode = new Node(data[i]);
    if(currentNode == null){
      this.head = newNode;
      this._lenght++;
      currentNode = this.head;
    }
    else {
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
  }
  return this.head;
};

var arrayToLinkedlist = function(arr){
  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('array-to-linkedlist expects an array.');
  }

  var singly = new SinglyList();
  return singly.add(arr);
}

module.exports = arrayToLinkedlist;
