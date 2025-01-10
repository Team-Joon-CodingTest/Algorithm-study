import copy


def solution(want, number, discount):
    answer = 0

    product = {}
    for i in range(len(want)):
        product[want[i]] = number[i]

    for a in range(len(discount) - 9):
        tmp_product = copy.deepcopy(product)
        for i in range(a, a + 10):
            if discount[i] in want:
                tmp_product[discount[i]] -= 1
        print(tmp_product)
        # 모두 0일 때 카운팅
        # for value in tmp_product.values():
        #     if value > 0:
        #         break
        # answer += 1

    return answer