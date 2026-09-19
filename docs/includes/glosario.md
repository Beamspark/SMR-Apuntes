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
*[Hipervisor]: O Virtual Machine Monitor (VMM). Software que gestiona, asigna y aisla los recursos físicos entre las distintas máquinas virtuales.
*[Virtual Machine Monitor]: O Hipervisor. Software encargado de virtualizar el hardware y coordinar las máquinas virtuales.
*[VMM]: Virtual Machine Monitor. Término técnico para definir el software hipervisor de virtualización.
*[Bare Metal]: Hipervisor de Tipo 1 que se instala directamente sobre el hardware físico sin necesidad de un sistema operativo anfitrión.
*[Host]: Sistema operativo anfitrión instalado directamente en el disco duro de la máquina real sobre el cual se ejecuta el hipervisor.
*[Guest]: Sistema operativo invitado instalado dentro de una máquina virtual.
*[Guest Additions]: Paquete de controladores y utilidades de optimización que se instalan dentro del SO invitado en VirtualBox.
*[VMware Tools]: Paquete de controladores y utilidades de integración que se instalan dentro del SO invitado en entornos VMware.
*[Snapshot]: Instantánea. Guardado del estado exacto de una máquina virtual en un instante concreto para poder restaurarla si ocurren fallos.
*[Adaptador Puente]: Modo de red (Bridged) en el que la máquina virtual obtiene su propia dirección IP en la red física real.
*[Intel VT-x]: Tecnología de virtualización asistida por hardware integrada en los procesadores Intel.
*[AMD-V]: Tecnología de virtualización asistida por hardware integrada en los procesadores AMD.
*[NTFS]: New Technology File System. Sistema de archivos por defecto en Windows que aporta permisos, cifrado, compresión y tolerancia a fallos.
*[APFS]: Apple File System. Sistema de archivos optimizado para unidades SSD utilizado por defecto en macOS e iOS.
*[AOSP]: Android Open Source Project. Proyecto de código abierto liderado por Google que constituye la base libre del sistema Android.
*[Windows Server 2025]: Sistema operativo para servidores de Microsoft perteneciente al canal LTSC de soporte a largo plazo.
*[BCP]: Bloque de Control de Procesos. Estructura de datos creada por el sistema operativo para gestionar la prioridad, PID y estado de cada proceso.
*[PCB]: Process Control Block. Nombre en inglés del Bloque de Control de Procesos (BCP).
*[PID]: Process Identifier. Identificador numérico único asignado por el sistema operativo a cada proceso activo.
*[SRTF]: Shortest Remaining Time First. Algoritmo de planificación de procesos expulsivo que ejecuta el proceso con menor tiempo restante.
*[System Call]: Llamada al sistema. Solicitud realizada por una aplicación en modo usuario para solicitar un servicio o recurso al Kernel.
*[Journaling]: Técnica en sistemas de archivos que registra las transacciones en un diario antes de escribirlas para garantizar la recuperación de datos tras un fallo.
*[ESP]: EFI System Partition. Partición en formato FAT32 utilizada por UEFI para almacenar el gestor de arranque y los controladores del sistema.
*[Secure Boot]: Mecanismo de seguridad en UEFI que comprueba las firmas digitales del gestor de arranque para evitar el inicio de malware de bajo nivel.
*[sfc]: System File Checker. Herramienta de comandos en Windows para analizar y reparar archivos del sistema corruptos.
*[FCFS]: First Come, First Served. Nombre alternativo para el algoritmo de planificación de procesos FIFO.
*[FIFO]: First In, First Out. Algoritmo de planificación de procesos no expulsivo que ejecuta los procesos por estricto orden de llegada.
*[SJF]: Shortest Job First. Algoritmo de planificación de procesos no expulsivo que selecciona el proceso con menor tiempo de ejecución estimado.
*[Swap]: Memoria de intercambio. Área del almacenamiento secundario reservada para actuar como extensión de la memoria RAM física.
*[Paginación]: Técnica de gestión de memoria que divide la RAM en bloques fijos (marcos) y los programas en páginas del mismo tamaño.
*[Segmentación]: Técnica de gestión de memoria que divide los programas en bloques de tamaño variable (segmentos) según su función lógica.
*[Fragmentación Interna]: Espacio inutilizado dentro de un bloque fijo asignado a un programa en un sistema de paginación.
*[Fragmentación Externa]: Huecos libres discontinuos dispersos por la RAM que impiden cargar un proceso aunque la memoria libre total sea suficiente.
*[WIMP]: Windows, Icons, Menus, Pointer. Modelo estándar de interfaz gráfica de usuario compuesto por ventanas, iconos, menús y puntero.
*[System Call]: Llamada al sistema. Petición que realiza una aplicación en modo usuario al Kernel para solicitar el acceso a un recurso de hardware.
*[Prompt]: Indicador visual de texto en una consola CLI que señala que el sistema está listo para recibir un comando.
*[Prompt de Comandos]: Indicador de texto en consola que marca la línea de entrada para las órdenes del usuario.
*[hiberfil.sys]: Archivo oculto del sistema en Windows utilizado para guardar el estado de la RAM durante la hibernación o el Inicio Rápido.
*[WinRE]: Windows Recovery Environment. Entorno de recuperación integrado en Windows para solucionar problemas de arranque o restaurar el sistema.
*[Recovery Mode]: Modo de recuperación en sistemas GNU/Linux para realizar tareas de mantenimiento, reparación de discos y diagnósticos de arranque.
*[Fast Startup]: Inicio Rápido. Función híbrida de Windows que combina el cierre de sesión de usuario con la hibernación del Kernel para agilizar el arranque.
*[cron]: Servicio demonio en sistemas Linux encargada de ejecutar comandos o scripts programados en segundo plano.
*[crontab]: Archivo de configuración en Linux que almacena la tabla de tareas programadas gestionadas por el servicio cron.
*[APT]: Advanced Package Tool. Gestor de paquetes nativo de distribuciones basadas en Debian/Ubuntu para instalar, actualizar y eliminar software desde terminal.
*[7Z]: Formato de archivo comprimido de código abierto que ofrece elevados índices de compresión utilizando el compresor 7-Zip.
*[lusrmgr.msc]: Consola de administración de usuarios y grupos locales en Windows.
*[services.msc]: Consola gráfica de gestión de servicios en Windows.
*[eventvwr.msc]: Visor de eventos de Windows para consultar registros (logs) del sistema.
*[regedit]: Editor del Registro de Windows para acceder a la base de datos de configuración.
*[systemctl]: Comando principal en sistemas Linux con systemd para gestionar el estado y arranque de servicios.
*[systemd]: Sistema de inicialización y administrador de servicios estándar en distribuciones Linux modernas como Ubuntu.
*[TRIM]: Comando de mantenimiento para SSDs que comunica los bloques de datos liberados para su limpieza en segundo plano.
*[HKLM]: HKEY_LOCAL_MACHINE. Rama del Registro de Windows que guarda la configuración global del equipo y hardware.
*[HKCU]: HKEY_CURRENT_USER. Rama del Registro de Windows que almacena las preferencias del usuario con sesión activa.
*[HKCR]: HKEY_CLASSES_ROOT. Rama del Registro de Windows que almacena asociaciones de tipos de archivos y aplicaciones.
*[HKU]: HKEY_USERS. Rama del Registro de Windows que contiene los perfiles de todos los usuarios del sistema.
*[HKCC]: HKEY_CURRENT_CONFIG. Rama del Registro de Windows que guarda la configuración temporal del perfil de hardware actual.
*[Yacimiento de Ocupación]: Oportunidad de empleo surgida para satisfacer nuevas necesidades sociales no cubiertas por el mercado laboral.
*[OPE]: Oferta Pública de Empleo. Convocatoria oficial y transparente de Administraciones Públicas para cubrir plazas vacantes en el sector público.
*[CNCP]: Catálogo Nacional de Cualificaciones Profesionales. Instrumento oficial que organiza las cualificaciones por niveles y familias profesionales en España.
*[INCUAL]: Instituto Nacional de las Cualificaciones. Organismo responsable de definir, elaborar y mantener actualizado el CNCP.
*[Unidad de Competencia]: Agrupación mínima de competencias profesionales susceptible de reconocimiento y acreditación parcial oficial.
*[Módulo Formativo]: Bloque de formación asociado a una unidad de competencia del CNCP para adquirir sus habilidades teóricas y prácticas.
*[Soft Skills]: Habilidades blandas. Capacidades personales y sociales como el trabajo en equipo, la comunicación, la resiliencia y la empatía.
*[Hard Skills]: Habilidades duras o técnicas. Conocimientos teóricos y procedimentales específicos necesarios para desempeñar un puesto.
*[Resiliencia]: Capacidad de sobreponerse a situaciones adversas o cambios inesperados en el entorno laboral y personal.
*[LPRL]: Ley de Prevención de Riesgos Laborales (Ley 31/1995). Marco normativo legal básico sobre seguridad en España.
*[EPI]: Equipo de Protección Individual. Cualquier equipo destinado a ser llevado o sujetado por el trabajador para protegerle de riesgos.
*[INSST]: Instituto Nacional de Seguridad y Salud en el Trabajo. Órgano científico-técnico de la Administración General del Estado.
*[EU-OSHA]: Agencia Europea para la Seguridad y la Salud en el Trabajo. Organismo de la UE con sede en Bilbao.
*[ITSS]: Inspección de Trabajo y Seguridad Social. Organismo encargado de vigilar y exigir el cumplimiento de las normas laborales y de PRL.
*[PAS]: Proteger, Avisar, Socorrer. Protocolo secuencial de actuación básico ante emergencias y accidentes.
*[PLS]: Posición Lateral de Seguridad. Postura de primeros auxilios para mantener libre la vía aérea en personas inconscientes que respiran.
*[SVB]: Soporte Vital Básico. Conjunto de maniobras esenciales para mantener la oxigenación de los órganos vitales en parada cardiorrespiratoria.
*[RCP]: Reanimación Cardiopulmonar. Técnica de emergencia que combina compresiones torácicas e insuflaciones de rescate.
*[Mobbing]: Acoso psicológico continuo e intencionado en el ámbito laboral para desestabilizar a un trabajador.
*[Burnout]: Síndrome del trabajador quemado. Estado de agotamiento físico y mental crónico producido por el estrés laboral.
*[Boreout]: Síndrome del aburrimiento laboral extremo por falta de tareas o estancamiento profesional.
*[ET]: Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015). Texto legal básico que regula los derechos, deberes y condiciones laborales en España.
*[Estatuto de los Trabajadores]: Real Decreto Legislativo 2/2015. Texto legal marco que regula la relación laboral entre personas trabajadoras y empresas.
*[Notas de Laboralidad]: Las 5 características obligatorias que definen una relación laboral sujeta al ET: voluntariedad, ajenidad, dependencia, remuneración y carácter personal.
*[Ajenidad]: Nota de laboralidad según la cual los frutos del trabajo y los riesgos de la actividad pertenecen al empresario y no al trabajador.
*[Sinalagmático]: Contrato en el que ambas partes se obligan recíprocamente a realizar una prestación (trabajo a cambio de salario).
*[Ius Variandi]: Facultad del empresario para modificar unilateralmente las condiciones de trabajo por razones organizativas, técnicas o productivas dentro de los límites legales.
*[FOGASA]: Fondo de Garantía Salarial. Organismo público dependiente del Ministerio de Trabajo que abona salarios e indemnizaciones pendientes por insolvencia o concurso de acreedores de la empresa.
*[SMI]: Salario Mínimo Interprofesional. Cuantía mínima retributiva que percibe la persona trabajadora por la jornada legal de trabajo, fijada anualmente por el Gobierno y de carácter inembargable.
*[SMAC]: Servicio de Mediación, Arbitraje y Conciliación. Organismo ante el que se tramita la papeleta de conciliación previa a la vía judicial laboral.
*[LOLS]: Ley Orgánica de Libertad Sindical (Ley Orgánica 11/1985). Regula el derecho de los trabajadores a fundar, afiliarse y estructurar sindicatos.
*[Comité de Empresa]: Órgano representativo colegiado del conjunto de los trabajadores en centros de trabajo con 50 o más empleados.
*[Delegados de Personal]: Representantes unitarios de los trabajadores en empresas o centros de trabajo de entre 10 y 49 empleados (u opcionalmente de 6 a 9).
*[Convenio Colectivo]: Pacto vinculante negociado entre representantes de trabajadores y empresarios que regula las condiciones de trabajo y productividad en un sector o empresa.
*[Secciones Sindicales]: Agrupaciones de personas trabajadoras afiliadas a un mismo sindicato dentro de una empresa.
*[MSCT]: Modificación Sustancial de las Condiciones de Trabajo. Cambio relevante aplicado por la empresa en jornada, horario, turno o sistema de remuneración (Art. 41 ET).
*[ERE]: Expediente de Regulación de Empleo. Procedimiento legal para tramitar el despido colectivo por causas económicas, técnicas, organizativas o de producción.
*[ERTE]: Expediente de Regulación Temporal de Empleo. Medida temporal de suspensión del contrato o reducción de jornada por causas justificadas sin extinción de la relación laboral.
*[TGSS]: Tesorería General de la Seguridad Social. Unificación financiera del sistema encargada de las inscripciones, afiliaciones, altas, bajas y recaudación de cuotas.
*[Base Reguladora]: Cuantía económica calculada en función de las cotizaciones previas que determina el importe final de las prestaciones de la Seguridad Social.
*[BR]: Base Reguladora. Cuantía económica calculada a partir de las cotizaciones previas sobre la que se aplica el porcentaje de la prestación.
*[SEPE]: Servicio Público de Empleo Estatal. Organismo encargado de la gestión de las políticas activas de empleo y las prestaciones por desempleo.
*[OPE]: Oferta de Empleo Público. Convocatoria oficial de plazas vacantes para el acceso a la Función Pública en la Administración.
*[IT]: Incapacidad Temporal. Situación de baja médica provocada por enfermedad o accidente que imposibilita de forma transitoria la prestación laboral.
*[RETA]: Régimen Especial de Trabajadores Autónomos. Sistema de cotización de la Seguridad Social aplicable a las personas que trabajan por cuenta propia.
