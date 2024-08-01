from django.shortcuts import render

from rest_framework import generics
from .models import Flat
from .serializers import FlatSerializer
from django.shortcuts import render



class FlatList(generics.ListCreateAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer

class FlatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer