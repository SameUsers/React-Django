from django.shortcuts import render

from rest_framework import generics
from .models import Flat
from .serializers import FlatSerializer

class FlatList(generics.ListCreateAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer

class FlatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer

