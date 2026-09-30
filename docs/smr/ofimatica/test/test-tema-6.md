# Test de Autoevaluación: Tema 6

[← Volver al Tema 6: Manipulación de secuencias de vídeo y audio](../tema-6.md)

---

### Pregunta 1
Un técnico de sonido y vídeo debe explicar la diferencia técnica entre un formato contenedor de vídeo (como .mp4 o .mkv) y un códec de compresión (como H.264 o VP9). ¿Cuál es la definición correcta de cada elemento?

<details class="quiz-option correct">
  <summary>A) El códec es el algoritmo encargado de codificar y descomprimir los flujos de datos de vídeo y audio; el contenedor es la "caja" que empaqueta y sincroniza los flujos codificados junto con los metadatos y subtítulos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el ámbito audiovisual digital, el códec (Coder-Decoder) es el software o algoritmo matemático encargado de comprimir y descomprimir las pistas puras de vídeo y audio. El contenedor (o formato de archivo) es la estructura física de empaquetado que almacena en su interior dichas pistas codificadas, manteniendo la sincronización entre imagen, sonido, pistas de subtítulos y metadatos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El contenedor es el microprocesador físico de la tarjeta gráfica; el códec es el cable HDMI encargado de transmitir la señal al monitor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde conceptos de software de medios con componentes de hardware físico y conectores de vídeo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El códec es una extensión exclusiva de archivos gráficos estáticos sin compresión; el contenedor es un tipo de memoria RAM volátil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los códecs procesan secuencias multimedia continuas y los contenedores son formatos de archivo de almacenamiento, no componentes de memoria RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas entidades son idénticas y la diferencia radica únicamente en si el archivo se almacena en un disco duro HDD o SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son dos conceptos con funciones técnicas totalmente distintas que operan de forma independiente al soporte físico de almacenamiento.
  </div>
</details>

---

### Pregunta 2
Si se graba una secuencia de vídeo en alta definición (HD, 1080p a 24 cuadros por segundo) en bruto (raw), sin aplicar ningún algoritmo de compresión por códec, ¿cuál es el volumen aproximado de espacio de almacenamiento en disco que ocuparía una sola hora de grabación?

<details class="quiz-option incorrect">
  <summary>A) Aproximadamente 1,5 MB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    1,5 MB equivale únicamente al peso de una fotografía comprimida en formato JPEG.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Aproximadamente 234 GB.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La señal de vídeo HD sin comprimir genera un volumen masivo de información. A $1920 \times 1080$ píxeles por fotograma, con profundidad de color de 24 bits y a 24 fps, cada segundo de vídeo consume aproximadamente 65 MB. Multiplicando por 3.600 segundos (1 hora), el tamaño resultante alcanza aproximadamente 234 GB, lo que demuestra la necesidad técnica de emplear códecs de compresión (como H.264) para reducir ese peso a 1-2 GB.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Exactamente 700 MB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    700 MB es la capacidad máxima de un CD-ROM, el cual solo puede alojar vídeo si está fuertemente comprimido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Menos de 10 KB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    10 KB es el tamaño de un archivo de texto plano de unas pocas líneas.
  </div>
</details>

---

### Pregunta 3
Se requiere publicar un vídeo en un portal web corporativo utilizando un estándar abierto de HTML5 sin pagar patentes comerciales. ¿Qué contenedor de vídeo desarrollado como estándar libre soporta los códecs de vídeo VP8/VP9 y el códec de audio Vorbis/Opus?

<details class="quiz-option incorrect">
  <summary>A) AVI</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AVI (Audio Video Interleave) es un contenedor clásico propietario desarrollado por Microsoft en 1992.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) MOV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MOV es el formato contenedor comercial nativo desarrollado por Apple para el reproductor QuickTime.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) WebM</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    WebM es un formato contenedor audiovisual abierto y libre de regalías impulsado por Google y diseñado específicamente para la etiqueta &lt;video&gt; de HTML5 en la web. Utiliza internamente los códecs de vídeo libres VP8 o VP9 y los códecs de audio Vorbis u Opus.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) WMV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WMV (Windows Media Video) es un formato propietario de vídeo comprimido desarrollado por Microsoft.
  </div>
</details>

---

### Pregunta 4
En el programa de edición de vídeo no destructivo OpenShot, ¿qué combinación de teclas de atajo debe presionar el usuario para abrir directamente la ventana de configuración y renderizado final de exportación de vídeo?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + N</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + N crea un proyecto nuevo en blanco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + S guarda el archivo de proyecto activo (.osp).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ctrl + Shift + O</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Shift + O no está asignado a la exportación final de la secuencia de vídeo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ctrl + E</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La combinación de teclas Ctrl + E es el atajo directo en OpenShot para abrir el panel de Exportar vídeo, desde donde se seleccionan el perfil de destino (web, DVD, dispositivo), el formato contenedor, el códec, la resolución y los fotogramas por segundo.
  </div>
</details>

---

### Pregunta 5
Un editor necesita dividir un clip de vídeo largo colocado en la línea de tiempo de OpenShot en dos fragmentos independientes para eliminar un error de locución. ¿Qué herramienta o icono de la barra de herramientas del editor permite realizar este corte preciso sobre el clip?

<details class="quiz-option correct">
  <summary>A) Herramienta de Navaja / Tijeras (Razor Tool).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Herramienta de Navaja / Tijeras (Razor Tool) de OpenShot transforma el puntero del ratón en una línea de corte. Al hacer clic sobre cualquier punto de la franja de un clip en la línea de tiempo, fracciona el elemento en dos bloques totalmente independientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Herramienta de Varita Mágica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La Varita Mágica es una herramienta de selección de color propia de editores de imágenes fijas como GIMP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Herramienta de Transición de Marcador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las transiciones regulan el fundido o desvanecimiento entre dos clips superpuestos, no cortan el archivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Herramienta de Recortado de Lienzo de GIMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un módulo de edición fotográfica perteneciente a otra aplicación.
  </div>
</details>

---

### Pregunta 6
Durante el rodaje de una entrevista entre dos personas, el equipo de producción debe respetar la norma básica del lenguaje audiovisual denominada "Ley de los 180°". ¿Qué consecuencia negativa ocurre en la percepción del espectador si una cámara cruza involuntariamente esa línea imaginaria (eje de acción)?

<details class="quiz-option incorrect">
  <summary>A) El archivo de vídeo se corrompe automáticamente y cambia la extensión a .exe.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un error de lenguaje audiovisual de cámara no modifica los bits ni la estructura de archivos del sistema informático.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Se produce un "salto de eje", provocando que los personajes parezcan mirar hacia la misma dirección o que la posición relativa de la izquierda y la derecha se invierta de forma confusa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Ley de los 180° establece una línea imaginaria (eje de acción) entre los dos sujetos que interactúan. Si la cámara cruza este eje (situándose en el semicírculo opuesto), se produce un salto de eje: la orientación espacial de los personajes se invierte en la pantalla, dando la impresión errónea de que ambos miran hacia el mismo lado y desorientando al espectador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se duplica la frecuencia de refresco pasando de 24 fps a 120 fps de forma instantánea.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tasa de fotogramas por segundo es un parámetro de configuración de la cámara, no se altera por la posición física del eje.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El audio del micrófono pasa a reproducirse en sentido inverso.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La grabación de las pistas de audio es independiente del ángulo visual de encuadre de la lente.
  </div>
</details>

---

### Pregunta 7
Al alternar entre dos tomas consecutivas del mismo sujeto durante la edición de una secuencia, se aplica la "Ley de los 30°". ¿Cuál es el propósito fundamental de esta regla sobre el cambio de ángulo de la cámara?

<details class="quiz-option incorrect">
  <summary>A) Garantizar que el volumen de la pista de audio aumente 30 decibelios entre tomas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tiene ninguna relación con los niveles de ganancia de audio en decibelios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Reducir la resolución de la pantalla para evitar que el ordenador se sobrecaliente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un principio de gramática del lenguaje audiovisual, no una medida de gestión térmica de hardware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Evitar la sensación desagradable de "salto brusco" (jump cut) manteniendo una variación angular suficiente entre planos para que la transición parezca natural.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Ley de los 30° exige que al cambiar de plano sobre el mismo sujeto, el ángulo de la nueva toma varíe al menos 30 grados respecto al plano anterior. Si el cambio es inferior a 30°, el ojo humano no percibe un cambio de encuadre justificado, sino una perturbación visual o parpadeo desagradable denominado "salto de raccord" o jump cut.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Forzar a que la exportación del vídeo se ejecute obligatoriamente en formato .gif.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No impone restricciones sobre los formatos contenedores de exportación.
  </div>
</details>

---

### Pregunta 8
Al diseñar un videotutorial técnico orientado al aprendizaje de un procedimiento informático por parte de los usuarios, ¿cuál es el rango de duración óptimo recomendado para mantener la atención activa del espectador sin causar fatiga?

<details class="quiz-option incorrect">
  <summary>A) Entre 45 y 60 minutos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una hora de vídeo continuo resulta excesiva para una píldora formativa sobre una tarea informática concreta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Exactamente 10 segundos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    10 segundos es un tiempo insuficiente para desarrollar la demostración paso a paso de una aplicación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Entre 2 y 3 horas seguidas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a la duración de seminarios complejos o másteres, no a la estructura de un videotutorial ágil.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Entre 5 y 10 minutos (con un límite máximo recomendado de 15 minutos).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el diseño instruccional multimedia, la curva de atención para videotutoriales de aprendizaje técnico sitúa la duración óptima entre 5 y 10 minutos (alcanzando un límite máximo recomendado de 15 minutos). Los vídeos que superan este umbral sufren una caída drástica en la tasa de retención del usuario.
  </div>
</details>

---

### Pregunta 9
En el montaje profesional de la banda sonora de un vídeo corporativo se requiere organizar el audio en tres pistas independientes: Pista 1 (Diálogos/Voz), Pista 2 (Música de fondo) y Pista 3 (Efectos de sonido/Foley). ¿Por qué es crítico mantener los diálogos en una pista totalmente aislada?

<details class="quiz-option correct">
  <summary>A) Para permitir el reemplazo o doblaje de la voz a otros idiomas sin afectar a la música ni a los efectos de sonido de fondo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Separar los diálogos en una pista independiente de la música y los efectos permite realizar operaciones de internacionalización, postproducción y doblaje. De este modo, se puede sustituir la pista de locución por una voz en otro idioma manteniendo la ambientación sonora original (M&amp;E - Music and Effects) intacta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque los reproductores MP3 bloquean la reproducción si la voz se mezcla con los efectos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los reproductores de audio mezclan sin problemas múltiples señales combinadas en un único canal estéreo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Para convertir automáticamente el vídeo a un archivo de texto plano .txt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aislar la voz no genera de forma automática la transcripción de texto en archivos .txt.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque el estándar HDMI prohíbe emitir voz y música en el mismo canal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cable HDMI transporta audio digital multicanal sin restringir la naturaleza del contenido sonoro.
  </div>
</details>

---

### Pregunta 10
Para grabar la pantalla de un ordenador y elaborar un videotutorial en directo, se utiliza el programa libre OBS Studio. En la ventana principal del programa, ¿dónde se debe configurar la fuente de entrada de vídeo para capturar el escritorio completo del sistema operativo?

<details class="quiz-option incorrect">
  <summary>A) En Filtros &gt; Desenfoque de pantalla.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros aplican efectos gráficos sobre fuentes ya existentes, no crean la captura del escritorio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En la caja de Fuentes (Fuentes &gt; Agregar (+) &gt; Captura de pantalla).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la interfaz de OBS Studio, la composición del lienzo se basa en escenas compuestas por fuentes. Para grabar el escritorio del ordenador, se debe ir al panel Fuentes, hacer clic en el botón de agregar (+) y seleccionar el tipo Captura de pantalla (o Display Capture), eligiendo el monitor deseado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En Ajustes &gt; Idioma &gt; Cambiar tipografía.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Modifica la interfaz de usuario del programa, no la señal de entrada multimedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En el panel de Transiciones de escena &gt; Corte aleatorio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las transiciones controlan el paso conmutado entre dos escenas compuestas distintas.
  </div>
</details>

---

### Pregunta 11
Entre los formatos de compresión de audio digital existe una alternativa de código abierto, totalmente libre de patentes y royalty-free, muy utilizada en videojuegos y desarrollo web por su alta eficiencia. ¿Cuál es este formato?

<details class="quiz-option incorrect">
  <summary>A) WMA</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WMA (Windows Media Audio) es un formato de audio propietario sujeto a patentes de Microsoft.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) AAC</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AAC (Advanced Audio Coding) es un estándar comercial sujeto a licencias de uso.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) OGG Vorbis</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    OGG Vorbis es un formato de compresión de audio digital con pérdida (lossy) desarrollado por la Fundación Xiph.Org. Es un estándar abierto y libre de patentes, diseñado como alternativa no comercial a formatos como MP3 o AAC.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MP3 Propietario</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MP3 (MPEG-1 Audio Layer III) fue un formato comercial sujeto a patentes durante décadas.
  </div>
</details>

---

### Pregunta 12
OpenShot permite crear títulos e intromisiones animadas en 3D en los vídeos utilizando la integración en segundo plano con el software de modelado Blender. ¿Qué combinación de teclas de atajo abre el menú desplegable de Títulos Animados en OpenShot?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + H</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + H no está asignado a la creación de títulos 3D en el programa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + P</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + P se utiliza comúnmente para imprimir en aplicaciones de oficina.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ctrl + Alt + V</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Alt + V es un comando habitual de pegado especial en suites de escritorio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ctrl + B</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La combinación Ctrl + B es el atajo de teclado en OpenShot para abrir el panel de Títulos Animados en 3D, permitiendo generar textos voladores, resplandores o efectos tridimensionales aprovechando el motor de renderizado de Blender.
  </div>
</details>

---

### Pregunta 13
¿Qué característica técnica destaca en el formato contenedor Matroska (.mkv) respecto a la flexibilidad de sus metadatos e inclusión de contenidos?

<details class="quiz-option correct">
  <summary>A) Es un estándar contenedor abierto que permite alojar un número ilimitado de pistas de vídeo, audio, imágenes y subtítulos en múltiples idiomas dentro de un único archivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El contenedor Matroska (.mkv) es un estándar abierto extremadamente versátil. Su arquitectura interna permite empaquetar en un único archivo una o varias pistas de vídeo, múltiples pistas de audio multilingüe, pistas de subtítulos seleccionables (SRT, ASS) y capítulos, independientemente de los códecs utilizados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Exige que el vídeo se grabe obligatoriamente a 8 fotogramas por segundo y en blanco y negro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No impone ninguna restricción en la tasa de fotogramas por segundo ni limita la paleta de color.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Borra las pistas de audio para evitar que el archivo ocupe más de 1 MB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No destruye el sonido ni limita el tamaño del archivo a 1 MB.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Solo puede ser reproducido en teléfonos móviles con pantalla monocromática.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un contenedor universal compatible con ordenadores, Smart TVs y dispositivos móviles modernos.
  </div>
</details>

---

### Pregunta 14
En los editores de vídeo modernos como OpenShot, la edición se define como "no destructiva". ¿Qué significa conceptualmente este término respecto a los archivos multimedia originales almacenados en el disco duro?

<details class="quiz-option incorrect">
  <summary>A) Que el editor elimina físicamente los fragmentos de vídeo recortados del disco duro para ahorrar espacio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un editor no destructivo jamás borra ni recorta los archivos fuente originales del disco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que el programa no modifica ni altera los archivos fuente originales; solo guarda un proyecto con referencias e instrucciones de corte que se aplican únicamente durante la exportación final.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La edición no destructiva implica que los archivos fuente de vídeo, sonido e imagen importados permanecen intactos en el almacenamiento. El archivo de proyecto (.osp) almacena punteros de lectura y una lista de instrucciones (cortes, efectos, orden en la línea de tiempo). El archivo resultante de vídeo final se genera únicamente al ejecutar el renderizado de exportación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que la edición destruye la tarjeta gráfica si el proyecto supera los 10 minutos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El procesamiento de vídeo no causa daños físicos en la tarjeta gráfica del ordenador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que las pistas de audio se convierten automáticamente en texto dentro de Google Docs.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe conversión automática de archivos a documentos de procesamiento de texto.
  </div>
</details>

---

### Pregunta 15
Un usuario desea añadir una carátula estática con el nombre de la lección al inicio de su proyecto en OpenShot. ¿Qué atajo de teclado abre la ventana de creación de Títulos estáticos prediseñados?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + Shift + C</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Shift + C es el atajo de recuento de palabras en Google Docs.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + Enter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Enter fuerza un salto de página en procesadores de texto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Ctrl + T</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En OpenShot, la combinación Ctrl + T abre la ventana de creación de Títulos estáticos. Permite elegir plantillas de texto 2D, modificar la fuente, el color de primer plano, el color de fondo y el texto, añadiendo el título como un archivo de imagen vectorial a la lista del proyecto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Alt + F4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + F4 es el atajo de teclado universal para cerrar la ventana o aplicación activa.
  </div>
</details>

---

### Pregunta 16
En la grabación y edición de audio digital se distingue entre formatos con pérdida (lossy) y sin pérdida (lossless). ¿Cuál de las siguientes combinaciones corresponde a un formato de audio sin compresión o sin pérdida de calidad y a uno con compresión destructiva respectivamente?

<details class="quiz-option incorrect">
  <summary>A) PNG (sin pérdida) y MP4 (con pérdida).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PNG es un formato de imagen fija y MP4 es un contenedor multimedia, no formatos dedicados de audio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) OGG (sin pérdida) y PDF (con pérdida).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    OGG es un contenedor de audio con pérdida y PDF es un formato de documento estático.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) AVI (sin pérdida) y MKV (con pérdida).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AVI y MKV son formatos contenedores de vídeo, no de audio puro.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) WAV (sin pérdida / sin compresión) y MP3 (compresión con pérdida).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato WAV (Waveform Audio Format) almacena audio en bruto mediante modulación por impulsos codificados (PCM) sin compresión ni pérdida de calidad (lossless). El formato MP3 aplica algoritmos psicoacústicos de compresión destructiva (lossy), eliminando frecuencias inaudibles para reducir el peso del archivo a costa de una pequeña pérdida de fidelidad.
  </div>
</details>

---

### Pregunta 17
¿Qué combinación de teclas permite importar rápidamente archivos de vídeo, imágenes o pistas de audio al panel de "Archivos del proyecto" en OpenShot sin necesidad de navegar por los menús superiores?

<details class="quiz-option correct">
  <summary>A) Ctrl + F</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En OpenShot, presionar Ctrl + F abre directamente el cuadro de diálogo del explorador de archivos del sistema para Importar archivos multimedia al panel de recursos del proyecto activo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + Alt + Supr</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Alt + Supr abre la pantalla de seguridad y el Administrador de Tareas de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Shift + Esc</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Shift + Esc abre el Administrador de Tareas interno del navegador Chrome.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Alt + Tab</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + Tab conmuta de forma rápida entre las aplicaciones abiertas en el sistema operativo.
  </div>
</details>

---

### Pregunta 18
En la digitalización de señales de audio analógicas, la calidad del sonido digital viene determinada por la frecuencia de muestreo y la profundidad de bits. ¿Cuáles son los valores estándar de calidad de CD de audio comercial?

<details class="quiz-option incorrect">
  <summary>A) 8.000 Hz y 8 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    8.000 Hz y 8 bits corresponde a la calidad reducida de líneas de telefonía analógica clásica.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 44.100 Hz (44,1 kHz) y 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar técnico de calidad de audio de CD (Red Book) fija la frecuencia de muestreo en 44,1 kHz (44.100 muestras por segundo) atendiendo al teorema de Nyquist-Shannon para cubrir el espectro audible humano (hasta 20 kHz), y asigna una profundidad de 16 bits por muestra en estéreo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 192.000 Hz y 64 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a másteres de estudio de ultra-alta definición (Hi-Res Audio), no al estándar comercial de CD.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 100 Hz y 2 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un valor técnicamente inservible que no permite reconstruir la señal sonora.
  </div>
</details>

---

### Pregunta 19
El códec H.264 (MPEG-4 AVC) es el estándar más extendido para la distribución de vídeo en Internet. ¿Qué ventaja técnica principal ofrece respecto a los códecs antiguos como MPEG-2 o DivX?

<details class="quiz-option incorrect">
  <summary>A) Elimina las pistas de color transformando todo el vídeo a escala de grises.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    H.264 procesa la información cromática (canales de croma) con total fidelidad de color.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Aumenta el tamaño de los archivos un 500% para evitar descargas no autorizadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Su objetivo principal es el opuesto: reducir el tamaño del archivo para facilitar la transmisión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Proporciona un alto nivel de compresión con una excelente calidad de imagen visual, permitiendo reproducir vídeo HD a tasas de bits reducidas en web y dispositivos móviles.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El códec H.264 / AVC ofrece una tasa de compresión altamente eficiente. Permite codificar vídeo en Alta Definición reduciendo el ancho de banda (bitrate) necesario a casi la mitad en comparación con estándares como MPEG-2, manteniendo una excelente calidad visual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es el único códec capaz de ejecutar programas .exe dentro del reproductor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un códec procesa datos multimedia y no ejecuta código de programas ejecutables de sistema.
  </div>
</details>

---

### Pregunta 20
Antes de iniciar la grabación de un videotutorial sobre el uso de una aplicación ofimática, el creador elabora un guion técnico estructurado en tres partes fundamentales. ¿Cuál es el orden cronológico estándar de dichas fases?

<details class="quiz-option incorrect">
  <summary>A) [1. Despedida] $\rightarrow$ [2. Nudo/Demostración] $\rightarrow$ [3. Introducción].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra una secuencia totalmente desordenada iniciando por la despedida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) [1. Créditos de edición] $\rightarrow$ [2. Cierre] $\rightarrow$ [3. Instalación de Windows].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los créditos de edición no abren un videotutorial ni la instalación de Windows forma parte obligatoria de la estructura narrativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) [1. Demostración práctica] $\rightarrow$ [2. Introducción] $\rightarrow$ [3. Índice].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Realizar la demostración práctica antes de introducir el objetivo desorienta al alumno.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) [1. Introducción/Presentación del objetivo] $\rightarrow$ [2. Desarrollo/Demostración paso a paso] $\rightarrow$ [3. Cierre/Resumen y llamada a la acción].</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La estructura narrativa e instructiva de un videotutorial profesional exige: 1. Introducción (saludo corto, planteamiento del problema y objetivo del tutorial), 2. Desarrollo / Demostración (explicación paso a paso en pantalla) y 3. Cierre (breve resumen de lo aprendido y despedida/llamada a la acción).
  </div>
</details>
