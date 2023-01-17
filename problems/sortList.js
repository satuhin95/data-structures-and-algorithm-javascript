function sortList(head) {
    // head.sort(function(a,b){
    //     return a -b
    // })
    let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i <= head.length ; i ++) {
      if (head[i - 1] > head[i]) {
        done = false;
        let tmp = head[i - 1];
        head[i - 1] = head[i];
        head[i] = tmp;
      }
    }
  }

  return head;
};
// let head = [4,2,1,3]
let head= [-1,5,3,4,0]
console.log(sortList(head))