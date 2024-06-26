// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


public class DuplicateEncoder {
    static String encode(String word) {
        word = word.toLowerCase();
        StringBuilder encoded = new StringBuilder();
        
        for (char c : word.toCharArray()) {
            if (word.indexOf(c) == word.lastIndexOf(c)) {
                encoded.append('(');
            } else {
                encoded.append(')');
            }
        }
        
        return encoded.toString();
    }

    public static void main(String[] args) {
        System.out.println(encode("din"));        // Output: "((("
        System.out.println(encode("recede"));     // Output: "()()()"
        System.out.println(encode("Success"));    // Output: ")())())"
        System.out.println(encode("(( @"));       // Output: "))(("
    }
}
