const nums = [1, 2, 3, 4, 5, 6, 7];
const rev_num = [];
for (const num of nums) {
  rev_num.unshift(num);
}
console.log(rev_num);

const reversed_numbers = [];
for (let i = 0; i < Number.length; i++) {
  const num2 = nums[i];
  reversed_numbers.unshift(num2);
}
console.log(reversed_numbers);

const reversed_numbers2 = [];
for (let i = nums.length - 1; i >= 0; i--) {
  let num23 = nums[i];
  reversed_numbers.push(num23);
}
console.log(reversed_numbers2);
