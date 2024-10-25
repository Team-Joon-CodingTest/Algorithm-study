import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	static String[][] input;
	static int[] dr = { 0, -1, 0, 1 };
	static int[] dc = { -1, 0, 1, 0 };
	static int N, result, result2;
	static boolean[][] visited, visited2;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		N = Integer.parseInt(br.readLine());
		input = new String[N][N];
		visited = new boolean[N][N];
		visited2 = new boolean[N][N];
		result = 0;
		result2 = 0;
		for (int i = 0; i < N; i++) {
			String[] arr = br.readLine().split("");
			for (int j = 0; j < N; j++) {
				input[i][j] = arr[j];
			}
		}

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				String color = input[i][j];
				if (!visited[i][j]) {
					dfs(i, j, color);
					result++;
				}

			}
		}
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				String color = input[i][j];
				if (!visited2[i][j]) {
					dfs2(i, j, color);
					result2++;
				}

			}
		}

		System.out.println(result + " " + result2);
//		for (int i = 0; i < N; i++) {
//			for (int j = 0; j < N; j++) {
//				System.out.print(input[i][j]);
//			}
//			System.out.println();
//		}
	}

	static void dfs(int r, int c, String color) {
		for (int i = 0; i < 4; i++) {
			int nr = r + dr[i];
			int nc = c + dc[i];

			if (nr < 0 || nr >= N || nc < 0 || nc >= N || visited[nr][nc]) {
				continue;
			}
			if (input[nr][nc].equals(color)) {
				visited[nr][nc] = true;
				dfs(nr, nc, color);
			}

		}
	}

	static void dfs2(int r, int c, String color) {
		for (int i = 0; i < 4; i++) {
			int nr = r + dr[i];
			int nc = c + dc[i];

			if (nr < 0 || nr >= N || nc < 0 || nc >= N || visited2[nr][nc]) {
				continue;
			}
			if (color.equals("R") || color.equals("G")) {
				if (input[nr][nc].equals("R") || input[nr][nc].equals("G")) {
					visited2[nr][nc] = true;
					dfs2(nr, nc, color);
				}
			} else if (input[nr][nc].equals(color)) {
				visited2[nr][nc] = true;
				dfs2(nr, nc, color);
			}

		}
	}

}
