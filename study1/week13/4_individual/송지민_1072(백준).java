import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        long X = Integer.parseInt(st.nextToken());
        long Y = Integer.parseInt(st.nextToken());
        long Z = 100 * Y / X;
        if (Z >= 99) {
            System.out.println(-1);
        } else {
            long low = 0;
            long mid = 0;
            long high = 1000000000;
            while (low <= high) {
                mid = (low + high) / 2;
                if (Z < 100 * (Y + mid) / (X + mid)) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            System.out.println(low);
        }
    }

}
