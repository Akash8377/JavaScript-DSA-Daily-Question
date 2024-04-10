function fib(){
    items=[]
    function push(element){
        items.push(element)
    }
    function pop(){
        if(isEmpty===0){
            return "EmptyData"
        }
        return items.pop()
    }
    function size(){
        return items.length;
    }
    function printData(){
        let str="";
        for(let i=0;i<items.length;i++){
            str+=items[i]+' ';
        }
        return str
    }
    return {push,pop,size,printData}

}
const stack = fib()
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.size());
console.log(stack.printData())