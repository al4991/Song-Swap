function Node(next_, value_) { 
    let next = next_; 
    let value = value_;
    function setNext(node) {
        next = node;
    }
    function getNext(node) { 
        return next; 
    }
    function setValue(val) {
        value = val; 
    }
    function getValue() {
        return value;
    }
    return {setNext, getNext, setValue, getValue }
    
}

export default function Stack(init = null) {
    let head = init === null? Node(null, null) : init; 
    let len = 0; 

    function getHead() {
        return head;  
    }
    function pop() { 
        if (len > 0 ) { 
            const retVal = head.getValue(); 
            head = head.getNext(); 
            len -= 1;
            return retVal; 
        }
        return null;
    }

    function push(val) {
        console.log(val)
        const newHead = new Node(head, val);
        head = newHead;
        len += 1; 
        console.log("in push", length); 
        return this;
    }
    function length(){
        return len
    }
    return { getHead, pop, push, length }
}