import java.util.ArrayList;
import java.util.List;

class longestSubstringWithoutRepeatingCharacters {
    public int lengthOfLongestSubstring(String s) {
        String [] word = s.split("");
        // String[] resultArray = new String[0];
        // String [] resultArray = {}; 
        List<String> resultArray = new ArrayList<>();
        int lengthOfArray = 0;
        int maximumLength = 0;

        for(int i=0;i<word.length;i++){ 
            boolean found = false;
            int spliceIndex = 0;
            for(int j=0;j<resultArray.size();j++){
                if(resultArray.get(j).equals(word[i])){ //
                    found = true;
                    spliceIndex = j;
                    break;
                }
            }
            
            if (found){
                resultArray.subList(0, spliceIndex + 1).clear();
                resultArray.add(word[i]);
                lengthOfArray = resultArray.size();
            }else{
                resultArray.add(word[i]);
                lengthOfArray++;
            }
            
            if(lengthOfArray > maximumLength){
                maximumLength = lengthOfArray;
            }
        }
        return(maximumLength);
    }

    public static void main (String args[]){
        String s = "ppwkew";
        longestSubstringWithoutRepeatingCharacters demo = new longestSubstringWithoutRepeatingCharacters();
        int result = demo.lengthOfLongestSubstring(s);
        System.out.println("Length of longest substring without repeating characters: " + result);
    }
}