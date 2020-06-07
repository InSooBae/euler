def is_prime(n,result):
    for i in result:
        if n % i == 0:
            return False
    return True

def prime_number_list(length):
    result = [2]
    n=2
    while(length>len(result)):
      check = is_prime(n,result)
      if check is True:
          result.append(n)
      n+=1
    return result

length = int(input('Length? '))
print(prime_number_list(length))