<h1 style="color: #ab47bc;">📌 Repaso General — Conceptos Clave de Aplicaciones Ofimáticas</h1>

Este documento recopila y estructura de forma directa los fundamentos técnicos, herramientas ofimáticas en local y en la nube, tratamiento de imagen y vídeo digital, modelado de bases de datos no-code, gestión de correo y protocolos de soporte técnico del módulo de **Aplicaciones Ofimáticas**, diseñado para repasos rápidos y preparación de exámenes.

---

<h2 style="color: #29b6f6;">⚙️ 1. Arquitectura de Sistemas, Licencias y Sistemas Operativos</h2>

* **Sistema Informático:** Conjunto coordinado de tres pilares fundamentales: **hardware** (componentes físicos), **software** (instrucciones lógicas) y **usuarios** (factor humano).
* **Componentes Principales de Hardware:**
    * **CPU (Procesador):** Ejecuta las instrucciones lógicas del sistema; su velocidad se mide en gigahercios ($\text{GHz}$, donde $1\text{ GHz} = 10^9\text{ operaciones/segundo}$).
    * **Memoria RAM:** Memoria principal de acceso aleatorio, reutilizable y volátil (su contenido se extingue al cesar el suministro eléctrico).
    * **Memoria ROM:** Memoria de solo lectura y no volátil; alberga el firmware base de arranque (BIOS/UEFI).
    * **Almacenamiento Secundario:** **HDD** (discos magnéticos mecánicos de alta capacidad) y **SSD** (matrices de celdas de silicio no volátiles con tiempos de acceso reducidos).
    * **Periféricos de Salida y Resolución:** La nitidez de un monitor depende de su resolución en píxeles (ej. Full HD: $1920 \times 1080\text{ px}$, equivalente a $2.073.600\text{ puntos discretos}$).

### Clasificación de Software y Régimen de Licencias

| Tipo de Licencia | Código Fuente | Modificación | Redistribución | Condiciones de Explotación |
| :--- | :--- | :--- | :--- | :--- |
| **Software Libre** | Abierto | Permitida | Permitida | Garantiza las 4 libertades básicas (uso, estudio, redistribución y mejora). |
| **Copyleft** | Abierto | Permitida | Obligatoria | Obliga a citar al autor original y exige que las obras derivadas mantengan la misma licencia libre. |
| **Software Propietario** | Cerrado | No permitida | Restringida | Código cerrado; exige pago por licencia o suscripción periódica bajo contrato EULA. |
| **Freeware** | Cerrado | No permitida | Gratuita | Distribución gratuita sin coste de adquisición; código cerrado sin derecho a alteración. |
| **Shareware** | Cerrado | No permitida | Temporal / Limitada | Distribución de prueba con caducidad temporal (ej. 30 días) o funciones recortadas. |
| **Educativa** | Variable | No permitida | Restringida | Acceso promocional para centros educativos y estudiantes con funciones limitadas. |

* **Instalación y Mantenimiento:** Verificación previa de requisitos de hardware en *Panel de Control > Sistema*. Despliegue de actualizaciones desatendidas mediante **Windows Update** o **App Store**. Incorporación de **complementos (*add-ins*)** para extender las funciones nativas.
* **Gestión de Incidencias e Inventario:** Soporte centralizado a través del **CAU** (*Centro de Atención al Usuario*). Auditoría del parque informático mediante herramientas de inventario como **AIDA64** o **Everest**.
* **Sistemas Operativos y Privilegios:**
    * Clasificación por procesos: **Monotarea** vs. **Multitarea**.
    * Clasificación por usuarios: **Monousuario** vs. **Multiusuario**.
    * Jerarquía de perfiles: **Administrador** (*root*, control total del sistema), **Usuario Estándar** (entorno operativo limitado) e **Invitado** (acceso transitorio restringido).

---

<h2 style="color: #29b6f6;">📝 2. Procesadores de Texto (Google Docs, Word, Writer, Pages)</h2>

* **Ecosistema Documental:** Microsoft Word (estándar corporativo), Google Docs (coedición colaborativa en la nube con guardado continuo en Drive), LibreOffice Writer (suite libre nativa en `.odt`) y Apple Pages (diseño editorial optimizado para macOS/iOS).

### Matriz de Formatos de Exportación

| Extensión | Denominación Técnica | Características Operativas |
| :--- | :--- | :--- |
| **`.docx`** | Microsoft Word XML | Formato editable estándar del ecosistema Microsoft Office. |
| **`.odt`** | OpenDocument Text | Estándar abierto internacional ISO/IEC para suites libres. |
| **`.pdf`** | Portable Document Format | Formato vectorial estático inalterable que fija la maquetación visual para impresión o distribución. |
| **`.rtf`** | Rich Text Format | Formato de texto enriquecido universal compatible entre diversos sistemas operativos. |
| **`.txt`** | Texto Plano | Cadena pura de caracteres alfanuméricos sin estilos tipográficos ni objetos incrustados. |
| **`.epub`** | Electronic Publication | Estándar adaptable (*reflowable*) optimizado para su lectura en dispositivos electrónicos (*e-readers*). |
| **`.html`** | HyperText Markup Language | Estructura para visualización directa mediante navegadores web. |

* **Tipografía y Estilos de Carácter:**
    * **Serif (con remates):** Diseños con terminaciones terminales (ej. *Times New Roman*); optimizados para lectura continua en papel impreso.
    * **Sans Serif (de palo seco):** Trazos constantes sin remates (ej. *Arial*); idóneos para lectura rápida sobre monitores y proyectores.
    * Atajos esenciales: Negrita (`Ctrl + B`), Cursiva (`Ctrl + I`), Subrayado (`Ctrl + U`), Hipervínculo (`Ctrl + K`) y Estadísticas / Recuento de palabras (`Ctrl + Shift + C`).
* **Maquetación y Control de Flujo:**
    * **Sangrías:** De primera línea, izquierda, derecha y **sangría francesa** (primera línea al margen y las subsiguientes desplazadas).
    * **Saltos de Sección:** Dividen el documento en entornos independientes; permiten alternar orientaciones de página (vertical/horizontal) y desvincular encabezados y pies de página desmarcando *Enlazar con el anterior*.
    * **Estructuras tabulares:** Cuadrícula de hasta $20 \times 20$ celdas con personalización de márgenes internos y bordes.
* **Índices Automáticos (Tablas de Contenido):** Exigen de forma obligatoria estructurar los títulos del texto con estilos de **Encabezado 1**, **Encabezado 2** y **Encabezado 3** para que el motor reconozca y compile la jerarquía del documento.

---

<h2 style="color: #29b6f6;">📊 3. Hojas de Cálculo (Google Sheets y Excel)</h2>

* **Estructura Atómica:** Cuadrícula dividida en columnas (letras A..Z) y filas (números). Toda fórmula o función matemática DEBE comenzar de forma ineludible con el signo igual (**`=`**).
* **Edición y Portapapeles:** La tecla **`F2`** activa el modo de edición interactiva dentro de la celda activa sin sobrescribirla. El **Pegado especial** (`Ctrl + Shift + V`) vuelca exclusivamente los valores calculados desvinculándolos de fórmulas y formatos.

### Diagnóstico de Errores de Cálculo

| Código de Error | Causa Raíz Técnica | Protocolo de Resolución |
| :--- | :--- | :--- |
| **`#DIV/0!`** | División aritmética entre cero o denominador referenciado vacío. | Validar que el divisor contenga un dato numérico válido o proteger con función `=SI()`. |
| **`#N/A`** | Valor consultado no disponible o inexistente en la matriz de búsqueda. | Asegurar que la clave exista en la tabla o aislar la expresión mediante `=SI.ERROR()`. |
| **`#REF!`** | Pérdida de integridad referencial debida a celdas, filas o columnas eliminadas. | Deshacer la eliminación o reescribir manualmente la fórmula referenciando celdas válidas. |
| **`#¡VALOR!`** | Conflicto tipológico al operar aritméticamente sobre cadenas de texto. | Verificar que las celdas implicadas no contengan caracteres alfanuméricos ni espacios ocultos. |

* **Direccionamiento de Celdas:**
    * **Relativa (`A1`):** Muta libremente en filas y columnas al desplazarse o arrastrarse.
    * **Absoluta (`$A$1`):** Bloquea de forma inmutable la fila y la columna mediante el operador `$`.
    * **Mixta (`$A1` o `A$1`):** Inmoviliza exclusivamente la columna o la fila respectivamente.
* **Catálogo de Funciones Principales:**
    * Agregación básica: `=SUMA()`, `=PROMEDIO()`, `=MIN()`, `=MAX()`, `=CONTAR()` (solo números) y `=CONTARA()` (celdas no vacías).
    * Lógica condicional: `=SI(prueba_lógica; "valor_verdadero"; "valor_falso")`, `=CONTAR.SI(rango; criterio)` y `=SUMAR.SI(rango; criterio; [rango_suma])`.
    * Manipulación de cadenas y fechas: `=MAYUSC()`, `=MINUSC()`, `=NOMPROPIO()`, `=HOY()` y `=AHORA()`.
* **Herramientas de Análisis Avanzado:**
    * **Motor QUERY:** Ejecuta consultas sobre matrices mediante sentencias de tipo SQL (`SELECT`, `WHERE`, `ORDER BY`, `LIMIT`).
    * **ARRAYFORMULA:** Procesa matrices de datos de forma masiva desbordando cálculos en columnas completas desde una única celda.
    * **Formato Condicional / Mapas de Calor:** Aplica escalas cromáticas graduales automáticas para detectar valores atípicos (*outliers*) y desviaciones presupuestarias.
    * **Vinculación dinámica:** Inserción de gráficos en Google Docs o Slides marcando *Vincular con la hoja de cálculo* para sincronizar datos mediante el botón interactivo *Actualizar*.

---

<h2 style="color: #29b6f6;">🗄️ 4. Bases de Datos y Desarrollo No-Code con AppSheet</h2>

* **Fundamentos Relacionales:** Organización en tablas, registros (filas o tuplas) y campos (columnas o atributos). Cada entidad requiere una **Clave Primaria** (identificador único e indivisible; autogenerado mediante `=UNIQUEID()`) y **Claves Externas** con tipo de dato **`Ref`** para garantizar la integridad referencial entre tablas maestras y subordinadas.

### Arquitectura de los Módulos de AppSheet

| Módulo del Editor | Ámbito de Configuración | Funcionalidad Principal |
| :--- | :--- | :--- |
| **Data** | Persistencia y modelos de datos | Esquemas de tablas, tipado de columnas, fórmulas, columnas virtuales, claves primarias y relaciones `Ref`. |
| **UX** | Experiencia de usuario e interfaz | Vistas de navegación (Table, Deck, Form, Detail, Map, Chart, Calendar), marcas (*Brand*) y formato condicional (*Format Rules*). |
| **Behavior** | Lógica operativa interactiva | Acciones vinculadas a botones (*Actions*) para mutar celdas, realizar llamadas o enlazar formularios. |
| **Security** | Gobernanza y control de acceso | Proveedores de autenticación corporativa, políticas de roles y filtros de seguridad en el servidor (*Security Filters*). |
| **Automation** | Procesamiento asíncrono y tareas | Configuración de **Bots** gobernados por eventos (*Events*) para emitir alertas, correos y compilar informes PDF. |

* **Expresiones de Contexto y Consulta:** `USEREMAIL()` (retorna el correo del usuario en sesión), `TODAY()`, `NOW()` y `LOOKUP(valor, tabla, columna_busqueda, columna_retorno)`.
* **Captura Multimedia y Operativa Desconectada:** Campos de tipo `Image`, `File`, `Signature` (firmas biométricas táctiles) y `LatLong` (geolocalización GPS). Permite trabajar sin red mediante almacenamiento en caché local y sincronización retrasada (**Delayed Sync**).
* **Compilación de Informes PDF:** Tareas de automatización que leen plantillas de Google Docs estructuradas con variables dinámicas entre corchetes angulares dobles: `<<[Campo]>>` y bucles de registros relacionados: `<<Start: [Lista]>> ... <<End>>`.

!!! danger "Diferencia de Seguridad: Slice vs. Security Filter"
    * **Slice:** Filtra los registros **en el dispositivo local del cliente**; los datos excluidos se descargan igualmente en la memoria del teléfono.
    * **Security Filter:** Filtra los datos **en el servidor de la nube**; las filas que no cumplen la condición jamás viajan a través de la red, garantizando el cumplimiento estricto del RGPD.

---

<h2 style="color: #29b6f6;">🖼️ 5. Manipulación de Imágenes Digitales (GIMP)</h2>

* **Software Libre Gráfico:** **GIMP** (*GNU Image Manipulation Program*) es un editor multiplataforma de mapa de bits (ráster) bajo licencia libre **GNU/GPL**. La densidad de detalle se mide en **píxeles por pulgada (ppp)** o puntos por pulgada (DPI para imprenta).

### Comparativa de Formatos Gráficos

| Formato | Compresión | Transparencias (Canal Alfa) | Animación | Ámbito de Aplicación Técnica |
| :--- | :--- | :--- | :--- | :--- |
| **JPG / JPEG** | Por pérdida (*lossy*, destructiva) | No | No | Fotografía digital y almacenamiento optimizado en la web. |
| **PNG** | Sin pérdida (*lossless*) | Sí | No | Logotipos corporativos, esquemas técnicos e interfaces web con transparencia. |
| **GIF** | Sin pérdida (LZW) | Sí (binaria, 1 bit) | Sí | Indexado a un máximo estricto de **256 colores**; gráficos y animaciones ligeras. |
| **BMP** | Sin compresión nativa | No | No | Formato heredado sin compresión; genera ficheros de gran peso en disco. |

* **Capas y Máscaras de Capa:** Cada capa opera como un acetato transparente superpuesto (ocultable con el icono del *Ojo* y bloqueable con el *Candado*). Las **máscaras de capa** gestionan la visibilidad de forma no destructiva: el color **blanco** mantiene la opacidad visible y el color **negro** vuelve transparentes los píxeles.
* **Herramientas de Selección y Rutas:** Selección rectangular, elíptica, lazo libre y varita mágica. La herramienta **Rutas (Pluma)** traza vectores de precisión que se transforman en selección activa mediante el botón obligatorio **Ruta a selección**.
* **Gestión Espacial y Archivos:**
    * **Tamaño del lienzo:** Altera exclusivamente el marco o superficie de trabajo sin deformar los elementos dibujados.
    * **Escalar imagen:** Redimensiona proporcionalmente la totalidad del lienzo y sus capas internas.
    * Apertura: `Archivo > Abrir` (`Ctrl + O`, nuevo lienzo) vs. `Archivo > Abrir como capas` (`Ctrl + Alt + O`, capa superpuesta en el proyecto activo).
    * Guardado: Formato nativo de edición **`.xcf`** (preserva capas y máscaras) vs. `Archivo > Exportar` (`Ctrl + Shift + E`) a formatos comprimidos planos.
    * Imprenta profesional: Exportación en formato **PDF** con textos incrustados o convertidos a trazados/curvas vectoriales.

---

<h2 style="color: #29b6f6;">🎬 6. Manipulación de Secuencias de Vídeo y Audio</h2>

* **Montaje No Destructivo con OpenShot:** Editor libre y de código abierto que preserva intactos los archivos multimedia de origen en el disco duro trabajando mediante accesos directos y referencias lógicas en el proyecto.
* **Componentes de Montaje:** Línea de tiempo graduada cronológicamente, pistas híbridas superpuestas (la pista superior goza de prioridad visual), herramienta de recorte (cuchilla) y controles de reproducción. Atajos clave: Importar archivos (`Ctrl + F`), Títulos estáticos (`Ctrl + T`), Títulos 3D animados (`Ctrl + B`) y Exportar vídeo (`Ctrl + E`).

### Demostración Técnica: Almacenamiento de Vídeo Sin Compresión
Un fotograma HD ($1280 \times 720\text{ px}$) a $24\text{ bits}$ de color requiere $\approx 2,76\text{ MB}$.  
A una cadencia cinematográfica de $24\text{ fps}$, un segundo de vídeo sin comprimir consume $66,24\text{ MB}$, lo que proyecta un volumen de **$\approx 234\text{ a }238\text{ GB}$ por hora de metraje**. Los códecs de compresión (como **H.264**) reducen ese volumen masivo a solo **$1\text{ - }2\text{ GB}$** sin pérdida perceptible de calidad.

### Contenedores y Códecs Audiovisuales
* **Códec (*Compresor/Descompresor*):** Algoritmo que codifica y decodifica el flujo de datos audiovisuales a tiempo real (H.264/AVC, H.265/HEVC, VP8/VP9, DivX).
* **Contenedores Multimedia:**
    * **MP4:** Estándar universal de compatibilidad; integra habitualmente vídeo en **H.264** y audio en **AAC**.
    * **MKV (Matroska):** Contenedor multimedia libre de código abierto con soporte para flujos ilimitados de audio y subtítulos.
    * **WebM:** Estándar abierto promovido por Google para HTML5 que combina contenedor MKV con vídeo **VP8/VP9** y audio **Vorbis/Opus**.
    * **WMV:** Formato propietario de Microsoft; restringido en suites y conversores libres sin licencia comercial.
* **Captura de Pantalla y Videotutoriales:** Grabación del escritorio mediante software libre con **OBS Studio**. Los videotutoriales exigen lenguaje claro, sincronización exacta entre voz y cursor, y una duración pedagógica recomendada de **5 a 10 minutos** (con un máximo admisible de 15 minutos).
* **Leyes del Lenguaje Audiovisual:**
    * **Ley de los 180° (Eje de Acción):** Obliga a mantener las posiciones de cámara dentro del mismo semicírculo de $180^\circ$ para evitar el **salto de eje** y no desorientar espacialmente al espectador.
    * **Ley de los 30°:** Impone una variación angular mínima de $30^\circ$ entre dos planos consecutivos del mismo sujeto para evitar un salto visual brusco (*jump cut*).
* **Formatos y Pistas de Audio:** Aislamiento estricto de pistas en producción (Pista 1: *Diálogos*, Pista 2: *Foleys / Efectos*, Pista 3: *Música*). El canal de diálogos debe estar desvinculado para posibilitar el doblaje a otros idiomas. **OGG Vorbis** destaca como formato comprimido totalmente libre y exento de patentes.

---

<h2 style="color: #29b6f6;">📽️ 7. Elaboración de Presentaciones Multimedia (Google Slides / PowerPoint)</h2>

* **Planificación Estratégica:** Auditoría previa de los objetivos profesionales, el perfil técnico del público objetivo (*target*) y las restricciones físicas de la sala (luminosidad del proyector, distancia al espectador y tamaño mínimo de fuente).
* **Relación de Aspecto:**
    * **16:9 (Panorámico):** Relación predeterminada contemporánea para monitores, televisores y proyectores Full HD / 4K.
    * **4:3 (Estándar):** Relación de aspecto tradicional reservada para proyectores antiguos o documentos destinados a impresión en papel.
* **Tipografía Recomendada:** Empleo de fuentes **Sans Serif** (de palo seco, como *Arial* o *Roboto*) para maximizar la legibilidad en proyecciones digitales frente a fuentes Serif.

### Integración Multimedia, Animación y Exposición
* **Gráficos Vinculados:** Gráficos insertados desde Google Sheets marcando obligatoriamente *Vincular con la hoja de cálculo*; si los datos origen cambian, se sincronizan mediante el botón interactivo *Actualizar*.
* **Incrustación de Vídeo y Audio:** Vídeos con parametrización de inicio y fin métrico en segundos, silenciado de canal y arranque automático; pistas de audio en formatos `.mp3` o `.wav` alojadas en Drive.
* **Disparadores de Animación:**
    1. *Al hacer clic:* Espera la acción manual del operador.
    2. *Con la anterior:* Se reproduce de forma síncrona y simultánea con la animación previa.
    3. *Después de la anterior:* Se activa en cascada automáticamente al concluir el efecto precedente.
* **Herramientas de Conducción:**
    * **Vista de Presentador:** Configuración de doble pantalla donde el proyector de la sala expone las diapositivas limpias, mientras el monitor privado del ponente despliega el cronómetro, la miniatura posterior y las **Notas del orador**.
    * **Saltar Diapositiva (Ocultar):** Señalizada con un **ojo tachado**, excluye la diapositiva de la proyección pública sin borrarla del archivo de trabajo.
    * Atajos: Nueva diapositiva (`Ctrl + M`), Hipervínculo (`Ctrl + K`), Comentario (`Ctrl + Alt + M`) e Historial de versiones (`Ctrl + Alt + Shift + H`).

---

<h2 style="color: #29b6f6;">📬 8. Gestión del Correo y la Agenda Electrónica</h2>

* **Origen Histórico:** Desarrollado por **Ray Tomlinson** en 1971, quien introdujo el carácter **`@`** para independizar el usuario de la máquina servidora.
* **Protocolos de Red para Correo Electrónico:**
    * **POP3:** Protocolo entrante que descarga los correos al disco local del cliente y los elimina habitualmente del servidor.
    * **IMAP:** Protocolo entrante que mantiene los correos alojados y sincronizados centralmente en el servidor, permitiendo acceso concurrente multidispositivo.
    * **SMTP:** Protocolo universal encargado de forma exclusiva de la transferencia y retransmisión de correo saliente.
* **Cabeceras y Privacidad:** Campos *Para*, *CC* (Copia de Carbón visible) y **CCO** (*Copia de Carbón Oculta*, preceptivo para envíos masivos protegiendo las direcciones de contacto).
* **Circuito de Envío y DNS:** El cliente entrega el correo mediante SMTP; el servidor SMTP consulta al servidor **DNS** el **registro MX** (*Mail Exchange*) del dominio de destino para obtener la dirección IP del servidor receptor y transferir el paquete.

### Organización, Sindicación y Operadores de Búsqueda
* **Etiquetas vs. Carpetas:** Las **etiquetas** permiten asociar múltiples categorías simultáneas a un mismo mensaje sin moverlo de ubicación; las **carpetas** trasladan físicamente el mensaje fuera del buzón (un correo solo reside en una carpeta a la vez).
* **RSS (*Really Simple Syndication*):** Formato XML para suscripción y distribución automatizada de titulares y novedades web sin saturar los buzones de correo.
* **Operadores de Búsqueda en Gmail:** `from:`, `to:`, `subject:`, `has:attachment` (discrimina adjuntos), `is:unread` (no leídos), `" "` (frase exacta) y `before:` / `after:` (fechas en formato `AAAA/MM/DD`).
* **Agenda Digital y Certificados:** Las citas/eventos ocupan de forma obligatoria fecha y hora delimitada en el calendario; las **tareas** son listas de pendientes marcables sin fecha fija obligatoria. Sincronización continua de datos con terminales móviles (**PDAs**). Los **certificados digitales** (FNMT, DNIe) en software deben exportarse cifrados con contraseña a soporte externo para evitar su pérdida en reinstalaciones.

---

<h2 style="color: #29b6f6;">🛠️ 9. Técnicas de Soporte al Usuario</h2>

* **Documentación Técnica:** El **manual de usuario** desglosa exhaustivamente todas las funciones, configuraciones y advertencias de seguridad del software o hardware; la **guía rápida** condensa esquemáticamente en varios idiomas las directrices esenciales de desempaquetado, conexión y arranque.
* **Canales de Asistencia Gradual:** La atención debe canalizarse prioritariamente mediante vías telemáticas (teléfono, correo, chat, **escritorio remoto**); el desplazamiento presencial del técnico constituye el **último recurso** operativo.

### Tipología de Incidencias y Base de Conocimiento
* **Incidencia Conocida:** Fallo registrado y catalogado con anterioridad en el histórico; cuenta con un procedimiento de resolución rápido y contrastado.
* **Incidencia Desconocida:** Evento anómalo inédito no tipificado; requiere investigación previa para aislar la causa raíz y determinar la corrección. Al resolverse, se documenta en el **informe de incidencias** (código, fecha, afectados, síntomas y solución) para enriquecer la **base de conocimiento** corporativa, resolviendo la paradoja entre tiempo y calidad de atención.

### Detección de Malware y Medidas de Salvaguarda

```
┌─────────────────────────────────────────────────────────────────────────┐
│               SÍNTOMAS DE INFECCIÓN POR SOFTWARE MALINTENCIONADO        │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. LENTITUD EXCESIVA: Consumo anómalo de CPU y RAM por procesos ocultos.│
│ 2. INSTALACIONES NO AUTORIZADAS: Ejecutables y barras de herramientas.  │
│ 3. PUBLICIDAD MASIVA (POP-UPS): Apertura de ventanas emergentes y adware.│
└─────────────────────────────────────────────────────────────────────────┘
```

* **Medidas de Salvaguarda de la Información:**
    * **Preventivas:** Planificación periódica de **copias de seguridad (*backups*)** y sistemas de control de versiones antes de que ocurra el incidente.
    * **Correctivas:** Empleo de software de **recuperación forense de datos** tras caídas lógicas, fallos de lectura o formateos no deseados.
* **Recursos Técnicos de Soporte:** Herramientas de software (antivirus, optimizadores, desfragmentadores) e instrumental de hardware (**multímetro digital / polímetro** para medir voltajes y comprobar continuidad eléctrica, y destornilladores de precisión para montaje).

--8<-- "docs/includes/glosario.md"
