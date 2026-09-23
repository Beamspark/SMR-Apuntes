# Test de Autoevaluación: Tema 1

[← Volver al Tema 1: Caracterización de los Sistemas Operativos](../tema-1.md)

---

### Pregunta 1
En la arquitectura de un sistema informático moderno, ¿cuál de las siguientes afirmaciones define con mayor precisión el concepto de firmware y su diferenciación técnica frente al software de aplicación convencional?

<details class="quiz-option correct">
  <summary>A) Es un programa de bajo nivel grabado en una memoria no volátil que controla directamente los circuitos del hardware y gestiona el arranque básico del dispositivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El firmware es un código ejecutable de bajo nivel grabado en memorias no volátiles (como chips ROM, EPROM o Flash) integradas directamente en las placas base o componentes hardware. Su función principal es establecer el control electrónico básico del dispositivo y coordinar el proceso inicial de arranque (como la BIOS o UEFI) antes de cargar el sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es un tipo de software de desarrollo que se ejecuta en modo usuario para depurar los controladores de dispositivos durante la instalación del sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware no es un software de desarrollo ni se ejecuta en modo usuario; actúa en el nivel más bajo del sistema (nivel de máquina/hardware) y no se utiliza para depurar código.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es la parte lógica del sistema que reside temporalmente en la memoria RAM y que el usuario puede modificar o desinstalar libremente desde el panel de control.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware no es volátil ni reside de forma habitual en la RAM para ser modificado o desinstalado por el usuario final a través del panel de control de aplicaciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un componente de almacenamiento masivo secundario no volátil que sustituye a los discos SSD en la ejecución de instrucciones de la ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde un programa lógico grabado (firmware) con un dispositivo físico de almacenamiento masivo secundario (SSD/HDD) y le atribuye erróneamente la ejecución de instrucciones de la ALU.
  </div>
</details>

---

### Pregunta 2
Durante el procesamiento de datos en una CPU basada en la arquitectura de Von Neumann, ¿cuál es la función exclusiva e imprescindible de la Unidad de Control (UC)?

<details class="quiz-option incorrect">
  <summary>A) Realizar las operaciones aritméticas de suma y resta, así como las comparaciones lógicas entre operandos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución de cálculos matemáticos y comparaciones lógicas es responsabilidad de la Unidad Aritmético-Lógica (ALU), no de la UC.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Buscar las instrucciones en la memoria principal, interpretarlas y enviar señales de mando a través del bus de control para coordinar el resto de componentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Unidad de Control (UC) es el módulo organizador de la CPU. Se encarga de extraer secuencialmente las instrucciones almacenadas en la memoria RAM, decodificar el código de operación y generar las señales de control necesarias dirigidas al bus de control para activar la ALU, los registros o las interfaces de E/S en el momento adecuado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenar de forma permanente los resultados finales obtenidos tras la fase de almacenamiento (Store).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La UC no almacena información de forma permanente; los resultados se guardan en los registros del procesador, en la RAM o en el almacenamiento secundario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conectar directamente la memoria caché L1 con los periféricos de entrada y salida sin pasar por la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La UC no actúa como un bus físico ni puente directo entre la caché L1 y los periféricos de E/S; las transferencias requieren la mediación del bus del sistema y controladores dedicados.
  </div>
</details>

---

### Pregunta 3
Respecto a las líneas de interconexión que forman el bus del sistema en la arquitectura de Von Neumann, señale la afirmación CORRECTA sobre el bus de direcciones:

<details class="quiz-option incorrect">
  <summary>A) Es un bus bidireccional que transporta tanto las instrucciones leídas de la RAM como los datos escritos en el almacenamiento secundario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La transferencia bidireccional de datos e instrucciones se realiza mediante el bus de datos, no el de direcciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Transporta las señales de reloj y las órdenes de habilitación emitidas por los periféricos de entrada hacia la Unidad Aritmético-Lógica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La transmisión de señales de reloj y comandos de habilitación es tarea del bus de control.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Es un bus unidireccional que transporta la posición física de memoria RAM a la que la CPU desea acceder para realizar una lectura o escritura.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El bus de direcciones es estrictamente unidireccional (de la CPU hacia la memoria o los controladores de E/S). Su función es transmitir el valor numérico binario que identifica la posición física o celda exacta de memoria RAM donde se desea leer o escribir un dato/instrucción.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un bus de alta velocidad que conecta exclusivamente la memoria caché L3 con el procesador gráfico (GPU).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El bus de direcciones pertenece a la arquitectura de comunicación general del sistema y no es un canal exclusivo entre la caché L3 y la GPU.
  </div>
</details>

---

### Pregunta 4
Un técnico de sistemas analiza la jerarquía de memorias de un servidor. ¿Qué nivel de memoria caché se caracteriza por estar integrado internamente en el propio núcleo del procesador, dividido físicamente en dos bloques (uno para datos y otro para instrucciones) y ofrecer la menor latencia de acceso?

<details class="quiz-option incorrect">
  <summary>A) Memoria Caché L3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L3 es de mayor capacidad pero más lenta, se sitúa fuera del núcleo individual y es compartida entre todos los núcleos del procesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Memoria RAM Dinámica (DRAM).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La DRAM es la memoria principal fuera del chip del procesador, de acceso sensiblemente más lento que cualquier nivel de caché.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Memoria Caché L2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L2, aunque es interna, es un bloque unificado de mayor tamaño y latencia que la L1 y no está dividida internamente en datos e instrucciones.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Memoria Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria caché L1 (Nivel 1) es la más cercana a los registros de la CPU. Está integrada directamente en la arquitectura interna de cada núcleo, funciona a la misma frecuencia que el procesador (latencia mínima) y casi siempre presenta una arquitectura dividida en L1i (instrucciones) y L1d (datos) para optimizar el rendimiento del ciclo de instrucción.
  </div>
</details>

---

### Pregunta 5
¿Cuál es el orden secuencial correcto de las cuatro fases que ejecuta de forma continua la CPU durante el ciclo de instrucción para procesar cada orden de un programa?

<details class="quiz-option correct">
  <summary>A) Búsqueda (Fetch) -> Decodificación (Decode) -> Ejecución (Execute) -> Almacenamiento (Store).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El ciclo de instrucción de un procesador sigue cuatro fases estrictamente ordenadas: 1. Búsqueda (Fetch), donde se lee la instrucción desde la RAM a los registros; 2. Decodificación (Decode), donde la Unidad de Control interpreta el código de operación; 3. Ejecución (Execute), donde la ALU o unidad funcional ejecuta la orden; y 4. Almacenamiento (Store), donde se escriben los resultados en registros o memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Decodificación (Decode) -> Búsqueda (Fetch) -> Almacenamiento (Store) -> Ejecución (Execute).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se puede decodificar una instrucción antes de haberla buscado y leído de la memoria principal (Fetch).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Búsqueda (Fetch) -> Ejecución (Execute) -> Decodificación (Decode) -> Almacenamiento (Store).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Intenta ejecutar la orden antes de que la Unidad de Control la haya decodificado e interpretado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ejecución (Execute) -> Búsqueda (Fetch) -> Almacenamiento (Store) -> Decodificación (Decode).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte por completo la secuencia lógica del proceso al situar la fase de ejecución al inicio.
  </div>
</details>

---

### Pregunta 6
¿En qué consiste exactamente el denominado "Cuello de Botella de Von Neumann" y cuál es su causa técnica fundamental?

<details class="quiz-option incorrect">
  <summary>A) En la imposibilidad de la ALU de ejecutar operaciones de suma y multiplicación en un mismo ciclo de reloj por falta de registros internos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe una limitación de diseño de la ALU, no el cuello de botella de comunicaciones entre la CPU y la memoria.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En la limitación de velocidad producida al compartir un único bus para transferir datos e instrucciones, impidiendo que la CPU lea una instrucción y un dato simultáneamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El cuello de botella de Von Neumann es una limitación estructural inherente al diseño tradicional de memoria unificada. Al utilizar el mismo bus para transferir tanto los datos de trabajo como las instrucciones del programa, la CPU se ve obligada a secuenciar los accesos, provocando que deba esperar a que el bus quede libre y limitando la velocidad global del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En el sobrecalentamiento de la memoria caché L1 provocado por el acceso simultáneo de múltiples periféricos de entrada/salida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No guarda relación con problemas térmicos de la memoria caché L1 ni con accesos directos de E/S.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En la pérdida irrecuperable de información que sufre la memoria RAM cuando se interrumpe el suministro eléctrico durante la fase de ejecución.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pérdida de datos por corte de energía es la propiedad física de volatilidad de la RAM, no el cuello de botella de Von Neumann.
  </div>
</details>

---

### Pregunta 7
A la hora de configurar el firmware de una placa base moderna, ¿qué ventaja técnica aporta la interfaz UEFI (Unified Extensible Firmware Interface) frente a la BIOS tradicional?

<details class="quiz-option incorrect">
  <summary>A) Funciona exclusivamente en modo texto de 16 bits, garantizando la compatibilidad con discos estructurados bajo MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo texto de 16 bits y la dependencia exclusiva de MBR son limitaciones propias de la BIOS tradicional, no de UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Elimina el test de autochequeo POST (Power-On Self-Test) para arrancar el sistema operativo de manera instantánea sin verificar el hardware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UEFI sigue realizando la rutina del POST para verificar el hardware antes de transferir el control al bootloader.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Soporta ejecuciones en 32 y 64 bits, permite el uso de la partición ESP en discos de gran capacidad y añade la tecnología Secure Boot.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    UEFI supera las limitaciones históricas de la BIOS al trabajar en 32 o 64 bits, incluir interfaz gráfica de usuario con soporte para ratón, admitir tablas de particiones GPT (superando el límite de 2 TB de MBR) mediante la partición ESP (EFI System Partition) y añadir Secure Boot para impedir el arranque de código no firmado digitalmente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Graba el sistema operativo invitado directamente en el chip ROM de la placa base para evitar el uso del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UEFI no almacena el sistema operativo dentro del chip ROM de la placa base; simplemente busca y carga el gestor de arranque ubicado en la unidad de almacenamiento masivo.
  </div>
</details>

---

### Pregunta 8
Dentro del marco del software libre definido por la Free Software Foundation (FSF), ¿en qué consiste específicamente la Libertad 1?

<details class="quiz-option incorrect">
  <summary>A) La libertad de ejecutar el programa para cualquier propósito sin restricciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La libertad de ejecución para cualquier propósito corresponde a la Libertad 0.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La libertad de redistribuir copias del programa original para ayudar a otros usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La libertad de redistribuir copias a terceros corresponde a la Libertad 2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La libertad de vender licencias comerciales del programa sin incluir el código fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocultar el código fuente vulnera los principios básicos del software libre y es propio del software propietario comercial.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La libertad de estudiar cómo funciona el programa y adaptarlo a las propias necesidades, lo cual requiere acceso al código fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La FSF establece cuatro libertades esenciales (0 a 3): Libertad 0 (ejecutar el programa con cualquier fin), Libertad 1 (estudiar cómo funciona y modificarlo/adaptarlo, lo que exige acceso al código fuente), Libertad 2 (redistribuir copias) y Libertad 3 (mejorar el programa y publicar las mejoras para beneficio de la comunidad).
  </div>
</details>

---

### Pregunta 9
Un usuario descarga un programa de edición de imágenes que puede utilizar de forma completamente gratuita durante un periodo de prueba de 30 días, tras el cual varias funciones avanzadas quedan bloqueadas hasta que adquiera una clave de licencia comercial. ¿Bajo qué modelo de distribución se clasifica este software?

<details class="quiz-option correct">
  <summary>A) Shareware.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modelo Shareware permite la distribución y evaluación gratuita de un programa por un periodo temporal o con funciones limitadas, exigiendo un pago posterior para adquirir la licencia comercial y desbloquear la versión completa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Freeware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software Freeware es totalmente gratuito de forma indefinida para su uso (aunque su código fuente siga siendo cerrado), sin periodos de caducidad ni bloqueos de funciones por pago.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Software Libre con licencia GNU/GPL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software libre con licencia GPL garantiza el acceso al código fuente y no impone bloqueos por pago de claves comerciales tras un periodo de prueba.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Firmware de código abierto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El programa descrito es una aplicación de usuario de edición gráfica instalada en el sistema, no un firmware grabado en un componente de hardware.
  </div>
</details>

---

### Pregunta 10
Dentro de la arquitectura interna de un sistema operativo, ¿cuál es la función principal del Núcleo (Kernel)?

<details class="quiz-option incorrect">
  <summary>A) Ofrecer una interfaz gráfica basada en el modelo WIMP para que el usuario pueda interactuar con iconos y ventanas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La interfaz gráfica (GUI/WIMP) es una capa externa de modo usuario para la interacción humana, no el Kernel.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Permanecer constantemente en la memoria RAM para gestionar de forma directa el hardware, los procesos, la memoria y el sistema de archivos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Kernel o Núcleo es el componente central e indispensable del sistema operativo. Se carga en la memoria RAM durante el arranque y permanece activo en todo momento ejecutándose en modo privilegiado (Kernel Mode) para administrar los recursos hardware y responder a las llamadas al sistema (System Calls).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Interpretar los comandos escritos por el usuario en la consola CLI y traducirlos a scripts de automatización.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La interpretación de comandos en modo texto es responsabilidad del Shell o intérprete de comandos (CMD, Bash, PowerShell), no del Kernel directamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Guardar los archivos de configuración del usuario dentro de la partición de arranque ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La partición ESP alberga los archivos del gestor de arranque del firmware UEFI, no las configuraciones del perfil de usuario.
  </div>
</details>

---

### Pregunta 11
En el ámbito de los sistemas operativos propietarios orientados a servidores corporativos, Microsoft lanzó Windows Server 2025. ¿Qué característica define a esta versión y cuál es su sistema de archivos predeterminado?

<details class="quiz-option incorrect">
  <summary>A) Es un sistema operativo libre basado en el kernel Linux que utiliza el sistema de archivos ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Windows Server es un software propietario de Microsoft, no libre, y no utiliza el kernel Linux ni el sistema de archivos ext4.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es una edición de soporte a corto plazo que sustituye a Windows 10 y utiliza exFAT para evitar el límite de 4 GB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No sustituye a Windows 10 (que es un SO de cliente/escritorio) ni pertenece al canal de soporte a corto plazo, ni utiliza exFAT como sistema nativo del sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Pertenece al canal de soporte a largo plazo (LTSC), sustituye a Windows Server 2022 y utiliza nativamente el sistema de archivos NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Windows Server 2025 es el sucesor de Windows Server 2022 dentro del canal LTSC (Long-Term Servicing Channel) de Microsoft. Como sistema operativo de servidor de la familia Windows NT, utiliza como estándar nativo NTFS (New Technology File System), proporcionando control de permisos mediante ACLs, cifrado, cuotas y tolerancia a fallos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un sistema embebido diseñado exclusivamente para tabletas que utiliza el sistema de archivos APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un sistema operativo móvil para tabletas ni utiliza APFS (Apple File System, exclusivo del ecosistema Apple/macOS).
  </div>
</details>

---

### Pregunta 12
¿Cuál es la relación técnica exacta entre GNU y Linux dentro del sistema operativo conocido comúnmente como GNU/Linux?

<details class="quiz-option incorrect">
  <summary>A) Linux es el entorno de escritorio gráfico desarrollado por la FSF, mientras que GNU es el microprocesador sobre el que se ejecuta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Linux no es un entorno de escritorio (como GNOME o KDE) ni GNU es un componente físico de microprocesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) GNU es el sistema de archivos de código cerrado desarrollado por Linus Torvalds y Linux es la distribución comercial.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    GNU no es un sistema de archivos ni Linux es un producto de código cerrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) GNU es un hipervisor de Tipo 1 y Linux es la máquina virtual que emula el sistema operativo Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos componentes es un hipervisor o software de virtualización de sistemas operativos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Linux es el núcleo (kernel) monolítico creado por Linus Torvalds en 1991, mientras que GNU aporta el conjunto de utilidades, herramientas del sistema y librerías que completan el SO.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema operativo es una combinación modular: Linux aporta el núcleo (kernel) creado por Linus Torvalds en 1991 para gestionar el hardware y los recursos, mientras que el proyecto GNU (iniciado por Richard Stallman) proporciona las utilidades de línea de comandos, compiladores (GCC) y librerías del sistema que hacen operativo el entorno completo.
  </div>
</details>

---

### Pregunta 13
En la representación binaria de datos digitales, un Byte está compuesto por una secuencia de 8 bits. ¿Qué nombre recibe el bit situado más a la derecha y cuál es su peso posicional asociado según la estructura binaria?

<details class="quiz-option correct">
  <summary>A) LSB (Least Significant Bit), con un peso posicional de 2^0 = 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la estructura posicional de un Byte (8 bits, numerados de la posición 0 a la 7), el bit situado más a la derecha es el LSB (Least Significant Bit / Bit Menos Significativo), cuyo peso posicional es 2⁰ = 1. Por el contrario, el bit situado más a la izquierda es el MSB (Most Significant Bit / Bit Más Significativo), con un peso de 2⁷ = 128.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) MSB (Most Significant Bit), con un peso posicional de 2^7 = 128.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El MSB es el bit situado en el extremo izquierdo del Byte, no en el extremo derecho.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) LSB (Least Significant Bit), con un peso posicional de 2^8 = 256.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En un Byte la posición de menor peso equivale a 2⁰ = 1; un valor de 2⁸ = 256 requeriría una novena posición de bit.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MSB (Most Significant Bit), con un peso posicional de 2^0 = 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Asigna erróneamente la denominación MSB al bit de la derecha y confunde su peso posicional.
  </div>
</details>

---

### Pregunta 14
Basándonos en la escala estandarizada de medidas de información empleada en informática basada en potencias de base 2, ¿cuál es el número exacto de Bytes contenidos en 1 GigaByte (GB)?

<details class="quiz-option incorrect">
  <summary>A) 2^20 Bytes = 1.048.576 Bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2²⁰ Bytes corresponde exactamente a la medida de 1 MegaByte (MB).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 2^30 Bytes = 1.073.741.824 Bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La escala binaria de almacenamiento se organiza en saltos de potencias de 2¹⁰ = 1.024: 1 KB = 2¹⁰ B = 1.024 Bytes; 1 MB = 2²⁰ B = 1.048.576 Bytes; y 1 GB = 2³⁰ B = 1.073.741.824 Bytes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 2^40 Bytes = 1.099.511.627.776 Bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2⁴⁰ Bytes equivale a la medida de 1 TeraByte (TB).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 1.000.000.000 Bytes exactos por definición no posicional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La escala de direccionamiento y gestión de memoria en los sistemas operativos no opera en base decimal pura (10⁹), sino en potencias binarias (2³⁰).
  </div>
</details>

---

### Pregunta 15
En la teoría general de sistemas de representación de la información, ¿cuál es la diferencia conceptual y técnica fundamental entre un sistema de numeración posicional y un sistema de numeración no posicional?

<details class="quiz-option correct">
  <summary>A) En los sistemas posicionales, el valor numérico que representa cada cifra depende tanto del símbolo en sí como de la posición relativa que ocupa dentro del número, mientras que en los no posicionales el símbolo conserva un valor fijo independientemente de su lugar.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En un sistema posicional (como el decimal, binario, octal o hexadecimal), una misma cifra representa un valor distinto según la posición en la que se ubique (por ejemplo, en el número decimal 55, el primer 5 vale 50 y el segundo vale 5). En los sistemas no posicionales (como la numeración romana), cada símbolo mantiene siempre su valor fijo sin importar su posición relativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En los sistemas no posicionales, el valor de la base siempre es una potencia de 2, mientras que los posicionales solo admiten la base decimal de 10 símbolos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los sistemas posicionales pueden estructurarse sobre cualquier base numérica entera mayor que 1 (base 2, 8, 10, 16), y los no posicionales carecen de relación con potencias de base 2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Los sistemas posicionales requieren el uso obligatorio de letras del alfabeto (A-F), mientras que los no posicionales se componen exclusivamente de los dígitos 0 y 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El uso de letras de la A a la F es exclusivo del sistema posicional hexadecimal (base 16), no una condición general de todos los sistemas posicionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Los sistemas posicionales solo se utilizan en el diseño del hardware de los dispositivos de entrada/salida, mientras que los no posicionales se emplean dentro de la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La distinción entre sistemas posicionales y no posicionales es un concepto matemático de representación de datos, no una separación de hardware entre periféricos y RAM.
  </div>
</details>

---

### Pregunta 16
Aplicando el Teorema Fundamental de la Numeración (TFN) para convertir un valor expresado en base binaria al sistema decimal, ¿cuál es el valor decimal equivalente del número binario 101101_2?

<details class="quiz-option incorrect">
  <summary>A) 37</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    37 corresponde a la secuencia binaria 100101₂ (faltaría activar el bit en la posición de peso 8).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 45</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Aplicando el TFN sumamos el producto de cada dígito por la base 2 elevada a su posición (de derecha a izquierda, empezando en 0): 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰ = 32 + 0 + 8 + 4 + 0 + 1 = 45 en decimal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 53</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    53 corresponde a la secuencia binaria 110101₂ (requeriría un 1 en la posición de peso 16).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 29</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    29 equivale a 011101₂ (error en la asignación del bit de mayor peso 32).
  </div>
</details>

---

### Pregunta 17
Se requiere convertir el número decimal 157_10 al sistema hexadecimal (base 16) mediante el procedimiento de divisiones sucesivas. ¿Cuál es el resultado obtenido expresado correctamente en notación hexadecimal?

<details class="quiz-option incorrect">
  <summary>A) 8E_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    8E₁₆ equivale en decimal a 8·16 + 14 = 142.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 9C_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    9C₁₆ utiliza la letra C (12 en decimal), resultando en 9·16 + 12 = 156 (error de cálculo por una unidad).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 9D_16</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dividimos 157 entre 16: obtenemos un cociente de 9 y un resto de 13. Como el cociente (9) es menor que la base (16), la división concluye. En base 16 el valor 13 se representa con la letra D. Leyendo el último cociente seguido de los restos obtenemos: 9D₁₆ (o 0x9D).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) A3_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    A3₁₆ equivale en decimal a 10·16 + 3 = 163.
  </div>
</details>

---

### Pregunta 18
Para convertir de forma rápida y directa el número binario 11010111_2 al sistema octal (base 8), ¿cuál es el método técnico correcto y el resultado obtenido?

<details class="quiz-option incorrect">
  <summary>A) Agrupar en bloques de 4 bits desde la izquierda; el resultado es 327_8.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La agrupación de 4 bits se utiliza para convertir a hexadecimal, no a octal, y los bloques deben agruparse siempre desde la derecha (LSB hacia MSB).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Dividir sucesivamente la secuencia entre 8; el resultado es 267_8.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Dividir manualmente cadenas binarias entre 8 resulta ineficiente e introduce errores que conducen a valores incorrectos como 267₈.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Agrupar en bloques de 2 bits desde la derecha; el resultado es 357_8.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La agrupación en bloques de 2 bits correspondería a una conversión a base 4 (2²), no a base 8 (2³).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Agrupar el número binario en bloques de 3 bits desde la derecha (añadiendo un cero a la izquierda si es necesario) y convertir cada bloque a su cifra octal; el resultado es 327_8.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dado que 8 = 2³, cada cifra octal equivale exactamente a un grupo de 3 bits. Separando desde la derecha: 111₂ = 7; 010₂ = 2; y 011₂ (añadiendo un cero a la izquierda) = 3. Uniendo los dígitos obtenemos 327₈.
  </div>
</details>

---

### Pregunta 19
Un administrador de redes analiza una dirección física MAC de una tarjeta de interfaz y necesita calcular la equivalencia hexadecimal de un octeto expresado en binario: 10111100_2. ¿Cuál es su representación hexadecimal exacta?

<details class="quiz-option correct">
  <summary>A) BC_16</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dado que 16 = 2⁴, se agrupa la cadena binaria en bloques de 4 bits (nibbles) de derecha a izquierda: el bloque izquierdo 1011₂ = 8 + 0 + 2 + 1 = 11, correspondiente a la letra B; el bloque derecho 1100₂ = 8 + 4 + 0 + 0 = 12, correspondiente a la letra C. El resultado es BC₁₆ (o 0xBC).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) AD_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AD₁₆ representa la secuencia binaria 10101101₂.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CB_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CB₁₆ invierte el orden posicional de los nibbles (coloca primero el bloque de menor peso).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) B12_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En el sistema hexadecimal los valores del 10 al 15 no se representan con dígitos decimales yuxtapuestos, sino utilizando los caracteres alfabéticos A, B, C, D, E y F.
  </div>
</details>

---

### Pregunta 20
El valor hexadecimal 0x7E se debe enviar a través de un bus de datos en formato binario de 8 bits. ¿Cuál es su secuencia equivalente de ceros y unos en memoria?

<details class="quiz-option incorrect">
  <summary>A) 01101110_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    01101110₂ se traduce a 6E₁₆ en hexadecimal (el primer nibble 0110₂ equivale a 6).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 01111110_2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Convertimos cada carácter hexadecimal a su bloque de 4 bits: el dígito 7 equivale a 0111₂ y la letra E (14 en decimal) equivale a 1110₂. Concatenando ambos bloques obtenemos 01111110₂.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 11110111_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte la posición de los caracteres hexadecimales, traduciendo erróneamente E7₁₆.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 01111101_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    01111101₂ se traduce a 7D₁₆ (el segundo nibble equivale a 13 en decimal, que corresponde a la letra D).
  </div>
</details>

---

### Pregunta 21
Un archivo en GNU/Linux dispone de unos permisos de acceso representados en notación octal como 754_8. Si se desea convertir este valor a su equivalente en sistema hexadecimal utilizando el método de paso intermedio vía binario, ¿cuál es el procedimiento y resultado final?

<details class="quiz-option incorrect">
  <summary>A) Multiplicar cada cifra octal por 16 de forma directa; el resultado es 1DB_16.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Multiplicar individualmente los dígitos octales por 16 carece de base matemática para la conversión posicional de base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Agrupar directamente los dígitos octales de 2 en 2; el resultado es 2F4_16.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los dígitos octales no pueden empaquetarse de 2 en 2 para pasar a base 16 directamente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Descomponer cada cifra octal en 3 bits binarios (111101100_2) y reagrupar esa cadena en bloques de 4 bits desde la derecha; el resultado es 1EC_16.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El método directo utiliza el sistema binario como puente: 1. Convertir cada dígito octal a 3 bits: 7 = 111₂, 5 = 101₂, 4 = 100₂ (cadena: 111101100₂); 2. Reagrupar en bloques de 4 bits desde la derecha: 0001 (añadiendo ceros), 1110, 1100; 3. Traducir a hexadecimal: 0001₂ = 1, 1110₂ = 14 (E), 1100₂ = 12 (C). Resultado: 1EC₁₆.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Dividir la cifra octal entre 16 sucesivamente; el resultado es 3EC_16.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El método de divisiones sucesivas entre 16 solo es aplicable si el número está expresado previamente en base 10 (decimal).
  </div>
</details>

---

### Pregunta 22
Al convertir el número decimal 83_10 al sistema binario por el método tradicional de divisiones sucesivas entre 2, ¿cuál es el valor binario resultante tras ordenar correctamente el último cociente y los restos obtenidos?

<details class="quiz-option incorrect">
  <summary>A) 1100101_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    1100101₂ equivale en decimal a 64 + 32 + 4 + 1 = 101.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 1010101_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    1010101₂ equivale en decimal a 64 + 16 + 4 + 1 = 85.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 1101001_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    1101001₂ equivale en decimal a 64 + 32 + 8 + 1 = 105.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) 1010011_2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dividimos entre 2: 83/2 = 41 (resto 1); 41/2 = 20 (resto 1); 20/2 = 10 (resto 0); 10/2 = 5 (resto 0); 5/2 = 2 (resto 1); 2/2 = 1 (resto 0). Leyendo desde el último cociente (1) hacia arriba con todos los restos obtenemos 1010011₂. Comprobación: 64 + 16 + 2 + 1 = 83.
  </div>
</details>

---

### Pregunta 23
Un microprocesador dispone de una longitud de palabra de datos de 8 bits y trabaja con valores numéricos en formato de entero sin signo (unsigned integer). ¿Cuál es el rango de valores decimales representables y el número total de combinaciones distintas posibles?

<details class="quiz-option correct">
  <summary>A) Rango de 0 a 255 en decimal, permitiendo un total de 256 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Con n bits se obtienen 2ⁿ combinaciones posibles. Para n = 8 bits: 2⁸ = 256 combinaciones únicas. En formato de entero sin signo (unsigned), el rango admisible se extiende desde el valor mínimo 0 (00000000₂) hasta el valor máximo 2ⁿ - 1 = 255 (11111111₂).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Rango de -128 a +127 en decimal, permitiendo un total de 255 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El rango de -128 a +127 corresponde a números enteros con signo (formato complemento a dos) y con 8 bits siempre existen 256 combinaciones, no 255.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Rango de 1 a 256 en decimal, permitiendo un total de 256 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En representación binaria posicional sin signo el valor mínimo con todos los bits a cero representa el número decimal 0, no el 1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Rango de 0 a 512 en decimal, permitiendo un total de 512 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    512 combinaciones requiere una longitud de palabra de 9 bits (2⁹ = 512).
  </div>
</details>

---

### Pregunta 24
En un sistema de numeración posicional de base b, ¿cuál es la regla matemática estricta que determina el conjunto de dígitos o símbolos válidos permitidos para construir números?

<details class="quiz-option incorrect">
  <summary>A) Los símbolos válidos van desde el número 1 hasta el valor exacto de la base b.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El símbolo 0 es obligatorio en los sistemas posicionales y el valor numérico idéntico a la base b nunca se representa con un solo dígito individual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Los símbolos válidos van desde el número 0 hasta el valor b - 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Por definición de los sistemas posicionales, una base b utiliza exactamente b símbolos distintos que abarcan desde el 0 hasta b - 1. Así, en base 10 los dígitos van del 0 al 9; en base 2 del 0 al 1; y en base 8 del 0 al 7.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Los símbolos válidos van desde el número 0 hasta el valor de la base b, incluyendo siempre letras de la A a la F.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El uso de letras alfabéticas solo es necesario en bases superiores a 10 cuando se agotan los diez dígitos decimales convencionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Los símbolos válidos son exclusivamente aquellos divisibles por 2 en cualquier base mayor que 8.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe ninguna restricción de divisibilidad por 2 en la regla general de definición de símbolos de un sistema posicional.
  </div>
</details>

---

### Pregunta 25
Al revisar scripts de administración y código fuente en sistemas operativos, ¿qué notación técnica o prefijo estándar identifica a un valor numérico como perteneciente al sistema hexadecimal y qué símbolos utiliza?

<details class="quiz-option incorrect">
  <summary>A) El prefijo 0b y utiliza símbolos del 0 al 7.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El prefijo 0b identifica la notación binaria (base 2), no la hexadecimal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El prefijo 0o y utiliza los símbolos del 0 al 9 exclusivamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El prefijo 0o identifica la notación octal (base 8), la cual solo emplea dígitos del 0 al 7.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El prefijo 0x y utiliza los dígitos del 0 al 9 junto con las letras de la A a la F (representando del 10 al 15).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En administración de sistemas y lenguajes de programación (C, Python, Bash, PowerShell), los literales hexadecimales se distinguen con el prefijo 0x (por ejemplo, 0x1A o 0xFF). Dispone de 16 símbolos: los dígitos 0 al 9 y las letras A a la F para los valores del 10 al 15.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El sufijo H obligatorio al inicio de la cadena utilizando los símbolos del 1 al 16.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un sufijo se coloca al final y el rango de símbolos siempre comienza en 0, no en 1.
  </div>
</details>

---

### Pregunta 26
Aplicando la extensión del Teorema Fundamental de la Numeración (TFN) para posiciones fraccionarias (exponentes negativos de la base), ¿cuál es el valor decimal exacto del número binario con coma 10.11_2?

<details class="quiz-option incorrect">
  <summary>A) 2.25 en decimal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2,25 en decimal corresponde al número binario 10.01₂ (solamente con el bit de peso 2⁻² activo).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 2.50 en decimal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2,50 corresponde a 10.10₂ (únicamente con el bit de peso 2⁻¹ activo).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 3.11 en decimal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Comete el error de copiar directamente las cifras decimales tras la coma sin aplicar las potencias fraccionarias de base 2.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) 2.75 en decimal.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Descomponemos las partes entera y fraccionaria: Parte entera = 1·2¹ + 0·2⁰ = 2 + 0 = 2; Parte fraccionaria = 1·2⁻¹ + 1·2⁻² = 0,5 + 0,25 = 0,75. Sumando ambas componentes obtenemos 2 + 0,75 = 2,75 en decimal.
  </div>
</details>

---

### Pregunta 27
¿Por qué en la administración de sistemas operativos e informática en general se emplean los sistemas Octal (base 8) y Hexadecimal (base 16) como notaciones de representación habituales?

<details class="quiz-option correct">
  <summary>A) Porque la base 8 (2^3) y la base 16 (2^4) son potencias exactas de la base 2, lo que permite acortar la escritura de cadenas binarias largas sustituyendo cada 3 o 4 bits por un solo carácter directamente sin realizar cálculos complejos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El procesador opera internamente en binario (base 2), pero las cadenas de ceros y unos resultan excesivamente extensas y difíciles de gestionar para los administradores. Dado que 8 = 2³ y 16 = 2⁴, las bases octal y hexadecimal permiten compactar la información: cada dígito octal resume exactamente 3 bits y cada dígito hexadecimal resume 4 bits (1 nibble), facilitando la lectura de permisos, máscaras de red y direcciones de memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque reducen el consumo eléctrico de la memoria RAM al comprimir físicamente los transistores del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema de numeración es una convención de representación lógica del software, no un mecanismo físico que altere los transistores o el voltaje.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque son sistemas no posicionales que evitan las interrupciones del ciclo de instrucción en el Kernel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tanto el sistema octal como el hexadecimal son sistemas estrictamente posicionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque son los únicos sistemas numéricos compatibles con la tecnología de arranque seguro Secure Boot en los firmwares UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Secure Boot se encarga de validar firmas criptográficas digitales del gestor de arranque, independientemente del formato de numeración que utilice el usuario.
  </div>
</details>

---

### Pregunta 28
Un administrador de sistemas consulta un informe técnico donde se indica que un archivo ocupa un bloque de memoria identificado en hexadecimal como 2A_16. Para introducir este parámetro en una herramienta de diagnóstico en formato decimal, ¿cuál es el valor equivalente que debe especificar?

<details class="quiz-option incorrect">
  <summary>A) 32</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    32 solo tiene en cuenta el valor del primer dígito (2·16¹), omitiendo sumar el valor de la cifra A.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 20</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Resultado de una operación aritmética errónea sin aplicar la base 16.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 42</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Aplicamos el Teorema Fundamental de la Numeración sobre 2A₁₆: el dígito 2 en la posición 1 equivale a 2·16¹ = 32; la letra A (que representa 10 en decimal) en la posición 0 equivale a 10·16⁰ = 10. Sumando ambos valores: 32 + 10 = 42 en decimal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 52</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    52 corresponde a la conversión del valor hexadecimal 34₁₆ (3·16 + 4 = 52).
  </div>
</details>
