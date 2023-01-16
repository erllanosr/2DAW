from django.shortcuts import render
from libros.models import Libro

# Create your views here.

def index(request):
    nombre = 'sergio'
    dias = ['lunes', 'martes', 'miercoles']
    # Paso 3. Recoger valores de la BD y llevarlos a la vista
    return render(request, 'index.html', {
        "nombre" : nombre,
        "dias" : dias,
    })

def create(request):
    return render(request, 'create.html')

def save(request):
    if request.method == 'POST':
        libro = Libro(
            nombre = request.POST['nombre'],
            paginas = request.POST['paginas']
        )
        libro.save()
    return render(request, 'create.html')

def delete(request, id):
    libro = Libro.objects.get(pk=id)
    libro.delete()
    return render(request, 'create.html')
























# def delete(request, id):
#     libro = Libro.objects.get(pk=id)
#     libro.delete()
#     messages.success(request, 'Libro eliminado correctamente')
#     return redirect('index')



# from django.shortcuts import render, HttpResponse, redirect

    # def index(request):
    # libro = Libro.objects.all()
    # return render(request, 'index.html',{
    #     "libros": libro
    # })

    # ef save(request):
    # if request.method == 'POST':
    #     libro = Libro(
    #         nombre = request.POST['nombre'],
    #         paginas = request.POST['paginas']
    #     )
    #     libro.save()
    #     messages.success(request, 'Libro creado correctamente')
    #     # Creacion del mensaje flash

    # return redirect('index')
