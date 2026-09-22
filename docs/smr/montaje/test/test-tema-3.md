# Test de Autoevaluación: Tema 3

[← Volver al Tema 3: Bloques funcionales del PC](../tema-3.md)

---

### Pregunta 1
En la arquitectura de Von Neumann, ¿cuáles son los dos subcomponentes fundamentales que integran la Unidad Central de Proceso (CPU)?

<details class="quiz-option incorrect">
  <summary>A) La memoria CMOS y el reloj del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria CMOS almacena la configuración de la BIOS y el reloj sincroniza operaciones, pero no son partes internas de la CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La Unidad de Control (UC) y la Unidad Aritmético-Lógica (ALU).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La CPU está formada lógicamente por la Unidad de Control (UC), que interpreta y gestiona las instrucciones, y la Unidad Aritmético-Lógica (ALU), que realiza las operaciones matemáticas y lógicas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El puente norte (Northbridge) y el puente sur (Southbridge).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puente norte y el puente sur son los componentes del chipset de la placa base, no del núcleo del procesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El bus de datos y el bus de direcciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El bus de datos y el de direcciones son vías de transmisión de señales, no unidades de procesamiento.
  </div>
</details>

---

### Pregunta 2
¿Qué tipo de señal transmitida por los buses del sistema se encarga de definir la posición física exacta de memoria o dispositivo al que se desea acceder?

<details class="quiz-option incorrect">
  <summary>A) Bus de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El bus de datos transporta la información o los valores numéricos propiamente dichos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Bus de control.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El bus de control transporta órdenes de mando, lectura/escritura y señales de sincronización.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Bus de direcciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El bus de direcciones transporta la ubicación física de memoria o del puerto E/S al que la CPU quiere leer o escribir.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Bus de expansión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Bus de expansión" es una clasificación por ámbito (slots), no un tipo de señal.
  </div>
</details>

---

### Pregunta 3
Respecto a la evolución de los buses de expansión, ¿qué característica definió al bus AGP (Accelerated Graphics Port) frente al bus PCI tradicional?

<details class="quiz-option incorrect">
  <summary>A) Admitía la conexión de hasta 16 tarjetas de red en paralelo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AGP solo admitía un único slot por placa base, reservado para la tarjeta gráfica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Era una interfaz serie de baja velocidad para unidades de disco óptico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AGP era una interfaz paralela dedicada a vídeo, no una interfaz serie para discos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Estaba dedicado exclusivamente a una tarjeta de vídeo para gráficos 3D y superaba la velocidad de transferencia del PCI.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El bus AGP se desarrolló como un puerto dedicado exclusivamente a adaptadores gráficos 3D, ofreciendo un canal directo con la memoria principal de mayor velocidad que el bus PCI compartido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Fue el primer bus en incorporar la pila CR2032 en la ranura.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pila CR2032 alimenta la memoria CMOS de la placa base, no las ranuras de expansión.
  </div>
</details>

---

### Pregunta 4
¿Qué tecnología de la placa base permite la detección y asignación automática de recursos (IRQ, DMA, E/S) a las tarjetas de expansión sin intervención manual del usuario?

<details class="quiz-option incorrect">
  <summary>A) CHS (Cilindro-Cabeza-Sector).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CHS es un método de geometría y direccionamiento de discos duros magnéticos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) LBA (Logical Block Addressing).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    LBA es un método de direccionamiento lógico de bloques en unidades de almacenamiento.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Plug and Play (PnP).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tecnología Plug and Play (PnP) automatiza la configuración del hardware mediante la interacción del dispositivo PnP, la BIOS PnP y el Sistema Operativo PnP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Overclocking sincronizado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El overclocking es una técnica para forzar la frecuencia de trabajo del procesador.
  </div>
</details>

---

### Pregunta 5
¿Cuál de los siguientes factores de forma de placa base destaca por sus dimensiones compactas diseñadas para equipos de reducido tamaño y bajo consumo?

<details class="quiz-option incorrect">
  <summary>A) XL-ATX</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    XL-ATX es un formato de gran tamaño para torres de alto rendimiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) ATX estándar</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ATX es el estándar tradicional para cajas de formato semitorre/torre.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Mini ITX</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El factor de forma Mini ITX (17x17 cm) está diseñado específicamente para sistemas compactos de pequeño tamaño y bajo consumo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) E-ATX</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    E-ATX (Extended ATX) es una placa de formato ancho para servidores y estaciones de trabajo.
  </div>
</details>

---

### Pregunta 6
¿En qué tipo de memoria no volátil de la placa base se almacena el código del firmware ROM BIOS en los equipos modernos?

<details class="quiz-option incorrect">
  <summary>A) En un módulo de memoria RAM DDR4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La RAM es una memoria volátil que se borra al apagar el equipo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En una memoria Flash (leíble y borrable eléctricamente).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La BIOS se graba en un chip de memoria Flash (EEPROM/Flash ROM), lo que permite actualizar su firmware mediante borrado y reescritura eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En el búfer de la memoria caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L1 está dentro de la CPU para instrucciones inmediatas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En los sectores ocultos del disco SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS debe ejecutarse antes de que cualquier unidad de almacenamiento sea inicializada.
  </div>
</details>

---

### Pregunta 7
¿Cuál es la función específica de la pila o batería de botón (CR2032) ubicada en la placa base?

<details class="quiz-option incorrect">
  <summary>A) Proporcionar energía eléctrica a los ventiladores cuando el equipo se apaga.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los ventiladores funcionan con 12 V de la fuente de alimentación únicamente mientras el PC está encendido.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Alimentar continuamente la memoria CMOS para mantener la fecha, hora y configuración del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La pila CR2032 (3 V) alimenta el chip CMOS para que no se pierdan los datos de configuración de la BIOS ni la hora del sistema al desconectar la torre de la red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Suministrar corriente de emergencia al procesador durante un apagón.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La CPU requiere decenas de amperios a 12 V; una pila de 3 V no puede alimentarla.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Incrementar la velocidad del bus PCI-Express.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las ranuras PCI-Express se alimentan directamente desde las líneas de la fuente de alimentación.
  </div>
</details>

---

### Pregunta 8
¿Cómo se calcula la frecuencia total o velocidad interna de trabajo de un microprocesador?

<details class="quiz-option incorrect">
  <summary>A) Sumando la capacidad de la memoria caché L1 y L2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La capacidad de la caché no determina la frecuencia de reloj.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Multiplicando la frecuencia externa del bus (FSB) por el factor multiplicador interno.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La frecuencia interna del procesador es el resultado de aplicar un factor multiplicador a la frecuencia del bus externo o base (FSB): $\text{Velocidad interna} = \text{FSB} \cdot \text{Multiplicador}$.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Dividiendo el voltaje del núcleo entre la velocidad del ventilador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tensión y las RPM no intervienen en el cálculo de la frecuencia nominal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Restando la frecuencia de la memoria RAM a la velocidad de la tarjeta gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La frecuencia de la CPU no depende algebraicamente de la RAM ni de la gráfica.
  </div>
</details>

---

### Pregunta 9
¿Por qué el microprocesador utiliza un "voltaje interno o de núcleo (core)" inferior al "voltaje externo o de E/S"?

<details class="quiz-option incorrect">
  <summary>A) Porque el voltaje externo es de corriente alterna y el del núcleo de corriente continua.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todas las tensiones internas y externas del procesador son de corriente continua (DC).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Para reducir la generación de temperatura y el consumo energético en el interior del chip.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Reducir el voltaje de trabajo en el núcleo permite integrar miles de millones de transistores disminuyendo el calor disipado y el consumo eléctrico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Para evitar la necesidad de instalar disipadores metálicos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aun con voltajes de núcleo reducidos, los procesadores siguen requiriendo disipación térmica activa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque los transistores internos funcionan únicamente a 220 V.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los transistores del procesador operan a voltajes muy bajos (alrededor de 1 V), jamás a 220 V.
  </div>
</details>

---

### Pregunta 10
En la jerarquía de memorias caché del procesador, ¿qué nivel se caracteriza por estar integrado directamente dentro de cada núcleo y ofrecer la máxima velocidad de acceso?

<details class="quiz-option incorrect">
  <summary>A) Caché L3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L3 es de mayor capacidad pero más lenta y suele compartirse entre todos los núcleos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Caché L2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L2 es intermedia en capacidad y velocidad entre la L1 y la L3.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La caché L1 (de nivel 1) es la más cercana a los registros de la CPU, integrada dentro del propio núcleo, lo que le otorga la menor latencia y mayor velocidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Memoria CMOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La CMOS no es memoria caché; se encuentra en la placa base para guardar la BIOS.
  </div>
</details>

---

### Pregunta 11
¿Cuál es la función principal del disipador metálico pasivo (heatsink) en el sistema de refrigeración de la CPU?

<details class="quiz-option incorrect">
  <summary>A) Generar flujo de aire mediante aspas de plástico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Quien genera el flujo de aire activo mediante aspas es el ventilador (cooler).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Absorber el calor del procesador por conducción física y transferirlo al aire por radiación/convección.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El disipador es una pieza de aluminio o cobre con gran superficie de aletas que extrae el calor del encapsulado de la CPU por contacto directo para transferirlo al ambiente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Suministrar los 12 V necesarios para el encendido del microprocesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El disipador es un bloque metálico inerte sin conexiones eléctricas de alimentación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Rellenar las microimperfecciones invisibles de la carcasa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Quien rellena las microimperfecciones es la pasta térmica conductora.
  </div>
</details>

---

### Pregunta 12
¿A qué toma de la placa base debe conectarse obligatoriamente el cable de alimentación del ventilador del procesador para permitir la regulación de sus RPM?

<details class="quiz-option incorrect">
  <summary>A) PWR_IN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PWR_IN no es una toma de ventilador estándar de placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) SYS_FAN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SYS_FAN se utiliza para ventiladores auxiliares de la caja o chasis.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) CPU_FAN</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La toma serigrafiada como CPU_FAN está gestionada térmicamente por la BIOS para adaptar la velocidad de giro (RPM) según la temperatura de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) F_PANEL</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    F_PANEL es el bloque de pines para los botones e indicadores LED del frontal.
  </div>
</details>

---

### Pregunta 13
¿Por qué la memoria RAM (Random Access Memory) se clasifica como una memoria de tipo "volátil"?

<details class="quiz-option incorrect">
  <summary>A) Porque se puede transportar fácilmente entre ordenadores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La volatilidad no se refiere a la portabilidad física del módulo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque requiere suministro eléctrico constante y pierde toda la información almacenada al apagar o reiniciar el equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La volatilidad implica que las celdas de memoria necesitan tensión eléctrica para retener la carga de los datos; sin energía, la información se borra por completo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque no permite operaciones de escritura, solo de lectura.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La RAM es una memoria de lectura y escritura (Read/Write).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque almacena los datos en un plato magnético giratorio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los platos magnéticos son característicos de los discos duros HDD (no volátiles).
  </div>
</details>

---

### Pregunta 14
¿Qué diferencia constructiva y operacional existe entre la memoria DRAM (dinámica) y la memoria SRAM (estática)?

<details class="quiz-option incorrect">
  <summary>A) La DRAM no necesita refresco y la SRAM requiere refresco continuo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es al revés: la DRAM requiere refresco constante y la SRAM no.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La DRAM es más rápida y cara que la SRAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La SRAM es más rápida y cara que la DRAM.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La DRAM exige un proceso periódico de refresco eléctrico para mantener los datos; la SRAM no necesita refresco y es más rápida pero más costosa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La DRAM almacena datos en condensadores que se descargan y requieren refresco constante. La SRAM usa transistores (biestables), no necesita refresco, es muy rápida (usada en cachés) pero de alto coste.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La DRAM se usa en memorias caché y la SRAM en módulos de memoria principal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es al revés: la SRAM se usa para cachés y la DRAM para la memoria RAM principal.
  </div>
</details>

---

### Pregunta 15
¿Qué innovación técnica introdujo la memoria DDR-SDRAM respecto a la memoria SDRAM convencional?

<details class="quiz-option incorrect">
  <summary>A) Eliminó la necesidad de usar reloj de sincronización.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La DDR sigue siendo síncrona (SDRAM) y depende del reloj del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Realiza dos transferencias de datos por cada ciclo de reloj (una en el flanco de subida y otra en el de bajada).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    DDR significa Double Data Rate; duplica la tasa de transferencia enviando datos tanto en el flanco ascendente como en el descendente de la señal de reloj.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Funciona a una tensión de 220 V de corriente continua.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Trabaja a voltajes de corriente continua muy bajos (de 2.5 V a 1.1 V según generación).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Permite conservar los datos guardados sin estar conectada a la fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sigue siendo una memoria volátil que pierde la información sin corriente.
  </div>
</details>

---

### Pregunta 16
A medida que ha evolucionado la tecnología de memorias RAM desde DDR1 hasta DDR5, ¿cuál ha sido la tendencia respecto al voltaje de trabajo y el rendimiento?

<details class="quiz-option incorrect">
  <summary>A) El voltaje ha aumentado y el rendimiento ha disminuido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es totalmente falso; el voltaje ha bajado y el rendimiento ha subido.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El voltaje se ha reducido progresivamente y la frecuencia/tasa de transferencia ha aumentado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada generación reduce el voltaje (DDR1: 2.5V, DDR2: 1.8V, DDR3: 1.5V, DDR4: 1.2V, DDR5: 1.1V) para consumir menos y generar menos calor, incrementando el ancho de banda y la frecuencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El voltaje y el rendimiento han permanecido totalmente congelados sin cambios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha habido un salto tecnológico notable entre cada generación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El voltaje ha subido a 12 V para igualar a la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Elevar el voltaje a 12 V destruiría los integrados de memoria por exceso térmico.
  </div>
</details>

---

### Pregunta 17
¿Qué elemento físico de los módulos de memoria RAM impide que se pueda insertar un módulo DDR4 en una ranura DIMM diseñada para DDR3?

<details class="quiz-option incorrect">
  <summary>A) Las solapas del ventilador de la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El ventilador no interfiere en el diseño físico del zócalo DIMM.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La posición desplazada de la muesca de llave (notch) en el conector dorado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La muesca o hendidura física del conector varía de posición en cada generación de DDR para evitar que se inserten módulos incompatibles eléctricamente en el zócalo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El grosor de la chapa de la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fuente de alimentación no determina la forma mecánica del slot de memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La ausencia de tornillos en el módulo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los módulos RAM no se fijan con tornillos, sino mediante pestañas plásticas laterales.
  </div>
</details>

---

### Pregunta 18
¿Cómo se denominan los buses que interconectan la CPU con la memoria principal y el chipset sobre la superficie de la placa base?

<details class="quiz-option incorrect">
  <summary>A) Buses internos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los buses internos conectan los bloques lógicos dentro de un propio circuito integrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Buses de expansión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los buses de expansión conectan la placa con periféricos o tarjetas mediante ranuras (PCIe).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Buses externos o del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los buses externos (o de sistema) comunican los integrados situados en la placa base (CPU, RAM, Chipset), a diferencia de los internos (dentro del chip) y los de expansión (hacia los slots).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Buses virtuales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Buses virtuales" no es una categoría física de la arquitectura de buses.
  </div>
</details>

---

### Pregunta 19
¿Cuál de los siguientes componentes se conecta directamente a un bus de expansión en la placa base?

<details class="quiz-option incorrect">
  <summary>A) La memoria caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L1 está dentro del propio chip de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La ALU del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ALU es un bloque aritmético interno de la CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Una tarjeta de red Gigabit PCI-Express x1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las tarjetas de expansión (red, sonido, gráfica) se insertan en ranuras conectadas al bus de expansión (como PCI-Express).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El registro de instrucciones de la UC.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los registros son celdas de almacenamiento ultra-rápidas dentro del procesador.
  </div>
</details>

---

### Pregunta 20
¿Qué componente mecánico de la placa base garantiza una presión uniforme y el contacto eléctrico del procesador sobre la matriz de pines del zócalo?

<details class="quiz-option incorrect">
  <summary>A) La muesca del conector SATA.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector SATA es para cableado de discos duros.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La palanca metálica de bloqueo del zócalo (socket).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La palanca lateral de fijación de los zócalos ZIF (Zero Insertion Force) o LGA ejerce la presión mecánica necesaria para aprisionar los pines sin dañarlos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El separador de latón del chasis.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los separadores fijan la placa base al chasis metálico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El clip del conector ATX de 24 pines.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El clip ATX fija el cable de alimentación principal de la fuente a la placa.
  </div>
</details>

---

### Pregunta 21
¿Qué ocurre si un técnico aplica una capa excesivamente gruesa de pasta térmica entre la CPU y el disipador?

<details class="quiz-option incorrect">
  <summary>A) Aumenta la velocidad de reloj del procesador en un 50%.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta térmica no modifica la frecuencia eléctrica del procesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se reduce la temperatura a 0 °C por congelación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta térmica no es un fluido refrigerante criogénico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La pasta actúa como un aislante térmico en lugar de un conductor, empeorando la evacuación del calor.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La pasta térmica debe aplicarse en una capa microscópica únicamente para rellenar los poros del metal. Un exceso de pasta forma una barrera gruesa que dificulta la transferencia de calor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se borra automáticamente el contenido de la memoria Flash BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta térmica no tiene contacto ni relación funcional con el chip de la BIOS.
  </div>
</details>

---

### Pregunta 22
¿Qué tipo de conector de alimentación de la fuente proporciona la energía principal requerida por la placa base para funcionar?

<details class="quiz-option incorrect">
  <summary>A) Conector Molex de 4 pines.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector Molex se usaba para discos y unidades ópticas ide/sata antiguas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Conector ATX de 24 pines (o 20+4).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conector ATX de 24 pines es la toma de alimentación principal que suministra las líneas de +3.3V, +5V, +12V y masa a la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Conector PCIe de 8 pines.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector PCIe de 8 pines alimenta directamente tarjetas gráficas de alto consumo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conector BERG para disquetera.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector Berg alimentaba las antiguas disqueteras de 3.5 pulgadas.
  </div>
</details>

---

### Pregunta 23
¿Qué función cumple la Unidad de Control (UC) dentro del microprocesador?

<details class="quiz-option incorrect">
  <summary>A) Realizar sumas y operaciones lógicas AND/OR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las operaciones matemáticas y lógicas son responsabilidad de la ALU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Buscar, extraer, interpretar y gestionar la ejecución de las instrucciones de los programas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Unidad de Control es el "cerebro" dentro del procesador que dirige el flujo de datos, interpreta las instrucciones de la memoria y coordina el resto de unidades.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenar varios gigabytes de vídeos de forma permanente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El almacenamiento masivo permanente lo realizan los discos duros/SSD.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Transformar los 220 V alternos en 12 V continuos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conversión de tensiones la realiza la fuente de alimentación.
  </div>
</details>

---

### Pregunta 24
En un sistema informático, ¿qué diferencia existe entre el bus de datos y el bus de direcciones respecto al sentido de circulación de la información?

<details class="quiz-option incorrect">
  <summary>A) El bus de datos es unidireccional y el de direcciones es bidireccional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es al revés: el de datos es bidireccional y el de direcciones unidireccional.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El bus de datos es bidireccional (lectura/escritura) y el de direcciones es unidireccional (desde la CPU hacia los componentes).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El bus de datos requiere ser bidireccional porque los datos entran y salen de la CPU (lectura y escritura). El bus de direcciones es unidireccional porque es la CPU la que indica hacia qué dirección apunta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ambos buses son estrictamente unidireccionales de entrada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El bus de datos no puede ser unidireccional o la CPU no podría escribir en memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ninguno de los dos transporta corriente eléctrica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todos los buses transmiten señales mediante impulsos eléctricos.
  </div>
</details>

---

### Pregunta 25
¿Qué ocurre con la información guardada en la memoria CMOS si la batería botón CR2032 se agota por completo?

<details class="quiz-option incorrect">
  <summary>A) Se destruye físicamente el microprocesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de energía en la CMOS no daña la estructura del procesador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Los datos de configuración de la BIOS y la fecha/hora se pierden, volviendo a los valores predeterminados de fábrica.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al ser la CMOS una memoria de bajo consumo que requiere alimentación constante, el agotamiento de la pila provoca la pérdida de los ajustes personalizados y el reloj se desconfigura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El disco duro se formateará automáticamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La información del disco duro se guarda de forma magnética o flash no volátil independiente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La tarjeta gráfica dejará de emitir colores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tarjeta gráfica funcionará correctamente tras reconfigurar o aceptar los valores por defecto.
  </div>
</details>

---

### Pregunta 26
¿Qué ventaja representa la tecnología de memoria RAM de "Doble Canal" (Dual Channel)?

<details class="quiz-option incorrect">
  <summary>A) Duplica la capacidad de almacenamiento en gigabytes del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria RAM no afecta a la capacidad física del disco secundario.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Permite acceder simultáneamente a dos módulos de memoria RAM idénticos, doblando el ancho de banda del bus de memoria.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tecnología Dual Channel utiliza dos controladores de memoria de 64 bits en paralelo para gestionar 128 bits simultáneamente, duplicando la tasa de transferencia teórica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite usar la RAM como si fuera una batería de emergencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La RAM no tiene capacidad para almacenar ni suministrar energía eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Evita el uso de disipadores en la tarjeta gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La refrigeración de la GPU es independiente de la configuración del canal de RAM.
  </div>
</details>

---

### Pregunta 27
¿Cuál de los siguientes buses de expansión utiliza un canal serie punto a punto de muy alta velocidad organizado en líneas (lanes x1, x4, x8, x16)?

<details class="quiz-option incorrect">
  <summary>A) Bus ISA</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ISA era un bus paralelo de 8 o 16 bits extremadamente lento y obsoleto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Bus PCI</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PCI convencional era un bus paralelo compartido de 32 bits.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Bus PCI-Express (PCIe)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    PCI-Express reemplazó a los buses paralelos por una arquitectura serie punto a punto escalar mediante enlaces o líneas dedicadas (lanes).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Bus AGP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AGP era un bus paralelo dedicado de 32 bits exclusivo para gráficos.
  </div>
</details>

---

### Pregunta 28
¿Qué componente del ordenador ejecuta la rutina de prueba de hardware POST (Power-On Self-Test) inmediatamente al pulsar el botón de encendido?

<details class="quiz-option incorrect">
  <summary>A) El sistema operativo (Windows/Linux).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema operativo no puede cargarse si el test POST no ha validado previamente el hardware básico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El programa de firmware ROM BIOS / UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La BIOS incluye en su código el test inicial POST para verificar que el procesador, la memoria, la gráfica y el teclado responden antes de iniciar la carga del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El controlador de la tarjeta de sonido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los controladores de dispositivos se cargan mucho después, dentro del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El antivirus residente en el disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El antivirus es una aplicación de software que se ejecuta sobre el sistema operativo.
  </div>
</details>

---

### Pregunta 29
¿Cuál de los siguientes términos se refiere al zócalo de procesador de conexión vertical (en desuso) donde el chip se insertaba de forma perpendicular a la placa base?

<details class="quiz-option incorrect">
  <summary>A) Socket LGA</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Socket LGA es un zócalo plano donde los pines están en la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Socket PGA</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Socket PGA es un zócalo plano con orificios donde entran los pines del procesador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Slot</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los conectores verticales (como el Slot 1 de Intel o Slot A de AMD) permitían insertar la CPU montada sobre una tarjeta perpendicular a la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conector ZIF</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ZIF (Zero Insertion Force) es la palanca de esfuerzo nulo de los zócalos planos.
  </div>
</details>

---

### Pregunta 30
¿Qué parámetro técnico del procesador indica la frecuencia de señal a la que se comunican los datos entre la CPU y la memoria/chipset sobre la placa base?

<details class="quiz-option incorrect">
  <summary>A) Frecuencia L1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La frecuencia L1 no existe como término; L1 es el nivel de memoria caché.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Velocidad del reloj interno</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La velocidad interna es la frecuencia de computación dentro del propio chip de la CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Front Side Bus (FSB) o frecuencia externa</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El FSB (o frecuencia de bus externo) determina la velocidad de transferencia del canal de comunicación entre el microprocesador y la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Tasa de muestreo ADC</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tasa ADC es un parámetro de conversión analógico-digital de tarjetas de audio.
  </div>
</details>

---

### Pregunta 31
¿Qué característica presenta el factor de forma de placa base BTX respecto al flujo de aire y térmico en comparación con el estándar ATX?

<details class="quiz-option correct">
  <summary>A) Diseñó una alineación en línea recta de los componentes para mejorar la refrigeración y reducir el ruido.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar BTX se introdujo para reordenar la disposición física de la CPU y el chipset, creando un canal directo de aire para disipar el calor de forma más eficiente que en ATX.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es de mayor tamaño que las placas de servidor E-ATX.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BTX se creó como evolución de ATX en varios tamaños, no como un formato exclusivo gigante.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Eliminó el uso de ventiladores obligando al uso de aceite vegetal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utilizaba ventilación por aire mediante un módulo térmico especial.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Requiere dos fuentes de alimentación conectadas en serie.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza fuentes de alimentación convencionales adaptadas al factor de forma.
  </div>
</details>

---

### Pregunta 32
¿Qué función realiza la memoria SRAM empleada en la fabricación de la memoria caché del procesador?

<details class="quiz-option incorrect">
  <summary>A) Almacenar los archivos del usuario cuando se apaga la luz.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La SRAM es una memoria volátil; se borra al retirar la energía.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Proporcionar un almacenamiento estático de altísima velocidad para datos e instrucciones de uso inmediato por el núcleo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La SRAM (Static RAM) utiliza celdas de transistores biestables que ofrecen tiempos de acceso de pocos nanosegundos, idóneas para actuar como memoria intermedia o caché.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Convertir las señales analógicas del micrófono en datos digitales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conversión de audio es función del conversor ADC de la tarjeta de sonido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Controlar la velocidad de rotación del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El motor de rotación del disco se gestiona mediante la electrónica propia del disco (PCB).
  </div>
</details>

---

### Pregunta 33
¿Qué diferencia básica existe entre la memoria caché L2 y la memoria caché L3?

<details class="quiz-option correct">
  <summary>A) La L2 es de menor capacidad pero más rápida y suele ser dedicada por núcleo; la L3 es de mayor capacidad, más lenta y compartida entre todos los núcleos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La jerarquía de caché ubica a la L2 más cerca de cada núcleo individual, mientras que la L3 es un nivel unificado más grande que sirve de búfer común para todo el procesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La L2 es no volátil y la L3 es volátil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todos los niveles de memoria caché (L1, L2, L3) son volátiles.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La L2 se instala en una tarjeta PCI y la L3 dentro de la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todos los niveles de caché modernos están integrados físicamente dentro del chip de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La L2 no utiliza transistores y la L3 usa condensadores de agua.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos niveles se fabrican con tecnología de semiconductores SRAM.
  </div>
</details>

---

### Pregunta 34
¿Qué conector auxiliar de alimentación procedente de la fuente debe enchufarse en la placa base para suministrar energía dedicada al regulador de voltaje del procesador?

<details class="quiz-option incorrect">
  <summary>A) Conector de audio frontal (F_Audio).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    F_Audio conecta las tomas de minijack del panel frontal para auriculares/micrófono.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Conector auxiliar CPU de 12 V (4 u 8 pines).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conector ATX12V / EPS12V (4 u 8 pines) suministra líneas de 12 V dedicadas exclusivamente a la etapa de potencia (VRM) de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Conector SATA de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SATA datos comunica el disco duro con la placa base, no lleva corriente eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conector de altavoz interno (Speaker).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Speaker es una salida de señal para el pequeño altavoz de avisos de la BIOS.
  </div>
</details>

---

### Pregunta 35
¿Qué nombre recibe el circuito integrado que genera las oscilaciones o pulsos eléctricos constantes para sincronizar las operaciones de todos los componentes de la placa base?

<details class="quiz-option correct">
  <summary>A) Reloj del sistema (System Clock).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El reloj del sistema emite una onda cuadrada de frecuencia fija que marca el ritmo de ejecución de las instrucciones de la CPU y los buses.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Transformador rectificador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El transformador rectificador forma parte de la fuente de alimentación para convertir tensiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Búfer de salida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El búfer de salida es una memoria temporal de paso de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Zócalo ZIF.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El zócalo ZIF es la base donde se asienta físicamente la CPU.
  </div>
</details>

---

### Pregunta 36
¿Qué ocurre si se intenta instalar un módulo de memoria RAM forzándolo en sentido inverso al de su muesca de posición?

<details class="quiz-option incorrect">
  <summary>A) El módulo funcionará pero al doble de velocidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se modifica la velocidad por cambiar la posición física.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) No encajará de forma natural, y si se ejerce fuerza excesiva se romperá el conector DIMM o las pistas del módulo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La muesca está asimétrica expresamente para impedir el montaje invertido. Forzar la inserción fractura el plástico del slot o destruye los contactos dorados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La BIOS invertirá la polaridad automáticamente sin daños.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS es software y no puede alterar la disposición física de los pines del slot.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El ordenador arrancará directamente en modo seguro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El equipo no encenderá o emitirá pitidos de fallo grave de hardware.
  </div>
</details>

---

### Pregunta 37
¿Cuál de las siguientes afirmaciones sobre la memoria SDRAM es CORRECTA?

<details class="quiz-option incorrect">
  <summary>A) Es una memoria asíncrona que funciona al margen del reloj del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es lo opuesto; las memorias DRAM antiguas eran asíncronas, pero la SDRAM es síncrona.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Es una memoria síncrona que coordina sus operaciones de lectura/escritura directamente con la señal del reloj del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La "S" de SDRAM significa Synchronous; sincroniza sus ciclos de acceso con el bus de sistema para eliminar tiempos de espera vacíos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un tipo de disco magnético de alta capacidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una memoria RAM de semiconductores, no un disco magnético.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se utiliza como memoria no volátil para sustituir a la pila CR2032.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una memoria volátil que pierde los datos al apagarse.
  </div>
</details>

---

### Pregunta 38
¿Qué componente del procesador se encarga de realizar operaciones como la suma, resta, multiplicación y comparaciones lógicas (AND, OR, NOT)?

<details class="quiz-option incorrect">
  <summary>A) La Unidad de Control (UC).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La UC dirige las operaciones y la secuencia pero no ejecuta los cálculos matemáticos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La Unidad Aritmético-Lógica (ALU).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La ALU (Arithmetic Logic Unit) es el circuito combinacional dentro de la CPU diseñado específicamente para ejecutar operaciones matemáticas y comparaciones lógicas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El reloj del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El reloj marca el ritmo pero no realiza operaciones lógicas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La memoria CMOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La CMOS guarda parámetros de configuración de arranque.
  </div>
</details>

---

### Pregunta 39
¿Por qué es necesario utilizar pasta térmica entre el microprocesador y el disipador metálico durante el montaje?

<details class="quiz-option incorrect">
  <summary>A) Para pegar permanentemente el disipador y evitar que se pueda volver a retirar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta térmica no es un pegamento; permite desmontar el disipador para mantenimiento.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Para rellenar las microimperfecciones y poros invisibles de las superficies metálicas, eliminando el aire que actúa como aislante térmico.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Aunque el metal del disipador y la CPU parezcan planos, a nivel microscópico tienen rugosidades. La pasta térmica sustituye el aire atrapado (mal conductor) por un compuesto de alta conductividad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Para aislar eléctricamente el procesador y evitar que pase corriente a la placa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un aislante eléctrico, de hecho muchas pastas contienen óxidos metálicos conductores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Para sustituir al ventilador eléctrico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta facilita la transferencia de calor hacia el disipador, pero se sigue necesitando flujo de aire para evacuarlo.
  </div>
</details>

---

### Pregunta 40
Caso Práctico: Al encender un ordenador recién ensamblado, los ventiladores giran pero la pantalla se queda en negro y la placa base emite una ráfaga continua de pitidos largos. Tras revisar la instalación, el técnico comprueba que las pestañas laterales de uno de los zócalos DIMM no están cerradas. ¿Cuál es el diagnóstico?

<details class="quiz-option incorrect">
  <summary>A) Avería irreversible del transformador de la fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si los ventiladores giran, la fuente está suministrando energía.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Módulo de memoria RAM mal insertado o sin asentar correctamente en el slot.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando las pestañas laterales del slot DIMM no se han cerrado automáticamente significa que el módulo no se ha presionado hasta el fondo y los contactos no hacen conexión. La BIOS detecta la falta de RAM y emite los pitidos de error.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Agotamiento de la pila CR2032.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pila agotada causaría pérdida de fecha/hora o aviso de checksum en pantalla, no ráfagas de pitidos de falta de RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Falta de pasta térmica en el procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de pasta térmica causaría sobrecalentamiento progresivo tras unos minutos, no un fallo de inicialización en seco del POST.
  </div>
</details>

---

### Pregunta 41
En la geometría de un disco duro magnético (HDD), ¿cómo se define el concepto de "Cilindro"?

<details class="quiz-option incorrect">
  <summary>A) El eje metálico central sobre el que giran los platos a altas revoluciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El eje metálico central es el spindle o eje de giro del motor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La división mínima de información de una cara, que habitualmente almacena 512 bytes o 4 KB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La división mínima de una cara es el sector.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El conjunto de pistas que ocupan la misma posición vertical en todos los platos del disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un cilindro está formado por la alineación vertical de todas las pistas que se encuentran a la misma distancia del centro en cada una de las caras de los platos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El brazo mecánico que sostiene los cabezales de lectura y escritura.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El brazo mecánico es el actuador del cabezal (actuator arm).
  </div>
</details>

---

### Pregunta 42
Si un disco duro magnético utiliza el sistema de direccionamiento LBA (Logical Block Addressing), ¿cómo se calcula la capacidad total de almacenamiento del dispositivo?

<details class="quiz-option incorrect">
  <summary>A) Multiplicando Cilindros × Caras × Sectores/pista × Tamaño del sector.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fórmula Cilindros × Caras × Sectores/pista × Tamaño de sector corresponde al direccionamiento geométrico tradicional CHS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Multiplicando el número total de sectores lógicos por el tamaño de cada sector.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    LBA asigna un índice numérico consecutivo a cada sector del disco (desde 0 hasta $N-1$). La capacidad total es simplemente el número total de sectores multiplicado por los bytes por sector.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sumando el número de pistas y restando la memoria caché del disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sumar pistas y restar caché no guarda relación matemática con la capacidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Dividiendo el número de revoluciones por minuto (RPM) entre el número de platos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las RPM indican la velocidad de rotación, no la capacidad física.
  </div>
</details>

---

### Pregunta 43
¿Qué función cumple la memoria búfer o caché integrada en la placa electrónica (PCB) de un disco duro?

<details class="quiz-option incorrect">
  <summary>A) Formatear las particiones del sistema operativo en tiempo real.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formateo se realiza mediante software del sistema operativo, no por la caché.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Almacenar datos en memoria DRAM ultrarrápida para anticipar lecturas y agilizar la transferencia con el bus.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El búfer del disco (habitualmente de tecnología DRAM) guarda temporalmente los bloques de datos más solicitados o contiguos para entregarlos a la CPU a la velocidad del bus, sin esperar al acceso mecánico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Evitar que los platos magnéticos se rayen en caso de apagón.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Quien protege la superficie en apagones es el mecanismo de aparcado de cabezales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir la corriente continua de 12 V en corriente alterna.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conversión de corriente la realiza la fuente de alimentación, no el búfer.
  </div>
</details>

---

### Pregunta 44
¿En qué tecnología de circuitos integrados no volátiles se basan las unidades de estado sólido (SSD) y pendrives para almacenar información sin partes móviles?

<details class="quiz-option incorrect">
  <summary>A) Memorias volátiles SDRAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las memorias SDRAM son volátiles y perderían la información al apagar el PC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Válvulas de vacío magnéticas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las válvulas de vacío son componentes antiguos de computación de primera generación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Memorias electrónicas de tipo Flash / EEPROM.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los SSD emplean chips de memoria semiconductores de tecnología Flash (derivada de las memorias EEPROM), permitiendo retener la carga en celdas flotantes sin energía eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Condensadores de electrolito líquido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los condensadores electrolíticos se usan en el filtrado de fuentes, no para guardar archivos.
  </div>
</details>

---

### Pregunta 45
¿Qué caracteriza a un disco híbrido (SSHD - Solid State Hybrid Drive)?

<details class="quiz-option correct">
  <summary>A) Que utiliza platos magnéticos junto con un búfer de memoria flash de alta velocidad para acelerar el arranque y los programas habituales.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un disco SSHD combina la gran capacidad de almacenamiento económico de los platos magnéticos convencionales con una pequeña unidad Flash SSD que actúa como caché inteligente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Que requiere dos cables de alimentación ATX de 24 pines conectados en paralelo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se conecta mediante un puerto de alimentación SATA estándar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que graba los datos mediante un rayo láser sobre platos de aluminio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La grabación láser es exclusiva de las unidades ópticas (CD/DVD/Blu-ray).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que solo es compatible con sistemas operativos de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un dispositivo de almacenamiento estándar transparente para cualquier SO moderno.
  </div>
</details>

---

### Pregunta 46
¿Cuál de los siguientes formatos de tarjeta de memoria Flash fue desarrollado por Sony para sus dispositivos portátiles?

<details class="quiz-option incorrect">
  <summary>A) Compact Flash (CF)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Compact Flash fue diseñado originalmente por SanDisk.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Secure Digital (SD)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SD fue creado por el consorcio formado por Matsushita (Panasonic), SanDisk y Toshiba.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Memory Stick (MS / MS Pro Duo)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato Memory Stick (y sus variantes Pro Duo) es un estándar propietario introducido y comercializado por Sony.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MicroSDHC</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MicroSDHC es una evolución del estándar internacional SD.
  </div>
</details>

---

### Pregunta 47
En los reproductores y grabadores de CD, ¿a cuánto equivale exactamente la velocidad base de transferencia denominada 1x?

<details class="quiz-option incorrect">
  <summary>A) $1.024\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $1.024\text{ KB/s}$ es la equivalencia de $1\text{ MB/s}$ en binario.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) $150\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La velocidad de referencia $1x$ en los lectores de discos compactos (CD) equivale a una tasa de lectura/escritura de $150\text{ KB/s}$.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) $4,7\text{ MB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $4,7\text{ GB}$ (no MB/s) es la capacidad de un DVD de una capa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) $12\text{ MB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $12\text{ MB/s}$ no es la constante base de velocidad de unidades ópticas de CD.
  </div>
</details>

---

### Pregunta 48
Si una lectora de CD trabaja a una velocidad de 48x, ¿cuál es su tasa de transferencia de datos en kilobytes por segundo (KB/s)?

<details class="quiz-option incorrect">
  <summary>A) $4.800\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $4.800\text{ KB/s}$ es el resultado de multiplicar $48 \cdot 100$, un cálculo incorrecto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) $7.200\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La velocidad total se calcula multiplicando el factor por la constante base: $48 \cdot 150\text{ KB/s} = 7.200\text{ KB/s}$.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) $10.800\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10.800\text{ KB/s}$ es el resultado de una lectora de $72x$ ($72 \cdot 150$).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) $150.000\text{ KB/s}$</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $150.000\text{ KB/s}$ es un número sobredimensionado sin ajuste a la constante de $150\text{ KB/s}$.
  </div>
</details>

---

### Pregunta 49
¿Qué diferencia física permite a la tecnología Blu-ray (BD) almacenar más de 25 GB en una sola capa frente a los 4,7 GB de un DVD?

<details class="quiz-option incorrect">
  <summary>A) Que utiliza discos de mayor diámetro exterior (20 cm).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todos los discos ópticos estándar (CD, DVD, BD) comparten el mismo diámetro de $12\text{ cm}$.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El uso de un láser azul/violeta con una longitud de onda más corta que el láser rojo, lo que permite grabar muescas más pequeñas y juntas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La menor longitud de onda del láser azul-violeta ($405\text{ nm}$ frente a los $650\text{ nm}$ del láser rojo del DVD) permite enfocar un punto mucho más reducido sobre el disco, aumentando drásticamente la densidad de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que los discos Blu-ray giran en sentido contrario a los DVD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sentido de rotación no altera la capacidad de almacenamiento del soporte.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que la información se almacena en forma de campos magnéticos en lugar de microhoyos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Blu-ray es un soporte estrictamente óptico (láser), no magnético.
  </div>
</details>

---

### Pregunta 50
¿Cómo se denominan las marcas microscópicas y los espacios planos grabados en la espiral de un disco óptico para representar los ceros y unos binarios?

<details class="quiz-option incorrect">
  <summary>A) Pistas y Cilindros.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Pistas y cilindros son divisiones de la geometría de discos magnéticos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Pits (microhoyos) y Lands (valles/llanos).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La lectura óptica detecta la diferencia de refracción de la luz láser entre los pequeños huecos (pits) y las zonas planas no alteradas (lands).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sectores físicos y Clusters.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sectores y clusters son agrupaciones lógicas del sistema de archivos en discos rígidos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Muestras y Frecuencias.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestras y frecuencias son términos de procesamiento de señal o audio digital.
  </div>
</details>

---

### Pregunta 51
¿Qué componente de la tarjeta gráfica está dedicado a realizar los cálculos matemáticos en paralelo para la representación de escenas 2D y 3D?

<details class="quiz-option incorrect">
  <summary>A) El puente sur (Southbridge).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Southbridge gestiona los periféricos de entrada/salida lentos en la placa base.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La GPU (Graphics Processing Unit).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La GPU es el procesador especializado dotado de cientos o miles de núcleos para procesar algoritmos gráficos simultáneamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El conversor DAC de sonido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El DAC de sonido convierte audio digital a analógico, no procesa gráficos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El sintetizador MIDI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sintetizador MIDI genera eventos de audio por código de instrumentos.
  </div>
</details>

---

### Pregunta 52
¿Qué ventaja aporta disponer de VRAM (Video RAM) dedicada en la tarjeta gráfica en lugar de utilizar memoria compartida de la RAM principal?

<details class="quiz-option incorrect">
  <summary>A) Duplica el número de puertos USB del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La VRAM es memoria de gráficos; no añade ni controla puertos USB.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Evita consumir la memoria RAM del sistema y ofrece velocidades de bus muy elevadas hacia la GPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La VRAM propia (tecnologías GDDR) está montada junta a la GPU con buses de gran ancho de banda, dejando libre la memoria RAM principal para las aplicaciones del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite grabar programas en la BIOS automáticamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS se almacena en su propio chip Flash en la placa base, no en la VRAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Elimina la necesidad de instalar controladores (drivers).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Toda tarjeta gráfica dedicada requiere instalar sus drivers correspondientes.
  </div>
</details>

---

### Pregunta 53
¿Cuál de los siguientes conectores de vídeo de una tarjeta gráfica transmite una señal puramente analógica de color azul estandarizada?

<details class="quiz-option incorrect">
  <summary>A) HDMI</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HDMI es una interfaz exclusivamente digital de vídeo y audio de alta definición.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) DisplayPort</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    DisplayPort es una interfaz digital de alta velocidad.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) VGA (D-Sub 15)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conector VGA convencional (D-Sub de 15 pines con plástico azul) transmite únicamente componentes de vídeo analógicas RGB.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) DVI-D</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    DVI-D es la variante de DVI que emite señal puramente digital.
  </div>
</details>

---

### Pregunta 54
¿Qué interfaz gráfica de salida destaca por transmitir señales digitales de vídeo en alta definición y audio de alta fidelidad de forma simultánea a través del mismo cable?

<details class="quiz-option incorrect">
  <summary>A) VGA</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VGA no transmite señal de audio, solo vídeo analógico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) S-Video</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    S-Video solo transmite luminancia y crominancia de vídeo analógico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) RCA Vídeo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    RCA vídeo (conector amarillo) solo transmite vídeo compuesto analógico sin audio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) HDMI</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    HDMI (High-Definition Multimedia Interface) unifica la transmisión de vídeo digital no comprimido y audio multicanal en un solo conector.
  </div>
</details>

---

### Pregunta 55
¿Qué conjunto de bibliotecas de programación (API) multiplataforma y estándar abierto fue desarrollado originalmente por Silicon Graphics para la aceleración gráfica 2D y 3D?

<details class="quiz-option incorrect">
  <summary>A) Microsoft DirectX</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Microsoft DirectX es una colección de APIs propietaria exclusiva para sistemas Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) OpenGL</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    OpenGL es una especificación estándar y libre multiplataforma para el renderizado de gráficos 2D/3D creada por Silicon Graphics.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Vulkan Direct</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Vulkan Direct" es un término inexistente (Vulkan es el sucesor de OpenGL de Khronos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) CUDA Express</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CUDA es una plataforma de cómputo paralelo exclusiva de la marca NVIDIA.
  </div>
</details>

---

### Pregunta 56
¿Cuál de las siguientes interfaces de expansión sobre la placa base es el estándar actual utilizado por las tarjetas gráficas modernas de alto rendimiento?

<details class="quiz-option incorrect">
  <summary>A) ISA de 16 bits</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ISA es un bus totalmente obsoleto desde los años 90.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) PCI convencional de 32 bits</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PCI convencional se quedó obsoleto por compartir ancho de banda con otros dispositivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) AGP 8x</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AGP fue sustituido completamente por PCI-Express a mediados de los años 2000.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) PCI-Express x16</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las tarjetas gráficas actuales emplean ranuras PCI-Express de 16 líneas (x16) debido a su enorme ancho de banda bidireccional.
  </div>
</details>

---

### Pregunta 57
¿Qué componente de la tarjeta de sonido es el procesador digital especializado encargado de realizar las tareas de gestión, compresión, descompresión y efectos de audio sin sobrecargar la CPU?

<details class="quiz-option incorrect">
  <summary>A) ADC (Analog-to-Digital Converter)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El ADC convierte la onda analógica recibida por el micrófono en muestras digitales.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) DSP (Digital Signal Processor)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El DSP es el microprocesador dedicado de la tarjeta de sonido que ejecuta el procesamiento de señales de audio digital en tiempo real.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) DAC (Digital-to-Analog Converter)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El DAC convierte las muestras digitales registradas en sonido analógico para altavoces.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sintetizador FM</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sintetizador FM es un método de generación de ondas de instrumentos musicales.
  </div>
</details>

---

### Pregunta 58
Cuando deseamos conectar un micrófono al conector minijack de una tarjeta de sonido para grabar voz, ¿qué circuito interno se encarga de transformar esa onda de presión analógica en valores binarios?

<details class="quiz-option incorrect">
  <summary>A) El DAC (Digital to Analog Converter).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El DAC realiza el proceso opuesto (de digital a analógico para la salida de auriculares).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El ADC (Analog to Digital Converter).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conversor analógico-digital (ADC) toma muestras de voltaje del micrófono a un ritmo constante para generar la secuencia de ceros y unos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El conmutador de la fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conmutador de la fuente conmuta líneas de energía eléctrica de la red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El reloj del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El reloj marca pulsos a la CPU pero no realiza conversiones de ondas de audio.
  </div>
</details>

---

### Pregunta 59
En la especificación de un sistema de sonido envolvente 5.1, ¿qué función realiza y qué representa específicamente el dígito ".1"?

<details class="quiz-option incorrect">
  <summary>A) Indica que posee una sola entrada de micrófono.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los canales definen las salidas de audio hacia los altavoces, no el número de micrófonos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Representa la presencia de un canal dedicado a bajas frecuencias transmitidas hacia un altavoz subwoofer.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la nomenclatura de sonido multicanal, el número decimal (ej. .1) indica el canal LFE (Low Frequency Effects) diseñado para el subwoofer.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Indica que el sistema utiliza un solo cable de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los conectores de audio no determinan el número de cables de la fuente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Significa que tiene 1 segundo de retraso en la señal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El número no hace referencia a tiempos de latencia o retardo.
  </div>
</details>

---

### Pregunta 60
¿Qué protocolo estándar se utiliza en tarjetas de sonido para la comunicación e interconexión de instrumentos musicales electrónicos y sintetizadores mediante mensajes digitales de notas?

<details class="quiz-option incorrect">
  <summary>A) S/PDIF</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    S/PDIF es una interfaz de transmisión de audio digital (óptica o coaxial), no un protocolo de instrumentos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) MIDI (Musical Instrument Digital Interface)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    MIDI es el estándar que transmite instrucciones de eventos musicales (nota activada, tono, volumen, velocidad) entre instrumentos y el ordenador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) BNC Audio</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BNC es un tipo de conector metálico coaxial utilizado en vídeo o redes antiguas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) RCA Estéreo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    RCA estéreo son conectores de transmisión analógica de dos canales (izq/der).
  </div>
</details>

---

### Pregunta 61
¿Qué tipo de tarjeta de expansión se utiliza en el entorno profesional o de videovigilancia para capturar señales analógicas procedentes de cámaras e ingresarlas digitalizadas al ordenador mediante conectores de rosca metálicos?

<details class="quiz-option incorrect">
  <summary>A) Tarjeta sintonizadora de TV satélite.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sintonizadora de TV sirve para la señal de televisión comercial (DVB-T/S).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Tarjeta capturadora de vídeo con conectores BNC.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las tarjetas capturadoras profesionales emplean conectores coaxiales BNC para garantizar un acople firme de la señal de vídeo analógico sin interferencias.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Tarjeta de red Gigabit RJ45.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tarjeta de red RJ45 transmite datos de red de ordenadores, no vídeo directo BNC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Módem telefónico RJ11.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El módem RJ11 es para comunicación analógica mediante par trenzado telefónico.
  </div>
</details>

---

### Pregunta 62
Al clasificar las redes de ordenadores según su alcance geográfico, ¿cómo se denomina a la red privada de extensión reducida que abarca una oficina, un aula o un hogar?

<details class="quiz-option incorrect">
  <summary>A) MAN (Metropolitan Area Network)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una MAN abarca una extensión metropolitana o municipio entero.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) WAN (Wide Area Network)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una WAN abarca grandes distancias continentales o mundiales (como Internet).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) LAN (Local Area Network)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una LAN es una red de ámbito local limitada a una casa, aula o edificio, administrada de forma privada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) PAN Global</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "PAN Global" es una contradicción de términos; PAN es una red de área personal (pocos metros).
  </div>
</details>

---

### Pregunta 63
¿Qué tipo de red geográfica interconecta diversos edificios de administración pública o sedes dentro de un mismo municipio o ciudad?

<details class="quiz-option incorrect">
  <summary>A) LAN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una LAN no puede extenderse de forma pública por las vías del municipio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) MAN</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La red de área metropolitana (MAN) da cobertura a una entidad geográfica del tamaño de un municipio o infraestructura de ciudad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) WAN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La WAN se aplica a redes de alcance global que interconectan países o continentes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SAN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SAN (Storage Area Network) es una red dedicada exclusivamente al almacenamiento de datos.
  </div>
</details>

---

### Pregunta 64
¿Cómo se denomina la dirección física, única e inalterable que el fabricante graba en la memoria ROM de la Tarjeta de Interfaz de Red (NIC)?

<details class="quiz-option incorrect">
  <summary>A) Dirección IP dinámica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La dirección IP es una dirección lógica asignada por software en la capa de red que puede cambiar.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Dirección MAC (Media Access Control).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La dirección MAC es un identificador numérico hexadecimal de 48 bits grabado de fábrica en la ROM de cada tarjeta de red para identificarla en el nivel de enlace.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Máscara de subred.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La máscara de subred define el rango de red e hosts en el protocolo IP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Puerta de enlace predeterminada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La puerta de enlace es la IP del router de salida a otras redes.
  </div>
</details>

---

### Pregunta 65
¿Qué conector estándar de 8 pines de plástico transparente se utiliza en los extremos de los cables de red de par trenzado (UTP/STP) para conectarse a la tarjeta NIC?

<details class="quiz-option incorrect">
  <summary>A) Conector BNC</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BNC es un conector metálico coaxial utilizado en redes antiguas o vídeo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Conector RJ11</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    RJ11 es el conector de 4 contactos usado en la telefonía fija tradicional.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Conector RJ45</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conector RJ45 es la interfaz estándar de 8 contactos empleada en las redes Ethernet cableadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conector MiniJack</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MiniJack de 3.5 mm es un conector de señal de audio analógico.
  </div>
</details>

---

### Pregunta 66
¿Qué función cumplen los diodos LED integrados junto al conector RJ45 de una tarjeta de red?

<details class="quiz-option incorrect">
  <summary>A) Aumentar la potencia del Wi-Fi en un 20%.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los leds del conector RJ45 solo sirven para la red cableada, no afectan al Wi-Fi.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Indicar visualmente el estado del enlace (conexión física) y la actividad de envío/recepción de datos o velocidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un led fijo (Link) confirma que existe enlace eléctrico con el switch/router, mientras que un led parpadeante (Activity) señala el tráfico activo de paquetes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Proteger la tarjeta de red de las cargas electrostáticas del usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los leds no son elementos de protección contra descargas electrostáticas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Alimentar la memoria RAM de la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los leds consumen miliamperios de la placa base; no suministran energía a la RAM.
  </div>
</details>

---

### Pregunta 67
¿Qué es un "Driver" o controlador de dispositivo dentro del sistema operativo?

<details class="quiz-option incorrect">
  <summary>A) Un programa de aplicación para editar imágenes en 3D.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un programa de edición gráfica (ej. Photoshop) es software de aplicación, no un driver.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un archivo o conjunto de archivos facilitado por el fabricante que permite al sistema operativo interpretar, comunicarse y gestionar el hardware.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El driver es la capa de software intermediaria que traduce las órdenes genéricas del sistema operativo en instrucciones específicas reconocibles por el controlador del dispositivo físico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un componente metálico que disipa el calor de la fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El disipador es una pieza de hardware; el driver es software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una rutina de la BIOS que limpia la CMOS al encender.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La rutina de limpieza de CMOS no tiene relación con el driver de un componente.
  </div>
</details>

---

### Pregunta 68
¿Qué ocurre en el Administrador de Dispositivos del sistema operativo cuando se instala una tarjeta de expansión cuyo driver no ha sido instalado aún?

<details class="quiz-option incorrect">
  <summary>A) El ordenador explota inmediatamente por sobrecalentamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de un driver de software no genera accidentes físicos destructivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El dispositivo aparece marcado con un icono de advertencia (símbolo amarillo de exclamación o dispositivo desconocido) y sus funciones no estarán disponibles.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema operativo detecta la presencia física del Plug and Play pero, al carecer del controlador adecuado para comunicarse, lo marca como desconocido o con error de controlador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se desinstala automáticamente el sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de un driver no afecta a la instalación del sistema operativo en el disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El monitor se apaga y pasa a modo suspensión permanente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Solo dejará de funcionar la tarjeta no reconocida; el resto del sistema opera con normalidad.
  </div>
</details>

---

### Pregunta 69
¿En qué color de conector minijack de la tarjeta de sonido estándar se deben enchufar los altavoces o auriculares principales (salida de línea estéreo)?

<details class="quiz-option incorrect">
  <summary>A) Azul</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector azul identifica la entrada de línea (Line In) para fuentes de audio externas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Rosa</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector rosa identifica la entrada dedicada para micrófono (Mic In).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Verde</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Según la norma de colores PC 99, el minijack verde claro identifica la salida de línea principal (Line Out) para altavoces estéreo o auriculares.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Negro</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector negro se usa para la salida de altavoces traseros en sistemas envolventes.
  </div>
</details>

---

### Pregunta 70
¿Qué tipo de conector RCA de color amarillo se utiliza en algunas tarjetas de captura para la entrada de vídeo analógico compuesto?

<details class="quiz-option correct">
  <summary>A) RCA Vídeo Compuesto</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El código de color estandarizado del sistema RCA asigna el conector amarillo a la señal de vídeo compuesto analógico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) RCA Audio Izquierdo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector RCA de audio canal izquierdo es de color blanco (o negro).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) RCA Audio Derecho</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector RCA de audio canal derecho es de color rojo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) S/PDIF Coaxial</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    S/PDIF coaxial suele ser de color naranja o negro.
  </div>
</details>

---

### Pregunta 71
¿Qué ventaja aporta una tarjeta de red Wi-Fi con estándar de doble banda (2,4 GHz y 5 GHz) respecto a una tradicional de 2,4 GHz únicamente?

<details class="quiz-option incorrect">
  <summary>A) Que no requiere antena para comunicarse.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La banda de 5 GHz requiere igualmente antenas de emisión/recepción.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que permite conectarse a la banda de 5 GHz, ofreciendo mayor velocidad y menor saturación de interferencias.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La frecuencia de 5 GHz dispone de mayor ancho de banda y canales que no se solapan, evitando el colapso típico de la banda de 2,4 GHz saturada por Bluetooth y microondas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que duplica el tamaño del disco duro SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las tarjetas Wi-Fi no tienen relación con la capacidad de los discos duros.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que no consume energía eléctrica del bus PCI-Express.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Toda tarjeta PCI-Express consume energía de las líneas de la placa base.
  </div>
</details>

---

### Pregunta 72
¿Qué componente de la arquitectura de la tarjeta de sonido se encarga de generar sonidos sintetizados a partir de tablas de ondas grabadas (WaveTable)?

<details class="quiz-option incorrect">
  <summary>A) La VRAM</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La VRAM se utiliza para el procesamiento y almacenamiento de gráficos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El Sintetizador de la tarjeta de sonido</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sintetizador interno recrea el sonido de instrumentos reales leyendo muestras guardadas en memoria (WaveTable) al recibir mensajes MIDI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La máscara I/O Shield</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La máscara I/O Shield es la chapa metálica embellecedora trasera del chasis.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El puente norte (Northbridge)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Northbridge comunica la CPU con la RAM y el puerto de vídeo.
  </div>
</details>

---

### Pregunta 73
En los discos duros magnéticos, ¿qué se entiende por "Tiempo de Búsqueda" (Seek Time)?

<details class="quiz-option incorrect">
  <summary>A) El tiempo que tarda la corriente eléctrica en llegar a la fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La corriente eléctrica se desplaza casi a la velocidad de la luz en los conductores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El tiempo medio que tarda el cabezal de lectura/escritura en desplazarse desde su posición actual hasta posarse sobre la pista deseada.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Seek Time mide la latencia mecánica necesaria para el movimiento radial del brazo del actuador hasta situar el cabezal en la pista objetivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El tiempo que tarda el sistema operativo en formatear un volumen.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tiempo de formateo depende de la velocidad de escritura global y la estructura lógica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La velocidad de descarga de archivos desde Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La velocidad de descarga depende del ancho de banda del proveedor de Internet y de la red.
  </div>
</details>

---

### Pregunta 74
¿Qué diferencia básica existe en el funcionamiento de la velocidad de rotación entre el modo CLV (Velocidad Lineal Constante) y el modo CAV (Velocidad Angular Constante) en unidades ópticas?

<details class="quiz-option correct">
  <summary>A) En CLV el disco varía sus revoluciones según la posición del cabezal para mantener la transferencia de datos constante; en CAV el disco gira siempre a revoluciones por minuto constantes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    CLV ajusta la rotación del motor (más rápido en pistas internas, más lento en externas) para que el láser lea la misma longitud de pista por segundo. CAV mantiene fijas las RPM del motor, por lo que la transferencia es más alta en el borde exterior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En CLV el disco gira a 10.000 RPM y en CAV permanece detenido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las unidades ópticas no alcanzan 10.000 RPM y en CAV el disco nunca está detenido durante la lectura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CLV se utiliza en discos duros SSD y CAV en pendrives USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los SSD y pendrives son memorias en estado sólido sin partes móviles ni rotación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) CAV es un formato exclusivo de tarjetas de sonido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CAV es un modo mecánico de unidades de disco óptico, no un formato de sonido.
  </div>
</details>

---

### Pregunta 75
¿Qué conector analógico de vídeo transmite la señal separando la información de brillo (luminancia - Y) y color (crominancia - C) en cuatro pines de señal?

<details class="quiz-option incorrect">
  <summary>A) HDMI</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HDMI es una interfaz exclusivamente digital.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) S-Video (Mini-DIN 4)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El conector S-Video (Separated Video) mejora la calidad analógica respecto al vídeo compuesto al enviar las señales Y y C por conductores separados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) DisplayPort</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    DisplayPort es una interfaz digital de alta velocidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conector Molex</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector Molex es una toma de corriente de la fuente de alimentación.
  </div>
</details>

---

### Pregunta 76
¿Por qué las unidades de estado sólido (SSD) ofrecen tiempos de acceso significativamente menores que los discos duros magnéticos convencionales (HDD)?

<details class="quiz-option incorrect">
  <summary>A) Porque giran a más de 15.000 revoluciones por minuto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los SSD son memorias de semiconductores estáticas y no giran a ninguna revolución.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque carecen de componentes mecánicos móviles y el acceso a las celdas de memoria es estrictamente electrónico y directo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al no depender de motores de rotación ni de brazos con cabezales que deban desplazarse, la latencia de acceso a los chips Flash es casi instantánea (fracciones de milisegundo).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque utilizan un rayo láser de color azul para leer los datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La lectura por láser azul es propia del Blu-ray, no de los SSD.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque no requieren conectarse a la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los SSD necesitan estar conectados al bus de la placa base (puertos SATA o M.2 PCIe) para transmitir los datos.
  </div>
</details>

---

### Pregunta 77
¿Qué ocurre si se conecta una tarjeta gráfica que requiere alimentación suplementaria de la fuente mediante un cable de 8 pines PCIe y dicho cable se deja desenchufado?

<details class="quiz-option incorrect">
  <summary>A) La tarjeta funcionará normalmente sin ningún inconveniente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tarjeta no podrá operar correctamente debido a la falta de corriente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La placa base no emitirá imagen en el monitor o mostrará un aviso de error de falta de energía para la GPU durante el POST.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las GPU de alto rendimiento consumen más de los 75 W que puede suministrar la ranura PCIe. Sin el cable suplementario de la fuente, la tarjeta no puede inicializar el chip gráfico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El disco duro se borrará inmediatamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de energía en la GPU no altera la memoria no volátil del disco duro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Aumentará automáticamente la resolución a 4K.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sin energía no hay renderizado de vídeo de ninguna resolución.
  </div>
</details>

---

### Pregunta 78
¿Qué tecnología de red inalámbrica permite crear redes de área local (WLAN) utilizando ondas de radio en lugar de cables de par trenzado?

<details class="quiz-option incorrect">
  <summary>A) Bluetooth PAN</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Bluetooth es un protocolo para redes de área personal (PAN) de muy corto alcance (periféricos).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Wi-Fi (estándar IEEE 802.11)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar IEEE 802.11 (comercialmente conocido como Wi-Fi) define la transmisión y recepción de datos por radiofrecuencia para redes locales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ethernet RJ45</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ethernet RJ45 es el estándar para redes de área local mediante cable físico de cobre.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Fibra óptica plástica</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fibra óptica es un medio guiado por impulsos de luz a través de filamentos de vidrio/plástico.
  </div>
</details>

---

### Pregunta 79
¿Cuál de las siguientes afirmaciones sobre el protocolo de sonido MIDI es CORRECTA?

<details class="quiz-option incorrect">
  <summary>A) Graba y transmite muestras de voz real del cantante comprimidas en MP3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MIDI no es una grabación de voz analógica o comprimida en audio digital real.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) No transmite el audio grabado en sí, sino una secuencia de instrucciones codificadas (nota pulsada, tono, duración, fuerza) que el sintetizador reproduce.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los archivos y señales MIDI son simplemente particellas o códigos digitales pequeños; el sonido real lo genera el instrumento o software sintetizador que recibe la orden.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Requiere cables de antena BNC de alta frecuencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Emplea conectores DIN de 5 pines o conexiones USB y minijack, jamás cables coaxiales BNC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un conector de corriente eléctrica para la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MIDI es un protocolo de datos de eventos musicales, no de transporte de tensión de red.
  </div>
</details>

---

### Pregunta 80
Caso Práctico: Un técnico instala un segundo disco duro de 2 TB en un equipo con placa base compatible. Al iniciar el sistema operativo, el nuevo disco no aparece disponible en el explorador de archivos. Al abrir el Administrador de Discos, comprueba que la unidad aparece identificada como "Espacio no asignado y sin inicializar". ¿Cuál es el procedimiento adecuado para poner el disco en servicio?

<details class="quiz-option incorrect">
  <summary>A) Reemplazar inmediatamente el cable de alimentación de la fuente por uno de 220 V.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las unidades de disco trabajan con líneas de +5 V y +12 V continuas; un cable de 220 V alternos las destruirá.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Inicializar el disco (eligiendo el esquema de particionado MBR o GPT), crear una partición o volumen y asignarle un sistema de archivos (ej. NTFS).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un disco recién salido de fábrica no posee estructura lógica. Para ser utilizable requiere inicializarse con una tabla de particiones (GPT/MBR), particionarse y formatearse con un sistema de archivos soportado por el SO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Actualizar la BIOS de la placa base mediante borrado físico de la pila CR2032.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si el disco ya aparece en el Administrador de Discos del SO, significa que la BIOS ya lo detecta físicamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Limpiar la superficie de los platos del disco con un paño húmedo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Abrir un disco duro sellado fuera de una sala limpia destruye los platos por contaminación de polvo al instante.
  </div>
</details>
