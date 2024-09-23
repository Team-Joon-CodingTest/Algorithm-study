'''
info 와 query 배열을 딕셔너리로 변경
'''
def parse_info(info_list):
    info_dicts = []
    for item in info_list:
        language, field, experience, food, score = item.split()
        info_dicts.append({
            'language': language,
            'field': field,
            'experience': experience,
            'food': food,
            'score': int(score)
        })
    return info_dicts

def parse_query(query_list):
    query_dicts = []
    for item in query_list:
        parts = item.split(" and ")
        language, field, experience, food_score = parts
        food, score = food_score.split()
        query_dicts.append({
            'language': language,
            'field': field,
            'experience': experience,
            'food': food,
            'score': int(score)
        })
    return query_dicts

def solution(info, query):
    answer = 0

    parsed_info = parse_info(info)
    parsed_queries = parse_query(query)

    answer = []

    for q in parsed_queries:
        count = 0
        # 모든 지원자 정보를 순회하며 조건에 맞는 지원자 수 계산
        for app in parsed_info:
            if ((q['language'] == '-' or q['language'] == app['language']) and
                (q['field'] == '-' or q['field'] == app['field']) and
                (q['experience'] == '-' or q['experience'] == app['experience']) and
                (q['food'] == '-' or q['food'] == app['food']) and
                app['score'] >= q['score']):
                count += 1
        answer.append(count)
        

    return answer