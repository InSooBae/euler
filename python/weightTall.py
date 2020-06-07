weight,tall = input("몸무게(kg)와 키(cm)를 입력:").split()
weight=float(weight)
tall=float(tall)
print(weight, tall)
bmi = weight / (( tall/100)**2)
print(bmi)
if(bmi >= 20 and bmi < 25):
    print("표준입니다")
else:
    print("체중관리가 필요합니다")