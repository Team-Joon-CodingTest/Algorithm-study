import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static final int max = Integer.MAX_VALUE;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int K = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        int input[] = new int[K];

        for (int i = 0; i < K; i++) {
            input[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(input);
        System.out.print(binarySearch(K, N, input));
    }
    static int binarySearch(int K, int N, int[] cables) {
        int low = 1;
        int high = cables[K - 1];
        int mid;

        while (low <= high) {
            mid = low + (high - low) / 2;

            long sum = 0;
            for (int i = K - 1; i >= 0; i--) {
                sum += (cables[i] / mid);
                if (sum >= N) break;
            }

            if(sum < N) high = mid - 1;
            else if (sum >= N && low != max) low = mid + 1;
            else break;
        }
        return high;
    }
}
