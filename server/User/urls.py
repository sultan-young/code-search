from django.urls import path, include
from User.views import login, register
urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register')
]