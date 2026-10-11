[← Volver al Índice de PACs](./index.md)

---

### Pregunta 1
¿Cuál es la unidad mínima de información en informática?

<details class="quiz-option incorrect">
  <summary>A) El archivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un archivo es un conjunto estructurado de bytes almacenado en un sistema de ficheros, no la unidad elemental indivisible de información.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) La palabra.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La palabra (word) representa el tamaño de datos natural con el que opera la arquitectura de una CPU (habitualmente 16, 32 o 64 bits), compuesta por varios bytes.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) El bit</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El bit (acrónimo de <em>binary digit</em>) es la unidad mínima y elemental de información en computación, capaz de representar únicamente dos estados discretos: 0 o 1.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) El byte.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El byte es la unidad de direccionamiento estándar de memoria y agrupa un conjunto de 8 bits.
  </div>
</details>

---

### Pregunta 2
¿Cuántos bits contiene un byte?

<details class="quiz-option incorrect">
  <summary>A) 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una agrupación de 16 bits equivale a 2 bytes (o una palabra de 16 bits).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 2 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Dos bits únicamente permiten representar 4 combinaciones posibles ($2^2 = 4$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 4 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un grupo de 4 bits se denomina técnicamente cuarteto o <em>nibble</em>, equivalente a un dígito hexadecimal.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) 8 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Por definición de la arquitectura de computadores estándar (octeto), un byte está compuesto exactamente por 8 bits continuos de información.
  </div>
</details>

---

### Pregunta 3
¿Cuántas combinaciones diferentes pueden representarse mediante 8 bits?

<details class="quiz-option incorrect">
  <summary>A) 8</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocho es el número de posiciones o dígitos binarios disponibles, no el espacio de combinaciones posibles.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Dieciséis combinaciones corresponden al espacio direccionable con 4 bits ($2^4 = 16$).
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) 256</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En un sistema binario con $n$ bits, el número total de estados o combinaciones distintas viene determinado por la potencia $2^n$. Para 8 bits: $2^8 = 256$ combinaciones posibles (valores enteros de 0 a 255 en codificación no signada).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 128</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ciento veintiocho combinaciones corresponden a la capacidad de representación de 7 bits ($2^7 = 128$), empleada en el estándar ASCII original.
  </div>
</details>

---

### Pregunta 4
Dentro de un byte, ¿qué peso tiene el bit situado más a la derecha?

<details class="quiz-option incorrect">
  <summary>A) 2³ = 8</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El peso $2^3 = 8$ corresponde al cuarto bit empezando por la derecha (posición 3, con índice en base 0).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 2¹ = 2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El peso $2^1 = 2$ corresponde al segundo bit empezando por la derecha (posición 1).
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) 2⁰ = 1</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En los sistemas de numeración posicionales binarios, el bit situado más a la derecha es el Bit Menos Significativo (LSB - <em>Least Significant Bit</em>) y su peso posicional es la base elevada a cero: $2^0 = 1$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 2² = 4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El peso $2^2 = 4$ corresponde al tercer bit empezando por la derecha (posición 2).
  </div>
</details>

---

### Pregunta 5
En el número decimal 345, ¿qué valor representa la cifra 3?

<details class="quiz-option incorrect">
  <summary>A) 30</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Treinta corresponde a la cifra de las decenas (el dígito 4 situado en la posición 1: $4 \times 10^1 = 40$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 3000</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tres mil requeriría que el dígito 3 se encontrara en la posición de los millares ($10^3$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tres es el valor intrínseco del símbolo, pero al ser un sistema posicional su valor real depende de la posición que ocupa (centenas).
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) 300</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el sistema decimal posicional, la cifra 3 ocupa la posición de las centenas (posición 2 con índice base 0), por lo que su valor posicional ponderado es $3 \times 10^2 = 300$.
  </div>
</details>

---

### Pregunta 6
¿Cuál de los siguientes números NO es válido en el sistema octal?

<details class="quiz-option incorrect">
  <summary>A) 57</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El número 57 sí es válido en base 8 porque sus cifras (5 y 7) pertenecen al alfabeto octal [0-7].
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 640</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El número 640 sí es válido en octal al contener únicamente dígitos pertenecientes al intervalo permitido de 0 a 7.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 103</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El número 103 es válido en octal, pues todos sus símbolos (1, 0 y 3) forman parte del conjunto de dígitos de base 8.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) 728</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema octal (base 8) únicamente admite dígitos en el rango del 0 al 7 ($0, 1, 2, 3, 4, 5, 6, 7$). La cifra 8 no existe en esta base, por lo que 728 es una expresión inválida en octal.
  </div>
</details>

---

### Pregunta 7
¿Cuál es el valor decimal de 101101₂?

<details class="quiz-option correct">
  <summary>A) 45</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Descomponiendo polinómicamente según el peso de cada bit:<br>
    $(1 \times 2^5) + (0 \times 2^4) + (1 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0) = 32 + 0 + 8 + 4 + 0 + 1 = 45_{10}$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 53</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cincuenta y tres en binario corresponde a $110101_2$ ($32 + 16 + 4 + 1$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 37</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Treinta y siete en binario equivale a $100101_2$ ($32 + 4 + 1$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 41</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cuarenta y uno en binario se codifica como $101001_2$ ($32 + 8 + 1$).
  </div>
</details>

---

### Pregunta 8
¿Cuál es la representación binaria de 26₁₀?

<details class="quiz-option correct">
  <summary>A) 11010</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Realizando divisiones sucesivas entre 2:<br>
    - $26 / 2 = 13$ (resto 0)<br>
    - $13 / 2 = 6$ (resto 1)<br>
    - $6 / 2 = 3$ (resto 0)<br>
    - $3 / 2 = 1$ (resto 1)<br>
    - $1 / 2 = 0$ (resto 1)<br>
    Leyendo los restos del último al primero obtenemos: $11010_2$ ($16 + 8 + 2 = 26$).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) 11100</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $11100_2$ corresponde en base 10 al número $16 + 8 + 4 = 28_{10}$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 10110</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10110_2$ representa en decimal el valor $16 + 4 + 2 = 22_{10}$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 10011</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10011_2$ representa en decimal el valor $16 + 2 + 1 = 19_{10}$.
  </div>
</details>

---

### Pregunta 9
¿A qué número hexadecimal equivale 11010110₂?

<details class="quiz-option incorrect">
  <summary>A) E6</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La letra E en hexadecimal equivale a 14 en decimal ($1110_2$), no a 13 ($1101_2$).
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) D6</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Agrupando la cadena binaria en bloques de 4 bits (nibbles) de derecha a izquierda:<br>
    - Primer cuarteto: $0110_2 = 4 + 2 = 6_{16}$<br>
    - Segundo cuarteto: $1101_2 = 8 + 4 + 1 = 13_{10} = \text{D}_{16}$<br>
    El resultado conjunto es $\text{D}6_{16}$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) C6</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La letra C equivale a 12 en decimal ($1100_2$), por lo que $\text{C}6_{16}$ correspondería a $11000110_2$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) D3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $\text{D}3_{16}$ terminaría en el cuarteto binario $0011_2$, mientras que los últimos 4 bits son $0110_2$.
  </div>
</details>

---

### Pregunta 10
¿A qué número octal equivale 101110₂?

<details class="quiz-option incorrect">
  <summary>A) 46</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El primer trío binario $101_2$ equivale a 5, no a 4 ($100_2$).
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) 56</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Agrupando el número binario en bloques de 3 bits de derecha a izquierda:<br>
    - Primer trío: $110_2 = 4 + 2 = 6_8$<br>
    - Segundo trío: $101_2 = 4 + 1 = 5_8$<br>
    Uniendo ambos dígitos octales obtenemos: $56_8$.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 54</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $54_8$ corresponde al patrón binario $101100_2$, cambiando el segundo dígito del bloque de la derecha.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 65</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $65_8$ invierte los grupos, correspondiendo al binario $110101_2$.
  </div>
</details>
