# Generated by Django 2.2.17 on 2020-11-24 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_homepage_hello'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='body',
        ),
        migrations.AddField(
            model_name='homepage',
            name='body2',
            field=models.TextField(blank=True),
        ),
    ]