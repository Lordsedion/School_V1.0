from rest_framework.serializers import *
from .models import *
from .forms import *

class Primary1Serializer(ModelSerializer):
    class Meta:
        model = Primary1
        fields = ('id', 'student', 'subject', 'term', 'score')


class Primary2Serializer(ModelSerializer):
    class Meta:
        model = Primary2
        fields = ('id', 'student', 'subject', 'term', 'score')


class Primary3Serializer(ModelSerializer):
    class Meta:
        model = Primary3
        fields = ('id', 'student', 'subject', 'term', 'score')


class Primary4Serializer(ModelSerializer):
    class Meta:
        model = Primary4
        fields = ('id', 'student', 'subject', 'term', 'score')


class Primary5Serializer(ModelSerializer):
    class Meta:
        model = Primary5
        fields = ('id', 'student', 'subject', 'term', 'score')


class Jss1Serializer(ModelSerializer):
    class Meta:
        model = Jss1
        fields = ('id', 'student', 'subject', 'term', 'score')


class Jss2Serializer(ModelSerializer):
    class Meta:
        model = Jss2
        fields = ('id', 'student', 'subject', 'term', 'score')


class Jss3Serializer(ModelSerializer):
    class Meta:
        model = Jss3
        fields = ('id', 'student', 'subject', 'term', 'score')


class SS1Serializer(ModelSerializer):
    class Meta:
        model = Ss1
        fields = ('id', 'student', 'subject', 'term', 'score')


class SS2Serializer(ModelSerializer):
    class Meta:
        model = SS2
        fields = ('id', 'student', 'subject', 'term', 'score')


class SS3Serializer(ModelSerializer):
    class Meta:
        model = SS3
        fields = ('id', 'student', 'subject', 'term', 'score')





class CheckSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('access_code')

class AttendanceSerializer(ModelSerializer):
    class Meta:
        model = Attendance
        fields = ('student', 'attendance')

class AcademicsSerializer(ModelSerializer):
    class Meta:
        model = Academics
        fields = ('student', 'academics')

class SportSerializer(ModelSerializer):
    class Meta:
        model = Sports
        fields =  ('student','sports')


class PupilSerializers(ModelSerializer):
    class Meta:
        model = Student
        fields = ('user', 'admission_no', 'Class')

class Student_Serial(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'last_login', 'username', 'first_name', 'last_name', 'email', 'is_active', 'date_joined')

class StudentSerializers(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

