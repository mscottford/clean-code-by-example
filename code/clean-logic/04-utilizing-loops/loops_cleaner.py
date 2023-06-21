from typing import Optional

class Person:
  def __init__(self):
    self.name: Optional[str] = None
    self.email: Optional[str] = None
    self.age: Optional[int] = None

  def save(self):
    pass

people = [
    { 'name': "Samantha", 'email': "sam@example.com", 'age': 45 },
    { 'name': "Juan", 'email': "juan@example.com", 'age': 22 },
    { 'name': "Alina", 'email': "alina@example.com", 'age': 12 }
]

for person_attributes in people:
    person = Person()
    person.name = person_attributes['name']
    person.email = person_attributes['email']
    person.age = person_attributes['age']
    person.save()

