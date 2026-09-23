# Examen Global 2: Sistemas Operativos Monopuesto

[← Volver al Índice de Tests](./index.md)

---

### Pregunta 1
En la jerarquía de memorias de un ordenador, ¿cuál es la diferencia técnica fundamental entre la memoria RAM estática (SRAM) utilizada en la memoria Caché y la memoria RAM dinámica (DRAM) utilizada en la memoria principal?

<details class="quiz-option correct">
  <summary>A) La SRAM utiliza transistores que no requieren refresco eléctrico periódico y es extremadamente rápida, mientras que la DRAM utiliza condensadores que necesitan ciclos continuos de refresco y es más lenta pero más densa y económica.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria SRAM (Static RAM) utiliza un circuito de báscula por transistores (flip-flops) que mantiene el dato mientras haya corriente, sin necesitar refresco. Es sumamente rápida pero cara y ocupa más espacio por bit, por lo que se reserva para las memorias Caché (L1, L2, L3). La DRAM (Dynamic RAM) almacena la carga en diminutos condensadores que se descargan rápidamente, exigiendo cientos de ciclos de refresco por segundo. Es más lenta pero permite mayor densidad de integración a menor coste, siendo la base de la memoria principal RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La SRAM es una memoria de almacenamiento secundario no volátil, mientras que la DRAM se borra al ejecutar el comando sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas son memorias volátiles de acceso aleatorio y el comando sfc no borra la DRAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La SRAM solo funciona sobre procesadores de 16 bits y la DRAM exige una tabla de particiones GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los tipos de tecnología de transistores de la RAM no condicionan la arquitectura a 16 bits ni la tabla GPT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La SRAM se ubica en el disco SSD y la DRAM dentro del chip de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ni la SRAM está en el SSD ni la DRAM dentro de la ROM de la BIOS.
  </div>
</details>

---

### Pregunta 2
Dentro de la Clasificación de Flynn para arquitecturas de computadores, ¿a qué categoría pertenece un procesador multinúcleo moderno capaz de ejecutar múltiples flujos de instrucciones independientes sobre múltiples flujos de datos diferentes de forma simultánea?

<details class="quiz-option incorrect">
  <summary>A) SISD (Single Instruction, Single Data).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SISD corresponde a la arquitectura monoprocesador tradicional secuencial (Von Neumann clásico).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) MIMD (Multiple Instruction, Multiple Data).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La taxonomía de Flynn clasifica los sistemas en función del número de flujos de instrucciones y de datos. Los sistemas MIMD (Multiple Instruction, Multiple Data) disponen de varios procesadores o núcleos asíncronos independientes capaces de ejecutar diferentes programas o instrucciones sobre datos completamente distintos al mismo tiempo. Es la arquitectura estándar de los microprocesadores multinúcleo actuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) SIMD (Single Instruction, Multiple Data).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SIMD aplica una única instrucción a un vector de datos simultáneo (procesadores gráficos/GPUs o extensiones vectoriales).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MISD (Multiple Instruction, Single Data).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MISD ejecuta múltiples instrucciones sobre un único flujo de datos (utilizado casi exclusivamente en sistemas redundantes de alta tolerancia a fallos).
  </div>
</details>

---

### Pregunta 3
En la representación de números enteros con signo en un sistema informático de 8 bits, ¿cuál es el método estándar utilizado por los procesadores para evitar la doble representación del número cero (+0 y -0) y cuál es la representación en binario del número decimal -5_10 en dicho método?

<details class="quiz-option incorrect">
  <summary>A) Signo y magnitud; su representación es 10000101_2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Signo y Magnitud padece el problema del doble cero (00000000 para +0 y 10000000 para -0).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Exceso a 128; su representación es 00000101_2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    00000101_2 es el valor positivo +5 en binario puro.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Complemento a 2; su representación es 11111011_2.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El método del Complemento a 2 (C2) es la convención universal empleada por las ALUs para representar números negativos. Elimina la ambigüedad del doble cero (dejando una única combinación 00000000_2) y permite realizar restas mediante sumas algebraicas directas. Para obtener -5 en 8 bits: se toma +5 (00000101_2), se invierten los bits a C1 (11111010_2) y se suma 1 al LSB (11111011_2).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Complemento a 1; su representación es 11111010_2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    11111010_2 es el paso intermedio de Complemento a 1 (que también sufre la doble representación del cero).
  </div>
</details>

---

### Pregunta 4
¿Qué tipo de licencia de software permite la distribución gratuita del programa con la condición de que, tras un periodo de prueba o para desbloquear la funcionalidad completa, el usuario deba abonar una licencia de pago?

<details class="quiz-option incorrect">
  <summary>A) Software Libre bajo GPL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Software Libre bajo GPL no limita el tiempo de uso ni bloquea funciones tras un periodo de prueba.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Software Propietario tipo Freeware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Freeware se distribuye de forma 100% gratuita y sin límite de tiempo, aunque siga siendo propietario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Software Propietario de dominio público.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software en dominio público no posee derechos de autor ni exige licencias de pago.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Software Propietario tipo Shareware.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El software de tipo Shareware es una modalidad de distribución de software propietario donde se autoriza el uso gratuito de la aplicación durante un tiempo determinado (evaluación por 30 días) o con limitaciones funcionales (imposibilidad de guardar, marcas de agua). Transcurrido ese plazo o para desbloquear la versión completa, el usuario debe adquirir la licencia comercial.
  </div>
</details>

---

### Pregunta 5
Un técnico debe decidir entre configurar un Arranque Dual (Dual Boot) o un entorno de Virtualización (hipervisor Tipo 2) en un puesto de trabajo. ¿Cuál es la ventaja exclusiva del Arranque Dual sobre la virtualización?

<details class="quiz-option correct">
  <summary>A) Acceso directo y nativo al 100% del rendimiento del hardware (especialmente gráfica y CPU) al no existir una capa intermedia de hipervisor.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al arrancar de forma nativa mediante Arranque Dual, el sistema operativo toma el control directo del microprocesador, la memoria y la tarjeta gráfica sin someterse a la latencia o traducción de instrucciones que introduce un hipervisor. Es la solución idónea para tareas que demandan el 100% del rendimiento del hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Permite ejecutar simultáneamente dos sistemas operativos en pantalla en el mismo instante sin reiniciar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución simultánea de dos SOs en pantalla es la ventaja clave de la virtualización, no del arranque dual (que exige reiniciar para cambiar de SO).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite crear instantáneas (Snapshots) para volver atrás en el tiempo en caso de error de sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las instantáneas (Snapshots) son una función propia del software de virtualización.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) No requiere particionar el disco duro ni modificar la tabla MBR/GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque dual exige obligatoriamente particionar el disco duro.
  </div>
</details>

---

### Pregunta 6
Se desea configurar la interfaz de red de una máquina virtual para que solo pueda comunicarse con el equipo anfitrión (Host), quedando aislada por completo de la red física local (LAN) y de Internet. ¿Qué modo de red virtual debe seleccionarse?

<details class="quiz-option incorrect">
  <summary>A) Adaptador Puente (Bridged Adapter).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Bridged conecta la VM directamente a la red física LAN.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Solo-anfitrión (Host-Only).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el modo Solo-anfitrión (Host-Only), el hipervisor crea un conmutador virtual privado que conecta la VM exclusivamente con una tarjeta de red virtual del equipo anfitrión. La máquina virtual no puede enviar ni recibir tráfico hacia la red LAN física exterior ni a Internet, garantizando un entorno de pruebas aislado entre el anfitrión y la VM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Red NAT (Network Address Translation).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En modo NAT la VM tiene salida directa a Internet utilizando la IP del anfitrión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Red conmutada MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tabla MBR es una estructura de particionado de discos, no un modo de red.
  </div>
</details>

---

### Pregunta 7
Un administrador necesita verificar en la consola CLI de una máquina virtual con Ubuntu Server el porcentaje de espacio usado y disponible en cada sistema de archivos montado, expresado en unidades legibles (MB, GB). ¿Qué comando debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) free -m</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    free -m informa del estado de la memoria RAM y del espacio de intercambio swap, no del disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) top</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    top muestra en tiempo real la lista de procesos activos y el consumo de CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) df -h</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando df -h (disk free, human-readable) analiza los puntos de montaje del sistema de archivos y muestra la capacidad total, el espacio ocupado, el disponible y el porcentaje de uso de cada partición formateada en valores legibles (K, M, G).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es un comprobador de archivos exclusivo de Microsoft Windows.
  </div>
</details>

---

### Pregunta 8
Cuando el Kernel crea un nuevo proceso en la RAM, genera una estructura de datos denominada BCP (Bloque de Control de Procesos). ¿Qué parámetro numérico único contenido en el BCP utiliza el sistema operativo para identificar dicho proceso?

<details class="quiz-option incorrect">
  <summary>A) El número de serie de la placa base.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El número de serie de la placa base es un dato de hardware estático.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La clave de registro HKLM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKLM es una rama de la base de datos del Registro de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El registro de estado ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro de estado ALU es un registro interno del procesador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El PID (Process Identifier).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada proceso cargado en la memoria RAM recibe un identificador entero positivo único denominado PID (Process Identifier), almacenado dentro de su Bloque de Control de Procesos (BCP). El Kernel utiliza el PID para aplicar algoritmos de planificación, gestionar permisos, enviar señales y realizar el seguimiento de la ejecución.
  </div>
</details>

---

### Pregunta 9
Tres procesos llegan simultáneamente en t = 0 ms a la cola de preparados. Sus tiempos de ejecución son P1 = 7 ms, P2 = 1 ms y P3 = 4 ms. Si el planificador utiliza el algoritmo no expulsivo SJF (Shortest Job First), ¿en qué orden se ejecutarán y cuál será el tiempo medio de espera (TE)?

<details class="quiz-option correct">
  <summary>A) Orden: P2 -> P3 -> P1 | Tiempo medio de espera: 2 ms.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El algoritmo SJF selecciona siempre el proceso con el menor tiempo de ejecución estimado: Orden: P2 (1 ms), P3 (4 ms) y P1 (7 ms). Tiempos de espera: P2 espera 0 ms; P3 espera 1 ms (termina P2); P1 espera 1 + 4 = 5 ms (termina P3). Tiempo medio de espera (TE): (0 + 1 + 5) / 3 = 6 / 3 = 2 ms.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Orden: P1 -> P2 -> P3 | Tiempo medio de espera: 4 ms.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El orden P1-P2-P3 corresponde al algoritmo FIFO/FCFS, no a SJF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Orden: P3 -> P2 -> P1 | Tiempo medio de espera: 6 ms.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No respeta el orden estricto de menor tiempo de ejecución ni calcula la media correcta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Orden: P2 -> P1 -> P3 | Tiempo medio de espera: 8 ms.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No respeta el orden de SJF ya que coloca P1 (7 ms) antes de P3 (4 ms).
  </div>
</details>

---

### Pregunta 10
¿Por qué motivo la técnica de gestión de memoria por Paginación no sufre el problema de la fragmentación externa?

<details class="quiz-option incorrect">
  <summary>A) Porque asigna la memoria en bloques lógicos de tamaño variable según las necesidades de la pila.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La división en bloques lógicos de tamaño variable es la definición de Segmentación (que sí padece fragmentación externa).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque divide toda la memoria física y lógica en bloques indivisibles de tamaño fijo (marcos de página y páginas), evitando que queden huecos libres de tamaño variable entre bloques.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La fragmentación externa ocurre cuando existen huecos libres de memoria dispersos que no son continuos. En la Paginación, el espacio de memoria física (RAM) se divide en marcos de página de tamaño fijo e indivisible (ej. 4 KB). Cualquier marco libre puede ser asignado a cualquier página de un proceso sin requerir contigüidad física. Al no existir bloques ni huecos de tamaño variable, la fragmentación externa desaparece por completo (aunque pueda existir fragmentación interna en la última página).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque traslada todos los procesos a la partición de intercambio swap en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El uso de la swap no es la causa por la que se evita la fragmentación externa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque elimina el uso de llamadas al sistema mediante el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La paginación no elimina las llamadas al sistema ni interactúa con la UEFI para ese fin.
  </div>
</details>

---

### Pregunta 11
Los sistemas operativos comerciales modernos como Microsoft Windows (NT) o Apple macOS (XNU) se clasifican como núcleos Híbridos. ¿En qué consiste esta arquitectura?

<details class="quiz-option correct">
  <summary>A) Combina la velocidad de la arquitectura monolítica ejecutando los servicios críticos en el espacio del núcleo con la estructura modular del micronúcleo para la gestión de componentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los núcleos Híbridos buscan un compromiso de diseño: adoptan la modularidad, el paso de mensajes y la estructura interna limpia de un micronúcleo, pero ejecutan componentes clave (como los controladores gráficos, la pila de red y el gestor de memoria) dentro del espacio de direcciones privilegiado del Kernel para evitar las caídas de rendimiento asociadas a los constantes cambios de contexto del micronúcleo puro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Permite ejecutar simultáneamente programas de 16 bits sobre MBR y de 64 bits sobre GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La arquitectura del Kernel no se define por la compatibilidad de modos de 16 vs 64 bits sobre MBR/GPT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ejecuta el kernel en modo usuario y las aplicaciones gráficas dentro de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Kernel siempre corre en modo privilegiado (modo núcleo) y la BIOS es un firmware anterior al SO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Elimina la necesidad de disponer de memoria RAM física utilizando exclusivamente la swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ningún sistema operativo puede funcionar sin memoria RAM física activa.
  </div>
</details>

---

### Pregunta 12
En las distribuciones GNU/Linux como Ubuntu, ¿cuál es el archivo principal de configuración que lee el gestor de arranque GRUB 2 durante la secuencia de inicio y en qué directorio se encuentra?

<details class="quiz-option incorrect">
  <summary>A) C:\Boot\BCD en el directorio de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BCD es la base de datos de arranque de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) /boot/grub/grub.cfg (generado automáticamente a partir de /etc/default/grub).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En GRUB 2, la configuración leída durante el arranque se almacena en el archivo /boot/grub/grub.cfg. Este archivo no debe editarse manualmente; las modificaciones de los tiempos de espera o menús se realizan en el archivo de texto /etc/default/grub (y scripts de /etc/grub.d/) y se aplican regenerando el archivo principal con el comando update-grub.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) /etc/hosts en el directorio de usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /etc/hosts se utiliza para la resolución local de direcciones IP y nombres de red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) hiberfil.sys en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    hiberfil.sys es el archivo de hibernación de Windows.
  </div>
</details>

---

### Pregunta 13
Un técnico necesita obtener un informe completo por consola en Windows que detalle el fabricante del sistema, la fecha de instalación original del SO, la versión del firmware BIOS/UEFI, la memoria física instalada y los parches de seguridad (KB) aplicados. ¿Qué comando debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow escanea y repara archivos protegidos del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) apt update</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update es un comando de Linux Ubuntu para actualizar repositorios.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) systeminfo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando systeminfo en la consola de comandos de Windows consulta el sistema y muestra una ficha técnica detallada: nombre del host, versión y compilación del SO, fabricante, modelo, tipo de sistema (x64), versión de BIOS/UEFI, memoria física total/disponible, tarjetas de red y la lista completa de parches de seguridad (hotfixes/KB) instalados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) powercfg /a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    powercfg /a informa de los estados de suspensión/ahorro de energía disponibles.
  </div>
</details>

---

### Pregunta 14
¿Cuál es la diferencia de funcionamiento respecto al consumo eléctrico y almacenamiento entre el estado de Suspensión y el estado de Hibernación en un ordenador?

<details class="quiz-option incorrect">
  <summary>A) La Suspensión apaga el equipo por completo y la Hibernación mantiene la CPU al 100%.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los conceptos; la suspensión mantiene alimentada la RAM y la hibernación no usa la CPU al 100%.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La Suspensión borra la memoria RAM y la Hibernación formatea el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La suspensión no borra la RAM y la hibernación no formatea el disco duro.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La Suspensión guarda la sesión activa en la memoria RAM manteniéndola alimentada con un consumo eléctrico mínimo; la Hibernación copia la RAM al disco duro (hiberfil.sys) y apaga el equipo por completo con consumo eléctrico cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Suspensión la sesión de usuario y programas abiertos permanecen en los módulos de RAM física; la CPU y discos se detienen, pero la placa base suministra corriente a la RAM (consumo mínimo). En Hibernación se copia el contenido completo de la RAM al disco secundario (hiberfil.sys) y se apaga el ordenador al 100% (consumo cero), conservando los datos incluso ante un corte de corriente total.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambos estados consumen la misma energía y guardan los datos en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El consumo eléctrico es totalmente distinto (mínimo en suspensión vs cero en hibernación).
  </div>
</details>

---

### Pregunta 15
En una interfaz de línea de comandos (CLI), ¿qué es exactamente la Shell y qué función cumple el Prompt?

<details class="quiz-option incorrect">
  <summary>A) La Shell es el monitor físico y el Prompt es el teclado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde el concepto de software CLI con periféricos de hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La Shell es el visor de eventos y el Prompt es la tabla MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla herramientas de auditoría y tablas de partición con elementos de línea de comandos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La Shell es el hipervisor y el Prompt es el script de instalación desatendida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde hipervisores de virtualización con la Shell.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La Shell es el programa intérprete que lee, analiza y ejecuta las órdenes escritas por el usuario; el Prompt es la cadena de texto visual que indica que el sistema está listo para recibir comandos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Shell (ej. Bash, Zsh, PowerShell) es el intérprete encargado de procesar la entrada del usuario, verificar la sintaxis de la orden e invocar las llamadas al sistema o binarios correspondientes. El Prompt es el indicador de texto visual (ej. usuario@equipo:~$ o C:\>) impreso por la Shell para señalar que la tarea previa terminó y el sistema aguarda una nueva instrucción.
  </div>
</details>

---

### Pregunta 16
En la estructura jerárquica de archivos de Linux, ¿cuál es el propósito del directorio /var?

<details class="quiz-option correct">
  <summary>A) Almacenar archivos y datos de tamaño variable o cambiante durante la ejecución del sistema, como logs de auditoría (/var/log), colas de impresión y cachés.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El directorio /var (variable) está destinado a contener archivos cuyo tamaño o contenido cambia dinámicamente a medida que el sistema operativo funciona. Alberga los registros de auditoría y eventos en /var/log, los archivos en cola (spool) de impresión y correo, bases de datos de paquetes y archivos temporales de ejecución.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Guardar los archivos ejecutables principales de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS se aloja en un chip de memoria ROM de la placa base, no en /var.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Contener las carpetas personales de todos los usuarios estándar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los directorios personales están en /home.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Servir como punto de montaje único para discos duros formateados en NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los puntos de montaje se ubican en /media o /mnt.
  </div>
</details>

---

### Pregunta 17
En el Programador de Tareas (Task Scheduler) de Windows, ¿cómo se denominan los dos componentes fundamentales necesarios para configurar una automatización?

<details class="quiz-option incorrect">
  <summary>A) Paginación y Segmentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Paginación y segmentación son técnicas de gestión de memoria RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) BCP y PID.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BCP y PID son estructuras de gestión de procesos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MBR y GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR y GPT son esquemas de particionado de discos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Desencadenadores (Triggers) y Acciones (Actions).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Toda tarea automatizada en el Programador de Tareas de Windows se define mediante: Desencadenadores (Triggers), que son los criterios de activación que determinan cuándo se inicia la tarea (ej. una hora específica, al iniciar sesión, al registrar un evento); y Acciones (Actions), que corresponden al trabajo concreto que se ejecuta (ej. iniciar un programa, ejecutar un script).
  </div>
</details>

---

### Pregunta 18
Para acceder mediante la notación UNC (Universal Naming Convention) a una carpeta compartida llamada Finanzas en un servidor de la red de área local con la dirección IP 192.168.1.100, ¿cuál es la ruta exacta que debe introducirse?

<details class="quiz-option incorrect">
  <summary>A) http://192.168.1.100/Finanzas</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    http:// es un identificador de protocolo para páginas web.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) C:\192.168.1.100\Finanzas</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    C:\ referencia a un volumen de disco local.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) \\192.168.1.100\Finanzas</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sintaxis UNC en redes Windows requiere iniciar la ruta con dos barras invertidas contrarias \\, seguidas del nombre o la dirección IP del equipo servidor, una barra invertida \ y el nombre del recurso compartido: \\192.168.1.100\Finanzas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /dev/192.168.1.100/Finanzas</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /dev/ representa la carpeta de dispositivos hardware de Linux.
  </div>
</details>

---

### Pregunta 19
En el Registro de Windows (regedit), ¿qué información almacena la rama HKEY_CURRENT_USER (HKCU)?

<details class="quiz-option incorrect">
  <summary>A) Las configuraciones globales de hardware que aplican a todos los usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La configuración global de hardware para todos los usuarios se guarda en HKEY_LOCAL_MACHINE (HKLM).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La configuración personalizada del perfil del usuario que tiene la sesión activa en ese momento (papel tapiz, colores, accesos directos, preferencias de app).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La rama HKEY_CURRENT_USER (HKCU) es una clave dinámica que apunta a la sección correspondiente del usuario activo dentro de HKEY_USERS. Almacena las variables de entorno, la configuración del escritorio, impresoras mapeadas, configuraciones de software y preferencias exclusivas del perfil de usuario que mantiene iniciada la sesión en ese instante.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Las claves de cifrado del firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las claves de cifrado de la UEFI no forman parte de la rama HKCU del registro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Las asociaciones globales de extensiones de archivos del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las asociaciones globales de archivos se gestionan en HKEY_CLASSES_ROOT (HKCR).
  </div>
</details>

---

### Pregunta 20
Un administrador modifica el archivo de configuración del servicio de correo en Ubuntu. ¿Qué comando debe ejecutar para que el servicio reaplique la nueva configuración inmediatamente sin reiniciar el servidor completo?

<details class="quiz-option incorrect">
  <summary>A) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es un comando de reparación de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sudo reboot -f</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo reboot -f fuerza el reinicio de todo el servidor físico, cortando todas las conexiones activas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) crontab -r</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab -r borra las tareas automatizadas del usuario de cron.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) sudo systemctl restart nombre_servicio</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando sudo systemctl restart nombre_servicio detiene y vuelve a iniciar el demonio en una única instrucción. Permite que el servicio vuelva a leer sus ficheros de configuración actualizados e inicie los nuevos subprocesos sin requerir un reinicio completo del sistema operativo ni afectar a los demás servicios en ejecución.
  </div>
</details>

---

### Pregunta 21
Un administrador de redes analiza la dirección física de una tarjeta de red (dirección MAC) expresada en el sistema hexadecimal: 0x3A. ¿Cuál es el valor equivalente exacto de este byte en el sistema binario?

<details class="quiz-option correct">
  <summary>A) 00111010_2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para convertir un número hexadecimal a binario se sustituye cada dígito hexadecimal por su equivalente en 4 bits (nibble): Dígito 3_16 = 0011_2; Dígito A_16 (decimal 10) = 1010_2. Uniendo ambos bloques se obtiene: 00111010_2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 11001010_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    11001010_2 equivale al valor hexadecimal 0xCA (12 y 10).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 00111100_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    00111100_2 equivale a 0x3C (3 y 12).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 01011010_2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    01011010_2 equivale a 0x5A (5 y 10).
  </div>
</details>

---

### Pregunta 22
En los sistemas de codificación alfanumérica de la información, ¿cuál es la diferencia técnica entre el estándar tradicional ASCII extendido y el estándar moderno Unicode?

<details class="quiz-option incorrect">
  <summary>A) ASCII extendido utiliza 32 bits por carácter y Unicode se limita a 7 bits de datos con 1 bit de paridad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte las longitudes de palabra: ASCII estándar usa 7 bits de datos + 1 paridad y Unicode usa de 16 a 32 bits.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) ASCII extendido utiliza 8 bits (256 caracteres posibles), resultando insuficiente para lenguajes no occidentales; mientras que Unicode utiliza un espacio de direcciones de 16/32 bits (soporta más de 100.000 símbolos) abarcando todos los alfabetos del mundo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estándar ASCII extendido emplea 8 bits (1 byte) por carácter, permitiendo un máximo de 2⁸ = 256 símbolos. Unicode (implementado en esquemas como UTF-8 o UTF-16) resuelve esta limitación empleando espacios de 16 a 32 bits, codificando más de 100.000 caracteres de alfabetos internacionales (chino, cirílico, árabe, símbolos matemáticos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) ASCII extendido solo se utiliza en sistemas Linux y Unicode es un formato exclusivo de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos son estándares universales de representación alfanumérica y no dependen de la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) ASCII extendido aplica compresión con pérdida y Unicode se ejecuta en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La representación de texto no es un algoritmo de compresión con pérdida ni un ejecutable de la partición ESP.
  </div>
</details>

---

### Pregunta 23
Un técnico necesita restaurar una máquina virtual al estado exacto de configuración y memoria en el que se encontraba hace dos días, antes de realizar una prueba de instalación de software fallida. ¿Qué función del software de virtualización debe emplear?

<details class="quiz-option incorrect">
  <summary>A) Reinstalación por desatendida mediante el comando sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación desatendida despliega un sistema nuevo desde cero y sfc es una utilidad interna de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Desfragmentación del disco virtual mediante cleanmgr.exe.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Desfragmentar el disco no revierte los cambios de software realizados.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Restauración de una Instantánea (Snapshot).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una Instantánea (Snapshot) en un entorno de virtualización es una imagen congelada que guarda el estado exacto del disco virtual, la memoria RAM activa y la configuración de la VM en un punto específico en el tiempo. Si una prueba daña el sistema invitado, el técnico puede revertir a la instantánea y devolver la VM a su estado previo en segundos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Conversión de la tabla GPT a MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Convertir tablas de partición no restaura estados previos del sistema operativo.
  </div>
</details>

---

### Pregunta 24
Para diagnosticar el uso de memoria RAM y espacio de intercambio en un servidor Ubuntu Linux mediante un informe rápido y estático expresado en MegaBytes (MB), ¿qué comando de consola se debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) df -h</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    df -h informa sobre el espacio libre y ocupado en las particiones de disco montadas, no en la RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) top</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    top ofrece una vista interactiva y dinámica en tiempo real de los procesos activos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es el comprobador de archivos protegidos de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) free -m</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando free -m analiza la memoria principal y la partición/archivo de intercambio (swap) de Linux, mostrando un resumen de la memoria total, usada, libre, compartida, de búferes y disponible, formateando los valores explícitamente en MegaBytes (parámetro -m).
  </div>
</details>

---

### Pregunta 25
En el ámbito de la planificación de la CPU, ¿cuál es la diferencia técnica entre los algoritmos FCFS / FIFO y SRTF (Shortest Remaining Time First) respecto a la capacidad de expulsión de procesos?

<details class="quiz-option correct">
  <summary>A) FCFS es no expulsivo (atiende por estricto orden de llegada sin interrumpir el proceso activo) y SRTF es expulsivo (interrumpe el proceso activo si llega uno con un tiempo restante menor).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    FCFS / FIFO es no expulsivo: los procesos se atienden secuencialmente en el orden exacto en que entran a la cola de preparados y el proceso activo conserva la CPU hasta finalizar o bloquearse. SRTF es la variante expulsiva de SJF: evalúa continuamente el tiempo restante y, si llega un proceso cuyo tiempo necesario es menor que el restante del proceso en ejecución, despoja a este último de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) FCFS es expulsivo y SRTF solo funciona sobre procesadores de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FCFS no es expulsivo y SRTF no se limita a arquitecturas de 16 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ambos algoritmos son expulsivos y ejecutan los procesos dentro de la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FCFS no es expulsivo y no se ejecutan dentro de la partición ESP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) FCFS utiliza la memoria swap y SRTF la memoria Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La lógica de planificación no se define por el uso de swap o caché L1.
  </div>
</details>

---

### Pregunta 26
Cuando un sistema operativo utiliza Memoria Virtual por Paginación, un proceso en ejecución intenta acceder a una dirección de memoria cuya página lógica no se encuentra actualmente cargada en un marco de la memoria RAM física (sino en el disco/swap). ¿Qué evento técnico se desencadena en la CPU?

<details class="quiz-option incorrect">
  <summary>A) Un colapso general del núcleo (Kernel Panic).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un fallo de página es una situación normal y prevista en sistemas con memoria virtual, no un fallo grave del Kernel.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un Fallo de Página (Page Fault), que activa una rutina del SO para traer la página requerida desde el disco a un marco libre de la RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando la unidad de gestión de memoria (MMU) detecta que el bit de validez de la tabla de páginas indica que la página deseada reside en el disco de intercambio (swap) y no en la RAM física, la CPU genera una interrupción conocida como Fallo de Página (Page Fault). El Kernel pausa el proceso, asigna un marco libre en la RAM, carga la página desde el disco, actualiza la tabla de páginas y reanuda la instrucción.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El formateo automático de la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No altera ni formatea la tabla de particiones del disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La conmutación directa al modo seguro de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No conmuta la CPU a un modo de 16 bits.
  </div>
</details>

---

### Pregunta 27
¿Qué mecanismo de la arquitectura del procesador permite que una aplicación común que se ejecuta en Modo Usuario pueda solicitar de forma segura al Kernel la realización de una operación privilegiada (como escribir un archivo en el disco duro)?

<details class="quiz-option incorrect">
  <summary>A) El comando sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es una utilidad de reparación de archivos de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La fragmentación externa del sistema de archivos NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fragmentación es un problema de organización física de datos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La llamada al sistema (System Call), que desencadena una interrupción por software o trampa (trap) para conmutar la CPU a Modo Núcleo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para preservar la estabilidad del sistema, las aplicaciones en Modo Usuario no tienen acceso directo al hardware. Cuando necesitan crear un archivo, abrir un conector de red o asignar memoria, invocan una Llamada al Sistema (System Call). Esto genera una trampa (trap) por software que conmuta la CPU al Modo Núcleo (privilegiado), permitiendo que el Kernel verifique la identidad y permisos del proceso, ejecute la orden sobre el hardware de forma segura y devuelva el control a la aplicación en Modo Usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El firmware UEFI de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conmutación entre modo usuario y modo núcleo la gestiona la arquitectura de la CPU y el Kernel del SO, no el firmware UEFI.
  </div>
</details>

---

### Pregunta 28
¿Cuál es la diferencia fundamental en la estructura del código entre una arquitectura de Kernel Monolítica (como Linux) y una arquitectura de Micronúcleo (como QNX o MINIX)?

<details class="quiz-option incorrect">
  <summary>A) El núcleo monolítico solo funciona en procesadores de 8 bits y el micronúcleo en procesadores de 64 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La arquitectura de kernel no se define por ser exclusiva de 8 o 64 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El núcleo monolítico no admite el uso de llamadas al sistema y el micronúcleo se ejecuta dentro de la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos usan llamadas al sistema y ninguno corre dentro de la partición ESP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El núcleo monolítico ejecuta los programas en la memoria swap y el micronúcleo en la Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la ubicación en memoria volátil/secundaria con el diseño del sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) En el núcleo monolítico todos los servicios (planificador, sistemas de archivos, drivers) forman parte de un único ejecutable en espacio de núcleo; mientras que en el micronúcleo solo las funciones mínimas esenciales residen en el núcleo, ejecutando los drivers y sistemas de archivos en modo usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En un diseño Monolítico, todo el sistema operativo (gestión de memoria, procesos, controladores de hardware, pila de red) se compila como un único programa masivo que se ejecuta en el espacio de direcciones privilegiado del núcleo, ofreciendo máximo rendimiento pero menor tolerancia a fallos. En un Micronúcleo (Microkernel), se reduce el código en modo privilegiado al mínimo imprescindible (gestor básico de procesos, memoria primaria e IPC), ejecutando los servicios de red, sistemas de archivos y controladores como procesos independientes fuera del núcleo en Modo Usuario.
  </div>
</details>

---

### Pregunta 29
Durante la secuencia de arranque (boot sequence) de un ordenador, ¿cuál es la función exacta de la primera fase denominada POST (Power-On Self-Test)?

<details class="quiz-option correct">
  <summary>A) Realizar un chequeo inicial por hardware para verificar que los componentes críticos (CPU, memoria RAM, GPU, teclado) funcionan correctamente antes de buscar el gestor de arranque.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al encender el ordenador, la primera rutina que ejecuta el firmware (BIOS o UEFI) es el POST (Power-On Self-Test). Es un autotest de diagnóstico por hardware que verifica la presencia e integridad de los componentes vitales del equipo (procesador, módulos de memoria RAM, tarjeta gráfica, controlador de disco y bus). Si el POST detecta un error grave (ej. fallo de RAM), detiene el inicio y emite un código de pitidos o mensaje de error en pantalla sin buscar el bootloader.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cargar el Kernel de Linux en la partición de intercambio swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El POST se ejecuta a nivel de firmware antes de cargar cualquier sistema operativo o Kernel.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Formatear los sectores defectuosos del disco mediante la instrucción chkdsk /f.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El POST no formatea unidades de disco ni ejecuta comprobaciones de sistemas de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Iniciar los servicios de red en el modelo WIMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El POST no inicia servicios de red ni interfaces gráficas de usuario.
  </div>
</details>

---

### Pregunta 30
Se debe preparar una unidad de almacenamiento de 8 TB para un servidor moderno con firmware UEFI. ¿Por qué el esquema de particiones tradicional MBR no es adecuado y qué ventaja ofrece GPT en este escenario?

<details class="quiz-option incorrect">
  <summary>A) MBR es inadecuado porque limita el número de particiones a 128; GPT se utiliza para redes de área local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    128 particiones es la capacidad de GPT, no la limitación de MBR, y GPT no es un protocolo de red.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) MBR es inadecuado porque utiliza direccionamiento de 32 bits que limita el tamaño máximo de disco a 2 TB y a 4 particiones primarias; GPT utiliza direccionamiento de 64 bits permitiendo discos de Zettabytes y hasta 128 particiones primarias.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El esquema MBR (Master Boot Record) utiliza campos de 32 bits para direccionar sectores, lo que impone un límite matemático estricto de 2 TeraBytes (2 TB) por volumen y un máximo de 4 particiones primarias. Para direccionar unidades de capacidad superior (como la de 8 TB) se exige el esquema GPT (GUID Partition Table), que utiliza direccionamiento de 64 bits, permite hasta 128 particiones primarias e incluye una copia redundante de la tabla al final del disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MBR es inadecuado porque no permite formatear en NTFS o ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los discos MBR sí se pueden formatear en NTFS o ext4 (mientras no superen los 2 TB).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MBR solo es compatible con discos mecánicos de 16 bits sin memoria caché.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no se restringe a discos de 16 bits sin caché.
  </div>
</details>

---

### Pregunta 31
En el mantenimiento de un servidor Ubuntu por línea de comandos, el gestor de paquetes almacena en la ruta /var/cache/apt/archives/ las copias comprimidas (.deb) de todos los programas descargados. ¿Qué comando elimina estos archivos de la caché para recuperar espacio en disco sin desinstalar ninguna aplicación?

<details class="quiz-option incorrect">
  <summary>A) sudo apt autoremove</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt autoremove desinstala paquetes de dependencias huérfanas que ya no utiliza ninguna aplicación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es el comprobador de archivos del sistema en Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) sudo apt clean</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada vez que se instala o actualiza un programa mediante APT, los paquetes comprimidos .deb se descargan en la carpeta de almacenamiento temporal en disco. Con el tiempo, esta carpeta puede acumular varios Gigabytes. El comando sudo apt clean vacía por completo dicha memoria caché en disco borrando los archivos .deb, liberando espacio de forma segura sin afectar a los programas ya instalados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) lsb_release -a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    lsb_release -a muestra la versión de la distribución Linux instalada.
  </div>
</details>

---

### Pregunta 32
Desde la llegada de Windows 8 y manteniéndose en Windows 11, al hacer clic en la opción "Apagar" el sistema operativo no realiza un apagado tradicional completo. ¿Cómo actúa la función Inicio Rápido (Fast Startup) y en qué archivo guarda el estado?

<details class="quiz-option incorrect">
  <summary>A) Borra todas las claves del Registro de Windows y guarda la sesión gráfica en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No elimina claves del Registro ni guarda sesiones gráficas en la tabla MBR.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Mantiene la pantalla encendida y la CPU ejecutando el servicio cron.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El apagado apaga la pantalla y el servicio cron es propio de Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Cierra todas las aplicaciones y sesiones de usuario, pero hiberna la sesión del Kernel escribiendo su estado en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función Inicio Rápido (Fast Startup) es una tecnología híbrida. Al pulsar "Apagar", Windows cierra la sesión del usuario y detiene las aplicaciones abiertas, pero hiberna la sesión del núcleo (Kernel) guardando su estado en el archivo oculto hiberfil.sys. En el siguiente encendido, el sistema lee directamente hiberfil.sys e inicia el Kernel en cuestión de segundos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Formatea los sectores de la memoria RAM activa y reinicia el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Inicio Rápido no formatea la memoria RAM ni reinicia el firmware UEFI.
  </div>
</details>

---

### Pregunta 33
Dentro de la estructura global del árbol de directorios raíz (/) en distribuciones GNU/Linux, ¿cuál es la función de la carpeta /dev?

<details class="quiz-option correct">
  <summary>A) Contener los archivos especiales de bloque y carácter que representan los dispositivos de hardware del equipo (discos, particiones, terminales, ratón).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Fiel al principio de Unix de que "todo es un archivo", la carpeta /dev (devices) contiene los nodos o archivos especiales de dispositivo que representan el hardware montado o conectado a la máquina (ej. /dev/sda para el primer disco SATA, /dev/sda1 para su primera partición, /dev/null o /dev/tty).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Guardar los archivos de configuración en texto plano del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos de configuración del sistema se alojan en la carpeta /etc.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenar las descargas de los usuarios del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las descargas de los usuarios se guardan en sus carpetas personales dentro de /home.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Albergar la imagen del Kernel comprimido y los archivos del gestor de arranque GRUB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La imagen del Kernel y los archivos de GRUB se alojan en /boot.
  </div>
</details>

---

### Pregunta 34
Un usuario situado en la consola de comandos de Linux en el directorio /home/usuario desea hacer referencia a un archivo ubicado en /home/usuario/Documentos/notas.txt. ¿Cuál es la representación correcta de dicho acceso mediante una ruta relativa?

<details class="quiz-option incorrect">
  <summary>A) /home/usuario/Documentos/notas.txt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /home/usuario/Documentos/notas.txt es la representación de la ruta absoluta.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Documentos/notas.txt</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una ruta relativa expresa la localización de un archivo tomando como origen o punto de partida el directorio de trabajo actual. Si el usuario ya se encuentra en /home/usuario, la ruta relativa directa es simplemente Documentos/notas.txt. La ruta absoluta es la que comienza desde la raíz global (/home/usuario/Documentos/notas.txt).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) C:\Documentos\notas.txt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza la sintaxis de letras de unidad de Microsoft Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /dev/Documentos/notas.txt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Antepone de forma incorrecta el directorio de dispositivos /dev/.
  </div>
</details>

---

### Pregunta 35
¿Por qué motivo un algoritmo de compresión de archivos con formato ZIP, RAR o 7Z debe utilizar obligatoriamente una técnica de compresión sin pérdida (Lossless)?

<details class="quiz-option correct">
  <summary>A) Porque la compresión con pérdida elimina bits de datos, lo que corrompería la estructura de los programas, ejecutables o documentos comprimidos volviéndolos inservibles al descomprimir.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los archivos contenedores como ZIP, RAR o 7Z empaquetan documentos, bases de datos o código fuente ejecutables que requieren una fidelidad e integridad absoluta bit a bit. Si se utilizara un algoritmo con pérdida (Lossy), se eliminarían patrones de datos considerados "prescindibles", destruyendo el archivo y provocando errores de ejecución al descomprimir. Por ello, la compresión de archivos y software es siempre sin pérdida (Lossless).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque la compresión sin pérdida solo se aplica sobre archivos de sonido e imagen en formato JPEG.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    JPEG es un formato de imagen con pérdida, no un ejemplo de compresión sin pérdida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque exige formatear previamente la partición de almacenamiento en FAT32.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tipo de compresión no exige sistemas FAT32 ni está condicionado por el sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque es una condición obligatoria impuesta por el firmware UEFI de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware UEFI no impone algoritmos de compresión para aplicaciones de usuario.
  </div>
</details>

---

### Pregunta 36
En el sistema operativo Ubuntu Linux, un administrador necesita programar una tarea en el servicio cron para que se ejecute un script de mantenimiento todos los días del año a las 03:00 AM. ¿Cuál es la sintaxis exacta de los 5 campos temporales que debe incluir en crontab -e?

<details class="quiz-option incorrect">
  <summary>A) 3 0 * * * /scripts/mantenimiento.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los campos de hora y minuto (se ejecutaría a las 00:03 AM).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) * * 3 0 * /scripts/mantenimiento.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Coloca el 3 en el campo de día del mes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 0 3 1-31 * * /scripts/mantenimiento.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque funcionalmente similar, la convención estándar para indicar "todos los días" es utilizar el comodín * en lugar de un rango 1-31.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) 0 3 * * * /scripts/mantenimiento.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sintaxis de los 5 campos en crontab es: Minuto: 0 (a en punto); Hora: 3 (las 03:00 AM en formato 24h); Día del mes: * (todos los días); Mes: * (todos los meses); Día de la semana: * (todos los días de la semana). La línea correcta es: 0 3 * * * /scripts/mantenimiento.sh.
  </div>
</details>

---

### Pregunta 37
En la administración de seguridad de Ubuntu Linux, ¿por qué es técnicamente preferible que un usuario administrador ejecute una orden puntual utilizando sudo en lugar de iniciar sesión permanente con la cuenta de superusuario root?

<details class="quiz-option correct">
  <summary>A) Porque el uso de sudo aplica el principio de mínimo privilegio, concediendo permisos administrativos de forma temporal, controlada y auditada en el archivo de registro /var/log/auth.log.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando sudo (SuperUser DO) implementa el principio de mínimo privilegio. Evita que el administrador trabaje de forma continuada con poderes ilimitados (lo que expone al equipo a fallos catastróficos por un comando erróneo o a infecciones por malware con el máximo privilegio). Con sudo, el usuario autentica su identidad para una única instrucción, de forma temporal y registrando la acción en /var/log/auth.log para auditoría.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque la cuenta root no tiene acceso a la línea de comandos CLI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La cuenta root posee acceso ilimitado a cualquier consola CLI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque sudo convierte los discos en formato NTFS sin necesidad de formatear.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo no convierte sistemas de archivos a NTFS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque el uso de la cuenta root deshabilita el test POST de la BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No interfiere con el test POST del hardware ejecutado por el firmware.
  </div>
</details>

---

### Pregunta 38
Un usuario en Windows 11 hace clic en un archivo y pulsa la tecla Supr. El archivo desaparece de su carpeta. ¿Ha sido eliminado el archivo del disco de almacenamiento de forma permanente?

<details class="quiz-option incorrect">
  <summary>A) Sí, el comando Supr borra los bloques físicos de memoria y ejecuta el comando TRIM de forma inmediata.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tecla Supr simple no borra bloques físicos ni ejecuta TRIM inmediatamente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) No; la tecla Supr traslada la referencia del archivo a la Papelera de reciclaje, conservando sus bloques en el disco hasta que se vacíe la papelera o se elimine de forma permanente con Shift + Supr.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Windows, la tecla Supr no borra físicamente los datos del disco duro: únicamente mueve el archivo a la carpeta del sistema de la Papelera de reciclaje, manteniendo el espacio ocupado. Para eliminar un archivo de forma inmediata saltándose la Papelera de reciclaje y liberando su espacio, se debe emplear la combinación Shift + Supr.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sí, pero solo si la unidad de disco está formateada en el sistema de archivos ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ext4 es un sistema de archivos de Linux, no de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) No, el archivo se convierte automáticamente en una clave de registro dentro de HKLM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No convierte archivos de usuario en claves del Registro de Windows.
  </div>
</details>

---

### Pregunta 39
Un técnico configura los accesos a una carpeta compartida en un servidor Windows sobre NTFS. En los permisos de recurso compartido (red) concede Control total al usuario, pero en los permisos de seguridad NTFS (locales) concede únicamente el permiso de Lectura. Cuando el usuario accede a la carpeta a través de la red local, ¿qué permisos efectivos tiene sobre los archivos?

<details class="quiz-option incorrect">
  <summary>A) Control total, porque prevalece el permiso asignado en la red sobre el permiso local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los permisos NTFS jamás son ignorados en favor de los permisos de red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Permiso de Modificación, porque el sistema calcula el promedio de ambas capas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los permisos de seguridad no se calculan mediante promedios.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Permiso exclusivo de Lectura, porque cuando se combinan permisos de red y permisos NTFS prevalece siempre la combinación más restrictiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La seguridad en volúmenes NTFS compartidos en red opera mediante la regla de la intersección más restrictiva. El sistema evalúa de forma independiente los permisos de la capa de red (recurso compartido) y los permisos de la capa de sistema de archivos local (NTFS). Entre ambas capas, el permiso resultante más estricto es el que se aplica. Como los permisos NTFS solo otorgan Lectura, el usuario estará limitado estrictamente a Lectura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Acceso denegado total, porque no se pueden combinar permisos de red y NTFS en el mismo volumen.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La combinación de ambas capas es el estándar operativo nativo de Windows.
  </div>
</details>

---

### Pregunta 40
En la arquitectura del sistema operativo Microsoft Windows, ¿qué es el Registro de Windows (regedit.exe) y en qué rama principal de primer nivel se guardan las configuraciones que afectan al hardware y a todos los usuarios del equipo?

<details class="quiz-option incorrect">
  <summary>A) Es un archivo de texto en /etc/hosts; se guarda en HKCU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Registro no es un archivo de texto en /etc (que es de Linux) y HKCU solo afecta al usuario activo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es una utilidad de comprobación de disco; se guarda en HKCR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es una herramienta de comprobación de discos (que sería chkdsk).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un script del Programador de Tareas; se guarda en HKCC.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un script de automatización y HKCC guarda solo el perfil de hardware del arranque actual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Es una base de datos jerárquica centralizada de configuraciones del sistema, controladores y programas; las configuraciones globales de hardware y sistema se almacenan en la rama HKEY_LOCAL_MACHINE (HKLM).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Registro de Windows es una base de datos binaria centralizada estructurada en árbol que sustituyó a los viejos archivos de configuración .ini. Guarda todos los parámetros del Kernel, controladores, perfiles de usuario y aplicaciones. La rama principal HKEY_LOCAL_MACHINE (HKLM) almacena la información física y lógica global del equipo (hardware, parches, software instalado) afectando a todos los usuarios del sistema.
  </div>
</details>
