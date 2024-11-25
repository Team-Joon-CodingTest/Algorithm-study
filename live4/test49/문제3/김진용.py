
def solution(new_id):
    new_id_ary = list(new_id.lower())
    print(new_id_ary)
    for i in range(len(new_id_ary)):
        if not new_id_ary[i].isdigit():
            if new_id_ary[i] != '-' and new_id_ary[i] != '_' and new_id_ary[i] != '.':


print(solution("...!@BaT#*..y.abcdefghijklm"))
