import random


for i in range(10):
    temp=random.randint(0,100)
    f = open("demofile3.txt", "w")
    f.write(f"{temp}")
    f.close()
    f = open("demofile3.txt", "r")
    print(f.read())
