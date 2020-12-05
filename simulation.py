import random
import time


for i in range(10):
    temp=random.randint(0,100)
    f = open("temps.txt", "w")
    f.write(f"{temp}")
    f.close()
    f = open("temps.txt", "r")
    print(f.read())
    time.sleep(1)
