
from .models import Flat
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import Token


class FlatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flat
        fields = "__all__"



class Registration(serializers.ModelSerializer):
    password=serializers.CharField(max_length=12)
    email=serializers.CharField(max_length=255)
    username=serializers.CharField(max_length=32)
    is_staff=serializers.BooleanField(default=False,read_only=True)





    class Meta:
        model = User
        fields =['id',"password",'email','username','is_staff']
    def create(self, validated_data):
        return User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
          )

