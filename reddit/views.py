from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from reddit.models import MyUser, Post, Category, Like, DisLike
from reddit.serializer import PostSerializer, CategorySerializer
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from django.shortcuts import render

class PostViewSet(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format=None):
        queryset = Post.objects.all().order_by('-like_total')

        try:
            if request.META['HTTP_ORDERBY'] == "like":
                if request.META['HTTP_ORDER'] == "positive":
                    print("like positive")
                    queryset = queryset.order_by('-like_total')
                else:
                    print("like negative")
                    queryset = queryset.order_by('like_total')

            elif request.META['HTTP_ORDERBY'] == "date":
                if request.META['HTTP_ORDER'] == "positive":
                    print("date positive")
                    queryset = queryset.order_by('date')
                else:
                    print("date negative")
                    queryset = queryset.order_by('-date')
        except:
            queryset = queryset.order_by('-like_total')

        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

class CategoryViewSet(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format=None):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

class RecentPostViewSet(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format=None):
        queryset = Post.objects.all().order_by('-date')[0:5]
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

class PostDetailViewSet(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, id, format=None):
        queryset = Post.objects.get(id=id)
        serializer = PostSerializer(queryset, many=False)
        return Response(serializer.data)

class CategorySearchViewSet(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, id, format=None):
        queryset = Post.objects.filter(category__id=id).order_by('-date')
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

class PostWrite(APIView):
    def post(self, request, format=None):
        new_content = request.data['content']
        new_category = Category.objects.filter(name=request.data['category'])[0]
        new_link = request.data['link']
        #Get Username from JWT in Header
        token_data = {'token' : request.META.get('HTTP_AUTHORIZATION').split(' ')[1]}
        user_data = VerifyJSONWebTokenSerializer().validate(token_data)['user'].email

        Post.objects.create(content=new_content, category=new_category, link=new_link, writer=user_data)
        # print(request.user)
        return Response("Post Added")

class PostEdit(APIView):
    def get(self, request, id, format=None):
        queryset = Post.objects.get(id=id)
        if queryset.writer==request.user.email:
            serializer = PostSerializer(queryset, many=False)
            return Response(serializer.data)

    def post(self, request, id, format=None):
        post = Post.objects.get(id=id)
        post.content = request.data['content']
        post.category = Category.objects.get(name=request.data['category'])
        post.link = request.data['link']
        post.save()
        return Response("Post edited")

    def delete(self, request, id, format=None):
        post = Post.objects.get(id=id)
        if post.writer==request.user.email:
            post.delete()
            return Response("Post deleted")

class Recommand(APIView):
    def post(self, request, id, format=None):
        post = Post.objects.get(id=id)
        if request.data['recommand']=="up":
            if post.upUser.values().filter(email=request.user.email):
                recommanded = Like.objects.filter(post=post, user=request.user)
                recommanded.delete()
            else:
                if DisLike.objects.filter(post=post, user=request.user):
                    DisLike.objects.filter(post=post, user=request.user).delete()
                else:
                    pass
                Like.objects.create(post=post, user=request.user)
        if request.data['recommand']=="down":
            if post.downUser.values().filter(email=request.user.email):
                recommanded = DisLike.objects.filter(post=post, user=request.user)
                recommanded.delete()
            else:
                if Like.objects.filter(post=post, user=request.user):
                    Like.objects.filter(post=post, user=request.user).delete()
                else:
                    pass
                DisLike.objects.create(post=post, user=request.user)
        Like_count = Like.objects.values().filter(post = post).count()
        DisLike_count = DisLike.objects.values().filter(post = post).count()
        post.like_total = Like_count - DisLike_count
        post.save()
        return Response(post.like_total)

class SignUp(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self, request, format=None):
        email = request.data['email']
        name = request.data['name']
        password = request.data['password']
        MyUser.objects.create_user(email=email, name=name, password=password)
        return Response(email)

def index(request):
    context = {}
    return render(request, "index.html", context)
