# Generated by Django 2.1.7 on 2019-06-01 14:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reddit', '0007_post_writer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='like',
        ),
    ]