function catAndMouse(x, y, z) {
   const catA = Math.abs(x-z)
   const catB = Math.abs(y-z)
   if(catA<catB){
    return "catA"
   }else if(catA<catB){
    return "catB" 
   }else{
    return "MouseC"
   }

}
console.log(catAndMouse([1,2,3]))