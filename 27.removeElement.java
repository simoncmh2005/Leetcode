//vs code
/*
public class removeElement{
    public static int removeElement(int[] nums, int val) {
        int index = 0;
        for(int i = 0;i<nums.length;i++){
            if(nums[i]!=val){
                nums[index] = nums [i];
                index++;
            }
        }
        return index;
    }

    public static void main (String args[]){
        int [] nums1 = {0,1,2,2,3,0,4,2};
        int val1 = 2;
        System.out.println(removeElement(nums1,val1));
    }
}
*/

class Solution {
    public int removeElement(int[] nums, int val) {
        int index = 0;
        for(int i = 0;i<nums.length;i++){
            if(nums[i]!=val){
                nums[index] = nums [i];
                index++;
            }
        }
        return index;
    }
}

