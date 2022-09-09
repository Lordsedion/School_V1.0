from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

class LoginForm(forms.Form):
    your_name = forms.CharField(label='Username', max_length=40)
    your_pass = forms.CharField(label='Password', max_length=40)
