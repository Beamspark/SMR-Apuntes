<h1 style="color: #ab47bc;">📌 Repaso General — Conceptos Clave de Montaje y Mantenimiento</h1>

Este documento recopila de forma sintética, jerarquizada y directa los fundamentos técnicos esenciales de todo el módulo de **Montaje y Mantenimiento de Equipos**, ideal para repaso rápido y consolidación conceptual previa a evaluaciones.

---

<h2 style="color: #29b6f6;">⚡ 1. Parámetros Eléctricos y Fuentes de Alimentación</h2>

* **Tipos de Señales:**
    * **Analógicas:** Varían de manera continua en el tiempo.
    * **Digitales:** Adoptan niveles de tensión discretos y definidos correspondientes a estados binarios ($0$ y $1$).
    * **Dominios de análisis:** Dominio del tiempo (amplitud, frecuencia y desfase) y dominio de la frecuencia (análisis armónico mediante series de Fourier).
* **Magnitudes Fundamentales:**
    * **Carga eléctrica ($Q$):** Expresada en culombios ($1\text{ C} \approx 6{,}3 \cdot 10^{18}\text{ e}^-$).
    * **Diferencia de potencial / Tensión ($V$):** Medida en voltios ($\text{V}$).
    * **Intensidad de corriente ($I$):** Flujo de carga medido en amperios ($\text{A}$). **Ley de Ohm:** $I = \frac{V}{R}$. El amperímetro se conecta obligatoriamente en **serie**.
    * **Resistencia ($R$):** Oposición al flujo electrónico medida en ohmios ($\Omega$). El ohmímetro exige medir **sin tensión** en el circuito.
    * **Potencia activa ($P$):** Energía transferida por unidad de tiempo, calculada como $P = V \cdot I$ y medida en vatios ($\text{W}$).
* **Tipos de Corriente:** Corriente Continua (**DC**, flujo unidireccional de electrones) y Corriente Alterna (**AC**, inversión periódica de polaridad).

### Etapas de la Fuente de Alimentación Lineal / Conmutada
1. **Transformador:** Reduce la tensión alterna de entrada ($230\text{ V AC}$) mediante acoplamiento inductivo entre devanado primario y secundario.
2. **Rectificador:** Convierte la corriente alterna en continua pulsante positiva (media onda con un diodo; onda completa con puente de Graetz).
3. **Filtro:** Condensadores electrolíticos que aplanan el rizado de la tensión.
4. **Regulador:** Circuito integrado que mantiene la tensión de salida continua estrictamente estabilizada ante variaciones de carga.
* **Eficiencia Energética:** Relación entre la potencia entregada a los componentes y la potencia absorbida de la red; un estándar aceptable exige $\ge 80\%$ (certificaciones *80 PLUS*).

### Sistemas de Alimentación Ininterrumpida (SAI / UPS)
* **Protección activa:** Salvaguarda contra apagones (*blackouts*), microcortes, subtensiones, sobretensiones transitorias y ruido de red.
* **Bloques internos:** Batería interna (acumulador plomo-ácido de $12\text{ V}$), cargador/rectificador, conversor, inversor (de DC a AC senoidal) y conmutador de transferencia.
* **Tipos según topología:**
    * **Standby / Offline:** Pasivo; conmuta a batería solo tras el corte eléctrico (tiempo de transferencia de milisegundos).
    * **Line-Interactive (In-line):** Incorpora un autotransformador regulador (**AVR**) que compensa fluctuaciones de tensión sin descargar batería.
    * **Online (Doble Conversión):** Regenera continuamente la señal pasando de AC a DC y de nuevo a AC; tiempo de transferencia nulo ($0\text{ ms}$).
* **Puertos de comunicación:** Conexión de datos (USB/RS-232) enlazada al software gestor del sistema operativo para ordenar el apagado seguro (*graceful shutdown*) o alertar de batería crítica.

---

<h2 style="color: #29b6f6;">🔒 2. Seguridad Laboral, Ergonomía y Protección ESD</h2>

* **Marco Legal y Normativo:** Constitución Española (art. 40.2: deber de los poderes públicos de velar por la seguridad e higiene) y Estatuto de los Trabajadores (art. 19: derecho a la integridad física y protección eficaz).
* **Riesgos Eléctricos en el Taller:**
    * **Tensión de red ($230\text{ V}$):** Riesgo crítico de electrocución o fibrilación ventricular por contacto directo o indirecto. Exige desenchufar físicamente la manguera de alimentación antes de intervenir el chasis.
    * **Tensiones internas de la torre ($\pm 5\text{ V}$, $+3{,}3\text{ V}$, $+12\text{ V}$):** Tensiones de seguridad para las personas, pero susceptibles de generar cortocircuitos térmicos que destruyan componentes si caen tornillos o herramientas sobre la placa encendida.
* **Descarga Electrostática (ESD):**
    * Tensión residual generada por fricción que perfora la capa de óxido de transistores y microcircuitos integrados.
    * **Medidas de contención:** Empleo de pulsera antiestática con resistencia de $1\text{ M}\Omega$ conectada a tierra, tapete semiconductor sobre el banco de trabajo y conservación de módulos en bolsas antiestáticas (rosáceas disipativas o plateadas con blindaje tipo jaula de Faraday).
* **Ergonomía frente a Pantallas de Visualización de Datos (PVD):** Borde superior del monitor a la altura de los ojos, distancia visual de $40\text{ a }70\text{ cm}$, ángulo de codos y rodillas a $90^\circ$ y soporte lumbar adaptado.
* **Gestión Medioambiental:** Cumplimiento de la regla de las 3R (Reducir, Reutilizar, Reciclar) y canalización estricta de residuos electrónicos peligrosos (**RAEE**) hacia Puntos Limpios autorizados.

---

<h2 style="color: #29b6f6;">🖥️ 3. Arquitectura del Ordenador y Componentes Internos</h2>

### Arquitectura Von Neumann
Estructura compuesta por la Unidad Central de Proceso (**CPU**, dividida en Unidad de Control y ALU), Memoria Principal, subsistema de Entrada/Salida y Buses de interconexión.

* **Buses del Sistema:**
    * **Bus de Datos:** Bidireccional; transfiere la información entre módulos.
    * **Bus de Direcciones:** Unidireccional; define la celda física de memoria o puerto al que se accede.
    * **Bus de Control:** Señales de sincronismo, lectura/escritura e interrupciones.
    * **Evolución histórica de ranuras:** ISA (obsoleto, paralelo) $\rightarrow$ PCI (paralelo compartido) $\rightarrow$ AGP (puerto dedicado exclusivo para vídeo acelerado) $\rightarrow$ **PCI-Express (PCIe)** (arquitectura punto a punto basada en carriles serie de alto rendimiento $x1, x4, x8, x16$).

### Placa Base (*Motherboard*)
* **Factores de forma:** ATX ($30{,}5 \times 24{,}4\text{ cm}$), Micro ATX ($24{,}4 \times 24{,}4\text{ cm}$), Mini ITX ($17 \times 17\text{ cm}$), DTX y BTX (estándar térmico en desuso).
* **Elementos integrados:**
    * **Zócalo / Socket:** Soporte mecánico y eléctrico para la CPU (formatos **LGA** con pines en placa o **PGA** con pines en microprocesador).
    * **Ranuras DIMM:** Zócalos para módulos de memoria RAM principal.
    * **Ranuras de expansión:** Ranuras PCIe para controladoras y GPU.
    * **Firmware BIOS / UEFI:** Almacenado en chip de memoria Flash no volátil.
    * **Memoria CMOS:** Memoria RAM volátil de bajo consumo que retiene fecha, hora y perfiles del firmware, respaldada permanentemente por la **pila de botón CR2032** ($3\text{ V}$).

### Microprocesador (CPU)
* **Frecuencias de operación:** Reloj interno (velocidad de cómputo del núcleo) y reloj base/externo (**FSB / BCLK**), coordinados mediante el factor multiplicador interno.
* **Jerarquía de memoria caché:** Niveles **L1** (ultrarrápida y dividida en datos/instrucciones), **L2** (dedicada por núcleo) y **L3** (compartida por todos los núcleos del encapsulado).

### Memoria RAM
* **DRAM (Dynamic RAM):** Memoria de celdas basadas en transistor y condensador; requiere refresco cíclico periódico para evitar la pérdida del dato por fugas de carga.
* **SRAM (Static RAM):** Basada en biestables (flip-flops); no requiere refresco, es mucho más veloz y costosa (empleada en cachés).
* **Evolución generacional:** De DDR1 a **DDR5**, doblando en cada salto la tasa de transferencia efectiva por ciclo de reloj y reduciendo el voltaje operativo nominal.

### Tecnologías de Almacenamiento Secundario
* **Discos Duros Magnéticos (HDD):** Platos giratorios, cabezales electromagnéticos levitantes y direccionamiento lógico por bloques (**LBA**) sustituyendo al histórico cilindro-cabeza-sector (**CHS**).
* **Unidades Ópticas:** Grabación y lectura láser. Velocidad base del CD: $1\text{x} = 150\text{ KB/s}$; DVD: $1\text{x} \approx 1{,}38\text{ MB/s}$; Blu-ray (BD): $1\text{x} \approx 4{,}5\text{ MB/s}$.
* **Discos de Estado Sólido (SSD):** Matrices de celdas de silicio semiconductor no volátil (Flash NAND), con tiempos de acceso prácticamente instantáneos, resistencia a golpes y ausencia total de ruido.
* **Discos Híbridos (SSHD):** Combinación de platos magnéticos de alta capacidad con una memoria caché Flash intermedia para archivos de uso frecuente.

### Adaptadores y Tarjetas de Expansión
* **Tarjeta Gráfica Dedicada (GPU):** Integra procesador gráfico especializado y memoria de vídeo dedicada (**VRAM**) para liberar de carga a la RAM del sistema. Salidas: VGA (analógica analógica de 15 pines), HDMI (audio digital + vídeo en alta definición) y DisplayPort.
* **Tarjeta de Sonido:** Procesador DSP, conversores digital-analógico (**DAC**) y analógico-digital (**ADC**), mezclador de canales y tomas Jack de $3{,}5\text{ mm}$ con código de colores normalizado (verde para altavoces frontales/auriculares).
* **Tarjeta de Red (NIC):** Interfaz provista de dirección física única a nivel mundial (**dirección MAC** de 48 bits) para conexión mediante cable par trenzado (**RJ-45**) o enlace inalámbrico Wi-Fi.
* **Controlador (*Driver*):** Software de bajo nivel que permite al sistema operativo comunicarse con las instrucciones específicas del hardware.

---

<h2 style="color: #29b6f6;">🧰 4. Instrumental de Taller, Chasis y Protocolo de Montaje</h2>

### Clasificación de Herramientas
* **Imprescindibles:** Destornillador de estrella (Phillips n.º 1 y 2, imantado), pinzas de precisión, alicates de corte, pulsera antiestática y jeringa de pasta térmica conductora.
* **Recomendadas:** Cinta aislante de PVC, foco o linterna de inspección, bridas de nylon para guiado de cables y polímetro/multímetro digital.

### Estructura de la Caja
Chasis metálico interior (soporte estructural), paneles exteriores de cierre, panel frontal (botonera, leds y puertos de acceso rápido) y bahías para unidades de almacenamiento ($3{,}5''$, $2{,}5''$) y ópticas ($5{,}25''$).

### Secuencia Canónica de Ensamblado Paso a Paso
1. **Acondicionamiento del chasis e I/O Shield:** Encajar a presión la chapa trasera de conexiones en el vano del chasis.
2. **Separadores de latón:** Enroscar obligatoriamente en el chasis los separadores metálicos coincidentes con los taladros reforzados de la placa base para evitar un cortocircuito fatal contra la chapa de la torre.
3. **Microprocesador:** Levantar la palanca de retención del zócalo, alinear el triángulo guía del procesador con el de la placa sin forzar la inserción (sistema ZIF) y cerrar la palanca de anclaje.
4. **Disipador térmico:** Comprobar si incluye almohadilla térmica preaplicada o dispensar una gota homogénea de pasta térmica sobre el procesador. Anclar firmemente en cruz y conectar el conector a la toma **CPU_FAN**.
5. **Memoria RAM:** Abrir pestillos basculantes de las ranuras DIMM prioritarias (Dual Channel), alinear la muesca física descentrada y presionar verticalmente con ambos pulgares hasta oír el chasquido (*clic*).
6. **Fuente de alimentación:** Fijar la fuente mediante sus cuatro tornillos exteriores, conectar el cable ATX de 24 pines y la toma auxiliar EPS/CPU de 12V ($4/8$ pines), y realizar una prueba preliminar de encendido.
7. **Unidades y Expansión:** Instalar discos en bahías fijando cables SATA (datos y corriente) y alojar tarjetas gráficas en ranuras PCIe x16 retirando las pletinas traseras correspondientes.
8. **Conexionado del Panel Frontal (F_PANEL):**
    * **Power_LED** y **HDD_LED:** Indicadores diodo con polaridad estricta ($+$ y $-$).
    * **Power_sw** y **Reset:** Interruptores pulsadores simples sin polaridad.
    * Enlace de cabezales **F_USB** y **F_Audio** (HD Audio).

---

<h2 style="color: #29b6f6;">🚀 5. Puesta en Marcha, Diagnóstico POST y Nuevas Tendencias</h2>

* **Secuencia de Puesta en Marcha:** 1.º Interruptor balancín de la fuente (`I`/ON) $\rightarrow$ 2.º Encendido del monitor $\rightarrow$ 3.º Pulsador frontal de la torre (**Power_sw**).
* **Rutina POST (*Power-On Self-Test*):** Comprobación básica del hardware ejecutada por el firmware.
    * Giro continuo de ventiladores e iluminación de leds de estado.
    * **Speaker interno:** Un único pitido corto certifica la validación exitosa. Secuencias largas o pitidos repetitivos alertan de fallos críticos (habitualmente ausencia o mala inserción de memoria RAM o tarjeta de vídeo).
* **Bootstrap Loader:** Código ejecutable del firmware que interroga el orden de dispositivos configurado en el menú **BOOT** para transferir el control al sector de arranque del sistema operativo.
* **Informe Técnico de Montaje:** Documento formal que certifica la finalización del trabajo, registrando cronología, inventario con números de serie, problemas encontrados, soluciones adoptadas y métricas de estrés.

### Nuevas Tendencias y Personalización
* **Overclocking:** Aumento forzado de la frecuencia de reloj o multiplicador de la CPU mediante ajustes de voltaje en BIOS/UEFI. Requiere un suministro impecable en el riel de $+12\text{ V}$ de la fuente y disipación térmica reforzada.
* **Refrigeración Líquida (AIO / Bucles Abiertos):** Aprovecha la elevada capacidad calorífica del agua tratada para evacuar el calor del microprocesador hacia un radiador con aletas mediante una bomba impulsora.
* **Barebones y HTPC:** Equipos compactos para ofimática o entretenimiento multimedia (*Media Center*) que priorizan la discreción espacial, el bajo voltaje y la ausencia de ruido.
* **Modding:** Modificación estética y estructural del ordenador mediante ventanas de cristal/metacrilato, iluminación LED sincronizada (**ARGB**), enfundado de cables y mecanizado de piezas con herramientas rotativas de precisión tipo minitaladro/Dremel.

---

<h2 style="color: #29b6f6;">🛠️ 6. Mantenimiento del Sistema y Gestión de Incidencias</h2>

### Mantenimiento Preventivo frente a Correctivo
* **Mantenimiento Preventivo (proactivo):**
    * Ubicación despejada de la caja para evitar acumulación térmica; alejar de la radiación solar directa y de fuentes electromagnéticas intensas.
    * Limpieza periódica cada **6 a 12 meses** con soplador de aire comprimido (bloqueando las aspas con el dedo al soplar), pincel antiestático y goma de borrar sintética sobre los terminales dorados sulfatados.
* **Mantenimiento Correctivo (reactivo):**
    * Aplicación del **método de ensayo-error y aislamiento**: arrancar en configuración mínima esencial (placa, procesador con ventilador, fuente, 1 módulo de RAM y speaker) e interconectar periféricos uno a uno hasta reproducir la falla.
    * Comprobación de líneas de corriente continua mediante polímetro.
    * Renovación de la pila de botón **CR2032** si el sistema pierde sistemáticamente los parámetros de fecha/hora o muestra *"CMOS Checksum Error"*.

### Circuitos de Soporte Técnico en la Empresa
* **CAU (Centro de Atención al Usuario):** Servicio de nivel inicial (*Helpdesk*) que recepciona el requerimiento, identifica los síntomas del cliente, asigna prioridad y abre el ticket de incidencia.
* **SAT (Servicio de Asistencia Técnica):** Departamento especializado que diagnostica y repara el hardware mediante atención telefónica, soporte remoto o intervención presencial (*in situ*), emitiendo al finalizar el **parte de incidencia** con desglose de materiales y firma de conformidad.

---

<h2 style="color: #29b6f6;">💿 7. Despliegue de Sistemas, Particionado y Clonación</h2>

### Modalidades de Instalación de Software
* **Estándar o Completa:** Instalación manual interactiva guiada desde cero respondiendo a las preguntas del instalador.
* **Preinstalación con Partición de Recuperación:** Imagen del sistema con controladores OEM embebidos en una partición protegida del disco para restaurar el equipo a valores de fábrica en pocos minutos.
* **Instalación Desatendida (*Unattended*):** Instalación automatizada gobernada por un archivo de respuesta estructurado en scripts/XML que contesta de forma preconfigurada al asistente.
* **Instalación Masiva / Clonación:** Duplicación bit a bit o sector a sector mediante red (**PXE**) o imágenes de disco hacia puestos de trabajo con hardware idéntico.

### Comparativa de Tablas de Particionado: MBR vs. GPT

| Característica | Esquema MBR (*Master Boot Record*) | Esquema GPT (*GUID Partition Table*) |
| :--- | :--- | :--- |
| **Límite de Particiones** | Máximo **4 particiones primarias** (o 3 primarias + 1 extendida con lógicas). | Hasta **128 particiones directas** sin necesidad de contenedores extendidos. |
| **Capacidad Máxima** | **$2\text{ TB}$** por direccionamiento en bloques de 32 bits. | Teóricamente hasta **$9{,}4\text{ ZB}$** gracias a direccionamiento de 64 bits. |
| **Firmware Asociado** | Sistemas tradicionales basados en **ROM BIOS**. | Sistemas modernos basados en firmware **UEFI**. |
| **Seguridad de Tabla** | Sector único de arranque sin redundancia. | Integridad validada por código **CRC32** y cabecera de respaldo (*Backup GPT*). |

* **Herramientas de Mantenimiento:** Programas de gestión de particiones (GParted, Partition Master) para redimensionar, mover o crear particiones sin destrucción de datos.
* **Archivos ISO:** Contenedores estandarizados que almacenan copias exactas del sistema de archivos de medios ópticos o unidades de instalación USB booteables.
* **Clonación vs. Puntos de Restauración:** La clonación sustituye o duplica el disco físico al completo; los puntos de restauración revierten exclusivamente los archivos del sistema operativo, controladores y registro a un punto previo funcional sin eliminar los datos personales del usuario.

--8<-- "docs/includes/glosario.md"
