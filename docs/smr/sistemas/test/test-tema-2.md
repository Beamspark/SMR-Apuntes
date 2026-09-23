# Test de Autoevaluación: Tema 2

[← Volver al Tema 2: Máquinas virtuales](../tema-2.md)

---

### Pregunta 1
En la arquitectura de sistemas virtualizados, ¿cuál es la función técnica fundamental que desempeña el hipervisor (también denominado Virtual Machine Monitor o VMM)?

<details class="quiz-option correct">
  <summary>A) Actuar como una capa de abstracción de software que intercepta, gestiona y asigna de forma aislada los recursos de hardware físicos entre las distintas máquinas virtuales.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El hipervisor o VMM es la capa de software (o firmware) encargada de la virtualización. Su cometido principal es administrar el hardware real (CPU, RAM, almacenamiento, controladores de red) y presentar a cada máquina virtual una representación simulada e independiente de esos recursos, garantizando el aislamiento entre ellas y la correcta multiplexación del hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Traducir el código de compilación de las aplicaciones de modo usuario al formato de archivos de texto plano /etc/hosts del sistema anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hipervisor no se encarga de traducir código de compilación de aplicaciones a archivos de texto plano /etc/hosts (que es un archivo de resolución local de nombres en Linux).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Convertir las direcciones IP estáticas de la red física local en direcciones MAC virtuales dentro del chip ROM de la tarjeta madre.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hipervisor no modifica el chip ROM de la placa base para alterar direcciones MAC físicas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Formatear físicamente los sectores del disco duro secundario cada vez que una máquina virtual se apaga para evitar la fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hipervisor no realiza un formateo físico de sectores de disco al apagar una máquina virtual; los datos de la VM se conservan en sus archivos de disco virtual (.vdi, .vmdk).
  </div>
</details>

---

### Pregunta 2
Un administrador de sistemas necesita realizar pruebas de despliegue de parches críticos de seguridad en un servidor virtualizado antes de llevarlos a producción. ¿Qué característica exclusiva de la virtualización le permite guardar el estado exacto (memoria, disco y configuración) de la máquina virtual en un instante dado para regresar a él inmediatamente si el parche falla?

<details class="quiz-option incorrect">
  <summary>A) El comando TRIM de optimización de memoria de estado sólido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El comando TRIM es una utilidad de mantenimiento para unidades SSD que notifica los bloques liberados por el sistema de archivos, no un mecanismo de restauración de estado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Las instantáneas (Snapshots).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las instantáneas (Snapshots) son una funcionalidad clave en los entornos de virtualización que congelan y almacenan el estado completo de una máquina virtual (incluyendo el contenido de la memoria RAM activa y la estructura del disco virtual) en un momento determinado. Si una actualización o prueba causa un fallo crítico, el administrador puede revertir la VM a dicho estado en segundos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La fragmentación interna del sistema de archivos APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fragmentación interna es un inconveniente en la gestión de memoria por paginación, no una función de recuperación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El protocolo de arranque desatendido MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MBR es un esquema de particionado de disco para firmwares BIOS tradicionales, no una función de guardado de estado de máquinas virtuales.
  </div>
</details>

---

### Pregunta 3
Al evaluar los posibles inconvenientes de implementar un entorno virtualizado frente a la instalación de un sistema en hardware nativo, ¿cuál es la principal penalización que experimenta el sistema?

<details class="quiz-option incorrect">
  <summary>A) La imposibilidad absoluta de utilizar periféricos de entrada/salida como el teclado y el ratón.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las máquinas virtuales redirigen e integran perfectamente los periféricos de E/S mediante el hipervisor y los controladores de integración.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La obligación de formatear el disco duro del sistema anfitrión cada vez que se crea una nueva máquina virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La creación de una máquina virtual no altera ni requiere formatear la unidad física del sistema anfitrión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Una pérdida de rendimiento global provocada por la capa intermedia de traducción que introduce el hipervisor y un alto consumo simultáneo de recursos físicos (RAM y CPU).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La virtualización añade una capa adicional de abstracción entre el sistema operativo invitado y el hardware físico. Dado que las peticiones del SO invitado deben pasar por el hipervisor para ser procesadas por el hardware real, se genera una ligera penalización en el tiempo de ejecución. Además, la ejecución simultánea de varios SOs exige un elevado consumo de RAM física y ciclos de CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La pérdida de compatibilidad con los sistemas de archivos NTFS y ext4 en el sistema operativo invitado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los sistemas operativos invitados pueden utilizar sus sistemas de archivos nativos (NTFS, ext4, APFS) sin restricción dentro de sus archivos de disco virtual.
  </div>
</details>

---

### Pregunta 4
Si se requiere utilizar dos sistemas operativos en un mismo ordenador físico y se busca obtener el máximo rendimiento posible de aceleración gráfica y acceso nativo al hardware (por ejemplo, para edición de vídeo 4K o renderizado 3D masivo), ¿qué solución arquitectónica es la más adecuada y cuál es su contrapartida principal?

<details class="quiz-option incorrect">
  <summary>A) Virtualización mediante hipervisor Tipo 2; su contrapartida es que destruye la tabla de particiones GPT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La virtualización de Tipo 2 no ofrece acceso nativo directo al hardware gráfico sin pérdidas de rendimiento, y no destruye la tabla GPT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Configuración de un entorno Chroot; su contrapartida es que impide la instalación de controladores de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Chroot es un aislamiento de directorio raíz en Linux, no una solución de arranque nativo de diferentes sistemas operativos completos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Emulación de procesador por software; su contrapartida es que requiere un chip BIOS de 16 bits obligatoriamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La emulación por software es el método más lento de todos y no guarda relación con la necesidad de una BIOS de 16 bits.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Arranque Dual (Dual Boot); su contrapartida es que no permite ejecutar ambos sistemas operativos de forma simultánea, exigiendo reiniciar el equipo para cambiar de sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Arranque Dual (Dual Boot) instala los sistemas operativos directamente sobre particiones reales del disco físico. Al ejecutarse sin ninguna capa intermedia de hipervisor, el SO accede de forma nativa al 100% del rendimiento del hardware. Su principal inconveniente es la falta de simultaneidad: solo se puede ejecutar un SO a la vez y para cambiar hay que reiniciar el ordenador.
  </div>
</details>

---

### Pregunta 5
En la terminología de virtualización, ¿cómo se denominan respectivamente el ordenador físico real sobre el que se ejecuta el software de virtualización y el sistema operativo que se instala dentro de la máquina virtual, y qué principio regula su convivencia?

<details class="quiz-option correct">
  <summary>A) Máquina Anfitrión (Host) y Sistema Invitado (Guest); regulados por el principio de aislamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La máquina física real se denomina Anfitrión (Host) y el sistema instalado en el entorno simulado se denomina Invitado (Guest). Ambos conviven bajo el principio de aislamiento, el cual garantiza que las operaciones, fallos, virus o colapsos que ocurran en el sistema invitado queden totalmente confinados dentro de la VM sin afectar a la máquina anfitriona.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Máquina Servidora y Sistema Cliente; regulados por el principio de fragmentación externa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cliente/servidor es una arquitectura de red, no la terminología de sistemas en virtualización, y la fragmentación externa es un problema de gestión de memoria.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Máquina Nativa y Sistema Emulado; regulados por el principio de paginación invertida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde los términos y cita la paginación invertida (técnica de tablas de páginas).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Máquina Primaria y Sistema Secundario; regulados por el principio del cuello de botella de Von Neumann.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza una nomenclatura no estándar (primaria/secundaria) y cita el cuello de botella de Von Neumann (limitación de buses).
  </div>
</details>

---

### Pregunta 6
Un centro de procesamiento de datos (CPD) empresarial requiere desplegar decenas de servidores virtuales buscando la máxima eficiencia, estabilidad y aprovechamiento del hardware. ¿Qué tipo de hipervisor debe utilizarse y cuál es un ejemplo representativo de esta categoría?

<details class="quiz-option incorrect">
  <summary>A) Hipervisor de Tipo 2 (Hosted); ejemplo: Oracle VirtualBox.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Oracle VirtualBox es un hipervisor de Tipo 2 (hospedado sobre un SO anfitrión), diseñado para escritorio y pruebas, no para centros de datos de alto rendimiento.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Hipervisor de Tipo 1 (Bare Metal / Nativo); ejemplo: VMware ESXi.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los Hipervisores de Tipo 1 (Bare Metal o Nativos) se instalan e introducen directamente sobre el hardware físico del servidor, sin la mediación de un sistema operativo anfitrión tradicional. Esto maximiza el rendimiento y la densidad de máquinas virtuales. VMware ESXi es el estándar de la industria en esta categoría para centros de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Hipervisor de Tipo 3 (Emulated); ejemplo: Microsoft Paint 3D.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La categoría "Tipo 3" no existe en la clasificación estándar y Paint 3D es una aplicación gráfica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Hipervisor de Tipo 0 (Firmware Only); ejemplo: MS-DOS 6.22.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La categoría "Tipo 0" no existe en esta clasificación y MS-DOS es un sistema operativo monousuario/monotarea antiguo.
  </div>
</details>

---

### Pregunta 7
¿Qué caracteriza técnicamente a un Hipervisor de Tipo 2 (Hosted / Hospedado) y cuáles son dos de sus representantes más extendidos en entornos de desarrollo y sistemas de escritorio?

<details class="quiz-option incorrect">
  <summary>A) Se ejecuta antes del POST de la BIOS y sus ejemplos son VMware ESXi y Linux Kernel 1.0.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ningún hipervisor de Tipo 2 se ejecuta antes del POST de la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Requiere un microprocesador sin registros de control y sus ejemplos son Windows Server 2025 y Android AOSP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Requiere procesadores con capacidad de virtualización y los ejemplos citados son sistemas operativos completos, no hipervisores de Tipo 2.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Se instala y ejecuta como una aplicación más dentro de un sistema operativo anfitrión previo; sus ejemplos son Oracle VirtualBox y VMware Workstation Pro.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los hipervisores de Tipo 2 (Hosted) funcionan alojados sobre un sistema operativo anfitrión comercial (como Windows, Linux o macOS). El usuario arranca el anfitrión, abre el hipervisor como cualquier otra aplicación y desde ahí lanza las máquinas virtuales. Oracle VirtualBox y VMware Workstation Pro son las herramientas más populares de este tipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Elimina la necesidad de memoria RAM física y sus ejemplos son MS-DOS y Apple APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna máquina virtual puede funcionar sin memoria RAM física y APFS es un sistema de archivos.
  </div>
</details>

---

### Pregunta 8
Un técnico instala el software de virtualización Oracle VirtualBox en una estación de trabajo con Windows 11. ¿Cuál es el régimen de licencia y la característica de compatibilidad principal de esta aplicación?

<details class="quiz-option incorrect">
  <summary>A) Es un software propietario de código cerrado disponible exclusivamente para sistemas Apple macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es exclusivo de macOS ni es un software de código cerrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es un sistema operativo de servidor que sustituye al gestor de arranque GRUB en distribuciones Linux.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un sistema operativo de servidor ni un gestor de arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un firmware privativo que requiere una clave comercial obligatoria antes de poder realizar la primera instalación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un firmware de placa base ni exige licencias comerciales de pago para su uso básico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Es un software de virtualización gratuito y de código abierto (Open Source), de hipervisor Tipo 2, compatible con anfitriones Windows, Linux y macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Oracle VirtualBox es una de las soluciones de virtualización más populares para escritorio debido a que es un proyecto de código abierto (Open Source) bajo licencia GPLv2 (con su Extension Pack bajo licencia PUEL), totalmente gratuito, clasificado como hipervisor de Tipo 2 y multiplataforma (se instala en Windows, Linux, macOS y Solaris).
  </div>
</details>

---

### Pregunta 9
En relación con la solución de virtualización de Microsoft integrada en el propio sistema operativo, ¿cuáles son los requisitos de edición para poder habilitar Hyper-V en un equipo de escritorio?

<details class="quiz-option correct">
  <summary>A) Estar ejecutando una edición Windows Pro, Enterprise o Education (no está disponible de forma nativa en la edición Windows Home).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Microsoft Hyper-V es la tecnología de virtualización de Microsoft. En sistemas de escritorio viene incluida como una característica opcional del sistema, pero únicamente en las ediciones Windows Pro, Enterprise y Education. La edición Windows Home no incluye la característica Hyper-V activable desde el panel de control.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Contar exclusivamente con una licencia OEM de Windows Server 2003 de 16 bits.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Hyper-V está disponible en sistemas de 64 bits modernos y no requiere licencias antiguas de 16 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Formatear la unidad principal en sistema de archivos FAT32 e iniciar el sistema en modo seguro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No requiere utilizar el sistema FAT32 (utiliza NTFS) ni ejecutar en modo seguro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Desactivar las extensiones de virtualización de la CPU en la UEFI-BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Hyper-V exige obligatoriamente que las extensiones de virtualización de la CPU estén activadas en la UEFI-BIOS.
  </div>
</details>

---

### Pregunta 10
Tras completar la instalación de un sistema operativo invitado (como Ubuntu) en una máquina virtual de VirtualBox, el escritorio se muestra en una resolución reducida y el puntero del ratón no se desplaza con fluidez. ¿Qué paquete de software adicional se debe instalar en el sistema invitado para corregir esto e integrar carpetas compartidas?

<details class="quiz-option incorrect">
  <summary>A) El gestor de particiones MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El gestor de particiones MBR sirve para definir la tabla de particiones en discos antiguos, no para optimizar el rendimiento gráfico del invitado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Las Guest Additions (o VMware Tools si se utiliza la plataforma VMware).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las Guest Additions (en VirtualBox) o VMware Tools (en VMware) son un conjunto de controladores de dispositivos y aplicaciones de sistema optimizadas que se instalan dentro del sistema operativo invitado. Añaden aceleración gráfica, ajuste dinámico de resolución, integración fluida del puntero, portapapeles compartido y carpetas compartidas entre el anfitrión y la VM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El compilador de firmware UEFI con Secure Boot.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware UEFI no es un paquete de controladores que se instale dentro del sistema operativo invitado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El controlador del bus de direcciones de la ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ALU forma parte interna de la CPU y no utiliza controladores de bus instalables por el usuario.
  </div>
</details>

---

### Pregunta 11
Antes de poder ejecutar hipervisores de 64 bits o crear máquinas virtuales eficientes en un ordenador, ¿qué característica debe estar explícitamente soportada por el procesador y habilitada en la BIOS/UEFI del equipo anfitrión?

<details class="quiz-option incorrect">
  <summary>A) El sistema de archivos journaled ext2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ext2 no es un sistema de archivos con journaling ni es un requisito de hardware en la BIOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La barra de direcciones unidireccional de la memoria Caché L1.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe una "barra de direcciones unidireccional de la caché L1" como ajuste de la BIOS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Las tecnologías de virtualización asistida por hardware (Intel VT-x en procesadores Intel o AMD-V en procesadores AMD).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para que un hipervisor pueda interceptar y gestionar las instrucciones de la máquina virtual de forma eficiente y segura a nivel de procesador, se requiere soporte de virtualización asistida por hardware. Estas instrucciones se denominan Intel VT-x (en procesadores Intel) y AMD-V (en procesadores AMD). Si están deshabilitadas en la BIOS/UEFI, el hipervisor mostrará un error o no permitirá ejecutar sistemas de 64 bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El algoritmo de planificación no expulsivo FIFO.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FIFO es un algoritmo de planificación de procesos por software, no una característica de hardware de la CPU.
  </div>
</details>

---

### Pregunta 12
Se configura la tarjeta de red virtual de una máquina virtual en modo NAT (Network Address Translation). ¿Cuál es el comportamiento de red que experimentará dicha máquina virtual respecto a la red local (LAN) física?

<details class="quiz-option incorrect">
  <summary>A) La máquina virtual se conecta a un conmutador aislado sin ningún tipo de acceso a Internet ni comunicación con el anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo aislado sin Internet corresponde a la configuración de Red Interna (Internal Network) o Host-Only.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La máquina virtual obtiene su propia dirección IP física pública directamente de la compañía eléctrica sin pasar por el router.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las direcciones IP de la LAN las asigna el router local, no la compañía eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La máquina virtual clona la dirección MAC de la tarjeta gráfica y bloquea todas las peticiones del protocolo DNS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    NAT no clona la MAC de la tarjeta gráfica ni bloquea las peticiones DNS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La máquina virtual sale al exterior e Internet utilizando la dirección IP del equipo anfitrión, quedando oculta para el resto de equipos de la LAN física, los cuales no pueden iniciar conexiones directas hacia ella.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el modo de red NAT, el hipervisor crea una red privada virtual interna para la máquina virtual. El hipervisor actúa como un router con servicio DHCP y traducción NAT: la VM puede navegar por Internet y acceder a la red exterior saliendo con la dirección IP de la máquina anfitriona, pero los demás equipos de la red LAN física no ven a la VM ni pueden iniciar conexiones dirigidas a ella.
  </div>
</details>

---

### Pregunta 13
Un alumno necesita configurar una máquina virtual que funcione como un servidor web visible e independiente en la red local del aula, de modo que sus compañeros puedan acceder a la web introduciendo una dirección IP propia de la misma subred que los equipos físicos. ¿Qué modo de red virtual debe seleccionar en el hipervisor?

<details class="quiz-option correct">
  <summary>A) Adaptador Puente (Bridged Adapter).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modo Adaptador Puente (Bridged) conecta virtualmente la tarjeta de red de la VM directamente al adaptador físico del anfitrión. A efectos prácticos, la máquina virtual se comporta como si fuera un ordenador físico más conectado al mismo conmutador/router, recibiendo su propia dirección IP independiente en el mismo rango de la subred LAN física y permitiendo conexiones bidireccionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Red NAT (Network Address Translation).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En modo NAT los demás equipos de la red LAN física no pueden iniciar conexiones directamente a la IP privada interna de la VM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Controlador Anfitrión (Host-Only).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Host-Only solo permite la comunicación entre el anfitrión y la VM, aislando la máquina de la red LAN física exterior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sin Conectar (Not Attached).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Sin conectar" desconecta virtualmente el cable de red de la VM, dejándola sin ningún tipo de comunicación.
  </div>
</details>

---

### Pregunta 14
A la hora de asignar la memoria RAM física del equipo anfitrión a una máquina virtual recién creada, ¿cuál es la regla de oro preventiva para evitar colapsar y congelar el sistema operativo anfitrión?

<details class="quiz-option incorrect">
  <summary>A) Asignar siempre el 100% de la memoria RAM disponible para que la VM funcione a máxima velocidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Asignar el 100% de la RAM a la VM dejaría al sistema anfitrión sin memoria, provocando un colapso total del equipo real.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) No asignar más del 50% - 60% de la memoria RAM física real del equipo anfitrión a la suma de las máquinas virtuales activas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El sistema operativo anfitrión necesita disponer de suficiente memoria RAM física libre para gestionar sus propios procesos, controladores e hipervisor. Si se asigna una cantidad excesiva de RAM a las VMs (superando el 50%-60% de la capacidad física total), el anfitrión se quedará sin RAM, recurrirá masivamente a la memoria virtual en disco (paging/swapping) y todo el sistema se congelará.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Asignar un máximo fijo de 256 MegaBytes independientemente de la RAM total que tenga el ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    256 MB es una cantidad insuficiente para ejecutar sistemas operativos modernos como Windows 11 o Ubuntu Desktop.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir toda la memoria RAM en espacio de memoria virtual swap en el disco duro SSD antes de arrancar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria de intercambio swap es un recurso secundario en disco y no sustituye a la necesidad de RAM física activa.
  </div>
</details>

---

### Pregunta 15
Un técnico está analizando el rendimiento de una máquina virtual que ejecuta Ubuntu Server. Para comprobar de forma rápida en la consola CLI cuánta memoria RAM física y cuánta memoria de intercambio (swap) están libres y usadas en Megabytes, ¿qué comando debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) df -h</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    df -h (disk free) muestra el espacio ocupado y libre en los sistemas de archivos y discos montados, no la memoria RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc /scannow es un comando exclusivo de Microsoft Windows para reparar archivos del sistema, no un comando de Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) free -m</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando free en sistemas Linux muestra el estado de la memoria del sistema (RAM física y espacio de intercambio swap), indicando el total, la memoria usada, libre, compartida y en caché. El parámetro -m le indica al comando que muestre todos los valores formateados expresados en Megabytes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) lsb_release -a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    lsb_release -a muestra la versión oficial y datos de distribución del SO Linux, no estadísticas de memoria.
  </div>
</details>

---

### Pregunta 16
Durante la monitorización de una máquina virtual Linux, el administrador sospecha que el disco virtual se ha llenado tras instalar varios paquetes. ¿Qué comando de consola le permite verificar el espacio ocupado, disponible y el porcentaje de uso de cada partición montada en el sistema?

<details class="quiz-option incorrect">
  <summary>A) top</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    top es una herramienta de monitorización de procesos y uso de CPU/RAM en tiempo real, no un visor de espacio de disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) systemctl status</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systemctl status se utiliza para consultar el estado de ejecución de los servicios/demonios de systemd.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) msinfo32</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    msinfo32 es una herramienta gráfica de diagnóstico de información del sistema exclusiva de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) df -h</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando df (disk free) informa sobre el uso de espacio en disco de los sistemas de archivos montados. La opción -h (human-readable) convierte los valores de bloques a un formato fácilmente legible en KiloBytes, MegaBytes o GigaBytes (ej. 15G, 450M), mostrando la capacidad total, usada, disponible y el % de uso.
  </div>
</details>

---

### Pregunta 17
Para examinar en tiempo real el consumo interactivo de procesador (CPU) y memoria que realiza cada proceso dentro de una máquina virtual Ubuntu, ¿qué herramienta de consola interactiva mejorada ofrece una representación gráfica con barras de colores y uso del ratón?

<details class="quiz-option correct">
  <summary>A) htop</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Mientras que top es el monitor de procesos clásico en consola de Linux, htop es su versión moderna interactiva y mejorada. Muestra mediante barras de colores el uso individual de cada núcleo de la CPU, el consumo de RAM y memoria swap, y permite ordenar los procesos, matarlos o filtrar interactivamente usando el teclado o el ratón.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) chkdsk</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    chkdsk es una herramienta de comandos de Microsoft Windows para comprobar el sistema de archivos NTFS/FAT.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) regedit</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    regedit es el Editor del Registro de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) crontab -e</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab -e se utiliza para editar la tabla de tareas automatizadas del servicio cron en Linux.
  </div>
</details>

---

### Pregunta 18
En el sistema operativo anfitrión Windows 11, el administrador nota que el ventilador del ordenador se acelera al ejecutar varias máquinas virtuales. ¿Qué herramienta nativa del sistema le permite ver de forma desglosada el impacto en tiempo real de cada proceso sobre la CPU, la Memoria, el Disco y la Red de forma gráfica e individualizada?

<details class="quiz-option incorrect">
  <summary>A) La utilidad systeminfo desde la consola de comandos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systeminfo muestra un informe de texto estático con datos del SO y parches instalados, no un monitor dinámico en tiempo real.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El Monitor de recursos (resmon.exe).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Aunque el Administrador de tareas ofrece una visión general, el Monitor de recursos (resmon.exe) de Windows proporciona un análisis en tiempo real desglosado y detallado del consumo de hardware. Permite ver exactamente qué procesos (como VirtualBoxVM.exe o vmware-vmx.exe) están leyendo o escribiendo en el disco, utilizando la red o acaparando la memoria física.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El compilador de comandos de la BIOS MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe un "compilador de comandos de la BIOS MBR".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El archivo de registro /var/log/syslog.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /var/log/syslog es un archivo de registro de texto plano de sistemas Linux, no una herramienta de Windows 11.
  </div>
</details>

---

### Pregunta 19
Si a una máquina virtual con un sistema operativo invitado moderno se le asigna una cantidad de memoria RAM física virtualizada muy inferior a los requisitos mínimos del sistema operativo, ¿cuál será la consecuencia técnica inmediata sobre el rendimiento de la VM?

<details class="quiz-option incorrect">
  <summary>A) La máquina virtual aumentará automáticamente la velocidad de reloj del procesador físico del anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de RAM no sobreacelera (overclocking) la velocidad de reloj física de la CPU.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La máquina virtual se convertirá de forma autónoma en un hipervisor de Tipo 1 Bare Metal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una VM no puede transformar su naturaleza de software y convertirse en un hipervisor de Tipo 1.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El sistema operativo invitado comenzará a hacer un uso masivo de la memoria virtual (swap) en el disco duro virtual, provocando una caída drástica de rendimiento (thrashing) y lentitud extrema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando la memoria RAM física disponible para el sistema operativo invitado se agota, el gestor de memoria del SO se ve obligado a mover constantemente páginas de memoria al archivo o partición de intercambio en disco (swap/pagefile). Dado que el acceso al almacenamiento secundario es órdenes de magnitud más lento que la RAM física, la máquina virtual sufrirá una degradación drástica del rendimiento e hiperactividad de disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El hipervisor eliminará el sistema de archivos NTFS y lo sustituirá por APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de memoria no altera la estructura de formato de los sistemas de archivos de la unidad.
  </div>
</details>

---

### Pregunta 20
Un técnico necesita clonar una máquina virtual de desarrollo para entregarla a un compañero con la misma configuración exacta. Para asegurarse de que la máquina clonada funcione en la misma red sin provocar conflictos de direccionamiento IP ni de identidad, ¿qué parámetro del adaptador de red virtual debe regenerar obligatoriamente durante el proceso de clonación?

<details class="quiz-option incorrect">
  <summary>A) La versión de la BIOS MBR del hipervisor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La BIOS/UEFI emulada no genera conflictos de red en la LAN.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La dirección de memoria Caché L3 de la ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las direcciones de caché L3 son gestionadas internamente por la CPU física y no tienen relación con la identidad de red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El tipo de sistema de archivos de la partición de intercambio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema de archivos de la swap no influye en la identificación de red de los equipos en la LAN.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La dirección MAC (Media Access Control) de la tarjeta de red virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La dirección MAC es el identificador físico único de nivel de enlace (capa 2) de un adaptador de red. Si se clona una máquina virtual manteniendo la misma dirección MAC que la original y ambas se ejecutan en la misma red LAN, se producirá un conflicto de direcciones de red y colisiones de tráfico. Por ello, los asistentes de clonación incluyen la opción imprescindible de reinicializar/regenerar la dirección MAC de todos los adaptadores de red de la nueva VM.
  </div>
</details>
