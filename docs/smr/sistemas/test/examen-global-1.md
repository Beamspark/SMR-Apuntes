# Examen Global 1: Sistemas Operativos Monopuesto

[← Volver al Índice de Tests](./index.md)

---

### Pregunta 1
En la arquitectura de Von Neumann, ¿cuál es la función específica e indispensable de la Unidad de Control (UC) dentro del ciclo de instrucción?

<details class="quiz-option correct">
  <summary>A) Buscar la instrucción en la memoria RAM, decodificar su código de operación y enviar señales de mando a través del bus de control para coordinar la ejecución.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Unidad de Control (UC) es el módulo organizador de la CPU. Su cometido es extraer secuencialmente las instrucciones almacenadas en la memoria RAM, decodificar el código de operación y generar las señales de control necesarias dirigidas al bus de control para coordinar la ALU, los registros y los periféricos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ejecutar las operaciones numéricas de suma, resta y comparaciones lógicas directamente en los registros internos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución de cálculos matemáticos y comparaciones lógicas es responsabilidad de la Unidad Aritmético-Lógica (ALU).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Conectar de forma síncrona la memoria caché L1 con la GPU sin utilizar el bus del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La UC no actúa como un bus ni conecta directamente la caché L1 con la GPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Guardar de forma permanente en el disco SSD el resultado final de la fase de almacenamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La UC no almacena información de forma permanente en el almacenamiento secundario.
  </div>
</details>

---

### Pregunta 2
Respecto a la evolución del firmware en las placas base modernas, ¿cuál es la ventaja clave de la interfaz UEFI frente a la BIOS tradicional de 16 bits?

<details class="quiz-option incorrect">
  <summary>A) Elimina totalmente el test POST inicial para iniciar el sistema operativo en modo texto de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UEFI sigue realizando el test POST y no se limita al modo texto de 16 bits.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Trabaja en modos de 32 o 64 bits, soporta el esquema de particionado GPT superando el límite de 2 TB y añade la seguridad Secure Boot.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    UEFI sustituye a la BIOS tradicional superando sus limitaciones al trabajar en 32 o 64 bits, soportar la tabla de particiones GPT (superando el límite de 2 TB de MBR) leyendo la partición ESP y añadir la característica de seguridad Secure Boot para bloquear ejecutables no firmados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Guarda el sistema operativo completo dentro de un chip ROM no volátil para evitar el uso de unidades de disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UEFI no almacena el sistema operativo dentro del chip ROM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Obliga al uso exclusivo de la tabla de particiones MBR con un límite de 4 particiones primarias.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La restricción de MBR a 4 particiones primarias corresponde a la BIOS tradicional.
  </div>
</details>

---

### Pregunta 3
Aplicando el Teorema Fundamental de la Numeración, ¿cuál es el equivalente en sistema hexadecimal (base 16) del valor decimal 157_10?

<details class="quiz-option incorrect">
  <summary>A) 8E_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    8E_16 equivale en decimal a 8·16 + 14 = 142.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 9C_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    9C_16 utiliza la letra C (12 en decimal), resultando en 9·16 + 12 = 156.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 9D_16</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dividimos 157 entre 16: 157 / 16 = 9 de cociente, con un resto de 13. En sistema hexadecimal, el valor 13 se representa con la letra D. Leyendo el último cociente seguido del resto obtenemos: 9D_16 (9·16 + 13 = 157).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) A3_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    A3_16 equivale en decimal a 10·16 + 3 = 163.
  </div>
</details>

---

### Pregunta 4
Según las definiciones de la Free Software Foundation (FSF), ¿qué libertad fundamental del software libre se define como la capacidad de estudiar cómo funciona el programa y adaptarlo a las propias necesidades?

<details class="quiz-option incorrect">
  <summary>A) Libertad 0.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La libertad de ejecución para cualquier propósito corresponde a la Libertad 0.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Libertad 2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La libertad de redistribuir copias a terceros corresponde a la Libertad 2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Libertad 3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La libertad de publicar mejoras modificadas corresponde a la Libertad 3.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Libertad 1.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La FSF establece 4 libertades básicas: Libertad 0 (ejecutar con cualquier propósito), Libertad 1 (estudiar y adaptar el programa, lo cual exige acceso al código fuente), Libertad 2 (redistribuir copias) y Libertad 3 (mejorar el programa y publicar las modificaciones).
  </div>
</details>

---

### Pregunta 5
Un centro de datos empresarial busca virtualizar servidores obteniendo el máximo rendimiento sin la mediación de un sistema operativo anfitrión. ¿Qué categoría de hipervisor debe emplear y cuál es un software representativo?

<details class="quiz-option correct">
  <summary>A) Hipervisor Tipo 1 (Bare Metal / Nativo); ejemplo: VMware ESXi.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los hipervisores de Tipo 1 (Bare Metal) se instalan e introducen directamente sobre el hardware físico del servidor sin la intermediación de un SO anfitrión comercial, maximizando el rendimiento y la eficiencia. VMware ESXi es el estándar empresarial en esta categoría.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Hipervisor Tipo 2 (Hosted); ejemplo: Oracle VirtualBox.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Oracle VirtualBox es un hipervisor de Tipo 2 (se ejecuta sobre un sistema anfitrión).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Hipervisor Tipo 3 (Emulated); ejemplo: Hyper-V Client.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe la categoría "Tipo 3" en la clasificación estándar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Hipervisor Tipo 0 (Firmware); ejemplo: MS-DOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe la categoría "Tipo 0" y MS-DOS es un sistema operativo antiguo.
  </div>
</details>

---

### Pregunta 6
Un administrador necesita configurar una máquina virtual para que funcione como servidor accesible desde cualquier ordenador de la red física local (LAN) con su propia dirección IP independiente. ¿Qué modo de red virtual debe configurar en el hipervisor?

<details class="quiz-option incorrect">
  <summary>A) Red Interna (Internal Network).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Red Interna aísla las VMs entre sí sin acceso a la LAN física ni a Internet.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Adaptador Puente (Bridged Adapter).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modo Adaptador Puente (Bridged) conecta virtualmente la tarjeta de red de la VM directamente al adaptador físico del anfitrión. A efectos prácticos, la VM se comporta como un ordenador físico más en el mismo conmutador/router, recibiendo su propia IP independiente en la LAN.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Traducción de Direcciones de Red (NAT).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En NAT la VM sale al exterior ocultándose tras la IP del anfitrión, impidiendo que la LAN inicie conexiones directas hacia ella.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Anfitrión solo (Host-Only).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Host-Only limita la comunicación exclusivamente entre el anfitrión y la VM.
  </div>
</details>

---

### Pregunta 7
Tras instalar un sistema operativo invitado en VirtualBox, la resolución de pantalla es baja y el ratón no se integra con fluidez. ¿Qué paquete de software debe instalarse dentro del sistema invitado para solucionar esto y habilitar carpetas compartidas?

<details class="quiz-option incorrect">
  <summary>A) Las extensiones de virtualización Intel VT-x en la UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Intel VT-x se habilita en la BIOS/UEFI del anfitrión, no dentro del sistema invitado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El paquete de particionado MBR del disco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR define la tabla de particiones del disco, no optimizaciones de pantalla.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Las Guest Additions (o VMware Tools en entornos VMware).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las Guest Additions (en VirtualBox) o VMware Tools (en VMware) son controladores de dispositivos y aplicaciones de sistema que se instalan dentro del sistema operativo invitado para añadir aceleración gráfica, ajuste dinámico de pantalla, integración del ratón y carpetas compartidas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El controlador de la barra de buses de la ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ALU forma parte interna de la CPU y no utiliza controladores instalables.
  </div>
</details>

---

### Pregunta 8
Para comprobar de manera interactiva en la consola CLI de Ubuntu el consumo en tiempo real de CPU y memoria RAM de cada proceso activo, mediante barras de colores, ¿qué comando mejorado se utiliza?

<details class="quiz-option incorrect">
  <summary>A) df -h</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    df -h muestra el espacio libre y ocupado en las unidades de disco montadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) free -m</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    free -m muestra estadísticas estáticas de memoria RAM y swap.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es un comprobador de archivos exclusivo de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) htop</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Mientras que top es el monitor clásico de consola en Linux, htop es su versión interactiva y mejorada. Muestra mediante barras de colores el uso individual de cada núcleo de CPU, el consumo de RAM/swap y permite ordenar o filtrar procesos.
  </div>
</details>

---

### Pregunta 9
Cuando un proceso que está en estado "En ejecución" solicita una operación de lectura al disco duro, ¿a qué estado es movido por el Kernel y a cuál pasa cuando la E/S finaliza?

<details class="quiz-option correct">
  <summary>A) Pasa a estado "Bloqueado" y, al finalizar la E/S, realiza la transición a "Preparado".</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando un proceso en ejecución solicita una operación de E/S, no puede continuar ejecutando instrucciones en la CPU. El Kernel lo mueve al estado "Bloqueado". Cuando el controlador de disco completa la lectura e interrumpe a la CPU, el proceso pasa al estado "Preparado" (cola de listos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Pasa a estado "Nuevo" y, al finalizar la E/S, realiza la transición a "Terminado".</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Nuevo" es la creación del proceso y la finalización de E/S no lo mueve a "Terminado".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Pasa a estado "Preparado" y, al finalizar la E/S, se ejecuta directamente en la CPU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un proceso que espera E/S no está "Preparado" sino "Bloqueado", y al terminar no va directo a la CPU sin pasar por la cola de listos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Pasa a estado "Zombie" y, al finalizar la E/S, se guarda en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Zombie" es un proceso finalizado cuyo padre no ha leído su estado, y hiberfil.sys es el archivo de hibernación de Windows.
  </div>
</details>

---

### Pregunta 10
En la planificación de CPU por el algoritmo no expulsivo FIFO / FCFS, tres procesos (P1, P2 y P3) llegan en t = 0 ms con tiempos de ejecución de P1 = 4 ms, P2 = 4 ms y P3 = 4 ms. ¿Cuál es el tiempo medio de espera (TE)?

<details class="quiz-option incorrect">
  <summary>A) 8 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    8 ms es el tiempo de espera individual de P3.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 4 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En FIFO se ejecutan en orden de llegada: P1 empieza en t=0 ms (espera = 0 ms); P2 empieza en t=4 ms (espera = 4 ms); P3 empieza en t=8 ms (espera = 8 ms). Tiempo medio de espera: (0 + 4 + 8) / 3 = 12 / 3 = 4 ms.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 2,67 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    2,67 ms resulta de dividir erróneamente 8 / 3.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 6 ms</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    6 ms es el tiempo medio de retorno (T = (4 + 8 + 12) / 3 = 8), no de espera.
  </div>
</details>

---

### Pregunta 11
Un sistema operativo utiliza un esquema de memoria por paginación con páginas de 8 KB. Si un programa requiere 18 KB para cargarse, ¿cuántas páginas se le asignan y cuánta fragmentación interna se produce en el último marco?

<details class="quiz-option incorrect">
  <summary>A) 2 páginas y 2 KB de fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Con 2 páginas (16 KB) no cabe el programa de 18 KB y la paginación no genera fragmentación externa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 4 páginas y 14 KB de fragmentación interna.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    4 páginas equivalen a 32 KB, asignando bloques innecesarios de más.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 3 páginas y 6 KB de fragmentación interna.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Como los marcos son bloques fijos de 8 KB, 2 páginas (16 KB) no bastan para albergar 18 KB. Se le asignan 3 páginas (3 × 8 = 24 KB). El espacio no utilizado dentro de la tercera página asignada es 24 - 18 = 6 KB de fragmentación interna.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 1 página de 18 KB sin fragmentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las páginas son de tamaño fijo (8 KB), no existen páginas de 18 KB.
  </div>
</details>

---

### Pregunta 12
Se requiere particionar un disco de 4 TB en un servidor moderno con firmware UEFI. ¿Por qué el esquema MBR es inadecuado y qué esquema debe utilizarse?

<details class="quiz-option incorrect">
  <summary>A) MBR limita las particiones a un máximo de 128 primarias; debe usarse el esquema SWAP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    128 particiones es la ventaja de GPT, no la restricción de MBR, y SWAP es memoria de intercambio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) MBR solo funciona en sistemas de 16 bits; debe usarse la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no limita los discos a sistemas de 16 bits y ESP es la partición EFI del firmware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) MBR limita los discos a 512 MB; debe usarse el esquema ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR no limita a 512 MB y ext4 es un sistema de archivos, no un esquema de particiones.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) MBR utiliza direcciones de 32 bits limitando la capacidad máxima a 2 TB; debe utilizarse el esquema GPT (GUID Partition Table).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    MBR utiliza sectores de 32 bits limitando la capacidad máxima de disco a 2 TB y a 4 particiones primarias. Para gestionar discos de capacidad superior a 2 TB (como la unidad de 4 TB) bajo UEFI es obligatorio emplear el esquema GPT (GUID Partition Table).
  </div>
</details>

---

### Pregunta 13
¿En qué consiste la función Inicio Rápido (Fast Startup) en Windows 11 y en qué archivo de sistema se guarda la información para acelerar el arranque?

<details class="quiz-option correct">
  <summary>A) Cierra la sesión de usuario pero hiberna el Kernel del SO en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función Inicio Rápido de Windows cierra la sesión del usuario y las aplicaciones activas, pero hiberna la sesión del núcleo (Kernel) escribiendo su estado en el archivo hiberfil.sys. En el siguiente encendido, lee dicho archivo evitando inicializar el Kernel desde cero.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Mantiene la memoria RAM continuamente alimentada con energía de la batería.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mantener alimentada la RAM es la definición del estado de Suspensión, no del Inicio Rápido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Borra las claves de HKLM y guarda la sesión en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No modifica claves del registro ni guarda la sesión en la ESP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ejecuta una comprobación sfc /scannow cada vez que se hace clic en "Apagar".</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ejecuta el comprobador de archivos protegidos.
  </div>
</details>

---

### Pregunta 14
Un administrador necesita ausentarse de su puesto de trabajo de forma repentina. Quiere bloquear la sesión manteniendo sus máquinas virtuales y tareas ejecutándose en segundo plano. ¿Cuáles son los atajos de teclado en Windows y Ubuntu respectivamente?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + Alt + Supr en Windows y sudo reboot en Ubuntu.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Alt + Supr abre la pantalla de seguridad de Windows y sudo reboot reinicia el equipo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Windows + L en Windows y Super + L en Ubuntu.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Bloquear la sesión oculta la interfaz de usuario requiriendo la contraseña para acceder de nuevo, mientras que los programas y servicios continúan ejecutándose activamente en segundo plano. Los atajos son Windows + L en Windows y Super + L en Ubuntu.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Alt + F4 en ambos sistemas operativos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + F4 cierra la aplicación o ventana activa en primer plano.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Shift + Supr en ambos sistemas operativos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Shift + Supr realiza una eliminación permanente saltándose la Papelera.
  </div>
</details>

---

### Pregunta 15
En la estructura jerárquica del directorio raíz (/) de Linux, ¿cuál es la función específica de la carpeta /etc?

<details class="quiz-option incorrect">
  <summary>A) Guardar las descargas y documentos de los usuarios estándar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los documentos de usuario están en /home/nombre_usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Contener la imagen del Kernel de Linux y los archivos de arranque de GRUB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Kernel y GRUB se almacenan en la carpeta /boot.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Almacenar los archivos de configuración en texto plano del sistema y de los servicios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la jerarquía FHS de Linux, la carpeta /etc almacena los ficheros de configuración del sistema y de los servicios instalados en texto plano.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Montar automáticamente unidades extraíbles como pendrives USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las unidades extraíbles se montan en la carpeta /media.
  </div>
</details>

---

### Pregunta 16
Se requiere programar un script de copia de seguridad en Ubuntu para que se ejecute de lunes a viernes a las 08:30 AM. ¿Cuál es la sintaxis exacta de 5 campos en crontab -e?

<details class="quiz-option incorrect">
  <summary>A) 8 30 * * 1-5 /script.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los campos de hora y minuto (se ejecutaría a las 08:08 AM del día 30).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 30 8 1-5 * * /script.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Coloca el rango 1-5 en el campo de Día del mes en lugar de Día de la semana.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 0 8 * * 1-5 /script.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Especifica el minuto a 0 (08:00 AM) en lugar de 30.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) 30 8 * * 1-5 /script.sh</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los 5 campos de crontab son: Minuto (30), Hora (8), Día del mes (*), Mes (*), Día de la semana (1-5 para lunes a viernes). La sintaxis es 30 8 * * 1-5 /script.sh.
  </div>
</details>

---

### Pregunta 17
En el Visor de eventos de Windows (eventvwr.msc), ¿en qué registro específico se almacenan las auditorías de inicios y cierres de sesión (Logon/Logoff) y cambios de privilegios?

<details class="quiz-option correct">
  <summary>A) Registro de Seguridad.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El registro de Seguridad en eventvwr.msc almacena los eventos de auditoría de acceso, como intentos correctos o fallidos de inicio de sesión (Logon/Logoff), cambios de permisos y elevación de privilegios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Registro de Sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro de Sistema almacena eventos generados por el Kernel, controladores y servicios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Registro de Aplicación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro de Aplicación guarda eventos notificados por las aplicaciones de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Registro de Instalación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe un registro denominado de Instalación para auditoría de inicios de sesión.
  </div>
</details>

---

### Pregunta 18
Un técnico debe realizar el mantenimiento de un disco de estado sólido (SSD). ¿Por qué no debe desfragmentarse un SSD y qué instrucción sustituye esta tarea?

<details class="quiz-option incorrect">
  <summary>A) Porque modifica la tabla MBR a GPT; se sustituye por sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La desfragmentación no altera las tablas de particionado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque genera escrituras masivas innecesarias que degradan la vida útil de las celdas NAND Flash; se sustituye por el comando TRIM.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Dado que los SSD tienen un tiempo de acceso aleatorio casi instantáneo, la desfragmentación no aporta velocidad de acceso y genera millones de operaciones de escritura que desgastan las celdas NAND Flash. En su lugar, se utiliza el comando TRIM, que notifica al controlador los bloques liberados por el sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque elimina los archivos de la carpeta /var/log; se sustituye por cleanmgr.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No elimina registros de /var/log.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque los SSD solo son compatibles con FAT32; se sustituye por chkdsk /f.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los SSD funcionan con cualquier sistema de archivos moderno (NTFS, ext4, APFS).
  </div>
</details>

---

### Pregunta 19
Cuando un usuario accede a través de la red local a una carpeta compartida en un sistema de archivos NTFS, existen permisos de recurso compartido y permisos NTFS. ¿Qué regla aplica el sistema operativo al combinarlos?

<details class="quiz-option incorrect">
  <summary>A) Se aplica la regla del permiso más permisivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aplicar el más permisivo vulneraría las directivas de seguridad locales NTFS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se ignoran los permisos NTFS y solo aplican los de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los permisos NTFS jamás se ignoran.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Prevalece siempre el permiso más restrictivo entre la combinación de ambos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al acceder por red a una carpeta en NTFS, el sistema evalúa por separado los permisos de recurso compartido y los permisos de seguridad NTFS local. Para garantizar la seguridad, aplica la regla de la intersección más restrictiva: prevalece siempre el permiso más estricto entre ambas capas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se otorga Control Total por defecto si el usuario está autenticado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La autenticación no concede Control Total de forma automática.
  </div>
</details>

---

### Pregunta 20
Para modificar una configuración global que afecte a todos los usuarios del ordenador y al hardware del sistema en el Registro de Windows (regedit), ¿en qué rama principal debe aplicarse el cambio?

<details class="quiz-option incorrect">
  <summary>A) HKEY_CURRENT_USER (HKCU)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCU almacena únicamente las preferencias del usuario que mantiene la sesión activa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) HKEY_CLASSES_ROOT (HKCR)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCR gestiona las asociaciones de extensiones de archivo con sus aplicaciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) HKEY_CURRENT_CONFIG (HKCC)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCC almacena la información sobre el perfil de hardware activo detectado durante el arranque.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) HKEY_LOCAL_MACHINE (HKLM)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La rama HKEY_LOCAL_MACHINE (HKLM) almacena la configuración global absoluta del equipo físico real (controladores, parches del SO, configuraciones de red y aplicaciones) que aplica a todos los usuarios del sistema.
  </div>
</details>

---

### Pregunta 21
Un administrador de redes examina una tarjeta de interfaz y necesita obtener la equivalencia en el sistema hexadecimal (base 16) del siguiente octeto expresado en binario: 10111100_2. ¿Cuál es su representación exacta?

<details class="quiz-option correct">
  <summary>A) BC_16</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Como 16 = 2⁴, agrupamos la secuencia binaria de 8 bits en bloques de 4 bits (nibbles) desde la derecha: Bloque izquierdo: 1011_2 = 8 + 0 + 2 + 1 = 11 → letra B. Bloque derecho: 1100_2 = 8 + 4 + 0 + 0 = 12 → letra C. Resultado final: BC_16 (o 0xBC).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) AD_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AD_16 equivale a la secuencia binaria 10101101_2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CB_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el orden de los nibbles (escribiendo primero el bloque derecho).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) B12_16</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En hexadecimal los valores entre 10 y 15 no se representan con dos dígitos decimales, sino con las letras A-F.
  </div>
</details>

---

### Pregunta 22
Un microprocesador dispone de una longitud de palabra de datos de 8 bits y trabaja con enteros sin signo (unsigned integer). ¿Cuál es el rango de valores decimales representables y el número total de combinaciones posibles?

<details class="quiz-option correct">
  <summary>A) Rango de 0 a 255 en decimal, permitiendo un total de 256 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Con n = 8 bits se obtienen 2⁸ = 256 combinaciones únicas. En formato sin signo (unsigned), las combinaciones abarcan desde la secuencia todo ceros (00000000_2 = 0) hasta todo unos (11111111_2 = 255), cubriendo el rango de 0 a 255.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Rango de -128 a +127 en decimal, permitiendo un total de 255 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El rango de -128 a +127 corresponde a enteros con signo (complemento a 2) y el número de combinaciones sigue siendo 256.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Rango de 1 a 256 en decimal, permitiendo un total de 256 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La combinación todo ceros representa el número 0, no el 1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Rango de 0 a 512 en decimal, permitiendo un total de 512 combinaciones distintas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    512 combinaciones corresponden a una longitud de palabra de 9 bits (2⁹ = 512).
  </div>
</details>

---

### Pregunta 23
¿Qué caracteriza técnicamente a un Hipervisor de Tipo 2 (Hosted / Hospedado) y cuáles son dos ejemplos representativos en entornos de escritorio?

<details class="quiz-option incorrect">
  <summary>A) Se ejecuta directamente sobre el hardware sin sistema operativo anfitrión; ejemplos: VMware ESXi y Xen.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución directa sobre el hardware sin SO anfitrión define a los hipervisores de Tipo 1 (Bare Metal).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Elimina el uso de memoria RAM física; ejemplos: MS-DOS y Apple APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna máquina virtual funciona sin memoria RAM y APFS es un sistema de archivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Se instala y ejecuta como una aplicación sobre un sistema operativo anfitrión previo; ejemplos: Oracle VirtualBox y VMware Workstation Pro.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los hipervisores de Tipo 2 (Hosted) funcionan alojados sobre un sistema operativo anfitrión comercial (Windows, Linux, macOS). El usuario inicia el anfitrión, abre el hipervisor como cualquier aplicación y desde él lanza las máquinas virtuales. Oracle VirtualBox y VMware Workstation Pro son referentes en esta categoría.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se ejecuta antes del test POST de la BIOS; ejemplos: Windows Server y Linux Kernel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ningún hipervisor de Tipo 2 se ejecuta antes del POST de la BIOS.
  </div>
</details>

---

### Pregunta 24
Al asignar memoria RAM física a una máquina virtual, ¿cuál es la regla de oro preventiva para evitar el colapso del sistema operativo anfitrión?

<details class="quiz-option incorrect">
  <summary>A) Asignar el 100% de la RAM para maximizar la velocidad de la máquina virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Asignar el 100% de la RAM dejaría al anfitrión sin memoria, colapsando el equipo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) No asignar más del 50% - 60% de la RAM física real del equipo anfitrión al conjunto de máquinas virtuales activas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema anfitrión requiere memoria RAM física suficiente para gestionar sus propios procesos, controladores e hipervisor. Si se asigna más del 50% - 60% de la RAM física a las VMs, el anfitrión se quedará sin memoria real, recurrirá masivamente al archivo de paginación en disco (swapping) y todo el equipo se congelará.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Asignar siempre un máximo fijo de 256 MB independientemente de la RAM total disponible.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    256 MB es una cantidad insuficiente para sistemas operativos modernos como Windows 11 o Ubuntu Desktop.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir toda la memoria RAM en espacio de intercambio swap en el disco SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria de intercambio en disco no sustituye a la necesidad de RAM física activa.
  </div>
</details>

---

### Pregunta 25
Al clonar una máquina virtual para desplegarla en la misma red local (LAN) que la original, ¿qué parámetro de la tarjeta de red virtual debe regenerarse obligatoriamente para evitar conflictos de comunicación?

<details class="quiz-option incorrect">
  <summary>A) La versión del firmware UEFI de la máquina virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La versión del firmware UEFI emulado no genera duplicidades de red en la LAN.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La partición de intercambio swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La partición de intercambio es interna al sistema operativo invitado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El sistema de archivos del disco virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema de archivos del disco no influye en la capa de enlace de red.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La dirección MAC (Media Access Control) de la tarjeta de red virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La dirección MAC es el identificador físico único de nivel de enlace (Capa 2) de un adaptador de red. Si se clona una VM manteniendo la misma dirección MAC que la máquina de origen y ambas se ejecutan en la misma subred, se generarán colisiones de tráfico y un conflicto grave de direccionamiento de red.
  </div>
</details>

---

### Pregunta 26
En el algoritmo de planificación expulsivo SRTF (Shortest Remaining Time First), un proceso P1 con un tiempo restante de 8 ms se encuentra en la CPU. En ese instante llega a la cola de preparados un proceso P2 con un tiempo total de ejecución de 3 ms. ¿Cómo actúa el planificador?

<details class="quiz-option correct">
  <summary>A) Interrumpe inmediatamente a P1 y le otorga la CPU a P2 por tener un tiempo restante menor (3 ms < 8 ms).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    SRTF es la variante expulsiva de SJF. Al llegar un nuevo proceso (P2) cuyo tiempo necesario (3 ms) es estrictamente menor que el tiempo restante del proceso en ejecución (P1 = 8 ms), el planificador despoja (expulsa) a P1 de la CPU, lo devuelve a la cola de preparados y asigna la CPU a P2 inmediatamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Mantiene a P1 en la CPU hasta que finalice sus 8 ms por ser un algoritmo no expulsivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe el comportamiento de un algoritmo no expulsivo como SJF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cancela el proceso P2 por haber llegado cuando la CPU estaba ocupada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los procesos en cola de preparados no se cancelan al encontrar la CPU ocupada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Envía ambos procesos al espacio de intercambio swap en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La llegada de un proceso de menor tiempo no provoca un volcado a la swap.
  </div>
</details>

---

### Pregunta 27
¿Qué diferencia a las técnicas de gestión de memoria Paginación y Segmentación respecto al tipo de fragmentación que pueden generar en la RAM?

<details class="quiz-option incorrect">
  <summary>A) La paginación genera fragmentación externa y la segmentación no genera ninguna fragmentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La paginación no provoca fragmentación externa y la segmentación sí sufre fragmentación externa.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La paginación divide la memoria en marcos de tamaño fijo y puede provocar fragmentación interna; la segmentación divide la memoria en bloques lógicos de tamaño variable y puede provocar fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Paginación, el espacio de memoria se divide en bloques fijos (marcos/páginas). Al ser de tamaño fijo, no genera huecos libres entre bloques (sin fragmentación externa), pero el último marco asignado puede quedar parcialmente incompleto (fragmentación interna). En Segmentación, los bloques son de tamaño variable adaptados al programa; al entrar y salir procesos quedan huecos irregulares dispersos sin continuidad (fragmentación externa).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La paginación solo funciona sobre discos SSD y la segmentación sobre memorias Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas son técnicas de gestión de la memoria principal RAM, no de SSD ni caché L1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambos métodos generan exclusivamente fragmentación de disco en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fragmentación de la memoria RAM no tiene relación con el esquema MBR de los discos.
  </div>
</details>

---

### Pregunta 28
¿Qué diferencia al Modo Núcleo (Kernel Mode) del Modo Usuario (User Mode) en la CPU y qué mecanismo utiliza una aplicación en modo usuario para solicitar acceso al hardware?

<details class="quiz-option incorrect">
  <summary>A) En modo usuario la CPU tiene privilegio total y en modo núcleo acceso restringido mediante scripts.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte los niveles de privilegio de los modos de la CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En modo núcleo la CPU ejecuta instrucciones con privilegio total sobre el hardware; las aplicaciones en modo usuario tienen acceso restringido y deben realizar una llamada al sistema (System Call) para pedir recursos al Kernel.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La CPU implementa anillos de protección: en Modo Núcleo el Kernel dispone de control absoluto sobre las instrucciones de hardware. En Modo Usuario, las aplicaciones comunes corren aisladas. Si una aplicación necesita leer del disco o enviar paquetes por red, emite una llamada al sistema (System Call), generando una trampa por software que conmuta la CPU a Modo Núcleo para verificar permisos y ejecutar la operación de forma segura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En modo usuario las aplicaciones corren en la BIOS y en modo núcleo en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las aplicaciones de usuario no corren dentro de la BIOS ni el Kernel en la ESP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En modo núcleo las aplicaciones funcionan a 16 bits sobre MBR y en modo usuario a 64 bits sobre GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los modos de privilegio no determinan si la ejecución es a 16 o 64 bits sobre MBR/GPT.
  </div>
</details>

---

### Pregunta 29
¿Cuál es la característica definitoria de la arquitectura de sistema operativo basada en Micronúcleo (Microkernel) y qué ventaja ofrece en estabilidad?

<details class="quiz-option incorrect">
  <summary>A) Compila todos los servicios y controladores en un único binario masivo que corre en modo núcleo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Compilar todos los servicios dentro del espacio del núcleo define a la arquitectura Monolítica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Funciona únicamente sobre procesadores de 8 bits sin memoria virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las arquitecturas de micronúcleo se emplean en sistemas modernos de 32/64 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Elimina el uso de llamadas al sistema ejecutando aplicaciones en el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los micronúcleos continúan utilizando llamadas al sistema e IPC.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Mantiene en el espacio del núcleo solo las funciones mínimas esenciales, ejecutando controladores y sistemas de archivos como procesos independientes en modo usuario para evitar que un fallo en un driver colapse todo el sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La arquitectura Micronúcleo reduce el Kernel a lo imprescindible (gestión básica de memoria, procesos e IPC). Los controladores de dispositivos y sistemas de archivos se ejecutan en modo usuario. La ventaja principal es la aislación de fallos: si un driver de tarjeta gráfica falla, solo cae ese proceso en modo usuario sin provocar un colapso (kernel panic) de todo el sistema.
  </div>
</details>

---

### Pregunta 30
En una instalación de Arranque Dual (Dual Boot) entre Microsoft Windows y Ubuntu Linux en el mismo disco, ¿cuál es el orden de instalación recomendado y por qué?

<details class="quiz-option incorrect">
  <summary>A) Instalar primero Ubuntu y luego Windows, porque Windows Boot Manager añade automáticamente a Ubuntu.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Instalar Windows al final sobreescribe el gestor de arranque ocultando el acceso a Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es indiferente porque MBR elimina siempre los gestores de arranque previos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El orden sí afecta al arranque y MBR no borra gestores sin sobreescritura del instalador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Instalar ambos de forma simultánea desde el firmware UEFI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se pueden ejecutar dos procesos de instalación compitiendo en paralelo por las mismas particiones.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Instalar primero Windows y posteriormente Ubuntu Linux, para que el gestor de arranque GRUB de Linux detecte a Windows y configure el menú de arranque múltiple.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Se recomienda instalar primero el sistema propietario (Windows) y después el libre (Linux). El gestor de arranque de Windows (Windows Boot Manager) suele sobreescribir el sector de arranque ignorando otros SOs. Al instalar Ubuntu en segundo lugar, su gestor GRUB analiza el disco, reconoce la instalación previa de Windows y genera un menú que permite elegir qué SO iniciar.
  </div>
</details>

---

### Pregunta 31
En el mantenimiento de Ubuntu Linux mediante la terminal, ¿cuál es la diferencia técnica entre ejecutar sudo apt update y sudo apt upgrade?

<details class="quiz-option incorrect">
  <summary>A) apt update instala las aplicaciones y apt upgrade borra la memoria caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update no instala aplicaciones ni interactúa con la caché L1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) apt update borra los paquetes obsoletos y apt upgrade edita /etc/hosts.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    apt update no borra paquetes ni modifica el archivo de nombres /etc/hosts.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) sudo apt update actualiza la lista e índices locales de paquetes disponibles desde los repositorios sin instalar nada, mientras que sudo apt upgrade descarga e instala las nuevas versiones de los paquetes ya instalados.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    sudo apt update conecta con los repositorios y descarga los índices actualizados de software, actualizando la base de datos local de paquetes disponibles sin instalar nada. sudo apt upgrade compara los paquetes instalados con la lista actualizada e instala las versiones más recientes de todo el software del equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) apt update reinicia el Kernel y apt upgrade formatea la partición swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos comandos reinicia el Kernel ni formatea la partición swap.
  </div>
</details>

---

### Pregunta 32
Un usuario necesita pausar su trabajo en un ordenador portátil durante horas con consumo eléctrico cero (sin gastar batería), asegurándose de que al encenderlo se recuperen todos sus programas y documentos abiertos. ¿Qué estado debe seleccionar?

<details class="quiz-option incorrect">
  <summary>A) Suspensión en RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La Suspensión mantiene alimentados los módulos de RAM consumiendo batería continuamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Reinicio limpio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un reinicio limpio cierra las aplicaciones y elimina los datos no guardados de la sesión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Hibernación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Hibernación realiza una copia completa del contenido de la memoria RAM activa en el disco secundario (hiberfil.sys). Una vez guardada la imagen, corta totalmente la corriente (consumo cero). Al encender de nuevo, el sistema lee la imagen del disco y restaura la RAM al estado exacto previo, manteniendo todas las aplicaciones abiertas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Inicio Rápido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Inicio Rápido cierra la sesión del usuario (no guarda las aplicaciones abiertas del usuario).
  </div>
</details>

---

### Pregunta 33
Las interfaces gráficas de usuario (GUI) modernas se estructuran sobre el modelo conceptual WIMP. ¿Qué significan sus siglas?

<details class="quiz-option incorrect">
  <summary>A) Web, Internet, Memory, Process.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Términos informáticos que no corresponden a las siglas del modelo WIMP.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Windows (Ventanas), Icons (Iconos), Menus (Menús), Pointer (Puntero).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El acrónimo WIMP define los cuatro pilares visuales de las interfaces gráficas modernas: Windows (ventanas de aplicaciones), Icons (iconos representativos), Menus (menús desplegables de comandos) y Pointer (puntero/ratón).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Wide, Integrated, Main, Partition.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No corresponden a las siglas del modelo WIMP de diseño de interfaces.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Windows, Installer, Microkernel, Pagefile.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Términos ajenos al acrónimo de interfaz gráfica WIMP.
  </div>
</details>

---

### Pregunta 34
En la estructura del árbol de directorios raíz (/) de GNU/Linux, ¿en qué carpetas se ubican respectivamente los archivos de configuración del sistema, los directorios personales de los usuarios y los registros (logs) de auditoría?

<details class="quiz-option correct">
  <summary>A) /etc (configuración), /home (directorios personales) y /var (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Según el estándar FHS de Linux: /etc contiene los archivos de configuración del sistema operativo y servicios en texto plano; /home aloja las carpetas personales de los usuarios del sistema (/home/usuario); y /var contiene archivos de datos variables, incluyendo los registros de auditoría en /var/log.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) /boot (configuración), /tmp (directorios personales) y /usr (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /boot contiene el Kernel y archivos de arranque, y /tmp almacena archivos temporales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) /media (configuración), /dev (directorios personales) y /bin (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /media es el punto de montaje de unidades extraíbles y /dev contiene los archivos de dispositivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /root (configuración), /etc (directorios personales) y /boot (archivos de registro/logs).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /root es el directorio personal del superusuario, no la carpeta de configuraciones del sistema.
  </div>
</details>

---

### Pregunta 35
¿Por qué se considera un error grave aplicar un algoritmo de compresión con pérdida (Lossy) como JPEG o MP3 sobre un archivo de base de datos o un programa ejecutable?

<details class="quiz-option incorrect">
  <summary>A) Porque aumentaría diez veces el tamaño del archivo en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La compresión con pérdida reduce el tamaño, no lo aumenta, pero destruye la integridad del archivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque exige ejecutar el comando sfc /scannow antes de comprimir.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es un comprobador de archivos protegidos de Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Porque los algoritmos con pérdida eliminan bits de datos considerados redundantes, lo que corrompería la estructura interna del archivo volviéndolo inservible.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los ejecutables, documentos y bases de datos exigen integridad absoluta bit a bit. Los algoritmos de compresión con pérdida (Lossy) descartan información para reducir espacio. Aplicar compresión con pérdida sobre datos estructurados altera o elimina bits críticos, dejando el archivo corrupto e inutilizable. Sobre software y datos solo debe emplearse compresión sin pérdida (Lossless).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque los ejecutables solo se pueden empaquetar mediante el Programador de Tareas en modo seguro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El empaquetado de ejecutables no se limita al uso del Programador de tareas en modo seguro.
  </div>
</details>

---

### Pregunta 36
Un administrador consulta el archivo crontab de un servidor Linux y localiza la siguiente tarea programada:  
`0 22 * * 0 /scripts/limpieza.sh`  
¿Cuándo se ejecutará exactamente dicho script?

<details class="quiz-option incorrect">
  <summary>A) Todos los días del mes a las 22:00 horas (10:00 PM) durante los primeros 22 minutos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El valor 0 de día de la semana restringe la ejecución al domingo, no a todos los días.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Todos los domingos a las 10:00 AM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La hora 22 representa las 10:00 PM (22:00), no las 10:00 AM (que sería 10).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El día 22 de cada mes a las 00:00 horas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la hora 22 con el día 22 del mes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Todos los domingos a las 22:00 horas (10:00 PM).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Analizando los 5 campos de tiempo de crontab: Minuto = 0 (a en punto); Hora = 22 (22:00 / 10:00 PM); Día del mes = * (cualquier día del mes); Mes = * (cualquier mes); Día de la semana = 0 (Domingo). Conclusión: Se ejecuta todos los domingos a las 22:00 horas.
  </div>
</details>

---

### Pregunta 37
En la administración de Ubuntu Linux, ¿por qué razón técnica se bloquea por defecto el inicio de sesión gráfico directo de la cuenta root y se prescribe el uso del comando sudo?

<details class="quiz-option incorrect">
  <summary>A) Porque la cuenta root no tiene permisos para acceder a la consola CLI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    root posee acceso total a cualquier consola CLI.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Para prevenir errores humanos accidentales o infecciones de malware de impacto total en el sistema, permitiendo que sudo conceda privilegios administrativos de forma puntual y auditada.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Trabajar continuamente como superusuario root expone a que cualquier acción, despiste o script malicioso tenga control irrestricto sobre el Kernel y los archivos de sistema. Ubuntu aplica el principio de mínimo privilegio: se opera como usuario estándar y se recurre a sudo para elevar privilegios de forma puntual, autenticada y registrada en los logs de auditoría (/var/log/auth.log).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque la cuenta root solo funciona sobre sistemas de archivos FAT32.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cuentas de usuario funcionan con independencia del sistema de archivos utilizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque el Kernel monolítico desactiva las cuentas de superusuario en sistemas de 64 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los núcleos monolíticos soportan cuentas de superusuario nativamente en 64 bits.
  </div>
</details>

---

### Pregunta 38
Al configurar un servicio en Windows mediante services.msc, ¿qué modo de inicio asegura que el servicio se ejecute automáticamente con el sistema, pero retrasando su carga unos segundos para no saturar la CPU durante el arranque?

<details class="quiz-option incorrect">
  <summary>A) Manual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Manual no arranca el servicio de forma autónoma al encender el equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Deshabilitado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Deshabilitado impide totalmente la ejecución del servicio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Automático.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Automático convencional inicia el servicio inmediatamente en la fase inicial de arranque compitiendo por los recursos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Automático (inicio retrasado).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modo Automático (inicio retrasado) arranca el servicio de forma autónoma poco después de que el sistema operativo haya completado la fase crítica de inicio, evitando picos de consumo simultáneo de CPU y disco durante la carga inicial del usuario.
  </div>
</details>

---

### Pregunta 39
En el entorno Windows PowerShell, ¿cuáles son los cmdlets correctos para consultar el estado del servicio de cola de impresión (Spooler) y para detenerlo respectivamente?

<details class="quiz-option correct">
  <summary>A) Consulta: Get-Service Spooler | Detención: Stop-Service Spooler</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En PowerShell, la gestión de servicios utiliza los cmdlets de la familia *-Service: Get-Service Spooler muestra el estado del servicio indicado, y Stop-Service Spooler detiene la ejecución del servicio activo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Consulta: sfc /scannow | Detención: systeminfo /stop</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc comprueba archivos de sistema y systeminfo muestra información del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Consulta: systemctl status Spooler | Detención: sudo systemctl stop Spooler</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systemctl es la herramienta de gestión de servicios de Linux, no de PowerShell.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Consulta: crontab -l Spooler | Detención: powercfg /off</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab gestiona tareas programadas en Linux y powercfg la energía en Windows.
  </div>
</details>

---

### Pregunta 40
Un técnico necesita cambiar el nombre de red del equipo en Ubuntu y configurar una tabla local de mapeo entre direcciones IP y nombres sin recurrir a un servidor DNS. ¿Qué dos archivos del directorio /etc/ debe editar respectivamente?

<details class="quiz-option incorrect">
  <summary>A) /etc/boot y /etc/swap</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existen /etc/boot ni /etc/swap como archivos de nombres de red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) /etc/systemd y /etc/apt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /etc/systemd gestiona servicios y /etc/apt los repositorios de paquetes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) /etc/hostname (para el nombre del equipo) y /etc/hosts (para la resolución local de IPs y nombres).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el directorio /etc/ de Linux: /etc/hostname contiene el nombre único (hostname) que identifica al equipo en la red; /etc/hosts es la tabla estática de asignación de direcciones IP a nombres de dominio/equipo, consultada prioritariamente antes de enviar peticiones a servidores DNS externos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /etc/fstab y /etc/crontab</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /etc/fstab administra el montaje de unidades y /etc/crontab las tareas de cron.
  </div>
</details>
