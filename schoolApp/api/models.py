from ast import Sub
from email.policy import default
from os import access
import random
import string
from django.contrib.auth.models import User
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class RangeIntegerField(models.IntegerField):
    def __init__(self, *args, **kwargs):
        validators = kwargs.pop("validators", [])

        # turn min_value and max_value params into validators
        min_value = kwargs.pop("min_value", None)
        if min_value is not None:
            validators.append(MinValueValidator(min_value))
        max_value = kwargs.pop("max_value", None)
        if max_value is not None:
            validators.append(MaxValueValidator(max_value))

        kwargs["validators"] = validators

        super().__init__(*args, **kwargs)

# Create your models here.\


class Subject(models.Model):
    Course = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.Course


class Class(models.Model):
    Class = models.CharField(max_length=30, unique=True)
    class_id = models.IntegerField(null=True)

    def __str__(self):
        return self.Class


class Term(models.Model):
    Add_term = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.Add_term


def generate_unique_code():
    length = 1000
    counter = 0
    while True:
        code = "SD"+str(length+counter)
        counter += 1
        if Student.objects.filter(admission_no=code).count() == 0:
            break
    return code


def generate_random_id():
    N = 500
    while True:
        code = ''.join(random.choices(string.ascii_letters + string.hexdigits, k=N))
        if Student.objects.filter(unique_id=code).count() == 0:
            break
    return code

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    admission_no = models.CharField(
        default=generate_unique_code, primary_key=True, max_length=15, unique=True)
    unique_id = models.CharField(
        default=generate_random_id, editable=False, max_length=600, unique=True)
    Class = models.ForeignKey(Class, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.user}____________{self.Class}"


class Attendance(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    attendance = RangeIntegerField(min_value=0, max_value=100, default=0)

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ Attendance: {self.attendance}  _______________  Term: {self.term.Add_term}"

class Academics(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    academics = RangeIntegerField(min_value=0, max_value=100, default=0)

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ Academics: {self.academics}  _______________  Term: {self.term.Add_term}"

class Sports(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    sports = RangeIntegerField(min_value=0, max_value=100, default=0)

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ Performance: {self.sports}  _______________  Term: {self.term.Add_term}"



class SS3(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 11})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class SS2(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 10})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Ss1(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 9})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Jss3(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 8})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Jss2(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 7})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Jss1(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 6})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Primary5(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 5})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Primary4(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 4})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Primary3(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 3})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Primary2(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class': 2})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Primary1(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, null=True, limit_choices_to={'Class':  1})
    # Grade = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=True)
    term = models.ForeignKey(Term, on_delete=models.CASCADE, null=True)
    score = RangeIntegerField(min_value=0, max_value=100, default=0)
    remark = models.CharField(max_length=100, null=True, default="")

    class Meta:
        unique_together = ['student', 'subject', 'term']

    def __str__(self):
        return f"NAME: {self.student.user}________________     ______________________ SUBJECT: {self.subject.Course}  _______________  Term: {self.term.Add_term}"


class Teacher(User):
    access_code = models.CharField(max_length=15, unique=True)
    list_display = ['access code']
