import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

// Tests
console.log("\nAPPEND DOG; PREPEND CAT; APPEND PARROT:");
list.append("dog");
list.prepend("cat");
list.append("parrot");
list.toString();

console.log("\nNODE AT INDEX 1");
console.log(list.at(1));

console.log("\nTAIL NODE");
console.log(list.tail());

console.log("\nREMOVE NODE AT INDEX 1");
list.removeAt(1);
list.toString();

console.log("\nINSERT HAMSTER AT INDEX 2");
list.insertAt("hamster", 2);
list.toString();

console.log("\nPOP LAST NODE OFF THE LIST");
console.log(list.pop());
list.toString();

console.log("\nFIND SNAKE; FIND PARROT");
console.log(list.find("snake"));
console.log(list.find("parrot"));
