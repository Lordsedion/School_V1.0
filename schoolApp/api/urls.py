from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from django.contrib import auth
from .views import *

urlpatterns = [
    path('ss1result', SS1View.as_view()),
    path('login', Login.as_view()),
    path('attendview', AttendanceView.as_view()),
    path('acacemyview', AcademicsView.as_view()),
    path('sportsview', SportsView.as_view()),
    path('checklink', Check.as_view()),
    path('checkaccess', check_access),
    path('checkclass', which_result),
    path('pupils', PupilView.as_view()),
    path('dog', SS1View.as_view()),
    path('p1results', Primary1View.as_view()),
    path('p2results', Primary2View.as_view()),
    path('p3results', Primary3View.as_view()),
    path('p4results', Primary4View.as_view()),
    path('p5results', Primary5View.as_view()),
    path('j1results', Jss1View.as_view()),
    path('j2results', Jss2View.as_view()),
    path('j3results', Jss3View.as_view()),
    path('s1results', SS1View.as_view()),
    path('s2results', SS2View.as_view()),
    path('s3results', SS3View.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]