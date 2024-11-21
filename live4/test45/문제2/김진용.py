n = int(input())

if n == 1:
    print('CY')
elif n == 2:
    print('SK')
elif n == 3:
    print('CY')
else:
    dp = [-1] * (n + 1)

    dp[1] = 'CY'
    dp[2] = 'SK'
    dp[3] = 'CY'
    dp[4] = 'SK'

    for i in range(5, n+1):
        if dp[i-1] == 'SK' or dp[i-3] == 'SK':
            dp[i] = 'CY'
        else:
            dp[i] = 'SK'
    print(dp[n])