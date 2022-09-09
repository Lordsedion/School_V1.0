from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('portal/result', index),
    path('about', index),
    path('portal/', index),
    path('login', index),
]
