from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from reddit import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/post/$', views.PostViewSet.as_view(), name="post"),
    url(r'^api/category/$', views.CategoryViewSet.as_view(), name="category"),
    url(r'^api/post/recent/$', views.RecentPostViewSet.as_view(), name='recent'),
    url(r'^api/post/(?P<id>\d+)/$', views.PostDetailViewSet.as_view(), name="postdetail"),
    url(r'^api/category/(?P<id>\d+)/$', views.CategorySearchViewSet.as_view(), name="post-category"),
    url(r'^api/post/add/$', views.PostWrite.as_view(), name="addpost"),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api/post/(?P<id>\d+)/edit/$', views.PostEdit.as_view(), name="postedit"),
    url(r'^api/post/(?P<id>\d+)/recommand/$', views.Recommand.as_view(), name="postrecommand"),
    url(r'^api/signup/$', views.SignUp.as_view(), name="signup"),
    url(r'^$', views.index, name="index")
]
