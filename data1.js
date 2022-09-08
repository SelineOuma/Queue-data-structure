class Queue {
    constructor() {
        this.items=[46,78];
    }
     enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }

    first() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
  }

  const data= new Queue();
  data.enqueue(11);
  data.enqueue(23);
  data.enqueue(35);
  data.enqueue(47);
  console.log(data);
  
  console.log(data.dequeue());
  
  console.log(data.first());
  
  console.log(data.isEmpty());

  console.log(data.size());