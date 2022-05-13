from django.db import models


# Create your models here.

class Empresas(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    NIT = models.CharField(max_length=32)
    phone = models.PositiveIntegerField()