from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=True)
    class Meta: 
        model = Post
        fields = "__all__"
