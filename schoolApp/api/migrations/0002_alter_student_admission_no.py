# Generated by Django 4.1 on 2022-09-02 00:12

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='admission_no',
            field=models.CharField(default=api.models.generate_unique_code, max_length=15, primary_key=True, serialize=False, unique=True),
        ),
    ]
