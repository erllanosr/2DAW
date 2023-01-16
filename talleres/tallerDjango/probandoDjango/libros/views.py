from django.shortcuts import render
# from libros.models import Libros

# Create your views here.


def index(request):
    nombre = 'Erick',
    dias = ['Lunes', 'Martes', 'Miércoles']
    return render(request, 'index.html', {
        'nombre': nombre,
        'dias': dias
    })


def create(request):
    return render(request, 'create.html')
