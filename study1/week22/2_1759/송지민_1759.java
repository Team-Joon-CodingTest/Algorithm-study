
import java.util.*;
import java.io.*; 

public class Main {
  static int L, C;
  static String input[];
  static boolean[] visited;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
		
    st = new StringTokenizer(br.readLine());
    
    L = Integer.parseInt(st.nextToken());
    C = Integer.parseInt(st.nextToken());

    input = new String[C];
    visited = new boolean[C];

    st = new StringTokenizer(br.readLine());

    for(int i = 0; i < C; i++) {
      input[i] = st.nextToken();
    }
    
    Arrays.sort(input);

    dfs(0, 0);
  }

  static void dfs(int start, int count) {
    if(count == L) {
      String word = "";
      int vowel = 0;
      int consonant = 0;
      for(int i = 0; i < C; i++) {
        if(visited[i]) {
          word += input[i];
          if(input[i].equals("a") || input[i].equals("e") || input[i].equals("i") || input[i].equals("o") || input[i].equals("u")) {
            vowel++;
          } else {
            consonant++;
          }
        }
      }
      if(vowel >= 1 && consonant >=2) {
        System.out.println(word);
      }
    }


    for(int i = start; i < C; i++) {
      visited[i] = true;
      dfs(i+1, count+1);
      visited[i] = false;
    }
  }
}
