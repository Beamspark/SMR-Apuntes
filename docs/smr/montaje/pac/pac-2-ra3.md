[← Volver al Índice de PACs](./index.md)

---

# PAC 2 (RA3) - Circuitos Eléctricos y Medidas

---

### Pregunta 1
Dos resistencias de 12 $\Omega$ están en paralelo. ¿Cuál es su resistencia equivalente?

<details class="quiz-option incorrect">
  <summary>A) 24 Ω</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    24 $\Omega$ sería el resultado si estuvieran conectadas en serie ($12 + 12 = 24\ \Omega$).
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) 6 Ω</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para dos resistencias iguales conectadas en paralelo, el valor equivalente es la mitad de una de ellas:  
    $$R_T = \frac{R}{2} = \frac{12}{2} = 6\ \Omega$$
    O mediante la fórmula general:
    $$\frac{1}{R_T} = \frac{1}{12} + \frac{1}{12} = \frac{2}{12} \implies R_T = \frac{12}{2} = 6\ \Omega$$
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) 3 Ω</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    3 $\Omega$ resultaría de tener cuatro resistencias de 12 $\Omega$ en paralelo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) 12 Ω</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La resistencia equivalente de un circuito en paralelo siempre es menor que la menor de las resistencias conectadas.
  </div>
</details>

---

### Pregunta 2 (Desarrollo)
Una fuente de 12 V alimenta dos resistencias en paralelo: $R_1 = 60\ \Omega$ y $R_2 = 120\ \Omega$[cite: 14].

#### a) Esquema del circuito con las dos ramas e identificación de componentes[cite: 14]:

<div style="text-align: center; margin: 1.5em 0;">
<svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; background: rgba(0,0,0,0.25); border-radius: 8px; border: 1px solid #444;" xmlns="http://www.w3.org/2000/svg">
  <!-- Cableado principal -->
  <line x1="60" y1="50" x2="430" y2="50" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="170" x2="430" y2="170" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="95" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="125" x2="60" y2="170" stroke="#90caf9" stroke-width="2"/>
  
  <!-- Fuente DC (Componente 1) -->
  <line x1="45" y1="95" x2="75" y2="95" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="52" y1="105" x2="68" y2="105" stroke="#e0e0e0" stroke-width="2"/>
  <line x1="45" y1="115" x2="75" y2="115" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="52" y1="125" x2="68" y2="125" stroke="#e0e0e0" stroke-width="2"/>
  <text x="32" y="90" fill="#ef5350" font-size="14" font-weight="bold">+</text>
  <text x="35" y="135" fill="#90caf9" font-size="16" font-weight="bold">-</text>
  <text x="20" y="115" fill="#e0e0e0" font-size="13">V=12V</text>
  <circle cx="85" cy="85" r="9" fill="#29b6f6"/>
  <text x="82" y="90" fill="#000" font-size="11" font-weight="bold">1</text>

  <!-- Rama 1: Resistencia R1 (Componente 2) -->
  <line x1="260" y1="50" x2="260" y2="85" stroke="#90caf9" stroke-width="2"/>
  <rect x="248" y="85" width="24" height="50" fill="#20222b" stroke="#ffa726" stroke-width="2"/>
  <line x1="260" y1="135" x2="260" y2="170" stroke="#90caf9" stroke-width="2"/>
  <text x="280" y="115" fill="#ffa726" font-size="13">R₁ = 60 Ω</text>
  <circle cx="280" cy="92" r="9" fill="#29b6f6"/>
  <text x="277" y="97" fill="#000" font-size="11" font-weight="bold">2</text>

  <!-- Rama 2: Resistencia R2 (Componente 3) -->
  <line x1="430" y1="50" x2="430" y2="85" stroke="#90caf9" stroke-width="2"/>
  <rect x="418" y="85" width="24" height="50" fill="#20222b" stroke="#ffa726" stroke-width="2"/>
  <line x1="430" y1="135" x2="430" y2="170" stroke="#90caf9" stroke-width="2"/>
  <text x="340" y="115" fill="#ffa726" font-size="13">R₂ = 120 Ω</text>
  <circle cx="448" cy="92" r="9" fill="#29b6f6"/>
  <text x="445" y="97" fill="#000" font-size="11" font-weight="bold">3</text>
  
  <!-- Nodos de conexión -->
  <circle cx="260" cy="50" r="3.5" fill="#90caf9"/>
  <circle cx="260" cy="170" r="3.5" fill="#90caf9"/>
</svg>
</div>

* **1:** Fuente de alimentación (V), suministra 12V de forma continua (CC)[cite: 14].
* **2:** Resistencia $R_1$ con un valor de $60\ \Omega$[cite: 14].
* **3:** Resistencia $R_2$ con un valor de $120\ \Omega$[cite: 14].

#### b) Cálculo de la resistencia total (en paralelo)[cite: 14]:

$$\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} \implies \frac{1}{R_T} = \frac{1}{60} + \frac{1}{120}$$[cite: 14]

$$\frac{1}{R_T} = \frac{1 \cdot 2}{60 \cdot 2} + \frac{1}{120} = \frac{2}{120} + \frac{1}{120} = \frac{3}{120}$$[cite: 14]

$$R_T = \frac{120}{3} = \mathbf{40\ \Omega}$$[cite: 14]

#### c) Cálculo de la intensidad total que suministra la fuente[cite: 14]:

$$I_T = \frac{V}{R_T} = \frac{12\text{ V}}{40\ \Omega} = \mathbf{0{,}3\text{ A}}$$[cite: 14]

#### d) Si se desconecta la rama de $R_1$, ¿podrá seguir circulando corriente por $R_2$?[cite: 14]

> **Respuesta:** Sí, sigue circulando, ya que en un circuito en paralelo cada componente va por su cuenta y $R_2$ mantiene su propio circuito cerrado[cite: 14].

---

### Pregunta 3 (Desarrollo)
Una fuente de 12 V alimenta dos resistencias en serie: $R_1 = 100\ \Omega$ y $R_2 = 200\ \Omega$[cite: 13].

#### a) Esquema del circuito e identificación de componentes[cite: 13]:

<div style="text-align: center; margin: 1.5em 0;">
<svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; background: rgba(0,0,0,0.25); border-radius: 8px; border: 1px solid #444;" xmlns="http://www.w3.org/2000/svg">
  <!-- Cableado del lazo -->
  <line x1="60" y1="50" x2="210" y2="50" stroke="#90caf9" stroke-width="2"/>
  <line x1="260" y1="50" x2="430" y2="50" stroke="#90caf9" stroke-width="2"/>
  <line x1="430" y1="50" x2="430" y2="85" stroke="#90caf9" stroke-width="2"/>
  <line x1="430" y1="135" x2="430" y2="170" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="170" x2="430" y2="170" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="95" stroke="#90caf9" stroke-width="2"/>
  <line x1="60" y1="125" x2="60" y2="170" stroke="#90caf9" stroke-width="2"/>

  <!-- Fuente DC (Componente 1) -->
  <line x1="45" y1="95" x2="75" y2="95" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="52" y1="105" x2="68" y2="105" stroke="#e0e0e0" stroke-width="2"/>
  <line x1="45" y1="115" x2="75" y2="115" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="52" y1="125" x2="68" y2="125" stroke="#e0e0e0" stroke-width="2"/>
  <text x="32" y="90" fill="#ef5350" font-size="14" font-weight="bold">+</text>
  <text x="35" y="135" fill="#90caf9" font-size="16" font-weight="bold">-</text>
  <text x="20" y="115" fill="#e0e0e0" font-size="13">V=12V</text>
  <circle cx="85" cy="85" r="9" fill="#29b6f6"/>
  <text x="82" y="90" fill="#000" font-size="11" font-weight="bold">1</text>

  <!-- Resistencia R1 en el tramo superior (Componente 2) -->
  <rect x="210" y="38" width="50" height="24" fill="#20222b" stroke="#ffa726" stroke-width="2"/>
  <text x="205" y="80" fill="#ffa726" font-size="13">R₁ = 100 Ω</text>
  <circle cx="265" cy="35" r="9" fill="#29b6f6"/>
  <text x="262" y="40" fill="#000" font-size="11" font-weight="bold">2</text>

  <!-- Resistencia R2 en el tramo lateral derecho (Componente 3) -->
  <rect x="418" y="85" width="24" height="50" fill="#20222b" stroke="#ffa726" stroke-width="2"/>
  <text x="340" y="115" fill="#ffa726" font-size="13">R₂ = 200 Ω</text>
  <circle cx="448" cy="92" r="9" fill="#29b6f6"/>
  <text x="445" y="97" fill="#000" font-size="11" font-weight="bold">3</text>
</svg>
</div>

* **1:** Fuente de alimentación, proporciona tensión continua 12V[cite: 13].
* **2:** Resistencia $R_1$ de $100\ \Omega$[cite: 13].
* **3:** Resistencia $R_2$ de $200\ \Omega$[cite: 13].

#### b) Cálculo de la resistencia total (en serie)[cite: 13]:

$$R_T = R_1 + R_2 \implies R_T = 100\ \Omega + 200\ \Omega = \mathbf{300\ \Omega}$$[cite: 13]

#### c) Cálculo de la intensidad total en amperios y miliamperios[cite: 13]:

$$I_T = \frac{V}{R_T} \implies I_T = \frac{12\text{ V}}{300\ \Omega} = \mathbf{0{,}04\text{ A}}$$[cite: 13]

$$I_T = 0{,}04\text{ A} \cdot 1000 = \mathbf{40\text{ mA}}$$[cite: 13]

#### d) Si se desconecta una resistencia y el circuito queda abierto, ¿seguirá circulando corriente por la otra?[cite: 13]

> **Respuesta:** No, no circularía corriente por la otra, ya que en los circuitos en serie solo hay un "camino" por el que circula la corriente, al quedar el circuito abierto, se corta el paso de la corriente[cite: 13].
