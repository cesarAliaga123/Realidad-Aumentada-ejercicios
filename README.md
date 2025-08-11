
# Evaluacion Diagnostica 

Programa que cuenta cuántos números primos hay en un rango `[L, R]` usando la Criba de Eratóstenes y consultas en tiempo constante.

## Uso

1. Guardar el código como `diagnostico.py`.
2. Ejecutar en consola:
   ```bash
   python diagnostico.py
Ingresar L y R separados por espacio.

Ingresar 0 0 para terminar.

Ejemplo
Entrada:

(1 10), 
(10 20),
(100 200),
(0 0)  

Salida:


La cantidad de numeros primos entre 1 y 10 son: 4  
La cantidad de numeros primos entre 10 y 20 son: 4  
La cantidad de numeros primos entre 100 y 200 son: 21  
Detalles técnicos  
Preprocesa los primos hasta 10^6 con la Criba de Eratóstenes.