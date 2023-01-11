a = 33
b = 200
if b > a:
    print("B es mayor que A")

x = 20
y = 20

if x > y:
    print("x es mayor que y")
else:
    print("x e y son iguales")


def mi_funcion():
    print("Hola estoy dentro de la función")
    print("Voy a usar la funcion inicial")
    mi_funcion_inicial()


def mi_funcion2():
    print("Hola soy la segunda funcion")


def mi_funcion_inicial():
    print("Hola estoy dentro de la función de arranque")


mi_funcion()
mi_funcion2()
mi_funcion_inicial()


def mi_funcion_final():
    print("Con esta funcion termino el programa")


mi_funcion_final()
