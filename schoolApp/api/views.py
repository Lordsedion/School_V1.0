from ast import Not
from curses import termattrs
from typing import final
from django.shortcuts import render, redirect, HttpResponse
from rest_framework import generics, status
from django.http import HttpResponseRedirect, JsonResponse
from rest_framework.views import APIView
from .models import *
from .forms import *
import json
import requests
from .serializers import *
from django.contrib.auth import authenticate, login
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# create your views here


def check_access(request):
    if request.method == "GET":
        header_var = request.headers['Authorization']
        headers = {
            "Authorization": f"Bearer {header_var}"
        }
        r = requests.get("http://localhost:8000/api/checklink",
                         json={"a": "good"}, headers=headers)
        try:
            if r.status_code == 200:
                return JsonResponse({"status": 1}, safe=False)
            else:
                return JsonResponse({"status": "false"}, safe=False)
        except:
            return JsonResponse({"status": "false"}, safe=False)
    else:
        return Response("You are not authorized to post here!!!")


def which_result(request):
    if request.method == "GET":
        try:
            unique_id = request.headers['username']
            student_id = Student.objects.filter(
                unique_id=unique_id).values("Class_id")[0]["Class_id"]
            if student_id == 1:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values()
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Primary1.objects.filter(
                                subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Primary1.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 2:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Primary2.objects.filter(
                                subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Primary2.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 3:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Primary3.objects.filter(
                                subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Primary3.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 4:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Primary4.objects.filter(
                                subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Primary4.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 5:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Primary5.objects.filter(
                                subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Primary5.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 6:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Jss1.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Jss1.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 7:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Jss2.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Jss2.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 8:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Jss3.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Jss3.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 9:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = Ss1.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(Ss1.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 10:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = SS2.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(SS2.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

            elif student_id == 11:
                terms = Term.objects.all().values('Add_term')
                subjects = Subject.objects.all().values('Course')
                subject = Subject.objects.all().values('id')
                for i in range(len(terms)):
                    sub_data = []
                    for x in range(len(subject)):
                        try:
                            su = SS3.objects.filter(subject_id=x, term_id=i)
                            summed = 0
                            for j in range(len(su)):
                                summed += int(SS3.objects.filter(subject_id=1,
                                              term_id=1).values('score')[j]['score'])
                            sub_data.append({"Average": summed/len(su)})
                        except:
                            pass

                r = requests.get(
                    f'http://localhost:8000/api/p1results?student_id={unique_id}')
                return JsonResponse((r.json(), list(terms), list(subjects), sub_data), safe=False)

        except NameError:
            return HttpResponse('Error in request')
    else:
        return HttpResponse("You are not authorized to request content!!!")


class Check(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Teacher.objects.all()
    serializer_class = CheckSerializer


class AttendanceView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer


class AcademicsView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Academics.objects.all()
    serializer_class = AcademicsSerializer


class SportsView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Sports.objects.all()
    serializer_class = SportSerializer


class SS1View(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)

    queryset = Primary1.objects.all()
    serializer_class = Primary1Serializer


class Primary1View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = 'student_id'
    serializer_class = Primary1Serializer

    def get(self, request, format=None):
        data = []
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Primary2View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Primary2Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Primary3View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Primary3Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Primary4View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Primary4Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Primary5View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Primary5Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Jss1View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = 'student_id'
    serializer_class = Jss1Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_xurl_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Jss2View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Jss2Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Jss3View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Jss3Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class SS1View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = SS1Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class SS2View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = Primary1Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class SS3View(generics.ListAPIView):

    # permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = "student_id"
    serializer_class = SS3Serializer

    def get(self, request, format=None):
        student = request.GET.get(self.lookup_url_kwarg)
        if student != None:
            try:
                student_id = Student.objects.filter(unique_id=student).values(
                    "admission_no")[0]["admission_no"]
                results = Primary1.objects.filter(
                    student_id=student_id).values()
                first_term_id = list(results)[0]['term_id']
                final_data = []
                for i in list(results):
                    if i['term_id'] != first_term_id:
                        first_term_id = i['term_id']
                        final_data.append(data)
                        data = []
                    data.append(i)
                final_data.append(data)
                return JsonResponse(final_data, safe=False, status=status.HTTP_200_OK)
            except NameError:
                return Response(f"User does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class PupilView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = 'user'
    serializer_class = PupilSerializers

    def get(self, request, format=None):
        user = request.GET.get(self.lookup_url_kwarg)
        if user != None:
            student = Student.objects.filter(unique_id=user)

            if len(student) > 0:
                data_id = PupilSerializers(student[0]).data['user']

                student_id = Student.objects.filter(user_id=data_id).values(
                    'admission_no')[0]['admission_no']
                data2 = Sports.objects.filter(
                    student_id=student_id).values("sports")
                data3 = Academics.objects.filter(
                    student_id=student_id).values("academics")
                data4 = Attendance.objects.filter(
                    student_id=student_id).values("attendance")
                data = User.objects.filter(id=data_id).values(
                    'id', 'username', 'first_name', 'last_name', 'email', 'last_login', 'is_active', 'date_joined',)[0]
                return Response((data, data2, data3, data4), status=status.HTTP_200_OK)
            else:
                return Response("Student Does not exist", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Bad request!!!", status=status.HTTP_400_BAD_REQUEST)


class Login(APIView):
    # permission_classes = (IsAuthenticated,)
    serializer_class = StudentSerializers

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid()
        if serializer.data != None:
            try:
                username = serializer.data['username']
                password = serializer.data['password']
                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
                    id = User.objects.filter(
                        username=username).values('id')[0]['id']
                    if id != 1:
                        unique_id = Student.objects.filter(
                            user_id=id).values("unique_id")[0]["unique_id"]

                        payload = {
                            "username": username,
                            "password": password
                        }
                        r = requests.post(
                            "http://localhost:8000/api/token/", json=payload)
                        return JsonResponse([r.json(), {"LGTHVZ1MMUFUCO1A2XJBPGJA5I0E6YUO966A4AWLB6OFI7U": unique_id}], safe=False)
            except KeyError:
                return Response("Username and passwords fields cannot be empty", status=status.HTTP_400_BAD_REQUEST)

        return Response(f'Username or password is incorrect {serializer.data, user}', status=status.HTTP_200_OK)
