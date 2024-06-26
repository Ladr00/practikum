# case5_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('greeting/<int:user_id>/', views.greeting, name='greeting'),
]
