from django.urls import path
from . import views


urlpatterns = [
    path('', views.HtmlToImage.as_view()),
]