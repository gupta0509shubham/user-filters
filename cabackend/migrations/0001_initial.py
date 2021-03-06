# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-08-13 18:29
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('serial_number', models.IntegerField(primary_key=True, serialize=False)),
                ('resume', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=256, null=True)),
                ('mobile_number', models.CharField(max_length=128, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('work_experience', models.FloatField(null=True)),
                ('current_location', models.CharField(max_length=512, null=True)),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=256), default=[], null=True, size=None)),
                ('preferred_location', models.CharField(max_length=512, null=True)),
                ('ctc', models.FloatField(null=True)),
                ('current_employer', models.CharField(max_length=1024, null=True)),
                ('current_designation', models.CharField(max_length=512, null=True)),
                ('ug_course', models.CharField(max_length=128, null=True)),
                ('ug_institute_name', models.CharField(max_length=512, null=True)),
                ('ug_passing_year', models.BigIntegerField(null=True)),
                ('pg_course', models.CharField(max_length=128, null=True)),
                ('pg_institute_name', models.CharField(max_length=512, null=True)),
                ('pg_passing_year', models.BigIntegerField(null=True)),
            ],
            options={
                'db_table': 'users_details',
            },
        ),
    ]
