from math import ceil


def solution(fees, records):
    answer = []
    default_time, default_fee, unit_time, unit_fee = map(int, fees)

    parking = {}
    using_time = {}

    for record in records:
        time, number, status = map(str, record.split())
        hour, minute = map(int, time.split(':'))
        time = hour * 60 + minute
        if status == "IN":
            parking[number] = time
        elif status == "OUT":
            if number in using_time:
                using_time[number] += (time - parking[number])  # 누적
            else:
                using_time[number] = time - parking[number]  # 신규
            del [parking[number]]

    # 아직 주차되어 있는 상태
    for number, time in parking.items():
        if number in using_time:
            using_time[number] += (1439 - time)
        else:
            using_time[number] = 1439 - time

    for number, time in sorted(using_time.items()):
        if time <= default_time:
            fee = default_fee
        else:
            fee = default_fee + ceil((time - default_time) / unit_time) * unit_fee
        answer.append(fee)

    return answer