const marks = [23, 12, 54, 3, 45, 89, 45, 6, 33];
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    let element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("the heigher number is", max);