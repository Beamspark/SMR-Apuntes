# Test de Autoevaluación: Tema 3

[← Volver al Tema 3: Instalación de sistemas operativos libres y propietarios](../tema-3.md)

---

### Pregunta 1
En la gestión de recursos del sistema operativo, ¿cuál es la distinción técnica exacta entre un "programa" y un "proceso", y qué elemento interno utiliza el Kernel para rastrear la ejecución de este último?

<details class="quiz-option correct">
  <summary>A) Un programa es una entidad estática e inactiva almacenada en el disco, mientras que un proceso es un programa en ejecución activa en la memoria RAM; el Kernel rastrea el proceso mediante el Bloque de Control de Procesos (BCP / PCB).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un programa es un archivo ejecutable pasivo con instrucciones guardado en el almacenamiento secundario (disco). Un proceso es la instancia activa de ese programa cargada en la memoria RAM, con tiempo de CPU asignado. Para administrar cada proceso, el Kernel crea una estructura de datos denominada BCP (Bloque de Control de Procesos / PCB), que almacena su identificador único (PID), estado actual, prioridad, contadores de programa y registros.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un programa es un algoritmo que se ejecuta únicamente en modo núcleo, mientras que un proceso es una rutina de firmware grabada en la partición ESP; el Kernel lo rastrea mediante el bus de direcciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ni los programas se ejecutan únicamente en modo núcleo, ni los procesos son rutinas de firmware de la partición ESP, ni el bus de direcciones rastrea procesos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un programa es un proceso que ha finalizado su ejecución, mientras que un proceso es una llamada al sistema (system call); el Kernel lo rastrea mediante el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde un programa finalizado con una llamada al sistema y cita hiberfil.sys (archivo de hibernación de Windows) como herramienta de rastreo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un programa es un conjunto de datos comprimidos en formato .tar.gz, mientras que un proceso es un hilo de ejecución exclusivo del microprocesador GPU; el Kernel lo rastrea mediante la tabla MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un programa no se limita a un archivo comprimido, un proceso no es exclusivo de la GPU y la tabla MBR sirve para particionar discos, no para gestionar procesos.
  </div>
</details>

---

### Pregunta 2
Un proceso que se encuentra en estado "En ejecución" realiza una petición de lectura a un disco duro para obtener un archivo de datos. ¿A qué estado pasa inmediatamente este proceso y qué transición se produce cuando la operación de Entrada/Salida finaliza con éxito?

<details class="quiz-option incorrect">
  <summary>A) Pasa a estado "Nuevo" y la transición al finalizar la E/S se denomina Admisión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El estado "Nuevo" es la fase inicial de creación del proceso y la "Admisión" la transición a "Preparado".
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Pasa a estado "Bloqueado" y la transición al finalizar la E/S le lleva al estado "Preparado".</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando un proceso en ejecución solicita una operación de E/S (como leer del disco), no puede continuar ejecutando instrucciones hasta que los datos estén disponibles. La CPU lo mueve al estado "Bloqueado" liberando el procesador para otros procesos. Cuando el controlador de disco completa la lectura e interrumpe a la CPU, el proceso realiza la transición de "Fin de E/S" pasando al estado "Preparado" (cola de listos para competir de nuevo por la CPU).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Pasa a estado "Terminado" y la transición al finalizar la E/S le lleva directamente a la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El proceso no ha terminado (aún debe procesar los datos leídos) y la finalización de E/S nunca lo envía directamente a la CPU sin pasar por la cola de preparados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Pasa a estado "Preparado" y la transición al finalizar la E/S se denomina Asignación de CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un proceso que espera E/S no pasa a "Preparado" inmediatamente; debe permanecer en "Bloqueado" mientras el periférico trabaja.
  </div>
</details>

---

### Pregunta 3
En la planificación de la CPU, ¿qué diferencia a un algoritmo no expulsivo (non-preemptive) de uno expulsivo (preemptive), y cuáles son sus respectivos representantes estándar?

<details class="quiz-option incorrect">
  <summary>A) Los algoritmos no expulsivos permiten que la Unidad de Control cancele cualquier proceso en ejecución, siendo SRTF el representante no expulsivo y FIFO el expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte las categorías: SRTF es un algoritmo expulsivo y FIFO es no expulsivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Los algoritmos no expulsivos requieren que el procesador funcione a 16 bits, siendo el algoritmo Round Robin no expulsivo y SJF expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No guarda relación con arquitecturas de 16 bits y vuelve a invertir los ejemplos (Round Robin es expulsivo y SJF es no expulsivo).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) En los algoritmos no expulsivos, un proceso que toma la CPU no puede ser interrumpido hasta que finalice o se bloquee voluntariamente (ej. FIFO/FCFS o SJF), mientras que en los expulsivos el SO puede retirarle la CPU para asignársela a otro proceso (ej. SRTF).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En los algoritmos no expulsivos (como FIFO/FCFS o SJF), una vez que un proceso obtiene la CPU la conserva hasta que termina sus instrucciones o realiza una petición bloqueante. En los algoritmos expulsivos (como SRTF), el SO puede despojar (expulsar) de la CPU al proceso activo si llega a la cola de preparados otro proceso de mayor prioridad o menor tiempo restante.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En los algoritmos no expulsivos, los procesos se ejecutan directamente en la caché L1 sin pasar por la RAM, mientras que en los expulsivos se ejecutan en la memoria de intercambio swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la estrategia de planificación de la CPU con la ubicación física de ejecución entre la caché L1 y la swap.
  </div>
</details>

---

### Pregunta 4
Un sistema ejecuta mediante el algoritmo no expulsivo FIFO / FCFS tres procesos (P1, P2 y P3) que llegan al mismo instante (Tiempo de llegada = 0 ms). Sus tiempos de ejecución son respectivamente: P1 = 4 ms, P2 = 4 ms y P3 = 4 ms. ¿Cuál es el tiempo medio de espera (TE) de los tres procesos?

<details class="quiz-option incorrect">
  <summary>A) 8 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    8 ms es el tiempo de espera individual exclusivo de P3, no el promedio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 6 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    6 ms correspondería a un cálculo erróneo sumando el tiempo total de retorno medio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 2,67 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2,67 ms resulta de dividir equivocadamente 8 entre 3 en lugar de la suma total de esperas (12/3).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) 4 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En FIFO se ejecutan en orden de llegada (P1 -> P2 -> P3): P1 empieza en t = 0 ms (espera = 0 ms); P2 empieza en t = 4 ms (espera = 4 ms); P3 empieza en t = 8 ms (espera = 8 ms). Tiempo medio de espera: (0 + 4 + 8) / 3 = 12 / 3 = 4 ms.
  </div>
</details>

---

### Pregunta 5
En el algoritmo de planificación expulsivo SRTF (Shortest Remaining Time First), un proceso P1 con un tiempo total de ejecución de 10 ms se encuentra ejecutándose en la CPU. En el instante t = 2 ms, llega a la cola de preparados un nuevo proceso P2 con un tiempo total de ejecución de 3 ms. ¿Cómo actúa el planificador SRTF ante este evento?

<details class="quiz-option correct">
  <summary>A) Se interrumpe inmediatamente la ejecución de P1 (al que le quedan 8 ms de ejecución) y se le otorga la CPU a P2 por tener un tiempo restante menor (3 ms < 8 ms).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    SRTF es la versión expulsiva de SJF. En t = 2 ms, al proceso P1 le restan 8 ms para finalizar. Al llegar P2 requiriendo solo 3 ms, el planificador evalúa los tiempos restantes (3 ms < 8 ms). Al ser un algoritmo expulsivo, despoja a P1 de la CPU, lo devuelve a la cola de preparados y le asigna el procesador a P2 inmediatamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se deja que P1 termine los 8 ms restantes y P2 debe esperar en la cola de preparados por ser un algoritmo no expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe el comportamiento del algoritmo no expulsivo SJF, no del SRTF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se envían ambos procesos a la memoria virtual de intercambio swap y se ejecuta el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La llegada de un proceso de menor tiempo no provoca un volcado a la swap ni invoca al firmware UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) P2 se cancela automáticamente por haber llegado cuando la CPU estaba ocupada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los procesos nunca se cancelan por llegar a una CPU ocupada; se añaden a la cola de preparados o expulsan al proceso activo si cumplen las condiciones.
  </div>
</details>

---

### Pregunta 6
¿Qué caracteriza a la técnica de gestión de memoria denominada Paginación y qué tipo de fragmentación puede provocar en la RAM?

<details class="quiz-option incorrect">
  <summary>A) Divide los programas en bloques de tamaño variable basados en su estructura lógica (datos, pila) y provoca fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Dividir los programas en bloques de tamaño variable según su sentido lógico describe la Segmentación, no la paginación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Divide la memoria RAM física en bloques de tamaño fijo llamados marcos de página y los programas en páginas del mismo tamaño; puede provocar fragmentación interna.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La paginación es una técnica de gestión de memoria no contigua donde la RAM física se divide en bloques de tamaño fijo de potencia de 2 (por ejemplo, 4 KB u 8 KB) llamados marcos de página, y la memoria lógica de los programas se divide en bloques idénticos llamados páginas. Al ser bloques de tamaño fijo, no sufre fragmentación externa, pero sí puede provocar fragmentación interna en el último marco asignado a un proceso si no ocupa el bloque completo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Desplaza los archivos del Kernel a la partición MBR provocando una fragmentación de disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la gestión de memoria RAM con la tabla MBR de particionado de discos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Utiliza únicamente bloques de memoria Caché L1 y provoca fragmentación de buses.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La paginación administra la memoria principal RAM, no la caché L1, y no existe la "fragmentación de buses".
  </div>
</details>

---

### Pregunta 7
Un sistema operativo utiliza un esquema de gestión de memoria por paginación con un tamaño de página fijo de 8 KB. Un programa requiere 18 KB de memoria para cargarse. ¿Cuántas páginas le asignará el sistema operativo y cuánta fragmentación interna se generará dentro del último marco asignado?

<details class="quiz-option incorrect">
  <summary>A) Se le asignarán 2 páginas y se generarán 2 KB de fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Con 2 páginas (16 KB) no se puede albergar un programa de 18 KB y la paginación no genera fragmentación externa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se le asignarán 4 páginas y se generarán 14 KB de fragmentación interna.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    4 páginas equivalen a 32 KB, lo que asignaría bloques innecesarios de más.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Se le asignarán 3 páginas (24 KB en total) y se generarán 6 KB de fragmentación interna en el último marco.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dado que las páginas son bloques fijos e indivisibles de 8 KB: 1 página = 8 KB (insuficiente); 2 páginas = 16 KB (insuficiente); 3 páginas = 24 KB (suficiente para 18 KB). Al asignar 24 KB para un programa de 18 KB, se desperdician 24 - 18 = 6 KB. Este espacio no utilizado dentro de la tercera página asignada constituye la fragmentación interna.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se le asignará 1 página de 18 KB y no habrá fragmentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En este sistema no existen páginas de tamaño variable de 18 KB; los bloques son estrictamente de 8 KB.
  </div>
</details>

---

### Pregunta 8
¿Por qué motivo la técnica de gestión de memoria por Segmentación suele presentar el problema de la fragmentación externa?

<details class="quiz-option incorrect">
  <summary>A) Porque las páginas de los programas se dividen en marcos de tamaño fijo dentro de la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La división en marcos de tamaño fijo es la definición de paginación, no de segmentación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque se llena el registro de direcciones del bus de control de la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se debe a la saturación del bus de control de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque no se pueden almacenar datos en la memoria de intercambio swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los sistemas con segmentación sí pueden utilizar área de intercambio en disco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Porque los segmentos de los programas son de tamaño variable y, a medida que los procesos se cargan y liberan, quedan huecos libres dispersos en la RAM que no son continuos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La segmentación divide la memoria lógica en bloques de tamaño variable (segmentos de código, datos, pila) ajustados a la necesidad de cada módulo. A medida que los procesos entran y salen de la RAM, se van creando huecos libres de distintos tamaños dispersos por la memoria. Cuando llega un nuevo proceso, puede ocurrir que la suma total del espacio libre sea suficiente, pero no exista ningún hueco continuo del tamaño del nuevo segmento, provocando fragmentación externa.
  </div>
</details>

---

### Pregunta 9
En la administración de memoria, ¿en qué consiste el concepto de Memoria Virtual (Swap / Intercambio) y cuál es su objetivo principal dentro del sistema operativo?

<details class="quiz-option correct">
  <summary>A) En reservar una zona del disco de almacenamiento masivo como extensión de la RAM física para permitir ejecutar programas que excedan la capacidad de la memoria principal.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria virtual es una técnica que permite al sistema operativo simular más memoria RAM de la físicamente instalada. Reserva un espacio en el almacenamiento secundario (archivo de paginación pagefile.sys en Windows o partición/archivo swap en Linux) para mover allí páginas o datos de programas en segundo plano que no se estén usando activamente, liberando RAM física para los procesos en primer plano.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En duplicar el número de núcleos físicos de la CPU mediante software grabado en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria virtual gestiona almacenamiento y RAM, no duplica núcleos físicos de la CPU ni interactúa con la ESP para ese fin.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En convertir los archivos de registro de /var/log en ejecutables de modo núcleo de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No altera los archivos de registro /var/log ni crea ejecutables de 16 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En acelerar el tiempo de respuesta del bus de control sustituyendo los circuitos de la Unidad Aritmético-Lógica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La swap no acelera los buses de control ni sustituye a la ALU.
  </div>
</details>

---

### Pregunta 10
¿Qué diferencia a los modos de ejecución de la CPU denominados Modo Núcleo (Kernel Mode) y Modo Usuario (User Mode), y qué sucede cuando un programa en modo usuario necesita acceder al hardware?

<details class="quiz-option incorrect">
  <summary>A) En modo usuario la CPU tiene acceso directo e ilimitado al hardware, mientras que en modo núcleo debe enviar un script por correo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los privilegios y menciona una acción absurda sobre enviar scripts por correo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En modo núcleo el Kernel tiene privilegio total y acceso directo al hardware; los programas en modo usuario tienen acceso restringido y deben realizar una llamada al sistema (System Call) para pedir recursos al Kernel.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para garantizar la estabilidad y seguridad del sistema, la CPU implementa niveles de privilegio: en Modo Núcleo el Kernel tiene control absoluto sobre el procesador y el hardware; en Modo Usuario las aplicaciones se ejecutan aisladas sin acceso directo al hardware, teniendo que emitir llamadas al sistema (System Calls) para que el Kernel verifique permisos y ejecute las peticiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En modo núcleo solo se ejecutan las aplicaciones gráficas WIMP, mientras que en modo usuario se ejecuta el microcódigo de la UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las aplicaciones gráficas WIMP corren en modo usuario y la UEFI se ejecuta antes del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En modo usuario los programas se ejecutan a 64 bits y en modo núcleo exclusivamente a 16 bits sobre MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La distinción entre modo núcleo y modo usuario es una cuestión de anillos de privilegio de la CPU, no de ejecuciones de 64 vs. 16 bits sobre MBR.
  </div>
</details>

---

### Pregunta 11
¿Qué es una llamada al sistema (System Call) y qué mecanismo de la arquitectura del procesador utiliza para pasar de Modo Usuario a Modo Núcleo de forma segura?

<details class="quiz-option incorrect">
  <summary>A) Una actualización de parches mediante Windows Update que formatea el disco secundario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un parche de actualización ni formatea discos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un comando de consola que borra la memoria caché L1 para liberar espacio en el bus de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un comando de borrado de la caché L1.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La interfaz de programación mediante la cual un programa de usuario solicita un servicio al Kernel, provocando una interrupción por software (o trampa) que cambia el modo de ejecución de la CPU a Modo Núcleo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una System Call es el único punto de entrada mediante el cual un programa en modo usuario puede solicitar servicios al sistema operativo (crear procesos, leer archivos, acceder a la red). Al invocarla, la CPU ejecuta una interrupción por software (trap o trampa) que conmuta de forma segura el modo de ejecución de Modo Usuario a Modo Núcleo, cediendo el control a las rutinas verificadas del Kernel.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un algoritmo de planificación no expulsivo que ejecuta comandos en segundo plano mediante cron.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un algoritmo de planificación de la CPU ni se relaciona con el demonio cron.
  </div>
</details>

---

### Pregunta 12
¿Cuál es la característica definitoria de la arquitectura de sistema operativo basada en Micronúcleo (Microkernel) y qué ventaja ofrece respecto a la arquitectura Monolítica?

<details class="quiz-option incorrect">
  <summary>A) Integra todos los servicios, controladores y sistemas de archivos en un único ejecutable en modo núcleo, ofreciendo mayor velocidad que la arquitectura monolítica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Integrar todos los servicios en un único ejecutable en modo núcleo es la definición de Kernel Monolítico, no Micronúcleo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Funciona exclusivamente sobre particiones MBR en procesadores de 8 bits sin memoria virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las arquitecturas de micronúcleo se utilizan en sistemas modernos de 32 y 64 bits con memoria virtual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Deshabilita el uso de llamadas al sistema para ejecutar todas las aplicaciones directamente en el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No deshabilita las llamadas al sistema ni ejecuta aplicaciones dentro del firmware UEFI.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Mantiene en el espacio del núcleo únicamente las funciones mínimas esenciales (planificación básica, memoria primaria, IPC), ejecutando los controladores y sistemas de archivos como procesos independientes en modo usuario, lo que aporta mayor estabilidad y modularidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La arquitectura Micronúcleo reduce el Kernel a su mínima expresión (solo gestión básica de memoria, procesos e interrupciones/IPC). Todo lo demás (controladores de dispositivos, sistemas de archivos, servidores de red) se ejecuta fuera del núcleo como procesos en modo usuario. La ventaja principal es la estabilidad y tolerancia a fallos: si un controlador de tarjeta gráfica falla o colapsa, solo cae ese servicio en modo usuario, sin provocar la caída (crash) de todo el Kernel.
  </div>
</details>

---

### Pregunta 13
El núcleo Linux es el referente clásico de una arquitectura de Kernel Monolítica. ¿Cuál es la ventaja de rendimiento de este diseño y cuál es su principal punto débil o riesgo?

<details class="quiz-option correct">
  <summary>A) Ofrece alta velocidad de ejecución y comunicación entre servicios al ejecutarse todos en el espacio de memoria del Kernel; su riesgo es que un fallo en un controlador puede colapsar todo el sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En un Kernel monolítico, todos los componentes (planificador, gestión de memoria, sistemas de archivos, pila de red y controladores de hardware) se compilan y ejecutan dentro del mismo espacio de direcciones en modo privilegiado. La ventaja es el máximo rendimiento y velocidad, ya que las llamadas entre servicios son directas sin cambios de contexto de CPU. El riesgo es que un fallo grave en cualquier módulo o controlador de terceros en modo núcleo provoca un colapso general (kernel panic).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ofrece inmunidad total frente a virus al ejecutar los drivers en la memoria caché L1; su riesgo es que reduce la capacidad del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ofrece inmunidad total frente a virus ni ejecuta drivers dentro de la caché L1 para ahorrar disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ofrece compatibilidad con procesadores de 16 bits sin RAM; su riesgo es que exige formatear el disco con FAT32.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Linux es un sistema de 32/64 bits con gestión de RAM avanzada que no exige usar FAT32.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Elimina la necesidad de disponer de un intérprete de comandos Shell; su riesgo es que deshabilita el Secure Boot.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los sistemas monolíticos siguen utilizando Shells y no deshabilitan el Secure Boot por naturaleza.
  </div>
</details>

---

### Pregunta 14
¿Por qué sistemas operativos comerciales modernos como Microsoft Windows o Apple macOS se clasifican arquitectónicamente como núcleos Híbridos?

<details class="quiz-option incorrect">
  <summary>A) Porque funcionan simultáneamente como hipervisores de Tipo 1 y Tipo 2 sobre la misma partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La arquitectura del sistema operativo no se define por funcionar como hipervisores simultáneos sobre la ESP.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque combinan la velocidad de la arquitectura monolítica al mantener los servicios críticos en el espacio del núcleo con la estructura modular del micronúcleo para gestionar componentes externos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los núcleos Híbridos (como Windows NT o el kernel XNU de macOS) adoptan un enfoque intermedio. Mantienen la estructura de mensajería y la modularidad interna de un micronúcleo para diseñar los componentes del sistema, pero ejecutan la mayoría de los servicios críticos (como el subsistema gráfico o los drivers principales) dentro del espacio de memoria del Kernel en modo privilegiado para evitar la pérdida de velocidad de los cambios de contexto del micronúcleo puro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque utilizan un sistema de numeración no posicional combinado con el Teorema Fundamental de la Numeración.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde conceptos de sistemas de numeración con la arquitectura interna de un Kernel.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque ejecutan las aplicaciones de usuario dentro de la BIOS tradicional y los controladores en la memoria swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las aplicaciones de usuario corren en modo usuario controlado por el SO, jamás dentro de la BIOS.
  </div>
</details>

---

### Pregunta 15
En la gestión de dispositivos de Entrada/Salida (E/S), ¿qué mecanismo evita que la CPU pierda tiempo comprobando continuamente el estado de un periférico (sondeo/polling) permitiendo que el dispositivo avise a la CPU solo cuando está listo para transferir datos?

<details class="quiz-option incorrect">
  <summary>A) El algoritmo de planificación SJF no expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SJF es un algoritmo de planificación de procesos en la CPU, no un mecanismo de comunicación con periféricos de E/S.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La fragmentación interna en el marco de página.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fragmentación interna es un desperdicio de espacio en paginación de memoria RAM.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El mecanismo de Interrupciones Hardware (IRQ).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En lugar de forzar a la CPU a consultar periódicamente si un periférico ha terminado o tiene datos disponibles (sondeo / polling, con un elevado desperdicio de ciclos de reloj), se utiliza el sistema de Interrupciones Hardware (IRQ). Cuando el periférico (como un teclado al pulsar una tecla o una tarjeta de red al recibir un paquete) requiere atención, envía una señal de interrupción eléctrica a la CPU. La CPU pausa temporalmente la tarea activa, atiende la petición mediante el driver correspondiente y reanuda el proceso.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La compresión de archivos con pérdida en formato ZIP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ZIP es una compresión sin pérdida de archivos en disco, no un mecanismo de hardware de E/S.
  </div>
</details>

---

### Pregunta 16
En la administración de seguridad de un sistema GNU/Linux como Ubuntu, ¿por qué razón técnica se desaconseja trabajar de forma continuada con la cuenta de superusuario root y se prescribe el uso del comando sudo?

<details class="quiz-option incorrect">
  <summary>A) Porque la cuenta root no tiene permisos para escribir en el sistema de archivos ext4 ni acceder a la consola CLI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La cuenta root tiene permisos totales sobre cualquier sistema de archivos y consola.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque la cuenta root consume el 100% de la memoria RAM impidiendo la ejecución de hipervisores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La cuenta root es un perfil de usuario/seguridad, no un proceso que consuma memoria RAM por sí solo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque sudo convierte automáticamente las cuentas de usuario en controladores de firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo no altera el firmware UEFI de la placa base.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Porque el uso continuado de root expone todo el sistema a errores humanos accidentales o malware catastróficos, mientras que sudo concede privilegios administrativos de forma puntual, controlada y auditada tras pedir la contraseña del usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La cuenta root posee privilegios absolutos e ilimitados sobre el Kernel, archivos de sistema y configuraciones. Trabajar de forma permanente como root implica que cualquier despiste en un comando (ej. rm -rf /) o la ejecución de un programa malicioso tendría un impacto irreversible en todo el equipo. El comando sudo (SuperUser DO) implementa el principio de mínimo privilegio: permite a un usuario estándar ejecutar una única instrucción administrativa con permisos elevados tras reautenticarse, registrando además la acción en los logs de auditoría.
  </div>
</details>

---

### Pregunta 17
A la hora de planificar la selección e instalación de un sistema operativo en un parque de ordenadores de empresa, ¿cuál es el primer paso crítico de evaluación técnica que debe realizarse respecto a los controladores de dispositivos (drivers)?

<details class="quiz-option correct">
  <summary>A) Verificar previamente que los fabricantes de los componentes hardware del equipo disponen de controladores oficiales firmados y compatibles para la versión y arquitectura (32 o 64 bits) del sistema operativo seleccionado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Antes de iniciar cualquier despliegue, es imprescindible verificar que todo el hardware del equipo (placa base, tarjeta de red, gráfica, chipset, periféricos) cuenta con controladores (drivers) oficiales desarrollados y firmados por el fabricante para el sistema operativo y arquitectura de procesador previstos. Sin drivers compatibles, componentes críticos como la red o la pantalla no funcionarán correctamente o provocarán inestabilidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Formatear la partición MBR mediante el comando apt clean antes de comprobar los requisitos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt clean es un comando de limpieza de paquetes de Ubuntu Linux, no una herramienta para evaluar requisitos o formatear MBR.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Deshabilitar la aceleración 3D en la memoria caché L1 para forzar la instalación de drivers genéricos de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La aceleración 3D de la GPU no se deshabilita en la caché L1 ni se fuerza el uso de drivers obsoletos de 16 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir las tarjetas de red de la LAN al protocolo de compresión con pérdida JPEG.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    JPEG es un formato de compresión de imágenes fijas, completamente ajeno a los protocolos de comunicación de las tarjetas de red.
  </div>
</details>

---

### Pregunta 18
Un técnico debe renovar un equipo que cuenta con Windows 10 para instalar Windows 11 conservando los archivos, programas instalados y configuraciones del usuario. ¿Qué tipo de instalación debe seleccionar y cuál es su condición técnica previa indispensable?

<details class="quiz-option incorrect">
  <summary>A) Instalación desatendida; requiere un script de lectura grabado en el registro HKEY_CURRENT_USER.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación desatendida busca automatizar el despliegue mediante un archivo de respuestas, no garantizar la conservación de un SO previo sin evaluar.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Actualización (Upgrade); requiere que el sistema operativo de origen funcione correctamente y cumpla los requisitos mínimos del sistema de destino.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La actualización (Upgrade) sobreescribe la versión anterior del sistema operativo sustituyendo sus archivos base por los de la nueva versión, conservando los datos, configuraciones del usuario y software compatible previamente instalado. Para poder llevarse a cabo, el SO de partida debe estar operativo y el hardware debe cumplir o superar los requisitos mínimos de la versión nueva.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Instalación limpia (Clean install); requiere formatear previamente la partición C:\ mediante un LiveCD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación limpia borra y formatea la partición de destino, eliminando todos los programas y archivos previos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Instalación por volumen MBR; requiere que el procesador funcione a 16 bits sin memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las instalaciones modernas de Windows 11 exigen arquitectura de 64 bits sobre UEFI/GPT, no procesadores de 16 bits sobre MBR sin RAM.
  </div>
</details>

---

### Pregunta 19
Para desplegar un sistema operativo de forma masiva en 50 ordenadores idénticos de un aula de formación sin necesidad de que un técnico intervenga respondiendo manualmente a las preguntas de configuración en cada puesto, ¿qué técnica de instalación se utiliza y qué elemento requiere?

<details class="quiz-option incorrect">
  <summary>A) Instalación dual manual; requiere una copia de seguridad en cinta magnética.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La instalación manual requiere que una persona responda una a una las preguntas en cada uno de los 50 equipos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Actualización por capas; requiere un archivo ejecutable en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe la "actualización por capas" como técnica de despliegue desatendido en MBR.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Instalación desatendida; requiere un archivo de respuestas automatizado con los parámetros de configuración predefinidos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La instalación desatendida automatiza completamente el proceso de despliegue de un sistema operativo. Se apoya en un archivo de respuestas (por ejemplo, autounattend.xml en Windows) donde el administrador preconfigura la clave de licencia, nombre del equipo, zona horaria, particionado y cuentas de usuario. El instalador lee este archivo y completa el proceso sin requerir intervención humana.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Instalación por fragmentación externa; requiere el uso del comando sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fragmentación externa es un inconveniente en la gestión de memoria por segmentación y sfc /scannow es un comando de reparación de archivos.
  </div>
</details>

---

### Pregunta 20
En la planificación de una instalación de Arranque Dual (Dual Boot) en un mismo disco duro entre Microsoft Windows y Ubuntu Linux, ¿cuál es el orden de instalación técnicamente recomendado y por qué?

<details class="quiz-option incorrect">
  <summary>A) Se debe instalar primero Ubuntu Linux y después Windows, porque el Windows Boot Manager sobrescribe la partición ESP sin añadir otros sistemas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Instalar Windows al final provoca que Windows sobreescriba el MBR/ESP ocultando el menú de arranque de Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se deben instalar ambos de forma simultánea ejecutando dos instaladores en paralelo desde el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es posible ejecutar dos instaladores en paralelo compitiendo por las mismas particiones de disco durante el arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El orden es indiferente porque el sistema MBR borra automáticamente cualquier gestor de arranque previo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El orden sí importa y el MBR no borra gestores de forma arbitraria sin un proceso de sobreescritura del instalador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Se debe instalar primero Windows y posteriormente Ubuntu Linux, para que el gestor de arranque GRUB de Linux detecte la presencia de Windows y configure automáticamente el menú de inicio múltiple.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La práctica estándar en Dual Boot es instalar primero el sistema operativo propietario (Windows) y después el sistema libre (Linux). La razón es que el gestor de arranque de Windows (Windows Boot Manager) suele tomar el control exclusivo del arranque sin detectar otros SOs preexistentes. En cambio, al instalar Ubuntu Linux en segundo lugar, su gestor de arranque (GRUB) analiza el disco, reconoce la partición de Windows y genera automáticamente un menú que permite elegir qué sistema iniciar.
  </div>
</details>

---

### Pregunta 21
¿Cuál es el orden secuencial correcto de las cuatro fases principales que componen la secuencia de arranque (boot sequence) de un ordenador desde que se pulsa el botón de encendido hasta que se muestra la interfaz de usuario?

<details class="quiz-option correct">
  <summary>A) 1. Test POST del firmware -> 2. Localización del Bootloader -> 3. Carga del Kernel en RAM -> 4. Inicialización del SO y servicios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La secuencia de arranque consta de 4 fases estrictas: 1. POST (Power-On Self-Test), donde el firmware verifica los componentes de hardware básicos; 2. Localización del Bootloader en la unidad prioritaria (MBR o partición ESP); 3. Carga del Kernel, donde el gestor de arranque lee e introduce el núcleo en la memoria RAM; y 4. Inicialización del SO, donde el Kernel toma el control, carga los controladores, arranca los servicios y despliega la interfaz de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 1. Carga del Kernel -> 2. Test POST del firmware -> 3. Configuración de la swap -> 4. Localización del Bootloader.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es imposible cargar el Kernel en la RAM antes de que el firmware verifique el hardware mediante el POST.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 1. Localización del Bootloader -> 2. Carga del Kernel -> 3. Test POST del firmware -> 4. Desfragmentación del disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sitúa el test de hardware (POST) en tercer lugar tras haber localizado el gestor de arranque y cargado el Kernel.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 1. Inicialización de servicios -> 2. Test POST del firmware -> 3. Carga del Kernel -> 4. Localización del Bootloader.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se pueden iniciar los servicios del sistema operativo antes de haber cargado el propio Kernel.
  </div>
</details>

---

### Pregunta 22
Respecto a las diferencias de arquitectura entre la BIOS tradicional y el firmware UEFI, ¿en qué partición especial del disco duro almacena UEFI los ejecutables del gestor de arranque?

<details class="quiz-option incorrect">
  <summary>A) En el sector cero del registro de Windows (HKLM).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Registro de Windows es una base de datos de configuraciones del SO, no una partición de firmware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En la partición ESP (EFI System Partition), formateada habitualmente en un sistema de archivos compatible como FAT32.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    A diferencia de la BIOS tradicional (que depende de leer el código de arranque grabado en el primer sector físico del disco, el MBR), el firmware UEFI utiliza un esquema estructurado en archivos. Busca y ejecuta los gestores de arranque dentro de una partición de disco independiente denominada ESP (EFI System Partition), la cual debe estar formateada en un sistema de archivos compatible (generalmente FAT/FAT32).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En el archivo hiberfil.sys de la raíz del sistema de archivos ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    hiberfil.sys es el archivo de hibernación de Windows, no una partición EFI para el firmware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En la memoria caché L1 de la Unidad Aritmético-Lógica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La caché L1 es memoria volátil interna de la CPU y no almacena particiones ni archivos de disco.
  </div>
</details>

---

### Pregunta 23
Un servidor dispone de una unidad de almacenamiento SSD de 4 TeraBytes (TB). Al inicializar el disco, el técnico debe elegir el esquema de particionado. ¿Por qué el esquema MBR es inadecuado y qué esquema debe utilizarse?

<details class="quiz-option incorrect">
  <summary>A) MBR es inadecuado porque solo soporta sistemas de archivos APFS; debe utilizarse el esquema SWAP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no limita los sistemas de archivos a APFS (que es de Apple) ni existe un esquema de particionado llamado "SWAP".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) MBR es inadecuado porque solo funciona en modo usuario; debe utilizarse el esquema de micronúcleo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR es un esquema de tabla de particiones, no un modo de ejecución de procesador ni una arquitectura de micronúcleo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) MBR es inadecuado porque está limitado a direccionar discos de un máximo de 2 TB; debe utilizarse el esquema GPT (GUID Partition Table).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El esquema de particionado tradicional MBR (Master Boot Record) utiliza sectores de 32 bits para direccionamiento, lo que limita la capacidad máxima direccionable a 2 TeraBytes (TB) y a un número máximo de 4 particiones primarias. Para utilizar discos de capacidad superior a 2 TB (como la unidad de 4 TB) es obligatorio emplear el esquema GPT (GUID Partition Table), que soporta discos de petabytes y hasta 128 particiones primarias bajo UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) MBR es inadecuado porque no permite el uso del comando sudo reboot; debe utilizarse el esquema de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no condiciona el uso de comandos de reinicio del sistema operativo.
  </div>
</details>

---

### Pregunta 24
Señale la afirmación INCORRECTA (discriminación negativa) respecto a las características y ventajas de la tabla de particiones GPT (GUID Partition Table):

<details class="quiz-option incorrect">
  <summary>A) Soporta hasta 128 particiones primarias en sistemas operativos Windows sin necesidad de crear particiones extendidas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta afirmación es verdadera (por tanto, no es la opción que buscamos): GPT permite crear hasta 128 particiones primarias de forma nativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Guarda copias de seguridad de la tabla de particiones y cabeceras al final del disco para permitir la recuperación en caso de corrupción del primer sector.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta afirmación es verdadera: GPT incluye redundancia al guardar una copia de la tabla de particiones al final del disco físico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite gestionar volúmenes de almacenamiento con capacidades superiores a los 2 TeraBytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta afirmación es verdadera: GPT supera el límite de 2 TB de MBR, permitiendo gestionar discos de Zettabytes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Requiere obligatoriamente funcionar sobre una BIOS tradicional de 16 bits y limita el disco a un máximo de 4 particiones en total.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La opción D es INCORRECTA (y por tanto la respuesta a la pregunta) porque la limitación a 4 particiones totales y la dependencia del modo de 16 bits son restricciones propias de la BIOS tradicional con MBR. El esquema GPT fue diseñado para trabajar con la interfaz moderna UEFI, superando ampliamente el límite de 4 particiones.
  </div>
</details>

---

### Pregunta 25
¿Qué gestor de arranque (bootloader) es el estándar en distribuciones GNU/Linux como Ubuntu y cuál es su función principal cuando detecta otros sistemas operativos instalados en el disco?

<details class="quiz-option correct">
  <summary>A) GRUB (GRand Unified Bootloader); presenta un menú al usuario para seleccionar con qué sistema operativo desea iniciar el equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    GRUB (GRand Unified Bootloader) es el gestor de arranque por defecto en la inmensa mayoría de distribuciones Linux. Se encarga de cargar el kernel Linux en la memoria RAM y, en entornos multiarranque, ofrece una interfaz de menú que permite al usuario elegir de forma sencilla qué sistema operativo (Linux, Windows u otros) desea ejecutar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Windows Boot Manager; elimina las particiones de Linux e inicia el Registro de Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El gestor de arranque de Linux es GRUB, no el de Windows, y no elimina particiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) NTLDR; formatea las tablas de particiones MBR y las convierte en archivos .deb.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    NTLDR era el gestor de arranque de Windows XP (obsoleto) y no convierte MBR en paquetes .deb.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) LTSC; desactiva el firmware UEFI para forzar un arranque en modo seguro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    LTSC es un canal de soporte de licencias de Windows Server, no un gestor de arranque.
  </div>
</details>

---

### Pregunta 26
Un usuario de Windows 11 informa de que el sistema muestra errores de pantalla azul al abrir ciertas aplicaciones tras un apagado incorrecto. ¿Qué herramienta de consola de comandos debe ejecutar el administrador como primer paso de diagnóstico para examinar y reparar archivos de sistema protegidos corruptos?

<details class="quiz-option incorrect">
  <summary>A) apt autoremove</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt autoremove es un comando de Linux para desinstalar paquetes huérfanos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando sfc /scannow (System File Checker) es la herramienta integrada en Microsoft Windows que escanea la integridad de todos los archivos protegidos del sistema. Si detecta archivos corruptos, dañados o modificados, los reemplaza automáticamente por una copia limpia alojada en la caché del sistema (%WinDir%\System32\dllcache). Requiere ejecutarse en una consola con privilegios de administrador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) lsb_release -a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    lsb_release -a es un comando de Linux para consultar la versión de la distribución.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) crontab -e</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab -e se utiliza en Linux para editar las tareas programadas del servicio cron.
  </div>
</details>

---

### Pregunta 27
¿Qué comando de la consola de Windows muestra un informe completo con la versión exacta del SO, la fecha de instalación original, la arquitectura del procesador, la memoria física disponible y la lista de parches de seguridad (hotfixes) instalados?

<details class="quiz-option incorrect">
  <summary>A) sfc /purgecache</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /purgecache era un parámetro antiguo de limpieza de caché de SFC, no un visor de informes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sudo apt update</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo apt update es el comando de actualización de repositorios de Linux Ubuntu.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) systeminfo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando systeminfo en Windows recopila y muestra en la consola un desglose exhaustivo de la configuración de la máquina: nombre del equipo, versión y compilación del SO, fecha de instalación, fabricante de la BIOS/UEFI, procesador, memoria física/virtual y un listado detallado de todas las actualizaciones y parches de seguridad (KB/hotfixes) instalados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) format C:</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    format C: destruye los datos de la partición principal formateando el disco.
  </div>
</details>

---

### Pregunta 28
En el mantenimiento básico de un sistema Ubuntu Linux por línea de comandos, ¿cuál es la diferencia técnica exacta entre ejecutar sudo apt update y sudo apt upgrade?

<details class="quiz-option incorrect">
  <summary>A) apt update instala los programas pesados y apt upgrade borra la memoria caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update no instala programas ni interactúa con la caché L1 del procesador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) apt update formatea la memoria swap y apt upgrade reinicia el Kernel de la UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos comandos formatea la swap ni reinicia el kernel del firmware UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) apt update borra todos los paquetes obsoletos y apt upgrade edita el archivo /etc/hosts.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update no borra paquetes ni modifica el archivo de nombres de red /etc/hosts.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) sudo apt update actualiza la lista local de paquetes y versiones disponibles desde los repositorios sin instalar nada, mientras que sudo apt upgrade descarga e instala las nuevas versiones de los paquetes ya instalados.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    sudo apt update conecta con los repositorios configurados y descarga los índices actualizados de software sin modificar ningún programa; únicamente actualiza la base de datos local de paquetes disponibles. Por su parte, sudo apt upgrade compara los paquetes instalados con la lista actualizada e instala las nuevas versiones disponibles de todo el software del sistema.
  </div>
</details>

---

### Pregunta 29
Tras desinstalar varias aplicaciones pesadas en Ubuntu, el administrador observa que han quedado paquetes antiguos de dependencias que ya no utiliza ninguna aplicación. ¿Qué comando del gestor APT elimina automáticamente estos paquetes huérfanos?

<details class="quiz-option correct">
  <summary>A) sudo apt autoremove</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando sudo apt autoremove analiza el árbol de dependencias del sistema de paquetes de Ubuntu y elimina de forma segura aquellos paquetes o librerías que fueron instalados automáticamente como requisitos para otras aplicaciones, pero que actualmente ya no son necesarios porque el programa principal fue desinstalado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es el comprobador de archivos protegidos exclusivo de Microsoft Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) systeminfo /clean</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe el parámetro /clean en el comando systeminfo de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) sudo reboot -f</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo reboot -f fuerza el reinicio inmediato de la máquina sin limpiar paquetes del gestor APT.
  </div>
</details>

---

### Pregunta 30
Para recuperar espacio en el disco duro de un servidor Ubuntu sin desinstalar ningún programa ni eliminar dependencias útiles, ¿qué comando de la herramienta APT permite borrar los archivos de instalación comprimidos (.deb) almacenados en la caché local del disco?

<details class="quiz-option incorrect">
  <summary>A) sudo apt install --flush</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe el parámetro --flush en la sintaxis de apt install.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) sudo apt clean</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada vez que se instala o actualiza software en Ubuntu, el gestor APT descarga los paquetes comprimidos .deb y los almacena en el directorio de caché /var/cache/apt/archives/. Con el tiempo, estos archivos ocupan gigabytes de disco. El comando sudo apt clean vacía completamente esta memoria caché borrando los archivos .deb descargados sin afectar a las aplicaciones ya instaladas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) ms-settings:windowsupdate</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ms-settings:windowsupdate es un comando de acceso directo al menú de Windows Update en Microsoft Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) sfc /scanonce</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scanonce es una opción antigua del comprobador de archivos de Windows.
  </div>
</details>

---

### Pregunta 31
Un técnico necesita consultar por terminal la versión oficial exacta instalada de la distribución Ubuntu, incluyendo su nombre en clave (codename), para verificar la compatibilidad con un software de terceros. ¿Qué comando debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) systeminfo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systeminfo es una utilidad nativa de Microsoft Windows, no de Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es el comprobador de archivos protegidos de Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) lsb_release -a</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando lsb_release -a (Linux Standard Base release) muestra los datos oficiales de identificación de la distribución Linux instalada: identificador del distribuidor (ej. Ubuntu), descripción completa (ej. Ubuntu 24.04 LTS), número de versión y nombre en clave del lanzamiento (codename).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) powercfg /a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    powercfg /a es el comando de consola de Windows para consultar los estados de energía e hibernación disponibles.
  </div>
</details>

---

### Pregunta 32
En el mantenimiento preventivo por línea de comandos, ¿cuáles son los comandos exactos para solicitar un reinicio inmediato y limpio del sistema operativo en Microsoft Windows (PowerShell/CMD) y en Ubuntu Linux (Terminal) respectivamente?

<details class="quiz-option incorrect">
  <summary>A) Windows: sfc /scannow | Linux: apt clean</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc escanea archivos en Windows y apt clean borra cachés en Linux; ninguno reinicia el sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Windows: systeminfo /reboot | Linux: lsb_release -r</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systeminfo no admite el parámetro /reboot y lsb_release solo consulta la versión de Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Windows: powercfg /hibernate | Linux: crontab -r</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    powercfg gestiona la energía en Windows y crontab -r elimina la tabla de tareas programadas del usuario en Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Windows: shutdown /r /t 0 | Linux: sudo reboot (o sudo shutdown -r now)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Windows, el comando shutdown con los parámetros /r (reboot/reiniciar) y /t 0 (tiempo de espera cero segundos) solicita el reinicio limpio e inmediato del sistema. En Linux (Ubuntu), el comando sudo reboot (o sudo shutdown -r now) reinicia el sistema de forma segura cerrando los procesos activos.
  </div>
</details>
