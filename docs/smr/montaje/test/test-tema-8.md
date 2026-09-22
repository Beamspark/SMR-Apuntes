# Test de Autoevaluación: Tema 8

[← Volver al Tema 8: Puesta en marcha del equipo](../tema-8.md)

---

### Pregunta 1
Tras finalizar el ensamblado del chasis y la caja, ¿cuál es el orden secuencial correcto para encender los dispositivos en la puesta en marcha inicial?

<details class="quiz-option incorrect">
  <summary>A) Encender primero el ordenador, luego el monitor y finalmente conmutar la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si se enciende el ordenador antes que la fuente o el monitor, no se podrá visualizar la primera fase del arranque ni la señal de inicialización de la gráfica.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Encender primero la fuente de alimentación, seguidamente la pantalla (monitor) y, por último, pulsar el botón de encendido del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La secuencia estándar exige energizar primero la fuente de alimentación mediante su interruptor I/O tras el chasis, encender el monitor para que esté listo para recibir señal de vídeo y, finalmente, accionar el botón de encendido del ordenador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Encender el monitor y el ordenador de forma simultánea mientras se mantiene pulsada la tecla F8.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Encender todo de golpe sin preparar la pantalla puede hacer que el técnico se pierda el mensaje en pantalla para entrar a la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conectar la red Wi-Fi antes de dar corriente eléctrica a la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La red Wi-Fi es una conexión lógica posterior que depende del sistema operativo y no interviene en la secuencia eléctrica de arranque.
  </div>
</details>

---

### Pregunta 2
Durante los primeros segundos tras pulsar el botón de encendido del ordenador, ¿qué comprobaciones físicas inmediatas debe realizar el técnico antes de mirar la pantalla?

<details class="quiz-option incorrect">
  <summary>A) Verificar que se ha formateado el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formateo de discos es una tarea lógica avanzada de software que no ocurre en el instante cero de encendido.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Comprobar visualmente que gira el ventilador de la CPU/fuente, que se encienden los leds delanteros y prestar atención por si la placa emite señales acústicas (pitidos) de error.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El primer diagnóstico físico consiste en verificar la presencia de energía (movimiento de aspas de ventiladores y encendido de leds) y la ausencia de pitidos de error de la comprobación POST de la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Medir el nivel de interferencia de las antenas Bluetooth.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Medir ondas Bluetooth no es la comprobación inicial de encendido del hardware básico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Comprobar si se ha descargado la última actualización de Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sin haber iniciado el equipo ni cargado un SO con red, no es posible comprobar descargas de actualizaciones.
  </div>
</details>

---

### Pregunta 3
¿Qué es el programa denominado BIOS Setup Utility (o interfaz UEFI)?

<details class="quiz-option incorrect">
  <summary>A) Un compilador de código fuente en lenguaje C++ para crear juegos 3D.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS no es un entorno de desarrollo o compilador de aplicaciones.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un programa o software de base grabado en memoria no volátil que permite configurar los parámetros de hardware del equipo y gestionar el arranque inicial.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La BIOS / UEFI es el firmware de bajo nivel residente en la memoria Flash de la placa base que chequea el hardware y permite configurar los parámetros esenciales del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un controlador de red que permite la navegación por páginas web de forma anónima.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un driver ni un navegador web, es el firmware del sistema base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un antivirus preinstalado por Microsoft en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un programa de seguridad del sistema operativo ni se ubica en el disco duro.
  </div>
</details>

---

### Pregunta 4
¿Qué teclas de teclado se utilizan de forma estándar en la mayoría de placas base para acceder al menú de configuración de la BIOS/UEFI durante la pantalla de inicio?

<details class="quiz-option incorrect">
  <summary>A) Alt + F4 o Control + Alt + Suprimir.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + F4 cierra ventanas en Windows y Ctrl + Alt + Supr reinicia o abre el administrador de tareas del sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Tecla Suprimir (Del) o F2.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las teclas más comunes programadas por los fabricantes para interrumpir la secuencia POST e ingresar a la BIOS Setup Utility son Suprimir (o Delete) y F2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Barra espaciadora o Enter.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La barra espaciadora o Enter no son teclas reservadas estándar de acceso a la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Tecla Windows + R.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Win + R abre la ventana "Ejecutar" dentro del sistema operativo Windows.
  </div>
</details>

---

### Pregunta 5
¿Qué ocurre si el técnico no pulsa la tecla de acceso a la BIOS (Supr / F2) en el momento preciso de la pantalla de inicio?

<details class="quiz-option incorrect">
  <summary>A) Se borra la memoria CMOS de forma permanente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No pulsar la tecla no borra la configuración retenida en la memoria CMOS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El programa de arranque sigue su curso normal y el técnico deberá reiniciar el ordenador para volver a intentarlo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Si se supera la ventana de tiempo del POST sin pulsar la tecla correspondiente, la BIOS cede el control al cargador del sistema operativo y hay que reiniciar para entrar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La fuente de alimentación se apaga por protección de sobrevoltaje.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fuente de alimentación no se apaga por continuar con el arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El monitor cambia su resolución automáticamente a 4K.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La resolución de pantalla no sufre alteraciones por continuar el proceso de arranque.
  </div>
</details>

---

### Pregunta 6
Aunque cada fabricante diseña su propia interfaz de BIOS/UEFI, ¿cuáles son los cinco apartados o secciones principales comunes que incluyen todas ellas?

<details class="quiz-option incorrect">
  <summary>A) Inicio, Panel de Control, Registro, Juegos y Apagado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esos apartados pertenecen a la interfaz de usuario de un sistema operativo de escritorio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Principal (Main), Avanzado (Advanced), Seguridad (Security), Arranque (Boot) y Salir (Exit).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las secciones fundamentales del menú de la BIOS/UEFI son Principal (fecha/hora/unidades), Avanzado (parámetros de CPU/buses), Seguridad (contraseñas), Arranque (prioridades) y Salir (guardar/descartar).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CPU, RAM, Disco, Red y Altavoces.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Representan componentes físicos del equipo, no las secciones lógicas del menú de la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Entrada, Proceso, Almacenamiento, Salida e Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son los bloques teóricos de la arquitectura de computadores, no las opciones del programa Setup.
  </div>
</details>

---

### Pregunta 7
¿En qué sección específica de la BIOS/UEFI Setup Utility se configuran parámetros como la fecha y la hora del sistema mantenidas por la memoria CMOS?

<details class="quiz-option incorrect">
  <summary>A) Sección Seguridad (Security).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sección Security se utiliza para establecer contraseñas de acceso a la BIOS o al disco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Sección Principal (Main).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El menú Principal o Main muestra la información general del sistema, permitiendo ajustar la hora, la fecha y visualizar los dispositivos de almacenamiento detectados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sección Avanzado (Advanced).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sección Advanced gestiona parámetros avanzados de chipsets, virtualización y puertos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sección Salir (Exit).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sección Exit gestiona la salida guardando o descartando los cambios realizados.
  </div>
</details>

---

### Pregunta 8
¿Qué programa ejecutable interno de la BIOS se encarga de realizar la búsqueda del dispositivo de almacenamiento que contiene un sistema operativo instalado?

<details class="quiz-option incorrect">
  <summary>A) MS-DOS Prompt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MS-DOS Prompt es una consola de comandos de un sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Bootstrap Loader.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Bootstrap Loader (cargador de arranque inicial) es la rutina de la BIOS que lee el orden de arranque (Boot Order) e identifica la unidad con sector de arranque activo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Scandisk.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Scandisk es una utilidad de comprobación del sistema de archivos en disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Task Manager.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Task Manager es el administrador de tareas de Windows.
  </div>
</details>

---

### Pregunta 9
¿A qué sector o registro del disco duro accede el Bootstrap Loader una vez seleccionada la unidad de arranque para iniciar la carga del sistema operativo?

<details class="quiz-option incorrect">
  <summary>A) A la memoria Caché L3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L3 está integrada en el procesador y no contiene sectores de arranque de disco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Al MBR (Master Boot Record) o tabla de particiones GPT del disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La BIOS lee el primer sector físico del disco de arranque, denominado MBR (en sistemas heredados) o la partición EFI/GPT, para ejecutar las instrucciones del cargador del SO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) A la partición de swap de la RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La partición de intercambio (swap) se usa como memoria virtual, no como sector de arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Al archivo de registro de controladores de la tarjeta gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro de controladores lo lee el sistema operativo una vez cargado en RAM.
  </div>
</details>

---

### Pregunta 10
¿Qué ventaja técnica importante ofrecen los gestores de arranque de Linux (como GRUB o LILO) frente al gestor de arranque estándar de Windows?

<details class="quiz-option incorrect">
  <summary>A) Que aumentan la capacidad en gigabytes del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los gestores de arranque ocupan unos pocos megabytes en disco; no aumentan la capacidad física.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Que son capaces de identificar y gestionar la presencia de otros sistemas operativos (como Windows) permitiendo un menú de arranque múltiple (Dual Boot).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Gestores como GRUB o LILO detectan de forma automática la presencia de particiones con otros sistemas operativos (Windows/Linux) y ofrecen un menú para elegir con cuál iniciar; el gestor nativo de Windows históricamente sobrescribe el arranque y no detecta Linux de forma automática.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que no necesitan disco duro para funcionar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Residen y se instalan dentro del sector de arranque o partición EFI del almacenamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que eliminan la necesidad de instalar tarjetas de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tienen relación con la necesidad de tarjetas de red del sistema.
  </div>
</details>

---

### Pregunta 11
¿Para qué sirve configurar la sección "Boot" (Arranque) dentro de la BIOS/UEFI Setup Utility?

<details class="quiz-option incorrect">
  <summary>A) Para subir el volumen de los altavoces de la tarjeta de sonido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El volumen de sonido se regula por software dentro del SO o desde los propios altavoces.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Para definir el orden de prioridad de búsqueda de dispositivos de arranque (ej. 1º USB, 2º Lector óptico, 3º Disco Duro SSD).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sección Boot permite establecer la secuencia de dispositivos donde el sistema buscará un medio iniciable para arrancar o instalar un SO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Para cambiar el idioma del teclado en el procesador de textos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La distribución de teclado en aplicaciones la gestiona el sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Para formatear las imágenes ISO guardadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear o grabar ISOs se realiza mediante software específico de grabación o particionado.
  </div>
</details>

---

### Pregunta 12
¿Qué es una distribución de sistema operativo en formato "Live CD" o "Live USB"?

<details class="quiz-option incorrect">
  <summary>A) Un virus informático que destruye la BIOS en vivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un software malicioso; es un entorno completo de prueba o auditoría.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un sistema operativo ejecutable directamente desde el soporte óptico o pendrive sin necesidad de instalarlo en el disco duro del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un entorno "Live" es un sistema operativo autoejecutable que se carga en la memoria RAM desde el medio extraíble, permitiendo probar el sistema o reparar averías sin alterar el disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un programa que solo funciona si el ordenador está conectado a un SAI Online.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Funciona con cualquier fuente de alimentación que suministre energía al equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un manual en vídeo de montaje de la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un sistema operativo completo, no un documento de vídeo pasivo.
  </div>
</details>

---

### Pregunta 13
¿Por qué motivo se popularizó masivamente el arranque mediante memorias USB booteables frente a las unidades de CD/DVD en los ordenadores portátiles modernos?

<details class="quiz-option incorrect">
  <summary>A) Porque las memorias USB consumen 220 V de corriente alterna.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto USB suministra corriente continua de +5 V, no 220 V de red.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque los fabricantes de portátiles optaron por eliminar las unidades ópticas lectoras de sus diseños para reducir el grosor y el peso de los equipos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tendencia de diseño en portátiles de eliminar las mecánicas bahías ópticas de 5,25'' o slim obligó a migrar los medios de instalación y arranque hacia memorias USB.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque los CD-ROM no permiten almacenar más de 10 megabytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un CD-ROM estándar almacena 700 MB de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque la BIOS no puede leer discos de plástico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las lectoras ópticas leen discos ópticos mediante láser y comunican los datos a la BIOS normalmente.
  </div>
</details>

---

### Pregunta 14
¿Qué documento técnico por escrito debe elaborar el técnico al finalizar el proyecto de montaje de un ordenador?

<details class="quiz-option incorrect">
  <summary>A) La factura comercial de la luz de la oficina.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La factura de electricidad es un gasto operativo de la empresa, no un documento técnico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El Informe de Montaje.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El informe de montaje es el documento de cierre donde el técnico registra los detalles de la intervención realizada para su consulta posterior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un contrato de arrendamiento del local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El contrato de alquiler del inmueble es un asunto inmobiliario o mercantil.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La licencia de derechos de autor de la fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las licencias comerciales no son redactadas por el técnico ensamblador.
  </div>
</details>

---

### Pregunta 15
Según lo establecido en el temario, ¿cuáles son las cuatro secciones o apartados indispensables que deben figurar en un Informe de Montaje?

<details class="quiz-option incorrect">
  <summary>A) Introducción, Novedades, Modding y Venta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponden a secciones de un folleto comercial o revista de tendencias.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Pasos que realizar, Dificultades encontradas, Soluciones implementadas y Conclusión.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El informe de montaje debe estructurarse obligatoriamente registrando la planificación de tareas (pasos), las incidencias surgidas (dificultades), las medidas correctivas (soluciones) y la valoración final (conclusión).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Voltios, Amperios, Ohmios y Vatios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son las magnitudes eléctricas estudiadas en el Tema 1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Entrada, Proceso, Almacenamiento y Salida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son las fases del procesamiento de datos de la arquitectura Von Neumann.
  </div>
</details>

---

### Pregunta 16
Caso Práctico: Un técnico necesita instalar Windows 11 mediante un pendrive USB en un PC recién montado. Introduce la memoria USB pero el ordenador arranca continuamente mostrando el mensaje "No bootable device found". ¿Qué debe ajustar en la BIOS/UEFI?

<details class="quiz-option correct">
  <summary>A) Acceder a la BIOS y cambiar el orden de arranque (Boot Order) colocando la memoria USB en primera posición.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El mensaje indica que el Bootstrap Loader no encuentra un sector de arranque en el disco duro predeterminado; al situar el pendrive USB en primer lugar en el Boot Order, la BIOS leerá el instalador desde la memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Subir el voltaje del procesador a 220 V.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Elevar el voltaje del procesador a 220 V destruiría la CPU instantáneamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Desconectar el ventilador del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Desconectar la refrigeración causaría sobrecalentamiento sin solucionar el problema de arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cambiar los cables del panel frontal F_PANEL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los cables del F_PANEL ya funcionaron al encender el equipo; no influyen en la detección de medios de arranque.
  </div>
</details>

---

### Pregunta 17
Caso Práctico: Al encender un equipo en el laboratorio, este emite una serie de pitidos cortos continuos sin mostrar imagen en pantalla. Consulta el manual de la placa base y observa que este código de pitidos indica un error de inicialización de la memoria RAM. ¿Qué ha ocurrido?

<details class="quiz-option incorrect">
  <summary>A) Que el puerto USB no tiene cobertura Wi-Fi.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los pitidos del POST de la placa base no guardan relación con la cobertura Wi-Fi.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La rutina POST de la BIOS ha detectado un fallo en el chequeo inicial del hardware (módulo RAM mal asentado, sucio o defectuoso) y emite la señal acústica de aviso.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La comprobación POST verifica los componentes críticos; al detectar una anomalía en la RAM que impide mostrar vídeo, la BIOS utiliza el altavoz interno (speaker) para notificar el código de error mediante pitidos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Que la pila CR2032 ha explotado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pila agotada causa pérdida de hora/fecha, pero no genera pitidos de fallo catastrófico de RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Que se ha instalado un sistema operativo de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los pitidos los genera el firmware de la placa base antes de cargar cualquier sistema operativo.
  </div>
</details>

---

### Pregunta 18
Caso Práctico: Un usuario ha puesto una contraseña de acceso a la BIOS Setup Utility y la ha olvidado, lo que le impide cambiar el orden de arranque. ¿Qué procedimiento físico puede realizar el técnico sobre la placa base para restablecer los valores de fábrica de la CMOS?

<details class="quiz-option incorrect">
  <summary>A) Cortar el cable de la fuente de alimentación con tenazas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cortar los cables inutiliza la fuente de alimentación permanentemente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Cambiar de posición el jumper Clear CMOS durante unos segundos o retirar la pila botón CR2032 con el equipo desenchufado de la red.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Interrumpir la alimentación eléctrica de la memoria CMOS (retirando la pila o accionando el puente Clear CMOS) borra los datos volátiles guardados, restableciendo la configuración de fábrica sin contraseña.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Pintar el disipador con pintura de látex.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pintura no afecta a la memoria de la CMOS ni limpia contraseñas de firmware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Golpear el zócalo del procesador con un destornillador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Impactar el zócalo de la CPU destruye mecánicamente la placa base.
  </div>
</details>

---

### Pregunta 19
Caso Práctico: Un cliente solicita instalar Linux Ubuntu en un ordenador que ya tiene instalado Windows 10 para poder elegir entre ambos al encender. ¿Qué elemento de software se instalará en el sector de arranque para permitir esta selección al usuario?

<details class="quiz-option incorrect">
  <summary>A) Un antivirus comercial en tiempo real.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un antivirus opera dentro de la sesión del SO cargado, no en la fase de pre-arranque.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un gestor de arranque multiload (como GRUB) que mostrará un menú de selección al iniciar.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Durante la instalación de Linux, el instalador configura el gestor de arranque GRUB en el sector MBR/EFI, detectando Windows y creando un menú de arranque dual para el usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un driver de impresora multifunción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un driver de impresora es para la gestión de impresión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La herramienta de maquetación Adobe Acrobat.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Adobe Acrobat es una suite de edición de documentos PDF.
  </div>
</details>

---

### Pregunta 20
¿Cuál es la función del registro denominado POST (Power-On Self-Test) que ejecuta la BIOS al recibir corriente eléctrica?

<details class="quiz-option incorrect">
  <summary>A) Formatear las particiones del disco duro secundario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El POST es una rutina de solo lectura de chequeo de hardware; no altera ni borra particiones.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ejecutar una rutina de autocomprobación del hardware básico (CPU, RAM, gráfica, teclado) para verificar su correcto funcionamiento antes de iniciar el arranque.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El POST es el conjunto de instrucciones en ensamblador de la BIOS que diagnostica el estado de los componentes vitales del sistema inmediatamente después del encendido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Comprimir los archivos del sistema operativo en formato ZIP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un algoritmo de compresión de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Limpiar el polvo interno de la carcasa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La limpieza de polvo es un mantenimiento físico manual.
  </div>
</details>

---

### Pregunta 21
Si al encender el ordenador la hora del sistema siempre aparece desconfigurada (ej. en 00:00 del año 2000), ¿qué componente averiado o agotado es el responsable directo de esta anomalía?

<details class="quiz-option incorrect">
  <summary>A) El conector SATA de la grabadora de DVD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El conector SATA transmite datos del lector óptico y no interviene en el reloj del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La pila botón CR2032 de 3 V encargada de alimentar la memoria CMOS cuando el equipo está desenchufado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria CMOS es volátil y requiere la corriente continua de la pila CR2032 para retener la fecha, hora y parámetros de configuración mientras la fuente está apagada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El ventilador trasero del chasis.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El ventilador expulsa calor; no almacena ni mantiene datos de configuración.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El cable de datos RJ45 de la tarjeta de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cable RJ45 transmite datos de red, no alimenta la CMOS de la placa base.
  </div>
</details>

---

### Pregunta 22
¿Qué sección de la BIOS Setup Utility se debe seleccionar para guardar definitivamente las modificaciones realizadas en la configuración y reiniciar el sistema?

<details class="quiz-option incorrect">
  <summary>A) Main (Principal) -> Reset.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El menú Main no contiene la instrucción de guardado final y reinicio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Exit (Salir) -> Save Changes & Exit (o Save & Exit Setup).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para consolidar los ajustes realizados en la BIOS y grabarlos en la CMOS, se debe acceder al menú Exit y elegir la opción de guardar cambios y salir (Save Changes & Exit).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Security -> Clear All.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Clear All en seguridad borraría claves o registros sin guardar la configuración requerida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Advanced -> CPU Overclock.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CPU Overclock ajusta frecuencias del procesador en el menú Avanzado, no ejecuta el guardado y salida.
  </div>
</details>
