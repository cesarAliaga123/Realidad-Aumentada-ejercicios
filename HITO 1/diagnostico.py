import sys

maximo = 10**6
esPrimo = [True] * (maximo + 1)
esPrimo[0] = esPrimo[1] = False

p = 2
while p * p <= maximo:
    if esPrimo[p]:
        paso = p
        inicio = p * p
        esPrimo[inicio:maximo+1:paso] = [False] * (((maximo - inicio) // paso) + 1)
    p += 1

primosAcumulados = [0] * (maximo + 1)
contador = 0
for i in range(maximo + 1):
    if esPrimo[i]:
        contador += 1
    primosAcumulados[i] = contador

print("Ingresa los valores L y R separados por espacio (ejemplo: 1 10)")
print("Escribe '0 0' para finalizar.\n")

for linea in sys.stdin:
    linea = linea.strip()
    if not linea:
        continue
    partes = linea.split()
    if len(partes) != 2:
        print("Entrada invalida. Debe contener dos numeros separados por espacio.")
        continue
    try:
        l, r = map(int, partes)
    except ValueError:
        print("Entrada invalida. Asegurate de ingresar numeros enteros.")
        continue
    if l == 0 and r == 0:
        print("\nPrograma finalizado")
        break
    if l > r:
        l, r = r, l
    if l < 1:
        l = 1
    if r > maximo:
        r = maximo
    respuesta = primosAcumulados[r] - (primosAcumulados[l - 1] if l > 0 else 0)
    print(f"La cantidad de numeros primos entre {l} y {r} son: {respuesta}\n")
    print("Ingresa otro rango o '0 0' para salir:")
