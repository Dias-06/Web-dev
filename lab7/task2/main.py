from models import Person, Student, Employee
person1 = Person(70,"male","dias")
st1 = Student(19,"female","Layla")
emp = Employee(30,"male","Erasyl")
peoples = [person1,st1,emp]
for p in peoples:
    p.__str__()
    p.hello()
