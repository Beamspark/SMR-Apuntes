# Test de Autoevaluación: Tema 3

[← Volver al Tema 3: Hojas de cálculo – Estructura, formatos, errores y funciones básicas](../tema-3.md)

---

### Pregunta 1
Al introducir la expresión 10+20*2 directamente en una celda de Google Sheets sin escribir ningún carácter previo, ¿qué contenido exacto almacenará y mostrará la celda tras pulsar Enter?

<details class="quiz-option correct">
  <summary>A) Muestra el texto literal 10+20*2 sin realizar ningún cálculo matemático.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Toda fórmula o cálculo en hojas de cálculo debe comenzar obligatoriamente con el signo igual (=). Si se omite este carácter inicial, la aplicación interpreta la entrada como una cadena de texto alfanumérica literal, almacenando y mostrando 10+20*2 sin evaluar la operación matemática.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Realiza el cálculo aplicando la prioridad de operadores y muestra el valor 50.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Solo realizaría el cálculo matemático si la entrada comenzase explícitamente con el signo igual (=10+20*2).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Genera automáticamente el error de tipo #¡VALOR!.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No genera el error #¡VALOR! porque el motor de cálculo no intenta evaluar la entrada como fórmula, sino que la guarda directamente como texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Muestra la celda vacía y genera una advertencia de sintaxis inválida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las hojas de cálculo no dejan la celda en blanco ni emiten alertas cuando se introduce texto con caracteres numéricos y símbolos.
  </div>
</details>

---

### Pregunta 2
Un administrativo necesita modificar una fórmula extensa en la celda B5 sin borrar el contenido existente ni tener que desplazar el puntero del ratón hacia la barra de fórmulas. ¿Qué tecla de función debe presionar para entrar directamente en el modo de edición de la celda activa?

<details class="quiz-option incorrect">
  <summary>A) F4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tecla F4 se utiliza dentro del modo de edición para alternar de forma cíclica los tipos de referencia (relativas, absolutas y mixtas) añadiendo o quitando los símbolos $.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) F2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tecla de función F2 activa directamente el modo de edición sobre la celda seleccionada, posicionando el cursor de texto al final del contenido para permitir modificaciones inmediatas sin borrar lo ya escrito.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) F9</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tecla F9 se utiliza para recalcular manualmente las hojas de trabajo o evaluar fragmentos seleccionados de una fórmula.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) F11</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tecla F11 genera automáticamente un gráfico en una hoja nueva a partir del rango seleccionado.
  </div>
</details>

---

### Pregunta 3
En la celda D10 se ha introducido la fórmula =C10/B10. Si la celda B10 está completamente vacía o contiene el valor numérico 0, ¿qué código de error estricto devolverá la hoja de cálculo?

<details class="quiz-option incorrect">
  <summary>A) #REF!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #REF! se genera cuando una fórmula hace referencia a una celda que ha sido eliminada físicamente de la cuadrícula.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) #N/A</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #N/A (Not Available) indica que un valor buscado no está disponible para una función de búsqueda.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) #DIV/0!</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El código de error #DIV/0! ocurre cuando una fórmula intenta explícita o implícitamente dividir un valor entre cero o entre una celda totalmente vacía (la cual equivale numéricamente a 0 en un divisor).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #¡VALOR! aparece cuando se intenta realizar una operación matemática utilizando datos de tipo texto incompatible.
  </div>
</details>

---

### Pregunta 4
La celda E2 contiene la fórmula =B2*$C$1. Si el usuario copia esta celda y la pega en la celda E3 (una fila más abajo), ¿qué fórmula exacta se evaluará en la celda E3?

<details class="quiz-option incorrect">
  <summary>A) =B3*C2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha eliminado los símbolos $ de fijación y ha incrementado erróneamente la fila de la celda C.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =B2*$C$1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mantiene B2 sin incrementar su fila a pesar de ser una referencia relativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =B3*$C$2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Incrementa la fila de la celda C de 1 a 2 a pesar de estar bloqueada con el signo $1.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =B3*$C$1</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La referencia B2 es relativa, por lo que al desplazar la fórmula una fila hacia abajo (de E2 a E3) su fila se incrementa en una unidad, convirtiéndose en B3. Por su parte, $C$1 es una referencia absoluta fijada con el símbolo $ tanto en la columna ($C) como en la fila ($1), por lo que permanece totalmente inalterada. El resultado final en E3 es =B3*$C$1.
  </div>
</details>

---

### Pregunta 5
Se requiere copiar el resultado numérico calculado en el rango A1:A10 y pegarlo en el rango B1:B10, pero de modo que en la columna B queden registrados valores estáticos puros, eliminando cualquier fórmula subyacente o vinculación con las celdas originales. ¿Qué atajo de teclado de pegado especial debe ejecutarse en Google Sheets?

<details class="quiz-option correct">
  <summary>A) Ctrl + Shift + V</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el entorno de Google Workspace (Docs, Sheets), el atajo de teclado Ctrl + Shift + V ejecuta el Pegado sin formato / Pegar solo valores, extrayendo únicamente los resultados numéricos o de texto evaluados y descartando las fórmulas de origen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + Alt + V</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Alt + V abre el cuadro de diálogo de Pegado Especial en la versión de escritorio de Microsoft Excel, pero no es el atajo directo de pegar valores en Google Sheets.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ctrl + Shift + U</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Shift + U expande o contrae la barra de fórmulas de la interfaz.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ctrl + Alt + Shift + S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una combinación no asignada a funciones de pegado de valores.
  </div>
</details>

---

### Pregunta 6
Un técnico tiene en la celda C5 la fórmula =A5+B5. A continuación, selecciona la columna A completa y la elimina de la hoja de trabajo. ¿Qué error mostrará inmediatamente la celda que contenía la fórmula?

<details class="quiz-option incorrect">
  <summary>A) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #¡VALOR! surge por incompatibilidad de tipos de datos en una operación, no por la supresión física de columnas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) #REF!</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al suprimir físicamente la columna A, la celda de origen de la referencia A5 deja de existir en la estructura de la cuadrícula. La hoja de cálculo sustituye la referencia destruida por la marca inválida #REF!, resultando la fórmula en =#REF!+B5 y devolviendo el código de error #REF!.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) #N/A</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #N/A indica la falta de coincidencia en una función de búsqueda.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) #####</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ##### indica una limitación de ancho de columna para mostrar un valor, no un error de referencia destruida.
  </div>
</details>

---

### Pregunta 7
La celda A1 contiene el texto SMR y la celda B1 contiene el número 2026. ¿Qué resultado exacto devolverá la fórmula =A1 & "-" & B1?

<details class="quiz-option incorrect">
  <summary>A) SMR-2026 como un valor numérico alineado a la derecha.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un dato numérico ni se alinea a la derecha; el resultado de una concatenación es siempre texto alineado a la izquierda.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Genera el error #¡VALOR! porque no se pueden combinar textos y números con operadores matemáticos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El operador & realiza la conversión implícita de números a texto sin generar el error #¡VALOR!.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El texto SMR-2026 alineado automáticamente a la izquierda.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El símbolo ampersand (&) es el operador de concatenación de cadenas. Une valores alfanuméricos y numéricos convirtiendo el resultado final en una cadena de texto (string), la cual se alinea predeterminadamente a la izquierda de la celda. Al incluir explícitamente el guion "-", devuelve el texto SMR-2026.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SMR 2026 separado por un espacio simple.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fórmula incluye explícitamente el carácter de guion "-" entre comillas, por lo que no genera un espacio en blanco.
  </div>
</details>

---

### Pregunta 8
La celda A1 contiene el texto "Pendiente" y la celda B1 contiene el número 150. Si un usuario introduce en la celda C1 la fórmula =A1*B1, ¿qué código de error responderá la hoja de cálculo?

<details class="quiz-option incorrect">
  <summary>A) #N/A</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #N/A se produce cuando una función de búsqueda no encuentra un valor en la tabla origen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) #DIV/0!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #DIV/0! exige que el divisor de una operación sea cero.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) #REF!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    #REF! exige que la celda de referencia haya sido eliminada.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El error #¡VALOR! (#VALUE!) ocurre cuando los argumentos de una expresión matemática no corresponden al tipo de dato esperado, como intentar multiplicar directamente una cadena de texto alfanumérica ("Pendiente") por un valor numérico (150).
  </div>
</details>

---

### Pregunta 9
En la sintaxis de las hojas de cálculo, ¿cómo se representa de forma estandarizada un bloque rectangular contiguo de celdas que abarca desde la celda A1 en la esquina superior izquierda hasta la celda D10 en la esquina inferior derecha?

<details class="quiz-option correct">
  <summary>A) A1:D10</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los dos puntos (:) constituyen el operador de rango en las hojas de cálculo, definiendo el conjunto de celdas contiguas comprendidas dentro del rectángulo delimitado por la celda inicial y la celda final (A1:D10).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) A1..D10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La notación con dos puntos consecutivos (..) se utilizaba en hojas antiguas como Lotus 1-2-3, pero no forma parte del estándar actual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) A1-D10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El guion es el operador aritmético de sustracción.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) A1;D10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El punto y coma (;) es el separador de argumentos individuales, lo que seleccionaría únicamente las dos celdas sueltas A1 y D10.
  </div>
</details>

---

### Pregunta 10
Se tienen los siguientes valores en las celdas A1:A4: A1=10, A2=20, A3="No presentado" (texto), A4=30. ¿Qué valor devolverá la fórmula =PROMEDIO(A1:A4)?

<details class="quiz-option incorrect">
  <summary>A) 15 (calculado dividiendo entre 4 celdas, considerando la celda de texto como 0).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No asigna el valor 0 a las celdas de texto (ese comportamiento pertenecería a la función especial PROMEDIOA).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 20 (calculado dividiendo la suma 60 entre las 3 celdas numéricas válidas).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función PROMEDIO omite automáticamente las celdas con datos alfanuméricos o celdas vacías dentro de un rango numérico. Por tanto, evalúa la suma de las celdas numéricas (10 + 20 + 30 = 60) y la divide entre las 3 celdas válidas, devolviendo exactamente 20.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Genera el error #¡VALOR! por contener una cadena de texto en el rango.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No devuelve error de tipo de valor porque la función está diseñada para ignorar celdas no numéricas dentro de rangos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Genera el error #DIV/0!.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Solo devolvería #DIV/0! si absolutamente todas las celdas del rango carecieran de valores numéricos.
  </div>
</details>

---

### Pregunta 11
En la celda B2 se evalúa la siguiente expresión comparativa: =50<>50. ¿Qué valor booleano mostrará la celda B2?

<details class="quiz-option incorrect">
  <summary>A) VERDADERO (TRUE).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Devolvería VERDADERO si la expresión fuese =50=50 o =50<>40.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La comparación entre dos números mediante operadores de relación es sintácticamente correcta y no genera error.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) FALSO (FALSE).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El operador <> representa la condición comparativa "Diferente de" o "Distinto de". La expresión =50<>50 comprueba si el número 50 es diferente de 50. Al ser una afirmación falsa, la hoja de cálculo devuelve el valor booleano FALSO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 0</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las comparaciones lógicas devuelven directamente las constantes booleanas VERDADERO o FALSO, no enteros numéricos.
  </div>
</details>

---

### Pregunta 12
La celda D5 contiene la fórmula =$A2+B$1. Si la celda D5 se copia y se pega en la celda E6 (desplazándose 1 columna a la derecha y 1 fila hacia abajo), ¿qué fórmula exacta figurará en E6?

<details class="quiz-option incorrect">
  <summary>A) =$A2+B$1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha mantenido todas las referencias congeladas sin incrementar las partes relativas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =B3+C$1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha cambiado la columna A a B omitiendo el bloqueo impuesto por $A.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =$A3+B$1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ha incrementado la columna relativa B a C en el segundo término.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =$A3+C$1</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Analizando las referencias de la fórmula =$A2+B$1 al desplazarla (+1 columna, +1 fila):
    - $A2: Columna A fija ($A), no cambia. Fila 2 es relativa, se incrementa en 1 unidad $\rightarrow$ $A3.
    - B$1: Columna B es relativa, se incrementa en 1 columna (pasa a C) $\rightarrow$ C. Fila $1 fija ($1), no cambia $\rightarrow$ $1.
    La fórmula resultante es =$A3+C$1.
  </div>
</details>

---

### Pregunta 13
Se requiere contabilizar cuántas celdas de un rango A1:A20 contienen cualquier tipo de dato (ya sean números, textos, fechas o errores), ignorando únicamente las celdas totalmente vacías. ¿Qué función debe emplearse?

<details class="quiz-option correct">
  <summary>A) CONTARA(A1:A20)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función CONTARA (COUNTA) contabiliza todas las celdas no vacías de un rango, incluyendo valores numéricos, texto alfanumérico, constantes lógicas y códigos de error.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) CONTAR(A1:A20)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La función CONTAR (COUNT) contabiliza exclusivamente las celdas que contienen datos de tipo numérico o fechas, ignorando las celdas con texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CONTAR.SI(A1:A20)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CONTAR.SI requiere obligatoriamente dos argumentos (el rango y la condición de criterio).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SUMA(A1:A20)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SUMA calcula la adición aritmética de los valores, no el número de celdas ocupadas.
  </div>
</details>

---

### Pregunta 14
Tras introducir una fecha o un número de gran longitud en una celda, el usuario observa que la celda muestra la cadena de caracteres #####. ¿Cuál es la causa técnica de esta visualización y cómo se soluciona?

<details class="quiz-option incorrect">
  <summary>A) Es un error crítico de sintaxis matemática; se soluciona borrando la fórmula e introduciendo un valor entero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No exige borrar la fórmula ni modificar la estructura del cálculo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El ancho de la columna es insuficiente para mostrar el número o fecha formateada; se soluciona aumentando el ancho de la columna.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La cadena ##### no es un código de error de fórmula, sino un indicador de espacio insuficiente en la interfaz. Aparece cuando una cifra numérica, moneda o fecha no cabe en el ancho visual de la columna. Se soluciona ampliando la anchura de la columna o reduciendo el tamaño del texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La celda contiene una referencia circular inacabable; se soluciona activando el cálculo iterativo en la configuración.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las referencias circulares muestran mensajes de advertencia de bucle, no #####.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El tipo de fuente tipográfica no soporta números negativos; se soluciona cambiando la tipografía a Sans Serif.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tipografía utilizada no causa el ocultamiento de valores numéricos negativos.
  </div>
</details>

---

### Pregunta 15
En un rango de celdas B1:B5 se registran las siguientes temperaturas en grados Celsius: B1=-5, B2=12, B3=0, B4=-18, B5=8. ¿Qué valor devolverá la fórmula =MAX(B1:B5) - MIN(B1:B5)?

<details class="quiz-option incorrect">
  <summary>A) -23</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Genera un cálculo erróneo de la regla de los signos numéricos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 6</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Realiza una resta sin considerar el signo negativo del valor mínimo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 30</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función MAX(B1:B5) extrae el valor más alto del rango: 12. La función MIN(B1:B5) extrae el valor más bajo del rango: -18. Restando ambos valores: 12 - (-18) = 12 + 18 = 30.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) -13</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No corresponde a la diferencia entre el máximo y el mínimo del conjunto.
  </div>
</details>

---

### Pregunta 16
¿Cuál es el orden de prioridad de evaluación de los operadores en una fórmula matemática en hojas de cálculo cuando no existen paréntesis explícitos?

<details class="quiz-option incorrect">
  <summary>A) Adición/Sustracción + - $\rightarrow$ Multiplicación/División * / $\rightarrow$ Exponenciación ^.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el orden evaluando adiciones antes que multiplicaciones y potencias.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Concatenación & $\rightarrow$ Multiplicación * $\rightarrow$ Porcentaje %.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El operador de concatenación & se procesa tras las operaciones aritméticas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Igualdad = $\rightarrow$ Suma + $\rightarrow$ Multiplicación *.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La comparación de igualdad se procesa en el último nivel de prioridad.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Exponenciación ^ $\rightarrow$ Multiplicación y División * / $\rightarrow$ Suma y Resta + -.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las hojas de cálculo aplican la jerarquía matemática estándar (PEMDAS): 1. Paréntesis, 2. Exponenciación/Potencias (^), 3. Multiplicación y División (* /) de izquierda a derecha, y 4. Suma y Resta (+ -) de izquierda a derecha.
  </div>
</details>

---

### Pregunta 17
¿En qué circunstancia específica se genera el código de error estricto #N/A en una hoja de cálculo?

<details class="quiz-option correct">
  <summary>A) Cuando una función de búsqueda o referencia (como BUSCARV o COINCIDIR) no encuentra el valor solicitado en el rango especificado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El error #N/A (Not Available / No Disponible) indica que un valor buscado no existe o no ha sido localizado en la tabla de referencia por funciones como BUSCARV o COINCIDIR.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cuando la fórmula intenta realizar una división entre una celda de texto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Operar matemáticamente con celdas de texto genera #¡VALOR!.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cuando se elimina la hoja de cálculo donde residían los datos de origen de la fórmula.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La eliminación de celdas u hojas referenciadas causa #REF!.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cuando la celda de destino no tiene activado el formato de moneda.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ausencia de formato numérico o moneda no genera errores de cálculo.
  </div>
</details>

---

### Pregunta 18
Si un usuario escribe la cifra 0,15 en una celda que tiene aplicado el formato de número general y, a continuación, cambia el formato de esa celda a "Porcentaje", ¿qué valor visual desplegará la celda?

<details class="quiz-option incorrect">
  <summary>A) 0,15%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Para mostrar 0,15% el valor decimal almacenado debería ser 0,0015.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 15,00%</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la lógica interna de las hojas de cálculo, la unidad 1 representa el 100%. Por tanto, el número decimal 0,15 equivale exactamente al quince por ciento (15,00%). Al aplicar el formato de porcentaje, el programa multiplica visualmente el valor interno por 100 y añade el símbolo %.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 150,00%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    150,00% correspondería al valor decimal 1,5.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 0,0015%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a dividir por 10.000 el valor introducido.
  </div>
</details>

---

### Pregunta 19
En Google Sheets, se desea hacer referencia desde la hoja activa a la celda B10 ubicada dentro de una pestaña de trabajo denominada "Ventas_2026". ¿Cuál es la sintaxis de referencia entre hojas correcta?

<details class="quiz-option incorrect">
  <summary>A) =Ventas_2026:B10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los dos puntos : se emplean para definir un rango de celdas contiguas dentro de una misma hoja.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =Ventas_2026->B10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El símbolo -> no pertenece a la sintaxis de las hojas de cálculo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =Ventas_2026!B10</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El signo de exclamación ! es el operador utilizado para separar el nombre de una hoja de trabajo de la celda o rango referenciado (=Ventas_2026!B10).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =Ventas_2026[B10]</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los corchetes [] se emplean en Excel para referenciar libros de trabajo externos.
  </div>
</details>

---

### Pregunta 20
Se necesita sumar el rango de celdas A1:A5, la celda individual C10 y la constante numérica 50 en una única fórmula. ¿Cuál de las siguientes opciones representa la sintaxis estricta y correcta?

<details class="quiz-option incorrect">
  <summary>A) =SUMA(A1:A5 + C10 + 50)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Introducir operadores + dentro de la lista de argumentos de SUMA es redundante e incorrecto en la sintaxis de funciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =SUMA(A1..A5; C10; 50)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza la notación obsoleta .. para el rango.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =SUMA(A1:A5:C10:50)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Encadena dos puntos : de forma errónea entre elementos independientes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =SUMA(A1:A5; C10; 50)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función SUMA acepta múltiples argumentos independientes separados por punto y coma (;). En la expresión =SUMA(A1:A5; C10; 50), el primer argumento es el rango A1:A5, el segundo es la celda C10 y el tercero es la constante 50.
  </div>
</details>

---

### Pregunta 21
En la celda C1 se introduce la fórmula =SI(A1>=50; "Aprobado"; "Suspenso"). Si la celda A1 contiene exactamente el valor numérico 50, ¿qué resultado devolverá la celda C1?

<details class="quiz-option correct">
  <summary>A) Aprobado</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El operador relacional &gt;= evalúa si el valor del primer argumento es "mayor o igual que" el segundo. Al valer A1 exactamente 50, la condición 50&gt;=50 se evalúa como VERDADERO. En la sintaxis de la función SI(prueba_lógica; valor_si_verdadero; valor_si_falso), al cumplirse la prueba lógica la función devuelve el segundo argumento: la cadena de texto Aprobado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Suspenso</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Devolvería Suspenso si la condición fuese estrictamente mayor que (A1&gt;50) o si A1 valiese 49,99.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No genera un error de tipo de valor porque la prueba lógica entre un número y una constante es totalmente válida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 50</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra el texto asignado al argumento de verdadero, no el valor numérico evaluado en A1.
  </div>
</details>

---

### Pregunta 22
Se desea contabilizar cuántas ventas registradas en el rango B2:B20 superan los 1.000 euros. ¿Cuál es la sintaxis exacta y correcta para la función CONTAR.SI en Google Sheets / Excel?

<details class="quiz-option incorrect">
  <summary>A) =CONTAR.SI(B2:B20; &gt;1000)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Escribir &gt;1000 sin comillas provoca un error de sintaxis en el intérprete de fórmulas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =CONTAR.SI(B2:B20; "&gt;1000")</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función CONTAR.SI exige la sintaxis =CONTAR.SI(rango; criterio). Cuando el criterio incluye operadores lógicos o de comparación (&gt;, &lt;, &lt;&gt;, &gt;=), el operador y la cifra deben ir obligatoriamente encerrados entre comillas dobles (">1000") para ser interpretados correctamente por el motor de cálculo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =CONTAR.SI("&gt;1000"; B2:B20)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el orden de los argumentos (sitúa el criterio antes que el rango de celdas).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =CONTAR.SI(B2:B20 &gt; 1000)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fusiona el rango y el criterio dentro de una expresión que devuelve un valor booleano en lugar de los dos argumentos requeridos.
  </div>
</details>

---

### Pregunta 23
Un técnico busca el precio de un producto a partir de su código en una matriz de datos ubicada en el rango A2:C100. El código del producto se encuentra en la primera columna (columna A) y el precio en la tercera columna (columna C). Se requiere garantizar una coincidencia exacta de búsqueda. ¿Qué fórmula es la correcta?

<details class="quiz-option incorrect">
  <summary>A) =BUSCARV(3; A2:C100; "Código"; VERDADERO)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sitúa el número de columna en la primera posición y utiliza VERDADERO (coincidencia aproximada, requiere rango ordenado).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =BUSCARV("Código"; 3; A2:C100; 1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Altera el orden de los parámetros obligatorios.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =BUSCARV(E2; A2:C100; 3; FALSO)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sintaxis de BUSCARV es =BUSCARV(valor_buscado; intervalo; índice_columna; [es_ordenado]). E2 contiene el código buscado, A2:C100 es la matriz donde la columna 1 es la clave de búsqueda, 3 indica que devuelva el dato de la tercera columna (Precio) y FALSO (o 0) fuerza la coincidencia exacta (evitando errores si los datos no están ordenados alfabéticamente).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =BUSCARV(A2:C100; E2; 3; 0)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el rango de la matriz con el valor de celda buscado.
  </div>
</details>

---

### Pregunta 24
En Google Sheets, se desea extraer de la tabla A1:D50 solo aquellas filas donde la columna B (Departamento) sea exactamente igual a "Sistemas". ¿Qué sintaxis del lenguaje QUERY ejecuta esta consulta de forma válida?

<details class="quiz-option incorrect">
  <summary>A) =QUERY(A1:D50; "SEARCH Departamento = 'Sistemas'")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El comando SEARCH no forma parte del estándar de cláusulas del lenguaje QUERY en Google Sheets (utiliza WHERE).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =QUERY(A1:D50; "IF Col2 == 'Sistemas'")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza la palabra reservada IF y el operador de igualdad doble == propios de lenguajes como JavaScript o C, no válidos en QUERY.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =QUERY("Sistemas"; A1:D50; "SELECT B")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sitúa la cadena literal en el primer parámetro reservado para la matriz de datos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =QUERY(A1:D50; "SELECT * WHERE B = 'Sistemas'")</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función QUERY utiliza un lenguaje derivado de SQL. Su sintaxis es =QUERY(datos; consulta; [encabezados]). La cláusula SELECT * selecciona todas las columnas del rango y la cláusula WHERE B = 'Sistemas' filtra las filas comprobando la igualdad con el texto literal 'Sistemas' (encerrado entre comillas simples dentro de la cadena de consulta).
  </div>
</details>

---

### Pregunta 25
Se requiere sumar el importe de la columna C (C2:C50) únicamente para aquellas filas cuya columna B (B2:B50) contenga la categoría "Hardware". ¿Cuál es la sintaxis correcta de la función SUMAR.SI?

<details class="quiz-option correct">
  <summary>A) =SUMAR.SI(B2:B50; "Hardware"; C2:C50)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función SUMAR.SI exige el siguiente orden de argumentos: =SUMAR.SI(rango_criterio; criterio; [rango_suma]). Por tanto, B2:B50 es el rango donde se evalúa el criterio "Hardware", y C2:C50 es el rango numérico independiente que se sumará efectivamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =SUMAR.SI(C2:C50; "Hardware"; B2:B50)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los rangos: intenta evaluar el texto "Hardware" sobre el rango numérico C2:C50 y sumar las categorías.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =SUMAR.SI(B2:B50; C2:C50; "Hardware")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Coloca el criterio al final en lugar de en el segundo parámetro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =SUMAR.SI("Hardware"; B2:B50; C2:C50)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sitúa la cadena del criterio como primer parámetro de la función.
  </div>
</details>

---

### Pregunta 26
La celda A1 contiene la cadena de texto "SMR-2026-MAD". Se desea extraer de forma limpia los 4 dígitos correspondientes al año ("2026"), sabiendo que dicha subcadena comienza en el carácter número 5. ¿Qué función de texto debe emplearse?

<details class="quiz-option incorrect">
  <summary>A) =IZQUIERDA(A1; 4)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =IZQUIERDA(A1; 4) extraería los primeros 4 caracteres desde la izquierda ("SMR-").
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =EXTRAE(A1; 5; 4)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función EXTRAE (MID en inglés) obtiene una cantidad de caracteres de una cadena a partir de una posición inicial dada. Su sintaxis es =EXTRAE(texto; posición_inicial; número_de_caracteres). En este caso, =EXTRAE(A1; 5; 4) empieza en el 5º carácter y extrae exactamente 4 caracteres ("2026").
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =DERECHA(A1; 5)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =DERECHA(A1; 5) extraería los últimos 5 caracteres desde la derecha ("-MAD").
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =HALLAR("2026"; A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HALLAR busca una subcadena y devuelve la posición numérica donde empieza, no la subcadena en sí.
  </div>
</details>

---

### Pregunta 27
¿Qué diferencia técnica existe entre las funciones de fecha y hora =HOY() y =AHORA() al ser ejecutadas en una hoja de cálculo?

<details class="quiz-option incorrect">
  <summary>A) =HOY() devuelve la fecha y hora exacta actual; =AHORA() devuelve únicamente el año en curso.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el comportamiento de las funciones y confunde el año con la hora.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =HOY() requiere un argumento de texto; =AHORA() funciona sin argumentos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna de las dos funciones acepta ni requiere argumentos entre sus paréntesis.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =HOY() devuelve la fecha actual del sistema sin componente de hora (parte entera del número de serie); =AHORA() devuelve la fecha y la hora exacta actualizada (número de serie con decimales).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las fechas en las hojas de cálculo son números de serie. =HOY() devuelve la fecha actual como un número entero (ej. 45565, representando el día sin fracción de tiempo). Por su parte, =AHORA() incluye la hora exacta en forma de fracción decimal (ej. 45565,5 representa las 12:00 PM del día actual). Ambas son volátiles y se reevalúan al cambiar la hoja.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas funciones son idénticas y devuelven el número de días transcurridos desde el año 2000.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No son idénticas; el origen del sistema de números de serie es el 1 de enero de 1900 (o 1904 en Mac clásico), no el año 2000.
  </div>
</details>

---

### Pregunta 28
Se desea aplicar un formato condicional en Google Sheets sobre el rango A2:A100 para resaltar en rojo automáticamente todas las celdas cuyo valor sea un número mayor que 50 y que además sea par. ¿Qué regla de fórmula personalizada debe configurarse?

<details class="quiz-option incorrect">
  <summary>A) =FORMATO(A2 &gt; 50 AND PAR(A2))</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Usa el operador booleano AND al estilo infix y la función inexistente FORMATO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =A2 = "MAYOR_50_PAR"</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Compara la celda con una cadena de texto en lugar de evaluar condiciones numéricas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =SI(A2&gt;50; "ROJO"; "BLANCO")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La función SI devuelve cadenas de texto ("ROJO"), pero el formato condicional exige una evaluación lógica directa booleana (VERDADERO/FALSO).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =Y(A2&gt;50; ES.PAR(A2))</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el Formato Condicional mediante fórmula personalizada, la regla debe devolver VERDADERO o FALSO para la celda superior izquierda del rango (A2). La función Y(condicion1; condicion2) comprueba que se cumplan ambas premisas simultáneamente: que A2 sea mayor que 50 (A2&gt;50) y que el número sea par mediante la función lógica ES.PAR(A2).
  </div>
</details>

---

### Pregunta 29
Al construir una Tabla Dinámica para analizar las ventas por vendedor y por región, se desea que los nombres de las regiones aparezcan organizados como cabeceras de columnas horizontales y los vendedores en las filas. ¿En qué áreas del panel de control de la tabla dinámica deben colocarse respectivamente ambos campos?

<details class="quiz-option correct">
  <summary>A) "Vendedor" en el área de Filas y "Región" en el área de Columnas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las Tablas Dinámicas organizan la matriz asignando campos al eje vertical (Filas) y al eje horizontal (Columnas). Colocar "Vendedor" en Filas desplegará una lista vertical con cada empleado; colocar "Región" en Columnas generará encabezados horizontales para cada zona geográfica, cruzando los datos en la intersección de valores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) "Región" en el área de Valores y "Vendedor" en el área de Filtros.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El área de Valores está reservada para datos numéricos agregables (Suma, Promedio, Contar), no para categorizar dimensiones de texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ambos campos ("Vendedor" y "Región") en el área de Valores con la función CONTAR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Al colocar ambos en Valores se contarían las cadenas de texto sin generar la matriz cruzada de filas y columnas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) "Vendedor" en el área de Columnas y "Región" en el área de Fórmulas Matriciales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los ejes pedidos y utiliza el concepto no existente de "área de Fórmulas Matriciales" en tablas dinámicas.
  </div>
</details>

---

### Pregunta 30
Se tienen los nombres en A1 ("Juan"), B1 ("Pérez") y C1 ("Gómez"). Se requiere unirlos en una sola celda separados por un espacio en blanco " ", de modo que si alguna celda estuviera vacía se omita el separador doble. ¿Qué función avanzada de texto es la más adecuada?

<details class="quiz-option incorrect">
  <summary>A) =CONCATENAR(A1; B1; C1; " ")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CONCATENAR tradicional no gestiona la omisión de celdas vacías ni aplica un delimitador automático a rangos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =UNIRCADENAS(" "; VERDADERO; A1:C1)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función UNIRCADENAS (TEXTJOIN) acepta tres argumentos: =UNIRCADENAS(delimitador; ignorar_vacías; rango). Al usar " " como delimitador y VERDADERO en el segundo argumento, une todos los textos del rango A1:C1 intercalando los espacios y descartando de forma limpia cualquier celda en blanco sin dejar dobles espacios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =A1 &amp; B1 &amp; C1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El operador &amp; pegaría las tres cadenas directamente sin incluir los espacios en blanco entre ellas ("JuanPérezGómez").
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =REEMPLAZAR(A1:C1; " "; "")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    REEMPLAZAR sustituye caracteres en una cadena, no concatena rangos.
  </div>
</details>

---

### Pregunta 31
¿En qué escenario de estructura de datos es técnicamente obligatorio utilizar la función BUSCARH (HLOOKUP) en lugar de BUSCARV (VLOOKUP)?

<details class="quiz-option incorrect">
  <summary>A) Cuando se realiza una búsqueda de datos alojada en una aplicación externa de AppSheet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No depende de la plataforma externa sino de la disposición de las filas/columnas en la matriz.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cuando el valor buscado se encuentra en la última columna de una tabla de orientación vertical.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Para tablas de orientación vertical se sigue utilizando BUSCARV (o la combinación INDEX/MATCH / XLOOKUP).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Cuando la tabla de referencia está organizada de forma horizontal, de modo que los valores clave de búsqueda residen en la primera fila de la tabla y los datos a extraer en las filas inferiores.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La 'V' en BUSCARV significa Vertical (busca en la primera columna hacia la derecha). La 'H' en BUSCARH significa Horizontal: escanea el valor buscado a lo largo de la primera fila de la matriz de izquierda a derecha y, al encontrarlo, desciende verticalmente un número determinado de filas para devolver el dato.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cuando se busca un valor numérico decimal en lugar de una cadena de texto alfanumérica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas funciones operan indistintamente con datos numéricos, fechas o texto.
  </div>
</details>

---

### Pregunta 32
En Google Sheets se desea calcular el importe total multiplicando el rango de cantidades B2:B100 por el rango de precios C2:C100 y desplegar todos los resultados de forma masiva en el rango D2:D100 escribiendo la fórmula únicamente en la celda D2. ¿Qué función debe utilizarse?

<details class="quiz-option incorrect">
  <summary>A) =SUMAPRODUCTO(B2:B100; C2:C100)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SUMAPRODUCTO calcula la suma de las multiplicaciones devolviendo un único número escalar, no la lista extendida en la columna D.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =MATRIZ.MULT(B2:B100; C2:C100)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MATRIZ.MULT realiza la multiplicación algebraica de matrices, la cual exige compatibilidad de dimensiones de filas/columnas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =QUERY(B2:C100; "MULTIPLY B BY C")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "MULTIPLY B BY C" no es una instrucción válida en el lenguaje QUERY (se usaría SELECT B*C).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) =ARRAYFORMULA(B2:B100 * C2:C100)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función ARRAYFORMULA permite aplicar operaciones matemáticas o funciones no matriciales sobre rangos enteros de celdas. Escrita únicamente en D2, =ARRAYFORMULA(B2:B100 * C2:C100) expande los resultados automáticamente desde D2 hasta D100 sin necesidad de arrastrar la fórmula hacia abajo.
  </div>
</details>

---

### Pregunta 33
Un sistema de calificaciones evalúa la nota numérica de A1: Si A1 es menor que 5 devuelve "Suspenso"; si A1 es menor que 9 devuelve "Aprobado"; y en cualquier otro caso (>= 9) devuelve "Sobresaliente". ¿Qué sintaxis representa esta condición anidada de forma correcta?

<details class="quiz-option correct">
  <summary>A) =SI(A1&lt;5; "Suspenso"; SI(A1&lt;9; "Aprobado"; "Sobresaliente"))</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las funciones SI anidadas evalúan condiciones en cascada. Si A1&lt;5 es verdadero, la función devuelve "Suspenso" y se detiene. Si es falso (es decir, A1 >= 5), se ejecuta el segundo SI: si A1&lt;9 devuelve "Aprobado"; si vuelve a ser falso (A1 >= 9), ejecuta el caso por defecto devolviendo "Sobresaliente".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =SI(A1&lt;5; "Suspenso"; "Aprobado"; "Sobresaliente")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La función SI solo acepta 3 argumentos; incluir 4 argumentos genera un error de sintaxis.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =SI(A1&lt;5 AND A1&lt;9; "Suspenso"; "Sobresaliente")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sintaxis del operador lógico AND es errónea en las hojas de cálculo (debe usarse Y(...)).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =SI(A1&lt;5; SI(A1&lt;9; "Sobresaliente"; "Aprobado"); "Suspenso")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Altera la lógica de las comprobaciones invirtiendo los resultados de Aprobado y Sobresaliente.
  </div>
</details>

---

### Pregunta 34
Un usuario inserta un gráfico de sectores creado en Google Sheets dentro de una presentación de Google Slides seleccionando la opción "Vincular con la hoja de cálculo". Posteriormente, modifica los datos numéricos en la hoja de Sheets. ¿Qué ocurre en Google Slides para reflejar los datos actualizados?

<details class="quiz-option incorrect">
  <summary>A) El gráfico en Slides se elimina automáticamente y debe volverse a crear desde cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El objeto no se destruye ni borra del lienzo de la presentación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Aparece un botón "Actualizar" sobre el gráfico en Slides que, al ser pulsado por el usuario, sincroniza e incorpora instantáneamente los nuevos datos e imágenes desde Sheets.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al vincular un gráfico entre aplicaciones de Google Workspace (Sheets a Docs o Slides), el documento de destino mantiene un enlace lógico a la fuente de datos. Cuando los datos cambian en la hoja origen, Google Slides detecta la desincronización y muestra la opción Actualizar en la esquina del gráfico para refrescar los datos visuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Los datos se actualizan únicamente si la presentación se descarga previamente a formato de Microsoft PowerPoint (.pptx).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La exportación a .pptx de hecho rompería la vinculación activa en la nube con Google Sheets.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El gráfico no puede actualizarse bajo ninguna circunstancia por convertirse en un objeto de imagen estático al pegarse.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sería una imagen estática si se hubiese elegido la opción "Desvinculado", pero el enunciado especifica que se seleccionó la opción vinculada.
  </div>
</details>

---

### Pregunta 35
La celda A1 contiene la cadena de texto en minúsculas "juan carlos perez". Se desea convertir la primera letra de cada palabra a mayúscula y el resto a minúsculas, resultando en "Juan Carlos Perez". ¿Qué función de texto debe utilizarse?

<details class="quiz-option incorrect">
  <summary>A) =MAYUSC(A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =MAYUSC(A1) convertiría todas las letras de la cadena a mayúsculas sustentadas ("JUAN CARLOS PEREZ").
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =MINUSC(A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =MINUSC(A1) convertiría todo el texto a minúsculas ("juan carlos perez").
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =NOMPROPIO(A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función NOMPROPIO (PROPER en inglés) convierte a mayúscula la primera letra de cada palabra en una cadena de texto y pasa a minúsculas todas las letras restantes, siendo la función adecuada para formatear nombres y apellidos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =REEMPLAZAR(A1; "j"; "J")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Solo reemplazaría la letra "j" especificada, dejando la inicial de "carlos" y "perez" en minúsculas.
  </div>
</details>

---

### Pregunta 36
En Google Sheets, se ejecuta la consulta =QUERY(A1:C50; "SELECT A, B ORDER BY C DESC"). ¿Qué resultado ordenado desplegará la consulta en la hoja?

<details class="quiz-option incorrect">
  <summary>A) Muestra solo la columna C ordenada de menor a mayor (ascendente).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    DESC significa descendente (no de menor a mayor, que sería ASC) y la columna C no está en el SELECT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Devuelve las columnas A y B ordenadas alfabéticamente por la columna A.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El criterio explícito fijado en ORDER BY es la columna C, no la columna A.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Genera un error de sintaxis porque la columna C no está incluida dentro de la cláusula SELECT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El lenguaje QUERY permite perfectamente ordenar por columnas que no forman parte de las columnas proyectadas en el SELECT.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Devuelve las columnas A y B de la tabla ordenadas en función de los valores de la columna C de mayor a menor (descendente).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el lenguaje QUERY, la cláusula SELECT A, B determina las columnas que se proyectan visualmente en el resultado. La cláusula ORDER BY C DESC indica que el criterio de ordenación de las filas se basa en los valores de la columna C en sentido descendente (DESC, de mayor a menor), sin necesidad de que la columna C sea proyectada en el SELECT.
  </div>
</details>

---

### Pregunta 37
Para analizar la correlación estadística entre el número de horas de estudio de un grupo de alumnos y la nota obtenida en un examen mediante una nube de puntos representados en los ejes de coordenadas X e Y, ¿qué tipo de gráfico es el técnicamente indicado?

<details class="quiz-option correct">
  <summary>A) Gráfico de dispersión (Scatter plot / XY).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Gráfico de dispersión (XY) mapea pares de datos numéricos situando una variable en el eje horizontal (X) y otra en el eje vertical (Y). Es el tipo de gráfico diseñado para representar nubes de puntos y visualizar relaciones de correlación, tendencia o causa-efecto entre dos variables continuas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Gráfico de sectores (quesito / tarta).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El gráfico de sectores muestra proporciones porcentuales de las partes respecto a un todo (100%).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Gráfico de líneas acumulativas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se utiliza para series temporales ordinales continuas, no para correlación de pares independientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Gráfico de barras horizontales apiladas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra comparaciones entre categorías discretas.
  </div>
</details>

---

### Pregunta 38
La celda A1 contiene exactamente la cadena de texto "ADMINISTRADOR". ¿Qué valor entero devolverá la evaluación de la fórmula =LARGO(A1)?

<details class="quiz-option incorrect">
  <summary>A) 12</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a un recuento erróneo por omisión de una letra.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 13</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función LARGO (LEN en inglés) contabiliza la cantidad total de caracteres (incluyendo letras, números, símbolos y espacios en blanco) que componen una cadena de texto. Contando las letras de A-D-M-I-N-I-S-T-R-A-D-O-R, el total es de exactamente 13 caracteres.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 14</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Excede en un carácter la longitud real de la palabra.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 8</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a la palabra "ADMINIST".
  </div>
</details>

---

### Pregunta 19
La celda A1 contiene la fecha 01/01/2026 y la celda B1 contiene la fecha 10/01/2026. ¿Qué resultado exacto devolverá la fórmula =DIAS(B1; A1)?

<details class="quiz-option incorrect">
  <summary>A) 01/10/2026 en formato fecha.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Devuelve un número entero que representa días, no una nueva cadena formateada como fecha.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) #¡VALOR! por operar con fechas sin comillas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las referencias a celdas que contienen fechas no requieren comillas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 9 como un entero que representa los días transcurridos entre ambas fechas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función DIAS(fecha_final; fecha_inicial) calcula la resta matemática simple entre los dos números de serie de las fechas (fecha_final - fecha_inicial). Restando el número de serie de 10/01/2026 menos el de 01/01/2026 (10 - 1), devuelve exactamente la cantidad de 9 días de diferencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 10 como el total de días naturales contando ambos extremos inclusive.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No realiza un conteo inclusivo de ambos extremos (+1); calcula la diferencia matemática estricta entre fechas.
  </div>
</details>

---

### Pregunta 40
Un diseñador de plantillas en Google Sheets desea restringir la entrada de datos en la columna C para que los usuarios solo puedan seleccionar valores de una lista desplegable predefinida ("Aprobado", "Pendiente", "Rechazado") o escribir un número entero entre 1 y 100, bloqueando cualquier otra entrada. ¿Qué herramienta se debe configurar?

<details class="quiz-option incorrect">
  <summary>A) Formato condicional de celdas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formato condicional modifica el aspecto visual (color, fuente) de las celdas según su valor, pero no impide la entrada de datos incorrectos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Agrupar filas y columnas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Agrupar filas/columnas permite contraer o expandir bloques visualmente en la hoja.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Filtros de vista de usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros de vista organizan o esconden temporalmente filas según criterios de lectura.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Validación de datos (Data Validation).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Validación de datos (Data Validation) impone reglas estrictas sobre lo que un usuario puede escribir en una celda o rango. Permite crear listas desplegables, restringir rangos de números o fechas, y configurar mensajes de error que rechazan la entrada de datos no autorizados.
  </div>
</details>
