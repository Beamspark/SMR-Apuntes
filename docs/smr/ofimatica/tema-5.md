<h1 style="color: #ab47bc;">🖼️ Tema 5 — Manipulación de Imágenes Digitales</h1>

La manipulación de imágenes digitales en el entorno profesional requiere comprender la estructura de los gráficos rasterizados, gestionar resoluciones métricas y perfiles cromáticos RGB, aplicar técnicas de aislamiento mediante capas y máscaras no destructivas, parametrizar filtros correctivos y estandarizar la exportación según el canal de distribución web o de imprenta.

---

<h2 style="color: #29b6f6;">5.1. Formatos y resolución de imágenes</h2>

### 5.1.1. Características
**GIMP** (*GNU Image Manipulation Program*) es una herramienta de software libre multiplataforma (GNU/Linux, Windows, macOS) orientada al tratamiento, retoque, composición y conversión de gráficos de mapa de bits o ráster, distribuida bajo licencia pública general **GNU/GPL**.

Un **mapa de bits** (*ráster*) se define como una matriz bidimensional de puntos discretos de color denominados **píxeles**. Las prestaciones técnicas esenciales del entorno son:

* **Gestión de capas y opacidad:** Permite estructurar composiciones complejas mediante planos superpuestos independientes con modulación gradual de transparencia.
* **Separación de canales cromáticos:** Control individual de los canales primarios aditivos Rojo, Verde y Azul (**RGB**).
* **Herramientas de retoque e ilustración:** Algoritmos de clonado, saneado, difuminado, enfoque y motores de trazado dinámico (lápiz, pincel y aerógrafo).
* **Captura de fuentes externas:** Digitalización directa desde escáneres mediante interfaces TWAIN/SANE y captura nativa de pantalla.
* **Compatibilidad de formatos:** Importación y exportación de estándares abiertos e industriales (JPG, PNG, GIF, BMP, TIFF, PSD y formato nativo XCF).

| Formato | Algoritmo de Compresión | Canal Alfa (Transparencia) | Capacidad de Animación | Límite Cromático y Ámbito de Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| **JPG / JPEG** | Por pérdida (*lossy*, destructiva) | No | No | 24 bits ($16,7\text{ millones de colores}$). Estándar para fotografía digital y almacenamiento optimizado en web. |
| **PNG** | Sin pérdida (*lossless*) | Sí | No | 24 bits + canal alfa de 8 bits. Logotipos corporativos, diagramas técnicos e interfaces gráficas con transparencias. |
| **BMP** | Sin compresión nativa | No | No | Sin compresión estándar. Formato heredado de gran peso en disco sin optimización de transmisión. |
| **GIF** | Sin pérdida (LZW) | Sí (binaria, 1 bit) | Sí | Indexado a un máximo de **256 colores** (8 bits). Secuencias gráficas breves y elementos web ligeros. |

#### Estándares de Resolución Digital
La **resolución** cuantifica la densidad espacial de información, expresada comúnmente en **píxeles por pulgada** (**PPP** / *PPI*). En entornos de impresión se vincula a los puntos por pulgada (**DPI**), determinando la nitidez física del soporte impreso:

* **320p:** $480 \times 320\text{ px}$ (resolución legacy de terminales móviles).
* **480p (SD):** $640 \times 480\text{ px}$ (definición estándar analógica).
* **720p (HD):** $1280 \times 720\text{ px}$ (alta definición estándar).
* **1080p (Full HD):** $1920 \times 1080\text{ px}$ ($2.073.600\text{ puntos discretos}$).
* **4K (UHD):** $3840 \times 2160\text{ px}$ ($8.294.400\text{ puntos discretos}$).

---

### 5.1.2. Herramientas principales
La creación de un lienzo se formaliza desde **Archivo > Nuevo**, donde se definen dimensiones métricas, orientación y densidad de puntos, o se seleccionan plantillas normalizadas (DIN A4, A3, pantallas estándar). La barra de herramientas articula los instrumentos de interacción directa:

* **Selección Rectangular / Elíptica:** Delimita áreas de trabajo con geometrías regulares fijas o proporcionales.
* **Selección de Lazo (Selección libre):** Permite aislar geometrías irregulares mediante trazado poligonal o a mano alzada.
* **Varita Mágica (Selección difusa):** Selecciona regiones contiguas de píxeles basándose en su similitud tonal y un umbral de tolerancia configurable.
* **Cuentagotas:** Inspecciona y toma muestras cromáticas exactas de un punto para fijarlas como color de frente o fondo.
* **Transformación Espacial (Mover, Rotar, Escalar, Cizallar):** Traslada, gira, redimensiona o deforma capas o selecciones activas.
* **Herramienta de Texto:** Crea capas vectoriales tipográficas sobre el lienzo con control de kerning, interlineado y tipografía.
* **Bote de Pintura y Degradados:** Rellena áreas seleccionadas con color plano o transiciones graduales bicolores.
* **Lápiz vs. Pincel:** El **Lápiz** opera con bordes duros sin antialiasing (píxeles puros); el **Pincel** aplica bordes suavizados con gradiente de difusión configurable.
* **Goma de Borrar:** Elimina píxeles de la capa activa sustituyéndolos por el color de fondo o volviéndolos transparentes si la capa cuenta con canal alfa.

---

<h2 style="color: #29b6f6;">5.2. Manipulación de selecciones, máscaras y capas</h2>

### Trabajo con Capas
Una **capa** actúa como un acetato transparente superpuesto en el espacio compositivo. Los elementos situados en una capa superior se sobreponen a los de niveles inferiores, ocultándolos en función de su grado de opacidad.

* **Panel Capas:** Permite crear nuevas capas, agruparlas en carpetas jerárquicas, alternar su orden vertical, duplicarlas y purgar elementos obsoletos.
* **Icono Ojo (Visibilidad):** Conmuta la visibilidad en pantalla de la capa seleccionada sin destruir su contenido.
* **Icono Candado / Pincel (Bloqueo):** Inmoviliza las propiedades espaciales o los píxeles de la capa para evitar ediciones accidentales.

---

### Herramienta Pluma (Rutas y Vectores)
Para delimitar contornos orgánicos con máxima precisión matemática mediante curvas de Bézier:

1. Seleccionar la herramienta **Rutas** (Pluma) en la barra lateral.
2. Trazar puntos de anclaje consecutivos ajustando los tiradores tangenciales sobre el contorno del objeto.
3. Cerrar el nodo inicial y pulsar el botón **Ruta a selección** en el panel de opciones para convertir la línea vectorial en una selección activa de píxeles.

---

### Máscaras de Capa
Una **máscara de capa** es un mapa en escala de grises acoplado a una capa que modula la visibilidad de sus píxeles de forma no destructiva:

1. Seleccionar la capa objetivo y acceder a **Capa > Máscara > Añadir máscara de capa**.
2. Inicializar la máscara con la opción **Blanco (Opacidad total)**.
3. Seleccionar la miniatura de la máscara en la ventana del panel de capas.
4. Aplicar herramientas de pintura: el color **blanco** mantiene la opacidad visible y el color **negro** vuelve transparentes los píxeles, permitiendo correcciones reversibles continuas sin eliminar el dato original.

---

<h2 style="color: #29b6f6;">5.3. Utilización de retoque fotográfico, ajustes de imagen y de color</h2>

### Canales RGB e Iluminación
El modelo **RGB** es un sistema de color aditivo donde la confluencia al $100\%$ de los tres canales genera blanco y su ausencia ($0\%$) conforma el negro. Las correcciones tonales se estructuran en tres rangos luminotécnicos:

* **Sombras:** Píxeles correspondientes a los niveles bajos de luminancia ($0 - 64$).
* **Medios tonos:** Gama cromática intermedia ($65 - 191$).
* **Iluminaciones:** Píxeles de alta luminosidad y luces especulares ($192 - 255$).

---

### Herramientas del Menú Colores
* **Balance de Color:** Reequilibra la composición cromática desplazando las proporciones entre pares complementarios (Cian-Rojo, Magenta-Verde y Amarillo-Azul) en sombras, tonos medios o luces.
* **Tono y Saturación:** Permite rotar el espectro sobre la rueda cromática (**Tono**) y modular la pureza o intensidad cromática (**Saturación**); llevar la saturación a cero transforma la imagen a escala de grises.
* **Brillo y Contraste:** Modifica la luminancia general del lienzo (**Brillo**) o amplía/reduce la separación tonal entre zonas oscuras y claras (**Contraste**).
* **Niveles:** Herramienta histogramétrica para mapear numéricamente el punto negro, el punto blanco y el gamma medio.
* **Curvas:** Ajuste espectral no lineal mediante curvas de transferencia bicúbicas que controlan los canales globales o independientes (R, G, B).

---

### Ajustes del Menú Imagen: Lienzo vs. Escalar

| Operación | Alcance Técnico | Impacto sobre los Elementos Gráficos |
| :--- | :--- | :--- |
| **Tamaño del Lienzo** (`Imagen > Tamaño del lienzo`) | Modifica exclusivamente el marco o superficie bidimensional de trabajo. | Mantiene invariables el tamaño, proporciones y resolución de las capas y dibujos internos. |
| **Escalar Imagen** (`Imagen > Escalar la imagen`) | Redimensiona métricamente la totalidad del documento gráfico. | Reinterpola y transforma el tamaño de todos los elementos, píxeles y capas dibujadas. |

---

<h2 style="color: #29b6f6;">5.4. Aplicación de filtros y efectos</h2>

Los filtros aplican matrices de convolución y algoritmos matemáticos sobre los píxeles de la capa activa desde el menú **Filtros**:

* **Difuminar (Desenfoque):**
    * *Desenfoque de movimiento:* Genera una ilusión de desplazamiento vectorial orientada a lo largo de un ángulo y una distancia métrica definidos.
    * *Desenfoque gaussiano:* Aplica una campana de suavizado homogéneo multidireccional gobernada por un radio radial de píxeles.
* **Realzar (Enfocar):** Acentúa el contraste en las aristas de los objetos para incrementar la acutancia visual. Un valor excesivo produce artefactos, haloing y ruido digital.
* **Luces y Sombras:** Genera efectos ambientales como el *Destello de lente*, simulando la refracción óptica de una fuente lumínica directa.
* **Artísticos:** Algoritmos de simulación plástica que emulan óleo, mosaicos o grabado tradicional.
* **Renderizado:** Genera patrones estocásticos en memoria (ej. *Nubes > Fog* para simular niebla volumétrica con base en un color primario).

---

<h2 style="color: #29b6f6;">5.5. Adquisición de imágenes desde periféricos y dispositivos</h2>

La captura digital transfiere matrices de luz exterior a formatos binarios procesables:

* **Teléfonos Móviles (*Smartphones*):** Sensores CMOS de alta integración con procesamiento computacional integrado (*computational photography*) y geolocalización EXIF nativa.
* **Cámaras Compactas:** Dispositivos ópticos cerrados dotados de zoom mecánico integrado y óptica fija no desmontable.
* **Cámaras Réflex (DSLR / Mirrorless):** Sistemas avanzados con óptica intercambiable, sensor de gran tamaño (Full Frame, APS-C) y captura cruda sin compresión (**RAW**) para laboratorio digital.

---

<h2 style="color: #29b6f6;">5.6. Importación y exportación de imágenes</h2>

### Procedimientos de Importación
* **Archivo > Abrir (`Ctrl + O`):** Carga el fichero de imagen en un lienzo o ventana de trabajo totalmente independiente.
* **Archivo > Abrir como capas (`Ctrl + Alt + O`):** Inserta la imagen externa como una capa superpuesta dentro de la composición activa actual.

---

### Guardado de Proyecto vs. Exportación Gráfica

| Directiva | Formato Resultante | Finalidad Técnica |
| :--- | :--- | :--- |
| **Archivo > Guardar (`Ctrl + S`)** | `.xcf` (*eXperimental Computing Facility*) | Archivo nativo de edición. Preserva capas, máscaras, canales, guías, trazados vectoriales y modos de fusión sin pérdida. |
| **Archivo > Exportar (`Ctrl + Shift + E`)** | `.png`, `.jpg`, `.gif`, `.bmp` | Fichero plano de consumo final. Acopla las capas y comprime los datos para distribución web, imprenta o integración multimedia. |

---

<h2 style="color: #29b6f6;">5.7. Inserción de textos y creación de publicaciones</h2>

La composición tipográfica para cartelería, folletos o memorias técnicas se rige por directivas de maquetación:

* **Cajas de texto delimitadas:** Las fuentes deben organizarse en contenedores acotados para parametrizar correctamente la alineación (izquierda, centrada, derecha, justificada), interlineados y espaciados entre párrafos.
* **Incrustación de fuentes y vectorización:** Al preparar documentos destinados a reproducción en imprenta o intercambio corporativo, se debe exportar en formato **PDF** asegurando la incrustación de tipografías o convirtiendo los textos a **trazados/curvas** vectoriales, evitando descuadres tipográficos si el terminal de destino carece de la fuente original.
* **Maquetación columnar:** Estructura modular del texto en rejillas verticales equilibradas, asegurando jerarquía visual entre titulares, entradillas y cuerpos de lectura.

---

<h2 style="color: #29b6f6;">🎯 Casos Prácticos de Aplicación Real</h2>

!!! example "Caso 1: Aislamiento de elemento y fondo transparente para web"
    **Escenario:** Un técnico del departamento de microinformática debe extraer el logotipo de una empresa alojado sobre un fondo blanco sólido para publicarlo en un portal web con canal alfa.  
    **Solución técnica implementada:** 1. Abre la imagen original en GIMP y verifica que la capa incluya canal alfa (**Capa > Transparencia > Añadir canal alfa**).  
    2. Utiliza la herramienta **Rutas (Pluma)** contorneando el isotipo mediante nodos vectoriales y pulsa el botón **Ruta a selección**.  
    3. Aplica **Capa > Máscara > Añadir máscara de capa** seleccionando *Blanco (Opacidad total)*.  
    4. Invierte la selección y rellena la máscara con color **negro** para ocultar el fondo blanco de forma reversible.  
    5. Exporta el resultado mediante **Archivo > Exportar** en formato **PNG**, garantizando la conservación de las transparencias sobre la web.

!!! example "Caso 2: Corrección de dominante cromática y ampliación de marco de trabajo"
    **Escenario:** Una fotografía para un carné de empresa presenta una dominante cálida/amarillenta y requiere espacio inferior adicional para incorporar un rótulo con el nombre del técnico sin deformar la silueta original.  
    **Solución técnica implementada:** 1. Accede a **Colores > Balance de color** y en el rango de medios tonos reduce los niveles de amarillo e incrementa proporcionalmente el canal **Azul**.  
    2. Para disponer de espacio tipográfico inferior sin estirar ni deformar la fotografía, entra en **Imagen > Tamaño del lienzo** y amplía la dimensión vertical indicando que el anclaje de la imagen original se posicione en la cabecera.  
    3. Con la herramienta de **Texto**, genera una caja tipográfica en el espacio inferior expandido e introduce los datos identificativos.

---

<h2 style="color: #29b6f6;">📌 Apéndice Técnico: Puntos Críticos de Evaluación</h2>

!!! danger "Conceptos determinantes para evaluación"
    1. **Régimen de licenciamiento de GIMP:** Software libre de edición de gráficos de mapa de bits (ráster), gratuito y gobernado por la licencia **GNU/GPL**.
    2. **Propiedades intrínsecas de formatos de exportación:**
        * **JPG:** Formato con compresión destructiva; **NO** soporta transparencias ni secuencias de animación.
        * **PNG:** Formato con compresión sin pérdida; **SÍ** soporta canal alfa (transparencias); **NO** admite animación.
        * **GIF:** Formato indexado a un máximo estricto de **256 colores**; **SÍ** soporta transparencias y secuencias animadas.
    3. **Comportamiento binario de las máscaras de capa:** El color **blanco** muestra el contenido de la capa original y el color **negro** lo oculta (vuelve transparente), permitiendo ediciones no destructivas reversibles.
    4. **Diferencia operativa en apertura de ficheros:**
        * `Archivo > Abrir`: Genera un lienzo o ventana de trabajo independiente con la imagen cargada.
        * `Archivo > Abrir como capas`: Añade la imagen seleccionada como una nueva capa superpuesta dentro de la composición activa.
    5. **Diferencia entre Tamaño del Lienzo y Escalar Imagen:**
        * **Tamaño del lienzo:** Altera la superficie del marco de trabajo sin deformar ni escalar los elementos gráficos dibujados.
        * **Escalar imagen:** Redimensiona proporcionalmente el marco y la totalidad de capas y elementos interiores existentes.
    6. **Paso indispensable en la herramienta Rutas (Pluma):** Tras delimitar el contorno mediante puntos de anclaje vectoriales, es obligatorio pulsar el comando **Ruta a selección** para convertir el trazo en una selección activa de píxeles.
    7. **Estandarización de tipografías para salida gráfica:** Todo documento destinado a imprenta debe exportarse en **PDF** con fuentes incrustadas o texto convertido a trazados/curvas para blindar el diseño frente a la ausencia de fuentes en el terminal receptor.

--8<-- "docs/includes/glosario.md"
