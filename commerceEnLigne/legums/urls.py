from django.contrib import admin
from django.urls import path , include
from . import views

urlpatterns = [
    path('detail_legum' , views.detail_produit , name="detail_legum")
]
