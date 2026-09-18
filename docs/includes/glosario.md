*[Von Neumann]: Modelo de arquitectura de ordenadores que organiza el sistema en CPU (Unidad de Control + ALU), Memoria Principal y Periféricos de Entrada/Salida interconectados por buses.
*[Modelo de Von Neumann]: Modelo de arquitectura de ordenadores que organiza el sistema en CPU (Unidad de Control + ALU), Memoria Principal y Periféricos de Entrada/Salida interconectados por buses.
*[CPU]: Central Processing Unit. Unidad Central de Proceso encargada de ejecutar las instrucciones de los programas y procesar datos.
*[Unidad de Control]: Componente de la CPU que interpreta y gestiona las instrucciones del sistema dirigiendo el flujo de datos.
*[ALU]: Arithmetic Logic Unit. Unidad Aritmético-Lógica encargada de realizar las operaciones matemáticas y lógicas en la CPU.
*[RAM]: Random Access Memory. Memoria principal de lectura y escritura, de carácter volátil, que almacena temporalmente los datos e instrucciones en uso.
*[ROM]: Read Only Memory. Memoria no volátil de solo lectura que almacena de forma permanente el firmware del sistema (BIOS/UEFI).
*[BIOS]: Basic Input-Output System. Firmware grabado en la memoria ROM que comprueba el hardware inicial (POST) e inicia el proceso de arranque del sistema.
*[UEFI]: Unified Extensible Firmware Interface. Evolución moderna de la BIOS que soporta discos > 2TB (GPT), interfaz gráfica y arranque seguro.
*[POST]: Power-On Self-Test. Chequeo inicial de diagnóstico que realiza la BIOS/UEFI al encender el equipo para verificar el estado de la memoria, CPU y componentes.
*[CMOS]: Complementary Metal Oxide Semiconductor. Memoria de bajo consumo alimentada por una pila CR2032 que guarda la configuración del sistema, fecha y hora.
*[Placa Base]: Circuito impreso principal (PCB) del equipo donde se conectan físicamente la CPU, memoria, almacenamiento y tarjetas de expansión.
*[Chipset]: Conjunto de circuitos integrados en la placa base que gestiona la comunicación entre el procesador y los periféricos (Northbridge/Southbridge o PCH).
*[Northbridge]: Puente Norte. Antiguo chip del chipset que gestionaba componentes de alta velocidad como la memoria RAM y la tarjeta gráfica.
*[Southbridge]: Puente Sur. Antiguo chip del chipset que gestionaba las conexiones de Entrada/Salida más lentas (USB, SATA, audio, PCI).
*[PCH]: Platform Controller Hub. Chipset moderno que asume las funciones del antiguo Southbridge tras integrarse el Northbridge en la CPU.
*[Polímetro]: O multímetro. Instrumento de medición eléctrica que permite medir voltajes (V), intensidades (A) y resistencias (Ω).
*[Multímetro]: O polímetro. Instrumento de medición eléctrica que permite medir voltajes (V), intensidades (A) y resistencias (Ω).
*[Voltímetro]: Instrumento para medir la diferencia de potencial (tensión) entre dos puntos. Se conecta siempre en paralelo.
*[Amperímetro]: Instrumento para medir la cantidad de corriente (intensidad) que circula por un circuito. Se conecta siempre en serie.
*[SAI]: Sistema de Alimentación Ininterrumpida (UPS). Dispositivo con baterías que suministra corriente eléctrica continua en caso de apagón o anomalía en la red.
*[UPS]: Uninterruptible Power Supply. Nombre en inglés para el Sistema de Alimentación Ininterrumpida (SAI).
*[Fuente de Alimentación]: Dispositivo encargado de transformar la corriente alterna de la red (230V AC) en corriente continua (DC) estabilizada para el ordenador.
*[Diodos]: Componentes semiconductores que conducen la corriente en un solo sentido, utilizados en el bloque rectificador de la fuente de alimentación.
*[Diodo]: Componente semiconductor que conduce la corriente en un solo sentido, utilizado en el bloque rectificador de la fuente de alimentación.
*[Condensadores]: Componentes pasivos capaces de almacenar y liberar energía eléctrica, utilizados en el bloque de filtrado de la fuente de alimentación.
*[Condensador]: Componente pasivo capaz de almacenar y liberar energía eléctrica, utilizado en el bloque de filtrado de la fuente de alimentación.
*[Dual Channel]: Tecnología del controlador de memoria que permite acceder simultáneamente a dos módulos de RAM aumentando el ancho de banda a 128 bits.
*[FSB]: Front Side Bus. Frecuencia del bus externo con el que se comunica el microprocesador con la placa base.
*[SSD]: Solid State Drive. Unidad de almacenamiento masivo secundario basada en chips de memoria flash EEPROM no volátiles.
*[HDD]: Hard Disk Drive. Disco duro mecánico magnético compuesto por platos giratorios, cabezales y sectores.
*[Driver]: O controlador. Software facilitado por el fabricante que permite al Sistema Operativo comunicarse con un componente de hardware.
*[Controlador]: O driver. Software facilitado por el fabricante que permite al Sistema Operativo comunicarse con un componente de hardware.
*[NIC]: Network Interface Card. Tarjeta de interfaz de red que permite conectar el equipo a una red LAN o WAN mediante un conector RJ45 o Wi-Fi.
*[Dirección MAC]: Media Access Control. Identificador físico único de 48 bits grabado en fábrica en el chip de cada tarjeta de red.
*[GPU]: Graphics Processing Unit. Procesador dedicado al cálculo y renderizado paralelo de gráficos 2D y 3D.
*[VRAM]: Video Random Access Memory. Memoria dedicada ultrarrápida integrada en las tarjetas gráficas independientes.
*[Thermal Throttling]: Mecanismo de protección del procesador que reduce automáticamente su frecuencia de trabajo para bajar la temperatura si supera los límites térmicos.
*[Kernel]: Núcleo del Sistema Operativo. Componente central en contacto directo con el hardware responsable de la gestión de memoria, procesos y recursos.
*[Shell]: Intérprete de comandos. Entorno o interfaz encargada de traducir las órdenes del usuario (GUI o CLI) a llamadas del Kernel.
*[SISD]: Single Instruction, Single Data. Arquitectura de computación secuencial tradicional de una instrucción sobre un solo dato.
*[SIMD]: Single Instruction, Multiple Data. Arquitectura donde una misma instrucción opera sobre múltiples datos vectoriales simultáneamente (usado en GPU).
*[MISD]: Multiple Instruction, Single Data. Arquitectura donde múltiples instrucciones se aplican sobre un único flujo de datos (usado en redundancia).
*[MIMD]: Multiple Instruction, Multiple Data. Arquitectura multiprocesador donde múltiples núcleos ejecutan instrucciones distintas sobre datos diferentes.
*[SRAM]: Static RAM. Memoria RAM estática ultrarrápida de baja capacidad que no requiere refresco eléctrico (usada en memorias caché).
*[DRAM]: Dynamic RAM. Memoria RAM dinámica utilizada como memoria principal que requiere un ciclo continuo de refresco eléctrico.
*[Firmware]: Software de bajo nivel grabado en memorias ROM/Flash que controla directamente el funcionamiento físico del hardware.
*[BootLoader]: Cargador de arranque. Programa ejecutado por el firmware (BIOS/UEFI) encargado de localizar y cargar el Kernel del Sistema Operativo en RAM.
*[Secure Boot]: Arranque seguro de UEFI. Mecanismo de seguridad que bloquea la ejecución de cargadores de arranque y drivers sin firma digital válida.
*[Núcleo Monolítico]: Arquitectura de Kernel donde absolutamente todos los servicios del SO (drivers, memoria, archivos) se ejecutan dentro del espacio del núcleo.
*[Micronúcleo]: O Microkernel. Arquitectura donde el núcleo se reduce a las funciones mínimas y el resto de servicios corren como módulos en espacio de usuario.
*[Microkernel]: O Micronúcleo. Arquitectura de Kernel reducida al mínimo indispensable para maximizar la estabilidad y modularidad.
*[Núcleo Híbrido]: Arquitectura de SO que combina la estructura modular de un micronúcleo con la ejecución de servicios clave en espacio de Kernel.
*[Exonúcleo]: O Exokernel. Arquitectura de Kernel extremadamente ligera que solo gestiona la protección y asignación básica de hardware.
*[CLI]: Command Line Interface. Interfaz de línea de comandos donde el usuario interactúa con el sistema introduciendo comandos de texto.
*[GUI]: Graphical User Interface. Interfaz gráfica de usuario basada en elementos visuales (ventanas, iconos, menús) interactivos mediante ratón o táctil.
*[Proceso]: Programa o conjunto de instrucciones en ejecución activa dentro de la memoria RAM con recursos asignados por el SO.
*[Memoria Virtual]: Espacio reservado en el disco masivo (fichero de paginación) utilizado por el SO cuando la memoria RAM física se agota.
*[ACID]: Atomicidad, Consistencia, Aislamiento y Durabilidad. Conjunto de 4 propiedades estrictas requeridas para garantizar la integridad en sistemas transaccionales.
*[Workstations]: Estaciones de trabajo. Computadoras de alto rendimiento optimizadas para desarrollo, diseño técnico y cálculo intensivo.
*[Thin Clients]: Terminales ligeros. Equipos informáticos con hardware básico que dependen totalmente de un servidor central para procesar y ejecutar programas.
*[MBR]: Master Boot Record. Antiguo esquema de particionado de discos limitado a 4 particiones primarias y 2 TB de capacidad.
*[GPT]: GUID Partition Table. Esquema moderno de particionado de discos asociado a UEFI que permite particiones > 2 TB y mayor redundancia.
*[Dirección MAC]: Media Access Control. Identificador físico único de 48 bits grabado en fábrica en el chip de cada tarjeta de red.
*[GPU]: Graphics Processing Unit. Procesador dedicado al cálculo y renderizado paralelo de gráficos 2D y 3D.
*[VRAM]: Video Random Access Memory. Memoria dedicada ultrarrápida integrada en las tarjetas gráficas independientes.
*[Thermal Throttling]: Mecanismo de protección del procesador que reduce automáticamente su frecuencia de trabajo para bajar la temperatura si supera los límites térmicos.
*[Cuello de Botella de Von Neumann]: Limitación de rendimiento en la arquitectura Von Neumann causada por compartir el mismo bus para transferir datos e instrucciones entre la CPU y la memoria.
*[LSB]: Least Significant Bit. Bit menos significativo situado más a la derecha en una secuencia de bits, con peso posicional de 2^0 = 1.
*[MSB]: Most Significant Bit. Bit más significativo situado más a la izquierda en una secuencia de bits, con peso posicional de 2^7 = 128 en un octeto.
*[Palabra]: Conjunto de n bits (habitualmente 32 o 64 bits) que el procesador maneja de forma simultánea de forma nativa.
*[Freeware]: Software distribuido gratuitamente cuyo código fuente sigue perteneciendo de forma privada al desarrollador.
*[Shareware]: Modelo de distribución que permite probar un programa de forma limitada en tiempo o funciones antes de adquirir la licencia.
*[TFN]: Teorema Fundamental de la Numeración. Fórmula matemática para calcular el valor decimal de cualquier número expresado en un sistema posicional.
*[NTFS]: New Technology File System. Sistema de archivos por defecto en Windows que aporta permisos, cifrado, compresión y tolerancia a fallos.
*[APFS]: Apple File System. Sistema de archivos optimizado para unidades SSD utilizado por defecto en macOS e iOS.
*[AOSP]: Android Open Source Project. Proyecto de código abierto liderado por Google que constituye la base libre del sistema Android.
*[Windows Server 2025]: Sistema operativo para servidores de Microsoft perteneciente al canal LTSC de soporte a largo plazo.
