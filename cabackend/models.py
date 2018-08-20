from __future__ import unicode_literals

from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class UserDetails(models.Model):
    serial_number = models.IntegerField(primary_key=True)
    resume = models.BooleanField(default=False)
    name = models.CharField(max_length=256, null=True)
    mobile_number = models.CharField(max_length=128, null=True)
    email = models.EmailField(null=True)
    work_experience = models.FloatField(null=True)
    current_location = models.CharField(max_length=512, null=True)
    skills = ArrayField(models.CharField(max_length=256), null=True, default=[])
    preferred_location = models.CharField(max_length=512, null=True)
    ctc = models.FloatField(null=True)
    current_employer = models.CharField(max_length=1024, null=True)
    current_designation = models.CharField(max_length=512, null=True)
    ug_course = models.CharField(max_length=128, null=True)
    ug_institute_name = models.CharField(max_length=512, null=True)
    ug_passing_year = models.BigIntegerField(null=True)
    pg_course = models.CharField(max_length=128, null=True)
    pg_institute_name = models.CharField(max_length=512, null=True)
    pg_passing_year = models.BigIntegerField(null=True)

    class Meta:
        db_table = "users_details"
