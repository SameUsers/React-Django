from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Flat
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from django.contrib.auth.models import User
from .serializers import FlatSerializer,Registration




class GetProtect(APIView):
    def get(self,request):
        token_email=request.user.email
        token_id=request.user.id
        token_username=request.user.username
        return Response({'user_email': token_email,
                        'user_id':token_id,
                        'username':token_username})


class FlatList(generics.ListCreateAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer
    permission_classes = (IsAuthenticated, )

class FlatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = Registration

class UserDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = Registration




