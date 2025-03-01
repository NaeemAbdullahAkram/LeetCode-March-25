var applyOperations = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            nums[i] *=2;
            nums[i+1]=0;
        }
    }    
    let arr=[];
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            arr.push(nums[i]);
        }else{
            count++;
        }
    }
    for(let i=0;i<count;i++){
        arr.push(0);
    }
    return arr;
};