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
                using_time[number] += (time - parking[number])
            else:
                using_time[number] = time - parking[number]
    print(parking)

    return answer