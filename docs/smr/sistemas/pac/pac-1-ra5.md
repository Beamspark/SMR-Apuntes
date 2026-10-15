[← Volver al Índice de PACs](./index.md)

---

### Pregunta 1
¿Qué permite hacer la virtualización?

<details class="quiz-option incorrect">
  <summary>A) Instalar obligatoriamente un único sistema operativo por equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La restricción a un único sistema operativo corresponde al modelo tradicional de instalación nativa directa en el hardware, justo lo contrario del propósito de la virtualización.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Crear entornos virtuales que comparten los recursos de un equipo físico.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La virtualización consiste en abstraer los componentes de hardware (CPU, memoria, almacenamiento y red) para aprovisionar múltiples máquinas virtuales independientes que se ejecutan sobre un mismo equipo físico anfitrión.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Ejecutar programas sin utilizar procesador ni memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cualquier instrucción o proceso en ejecución requiere obligatoriamente ciclos de CPU y espacio en la memoria RAM, aunque estos se gestionen de forma virtualizada mediante capas de abstracción.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Ampliar la RAM del equipo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La capacidad física de la memoria RAM no se incrementa por software; la máquina virtual toma una porción de la memoria física ya instalada en la máquina real.
  </div>
</details>

---

### Pregunta 2
¿Qué función desempeña el hipervisor?

<details class="quiz-option incorrect">
  <summary>A) Sustituir todos los sistemas operativos invitados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hipervisor no sustituye al sistema operativo invitado, sino que proporciona la plataforma y el hardware virtualizado sobre el cual se instala y ejecuta dicho sistema.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Guardar exclusivamente las copias de seguridad del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La gestión de copias de seguridad es una tarea administrativa de almacenamiento, no la función principal de control y virtualización de recursos que realiza el hipervisor.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Fabricar los componentes físicos del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hipervisor es un componente software o capa de firmware, no un proceso de manufactura de hardware electrónico.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Repartir y gestionar los recursos físicos utilizados por las máquinas virtuales.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El hipervisor (o monitor de máquina virtual, VMM) es la capa de software o firmware encargada de mediar, planificar y repartir eficientemente el procesador, la memoria, el disco y la red del equipo anfitrión entre las distintas máquinas virtuales.
  </div>
</details>

---

### Pregunta 3
¿Qué ventaja ofrece el aislamiento entre máquinas virtuales?

<details class="quiz-option incorrect">
  <summary>A) Hace innecesario instalar sistemas operativos invitados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El aislamiento garantiza la separación e independencia entre entornos, pero cada máquina virtual continúa requiriendo su propio sistema operativo invitado.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Garantiza que ninguna máquina virtual pueda tener fallos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una máquina virtual puede experimentar bloqueos, errores de software o infecciones por malware exactamente igual que un ordenador físico real.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Elimina el consumo de recursos del equipo anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las máquinas virtuales consumen recursos computacionales reales del equipo anfitrión de manera continuada mientras permanecen en ejecución.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Permite que un problema en una máquina virtual no afecte necesariamente a las demás.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El confinamiento de la memoria y la ejecución evita que un bloqueo de software, un error crítico o un problema de seguridad ocurrido dentro de una máquina virtual se propague al sistema anfitrión o a las demás máquinas virtuales concurrentes.
  </div>
</details>

---

### Pregunta 4
Antes de probar una configuración arriesgada, un técnico crea una instantánea de la máquina virtual. ¿Para qué le servirá?

<details class="quiz-option incorrect">
  <summary>A) Para convertir la máquina virtual en un equipo real.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conversión de un entorno virtual a físico (V2P) es un proceso de migración de imágenes de disco independiente, no una instantánea.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Para ejecutar dos sistemas operativos mediante arranque dual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque dual requiere configurar el gestor de arranque en distintas particiones del disco físico, sin relación con las instantáneas de virtualización.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) Para volver a un estado anterior si la prueba causa problemas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una instantánea (<em>snapshot</em>) congela y almacena el estado completo de la máquina virtual (disco, memoria y configuración) en un punto temporal específico, permitiendo revertir los cambios de forma instantánea ante cualquier fallo durante las pruebas.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Para aumentar físicamente la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El incremento de memoria RAM física exige instalar módulos de hardware adicionales en los zócalos de la placa base del equipo.
  </div>
</details>

---

### Pregunta 5
¿Cuál es un inconveniente de ejecutar varias máquinas virtuales al mismo tiempo?

<details class="quiz-option incorrect">
  <summary>A) Obliga a mantener una conexión permanente a Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las máquinas virtuales pueden ejecutarse en entornos totalmente aislados fuera de línea (*offline*) sin necesidad de conexión externa a Internet.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Apaga automáticamente el sistema operativo anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema anfitrión debe permanecer encendido y operativo en todo momento para sustentar la ejecución del hipervisor de tipo 2 y de sus máquinas virtuales.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Impide instalar sistemas operativos diferentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La virtualización permite precisamente ejecutar sistemas operativos heterogéneos de forma paralela (por ejemplo, distribuciones Linux, Windows y BSD sobre la misma máquina física).
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Requiere suficientes recursos de CPU, memoria RAM y almacenamiento en el equipo físico.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada máquina virtual en marcha reserva y consume recursos reales del sistema; si la suma de las necesidades supera la capacidad física disponible en el anfitrión, se produce una degradación crítica del rendimiento general (cuello de botella por saturación).
  </div>
</details>

---

### Pregunta 6
¿Qué sucede con los sistemas operativos instalados mediante arranque dual?

<details class="quiz-option incorrect">
  <summary>A) Se ejecutan dentro de una máquina virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En un arranque dual, los sistemas operativos se instalan de forma directa sobre el hardware físico y acceden a él sin intermediación de hipervisores.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Se elige uno al arrancar y los demás permanecen apagados.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El gestor de arranque (como GRUB o el administrador de arranque de Windows) presenta un menú inicial donde el usuario selecciona el sistema que tomará el control exclusivo del hardware, permaneciendo inactivos los restantes.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Se ejecutan todos simultáneamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución simultánea y concurrente de varios sistemas operativos sobre un mismo ordenador físico solo es posible mediante técnicas de virtualización.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Comparten obligatoriamente una única partición de instalación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cada sistema operativo en arranque dual requiere instalarse en su propia partición independiente formateada con su sistema de archivos compatible (como NTFS o ext4).
  </div>
</details>

---

### Pregunta 7
Un alumno necesita utilizar Windows y Ubuntu a la vez para comparar su funcionamiento. ¿Qué opción responde mejor a esa necesidad?

<details class="quiz-option incorrect">
  <summary>A) El arranque dual, porque inicia ambos sistemas simultáneamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque dual es mutuamente excluyente: para pasar de Windows a Ubuntu es imprescindible reiniciar el equipo por completo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Una instantánea, porque sustituye al sistema operativo invitado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una instantánea únicamente guarda el estado de un sistema virtualizado para recuperaciones posteriores; no proporciona una solución de ejecución simultánea de dos sistemas.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Una segunda partición, sin instalar ningún sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una partición vacía no contiene binarios ni núcleos arrancables para ejecutar software alguno.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Una máquina virtual, porque permite ejecutar un sistema invitado mientras sigue funcionando el anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La máquina virtual hace posible tener ambos sistemas interactuando en tiempo real en la misma pantalla sin necesidad de reiniciar la máquina física para alternar entre ellos.
  </div>
</details>

---

### Pregunta 8
En un ordenador con Windows se instala VirtualBox y, dentro de una máquina virtual, Ubuntu. ¿Cuál es el sistema operativo anfitrión?

<details class="quiz-option correct">
  <summary>A) Windows</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema anfitrión (o <em>host OS</em>) es el sistema operativo instalado de manera nativa sobre el hardware del equipo, sobre el cual se ejecuta el hipervisor.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) VirtualBox</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VirtualBox es la aplicación que actúa como hipervisor de Tipo 2, no el sistema operativo que controla directamente la plataforma física.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Los dos sistemas operativos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cada sistema cumple un rol jerárquico claramente diferenciado en la virtualización alojada: uno es anfitrión (base) y el otro es invitado (virtualizado).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Ubuntu</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ubuntu está instalado dentro de los recursos virtualizados por la aplicación, asumiendo el papel de sistema operativo invitado (*guest*).
  </div>
</details>

---

### Pregunta 9
En un ordenador con Windows se instala VirtualBox y, dentro de una máquina virtual, Ubuntu. ¿Cuál es el sistema operativo invitado?

<details class="quiz-option incorrect">
  <summary>A) Windows</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Windows ejerce el rol de sistema operativo anfitrión (*host*) al estar instalado directamente en el almacenamiento físico del ordenador.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Ubuntu</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema operativo invitado (o <em>guest OS</em>) es el que se instala y ejecuta dentro de la máquina virtual provista por el hipervisor.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) El firmware del ordenador</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware (BIOS/UEFI) es el software básico grabado en placa para inicializar el hardware físico, no un sistema operativo invitado.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) VirtualBox</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VirtualBox es el software hipervisor encargado de gestionar la virtualización, no el sistema operativo que se ejecuta en su interior.
  </div>
</details>

---

### Pregunta 10
¿Cuál de las siguientes afirmaciones describe correctamente una máquina virtual?

<details class="quiz-option correct">
  <summary>A) Es un ordenador creado por software que puede tener su propio sistema operativo y ejecutar aplicaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una máquina virtual emula completamente el comportamiento de una máquina física por medio de software, dotándola de hardware virtual (procesador, memoria, adaptadores de red y disco) sobre el que opera un sistema operativo autónomo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Es un sistema operativo instalado mediante arranque dual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque dual es un método de particionamiento e instalación física directa, no un entorno emulado por software.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Es una carpeta que contiene únicamente archivos del usuario</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque sus discos virtuales e imágenes se guarden en ficheros dentro del sistema de archivos anfitrión, una máquina virtual es un entorno computacional completo con arquitectura hardware emulada.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Es un ordenador físico conectado al equipo anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un ordenador físico independiente enlazado formaría parte de una topología de red de área local (LAN), no de un entorno de virtualización interna.
  </div>
</details>
