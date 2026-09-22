*[Von Neumann]: Modelo propuesto en 1945 que organiza el sistema en CPU (Unidad de Control + ALU), Memoria Principal y Periféricos de Entrada/Salida interconectados por buses de datos, direcciones y control, compartiendo el mismo espacio de memoria para datos e instrucciones.
*[Modelo de Von Neumann]: Arquitectura de computadores clásica donde las instrucciones de programa y los datos coexisten en la misma memoria física principal con acceso secuencial.
*[Arquitectura de Von Neumann]: Modelo propuesto en 1945 caracterizado por almacenar las instrucciones del programa y los datos en el mismo espacio de memoria física principal, permitiendo el acceso secuencial.
*[Cuello de botella de Von Neumann]: Limitación intrínseca de rendimiento generada por la necesidad de transferir tanto instrucciones como datos a través del mismo bus compartido entre la CPU y la memoria.
*[CPU]: Central Processing Unit. Unidad Central de Procesamiento o microprocesador principal del equipo encargado de interpretar y ejecutar las instrucciones de los programas, procesar datos y coordinar el funcionamiento global del sistema.
*[Microprocesador]: Circuito integrado central del equipo que realiza operaciones matemáticas y lógicas coordinando los componentes del ordenador.
*[UC]: Unidad de Control (CU). Componente de la CPU responsable de buscar instrucciones en memoria, decodificarlas, interpretarlas y emitir señales de control y sincronismo al resto de componentes.
*[ALU]: Arithmetic Logic Unit. Unidad Aritmético-Lógica encargada de llevar a cabo los cálculos matemáticos elementales y las operaciones lógicas y booleanas dentro de la CPU.
*[Chipset]: Conjunto de circuitos integrados auxiliares soldados a la placa base diseñados para gestionar las comunicaciones y el flujo de datos entre el microprocesador, la memoria y los periféricos.
*[Puente Norte]: Northbridge. Bloque clásico del chipset encargado de gestionar el tráfico de alta velocidad entre el procesador, la memoria RAM y el bus gráfico (PCIe/AGP), hoy en día integrado en el encapsulado de la CPU.
*[Puente Sur]: Southbridge. Bloque del chipset que interconecta y controla los dispositivos de menor velocidad como buses PCI/PCIe secundarios, SATA, puertos USB, audio y BIOS.
*[Memoria RAM]: Random Access Memory. Memoria principal y volátil de lectura y escritura rápida utilizada por el procesador para cargar los programas y datos en ejecución activa.
*[RAM]: Random Access Memory. Memoria principal volátil de acceso aleatorio donde se alojan temporalmente los programas y datos en ejecución.
*[SRAM]: Static Random Access Memory. Tipo de memoria estática rápida basada en transistores que retiene los datos sin necesidad de refresco periódico mientras reciba corriente, empleada típicamente en memorias caché.
*[DRAM]: Dynamic Random Access Memory. Memoria dinámica que almacena cada bit en un condensador y requiere ciclos constantes de refresco eléctrico para conservar los datos.
*[DDR]: Double Data Rate. Familia de memorias síncronas que transfieren datos dos veces por cada ciclo de reloj (incluye variantes generacionales DDR2, DDR3, DDR4 y DDR5).
*[DDR2]: Segunda generación de memoria DDR con mayor ancho de banda y menor consumo energético.
*[DDR3]: Tercera generación del estándar DDR con frecuencias de reloj más elevadas y menor voltaje de operación.
*[DDR4]: Cuarta generación de memoria SDRAM DDR orientada a una mayor densidad de chips, mayores frecuencias y mayor eficiencia energética.
*[DDR5]: Quinta iteración del estándar DDR con canales independientes por módulo, administración de energía integrada (PMIC) y ancho de banda muy optimizado.
*[Dual Channel]: Tecnología implementada en el controlador de memoria que incrementa el ancho de banda al acceder simultáneamente a dos canales independientes de 64 bits hacia la RAM.
*[XMP/EXPO]: Perfiles automáticos de memoria (Intel XMP / AMD EXPO) grabados en el SPD que permiten configurar frecuencias, latencias y voltajes validados superiores a los estándares JEDEC base.
*[Memoria Caché]: Memoria intermedia ultrarrápida y de capacidad reducida ubicada entre los núcleos de la CPU y la RAM principal para almacenar datos e instrucciones de uso muy recurrente.
*[Caché]: Memoria de alta velocidad integrada en el microprocesador estructurada en niveles (L1, L2, L3) para acelerar el acceso a datos e instrucciones recurrentes.
*[Caché L1]: Primer nivel de memoria caché interna integrada en el núcleo del procesador, de acceso ultrarrápido y capacidad reducida.
*[Caché L2]: Segundo nivel de memoria caché intermedia de alta velocidad situado entre la L1 y la memoria compartida L3 o RAM.
*[Caché L3]: Tercer nivel de memoria caché de mayor capacidad compartida habitualmente entre todos los núcleos de un procesador moderno.
*[Registros]: Celdas de memoria de máxima velocidad y latencia mínima integradas directamente en el núcleo de la CPU para retener operandos inmediatos, direcciones de memoria e instrucciones en curso.
*[Jerarquía de memorias]: Organización piramidal estructurada de los niveles de almacenamiento (registros, caché, RAM, almacenamiento secundario) en función de su coste por bit, velocidad y capacidad.
*[Ciclo de instrucción]: Secuencia elemental y cíclica que ejecuta la CPU para procesar cada instrucción: búsqueda (Fetch), decodificación (Decode), ejecución (Execute) y almacenamiento (Store).
*[TDP]: Thermal Design Power. Cantidad máxima de calor expresada en vatios (W) que genera un componente (CPU/GPU) bajo carga máxima y que el sistema de disipación debe ser capaz de evacuar.
*[Overclocking]: Práctica que consiste en forzar la frecuencia de reloj de un componente (CPU, GPU o RAM) por encima de las especificaciones de fábrica para obtener mayor rendimiento a costa de mayor calor y consumo.
*[Bus de datos]: Líneas de transmisión bidireccionales encargadas de transportar datos brutos e instrucciones entre la CPU, la memoria y los dispositivos de E/S.
*[Bus de direcciones]: Líneas de transmisión unidireccionales emitidas por la CPU para especificar la posición física de memoria o puerto de E/S donde se realizará una lectura o escritura.
*[Bus de control]: Conjunto de líneas de sincronismo encargadas de enviar señales temporales, líneas de estado, órdenes de lectura/escritura e interrupciones del sistema.
*[Bus del sistema]: Conjunto integral de pistas eléctricas que engloba el bus de datos, de direcciones y de control para interconectar los subsistemas de la placa base.
*[Buses]: Conjunto de pistas e hilos conductores que interconectan internamente los dispositivos del sistema gestionando líneas de datos, direcciones y control.
*[ISA]: Industry Standard Architecture. Estándar clásico de bus de expansión heredado utilizado en los primeros ordenadores personales.
*[AGP]: Accelerated Graphics Port. Ranura y canal de comunicación punto a punto diseñado específicamente para conectar tarjetas gráficas aceleradoras 3D antes del estándar PCIe.
*[PCI]: Peripheral Component Interconnect. Estándar de bus local paralelo clásico para la conexión interna de tarjetas controladoras y de expansión en la placa base.
*[PCI-E]: Peripheral Component Interconnect Express. Bus serie de alta velocidad basado en carriles dedicados (x1, x4, x8, x16) que constituye el estándar moderno para tarjetas gráficas y discos NVMe.
*[Placa Base]: Tarjeta de circuito impreso principal (motherboard) sobre la que se ensamblan e interconectan la CPU, la RAM, la fuente de alimentación, las unidades de almacenamiento y las tarjetas de expansión.
*[Socket]: Zócalo o conector físico sobre la placa base con una matriz de contactos (LGA) u orificios (PGA) destinado a alojar e intercomunicar el microprocesador.
*[Zócalo]: Conector provisto de una matriz de contactos u orificios en la placa base diseñado para alojar y fijar mecánicamente el microprocesador.
*[Slot]: Ranura de conexión alargada en la placa base destinada a insertar módulos de memoria RAM o tarjetas de expansión verticalmente.
*[Factor de Forma]: Conjunto de especificaciones estandarizadas de dimensiones físicas, orificios de anclaje y distribución de conexiones de placas base, cajas y fuentes (ATX, Micro-ATX, Mini-ITX).
*[ATX]: Formato estándar dominante para placas base y fuentes de alimentación diseñado por Intel para optimizar la ventilación y la accesibilidad de conexiones.
*[Micro ATX]: Factor de forma compacto derivado de ATX que reduce la altura de la placa y la cantidad de ranuras de expansión para cajas medianas y pequeñas.
*[Mini ITX]: Factor de forma ultracompacto (17x17 cm) diseñado para ordenadores de sobremesa de perfil bajo, HTPCs y configuraciones de consumo reducido.
*[BTX]: Balanced Technology Extended. Formato alternativo propuesto por Intel concebido para optimizar la refrigeración y flujo de aire en línea recta, actualmente en desuso comercial.
*[DTX]: Estándar de formato para placas de tamaño reducido compatible mecánicamente con bahías y anclajes ATX.
*[Chasis]: Esqueleto o caja metálica estructural que aloja, asegura y canaliza la ventilación de todos los componentes internos de un equipo informático.
*[Barebone]: Carcasa o equipo informático premontado que incluye chasis, placa base adaptada y fuente de alimentación, preparado para instalar procesador, memoria y discos al gusto.
*[Modding]: Práctica estética y funcional consistente en modificar y personalizar visualmente la caja o el hardware del ordenador (iluminación, ventanas, refrigeración líquida personalizada).
*[Frecuencia Interna]: Velocidad de procesamiento interna a la que computa el núcleo del procesador, calculada multiplicando el reloj base por el multiplicador y medida en GHz.
*[Frecuencia del Bus]: Velocidad de comunicación externa con la que el microprocesador interactúa a través de los enlaces de la placa base (FSB o BCLK).
*[E/S]: Entrada/Salida (I/O). Subsistema de hardware, interfaces y protocolos encargados del trasvase e intercambio de información entre el procesador y los dispositivos periféricos o el usuario.
*[Firmware]: Software específico de bajo nivel grabado de forma no volátil en chips de memoria (ROM/Flash) de componentes de hardware para controlar su inicialización y rutinas operativas básicas.
*[BIOS]: Basic Input/Output System. Sistema básico de entrada/salida almacenado en un chip no volátil de la placa base; ejecuta el POST e inicia el cargador de arranque tradicional bajo esquema MBR.
*[ROM BIOS]: Chip de memoria no volátil de la placa base que contiene el código fundacional de inicialización y diagnóstico del ordenador.
*[UEFI]: Unified Extensible Firmware Interface. Interfaz de firmware moderna que reemplaza a la BIOS tradicional, ofreciendo soporte para discos GPT superiores a 2 TB, interfaz gráfica con ratón, Secure Boot y tiempos de inicio reducidos.
*[Secure Boot]: Mecanismo de arranque seguro de UEFI que verifica criptográficamente que el gestor de arranque, los controladores y los componentes del kernel cuenten con certificados y firmas autorizadas antes de ejecutarse.
*[POST]: Power-On Self-Test. Rutina inicial de comprobación y diagnóstico por hardware ejecutada por el firmware (BIOS/UEFI) nada más encender el equipo para verificar el estado operativo de CPU, RAM y periféricos primarios.
*[CMOS]: Complementary Metal-Oxide-Semiconductor. Memoria volátil de bajo consumo integrada en la placa base que retiene los parámetros modificables de la BIOS y la hora del sistema.
*[Pila CMOS]: Batería de botón (generalmente CR2032) que alimenta continuamente el circuito CMOS para preservar los ajustes de configuración de la placa cuando el equipo se desconecta de la red.
*[Memoria Flash]: Memoria de estado sólido no volátil y reescribible eléctricamente por bloques, comúnmente utilizada para albergar el firmware UEFI/BIOS y en unidades SSD/USB.
*[MBR]: Master Boot Record. Primer sector de almacenamiento (512 bytes) de un disco bajo esquema clásico que alberga el código de inicio maestro y una tabla de particiones limitada a un máximo de 4 primarias y 2 TB por disco.
*[GPT]: GUID Partition Table. Estándar moderno de tabla de particiones vinculado a UEFI que emplea identificadores universales (GUID), rompe el límite de 2 TB por volumen y cuenta con redundancia de cabeceras de seguridad.
*[Gestor de arranque]: Programa intermedio (como GRUB2, systemd-boot o Windows Boot Manager) cargado tras el POST encargado de localizar, cargar en RAM e inicializar el kernel del sistema operativo.
*[Bootloader]: Denominación en inglés del gestor de arranque encargado de transferir el control operativo de la máquina al núcleo del sistema operativo.
*[Boot]: Secuencia u orden de inicio configurado en el firmware que define la prioridad de dispositivos (SSD, USB, red) desde los que se intentará ejecutar un gestor de arranque.
*[Dual Boot]: Configuración multiarranque que permite coexistir a dos o más sistemas operativos en particiones distintas del disco, permitiendo seleccionar cuál arrancar mediante el bootloader.
*[Sistema Operativo]: Software fundamental de un sistema informático encargado de gestionar el hardware, organizar los sistemas de archivos, administrar procesos y memoria, y proporcionar interfaces de usuario.
*[Kernel]: Núcleo central del sistema operativo que reside permanentemente en memoria RAM coordinando con acceso privilegiado la interacción directa con el hardware y los recursos.
*[Modo núcleo]: Nivel o anillo de ejecución con máximos privilegios (Ring 0 / kernel mode) donde el software tiene acceso irrestricto al hardware físico y al espacio total de memoria.
*[Modo usuario]: Nivel de ejecución con privilegios limitados (Ring 3 / user mode) reservado para las aplicaciones de usuario, aislando el acceso indebido al hardware mediante llamadas controladas.
*[Llamada al sistema]: System Call (Syscall). Petición programática que efectúa un proceso en modo usuario para solicitar al kernel la ejecución de una tarea privilegiada (como leer un archivo o abrir un socket).
*[Monolítica]: Diseño de sistema operativo donde todos los servicios fundamentales (planificador, gestor de memoria, controladores y sistemas de archivos) se compilan y ejecutan juntos en el espacio de modo núcleo.
*[Microkernel]: Diseño estructural donde el núcleo contiene únicamente las funciones indispensables (comunicación IPC, conmutación de hilos y memoria básica), delegando los demás servicios a procesos en modo usuario.
*[Arquitectura Híbrida]: Modelo estructural que combina la velocidad de ejecución monolítica para subsistemas críticos con el aislamiento y modularidad de los micronúcleos (propio de Windows NT y macOS XNU).
*[IPC]: Inter-Process Communication. Conjunto de mecanismos del sistema operativo (tuberías, semáforos, memoria compartida, sockets) destinados al intercambio ordenado de datos y sincronización entre procesos.
*[Proceso]: Programa informático en fase de ejecución cargado en la memoria RAM que dispone de un identificador propio, espacio de direcciones virtuales y descriptores de recursos asignados.
*[Hilo]: Thread o subproceso. Unidad mínima de ejecución planificable dentro de un proceso que comparte el mismo espacio de memoria y recursos con otros hilos del mismo proceso pero posee su propia pila.
*[BCP]: Bloque de Control de Procesos. Estructura de datos interna del núcleo que almacena toda la información descriptiva y de contexto de un proceso (PID, estado, registros de CPU, límites de memoria).
*[PCB]: Process Control Block. Siglas en inglés correspondientes al Bloque de Control de Procesos (BCP).
*[PID]: Process Identifier. Número entero único asignado por el sistema operativo a cada proceso activo para identificarlo de forma inequívoca en la tabla de procesos.
*[Planificación de procesos]: Módulo algorítmico del núcleo encargado de determinar qué proceso preparado toma el control del procesador y durante cuánto tiempo.
*[Planificación expulsiva]: Esquema de planificación donde el sistema operativo retira de forma forzosa la CPU al proceso activo cuando expira su cuanto de tiempo o aparece un proceso de mayor prioridad.
*[Planificación no expulsiva]: Esquema de planificación cooperativa donde el proceso en posesión de la CPU conserva el control hasta que finaliza voluntariamente o realiza una llamada bloqueante de E/S.
*[SJF]: Shortest Job First. Algoritmo de planificación que asigna el procesador preferentemente a aquellos procesos cuya estimación de ráfaga de CPU requerida sea menor.
*[Round Robin]: Algoritmo de planificación expulsivo circular que distribuye el tiempo de CPU entre los procesos preparados asignándoles turnos periódicos de duración prefijada (quantum).
*[Quantum]: Intervalo de tiempo fijo asignado por el planificador Round Robin a un proceso para su ejecución antes de producir una conmutación de contexto.
*[Paginación]: Técnica de gestión de memoria virtual que divide la memoria física en marcos (frames) y la memoria lógica en páginas (pages) de idéntico tamaño para eliminar la fragmentación externa.
*[Swap]: Espacio de intercambio en disco o archivo dedicado a volcar páginas de memoria RAM inactivas cuando la memoria física principal se satura.
*[Deadlock]: Bloqueo mutuo. Condición patológica en la que dos o más procesos se bloquean indefinidamente porque cada uno retiene un recurso que el otro necesita para continuar.
*[Fragmentación interna]: Desperdicio de espacio en bloques de almacenamiento o memoria que ocurre cuando el tamaño asignado excede la cantidad real de datos guardados.
*[Fragmentación externa]: Dispersión de espacios libres no contiguos en la memoria o disco que imposibilita atender peticiones de asignación contigua aunque la suma total de espacio libre sea suficiente.
*[Sistema de archivos]: Estructura lógica y algoritmos utilizados por un sistema operativo para organizar, indexar, asegurar y nombrar los ficheros y carpetas dentro de un volumen de almacenamiento.
*[Inodo]: Estructura de datos utilizada en sistemas de archivos Linux/Unix que almacena metadatos y punteros a bloques de datos de un archivo, prescindiendo del nombre directo.
*[Permisos POSIX]: Modelo de control de acceso en sistemas Unix basado en tres tipos de permisos (Lectura 'r', Escritura 'w', Ejecución 'x') sobre tres niveles de entidad (Propietario, Grupo y Otros).
*[LVM]: Logical Volume Manager. Capa de abstracción para Linux que permite crear volúmenes lógicos flexibles y redimensionables agregando múltiples discos físicos.
*[Journaling]: Registro transaccional que documenta las modificaciones pendientes en un área de log antes de grabarlas en los bloques de datos, preservando la coherencia ante caídas del sistema.
*[NTFS]: New Technology File System. Sistema de archivos por defecto en entornos Microsoft Windows con soporte de permisos ACL, compresión nativa, cifrado EFS y transacciones por journaling.
*[FAT32]: File Allocation Table 32. Formato de sistema de archivos clásico con amplia compatibilidad entre dispositivos, con limitaciones de 4 GB de tamaño máximo por archivo y 2 TB por partición.
*[exFAT]: Extended File Allocation Table. Sistema de archivos optimizado para memorias extraíbles y tarjetas SD que elimina las restricciones de tamaño de archivo de FAT32 manteniendo compatibilidad multiplataforma.
*[APFS]: Apple File System. Sistema de archivos de Apple diseñado específicamente para memorias flash y SSD, optimizado para clonación casi instantánea, cifrado fuerte y snapshots.
*[ext4]: Fourth Extended Filesystem. Sistema de archivos transaccional con soporte de journaling estándar en distribuciones GNU/Linux que destaca por su estabilidad y rendimiento.
*[Desfragmentación]: Reordenamiento contiguo de los clústeres dispersos de archivos en discos mecánicos (HDD) para optimizar el movimiento de los cabezales y acelerar la lectura.
*[TRIM]: Comando ATA/NVMe emitido por el sistema operativo hacia unidades SSD para marcar qué bloques lógicos contienen datos descartados que deben purgarse internamente para sostener las velocidades de escritura.
*[S.M.A.R.T.]: Self-Monitoring, Analysis and Reporting Technology. Sistema de monitorización integrado en discos HDD y SSD que recopila métricas de salud (sectores reasignados, temperaturas, horas) para predecir fallos mecánicos o de celda.
*[NVMe]: Non-Volatile Memory Express. Protocolo de comunicación y arquitectura de transporte diseñado específicamente para unidades SSD de alta velocidad conectadas directamente mediante carriles PCIe.
*[Snapshot]: Instantánea o imagen de solo lectura que refleja el estado lógico exacto de un sistema de archivos, base de datos o máquina virtual en un instante de tiempo específico.
*[Shell]: Intérprete de comandos que actúa como interfaz entre el usuario o guiones de automatización (scripts) y los servicios internos del sistema operativo.
*[CLI]: Command Line Interface. Interfaz de usuario basada enteramente en modo texto en la cual las instrucciones se ingresan mediante comandos tecleados.
*[GUI]: Graphical User Interface. Entorno de interacción visual compuesto por ventanas, botones, iconos y menús que facilita el control intuitivo del sistema.
*[WIMP]: Windows, Icons, Menus, Pointer. Paradigma tradicional de diseño de interfaces gráficas basado en la interacción combinada de ventanas, iconos, menús desplegables y puntero.
*[Virtualización]: Tecnología que permite crear capas de abstracción lógica para ejecutar múltiples instancias de sistemas operativos y entornos virtuales sobre un mismo hardware físico.
*[Máquina virtual]: Entorno informático desacoplado y simulado por software que opera como un ordenador independiente con su propio sistema operativo invitado y recursos virtuales.
*[VM]: Virtual Machine. Término en inglés correspondiente a Máquina Virtual.
*[Hipervisor]: Hypervisor o Monitor de Máquina Virtual (VMM). Software o firmware encargado de gestionar, aprovisionar y aislar los recursos de la máquina física entre múltiples máquinas virtuales.
*[Hipervisor Tipo 1]: Bare-metal. Hipervisor que se instala y ejecuta directamente sobre el hardware físico del ordenador sin necesidad de un sistema operativo base mediador (ej. VMware ESXi, Proxmox VE).
*[Hipervisor Tipo 2]: Hosted. Hipervisor que opera como una aplicación estándar sobre un sistema operativo anfitrión convencional (ej. Oracle VirtualBox, VMware Workstation).
*[Sistema anfitrión]: Host OS. Sistema operativo principal instalado físicamente en la máquina sobre el que se ejecutan los hipervisores de tipo 2.
*[Sistema invitado]: Guest OS. Sistema operativo instalado y confinado dentro de una máquina virtual.
*[Guest Additions]: Paquete de controladores y herramientas instalable en el sistema operativo invitado de VirtualBox para mejorar la resolución gráfica dinámica, carpetas compartidas e integración de puntero.
*[Hardware virtual]: Colección de recursos informáticos simulados por software por el hipervisor (vCPU, vRAM, controladoras de disco e interfaces de red lógicas).
*[VirtualBox]: Software de virtualización de tipo 2 multiplataforma desarrollado originalmente por Sun Microsystems y mantenido actualmente por Oracle Corporation.
*[VMware Workstation Pro]: Solución comercial de hipervisor hosted de tipo 2 orientada a virtualización avanzada en puestos de escritorio Windows y Linux.
*[Hyper-V]: Solución de virtualización nativa desarrollada por Microsoft integrada en las ediciones profesionales y de servidor de Windows.
*[Hardware]: Componentes físicos, tangibles, electrónicos y mecánicos que constituyen la estructura material de un ordenador o sistema informático.
*[Software]: Componente lógico e intangible integrado por el código, programas, rutinas y datos que gobiernan el funcionamiento de los componentes de hardware.
*[Software de base]: Conjunto de programas que gestionan de forma directa los recursos del hardware y sirven de soporte a otras aplicaciones (incluye sistemas operativos y drivers).
*[Software de aplicación]: Programas desarrollados para facilitar al usuario la realización de labores concretas (navegadores, suites ofimáticas, reproductores, etc.).
*[Software de desarrollo]: Herramientas de software utilizadas por los programadores para crear, depurar y mantener nuevos programas y sistemas (compiladores, IDEs, depuradores).
*[Driver]: Controlador de dispositivo; software especializado que ejerce de puente e intérprete de comunicaciones entre el sistema operativo y un periférico o componente de hardware concreto.
*[Software propietario]: Software privativo cuyos derechos de explotación y código fuente están cerrados legalmente al público, impidiendo su libre modificación o distribución.
*[Software libre]: Software que respeta las cuatro libertades de la FSF: usar el programa con cualquier fin, estudiar su código fuente, distribuir copias y publicar modificaciones.
*[Freeware]: Software distribuido gratuitamente sin coste de adquisición pero cuyos derechos de autor continúan cerrados, impidiendo su alteración o venta.
*[Shareware]: Modelo de licenciamiento comercial que autoriza la evaluación gratuita del software durante un plazo de prueba o con prestaciones reducidas antes del pago.
*[Licencia de software]: Contrato vinculante entre el desarrollador y el usuario final que determina formalmente los derechos, deberes y límites permitidos en el uso del programa.
*[Código fuente]: Conjunto de instrucciones legibles escritas en un lenguaje de programación estructurado que definen el comportamiento de una aplicación antes de ser compilada.
*[Propiedad intelectual]: Conjunto de derechos y garantías jurídicas reconocidas por la legislación a los autores sobre sus creaciones científicas, literarias y técnicas.
*[Derechos de autor]: Copyright. Protección jurídica que concede al autor facultades exclusivas sobre la explotación, reproducción, transformación y distribución de su obra.
*[Bit]: Binary digit. Unidad elemental mínima de información computacional que solo puede adoptar uno de dos valores lógicos: 0 o 1.
*[Byte]: Agrupación contigua estándar de 8 bits empleada como la unidad base para medir la capacidad de almacenamiento y memoria en los ordenadores.
*[Palabra]: Número finito de bits que la arquitectura de un procesador puede transferir y computar en una sola operación elemental de sus registros internos (comúnmente 32 o 64 bits).
*[Sistema binario]: Sistema de numeración en base 2 fundamentado en combinaciones de los dígitos 0 y 1, base de la electrónica digital.
*[Sistema octal]: Sistema de numeración en base 8 que emplea los dígitos del 0 al 7, donde cada dígito corresponde exactamente a la representación de 3 bits.
*[Sistema decimal]: Sistema posicional habitual en base 10 basado en los dígitos del 0 al 9.
*[Sistema hexadecimal]: Sistema de numeración posicional en base 16 compuesto por los dígitos 0-9 y las letras A-F, donde cada dígito equivale exactamente a un grupo de 4 bits (un nibble).
*[x86]: Arquitectura clásica de microprocesadores derivada de la familia Intel 8086 que define el juego de instrucciones para plataformas de 32 bits (IA-32).
*[x64]: Arquitectura de microprocesadores de 64 bits (x86-64 o AMD64) capaz de ejecutar instrucciones nativas ampliadas y direccionar más de 4 GB de memoria RAM.
*[Registro de Windows]: Base de datos jerárquica unificada donde los sistemas operativos Microsoft Windows almacenan las configuraciones del kernel, controladores, servicios y programas.
*[Regedit]: Herramienta administrativa nativa de Windows con interfaz gráfica para consultar, exportar y modificar manualmente claves y valores del Registro del sistema.
*[HKLM]: HKEY_LOCAL_MACHINE. Rama raíz del Registro de Windows que conserva los datos de configuración física y de controladores comunes a todos los usuarios del equipo.
*[HKCU]: HKEY_CURRENT_USER. Rama raíz del Registro de Windows que recopila las configuraciones, preferencias y personalizaciones del usuario con la sesión activa.
*[HKCR]: HKEY_CLASSES_ROOT. Subclave del Registro de Windows que asocia las extensiones de archivos con sus aplicaciones designadas e interfaces COM.
*[HKU]: HKEY_USERS. Rama del Registro de Windows que almacena los perfiles individuales de todos los usuarios registrados en el equipo.
*[HKCC]: HKEY_CURRENT_CONFIG. Rama volátil del Registro de Windows que apunta a la configuración del perfil de hardware cargado en el arranque actual.
*[/etc]: Directorio canónico en sistemas GNU/Linux y UNIX que almacena los ficheros de configuración en texto plano del sistema y de los servicios instalados.
*[/etc/hosts]: Fichero de texto local en sistemas Linux y Windows que permite asociar nombres de host con direcciones IP para resolución estática local sin consultar servidores DNS.
*[Servicio]: Proceso que se ejecuta en segundo plano (background) de manera desatendida para ofrecer funciones continuas de soporte al sistema operativo y a la red.
*[Demonio]: Daemon. Proceso en segundo plano característico de entornos Unix/Linux que opera de manera desatendida a la espera de peticiones o eventos del sistema.
*[systemd]: Conjunto de herramientas y gestor de arranque del espacio de usuario por defecto en la mayoría de distribuciones GNU/Linux modernas, encargado de iniciar servicios y sockets.
*[systemctl]: Comando central de terminal en Linux para consultar el estado, iniciar, detener, reiniciar, habilitar y deshabilitar servicios gobernados por systemd.
*[APT]: Advanced Package Tool. Herramienta de gestión de paquetes de alto nivel utilizada en Debian, Ubuntu y derivados para instalar, actualizar y eliminar software resolviendo dependencias.
*[Repositorio]: Servidor o depósito centralizado en red que alberga colecciones verificadas de paquetes de software listos para su descarga e instalación segura en el sistema.
*[Log]: Registro secuencial y cronológico generado por el sistema operativo o aplicaciones para auditar eventos, avisos de seguridad y errores operacionales.
*[Visor de eventos]: Utilidad de Microsoft Windows diseñada para inspeccionar, monitorizar y filtrar los registros de incidencias ocurridos en el sistema, la seguridad y las aplicaciones.
*[Monitor del sistema]: Utilidad gráfica que expone métricas y curvas de consumo de CPU, utilización de memoria RAM, tráfico de red y estado de procesos.
*[Recurso compartido]: Directorio, volumen o impresora puesto a disposición a través de la red local mediante protocolos de compartición (como SMB o NFS).
*[Grupo local]: Agrupación administrativa de cuentas de usuario creada en un equipo para conceder permisos y privilegios de acceso conjuntos sobre el sistema de archivos.
*[Cuenta de usuario]: Registro de identidad en el sistema operativo provisto de credenciales, carpeta personal y privilegios de seguridad asignados.
*[Suspensión]: Modo de reposo donde el equipo apaga la mayoría de subsistemas pero mantiene la memoria RAM alimentada para posibilitar una reanudación instantánea.
*[Hibernación]: Modo de ahorro de energía que vuelca todo el contenido de la memoria RAM en el archivo `hiberfil.sys` del disco duro y apaga totalmente la máquina.
*[Inicio rápido]: Fast Startup. Modo de arranque híbrido en Windows que almacena la sesión del kernel y controladores en disco al apagar para acortar los tiempos de inicio subsiguientes.
*[Modo seguro]: Safe Mode. Entorno de arranque diagnóstico en Windows que carga estrictamente los controladores básicos y servicios esenciales para aislar averías y malware.
*[Recovery Mode]: Modo de inicio orientado a rescate y mantenimiento en sistemas operativos Linux o macOS utilizado para reparar discos, recomponer particiones o restaurar contraseñas.
*[msinfo32]: Comando ejecutable en Windows para abrir la ventana de «Información del sistema», que muestra detalles completos del hardware, sistema operativo y controladores.
*[df]: Comando en terminales Linux (`disk free`) utilizado para inspeccionar la ocupación y espacio libre en todos los sistemas de archivos montados.
*[cat]: Utilidad básica de Unix/Linux empleada para concatenar archivos y verter su contenido íntegro directamente sobre la salida estándar de texto.
*[powercfg]: Herramienta de línea de comandos en Windows utilizada para diagnosticar parámetros energéticos, generar informes de batería y ajustar la hibernación.
*[Fuente de Alimentación]: Componente encargado de transformar la corriente alterna (AC) de la red eléctrica en los distintos raíles de corriente continua (DC: +12V, +5V, +3.3V) necesarios para el hardware.
*[Transformador]: Dispositivo electromagnético de la fuente que reduce la alta tensión alterna de entrada a valores nominales inferiores más manejables.
*[Rectificador]: Conjunto de diodos en la fuente que convierte la corriente alterna oscilante en impulsos continuos unidireccionales.
*[Filtro]: Circuito compuesto por condensadores y bobinas que suaviza el rizado de la onda tras la rectificación en una fuente.
*[Regulador]: Circuito que estabiliza las tensiones de salida de la fuente garantizando voltajes constantes independientemente de las variaciones de carga.
*[SAI]: Sistema de Alimentación Ininterrumpida (UPS). Dispositivo equipado con baterías de respaldo y circuitos de filtrado que suministra energía eléctrica continua frente a cortes y picos de la red eléctrica.
*[UPS]: Uninterruptible Power Supply. Denominación internacional en inglés para el Sistema de Alimentación Ininterrumpida (SAI).
*[SAI Standby]: SAI offline de bajo coste que alimenta los equipos directamente de la red y conmuta a baterías exclusivamente cuando detecta una interrupción del suministro.
*[SAI Offline Interactivo]: SAI Line-Interactive equipado con un autotransformador (AVR) que compensa caídas y subidas de tensión sin recurrir constantemente a las baterías.
*[SAI Online]: SAI de doble conversión continua (AC a DC y de nuevo DC a AC) que aísla de forma absoluta a los equipos conectados frente a cualquier distorsión de la red.
*[Inversor]: Circuito electrónico del SAI que convierte la tensión continua (DC) acumulada en las baterías en corriente alterna (AC) adecuada para los equipos.
*[Conversor]: Circuito encargado de modificar y adaptar los valores de tensión o corriente continua dentro de un sistema eléctrico.
*[Conmutador]: Interruptor estático dentro del SAI que conmuta con tiempos mínimos la alimentación entre la red general y el circuito de baterías.
*[Apagón]: Blackout. Interrupción o pérdida completa de suministro eléctrico en la línea de la red.
*[Caída de Tensión]: Brownout. Caída transitoria del valor eficaz del voltaje por debajo de los límites mínimos nominales de suministro.
*[Bajo Voltaje]: Tensión eléctrica inferior al valor nominal recomendado durante un período prolongado.
*[Pico de Tensión]: Elevación repentina y brevísima del voltaje en la línea que puede perforar aislamientos y dañar fuentes de alimentación.
*[Sobrevoltaje]: Incremento continuado de la tensión por encima de los umbrales nominales de funcionamiento de los componentes.
*[Ruido Eléctrico]: Perturbaciones o interferencias electromagnéticas parásitas (EMI/RFI) superpuestas a la onda senoidal pura de la red eléctrica.
*[Polímetro]: Multímetro o instrumento de medida portátil que permite evaluar magnitudes eléctricas como tensión, intensidad y resistencia.
*[Culombio]: Unidad del Sistema Internacional para medir la magnitud física de la carga eléctrica transportada por electrones.
*[PRL]: Prevención de Riesgos Laborales. Marco legislativo y directrices técnicas destinadas a promover la seguridad de los trabajadores y prevenir accidentes de trabajo.
*[EPI]: Equipo de Protección Individual. Cualquier elemento, prenda o accesorio homologado destinado a ser llevado por el trabajador para protegerlo de riesgos que amenacen su seguridad (ej. guantes, gafas, pulsera antiestática).
*[Pulsera Antiestática]: Dispositivo conductor compuesto por una banda elástica y un cable con resistencia conectado a tierra para disipar de forma segura la electricidad estática acumulada en el técnico.
*[Electricidad Estática]: Acumulación de cargas eléctricas en reposo sobre la superficie de materiales aislantes o conductores desprovistos de toma de tierra.
*[ESD]: Electrostatic Discharge. Descarga repentina de electricidad estática entre dos objetos con diferente potencial que puede perforar microscópicamente circuitos integrados.
*[Tres R]: Principio de gestión ecológica basado en Reducir consumos innecesarios, Reutilizar elementos y Reciclar los componentes según la normativa RAEE.
*[Ergonomía]: Ciencia aplicada al diseño del entorno y puestos de trabajo adaptándolos a las características físicas, posturales y psicológicas del operario.
*[SATA]: Serial Advanced Technology Attachment. Interfaz de bus en serie para la transferencia masiva de datos entre la placa base y discos duros, SSDs SATA y lectores ópticos (hasta 6 Gbps).
*[USB]: Universal Serial Bus. Estándar de conexión por cable serie multipropósito que unifica la transmisión de datos y suministro de energía entre periféricos y el equipo.
*[VGA]: Video Graphics Array. Conexión y señal analógica estándar de 15 contactos (D-Sub15) utilizada para transmitir vídeo a monitores y proyectores.
*[HDMI]: High-Definition Multimedia Interface. Estándar de conexión audiovisual totalmente digital que transmite vídeo sin compresión en alta definición y audio multicanal simultáneamente.
*[DisplayPort]: Interfaz digital avanzada de transmisión de audio y vídeo de alto ancho de banda, compatible con encadenamiento en serie de pantallas (MST) y altas tasas de refresco.
*[RCA]: Conector analógico clásico de audio y vídeo codificado por colores (amarillo para vídeo compuesto; rojo y blanco para canales de audio estéreo).
*[S/PDIF]: Sony/Philips Digital Interface Format. Formato y protocolo para la transmisión de audio digital multicanal mediante cable coaxial o fibra óptica (TOSLink).
*[MiniJack]: Conector analógico de 3,5 mm (TRS o TRRS) empleado universalmente para la entrada y salida de audio en periféricos como auriculares y micrófonos.
*[GamePort]: Interfaz clásica de 15 pines presente en tarjetas de sonido antiguas destinada a conectar mandos de juegos o periféricos con estándar MIDI.
*[MIDI]: Musical Instrument Digital Interface. Protocolo y conector estándar que transporta instrucciones musicales (notas, tono, velocidad) entre instrumentos digitales y el PC.
*[NIC]: Network Interface Card. Tarjeta de red física o controladora integrada que conecta el ordenador a la red local gestionando el nivel de enlace de datos.
*[Dirección MAC]: Media Access Control. Dirección física hexadecimal de 48 bits grabada de forma permanente en la tarjeta de red que identifica de manera única al dispositivo en el medio local.
*[LAN]: Local Area Network. Red de área local privada que interconecta equipos informáticos dentro de un perímetro geográfico delimitado (domicilio, edificio o aula).
*[MAN]: Metropolitan Area Network. Red de alta velocidad que interconecta diversas redes LAN dispersas por un ámbito geográfico metropolitano o municipal.
*[WAN]: Wide Area Network. Red de área extensa que enlaza equipos e infraestructuras a través de áreas geográficas de nivel regional, estatal o mundial (siendo Internet su paradigma).
*[Dirección IP]: Protocolo de direccionamiento lógico (IPv4 de 32 bits o IPv6 de 128 bits) utilizado para identificar un host y enrutar paquetes a través de redes conectadas.
*[Máscara de red]: Valor de 32 bits en IPv4 que, aplicado mediante operación lógica AND sobre la dirección IP, divide la dirección en parte de red y parte de host.
*[Puerta de enlace]: Gateway. Dispositivo de red (habitualmente un router) que actúa como punto de salida para encaminar paquetes locales hacia redes externas o Internet.
*[DNS]: Domain Name System. Sistema jerárquico distribuido encargado de resolver nombres de dominio legibles en direcciones IP numéricas.
*[DHCP]: Dynamic Host Configuration Protocol. Protocolo de red cliente-servidor que asigna automáticamente configuraciones IP, máscaras, gateways y DNS a los hosts de la red.
*[ARP]: Address Resolution Protocol. Protocolo que traduce una dirección IP conocida de la capa de red a su dirección física MAC correspondiente en la capa de enlace local.
*[TCP]: Transmission Control Protocol. Protocolo de transporte orientado a conexión, confiable y con control de flujo que garantiza la entrega ordenada y sin errores de los datos.
*[UDP]: User Datagram Protocol. Protocolo de transporte no orientado a conexión ni confiable, caracterizado por mínima sobrecarga y apto para transmisiones en tiempo real.
*[VLAN]: Virtual Local Area Network. Red de área local lógica creada sobre una infraestructura física conmutada que aísla el tráfico de difusión y segmenta departamentos o servicios.
*[Drives Bays]: Bahías de almacenamiento; cavidades del chasis destinadas a encajar y atornillar discos duros, SSDs y unidades ópticas (formatos habituales de 2,5" y 3,5").
*[HDD_LED]: Conector del panel frontal que enlaza con el diodo emisor de luz de la caja para parpadear ante operaciones de lectura y escritura en disco.
*[Power_LED]: Conector del panel frontal que ilumina el indicador frontal de encendido del equipo.
*[Power_sw]: Interruptor de botón del frontal del chasis conectado a la placa base para accionar el encendido o apagado suave de la máquina.
*[Reset]: Interruptor frontal de reinicio por hardware que força a la placa base a reiniciar los ciclos de procesador inmediatamente.
*[F_USB]: Cabezal interno de pines en la placa base previsto para enlazar los puertos USB integrados en el frontal del chasis.
*[F_Audio]: Cabezal de conexión en la placa base para llevar la señal de sonido y micrófono a las tomas frontales de la caja.
*[Disipador]: Bloque térmico de metal conductor (aluminio o cobre) provisto de aletas que disipa pasivamente por convección el calor generado por componentes como la CPU.
*[Ventilador]: Elemento mecánico que genera un flujo de aire forzado para refrigerar los componentes internos o extraer el calor de la caja.
*[Pasta Térmica]: Compuesto térmico conductor que se unta entre el IHS del procesador y la base del disipador para rellenar imperfecciones microscópicas y eliminar el aire aislante.
*[Sobrecalentamiento]: Subida excesiva de temperatura operativa que desencadena mecanismos de protección como el estrangulamiento térmico (thermal throttling) o el apagado brusco.
*[Mantenimiento Preventivo]: Intervenciones programadas y periódicas de limpieza y optimización para prolongar la vida útil del equipo y evitar fallos prematuros.
*[Mantenimiento Correctivo]: Conjunto de operaciones y sustitución de piezas que se realizan para subsanar y reparar averías una vez que el fallo ya se ha manifestado.
*[Aire Comprimido]: Spray de gas comprimido empleado para expulsar de forma inocua partículas de polvo y suciedad incrustadas en circuitos y ventiladores.
*[Bridas]: Cintas de sujeción plásticas utilizadas para canalizar el cableado interno, mejorando el flujo de aire y facilitando intervenciones posteriores.
*[Software de Diagnóstico]: Herramienta de software empleada para monitorizar temperaturas, voltajes, hardware y detectar fallas de componentes (p. ej. Everest / AIDA64 o comandos en Linux).
*[Informe de Montaje]: Documento técnico emitido tras el ensamblaje de un equipo que desglosa componentes instalados, números de serie y pruebas de estrés superadas.
*[Informe de Incidencias]: Documento formal de soporte técnico que recoge la descripción de la avería, el diagnóstico realizado, los componentes sustituidos y la resolución aplicada.
*[Acuerdos marco]: Convenios orientativos entre patronales y sindicatos que establecen directrices comunes para coordinar futuras negociaciones colectivas en diferentes ámbitos.
*[Autoestima]: Percepción y valoración subjetiva que tiene un individuo sobre sí mismo y sus capacidades de inserción y progreso laboral.
*[Autónomos]: Trabajadores por cuenta propia con régimen especial y excluidos del ámbito de aplicación del Estatuto de los Trabajadores.
*[Balance profesional]: Diagnóstico personal que audita la formación, experiencia y competencias de un trabajador frente a las demandas de su sector profesional.
*[BCCC]: Base de Cotización por Contingencias Comunes; importe reflejado en la nómina sobre el que se calculan las retenciones de la Seguridad Social para IT común y pensiones.
*[BCCP]: Base de Cotización por Contingencias Profesionales; magnitud salarial destinada a financiar las prestaciones por accidentes de trabajo y enfermedades profesionales.
*[BCHE]: Base de Cotización por Horas Extraordinarias; sumatorio salarial sobre el que se calculan las aportaciones específicas por horas suplementarias realizadas.
*[BIRPF]: Base sujeta a retención del Impuesto sobre la Renta de las Personas Físicas calculada en el recibo de salarios.
*[Calendario laboral]: Cuadro oficial anual donde se fijan por ley las jornadas efectivas de trabajo, los descansos semanales, las vacaciones y los festivos retribuidos.
*[CE]: Constitución Española de 1978; norma fundamental del Estado que consagra derechos laborales básicos como el derecho al trabajo, a la huelga y a la libre sindicación.
*[Constitución Española]: Carta Magna de 1978 que consagra en sus artículos garantías laborales esenciales como el derecho al trabajo y la no discriminación.
*[CEOE]: Confederación Española de Organizaciones Empresariales; principal patronal representativa del empresariado en España.
*[CEPYME]: Confederación Española de la Pequeña y Mediana Empresa; patronal defensora de los intereses de las pymes.
*[CNCP]: Catálogo Nacional de Cualificaciones Profesionales; sistema que ordena las competencias profesionales acreditables en cualificaciones estructuradas por niveles.
*[Comisión Nacional de Seguridad y Salud en el Trabajo]: Órgano colegiado de consulta y participación institucional en las políticas preventivas estatales.
*[Comité de seguridad y salud]: Órgano paritario y colegiado en empresas de 50 o más trabajadores para la consulta periódica de planes y actuaciones preventivas.
*[Conato de emergencia]: Emergencia leve que puede ser contenida y controlada rápidamente con los recursos y personal inmediatamente disponibles en la zona.
*[Contrato de trabajo]: Acuerdo legal bilateral donde el trabajador se compromete a prestar servicios remunerados bajo la dependencia y dirección de un empresario.
*[Convenio colectivo]: Norma de obligado cumplimiento negociada entre representantes sindicales y patronales que regula condiciones laborales y retribuciones de un sector.
*[Convenio de empresa]: Acuerdo colectivo de trabajo negociado de forma exclusiva en el seno de una empresa o centro de trabajo determinado.
*[Cualificación profesional]: Repertorio de competencias y destrezas con valor productivo en el mercado de trabajo susceptibles de evaluación y certificación oficial.
*[Cultura preventiva]: Conjunto de valores, principios y prácticas compartidos en la empresa para interiorizar la prevención como un hábito laboral continuo.
*[DAFO]: Herramienta de autodiagnóstico estratégico para evaluar Debilidades, Amenazas, Fortalezas y Oportunidades frente al mercado laboral.
*[FODA]: Variante de las siglas DAFO (Fortalezas, Oportunidades, Debilidades y Amenazas) empleada para el análisis de empleabilidad.
*[Delegados de prevención]: Representantes de los trabajadores con cometidos específicos en materia de prevención de riesgos y control de las medidas de seguridad.
*[Derecho derivado]: Conjunto normativo de la Unión Europea emanado de sus instituciones, integrado por directivas, reglamentos y decisiones.
*[Derecho originario]: Normas fundamentales comunitarias suscritas en los tratados fundacionales y modificativos de la Unión Europea.
*[Devengos]: Suma íntegra de las percepciones económicas salariales (salario base, complementos) y extrasalariales brutas devengadas por el trabajador en su nómina.
*[Empleado público]: Persona que desempeña funciones retribuidas al servicio de los intereses generales de una Administración pública.
*[Empleabilidad]: Grado de preparación, cualificación y adaptación de un individuo para acceder a un puesto de trabajo y sostener su carrera profesional.
*[Enfermedad profesional]: Deterioro lento y progresivo de la salud provocado de forma directa por el ejercicio prolongado de una actividad laboral bajo factores de riesgo reconocidos.
*[Accidente de trabajo]: Toda lesión corporal sufrida por el trabajador con ocasión o como consecuencia del trabajo ejecutado por cuenta ajena, incluyendo los percances 'in itinere'.
*[Estatuto de los Trabajadores]: Norma jurídica básica que regula los derechos, deberes y condiciones contractuales de los asalariados dentro del marco laboral español.
*[ET]: Real Decreto Legislativo del Estatuto de los Trabajadores que regula las relaciones laborales y los derechos contractuales en el sector productivo.
*[Finiquito]: Documento liquidatorio emitido a la extinción del contrato laboral que salda de mutuo acuerdo las cantidades y partes proporcionales debidas entre empresa y empleado.
*[FOGASA]: Fondo de Garantía Salarial; entidad pública adscrita al Ministerio de Trabajo que abona salarios e indemnizaciones impagados por insolvencia empresarial o concurso.
*[Funcionario de carrera]: Empleado público vinculado a una Administración mediante nombramiento legal y con plaza permanente superado el proceso de oposición.
*[Funcionario interino]: Empleado público no permanente contratado de forma transitoria para cubrir una plaza vacante hasta su provisión definitiva.
*[Hard Skills]: Habilidades y competencias técnicas concretas adquiridas mediante el estudio formal y la especialización práctica indispensables para un oficio técnico.
*[Soft Skills]: Habilidades blandas transversales como la empatía, el trabajo en equipo, la negociación o la resolución de conflictos.
*[Hemorragia]: Pérdida masiva de sangre por la rotura de vasos circulatorios, clasificada en interna, externa o exteriorizada.
*[Identidad digital]: Rastro, imagen y credibilidad construidos por un profesional en entornos digitales mediante sus publicaciones e interacciones.
*[INCUAL]: Instituto Nacional de las Cualificaciones; ente encargado de confeccionar y actualizar el Catálogo Nacional de Cualificaciones Profesionales.
*[INSST]: Instituto Nacional de Seguridad y Salud en el Trabajo; órgano científico-técnico de la Administración General del Estado en materia de prevención.
*[Interrupción diferencial]: Dispositivo electromagnético de seguridad en cuadros eléctricos diseñado para cortar el paso de corriente ante derivaciones anómalas.
*[IRPF]: Impuesto sobre la Renta de las Personas Físicas; gravamen estatal progresivo deducido directamente sobre los devengos del trabajador en la nómina.
*[Jubilación flexible]: Modalidad que posibilita compatibilizar la pensión de jubilación con un trabajo a tiempo parcial dentro de los márgenes legales.
*[Ley de Prevención de Riesgos Laborales]: Ley 31/1995 que fija las bases, obligaciones del empresario y derechos de los trabajadores en materia de seguridad laboral.
*[LPRL]: Ley 31/1995, de Prevención de Riesgos Laborales.
*[Medicina laboral]: Disciplina médica consagrada al diagnóstico, tratamiento, prevención y vigilancia de patologías causadas por el ejercicio de la actividad profesional.
*[Mutua colaboradora]: Entidad privada sin ánimo de lucro autorizada para gestionar las prestaciones económicas y la asistencia médica por accidentes de trabajo y contingencias profesionales.
*[SMI]: Salario Mínimo Interprofesional; retribución mínima legal fijada anualmente por el Gobierno por debajo de la cual es ilícito retribuir una jornada laboral a tiempo completo.
*[Método STAR]: Técnica para estructurar respuestas en entrevistas laborales detallando la Situación de partida, la Tarea asignada, la Acción ejecutada y el Resultado obtenido.
*[Oferta pública de empleo]: Convocatoria oficial anual de plazas realizada por las Administraciones públicas para cubrir vacantes de empleo público mediante procesos selectivos.
*[OPE]: Oferta Pública de Empleo.
*[OIT]: Organización Internacional del Trabajo; organismo internacional dependiente de la ONU que promueve condiciones de trabajo justas y seguras en todo el mundo.
*[PDI]: Plan de Desarrollo Individual; itinerario formativo personalizado donde un profesional establece los pasos para ampliar sus competencias y cualificaciones.
*[Plan de desarrollo individual]: Hoja de ruta personalizada para gestionar las metas de aprendizaje y capacitación profesional a medio y largo plazo.
*[Perfil disponible]: Conjunto real de títulos, destrezas, competencias y experiencia laboral que un profesional acumula en un momento dado.
*[Perfil exigible]: Demandas técnicas, requerimientos competenciales y experiencia requeridos formalmente por un empleador para desempeñar un puesto.
*[Perfil profesional]: Marco de responsabilidades, destrezas y cualificaciones que definen la competencia global de una titulación o rol determinado.
*[Personal directivo profesional]: Empleado público que ocupa puestos de alta responsabilidad directiva y de gestión en organismos de la Administración.
*[Personal eventual]: Empleado público no permanente que ocupa puestos de confianza o asesoramiento especial asignados legalmente.
*[Personal laboral]: Trabajadores al servicio de las Administraciones públicas regulados por el derecho laboral común y el Estatuto de los Trabajadores.
*[Plan de autoprotección]: Documento preventivo integral obligatorio para instalaciones de riesgo conforme a lo establecido en el RD 393/2007.
*[Plan de prevención]: Documento rector mediante el cual la empresa formaliza e implanta su sistema de gestión preventivo general.
*[PLE]: Entorno Personal de Aprendizaje (Personal Learning Environment); red autogestionada de herramientas, fuentes y canales digitales que un individuo utiliza para aprender.
*[Política social]: Marco de directrices institucionales orientadas a tutelar el bienestar, la estabilidad y la cobertura social de la población trabajadora.
*[Psicosociología]: Disciplina preventiva enfocada en identificar factores como la sobrecarga de trabajo, el estrés y el acoso laboral para diseñar puestos de trabajo saludables.
*[Relación laboral especial]: Contrato de trabajo con condicionantes singulares regulado por un marco normativo propio (como artistas o personal de alta dirección).
*[Relación laboral ordinaria]: Relación contractual sujeta al Estatuto de los Trabajadores que reúne las cuatro notas clave: voluntariedad, ajenidad, dependencia y retribución.
*[Relaciones no laborales]: Supuestos explícitamente excluidos del ámbito laboral por el artículo 1.3 del ET (trabajo voluntario, prestaciones personales obligatorias, familiares directos).
*[Riesgo laboral]: Probabilidad de que un trabajador sufra un daño determinado derivado de las condiciones o la exposición a peligros en su puesto de trabajo.
*[Sector productivo]: Agrupación de actividades económicas afines dedicadas a la producción de bienes o servicios homólogos en el mercado.
*[Señal de advertencia]: Cartel triangular de fondo amarillo, borde negro y pictograma negro que avisa de la inminencia o presencia de un riesgo o peligro.
*[Señal de obligación]: Panel circular con fondo azul y pictograma blanco que impone un comportamiento o el uso preceptivo de un equipo protector individual.
*[Señal de prohibición]: Panel circular blanco con borde perimetral y banda diagonal transversal roja a 45º sobre un pictograma negro que veta una acción peligrosa.
*[Señal de salvamento]: Señalización rectangular o cuadrada verde con pictograma blanco indicativa de vías de evacuación, salidas de emergencia o puestos de primeros auxilios.
*[Señal luminosa]: Indicador dotado de luminiscencia propia para avisar rápidamente al personal sobre maniobras de riesgo o emergencias.
*[Servicio de prevención ajeno]: Entidad técnica especializada externa acreditada formalmente que asume por contrato la prevención de riesgos laborales de una empresa.
*[SMART]: Metodología de fijación de metas u objetivos que exige que sean Específicos, Medibles, Alcanzables, Relevantes y Temporalizados.
*[Objetivos SMART]: Metodología para formular objetivos de proyecto o personales: Específicos (S), Medibles (M), Alcanzables (A), Relevantes (R) y Temporalizados (T).
*[SMR]: Formación Profesional de Grado Medio en Sistemas Microinformáticos y Redes.
*[Vigilancia de la salud]: Evaluaciones y reconocimientos médicos periódicos prestados por personal sanitario laboral para verificar el impacto del puesto en la salud del empleado.
*[Yacimiento de empleo]: Sectores económicos emergentes y nichos de mercado con gran potencial de creación de nuevos puestos debido a transformaciones tecnológicas.
*[ZDP]: Zona de Desarrollo Próximo; concepto pedagógico que describe el margen entre lo que el estudiante sabe hacer por sí mismo y lo que logra con asistencia de un tutor.
*[Zona de desarrollo próximo]: Margen formativo situado entre el nivel de competencia real y el potencial que puede alcanzarse con orientación experta.
*[Cuarta Revolución Industrial]: Transformación socioeconómica originada por la convergencia de tecnologías digitales, físicas y biológicas en todos los sistemas de producción.
*[Industria 4.0]: Modelo fabril de producción inteligente y automatizada sustentado en sistemas ciberfísicos, computación distribuida y analítica masiva en tiempo real.
*[Sistemas Ciberfísicos]: Sistemas integrados donde mecanismos físicos colaboran estrechamente con algoritmos computacionales conectados a través de redes telemáticas.
*[CPS]: Cyber-Physical Systems. Mecanismos físicos supervisados y gobernados por algoritmos computacionales en tiempo real.
*[Capa de Percepción]: Nivel inferior de un CPS que recopila datos de las variables físicas ambientales utilizando redes de sensores.
*[Capa de Transmisión]: Capa de un CPS encargada del transporte fiable, seguro y sin demoras de los datos censados hacia los nodos de procesamiento.
*[Capa de Aplicación]: Nivel superior de un CPS donde residen la analítica de datos, la lógica de control, los registros históricos y la toma de decisiones automatizada.
*[Sensores]: Dispositivos transductores que captan variables físicas o químicas del entorno (temperatura, luz, proximidad) y las transforman en magnitudes eléctricas legibles.
*[Actuadores]: Dispositivos mecánicos o eléctricos que transforman una orden del controlador en una acción física sobre el medio (motores, relés, electroválvulas).
*[Economía Circular]: Modelo económico regenerativo centrado en reducir la extracción de materias primas reutilizando, reparando y reciclando productos para minimizar residuos.
*[EC]: Economía Circular. Enfoque industrial que sustituye el fin de vida del producto por la recuperación continua de materiales.
*[Economía Lineal]: Paradigma clásico e ineficiente de 'extraer, producir, usar y tirar' que agota recursos naturales y acumula residuos.
*[EL]: Economía Lineal. Modelo de producción convencional caracterizado por un solo ciclo de vida para los bienes elaborados.
*[Ecodiseño]: Metodología de ingeniería de producto que contempla el impacto ambiental preventivo en todas las fases del ciclo de vida, facilitando su reciclaje y reparación.
*[ODS]: Objetivos de Desarrollo Sostenible impulsados por la Organización de las Naciones Unidas para erradicar la pobreza y proteger el planeta hacia 2030.
*[ODS 6]: Objetivo de Desarrollo Sostenible centrado en garantizar la disponibilidad y la gestión sostenible del agua y el saneamiento para todos.
*[ODS 7]: Objetivo de Desarrollo Sostenible enfocado en garantizar el acceso a una energía asequible, segura, sostenible y moderna.
*[ODS 12]: Objetivo de Desarrollo Sostenible orientado a consolidar pautas de consumo y producción responsables y eficientes.
*[Cloud Computing]: Prestación bajo demanda de servicios de computación (servidores, bases de datos, redes, almacenamiento) alojados remotamente en centros de datos.
*[Nube]: Infraestructura de servidores remotos interconectados globalmente para procesar y alojar datos a los que se accede mediante Internet.
*[IaaS]: Infrastructure as a Service. Modelo de nube donde el proveedor alquila hardware puro virtualizado: servidores, redes y almacenamiento (ej. AWS EC2).
*[PaaS]: Platform as a Service. Modelo que suministra entornos de ejecución y librerías para que los programadores construyan aplicaciones sin gestionar servidores físicos (ej. Heroku).
*[SaaS]: Software as a Service. Entrega de software listo para su uso inmediato alojado por el proveedor y consumido por los clientes a través del navegador (ej. Microsoft 365).
*[Edge Computing]: Paradigma de computación distribuida que traslada el procesamiento de datos al borde de la red, junto al dispositivo emisor, para abatir la latencia.
*[Latencia]: Tiempo que tarda un paquete de datos en recorrer el trayecto de ida y vuelta a través de la red entre el emisor y el receptor.
*[Fog Computing]: Nivel de computación descentralizado intermedio situado entre los nodos periféricos (Edge) y el centro de datos centralizado (Cloud).
*[Mist Computing]: Nivel de computación en el extremo absoluto del IoT que ejecuta algoritmos y filtrados de datos sobre microcontroladores y sensores con recursos mínimos.
*[THD]: Tecnologías Habilitadoras Digitales; conjunto de tecnologías avanzadas (IA, IoT, Big Data, Cloud) que sustentan la modernización técnica e industrial.
*[RPA]: Robotic Process Automation. Software que emula mediante robots de software tareas humanas administrativas, repetitivas y estructuradas en sistemas informáticos.
*[API]: Application Programming Interface. Conjunto formal de especificaciones y contratos que permiten a aplicaciones independientes comunicarse y transferir datos entre sí.
*[WFMS]: Workflow Management System. Herramientas diseñadas para modelar, ejecutar y monitorizar electrónicamente flujos de trabajo en organizaciones.
*[IA]: Inteligencia Artificial. Capacidad de sistemas de software y algoritmos para imitar destrezas cognitivas humanas como la deducción, el aprendizaje y la resolución de problemas.
*[Machine Learning]: Rama de la IA centrada en algoritmos matemáticos que aprenden de muestras de datos para clasificar o predecir sin ser explícitamente programados.
*[ML]: Machine Learning. Aprendizaje automático estadístico enfocado en la mejora continua de modelos predictivos a partir de conjuntos de datos.
*[NLP]: Natural Language Processing. Procesamiento del Lenguaje Natural; campo de la informática orientado a comprender, estructurar y sintetizar el lenguaje humano natural.
*[Big Data]: Metodologías e infraestructuras orientadas a almacenar y analizar conjuntos masivos de datos definidos por las 5V: Volumen, Velocidad, Variedad, Veracidad y Valor.
*[IoT]: Internet of Things. Red de dispositivos físicos embebidos con sensores, actuadores y conectividad telemática para intercambiar información con la nube.
*[5G]: Quinta generación de estándares de telefonía celular móvil que destaca por velocidades gigabit, densidades de conexión masivas y latencias de milisegundos.
*[Cobot]: Robot colaborativo concebido para compartir físicamente el entorno de trabajo y colaborar con operarios humanos sin requerir barreras protectoras.
*[Cobótica]: Disciplina técnica de la robótica que diseña sistemas y células de producción donde humanos y robots colaboran de manera sinérgica y segura.
*[Blockchain]: Libro de registro contable distribuido e inmutable donde las transacciones se empaquetan en bloques criptográficamente enlazados por consenso descentralizado.
*[Fabricación Aditiva]: Proceso industrial de manufactura aditiva consistente en levantar objetos físicos depositando material estrato a estrato a partir de un archivo CAD.
*[CAD]: Computer-Aided Design. Software de diseño técnico asistido por ordenador para modelar piezas y estructuras mecánicas en 2D o 3D.
*[RV]: Realidad Virtual. Entorno informático tridimensional inmersivo generado por ordenador que aísla visual y auditivamente al usuario del mundo real mediante un casco.
*[RA]: Realidad Aumentada. Tecnología interactiva que superpone capas de información gráfica tridimensional generada por ordenador sobre el entorno físico visible en tiempo real.
*[RM]: Realidad Mixta. Fusión de elementos virtuales y físicos donde ambos planos coexisten e interactúan espacialmente en tiempo real.
*[XR]: Extended Reality. Término paraguas que aglutina todas las experiencias de realidad extendida: realidad virtual, aumentada y mixta.
*[Gemelo Digital]: Digital Twin. Réplica informática en tiempo real de una entidad física (máquina o proceso) para monitorizar su comportamiento y simular escenarios.
*[ERP]: Enterprise Resource Planning. Software unificado y modular que centraliza y articula los procesos de negocio: compras, finanzas, inventarios, RRHH y ventas.
*[CRM]: Customer Relationship Management. Plataforma de software diseñada para organizar, fidelizar y gestionar las relaciones comerciales y el trato preventa y postventa con clientes.
*[SCM]: Supply Chain Management. Software de coordinación logística que planifica, ejecuta y optimiza el flujo integral de mercancías y suministros hasta el usuario final.
*[LMS]: Learning Management System. Plataforma virtual de teleformación diseñada para albergar contenidos educativos, calificar tareas y monitorizar al alumnado.
*[ECM]: Enterprise Content Management. Conjunto de herramientas dedicadas a clasificar, indexar, asegurar y distribuir la documentación y archivos corporativos.
*[PMS]: Project Management System. Plataforma de software utilizada para coordinar tareas, hitos, asignación de recursos y tiempos en la ejecución de proyectos.
*[HRMS]: Human Resource Management System. Aplicación dedicada al control de expedientes del personal, gestión de nóminas, evaluaciones de desempeño y talento.
*[POS]: Point of Sale. Terminal de Punto de Venta (TPV) informático que coordina las transacciones de caja física con la base de datos de inventario y facturación.
*[NoSQL]: Not Only SQL. Familia de bases de datos no relacionales diseñadas para alta escalabilidad horizontal y manejo de estructuras masivas en documentos o clave-valor.
*[In-Memory]: Bases de datos que almacenan y manipulan sus conjuntos de datos en la memoria RAM principal, alcanzando latencias de consulta mínimas.
*[BI]: Business Intelligence. Estrategias y herramientas de análisis que procesan datos corporativos para convertirlos en paneles de control que guíen la toma de decisiones.
*[CI/CD]: Continuous Integration / Continuous Deployment. Pipeline ágil de desarrollo donde los cambios de código se integran, validan con tests automáticos y se despliegan continuamente.
*[CDN]: Content Delivery Network. Red geográfica distribuida de servidores caché en el borde de Internet que sirve contenidos web pesados con mínima latencia.
*[Smart Cities]: Comunidades urbanas que despliegan tecnologías IoT, conectividad avanzada y analítica de datos para gobernar con eficiencia energética el transporte y los servicios públicos.
*[Mindset]: Actitud cultural y disposición mental compartida necesaria en las plantillas para afrontar con éxito la transformación organizativa y técnica.
*[Squads]: Células de trabajo autónomas, ágiles y multidisciplinares organizadas en torno al desarrollo y mantenimiento continuo de un módulo o producto específico.
*[CEO]: Chief Executive Officer. Director general o consejero delegado; máxima autoridad ejecutiva al mando del rumbo estratégico de una corporación.
*[CFO]: Chief Financial Officer. Director financiero encargado del equilibrio contable, presupuestación y control de riesgos de liquidez e inversiones de la empresa.
*[CTO]: Chief Technology Officer. Director técnico responsable de la estrategia tecnológica, ingeniería, adopción de infraestructura e innovación del sistema.
*[CDO]: Chief Data Officer. Director de datos enfocado en la gobernanza, seguridad, análisis y monetización de los activos de datos corporativos.
*[CPO]: Chief Product Officer. Director de producto responsable de la definición estratégica, diseño, experiencia y ciclo de vida de los productos digitales.
*[CRO]: Chief Revenue Officer. Director de ingresos que unifica las áreas de marketing, desarrollo de negocio y ventas para optimizar la captación económica.
*[CMO]: Chief Marketing Officer. Director de marketing al mando de las campañas de publicidad, adquisición de usuarios, comunicación y posicionamiento de marca.
*[COO]: Chief Operating Officer. Director de operaciones que supervisa el día a día operativo, los procedimientos internos y la logística empresarial.
*[CX]: Customer Experience. Estrategia y métricas centradas en evaluar la satisfacción y la percepción global del usuario a lo largo de todos sus puntos de contacto con la organización.
*[DLT]: Distributed Ledger Technology. Tecnología de registro distribuido que permite almacenar y compartir transacciones de forma consensuada en redes descentralizadas.
*[SIEM]: Security Information and Event Management. Sistema que recopila, correlaciona y analiza eventos de seguridad y registros para detectar anomalías y ciberamenazas.
*[MongoDB]: Sistema de gestión de bases de datos NoSQL líder orientado a documentos en formato BSON/JSON sin esquemas rígidos.
*[Redis]: Base de datos NoSQL en memoria RAM estructurada en clave-valor, empleada comúnmente para almacenamiento en caché y gestión de sesiones de baja latencia.
*[KPI]: Key Performance Indicator. Indicador clave de rendimiento utilizado para monitorizar, evaluar y cuantificar el éxito de las acciones y procesos en una organización.
*[PVD]: Pantallas de Visualización de Datos. Dispositivos con pantallas que proyectan textos o gráficos cuyo uso prolongado requiere medidas ergonómicas específicas.
*[RAEE]: Residuos de Aparatos Eléctricos y Electrónicos. Equipos informáticos y periféricos que alcanzan el final de su ciclo de vida y requieren tratamiento selectivo.
*[Astenopía]: Fatiga o cansancio ocular derivado del esfuerzo visual prolongado sobre pantallas o condiciones deficientes de iluminación.
*[80 PLUS]: Certificación voluntaria que acredita que una fuente de alimentación mantiene una eficiencia energética superior al 80% bajo diferentes regímenes de carga.
*[MOSFET]: Metal-Oxide-Semiconductor Field-Effect Transistor. Transistor semiconductor empleado en la electrónica digital y etapas de potencia, extremadamente sensible a daños por descargas electrostáticas.
*[LGA]: Land Grid Array. Tipo de zócalo para procesadores donde la matriz de pines de contacto se sitúa en la placa base y el microprocesador presenta contactos planos dorados.
*[PGA]: Pin Grid Array. Formato de encapsulado donde el procesador cuenta con los pines metálicos sobresaliendo de su base para insertarse en los orificios del zócalo.
*[DIMM]: Dual In-line Memory Module. Módulo de memoria RAM con contactos eléctricos independientes en ambos lados de la placa de circuito impreso.
*[EBP]: Earth Bonding Point. Punto común de conexión a tierra en estaciones de trabajo técnicas para equiparar el potencial de pulseras, tapetes y equipos.
*[I/O Shield]: Chapa metálica troquelada que se encaja en la parte trasera del chasis para proteger, aislar y rodear los puertos de entrada/salida integrados en la placa base.
*[PSU Shroud]: Carenado o cubierta metálica inferior del chasis diseñada para ocultar la fuente de alimentación y los cables sobrantes, separando su flujo térmico del resto de componentes.
*[Low Profile]: Perfil bajo. Tarjetas de expansión o disipadores diseñados con menor altura para encajar en chasis estrechos o de formato reducido como Mini ITX o sobremesa.
*[HTPC]: Home Theater Personal Computer. Ordenador personal de formato compacto y bajo nivel sonoro configurado para reproducir contenido multimedia en salas de estar.
*[SFX]: Factor de forma estandarizado para fuentes de alimentación compactas destinadas a chasis de reducidas dimensiones y cajas Mini ITX.
*[Jumper]: Pequeño puente conductor extraíble cubierto de plástico utilizado para cerrar un circuito eléctrico y configurar parámetros físicos en una placa base.
*[IHS]: Integrated Heat Spreader. Placa metálica superior de cobre niquelado soldada o pegada al encapsulado de la CPU que protege el chip de silicio y reparte el calor hacia el disipador.
*[QVL]: Qualified Vendor List. Lista oficial de compatibilidad publicada por el fabricante de la placa base que certifica procesadores y módulos de memoria RAM evaluados con éxito.
*[CPU_FAN]: Cabezal de alimentación de 3 o 4 pines PWM en la placa base destinado a controlar y monitorizar las revoluciones del ventilador del disipador de la CPU.
*[SYS_FAN]: Conector en la placa base para alimentar y regular los ventiladores auxiliares del chasis del equipo.
*[ZIF]: Zero Insertion Force. Tipo de zócalo concebido para insertar o retirar circuitos integrados (como el microprocesador) sin ejercer ninguna resistencia mecánica.
*[PCB]: Printed Circuit Board. Placa de circuito impreso compuesta por capas laminadas de fibra de vidrio y pistas de cobre conductoras que interconectan componentes.
*[Backplate]: Placa metálica o plástica de refuerzo situada detrás de la placa base para distribuir el peso y la tensión de montaje de disipadores pesados.
*[12VHPWR]: Conector de alimentación PCIe de alta potencia de 16 pines capaz de suministrar hasta 600 vatios a tarjetas gráficas de última generación.
*[Speaker]: Pequeño zumbador o altavoz piezoeléctrico conectado a la placa base para emitir los códigos acústicos de diagnóstico durante el test POST.
*[Bootstrap Loader]: Pequeño programa cargador en la ROM que localiza y transfiere la ejecución al gestor de arranque en el primer sector de almacenamiento.
*[GRUB]: Grand Unified Bootloader. Gestor de arranque multietapa utilizado por defecto en distribuciones GNU/Linux con soporte multiarranque.
*[TPM]: Trusted Platform Module. Criptoprocesador seguro integrado en la placa base para almacenar claves de cifrado y validar la integridad del hardware.
*[PXE]: Preboot Execution Environment. Entorno de arranque que permite inicializar e instalar sistemas operativos a través de la red local sin medios físicos locales.
*[AIO]: All-In-One. Sistema sellado y premontado de fábrica de refrigeración líquida que integra bloque, bomba, tuberías y radiador sin requerir rellenado de líquido.
*[ARGB]: Addressable RGB. Sistema de iluminación LED donde cada diodo puede controlarse individualmente en color y brillo mediante una señal digital de +5V.
*[SO-DIMM]: Small Outline Dual In-line Memory Module. Formato compacto de módulo de memoria RAM empleado en ordenadores portátiles, barebones y placas Mini ITX.
*[SoC]: System on a Chip. Circuito integrado que agrupa en un único microchip la CPU, GPU, memoria y controladores de entrada/salida.
*[GPS]: Global Positioning System. Sistema de radionavegación por satélite que proporciona geolocalización y sincronización horaria en cualquier parte del planeta.
*[CAU]: Centro de Atención al Usuario. Servicio centralizado de primer nivel (Helpdesk) encargado de recepcionar, registrar, clasificar y canalizar incidencias y consultas informáticas.
*[SAT]: Servicio de Asistencia Técnica. Departamento técnico cualificado responsable de diagnosticar, reparar y poner a punto el hardware y equipamiento averiado.
*[BSOD]: Blue Screen of Death. Pantalla azul de error crítico en entornos Windows que bloquea el sistema ante un fallo irrecuperable de hardware o controladores del kernel.
*[BGA]: Ball Grid Array. Encapsulado donde los chips se unen directamente a la placa base mediante una matriz inferior de diminutas esferas de estaño soldadas, impidiendo su sustitución sencilla.
