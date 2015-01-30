# Body Mass Index calculater yo

weight = float(input("what is your weight"))
height = float(input("what is your height (in inchs)"))

def bmi(weight,height):
    results = weight * (703/(height *height))
    
    if (results>25):
        print("your fat")
    elif(results>=18.5):
        print("your ight")
    else:
         print("damn sucka you doing good")
bmi(weight, height)
