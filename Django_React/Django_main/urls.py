from django.urls import path
from .views import FlatList,FlatDetail,UserList,UserDelete,GetProtect


urlpatterns = [
    path('FlatsAPI/', FlatList.as_view(),name='Flats_List'),
    path('OneFlatAPI/<int:pk>/', FlatDetail.as_view(),name='Flat_Detail'),
    path('user/',UserList.as_view(), name="users"),
    path('test/',GetProtect.as_view(), name="test"),
    path('user/<int:pk>/',UserDelete.as_view(), name="users_delete"),

]