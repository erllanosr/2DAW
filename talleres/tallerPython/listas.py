colores = ['azul', 'blanco', 'negro']
colores.append('gris')
colores.extend(['verde', 'naranja'])
print(colores)

# Añadir la M y la YZ
alfabeto = "ABCDEFGHIJKLNOPQRSTUVWX"
print(alfabeto[0:12].__add__('M')+alfabeto[23:]+alfabeto[12:].__add__("YZ"))

# Como una cadena de texto (con rangos)

# Como una lista
listaAlfabeto = ['J', 'K', 'L', 'N']
listaAlfabeto.insert(2, 'M')
print(listaAlfabeto)
