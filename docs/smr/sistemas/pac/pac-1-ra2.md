[← Volver al Índice de PACs](./index.md)

---

# PAC 1 (RA2) - Instalación y Arquitectura del Sistema Operativo

---

### Pregunta 1
Un alumno tiene un procesador de textos instalado, pero no lo ha abierto. ¿Cuál es la diferencia entre ese programa y un proceso?

<details class="quiz-option incorrect">
  <summary>A) El programa pertenece al sistema operativo; el proceso pertenece al hardware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tanto el programa como el proceso son entidades de software asociadas a la gestión de aplicaciones, no componentes del hardware.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) El programa y el proceso son exactamente lo mismo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un programa es un ente estático (código almacenado), mientras que el proceso es dinámico (la instancia en ejecución).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) El programa utiliza la CPU; el proceso solo ocupa espacio en disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es justo al revés: el archivo ejecutable reside en el disco y el proceso es el que consume ciclos de CPU y espacio en la memoria RAM.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) El programa está almacenado en disco; el proceso es un programa en ejecución</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un programa es una entidad pasiva (conjunto de instrucciones compiladas almacenadas en almacenamiento secundario), mientras que un proceso es una entidad activa creada por el sistema operativo cuando el programa se carga en la memoria RAM y comienza a ejecutarse en la CPU (posee contador de programa, registros y bloque de control de proceso o PCB).
  </div>
</details>

---

### Pregunta 2
¿Qué criterio utiliza el algoritmo FIFO para seleccionar el siguiente proceso?

<details class="quiz-option correct">
  <summary>A) Respeta el orden de llegada de los procesos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El algoritmo FIFO (*First In, First Out* o FCFS - *First-Come, First-Served*) es un planificador no expulsivo que asigna la CPU a los procesos estrictamente en el orden cronológico en que entran en la cola de preparados (*ready queue*).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Elige el proceso con menor tiempo restante.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ese es el criterio del algoritmo SRTF (*Shortest Remaining Time First*).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Selecciona siempre el proceso de mayor prioridad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a los planificadores basados en prioridades (*Priority Scheduling*).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Elige el proceso con menor tiempo de ejecución</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es el funcionamiento propio del algoritmo SJF (*Shortest Job First*).
  </div>
</details>

---

### Pregunta 3
En el algoritmo SRTF llega un proceso cuyo tiempo de ejecución es menor que el tiempo que le queda al proceso que está utilizando la CPU. ¿Qué sucede?

<details class="quiz-option incorrect">
  <summary>A) Ambos procesos pasan al estado terminado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un proceso solo pasa al estado terminado cuando finaliza todas sus instrucciones o sufre un cierre forzado.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) El nuevo proceso espera obligatoriamente hasta que termine el actual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esperar hasta que termine el proceso en curso es la variante no expulsiva (SJF estándar).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) El proceso actual continúa porque SRTF no es expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SRTF es por definición la versión apropiativa o **expulsiva** (*preemptive*) del algoritmo SJF.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Se interrumpe el proceso actual y se ejecuta el nuevo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al ser un algoritmo expulsivo (*preemptive*), en cuanto entra a la cola un trabajo con una ráfaga de CPU menor que el tiempo remanente del proceso en ejecución, el sistema operativo desaloja el proceso actual (guardando su contexto en el PCB y devolviéndolo a la cola de preparados) para otorgar la CPU al nuevo.
  </div>
</details>

---

### Pregunta 4
Un alumno quiere guardar un archivo de 6 GB en una memoria USB formateada en FAT32. Aunque hay espacio libre suficiente, no puede copiarlo. ¿Cuál es la causa?

<details class="quiz-option incorrect">
  <summary>A) FAT32 necesita una conexión a Internet para copiar archivos grandes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las operaciones de lectura y escritura en sistemas de archivos locales no dependen de conectividad de red.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) FAT32 impide utilizar memorias USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FAT32 es uno de los formatos más extendidos y compatibles para unidades extraíbles USB.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) FAT32 no permite almacenar archivos individuales de ese tamaño.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema de archivos FAT32 utiliza un campo de 32 bits para el tamaño de los ficheros, lo que impone un límite máximo arquitectónico de **4 GB por archivo individual** ($2^{32} - 1\text{ bytes} \approx 4{,}29\text{ GB}$). Para archivos de 6 GB es necesario formatear la unidad en **exFAT** o **NTFS**.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) FAT32 solo permite guardar archivos de texto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FAT32 almacena cualquier tipo de archivo binario (imágenes, vídeos, ejecutables, etc.).
  </div>
</details>

---

### Pregunta 5
Un centro necesita instalar el mismo sistema operativo en numerosos ordenadores con una configuración previamente definida. ¿Qué tipo de instalación resulta especialmente apropiado?

<details class="quiz-option incorrect">
  <summary>A) Instalación manual diferente en cada equipo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación manual equipo por equipo resulta inviable en despliegues corporativos o educativos por el tiempo requerido y el riesgo de inconsistencias en la configuración.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Instalación desatendida</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La **instalación desatendida** (mediante archivos de respuesta con scripts como `autounattend.xml` o mediante imágenes preconfiguradas y clonación en red con herramientas como Fog, Clonezilla o WDS) automatiza el despliegue masivo sin requerir interacción manual del técnico durante el asistente.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Arranque dual</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque dual sirve para convivir con dos sistemas operativos en un mismo disco, no para automatizar instalaciones masivas.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Actualización de una aplicación</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Solo modifica el software aplicativo, no realiza el despliegue del sistema operativo base.
  </div>
</details>

---

### Pregunta 6
Antes de reinstalar el sistema operativo de un ordenador que contiene documentos importantes, ¿qué medida debe realizarse para proteger esos datos?

<details class="quiz-option incorrect">
  <summary>A) Desactivar el monitor</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un periférico de salida que no influye en la integridad del almacenamiento magnético o de estado sólido.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Crear una copia de seguridad</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La realización de un *backup* o copia de seguridad externa (en NAS, almacenamiento en la nube o disco externo) es el procedimiento preventivo fundamental antes de formatear o particionar, garantizando la preservación de los datos en caso de sobrescritura.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Eliminar las particiones existentes</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Eliminar particiones destruye la tabla de asignación de archivos y deja inaccesibles los documentos que se querían conservar.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Cambiar el nombre del equipo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un parámetro identificativo en red (*hostname*) que no resguarda los ficheros del usuario.
  </div>
</details>

---

### Pregunta 7
¿Qué función realiza el POST durante el arranque del ordenador?

<details class="quiz-option correct">
  <summary>A) Comprueba el funcionamiento básico del hardware</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El **POST** (*Power-On Self-Test*) es una rutina de diagnóstico ejecutada por el firmware (BIOS/UEFI) al encender el equipo que verifica la presencia e integridad básica de los componentes esenciales (microprocesador, memoria RAM, controladora gráfica, teclado y almacenamiento) antes de ceder el control al gestor de arranque.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Formatea automáticamente el disco</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El POST nunca realiza operaciones destructivas de almacenamiento; se limita a comprobar que las unidades responden.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Crea las cuentas de usuario</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La gestión de usuarios es una función de alto nivel que depende exclusivamente del sistema operativo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Instala las actualizaciones del sistema operativo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación de parches corresponde al gestor de paquetes o al servicio de actualización del sistema operativo cuando este ya ha cargado.
  </div>
</details>

---

### Pregunta 8
¿Qué ventaja ofrece GPT frente a MBR?

<details class="quiz-option incorrect">
  <summary>A) Impide utilizar discos de más de 2 TB</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El límite de 2 TB es precisamente el defecto de MBR; GPT supera ampliamente esa barrera.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Elimina la necesidad de un gestor de arranque</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todo sistema necesita un gestor de arranque (como GRUB o Windows Boot Manager) para cargar el núcleo del sistema operativo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Solo permite crear cuatro particiones primarias.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El límite estricto de cuatro particiones primarias es exclusivo del esquema clásico MBR; GPT permite por defecto hasta 128 particiones primarias independientes.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Permite trabajar con discos de gran capacidad y dispone de mecanismos de comprobación y copia de la información de particionado</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tabla de particiones **GPT** (*GUID Partition Table*), asociada al estándar UEFI, permite gestionar discos con capacidades de varios zettabytes, ofrece hasta 128 particiones primarias sin necesidad de particiones extendidas, y añade redundancia de seguridad guardando una copia de respaldo de la cabecera al final del disco junto con sumas de comprobación **CRC32** para detectar corrupción de datos.
  </div>
</details>

---

### Pregunta 9
¿Cuál es la finalidad de Secure Boot?

<details class="quiz-option correct">
  <summary>A) Verificar las firmas digitales del software de arranque para impedir la ejecución de componentes no autorizados</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    **Secure Boot** es una característica del estándar UEFI que utiliza criptografía de clave pública para autenticar la firma digital de los cargadores de arranque, controladores de hardware y módulos del kernel, impidiendo la inyección y ejecución temprana de *rootkits*, *bootkits* o software no verificado durante la fase previa a la carga del SO.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Aumentar automáticamente la memoria RAM disponible</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Secure Boot es un mecanismo de seguridad criptográfica y no altera la capacidad de la memoria física.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Permitir que todos los programas se ejecuten en modo núcleo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ejecutar programas de usuario en modo núcleo (*kernel mode*) rompería el aislamiento del sistema y crearía graves vulnerabilidades.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Crear copias de seguridad de los documentos antes del arranque</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No realiza tareas de respaldo ni accede al sistema de archivos de usuario.
  </div>
</details>

---

### Pregunta 10
En Ubuntu, ¿cuál es la diferencia entre sudo apt update y sudo apt upgrade?

<details class="quiz-option incorrect">
  <summary>A) update instala las actualizaciones y upgrade consulta únicamente los repositorios</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los roles están completamente invertidos.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Ambos comandos eliminan los paquetes que ya no se utilizan.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La eliminación de dependencias huérfanas se realiza mediante órdenes dedicadas como <code>sudo apt autoremove</code>.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) update actualiza la información de los paquetes disponibles y upgrade instala sus actualizaciones</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    <code>sudo apt update</code> sincroniza el índice local descargando las listas actualizadas de versiones desde los repositorios remotos definidos en <code>/etc/apt/sources.list</code>, mientras que <code>sudo apt upgrade</code> compara dichas listas con el software actualmente instalado y descarga/instala las versiones nuevas.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Ambos comandos reinician el equipo después de ejecutarse.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos comandos desencadena un reinicio automático del sistema.
  </div>
</details>
