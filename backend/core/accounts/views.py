from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
from .serializers import UserSerializerWithToken
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data = super().validate(attrs)
        
        serializers = UserSerializerWithToken(self.user).data
        
        for token,user in serializers.items():
            data[token] = user
        
        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

@api_view(["POST"])
def register(request):
    data = request.data
    try:
        user = User.objects.create(
            name=data["name"],
            email=data["email"],
            password=make_password(data["password"])
        )
        serializers = UserSerializerWithToken(user, many=False)
        return Response(serializers.data)
    except:
        message = {"detail":"Something went Wrong"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
