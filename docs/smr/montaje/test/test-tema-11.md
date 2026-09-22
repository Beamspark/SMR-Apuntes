# Test de Autoevaluación: Tema 11

[← Volver al Tema 11: Instalación de programas y software](../tema-11.md)

---

### Pregunta 1
¿Cómo se define el procedimiento de "instalación estándar o completa" de un sistema operativo en un equipo microinformático?

<details class="quiz-option incorrect">
  <summary>A) Una copia automatizada enviada desde un servidor sin intervención del usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación enviada desde servidor sin intervención es una instalación desatendida o masiva por red.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El proceso de instalación paso a paso que comienza desde cero insertando el medio instalador, configurando el arranque en la BIOS, creando las particiones e instalando los controladores.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La instalación estándar es aquella que se ejecuta desde cero de forma guiada paso a paso, requiriendo configurar la BIOS para arrancar desde el soporte de instalación (CD/DVD/USB), definir las particiones en el disco y actualizar posteriormente los controladores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La restauración de una imagen ISO guardada en la memoria caché L1 del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las imágenes ISO no se almacenan en la memoria caché L1 del procesador sino en unidades de almacenamiento secundario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El volcado directo de archivos mediante un cable de red sin dar formato al disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El volcado por red sin formatear no garantiza la estructura de archivos ni la creación de sectores de arranque limpios.
  </div>
</details>

---

### Pregunta 2
¿Qué objetivo principal persiguen los "sistemas preinstalados con partición de recuperación"?

<details class="quiz-option incorrect">
  <summary>A) Aumentar la velocidad del bus PCI-Express de la tarjeta gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La partición de recuperación es una estructura lógica de almacenamiento que no influye en la velocidad física del bus gráfico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Agilizar la instalación del sistema operativo y sus controladores mediante una imagen almacenada en una partición del disco, evitando copias no autorizadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los sistemas preinstalados diseñados con partición de recuperación permiten restaurar el sistema operativo y los controladores de forma rápida a partir de una imagen de fábrica guardada en una partición reservada del propio disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permitir el arranque del equipo sin disponer de memoria RAM instalada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque y la carga del sistema requieren imperativamente memoria RAM física.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Eliminar la necesidad de utilizar fuentes de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todo hardware informático necesita energía eléctrica para funcionar.
  </div>
</details>

---

### Pregunta 3
¿Qué elemento indispensable caracteriza a una "instalación desatendida" de un sistema operativo?

<details class="quiz-option incorrect">
  <summary>A) La presencia física de un técnico pulsando la tecla Enter en cada menú.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La intervención humana constante es característica de la instalación estándar guiada.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La utilización de un archivo de respuesta (script o guion) que responde automáticamente a todas las preguntas del proceso de instalación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La instalación desatendida automatiza todo el proceso gracias a un archivo de respuesta o script que contiene previamente configurados todos los parámetros (idioma, clave, nombre, red), evitando la intervención del usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El formateo a bajo nivel de la memoria CMOS de la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El archivo de respuestas no borra el firmware de la CMOS de la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El uso obligatorio de un lector de disquetes de 3,5 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las instalaciones desatendidas modernas se ejecutan desde USB, red o discos ópticos.
  </div>
</details>

---

### Pregunta 4
En un entorno corporativo con decenas de ordenadores idénticos, ¿en qué consiste el procedimiento de "instalación masiva"?

<details class="quiz-option incorrect">
  <summary>A) En instalar el sistema operativo manualmente equipo por equipo durante varios días.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación manual individual es ineficiente y no constituye un despliegue masivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En crear la imagen de un disco duro modelo y restaurarla simultáneamente en múltiples equipos a través de la red.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La instalación masiva ahorra tiempo al generar una imagen de referencia (máster) y desplegarla/restaurarla por red de forma simultánea sobre todos los equipos de la red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En conectar todos los monitores en serie mediante cables VGA.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conexión de monitores gestiona la señal de vídeo, no la clonación de software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En cambiar la pila CR2032 de todos los ordenadores al mismo tiempo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar pilas es un mantenimiento físico, ajeno al despliegue masivo de sistemas.
  </div>
</details>

---

### Pregunta 5
¿Qué programa informático se menciona expresamente en la fuente como software para la gestión de instalaciones masivas y clonación de imágenes?

<details class="quiz-option incorrect">
  <summary>A) Adobe Acrobat Professional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Adobe Acrobat se utiliza para la maquetación de archivos PDF.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Symantec Ghost Corporate Edition (Norton Ghost).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Symantec Ghost Corporate Edition es una utilidad de referencia para generar archivos de respuestas e imágenes de disco para su distribución masiva en red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Paint 3D.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Paint 3D es una herramienta de edición gráfica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MS-DOS Fdisk exclusivamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fdisk es una utilidad clásica para crear o eliminar particiones en línea de comandos.
  </div>
</details>

---

### Pregunta 6
¿Qué posibilidades de personalización ofrece una herramienta de preinstalación como RT7 Lite sobre una imagen ISO de Windows?

<details class="quiz-option incorrect">
  <summary>A) Aumentar los vatios reales de la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software de preinstalación modifica la imagen de disco, no la potencia eléctrica del hardware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Personalizar la interfaz, añadir ajustes, deshabilitar servicios, integrar drivers, actualizaciones o aplicaciones de forma previa a la instalación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    RT7 Lite permite modificar la imagen ISO original integrando controladores, actualizaciones de seguridad, aplicaciones predeterminadas y eliminando componentes no deseados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Reparar la lente del láser de la lectora de DVD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No repara componentes mecánicos u ópticos averiados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cambiar la frecuencia de reloj del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los parámetros de frecuencia del procesador se configuran desde la BIOS o mediante overclocking.
  </div>
</details>

---

### Pregunta 7
¿Por qué motivo un disco duro nuevo recién adquirido requiere ser particionado y formateado antes de poder almacenar datos?

<details class="quiz-option incorrect">
  <summary>A) Porque de fábrica viene lleno de virus informáticos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los discos nuevos se comercializan limpios sin datos ni malware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque viene sin formato y necesita estructurar el disco mediante un sistema de archivos soportado por el sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un disco nuevo carece de la estructura de organización necesaria; al particionar y formatear se crea un sistema de archivos que permite buscar, guardar y acceder a la información.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque la fuente de alimentación no le suministra corriente si no está particionado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La energía eléctrica llega al disco a través del cable de alimentación independientemente de su formato lógico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque el conector SATA es de plástico no conductor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los conectores SATA disponen de pines de cobre para la transmisión eléctrica y de datos.
  </div>
</details>

---

### Pregunta 8
En el esquema de particionado tradicional MBR (Master Boot Record), ¿cuál es el número MÁXIMO de particiones primarias que se pueden crear en un único disco físico?

<details class="quiz-option incorrect">
  <summary>A) 128 particiones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las 128 particiones son la capacidad máxima del sistema moderno GPT/EFI.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 4 particiones primarias.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar MBR limita la tabla de particiones del primer sector del disco a un máximo de 4 particiones primarias (o 3 primarias y 1 extendida).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Particiones ilimitadas sin restricción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR tiene una restricción física rígida de 4 entradas en su tabla principal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Solamente 1 partición.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Permite hasta 4, no estando limitado a una sola.
  </div>
</details>

---

### Pregunta 9
¿Cuál es la función principal de una "partición extendida" en un esquema de particionado MBR?

<details class="quiz-option incorrect">
  <summary>A) Actuar como la única partición donde se puede instalar la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS reside en un chip Flash de la placa base, no en la partición extendida.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Funcionar como un contenedor que permite subdividir su espacio en múltiples particiones lógicas, superando el límite de 4 particiones primarias.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Como MBR solo admite 4 particiones primarias, la partición extendida no almacena datos directamente sino que actúa como contenedor de unidades lógicas adicionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Duplicar la memoria RAM del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las particiones de disco pertenecen al almacenamiento secundario, no a la RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Almacenar la carga eléctrica del SAI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La energía del SAI se almacena en sus baterías internas de 12 V.
  </div>
</details>

---

### Pregunta 10
¿Qué ventajas ofrece el esquema de particionado GPT asociado a sistemas EFI frente al tradicional MBR?

<details class="quiz-option correct">
  <summary>A) Permite crear hasta 128 particiones por disco y ofrece menús gráficos con soporte de acceso remoto.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar GPT (usado en sistemas EFI/UEFI) supera las limitaciones de MBR permitiendo hasta 128 particiones por disco e integrando utilidades de diagnóstico avanzadas y menús gráficos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Reduce el consumo eléctrico del procesador a 0 vatios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El esquema de particiones organiza datos lógicos en el disco, no altera el consumo eléctrico de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es compatible exclusivamente con disquetes de 5,25 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    GPT/EFI se utiliza en unidades modernas de gran capacidad (HDDs, SSDs, NVMe).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Elimina la necesidad de instalar tarjetas de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No sustituye a los adaptadores de red físicos.
  </div>
</details>

---

### Pregunta 11
¿Cuáles son las cuatro operaciones básicas que se pueden realizar sobre las particiones de un disco duro?

<details class="quiz-option incorrect">
  <summary>A) Formatear, Soldar, Limpiar y Pintar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Soldar y pintar son intervenciones físicas, no operaciones lógicas de particionado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Creación, Eliminación, Redimensionamiento y Ocultar/Mostrar.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La gestión lógica de discos abarca la creación (definir tipo y tamaño), eliminación (borrado de datos), redimensionamiento (modificar tamaño sin perder datos) y ocultar/mostrar particiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Overclocking, Watercooling, Modding y Barebone.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son tendencias y técnicas de personalización y refrigeración de hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Encendido, Suspensión, Reposo y Apagado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponden a los estados de energía del sistema operativo o la fuente.
  </div>
</details>

---

### Pregunta 12
¿En qué consiste la operación de "redimensionamiento" de una partición de disco?

<details class="quiz-option incorrect">
  <summary>A) En borrar la partición y perder todos los datos para crear una nueva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La eliminación sí borra los datos; el redimensionamiento los preserva.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En modificar el tamaño de una partición existente sin perder los datos que contiene, siempre que exista espacio libre en el disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Redimensionar permite ampliar o reducir el volumen asignado a una partición respetando los archivos almacenados en ella.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En aumentar el tamaño físico de la carcasa metálica del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las dimensiones físicas del chasis de 3,5'' o 2,5'' no se alteran.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En cambiar el tipo de conector de SATA a USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El redimensionamiento actúa sobre la estructura lógica, no sobre la interfaz de conexión.
  </div>
</details>

---

### Pregunta 13
¿Cuáles son algunos de los softwares específicos citados en el texto para la gestión y creación de particiones en sistemas Windows y Linux?

<details class="quiz-option correct">
  <summary>A) Partition Magic / Partition Master (Windows) y Gparted (Linux).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Partition Magic y Partition Master para entornos Windows, y Gparted para Linux, son herramientas especializadas en operaciones con particiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Adobe Photoshop y Paint.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son editores de imágenes gráficas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ultimate Everest y CPU-Z.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son utilidades de auditoría y diagnóstico de hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MS Word y Excel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son aplicaciones de ofimática para textos y hojas de cálculo.
  </div>
</details>

---

### Pregunta 14
¿Qué es una "imagen ISO" en el contexto del almacenamiento de software?

<details class="quiz-option incorrect">
  <summary>A) Un virus informático que infecta el sector MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un formato estándar de archivo de imagen de disco, no un código malicioso.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un archivo que contiene una copia exacta y comprimida del contenido de un CD o DVD.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una imagen ISO es un archivo contenedor que replica exactamente la estructura de sectores de un disco óptico (CD/DVD), facilitando su distribución digital y posterior grabación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un controlador de la tarjeta de sonido de alta definición.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un driver de dispositivo de audio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El firmware que reside en el chip de la CMOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware de la CMOS es la BIOS/UEFI.
  </div>
</details>

---

### Pregunta 15
¿Qué aplicaciones se citan en la fuente para la gestión y creación de imágenes ISO en entornos Ubuntu Linux?

<details class="quiz-option incorrect">
  <summary>A) Nero y Clone CD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Nero y Clone CD son programas tradicionales de grabación en entornos Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) ISO Master y Furius ISO Mount.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En sistemas Ubuntu Linux se utilizan paquetes como ISO Master o Furius ISO Mount para crear, editar y extraer el contenido de archivos ISO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MS-DOS Fdisk.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fdisk es una utilidad de línea de comandos para particiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) WinZip y WinRAR exclusivamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WinZip/WinRAR son compresores de archivos genéricos.
  </div>
</details>

---

### Pregunta 16
¿En qué consiste la técnica de "clonación de un disco duro"?

<details class="quiz-option incorrect">
  <summary>A) En limpiar las huellas dactilares de la carcasa del disco con un paño seco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La limpieza externa es un mantenimiento físico cosmético.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En realizar una copia exacta de la totalidad del disco, incluyendo datos, programas, sistema operativo y configuraciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Clonar implica duplicar de forma idéntica sector por sector todo el contenido de una unidad para volcarlo sobre otro disco o restaurarlo en masa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En formatear el disco para dejarlo vacío sin particiones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear borra las estructuras de datos, lo contrario de realizar una copia de seguridad clonada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En cambiar la placa lógica del disco por la de otro modelo diferente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar la placa lógica es una técnica de reparación física de emergencia.
  </div>
</details>

---

### Pregunta 17
¿Cuáles de los siguientes softwares se recomiendan específicamente para llevar a cabo procesos de clonación de discos duros?

<details class="quiz-option correct">
  <summary>A) Clonezilla y Gparted.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Clonezilla y Gparted son herramientas de software libre ampliamente utilizadas para clonar discos y gestionar particiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Adobe Reader y PDF Creator.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son utilidades para lectura y generación de documentos PDF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Notepad y Wordpad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son editores de texto plano o enriquecido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) VLC Media Player y Audacity.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son reproductores y editores de contenido multimedia de audio y vídeo.
  </div>
</details>

---

### Pregunta 18
¿Qué función cumple la herramienta de "Restauración del sistema" mediante la creación de un "Punto de Restauración"?

<details class="quiz-option incorrect">
  <summary>A) Formatear a bajo nivel el disco duro perdiendo todos los archivos personales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No borra los documentos ni archivos personales del usuario, solo revierte ajustes de sistema y controladores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Retornar el equipo a un estado de funcionamiento previo y óptimo (fecha indicada) en caso de fallos o problemas de rendimiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un punto de restauración guarda una "fotografía" de los archivos de sistema y registro en un momento estable; si el sistema falla posteriormente, permite revertir los cambios a esa fecha.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Aumentar la capacidad física de la memoria RAM instalada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No modifica la capacidad del hardware de RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Borrar las contraseñas de acceso a la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las contraseñas de la BIOS se gestionan en la memoria CMOS, no mediante puntos de restauración del SO.
  </div>
</details>

---

### Pregunta 19
En la configuración de la BIOS/UEFI, ¿qué sección permite modificar la secuencia o prioridad de búsqueda del dispositivo de arranque (Boot Order)?

<details class="quiz-option incorrect">
  <summary>A) Main (Principal).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Main muestra la hora, fecha y discos detectados.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) BOOT (Arranque).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sección BOOT del Setup de la BIOS permite ordenar las unidades (USB, disco duro, lector óptico, red) para definir dónde buscará el sistema operativo al encender.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Security (Seguridad).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Security establece contraseñas de acceso.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Exit (Salir).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Exit guarda o descarta los cambios realizados.
  </div>
</details>

---

### Pregunta 20
¿Qué caracteriza a una distribución de sistema operativo en formato "Live CD" / "Live USB"?

<details class="quiz-option incorrect">
  <summary>A) Que destruye los datos del disco duro en cuanto se introduce.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No borra el disco duro a menos que el usuario ejecute explícitamente una orden de formateo o instalación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que es un sistema autoejecutable que arranca directamente desde el soporte óptico o pendrive sin necesidad de instalar nada en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un entorno Live carga el sistema operativo directamente en la memoria RAM desde el medio extraíble, permitiendo probar el sistema o reparar averías sin alterar el disco interno.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que requiere conexión eléctrica de 220 V sobre el puerto USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los puertos USB suministran corriente continua de +5 V.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que solo funciona si el ordenador está apagado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Requiere que el equipo esté encendido y ejecute la fase de arranque POST.
  </div>
</details>

---

### Pregunta 21
¿Por qué motivo la creación de memorias USB booteables de instalación cobró máxima relevancia en el mercado de ordenadores portátiles?

<details class="quiz-option incorrect">
  <summary>A) Porque el puerto USB transmite los datos a la velocidad de la luz.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La transferencia USB depende de su estándar (2.0, 3.0, etc.), no alcanza la velocidad de la luz.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque los fabricantes de portátiles comenzaron a omitir las unidades de CD/DVD internas para reducir el grosor y peso de los equipos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al eliminar los lectores ópticos en portátiles y ultrabooks, la memoria USB se convirtió en el estándar primario para arrancar e instalar sistemas operativos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque los pendrives USB no consumen energía de la batería.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las memorias USB consumen una pequeña cantidad de corriente continua de la batería del portátil.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque los discos ópticos dejaron de fabricarse en todo el mundo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los medios ópticos siguen existiendo pero su uso en portátiles se ha reducido.
  </div>
</details>

---

### Pregunta 22
Caso Práctico: Un técnico debe configurar 30 ordenadores idénticos en un aula de formación. Para optimizar el tiempo, instala el primer equipo con todo el software y controladores, genera una imagen máster y utiliza la red local para restaurar esa imagen en los 29 equipos restantes. ¿Qué tipo de instalación ha ejecutado?

<details class="quiz-option incorrect">
  <summary>A) Instalación manual estándar guiada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación manual estándar requeriría repetir el proceso 30 veces de forma individual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Instalación masiva por red mediante clonación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El despliegue de una imagen máster a través de la red local hacia múltiples equipos cliente es la definición práctica de una instalación masiva por clonación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Mantenimiento correctivo de emergencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se trata de reparar averías sino de un despliegue de software inicial.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Actualización del firmware de la batería del SAI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tiene relación con las baterías del SAI.
  </div>
</details>

---

### Pregunta 23
Caso Práctico: Un usuario quiere instalar Windows 11 en un disco duro de 4 TB. Para poder aprovechar toda la capacidad del disco y crear 6 particiones primarias para diferentes proyectos, ¿qué esquema de particionado debe seleccionar obligatoriamente?

<details class="quiz-option incorrect">
  <summary>A) MBR (Master Boot Record).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no puede gestionar 4 TB completos ni permite 6 particiones primarias puras.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) GPT (GUID Partition Table) bajo sistemas EFI/UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    MBR solo reconoce discos de hasta 2 TB y un máximo de 4 particiones primarias. Para discos de 4 TB y más de 4 particiones primarias (hasta 128) es obligatorio usar GPT/EFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Formato de disquete MS-DOS FAT12.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FAT12 es un sistema obsoleto para disquetes de baja capacidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sistema de archivos de solo lectura CD-ROM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formato CD-ROM es de solo lectura y no se aplica a discos duros de 4 TB.
  </div>
</details>

---

### Pregunta 24
Caso Práctico: Un técnico descarga una imagen de instalación de Linux Ubuntu con extensión .iso. Quiere comprobar su contenido e integrar nuevos paquetes de software en la imagen dentro de su equipo con Ubuntu antes de grabarla. ¿Qué herramienta citada en el temario debe utilizar?

<details class="quiz-option incorrect">
  <summary>A) RT7 Lite o Adobe Acrobat.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    RT7 Lite se utiliza para personalizar imágenes de Windows y Acrobat es para archivos PDF.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) ISO Master.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En sistemas Ubuntu Linux, ISO Master es la aplicación específica indicada para abrir, examinar, añadir o extraer archivos de una imagen ISO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MS Paint.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Paint es un editor gráfico de imágenes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Fdisk en MS-DOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fdisk gestiona particiones, no edita archivos de imagen ISO.
  </div>
</details>

---

### Pregunta 25
Caso Práctico: Tras instalar una actualización de controladores de vídeo, el sistema operativo de un equipo empieza a sufrir pantallas azules e inestabilidad. El técnico desea solucionar el problema regresando el sistema al estado exacto en que se encontraba el día anterior sin perder los documentos del cliente. ¿Qué procedimiento debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) Formatear la partición y realizar una instalación estándar desde cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear borraría todos los datos y programas, siendo una medida drástica e innecesaria.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ejecutar la herramienta "Restaurar sistema" seleccionando un "Punto de restauración" anterior a la instalación del driver.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Restaurar Sistema permite volver a un punto de restauración previo, deshaciendo la instalación del controlador defectuoso sin alterar los archivos de trabajo del usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cambiar la fuente de alimentación por una de mayor potencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El problema es un fallo de controlador de software, no un déficit de potencia eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Retirar los separadores de latón de la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Retirar los separadores de latón provocaría un cortocircuito físico destruyendo la placa base.
  </div>
</details>
