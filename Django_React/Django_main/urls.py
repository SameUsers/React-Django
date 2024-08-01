from django.urls import path
from .views import FlatList,FlatDetail

urlpatterns = [
    path('FlatsAPI/', FlatList.as_view(),name='Flats_List'),
    path('OneFlatAPI/<int:pk>/', FlatDetail.as_view(),name='Flat_Detail'),


]