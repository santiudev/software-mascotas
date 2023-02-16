from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "name", "age",
                  "email", "token", "bio", "image"]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
