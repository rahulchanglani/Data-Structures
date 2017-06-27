function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var revStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        revStr += this.dataStore[i] + '\n';
    }
    return revStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

/*

Queues are used to
order processes submitted to an operating system or a print spooler, and simulation
applications use queues to model scenarios such as customers standing in the line at a
bank or a grocery store.


var q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());


OUTPUT 


A
B
C

B
C

Front of queue: B
Back of queue: C


FIFO 

*/