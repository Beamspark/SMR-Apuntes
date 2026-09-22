# Test de Autoevaluación: Tema 9

[← Volver al Tema 9: Nuevas tendencias](../tema-9.md)

---

### Pregunta 1
¿En qué consiste exactamente la técnica de Overclocking aplicada a un microprocesador?

<details class="quiz-option incorrect">
  <summary>A) En reducir el voltaje de la memoria RAM para disminuir la temperatura de la caja.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reducir el voltaje de la memoria es una técnica de eficiencia llamada undervolting, no overclocking.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En incrementar la frecuencia de reloj del procesador o su factor multiplicador desde la BIOS para aumentar su velocidad de proceso.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El overclocking es el aumento de la frecuencia de trabajo del procesador o de su multiplicador interno (configurado habitualmente desde la BIOS) para forzar un rendimiento superior al especificado de fábrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En formatear el disco duro para que lea las instrucciones a doble velocidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formateo de discos organiza la estructura de archivos, no altera la frecuencia física de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En instalar dos sistemas operativos en distintas particiones MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Instalar dos sistemas operativos es una configuración de arranque dual (Dual Boot).
  </div>
</details>

---

### Pregunta 2
¿Qué requerimiento indispensable debe comprobarse en la fuente de alimentación al realizar Overclocking en el equipo?

<details class="quiz-option incorrect">
  <summary>A) Que suministre corriente alterna de 220 V directamente sobre las ranuras RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Suministrar 220 V AC a los componentes internos destruiría el equipo y causaría electrocución.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que sea capaz de proporcionar los 12 V de forma estable y sostenida ante el incremento de demanda de la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El incremento de frecuencia y consumo eléctrico de la CPU exige que la línea de +12 V de la fuente de alimentación mantenga el voltaje estable sin caídas que provoquen reinicios o inestabilidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que carezca de ventilador interno para evitar turbulencias.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El incremento térmico del overclocking requiere fuentes bien refrigeradas con ventilación activa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que su factor de potencia sea exactamente igual a cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un factor de potencia de cero significaría una ineficiencia total del suministro eléctrico.
  </div>
</details>

---

### Pregunta 3
¿Qué ventaja térmica principal aporta la refrigeración líquida (watercooling) respecto a los disipadores convencionales de aire?

<details class="quiz-option incorrect">
  <summary>A) Que no requiere tubos ni bombas para mover el fluido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los sistemas de refrigeración líquida constan obligatoriamente de bloque, bomba, tubos y radiador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que aprovecha la mayor capacidad de absorción y transferencia térmica del agua frente al aire, disipando mejor el calor en overclocking.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El agua tiene un calor específico y conductividad superiores a los del aire, lo que permite transportar y evacuar el calor de forma mucho más eficiente desde el bloque de la CPU hacia el radiador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que elimina la necesidad de utilizar pasta térmica sobre el procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pasta térmica sigue siendo imprescindible entre el IHS del procesador y el bloque de agua.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que funciona sin consumo eléctrico de la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La bomba de agua y los ventiladores del radiador consumen energía de las líneas de la fuente.
  </div>
</details>

---

### Pregunta 4
¿Cómo se denominan comercialmente las tecnologías de doble tarjeta gráfica desarrolladas por NVIDIA y AMD respectivamente?

<details class="quiz-option incorrect">
  <summary>A) NVIDIA Crossfire y AMD SLI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Nombres cruzados inversamente entre fabricantes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) NVIDIA SLI y AMD Crossfire.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    NVIDIA denomina a su solución multitarjeta SLI (Scalable Link Interface), mientras que AMD la comercializa bajo el nombre Crossfire.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) NVIDIA DirectX y AMD OpenGL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    DirectX y OpenGL son bibliotecas de programación gráfica (APIs), no arquitecturas multitarjeta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) NVIDIA CUDA y AMD OpenCL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CUDA y OpenCL son arquitecturas de cómputo paralelo en GPU.
  </div>
</details>

---

### Pregunta 5
¿Qué diferencia física existe en el modo de comunicación y sincronización entre la tecnología NVIDIA SLI y la tecnología AMD Crossfire?

<details class="quiz-option correct">
  <summary>A) SLI necesita un puente físico de interconexión entre tarjetas, mientras que Crossfire puede sincronizarse directamente mediante el bus PCI-Express.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La arquitectura SLI de NVIDIA requiere un puente impreso (bridge) unido a la parte superior de las tarjetas, mientras que las versiones modernas de Crossfire intercambian datos directamente por las líneas del bus PCI-E.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) SLI utiliza cables HDMI externos y Crossfire utiliza cables VGA analógicos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las conexiones externas de monitor no intervienen en el puente de sincronización interno.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Crossfire exige dos fuentes de alimentación independientes y SLI funciona con pilas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas tecnologías se alimentan mediante los conectores PCIe de la fuente de alimentación del PC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SLI se conecta a la toma de red RJ45 y Crossfire a la toma de audio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las comunicaciones multitarjeta son internas a la placa base, ajenas a las interfaces de red o audio.
  </div>
</details>

---

### Pregunta 6
¿Qué porcentaje aproximado de ganancia de rendimiento real aporta la instalación de una segunda tarjeta gráfica respecto a disponer de una sola?

<details class="quiz-option incorrect">
  <summary>A) Incrementa el rendimiento en un 100% exacto (el doble).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No duplica el rendimiento al 100% debido a la latencia de gestión paralela.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Aporta una mejora estimada entre el 30% y el 50%.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Debido a las pérdidas por sincronización y gestión de renderizado compartido, dos tarjetas gráficas entregan entre un 30% y un 50% más de rendimiento que una única tarjeta individual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Reduce el rendimiento a la mitad por sobrecalentamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque aumenta el calor, si la caja está bien ventilada el rendimiento global siempre sube.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Aumenta el rendimiento en un 500%.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cifra desproporcionada que no se corresponde con la física del procesamiento paralelo en GPU.
  </div>
</details>

---

### Pregunta 7
¿Qué define conceptualmente a un equipo de tipo "Barebone"?

<details class="quiz-option incorrect">
  <summary>A) Un ordenador de gran tamaño que se vende exclusivo para servidores en rack.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los barebones destacan por sus dimensiones reducidas para sobremesa o salón, no por ser racks masivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Una solución compacta semi-ensamblada que suele incluir la caja, la fuente especial y la placa base preinstalada de fábrica.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un Barebone es una plataforma base de factor de forma reducido que integra la carcasa a medida, la fuente adaptada y la placa base, correspondiendo al usuario añadir la CPU, RAM y almacenamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un portátil que carece de pantalla táctil y funciona sin batería.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un formato de ordenador de sobremesa reducido, no una categoría de portátil despiezado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un disco duro externo con interfaz USB 2.0.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un sistema informático semi-ensamblado, no un simple periférico de disco externo.
  </div>
</details>

---

### Pregunta 8
¿Qué significan las siglas HTPC y a qué tipo de equipo hacen referencia?

<details class="quiz-option incorrect">
  <summary>A) High Technology Power Computer; ordenadores para cálculo científico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es la denominación de súper-ordenadores de cálculo masivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Home Theater Personal Computer; equipos diseñados como centros multimedia de salón (Media Center).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    HTPC significa Home Theater Personal Computer, orientados a la reproducción de cine, música y contenidos digitales integrados en el salón de casa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Hard Touch Portable Console; consolas portátiles de mano.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No hace referencia a consolas portátiles táctiles.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Hybrid Terminal Process Control; terminales de control de tráfico aéreo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Término ajeno al ámbito del hardware multimedia doméstico.
  </div>
</details>

---

### Pregunta 9
¿Cuáles son dos de las características de diseño más importantes que deben cumplir los equipos HTPC para integrarse en el hogar?

<details class="quiz-option incorrect">
  <summary>A) Funcionar con motores de gasolina y emitir 90 dB de ruido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los componentes electrónicos son eléctricos y deben ser muy silenciosos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ofrecer un tamaño reducido con estética atractiva y ser extremadamente silenciosos durante la reproducción.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para no molestar durante el visionado de películas o escucha de música, los HTPC priorizan un nivel de ruido mínimo (bajo nivel sonoro) y un chasis elegante de reducidas dimensiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Utilizar cuatro tarjetas gráficas en paralelo y tres fuentes de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Configurar múltiples tarjetas aumentaría el ruido y el volumen de la caja, rompiendo el concepto HTPC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Carecer de conexiones de red y de salida de vídeo HDMI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Necesitan imperativamente salidas digitales como HDMI y conectividad de red para consumir streaming.
  </div>
</details>

---

### Pregunta 10
¿Qué componentes incluye internamente un reproductor multimedia tipo Android TV para operar de forma independiente?

<details class="quiz-option incorrect">
  <summary>A) Únicamente un cable de cobre sin semiconductores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un dispositivo electrónico activo integrado por circuitos semiconductores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Procesador propio, almacenamiento para aplicaciones, lector de tarjetas sólidas y sistema operativo dedicado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un Android TV es un microordenador completo dotado de SoC (procesador + GPU), memoria Flash de almacenamiento, ranura de expansión y sistema operativo Android optimizado para TV.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Una lectora de discos ópticos de Blu-ray de 5,25 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No utiliza unidades ópticas voluminosas; su almacenamiento es 100% en estado sólido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una batería de plomo de 12 V de automóvil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se alimenta mediante un pequeño adaptador de corriente continua (DC).
  </div>
</details>

---

### Pregunta 11
En el ámbito de la informática móvil, ¿de qué tipo de dispositivo proviene históricamente el concepto actual de Smartphone?

<details class="quiz-option incorrect">
  <summary>A) De las calculadoras mecánicas de manivela.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las calculadoras mecánicas son antecedentes lejanos de la computación numérica, no de la telefonía.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) De la evolución e hibridación entre las antiguas PDA (Personal Digital Assistant) y los teléfonos móviles con acceso a Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El teléfono inteligente o smartphone nace al fusionar las capacidades de agenda organizadora y gestión de documentos de las PDA con las funciones de comunicación móvil e Internet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) De los monitores CRT de tubo de rayos catódicos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los monitores CRT son periféricos de visualización de sobremesa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) De las tarjetas perforadas de primera generación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las tarjetas perforadas eran soportes de almacenamiento físico de datos del siglo XX.
  </div>
</details>

---

### Pregunta 12
¿En qué consiste el sistema de posicionamiento global GPS integrado en los dispositivos móviles modernos?

<details class="quiz-option incorrect">
  <summary>A) En una red terrestre de cable coaxial enterrado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una tecnología de comunicación e interconexión inalámbrica vía satélite.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En una red formada por 24 satélites que orbitan la Tierra para calcular las coordenadas y el camino a seguir.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El GPS es una constelación espacial de 24 satélites operativos en órbita que emiten señales que permiten a los receptores triangular su posición exacta en el planeta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En una antena de radio que detecta la posición de los routers Wi-Fi del vecino.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque existe la geolocalización por Wi-Fi (A-GPS), el sistema GPS nativo depende estrictamente de la red espacial.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En un circuito de infrarrojos que solo funciona a menos de dos metros de distancia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El GPS tiene alcance global y no depende de sensores de infrarrojos de corto alcance.
  </div>
</details>

---

### Pregunta 13
¿Qué características diferencian a un ordenador convertible (Tablet Laptop) de un portátil estándar?

<details class="quiz-option correct">
  <summary>A) Posee pantalla táctil y una bisagra giratoria (o teclado desmontable) que permite plegar la pantalla sobre la base para usarlo como tableta.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los convertibles combinan la productividad del teclado físico de un portátil con la versatilidad de la pantalla táctil giratoria o abatible 360° para actuar como tableta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Requiere estar conectado permanentemente a una toma de 220 V para no apagarse.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Disponen de baterías internas que otorgan autonomía de trabajo en movilidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) No permite instalar ningún sistema operativo ni aplicaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ejecutan sistemas operativos completos de escritorio (Windows, ChromeOS) o móviles.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Pesa más de 20 kilogramos y utiliza discos magnéticos de 5,25 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son equipos ligeros y ultracompactos diseñados específicamente para la movilidad.
  </div>
</details>

---

### Pregunta 14
En el ámbito de la lectura digital, ¿qué distinción precisa existe entre los términos e-book y e-reader?

<details class="quiz-option incorrect">
  <summary>A) E-book es el dispositivo físico de lectura y e-reader es el cable de carga.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde el contenido digital con el soporte o periférico de carga.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) E-book hace referencia al libro digital o archivo de contenido, mientras que e-reader es el dispositivo lector físico con pantalla de tinta electrónica.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El e-book es el contenido editorial codificado en un archivo digital (epub, pdf), mientras que el e-reader es el aparato o lector físico diseñado para mostrarlo mediante tinta electrónica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Son dos términos idénticos que nombran a la batería del móvil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tienen significados distintos (software de lectura/archivo vs hardware lector).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) E-reader es el software de la BIOS y e-book la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tienen relación con la BIOS del PC ni con los módulos RAM.
  </div>
</details>

---

### Pregunta 15
¿De qué término inglés procede la palabra coloquial Modding y cuál es su significado en informática?

<details class="quiz-option incorrect">
  <summary>A) Proviene de Mode; significa cambiar la resolución de pantalla en Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se limita a cambiar opciones de pantalla en el sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Proviene de Modify (modificar); se refiere al arte de personalizar física y estéticamente la caja e interior de un ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Modding deriva de modify y engloba todas las técnicas artesanales o comerciales de modificación visual, estética o funcional de la caja y piezas del PC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Proviene de Modern; significa comprar componentes caros en la tienda.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modding implica trabajo de modificación personal, no la simple compra comercial.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Proviene de Model; hace referencia a crear modelos en 3D para impresoras.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La modelación 3D es una tarea de diseño por ordenador, no la personalización del chasis.
  </div>
</details>

---

### Pregunta 16
¿Cuál de las siguientes intervenciones es un ejemplo clásico de personalización de PC o Modding?

<details class="quiz-option incorrect">
  <summary>A) Sustituir un cable SATA roto por uno nuevo idéntico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar un cable averiado por uno idéntico es mantenimiento correctivo estándar.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Instalar paneles laterales transparentes (metacrilato/cristal templado), iluminación LED interior, refrigeración personalizada o sensores de temperatura.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modding busca destacar la estética del equipo añadiendo ventanas transparentes, efectos de luz, circuitos de agua personalizados y sondas térmicas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Borrar la papelera de reciclaje del sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Borrar la papelera es mantenimiento lógico rutinario del sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Desconectar el ratón cuando no se utiliza.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Desconectar un periférico no es una labor de modificación o personalización del chasis.
  </div>
</details>

---

### Pregunta 17
¿Qué tipo de herramienta es la denominada Dremel y para qué se utiliza habitualmente en los trabajos artesanales de Modding?

<details class="quiz-option incorrect">
  <summary>A) Un soldador de tuberías de fontanería de gran tamaño.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es una herramienta pesada de fontanería para tubos de obra.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Una herramienta giratoria multifunción (minitaladro) que permite taladrar, cortar, lijar, grabar y pulir la chapa o plástico de la caja.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Dremel es un minitaladro rotativo de alta velocidad al que se le adaptan diferentes accesorios (discos de corte, fresas, lijas) para moldear la caja del ordenador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un escáner de virus para la memoria CMOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una herramienta manual mecánica de taller, no un software antivirus.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una llave de vaso para apretar las ruedas del coche.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una herramienta eléctrica de mano para trabajos de precisión sobre chapa y plástico.
  </div>
</details>

---

### Pregunta 18
Además del minitaladro Dremel, ¿qué otras herramientas de taller se emplean habitualmente al realizar modificaciones manuales sobre el chasis?

<details class="quiz-option correct">
  <summary>A) Sierra caladora, alicates, soldador eléctrico y destornilladores.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cortar metacrilato o metal, soldar tiras de leds o modificar cables requiere herramientas de bricolaje técnico como caladoras, soldadores de estaño y alicates.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Pinceles de pintura al óleo y caballete de madera.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los pinceles de óleo no cortan ni adaptan las estructuras metálicas del chasis.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Martillo de demoledor de construcción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las herramientas de impacto pesado destruyen la estructura ligera del chasis informático.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Grapadora de oficina de papel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las grapadoras de papel no tienen capacidad de fijación sobre chapa o polímeros duros.
  </div>
</details>

---

### Pregunta 19
En la documentación técnica de un dispositivo informático, ¿qué diferencia existe entre un "Manual de Usuario" y una "Guía Rápida"?

<details class="quiz-option incorrect">
  <summary>A) El manual incluye únicamente esquemas en blanco y negro y la guía rápida fotos en color.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La diferencia reside en el alcance de los contenidos, no en el color de la impresión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El manual detalla todas las características y funciones avanzadas del producto, mientras que la guía rápida presenta las instrucciones básicas de montaje e instalación esencial en varios idiomas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las guías rápidas (Quick Start Guides) resumen el procedimiento esencial de instalación para una puesta en marcha inmediata, mientras que el manual ofrece la referencia técnica completa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La guía rápida la redacta el usuario y el manual el sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos documentos son elaborados y suministrados por el fabricante del componente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) No existe ninguna diferencia; son dos carpetas vacías del CD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son documentos técnicos esenciales en formato físico o digital (PDF).
  </div>
</details>

---

### Pregunta 20
¿Cuáles son dos de los programas informáticos recomendados en el temario para la maquetación y elaboración de manuales de usuario en formato PDF digitalizado?

<details class="quiz-option incorrect">
  <summary>A) Paint y Bloc de Notas de Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Paint y Bloc de notas carecen de funciones de maquetación avanzada de documentos multipágina.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) PDF Creator y Adobe Acrobat Professional.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La edición y publicación de guías técnicas en formato estándar portátil requiere herramientas especializadas de creación de PDF como Adobe Acrobat o PDF Creator.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MS-DOS Command Prompt y PowerShell.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las consolas de comandos no sirven para el diseño y maquetación gráfica de manuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Windows Media Player y VLC.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son reproductores de vídeo y audio, no procesadores o maquetadores documentales.
  </div>
</details>

---

### Pregunta 21
¿Cuál es la estructura básica recomendada para redactar de forma clara y ordenada un manual técnico de usuario?

<details class="quiz-option correct">
  <summary>A) Portada, encabezado/pie de página, redacción del contenido, índice y cierre/página final.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un manual técnico profesional debe incluir una portada identificativa, maquetación homogénea con encabezados/pies, desarrollo lógico de contenidos e índice para facilitar la consulta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Título en mayúsculas sin texto ni imágenes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un documento sin texto ni gráficos es inútil como guía de aprendizaje.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Código fuente en ensamblador exclusivamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El código ensamblador es para programación a bajo nivel, no para instruir a usuarios o técnicos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una lista de precios de mercado de componentes de segunda mano.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los manuales técnicos de usuario versan sobre el uso y montaje del producto, no sobre listas comerciales.
  </div>
</details>

---

### Pregunta 22
Caso Práctico: Un usuario dedicado al gaming extremo nota que su procesador alcanza temperaturas de 90 °C al ejecutar juegos recientes. Quiere subir la velocidad del chip sin riesgo de quemarlo por aire. ¿Qué solución combinada de la tendencia actual de hardware es la más adecuada?

<details class="quiz-option incorrect">
  <summary>A) Cambiar la caja por una de madera sin orificios de ventilación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El chasis de madera sin ventilación acumularía el calor empeorando el problema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Instalar un sistema de refrigeración líquida (watercooling) que permita disipar eficientemente el calor para realizar overclocking de forma estable.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La refrigeración líquida reduce notablemente la temperatura de la CPU frente a la refrigeración por aire, permitiendo mantener frecuencias más altas (overclocking) dentro de un rango de temperatura seguro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Desconectar la fuente de alimentación y trabajar con la pila CR2032.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pila CR2032 solo mantiene los datos de la CMOS; no alimenta el equipo en funcionamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Llenar el interior de la caja con hielo en cubos directamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hielo al derretirse provocaría un cortocircuito destructivo por agua no destilada en la placa.
  </div>
</details>

---

### Pregunta 23
Caso Práctico: Un técnico debe equipar las pantallas de una sala de juntas donde se proyectarán presentaciones y vídeos en alta definición desde Internet, pero se exige que el reproductor sea diminuto, no haga ruido y se oculte tras el televisor. ¿Qué dispositivo de la tendencia multimedia es el más indicado?

<details class="quiz-option incorrect">
  <summary>A) Una Gran Torre de servidor de 4 unidades de rack.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una Gran Torre es voluminosa, pesada y ruidosa, incompatible con la ocultación tras la pantalla.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un dispositivo de tipo Android TV / Smart Dongle de tamaño reducido, silencioso y con conectividad Wi-Fi.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los dispositivos tipo Android TV o Smart TV cumplen los requisitos de formato ultracompacto, consumo ínfimo, ausencia de ruido mecánico (silenciosos) y capacidad de reproducción en streaming.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un ordenador sobremesa de los años 90 con lector de disquetes de 3,5 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los equipos antiguos son voluminosos y carecen de potencia para procesar vídeo en alta definición e Internet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una consola de juegos de cartucho analógico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las consolas antiguas de cartucho no disponen de conexión a Internet ni reproducción multimedia moderna.
  </div>
</details>

---

### Pregunta 24
Caso Práctico: Un aficionado al modding desea instalar una ventana de metacrilato transparente en el lateral metálico de su caja antigua. Para recortar la chapa con precisión curva en las esquinas, ¿qué herramienta rotativa de precisión debe emplear con sus discos de corte?

<details class="quiz-option incorrect">
  <summary>A) Una cortadora de césped de gasolina.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Maquinaria de jardín totalmente ajena al taller de informática.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un minitaladro multifunción tipo Dremel equipado con disco de corte para metales.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta rotativa Dremel acoplada a un disco de corte para metales es la idónea para realizar cortes limpios y curvos sobre la chapa metálica de las carcasas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un destornillador plano de estrella.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un destornillador aprieta o afloja tornillos, no corta láminas metálicas de chasis.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una tijera escolar de plástico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las tijeras escolares carecen de la dureza necesaria para cortar acero o aluminio.
  </div>
</details>
