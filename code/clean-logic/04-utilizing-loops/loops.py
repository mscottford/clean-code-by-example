from typing import Optional

class Person:
  def __init__(self):
    self.name: Optional[str] = None
    self.email: Optional[str] = None
    self.age: Optional[int] = None

  def save(self):
    pass

person = Person()

person = Person()
person.name = "Samantha"
person.email = "sam@example.com"
person.age = 45
person.save()

person = Person()
person.name = "Juan"
person.email = "juan@example.com"
person.age = 22
person.save()

person = Person()
person.name = "Alina"
person.email = "alina@example.com"
person.age = 12
person.save()
