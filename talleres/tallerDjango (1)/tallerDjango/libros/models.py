from django.db import models

# Create your models here.

# Creo la clase de la tabla que se va a crear en mi DB
# Creo los campos con los tipos de datos

class Libro(models.Model):
    nombre = models.CharField(max_length=50)
    paginas = models.BigIntegerField()





























# class Libro(models.Model):
#     nombre = models.CharField(max_length=255)
#     paginas = models.IntegerField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)