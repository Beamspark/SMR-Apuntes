# Test de Autoevaluación: Tema 4

[← Volver al Tema 4: Configuración de sistemas operativos libres y propietarios](../tema-4.md)

---

### Pregunta 1
Cuando un sistema operativo experimenta fallos graves de estabilidad debido a un controlador (driver) defectuoso o una infección por malware que impide el inicio del entorno gráfico, ¿qué modo especial de arranque permite al técnico iniciar el equipo cargando únicamente los controladores y servicios mínimos esenciales para diagnosticar y reparar la incidencia?

<details class="quiz-option correct">
  <summary>A) Modo Seguro (o Entorno de Recuperación WinRE / Recovery Mode).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Modo Seguro (o entornos como WinRE en Windows y Recovery Mode en Linux) es un estado de ejecución de diagnóstico. Al seleccionar este modo, el sistema operativo ignora las aplicaciones de inicio de terceros, desactiva los controladores no esenciales (utilizando un controlador gráfico VESA/básico) y carga únicamente el núcleo y los servicios estrictamente imprescindibles. Esto permite desinstalar el software que causa el fallo, reparar controladores o restaurar el sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Modo de Inicio Rápido con Kernel hibernado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Inicio Rápido es una función estándar de aceleración del arranque que hiberna el Kernel, no un modo de diagnóstico de fallos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Modo WIMP de alta aceleración gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modelo WIMP describe el estándar de las interfaces gráficas convencionales, no un modo de arranque seguro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Modo de servicio automatizado crontab.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab es el servicio de automatización de tareas periódicas de Linux, no una herramienta de arranque de emergencia.
  </div>
</details>

---

### Pregunta 2
Desde la llegada de Windows 8 y manteniéndose en Windows 11, la opción por defecto "Apagar" no realiza un apagado completo tradicional. ¿En qué consiste técnicamente la tecnología Inicio Rápido (Fast Startup) y en qué archivo de disco almacena su estado?

<details class="quiz-option incorrect">
  <summary>A) Cierra todos los procesos del Kernel y guarda los documentos del usuario en la partición ESP del firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sesión que se hiberna es precisamente la del Kernel (no se cierra) y los datos no se guardan en la partición ESP.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Cierra las aplicaciones y sesiones de los usuarios, pero hiberna la sesión del núcleo (Kernel) del sistema operativo guardando su estado en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función Inicio Rápido (Fast Startup) de Windows es un modelo híbrido entre el apagado tradicional y la hibernación. Al hacer clic en "Apagar", Windows cierra la sesión del usuario y las aplicaciones activas, pero hiberna la sesión del Kernel escribiendo su estado en el archivo oculto hiberfil.sys. En el siguiente encendido, el sistema no tiene que inicializar el Kernel desde cero: lee directamente hiberfil.sys, reduciendo significativamente el tiempo de arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Mantiene la alimentación eléctrica continua en los chips de la memoria RAM consumiendo batería en segundo plano.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mantener energía continua en los módulos de RAM es la definición del estado de Suspensión, no del Inicio Rápido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Formatea los sectores dañados de la unidad mediante el comando sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Inicio Rápido no formatea sectores de disco ni ejecuta el comprobador de archivos sfc.
  </div>
</details>

---

### Pregunta 3
Un usuario de un ordenador portátil necesita pausar su trabajo durante varias horas. Requiere que el equipo no consuma nada de batería (consumo cero) y que, al encenderlo de nuevo, todos sus programas y documentos abiertos se recuperen en el mismo punto, incluso si se extrae la batería. ¿Qué estado de energía debe seleccionar y cómo opera?

<details class="quiz-option incorrect">
  <summary>A) Suspensión; guarda la sesión en la memoria RAM y mantiene la corriente eléctrica activa en la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La Suspensión mantiene alimentada la memoria RAM; si se agota la batería o se corta la corriente, los datos no guardados en la RAM se pierden.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Reinicio limpio; cierra todos los procesos y recarga la tabla GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un reinicio limpio cierra todas las aplicaciones y elimina los datos no guardados de la sesión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Hibernación; copia el contenido completo de la memoria RAM en el disco duro y corta totalmente la alimentación eléctrica del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Hibernación toma una captura completa de todo el contenido de la memoria RAM activa (documentos, aplicaciones, ventanas) y lo escribe en el disco de almacenamiento masivo (hiberfil.sys). Una vez guardada la imagen, apaga el equipo por completo (consumo eléctrico cero). Al encenderlo nuevamente, el sistema lee el archivo del disco y restaura la RAM al estado exacto previo, resistiendo cortes totales de corriente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Apagado por Inicio Rápido; conserva la sesión del usuario en la caché L1 del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Inicio Rápido cierra la sesión de usuario (no guarda sus aplicaciones abiertas) y la caché L1 es volátil.
  </div>
</details>

---

### Pregunta 4
En el mantenimiento de sistemas operativos, ¿por qué es obligatorio realizar un Reinicio (Restart) tras instalar parches de seguridad críticos o controladores en lugar de utilizar la función "Apagar" con Inicio Rápido activado?

<details class="quiz-option incorrect">
  <summary>A) Porque el reinicio es el único comando que ejecuta el test POST de la BIOS UEFI de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El test POST lo realiza el firmware hardware al recibir energía, y UEFI no es de 16 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque la opción "Apagar" borra permanentemente la tabla de particiones del disco duro secundario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Apagar el equipo nunca destruye ni borra las tablas de particiones de los discos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque el reinicio convierte las rutas absolutas de Windows en rutas relativas de Linux.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La acción de reiniciar no modifica la sintaxis de las rutas de los sistemas de archivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Porque el reinicio fuerza el cierre completo y real de la sesión del Kernel, destruyendo el estado hibernado anterior y cargando desde cero todos los módulos y controladores actualizados.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dado que la función "Apagar" con Inicio Rápido hiberna la sesión del Kernel existente en hiberfil.sys, si se instala un controlador o un parche del sistema y simplemente se apaga el equipo, al encenderlo se volverá a cargar el Kernel viejo hibernado. La función Reinicio (Restart) ignora el Inicio Rápido: realiza un apagado completo y limpio del Kernel y de los servicios, permitiendo que el sistema cargue desde cero los nuevos archivos y controladores actualizados.
  </div>
</details>

---

### Pregunta 5
Un administrador debe ausentarse de su puesto de trabajo de forma imprevista durante unos minutos. Desea impedir que personas no autorizadas accedan a su sesión, pero necesita que sus máquinas virtuales y procesos de descarga continúen ejecutándose en segundo plano. ¿Qué acción debe realizar y cuáles son los atajos de teclado rápidos en Windows y Ubuntu respectivamente?

<details class="quiz-option correct">
  <summary>A) Bloquear la sesión; atajos Windows + L en Windows y Super + L en Ubuntu.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Bloquear la sesión oculta la interfaz de usuario bajo la pantalla de autenticación requiriendo introducir de nuevo la contraseña. Los programas, descargas y máquinas virtuales siguen ejecutándose activamente en segundo plano. Los atajos universales de teclado son Windows + L en Microsoft Windows y Super + L en Ubuntu Linux (donde la tecla Super equivale a la tecla con el logotipo de Windows).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cerrar la sesión; atajos Ctrl + Alt + Supr en Windows y sudo apt clean en Ubuntu.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cerrar la sesión finaliza todos los programas y procesos del usuario, interrumpiendo las descargas y máquinas virtuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cambiar de usuario; atajos Alt + F4 en ambos sistemas operativos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + F4 se utiliza para cerrar la ventana o aplicación activa, no para conmutar de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Suspender el equipo; atajos Shift + Supr en ambos sistemas operativos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Suspender el equipo detiene la actividad de la CPU, pausando las descargas y tareas de red.
  </div>
</details>

---

### Pregunta 6
Las interfaces gráficas de usuario (GUI) modernas se basan mayoritariamente en el estándar conceptual denominado modelo WIMP. ¿Qué significado tienen exactamente las siglas de este acrónimo técnico?

<details class="quiz-option incorrect">
  <summary>A) Web, Internet, Memory, Process.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Combinación de palabras que no corresponde al estándar WIMP.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Windows (Ventanas), Icons (Iconos), Menus (Menús), Pointer (Puntero).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modelo WIMP es el paradigma de diseño visual introducido en los centros de investigación de Xerox PARC y popularizado por Apple y Microsoft. Define los 4 elementos de la interfaz gráfica: Windows (áreas rectangulares en pantalla), Icons (pictogramas gráficos), Menus (listas desplegables de comandos) y Pointer (indicador en pantalla controlado por el ratón).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Wide, Integrated, Main, Partition.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Términos ficticios ajenos a la definición del acrónimo de diseño de interfaces.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Windows, Installer, Microkernel, Pagefile.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla componentes de sistemas operativos que no corresponden a los elementos de interacción gráfica WIMP.
  </div>
</details>

---

### Pregunta 7
En el ámbito de las interfaces de línea de comandos (CLI), ¿cuál es la distinción técnica entre los conceptos de Terminal, Shell (o Intérprete de comandos) y Prompt?

<details class="quiz-option incorrect">
  <summary>A) La Terminal es el algoritmo de la ALU, la Shell es la partición ESP y el Prompt es el archivo de registro /var/log.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla componentes de hardware y particiones con conceptos de interfaz CLI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La Terminal es la pantalla gráfica WIMP, la Shell es el compilador de C y el Prompt es el atajo de bloqueo Super + L.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde interfaces gráficas, compiladores y atajos de teclado con las herramientas de la línea de comandos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La Terminal es el entorno o ventana de texto que recoge la entrada y muestra la salida; la Shell es el programa que interpreta los comandos escritos (ej. Bash, PowerShell); y el Prompt es el indicador visual que señala que el sistema está listo para recibir órdenes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Terminal es el contenedor visual de texto para entrada/salida; la Shell es el programa intérprete que analiza y ejecuta las órdenes enviadas (como Bash en Linux o PowerShell en Windows); y el Prompt es la cadena indicadora (como usuario@equipo:~$ o C:\>) que indica que la Shell espera nuevas instrucciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La Terminal es un hipervisor de Tipo 1, la Shell es una máquina virtual con Windows 11 y el Prompt es la tabla de particiones MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde conceptos de virtualización y particionado con la línea de comandos.
  </div>
</details>

---

### Pregunta 8
A la hora de organizar los archivos en el disco, ¿cuál es la diferencia estructural fundamental en la organización del árbol de directorios entre los sistemas operativos Windows y GNU/Linux?

<details class="quiz-option incorrect">
  <summary>A) Windows utiliza un único árbol global que empieza en el directorio /var, mientras que Linux asigna letras de unidad (A:, B:, C:) a cada disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte por completo la estructura de almacenamiento de ambos sistemas operativos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Windows guarda todas las carpetas en la memoria RAM volátil, mientras que Linux utiliza exclusivamente la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos sistemas operativos almacena su jerarquía de directorios en memoria RAM volátil.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Windows utiliza la barra normal (/) para separar carpetas y Linux utiliza obligatoriamente la barra invertida (\).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el uso de los separadores de ruta: Windows emplea la barra invertida (\) y Linux la barra normal (/).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Windows asigna una letra de unidad independiente a cada volumen o partición (C:\, D:\) con su propio árbol, mientras que Linux utiliza un único árbol de directorios global con origen en el directorio raíz (/), donde las demás unidades se integran mediante montajes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Windows cada partición posee su propia letra de unidad y raíz (C:\, D:\). En Linux existe un único árbol jerárquico global cuyo punto de partida es la raíz (/), y cualquier partición o dispositivo adicional se integra en este árbol vinculándose a una carpeta mediante el proceso de montaje.
  </div>
</details>

---

### Pregunta 9
Un administrador de sistemas Linux necesita revisar los archivos de configuración del sistema operativo, acceder a los directorios personales de los usuarios locales y consultar los archivos de registro (logs) de auditoría. ¿En qué carpetas del árbol de directorios raíz (/) se encuentran estos tres elementos respectivamente?

<details class="quiz-option correct">
  <summary>A) En /etc (configuración), /home (directorios personales) y /var (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Según el estándar FHS de Linux: /etc almacena ficheros de configuración del sistema y servicios en texto plano; /home aloja las carpetas personales de los usuarios convencionales; y /var almacena datos variables, entre ellos los logs del sistema (/var/log).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En /boot (configuración), /tmp (directorios personales) y /usr (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /boot almacena el Kernel y archivos de arranque, /tmp archivos temporales y /usr programas y librerías de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En /media (configuración), /dev (directorios personales) y /bin (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /media es el punto de montaje de unidades extraíbles, /dev representa los dispositivos hardware y /bin contiene binarios esenciales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En /root (configuración), /etc (directorios personales) y /boot (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /root es el directorio personal exclusivo del superusuario root, no la ubicación de las configuraciones globales.
  </div>
</details>

---

### Pregunta 10
Dentro del árbol de directorios raíz de Ubuntu Linux, ¿cuál es la función de la carpeta /boot y qué elemento crítico del sistema operativo alberga en su interior?

<details class="quiz-option incorrect">
  <summary>A) Guardar las descargas de los usuarios y alojar la base de datos del Registro de Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las descargas de usuario se ubican en /home y el Registro de Windows no existe en los sistemas Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Contener los archivos necesarios para el arranque del sistema, incluyendo la imagen del núcleo (Kernel) de Linux y los archivos de configuración del gestor de arranque GRUB.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La carpeta /boot contiene los componentes imprescindibles para inicializar el sistema: la imagen comprimida del Kernel Linux (vmlinuz), el sistema de archivos temporal inicial (initrd.img) y las configuraciones y módulos del bootloader GRUB.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenar los archivos temporales que se borran automáticamente en cada reinicio del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos temporales volátiles se gestionan en el directorio /tmp.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Montar automáticamente los dispositivos de almacenamiento extraíbles como pendrives USB y tarjetas SD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El montaje automático de almacenamiento extraíble se realiza en la carpeta /media.
  </div>
</details>

---

### Pregunta 11
Un técnico que trabaja en la consola CLI de Linux se encuentra posicionado en el directorio /home/eva y necesita acceder al archivo informe.txt ubicado en /home/eva/Documentos/informe.txt. ¿Cuál es la diferencia entre especificar el acceso mediante una ruta absoluta o una ruta relativa?

<details class="quiz-option incorrect">
  <summary>A) La ruta absoluta es Documentos/informe.txt y la relativa es /boot/informe.txt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte las definiciones y hace referencia a una ruta incorrecta en /boot.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La ruta absoluta utiliza la barra invertida \ y la relativa la notación binaria 0x.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La notación 0x representa valores hexadecimales, no rutas del sistema de archivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La ruta absoluta indica el camino completo desde la raíz del sistema (/home/eva/Documentos/informe.txt), mientras que la relativa indica el camino partiendo desde el directorio actual donde está situado el usuario (Documentos/informe.txt).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La ruta absoluta inicia obligatoriamente en la raíz del sistema (/) y localiza el archivo de forma unívoca independientemente de dónde esté situado el usuario. La ruta relativa describe el trayecto tomando como origen el directorio de trabajo activo actual (/home/eva).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La ruta absoluta solo se puede utilizar con el comando sudo y la relativa exige la presencia de un hipervisor de Tipo 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las rutas son convenciones de referencia del sistema de archivos que no dependen de sudo ni de tecnologías de virtualización.
  </div>
</details>

---

### Pregunta 12
Un ordenador sufre un corte repentino en el suministro eléctrico mientras el sistema operativo estaba escribiendo datos en el disco duro (apagado incorrecto). ¿Cuál es el principal riesgo técnico al que se expone el sistema y qué mecanismo de los sistemas de archivos modernos mitiga los daños?

<details class="quiz-option incorrect">
  <summary>A) La destrucción del procesador físico por un sobrevoltaje en el bus de direcciones; mitigado por el comando free -m.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un corte de suministro no altera el bus de direcciones ni el comando free -m repara unidades de almacenamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La conversión automática de las licencias libres GPL en licencias propietarias; mitigada por el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un apagado inesperado no tiene efectos legales sobre los términos de licenciamiento del software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La pérdida de la memoria caché L1; mitigada por el modelo de interfaz WIMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria caché L1 es volátil y WIMP es un estándar de diseño de interfaz gráfica.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La corrupción del sistema de archivos y pérdida de la integridad de los datos; mitigado por la técnica de transacciones del diario (Journaling) en NTFS, ext4 y APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un corte eléctrico abrupto interrumpe escrituras a medio procesar, pudiendo dañar las estructuras de datos. Los sistemas con Journaling (como NTFS, ext4 o APFS) anotan previamente los cambios en un registro o diario antes de consolidarlos, lo que permite reconstruir la coherencia del disco de forma rápida y segura tras un reinicio inesperado.
  </div>
</details>

---

### Pregunta 13
En el sistema operativo Windows 11, un administrador desea comprobar mediante la consola de comandos qué estados de energía e hibernación están soportados por el hardware del equipo. ¿Qué comando de la herramienta powercfg debe ejecutar?

<details class="quiz-option correct">
  <summary>A) powercfg /a (o powercfg /availablesleepstates)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El parámetro /a (o /availablesleepstates) de la utilidad powercfg examina las capacidades del hardware y firmware e informa de los estados de suspensión, suspensión híbrida, inicio rápido e hibernación disponibles en el equipo, indicando los motivos por los que alguno no pueda utilizarse.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) powercfg /sfc</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /sfc no es un modificador de la herramienta powercfg; sfc es un comando independiente del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) powercfg /journaling</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Parámetro inexistente en la utilidad powercfg.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) powercfg /format</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    powercfg no incluye ningún parámetro de formateo de disco.
  </div>
</details>

---

### Pregunta 14
En la gestión de archivos y almacenamiento, ¿cuál es la diferencia conceptual y técnica fundamental entre los algoritmos de compresión sin pérdida (Lossless) y los de compresión con pérdida (Lossy)?

<details class="quiz-option correct">
  <summary>A) La compresión sin pérdida permite recuperar exactamente el archivo original bit a bit tras la descompresión (usada en ZIP, RAR, 7Z, TAR.GZ), mientras que la compresión con pérdida elimina datos imperceptibles para reducir enormemente el tamaño sin posibilidad de recuperar el original exacto (usada en MP3, JPEG, MP4).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Lossless (sin pérdida) detecta patrones redundantes sin eliminar ningún bit, permitiendo reconstruir el original exacto (indispensable para ejecutables, texto y bases de datos). Lossy (con pérdida) descarta componentes poco perceptibles por los sentidos humanos para lograr reducciones drásticas de tamaño en archivos multimedia, sin posibilidad de reconstrucción matemática idéntica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La compresión sin pérdida se ejecuta exclusivamente en el espacio de memoria del Kernel, mientras que la compresión con pérdida se ejecuta dentro de la partición ESP del firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los programas de compresión se ejecutan como software en modo usuario, no en el espacio del Kernel ni en la partición ESP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La compresión sin pérdida exige formatear el disco en FAT32, mientras que la compresión con pérdida requiere el uso del comando sudo apt remove.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La compresión de archivos no guarda relación con el sistema de archivos FAT32 ni con la desinstalación de paquetes APT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La compresión sin pérdida solo se aplica sobre archivos ejecutables de 16 bits, mientras que la compresión con pérdida es un algoritmo no expulsivo de planificación de la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la compresión de ficheros con la planificación de procesos del procesador.
  </div>
</details>

---

### Pregunta 15
En entornos GNU/Linux, ¿cuál es la diferencia técnica entre empaquetar una carpeta utilizando el formato .tar o comprimirla en formato .tar.gz?

<details class="quiz-option incorrect">
  <summary>A) .tar es un ejecutable de modo núcleo y .tar.gz es una imagen de firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No son ejecutables de Kernel ni imágenes de firmware UEFI.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) .tar simplemente agrupa o empaqueta múltiples archivos y carpetas en un único fichero contenedor sin reducir su tamaño, mientras que .tar.gz toma ese paquete contenedor y le aplica el algoritmo de compresión GZIP para reducir su espacio en disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando tar (Tape Archiver) une directorios y archivos conservando permisos en un solo archivo contenedor sin comprimir. Al procesar ese contenedor con el algoritmo GZIP se genera un archivo .tar.gz (o .tgz), que combina el empaquetado inicial con una compresión sin pérdida de tamaño.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) .tar es un formato propietario exclusivo de Windows 11 y .tar.gz es un archivo de registro de /var/log.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    tar es una herramienta clásica de entornos Unix/Linux, no un formato de Windows ni un log del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .tar aplica compresión con pérdida y .tar.gz desfragmenta las unidades de estado sólido SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .tar.gz utiliza compresión sin pérdida y no realiza labores de desfragmentación de unidades de disco.
  </div>
</details>

---

### Pregunta 16
Un administrador debe comprimir una base de datos corporativa de producción (empresa.mdf) para enviarla por red a un servidor de copias de seguridad. ¿Por qué sería un error grave utilizar un algoritmo de compresión con pérdida (Lossy) como JPEG o MP3 sobre este archivo?

<details class="quiz-option incorrect">
  <summary>A) Porque la compresión con pérdida aumentaría diez veces el tamaño del archivo en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La compresión con pérdida reduce el tamaño, pero elimina datos necesarios para la estructura de la base de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque la compresión con pérdida exige ejecutar el comando sfc /scannow antes de comprimir.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es el escáner de archivos de Windows y no interviene en procesos de compresión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Porque los algoritmos con pérdida eliminan bits de datos considerados redundantes, lo que corrompería la estructura interna de la base de datos volviéndola completamente inservible e imposible de abrir.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los datos estructurados, código binario y bases de datos exigen una integridad estricta de cada bit. Si un algoritmo con pérdida descarta datos de sus tablas o índices, el archivo queda irrecuperable y corrompido, por lo que sobre este tipo de información solo se puede emplear compresión sin pérdida (Lossless).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque los archivos de bases de datos solo se pueden empaquetar mediante el Programador de Tareas en modo seguro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El empaquetado de bases de datos no exige ejecutar el Programador de tareas en Modo Seguro.
  </div>
</details>

---

### Pregunta 17
¿Qué define a una aplicación portable (portable software) en un sistema operativo y cuál es su principal ventaja operativa cuando se trabaja desde una memoria USB?

<details class="quiz-option incorrect">
  <summary>A) Es una aplicación que solo funciona si el ordenador dispone de una batería de portátil cargada al 100%.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El concepto de portabilidad se refiere a la independencia de instalación en el SO, no a la carga de la batería.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es una aplicación que se instala obligatoriamente en el archivo de registro HKEY_LOCAL_MACHINE.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las aplicaciones portables se caracterizan precisamente por evitar escribir claves en el Registro de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un tipo de controlador que convierte los comandos de PowerShell en instrucciones del servicio cron.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se trata de un controlador de conversión entre PowerShell y el demonio cron.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Es una aplicación que no requiere un proceso de instalación formal ni modifica el registro del sistema o carpetas de sistema, pudiendo ejecutarse directamente desde un directorio o pendrive USB en cualquier equipo compatible.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El software portable almacena sus configuraciones y dependencias dentro de su propia carpeta. Al no requerir un asistente de instalación que copie archivos a directorios protegidos del sistema ni escribir en el registro central, puede ejecutarse directamente desde un dispositivo extraíble en cualquier ordenador compatible.
  </div>
</details>

---

### Pregunta 18
En el sistema operativo Ubuntu Linux, un técnico necesita instalar el editor de texto nano y posteriormente desinstalar el reproductor multimedia vlc mediante el gestor de paquetes APT. ¿Cuáles son los comandos de consola exactos que debe ejecutar con privilegios administrativos?

<details class="quiz-option correct">
  <summary>A) Instalación: sudo apt install nano | Desinstalación: sudo apt remove vlc</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el gestor APT: sudo apt install descarga y despliega el paquete indicado junto con sus dependencias; mientras que sudo apt remove desinstala el paquete especificado eliminando sus ejecutables del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Instalación: sudo apt update nano | Desinstalación: sudo apt clean vlc</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update actualiza los índices de repositorios y apt clean vacía la caché de paquetes .deb, pero ninguno instala ni elimina aplicaciones concretas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Instalación: sudo apt upgrade nano | Desinstalación: sudo apt autoremove vlc</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt upgrade actualiza todos los paquetes instalados y autoremove elimina dependencias huérfanas sin admitir nombres específicos para desinstalar una aplicación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Instalación: sfc /install nano | Desinstalación: systeminfo /remove vlc</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc y systeminfo son herramientas de Microsoft Windows ajenas al gestor de software APT de Linux.
  </div>
</details>

---

### Pregunta 19
¿Cuál es la diferencia fundamental en entornos corporativos de Windows entre desplegar software empaquetado en un instalador ejecutable .exe y un paquete del instalador de Windows .msi?

<details class="quiz-option incorrect">
  <summary>A) .exe es un archivo comprimido sin pérdida y .msi es un archivo de registro de /var/log.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No describe formatos de compresión ni archivos de log de Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) .exe es un programa ejecutable arbitrario con un asistente propio, mientras que .msi es un paquete estandarizado administrado por el servicio Windows Installer, que permite despliegues centralizados, instalaciones silenciosas sin interfaz y distribución masiva mediante directivas de grupo (GPO).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los paquetes .msi (Microsoft Installer) estructuran la instalación bajo un estándar de base de datos relacional reconocido por el servicio Windows Installer. Esto permite a los administradores automatizar la instalación de software de forma desatendida mediante parámetros silenciosos y desplegar aplicaciones en red en cientos de puestos mediante GPO en Active Directory.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) .exe solo funciona en procesadores de 16 bits y .msi exige el uso del comando sudo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los ejecutables .exe operan en 32/64 bits y los paquetes .msi no utilizan comandos propios de Linux como sudo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .exe borra la partición ESP y .msi formatea el disco en ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos instaladores borra la partición ESP ni formatea discos en sistemas de archivos ext4.
  </div>
</details>

---

### Pregunta 20
En el sistema operativo Windows 11, un administrador desea que el sistema ejecute automáticamente un script de copia de seguridad todos los días a las 03:00 AM. ¿Qué herramienta nativa del sistema debe utilizar y cuáles son los dos componentes fundamentales que definen dicha tarea?

<details class="quiz-option incorrect">
  <summary>A) El administrador de servicios services.msc; definido por el Kernel y el BCP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    services.msc administra servicios de ejecución continua en segundo plano, no tareas programadas a horas determinadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El visor de eventos eventvwr.msc; definido por la caché L1 y el bus de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    eventvwr.msc es un visor de logs históricos del sistema, no un programador de tareas futuras.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El Programador de Tareas (Task Scheduler); definido por Desencadenadores (Triggers) y Acciones (Actions).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Programador de Tareas de Windows automatiza ejecuciones configurando dos elementos clave: los Desencadenadores (Triggers), que definen las condiciones temporales o eventos que activan la tarea (por ejemplo, a las 03:00 AM); y las Acciones (Actions), que establecen la orden o script que se debe ejecutar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El comprobador de archivos sfc.exe; definido por las rutas absolutas y relativas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc.exe comprueba y repara archivos protegidos del sistema operativo, no programa tareas.
  </div>
</details>

---

### Pregunta 21
En sistemas GNU/Linux como Ubuntu, ¿qué servicio o demonio se encarga del procesamiento de tareas automatizadas en segundo plano, cuál es el comando para editar la tabla del usuario y en qué orden se especifican los 5 campos de tiempo de una línea en crontab?

<details class="quiz-option incorrect">
  <summary>A) Servicio systemd; comando systemctl edit; campos: Hora, Minuto, Mes, Día, Comando.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Altera el orden de los campos temporales colocando la Hora por delante del Minuto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Servicio bash; comando sudo apt edit; campos: Segundo, Minuto, Hora, Día, Mes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab no utiliza un campo de Segundos al inicio ni se edita mediante apt.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Servicio spooler; comando services.msc; campos: Día, Mes, Año, Hora, Minuto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    spooler gestiona colas de impresión y services.msc es una consola de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Servicio cron; comando crontab -e; campos: Minuto (0-59), Hora (0-23), Día del mes (1-31), Mes (1-12), Día de la semana (0-7).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El demonio cron ejecuta tareas programadas en Linux. La tabla de tareas del usuario se edita con crontab -e y cada entrada define 5 campos de tiempo seguidos del comando: 1. Minuto (0-59); 2. Hora (0-23); 3. Día del mes (1-31); 4. Mes (1-12); y 5. Día de la semana (0-7, donde 0 y 7 representan el domingo).
  </div>
</details>

---

### Pregunta 22
Un administrador de sistemas Linux consulta el archivo crontab de un servidor y encuentra la siguiente línea programada:  
`30 8 * * 1-5 /usr/bin/backup.sh`  
¿Cuándo se ejecutará exactamente el script `/usr/bin/backup.sh`?

<details class="quiz-option correct">
  <summary>A) Todos los días laborables de lunes a viernes a las 08:30 AM.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Desglosando los campos temporales: Minuto = 30; Hora = 8 (08:30 AM); Día del mes = * (cualquier día); Mes = * (cualquier mes); Día de la semana = 1-5 (del lunes, 1, al viernes, 5). Por tanto, la tarea se lanza de lunes a viernes a las 08:30 AM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El día 30 de agosto de cada año a las 01:05 AM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde el minuto 30 con el día del mes y la hora 8 con el mes de agosto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Todos los domingos a las 08:30 PM durante los primeros 5 meses del año.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La hora 8 indica la mañana (08:00 AM) y el valor 1-5 representa los días laborables de la semana, no los primeros 5 meses.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cada 30 minutos durante 8 horas seguidas los fines de semana.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Interpretación errónea de la sintaxis estándar de crontab.
  </div>
</details>

---

### Pregunta 23
Se desea programar una tarea en el servicio cron de Ubuntu para que un script de mantenimiento `/scripts/limpieza.sh` se ejecute todos los domingos a las 22:00 horas (10:00 PM). ¿Cuál es la línea de comandos exacta que debe añadirse mediante `crontab -e`?

<details class="quiz-option incorrect">
  <summary>A) 22 0 * * 7 /scripts/limpieza.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los campos de hora y minuto, programando la ejecución a las 00:22 horas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 0 22 * * 0 /scripts/limpieza.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El orden de campos requerido es: Minuto = 0 (en punto); Hora = 22 (formato 24h para las 10:00 PM); Día del mes = * (cualquiera); Mes = * (cualquiera); Día de la semana = 0 (o 7, domingo), seguido de la ruta al script a ejecutar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 0 10 * * 7 /scripts/limpieza.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La hora 10 indica las 10:00 AM de la mañana, no las 22:00 horas (10:00 PM).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 22 10 7 * * /scripts/limpieza.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Desordena todos los campos asignando valores temporales erróneos.
  </div>
</details>

---

### Pregunta 24
Un administrador de sistemas Linux necesita consultar por pantalla (listar) las tareas actualmente programadas en su archivo crontab sin abrir el editor de texto, y posteriormente desea borrar por completo todas sus tareas programadas. ¿Qué comandos debe ejecutar para estas dos acciones respectivamente?

<details class="quiz-option incorrect">
  <summary>A) Listar: crontab -e | Borrar: crontab -s</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab -e abre el editor de texto para modificar el archivo y el parámetro -s no corresponde a la acción de borrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Listar: crontab -a | Borrar: crontab -d</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existen los parámetros -a ni -d para el comando crontab.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Listar: crontab -l | Borrar: crontab -r</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando crontab -l (list) muestra en la consola el contenido actual de la tabla de tareas del usuario sin abrir ningún editor. Por su parte, crontab -r (remove) elimina íntegramente el archivo crontab del usuario, descartando todas las tareas automatizadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Listar: systeminfo /cron | Borrar: sudo apt clean cron</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systeminfo es una herramienta de Windows y apt clean limpia paquetes descargados de la caché, no tareas de cron.
  </div>
</details>

---

### Pregunta 25
¿Por qué motivo técnico se considera más seguro instalar software desde tiendas oficiales (como Microsoft Store) o repositorios oficiales mediante gestores de paquetes (como APT en Linux) que descargar instaladores binarios directamente desde sitios web de terceros?

<details class="quiz-option incorrect">
  <summary>A) Porque los repositorios oficiales convierten los programas en firmware UEFI de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No convierten aplicaciones de usuario en código de firmware UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque las tiendas oficiales deshabilitan la memoria virtual swap en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La procedencia de los paquetes no altera ni desactiva la memoria de intercambio swap.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque la instalación desde repositorios no consume espacio en la memoria RAM del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cualquier programa en ejecución consume memoria RAM con independencia de su canal de descarga.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Porque los paquetes de los repositorios y tiendas oficiales están auditados, firmados digitalmente por los mantenedores para garantizar que no contienen malware, y sus dependencias se resuelven y actualizan automáticamente desde fuentes de confianza.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los repositorios y tiendas centralizadas ofrecen garantías de seguridad: el software es revisado, empaquetado bajo estándares rigurosos y firmado criptográficamente con claves de confianza para evitar alteraciones o código malicioso. Además, el gestor de paquetes resuelve e instala de forma automática y coherente todas las dependencias requeridas.
  </div>
</details>
