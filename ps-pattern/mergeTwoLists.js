let list1 = [1,2,4]
let list2 = [1,3,4]
function mergeTwoLists(list1, list2) {
    // list1.push(list2)
    // const ar3 = [...list1, ...list2]
    // ar3.sort(function(a,b){
    //     return a - b;
    // })
    // return ar3

    let hashMap = {};
    list1.forEach(element => {
        hashMap[element] = element
    });
    list2.forEach(element => {
        hashMap = element
    });
    return hashMap
};

console.log(mergeTwoLists(list1, list2))