var removeDuplicates = function(nums) {
  let count = 0 ;
  for (let i = 0;i <nums.length;i++)
  {
      if(nums[i] != nums[i+2]){
          nums[count] = nums[i];
          count++;
      }
  }
  return count
};