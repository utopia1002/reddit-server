from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid
from django.utils import timezone

# Create your models here.
class MyUserManager(BaseUserManager):
    def _create_user(self, email, name, password=None, **kwargs):
        if not email:
            raise ValueError('이메일은 필수입니다.')
        if not name:
            raise ValueError('이름은 필수입니다')
        user = self.model(email=self.normalize_email(email),**kwargs)
        user.set_password(password)
        user.save(using=self._db)

    def create_user(self, email, name, password,  **kwargs):
        """
        일반 유저 생성
        """
        kwargs.setdefault('is_admin', False)
        return self._create_user(email, name, password, **kwargs)

    def create_superuser(self, email, name, password, **kwargs):
        """
        관리자 유저 생성
        """
        kwargs.setdefault('is_admin', True)
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        return self._create_user(email, name, password, **kwargs)

class MyUser(AbstractBaseUser, PermissionsMixin):
    uuid = models.UUIDField(
        primary_key=True,
        unique=True,
        editable=False,
        default=uuid.uuid4,
        verbose_name='PK'
    )
    email = models.EmailField(unique=True, verbose_name='이메일')
    name = models.CharField(max_length=20, verbose_name='이름', null=False)
    is_active = models.BooleanField(default=True, verbose_name='활성화 여부')
    is_admin = models.BooleanField(default=False, verbose_name='관리자 여부')
    is_staff = models.BooleanField(default=False, verbose_name='스태프 여부')
    is_superuser = models.BooleanField(default=False, verbose_name='superuser 여부')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', ]

    class Meta:
        db_table = 'db.sqlite3'
        verbose_name = '유저'
        verbose_name_plural = '유저들'
    objects = MyUserManager()

    def __str__(self):
        return self.email

class Category(models.Model):
    name = models.CharField(max_length=20, null=False)
    def __str__(self):
        return self.name

class Post(models.Model):
    content = models.TextField(max_length=300, null=False)
    category = models.ForeignKey(Category, null=False, on_delete=models.CASCADE)
    link = models.URLField(null=True)
    like_total = models.IntegerField(default=0, editable=False)
    date = models.DateTimeField(default=timezone.now)
    writer = models.EmailField(null=False, default="admin@admin.com")
    upUser = models.ManyToManyField(MyUser, blank=True, related_name="upUser", through="Like", through_fields=('post','user'))
    downUser = models.ManyToManyField(MyUser, blank=True, related_name="downUser", through="Dislike", through_fields=('post','user'))
    def __str__(self):
        return self.content

class Like(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class DisLike(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
