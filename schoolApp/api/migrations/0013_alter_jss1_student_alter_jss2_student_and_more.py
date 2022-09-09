# Generated by Django 4.1 on 2022-09-06 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_primary1_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jss1',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 6}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='jss2',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 7}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='jss3',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 8}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='primary2',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 2}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='primary3',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 3}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='primary4',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 4}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='primary5',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 5}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='ss1',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 9}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='ss2',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 10}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
        migrations.AlterField(
            model_name='ss3',
            name='student',
            field=models.ForeignKey(limit_choices_to={'Class': 11}, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.student'),
        ),
    ]