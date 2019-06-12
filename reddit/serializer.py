from rest_framework import serializers
from reddit.models import Post, Category, MyUser

class CategorySerializer(serializers.ModelSerializer):
    count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ('name','count','id')
    def get_count(self, obj):
        return Post.objects.filter(category__name=obj.name).count()

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = Post
        fields ='__all__'
