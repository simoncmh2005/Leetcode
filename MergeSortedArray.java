import java.util.Arrays;

public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {

        // Copy elements of nums2 to the new array starting from the end of nums1
        System.arraycopy(nums2, 0, nums1, m, n);

        Arrays.sort(nums1);

        for (int i = 0; i < nums1.length; i++) {
            System.out.println(nums1[i]);
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 0, 0, 0};
        int[] nums2 = {2, 5, 6};
        int m = 3;
        int n = 3;
        MergeSortedArray result = new MergeSortedArray();
        result.merge(nums1, m, nums2, n);
    }
}