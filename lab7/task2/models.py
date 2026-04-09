class Person:
    age = 0
    gender = 'male'
    p_name = "dias"
    def __init__(self, age,gender,n):
        self.age = age
        self.p_name = n
        self.gender = gender
    def hello(self):
        print("My name is" + self.p_name)
    def info(self):
        print("Gender: " + self.gender)
        print("Age: " + self.age)
    def __str__(self):
        print(f"Name: {self.p_name}")

class Student(Person):
    university = 'kbtu'
    def hello(self):
        print(f"My name is: {self.p_name} and i am stadying in KBTU")
    
    def passExam(self):
        print("Student pass exam")
    
class Employee(Person):
    occupation = "Teacher"
    def hello(self):
        super().hello()
        print(f"Occupation: {self.occupation}")
    