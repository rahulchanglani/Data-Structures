function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    return this.dataStore[this.top++];
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}


var s = new Stack();
s.push('A');
s.push('B');
s.push('C');
print('LENGTH..'+s.length());
print(s.peek());
var popped = s.pop();
print('POPPED element::'+popped);
print(s.peek());
s.push('D');
print(s.peek());
s.clear();
print('LENGTH..'+s.length());
print(s.peek());
s.push('E');
print(s.peek());


/*


LIFO

Stacks are efficient data structures because data can be added or removed only from the
top of a stack, making these procedures fast and easy to implement. Stacks are used
extensively in programming language implementations for everything from expression
evaluation to handling function calls.



OUTPUT::
LENGTH..3
C
POPPED element::C
B
D
LENGTH..0
undefined
E





*/


