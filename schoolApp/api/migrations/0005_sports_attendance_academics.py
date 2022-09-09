# Generated by Django 4.1 on 2022-09-06 12:00

import api.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_student_unique_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sports', api.models.RangeIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('Class', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.class')),
                ('student', models.ForeignKey(limit_choices_to={'Class': '11'}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student')),
                ('term', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.term')),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attendance', api.models.RangeIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('Class', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.class')),
                ('student', models.ForeignKey(limit_choices_to={'Class': '11'}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student')),
                ('term', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.term')),
            ],
        ),
        migrations.CreateModel(
            name='Academics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('academics', api.models.RangeIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('Class', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.class')),
                ('student', models.ForeignKey(limit_choices_to={'Class': '11'}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student')),
                ('term', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.term')),
            ],
        ),
    ]