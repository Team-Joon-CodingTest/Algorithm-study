import java.util.*;
import java.io.*;

public class Main {
  static int result = 0;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;

    st = new StringTokenizer(br.readLine());
    String S = st.nextToken();

    st = new StringTokenizer(br.readLine());
    String T = st.nextToken();

    dfs(T,S);

    System.out.println(result);
  }
  private static void dfs(String T, String S) {
    int length = T.length();

    if(length == S.length()) {
      if(T.equals(S)) result = 1;
      return;
    }

    if(T.endsWith("A")) dfs(T.substring(0, length - 1), S);
    if(T.startsWith("B")) dfs(new StringBuilder(T.substring(1)).reverse().toString(), S);

  }
}

