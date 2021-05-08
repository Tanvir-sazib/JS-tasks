const speech = 'i live in bangladesh. I love JavaScript';
let count = 0;
for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    if (char == ' ' && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);