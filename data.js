class Stack {
    constructor() {
        this.items =[];
        
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
       return this.items.pop();
    }
    peek() {
        return this.items[this.items.length-1];
    
    }
    isEmpty() {
        return this.items.length === 0;
    
    }
    size() {
       return this.items.length;
    }
    clear() {
       return this.items=[];
        
    }
  }
  
  const data = new Stack();
  data.push(23);
  data.push(34);
  data.push(89);
  console.log(data);
  data.pop();
  console.log(data);
  data.peek();
  console.log(data.peek());
  
  console.log(data.isEmpty());
  
  console.log(data.size());
  
  console.log(data.clear());
  
