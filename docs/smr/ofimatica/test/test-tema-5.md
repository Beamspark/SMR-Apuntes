# Test de Autoevaluación: Tema 5

[← Volver al Tema 5: Manipulación de imágenes digitales (GIMP)](../tema-5.md)

---

### Pregunta 1
Un técnico de informática debe instalar un programa de retocado fotográfico y manipulación de imágenes de mapa de bits en los equipos de una empresa sin incurrir en costes de licencias comerciales. ¿Bajo qué tipo de licencia se distribuye el programa GIMP y qué características tiene respecto al acceso a su código fuente?

<details class="quiz-option correct">
  <summary>A) Licencia libre GNU/GPL (General Public License), permitiendo el acceso, modificación y redistribución gratuita de su código fuente.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    GIMP (GNU Image Manipulation Program) es una aplicación de software libre bajo la licencia GNU/GPL. Garantiza las cuatro libertades fundamentales del software: libertad de ejecución, estudio y modificación del código fuente, redistribución de copias y publicación de versiones mejoradas sin pagar licencias.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Licencia Shareware, permitiendo la evaluación gratuita durante 30 días tras los cuales se bloquea la exportación de archivos .xcf.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Shareware es software comercial de prueba temporal; GIMP es 100 % gratuito e indefinido en todas sus funciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Licencia Propietaria de código cerrado propiedad de Adobe Systems.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Adobe Systems desarrolla Photoshop (software propietario); GIMP es un proyecto comunitario independiente de código abierto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Licencia de Dominio Público con obligación de pago de cánones por uso comercial en empresas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software en Dominio Público carece de derechos de autor y no exige ningún pago de cánones.
  </div>
</details>

---

### Pregunta 2
Al trabajar con gráficos digitales, ¿cuál es la diferencia técnica fundamental entre un archivo de imagen de Mapa de Bits (Raster) y un archivo de Gráfico Vectorial?

<details class="quiz-option incorrect">
  <summary>A) Las imágenes de mapa de bits se basan en fórmulas matemáticas de curvas Bézier y los gráficos vectoriales en una rejilla fija de píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte completamente las definiciones de ambos tipos de gráficos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Las imágenes de mapa de bits se componen de una rejilla fija de píxeles coloreados que pierden calidad al ampliarse (pixelación); los gráficos vectoriales se definen mediante fórmulas matemáticas y escalan infinitamente sin pérdida de nitidez.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La imagen de mapa de bits (raster) almacena la información como una matriz de puntos discretos (píxeles) con coordenadas y color fijo. Al ampliar la imagen, los píxeles se agrandan haciéndose visibles (efecto de pixelación o "dientes de sierra"). El gráfico vectorial utiliza objetos geométricos (líneas, polígonos, curvas) definidos por ecuaciones matemáticas, lo que permite escalarlos a cualquier tamaño sin perder definición.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Las imágenes de mapa de bits solo pueden almacenarse en formato .svg y las vectoriales en formato .jpg.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .svg es la extensión de vectoriales y .jpg es de mapa de bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Las imágenes de mapa de bits no soportan transparencia, mientras que los gráficos vectoriales se imprimen exclusivamente en impresoras matriciales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las imágenes de mapa de bits soportan canal alfa (transparencia) en formatos como PNG o GIF.
  </div>
</details>

---

### Pregunta 3
Se requiere preparar un cartel corporativo para su impresión física profesional en imprenta de alta calidad. Atendiendo a las especificaciones técnicas de resolución gráfica, ¿cuál es la densidad de puntos por pulgada (ppp / dpi) estándar que se debe configurar para la maquetación final?

<details class="quiz-option incorrect">
  <summary>A) 12 ppp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    12 ppp es una resolución extremadamente baja e inservible que produciría un bloque ilegible.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 72 ppp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    72 ppp es el estándar de resolución óptima configurado para visualización en pantallas digitales y páginas web.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) 300 ppp.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La resolución de 300 ppp (puntos por pulgada / dpi) es el estándar técnico de la industria gráfica para la impresión comercial en papel de alta calidad (offset u óptico). Aporta suficiente densidad de puntos para que el ojo humano no perciba el tramado de la imagen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 1200 ppp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    1200 ppp es una resolución de escaneado o fotolitos de muy alta precisión que genera archivos innecesariamente pesados para cartelería común.
  </div>
</details>

---

### Pregunta 4
Un diseñador web necesita exportar un logotipo desde GIMP para insertarlo en la cabecera de una página web con fondo de color variable. Se exige que el formato de imagen admita canal de transparencia (Alpha) de alta calidad sin pérdidas de compresión. ¿Qué formato de imagen debe seleccionar?

<details class="quiz-option incorrect">
  <summary>A) JPG / JPEG.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formato JPG utiliza compresión con pérdida y no admite transparencias bajo ninguna circunstancia (asigna automáticamente un fondo blanco sólido).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) BMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formato BMP es un mapa de bits plano sin compresión ni soporte nativo de transparencia web.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) EPS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    EPS (Encapsulated PostScript) es un formato de intercambio impreso para vectores, no para logotipos web transparentes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) PNG.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato PNG (Portable Network Graphics) utiliza un algoritmo de compresión sin pérdida y soporta canal alfa de 8 a 16 bits, lo que permite transparencias complejas, bordes suavizados y semitransparencias sobre cualquier fondo web.
  </div>
</details>

---

### Pregunta 5
Un usuario está trabajando en un proyecto complejo en GIMP con 15 capas, 3 máscaras de capa, guías y rutas. Necesita guardar el archivo de trabajo de forma que se conserven intactos todos los elementos editables para continuar la edición al día siguiente. ¿En qué formato de archivo nativo de GIMP debe guardar el proyecto?

<details class="quiz-option correct">
  <summary>A) .xcf</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La extensión .xcf es el formato nativo del programa GIMP. Guarda la estructura interna completa del proyecto: capas, transparencia, canales de color, máscaras, rutas de vectores, texto editable y guías de maquetación sin aplicar compresión destructiva.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) .jpg</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Exportar a .jpg acopla todas las capas en un único plano de píxeles y destruye las máscaras y la transparencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) .pdf</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PDF es un formato de salida final para documentos o imprenta, no la estructura de trabajo editable de GIMP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .tiff</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque TIFF admite capas en algunos programas, no guarda la totalidad de los datos específicos del motor interno de GIMP como lo hace .xcf.
  </div>
</details>

---

### Pregunta 6
¿Qué herramienta de selección de GIMP permite aislar un objeto del fondo haciendo clic sobre una zona de la imagen para seleccionar de forma inteligente todos los píxeles adyacentes que compartan un color o tonalidad similar?

<details class="quiz-option incorrect">
  <summary>A) Selección rectangular (R).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La selección rectangular crea un marco geométrico estricto sin analizar las diferencias de color del objeto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Selección difusa / Varita mágica (U).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta de Selección Difusa (conocida popularmente como Varita Mágica, atajo U) analiza el valor de color del píxel sobre el que se hace clic y extiende la selección contigua a los píxeles adyacentes que se encuentren dentro del umbral de tolerancia fijado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Lazo de selección libre (F).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Lazo o Selección Libre requiere trazar manualmente todo el contorno a mano alzada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Selección por color (Shift + O).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La "Selección por color" selecciona todos los píxeles de ese color en toda la imagen, aunque no estén adyacentes o contiguos.
  </div>
</details>

---

### Pregunta 7
Al siluetear una figura compleja en GIMP mediante la herramienta de Rutas (Pluma de vectores), el técnico coloca varios nodos creando un trazado vectorial ajustado al contorno. ¿Qué botón debe pulsar dentro del panel de opciones de la herramienta para transformar ese trazado en una zona de píxeles seleccionada?

<details class="quiz-option incorrect">
  <summary>A) Renderizar ruta</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe el comando "Renderizar ruta" para convertir vector a área de selección.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Exportar como PNG</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Exportar como PNG" guarda la imagen en disco pero no crea selecciones internas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Crear selección a partir de una ruta / Ruta a selección</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las rutas son elementos vectoriales invisibles sobre la imagen. Para convertir el trazado suave definido por los nodos vectoriales en un área de edición activa sobre los píxeles, se debe hacer clic en el botón Ruta a selección (Crear selección a partir de una ruta).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Trazar ruta con pincel</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Trazar ruta con pincel" pinta con la broca activa una línea sobre el trazo vectorial, pero no activa una selección marchante.
  </div>
</details>

---

### Pregunta 8
En el panel de Capas de GIMP, ¿qué función realizan respectivamente el icono con forma de Ojo y el icono con forma de Candado situados junto a cada capa de la lista?

<details class="quiz-option incorrect">
  <summary>A) El ojo cambia el modo de fusión a Multiplicar; el candado invierte los colores de la capa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los modos de fusión se eligen en el menú desplegable superior del panel, no mediante el ojo o el candado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El ojo duplica la capa; el candado elimina la capa seleccionada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Para duplicar o borrar capas existen botones específicos en la barra inferior del panel de capas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El ojo aplica un filtro de desenfoque; el candado exporta la capa a formato .bmp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros se ejecutan desde el menú general Filtros de la barra superior.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El ojo commuta la visibilidad de la capa (mostrar u ocultar); el candado bloquea la edición o movimiento involuntario de los píxeles de esa capa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la interfaz del panel de Capas de GIMP, hacer clic sobre el icono del Ojo alterna el estado de visibilidad de la capa activa. Por su parte, activar el icono del Candado aplica una protección/bloqueo que impide modificar, pintar o mover por error el contenido de dicha capa.
  </div>
</details>

---

### Pregunta 9
Un fotógrafo desea realizar el fotomontaje de dos imágenes en GIMP ocultando parte de la capa superior mediante un degradado suave, sin borrar definitivamente ningún píxel de la foto original. ¿Qué herramienta técnica debe añadir a la capa superior?

<details class="quiz-option correct">
  <summary>A) Una Máscara de capa (Layer Mask).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Máscara de capa es una herramienta de edición no destructiva vinculada a una capa. Funciona mediante un mapa de escala de grises: los tonos blancos mantienen la visibilidad del píxel, los tonos negros los vuelven totalmente transparentes y los grises crean semitransparencias, permitiendo corregir o recuperar zonas pintando de nuevo en la máscara sin destruir la imagen original.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un filtro de distorsión de mosaico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El filtro de mosaico fragmenta la imagen en baldosas estéticas, pero destruye la visibilidad uniforme.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Una selección flotante pegada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una selección flotante es un estado temporal de pegado que exige ser anclado antes de trabajar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un ajuste de brillo y contraste negativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Modificar el brillo o contraste altera el color de toda la imagen pero no gestiona la transparencia ni el recorte.
  </div>
</details>

---

### Pregunta 10
Al trabajar en el modelo de color aditivo RGB en GIMP, ¿cuáles son los tres canales primarios de color que componen la información cromática de cada píxel de la pantalla?

<details class="quiz-option incorrect">
  <summary>A) Cian, Magenta y Amarillo (CMYK).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CMYK es el modelo sustractivo utilizado para la mezcla de tintas de impresión física, no para la visualización aditiva de monitores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Rojo (Red), Verde (Green) y Azul (Blue).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modelo de color RGB es un sistema aditivo utilizado en pantallas electrónicas que sintetiza todo el espectro visible combinando tres canales de luz primarios: Rojo (Red), Verde (Green) y Azul (Blue), asignando a cada canal un valor de intensidad entre 0 y 255.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Tono, Saturación y Luminosidad (HSL).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HSL es una representación de coordenadas cromáticas basadas en la percepción humana, no los canales primarios de emisión de la pantalla.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Blanco, Negro y Escala de Grises.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a imágenes monocromáticas o en escala de grises.
  </div>
</details>

---

### Pregunta 11
Un usuario abre un lienzo de $800 \times 600$ píxeles en GIMP. Necesita ampliar el marco físico de trabajo a $1000 \times 800$ píxeles para añadir un texto en el borde exterior, pero sin deformar ni estirar el tamaño de la imagen que ya tenía colocada dentro. ¿Qué menú y opción debe utilizar?

<details class="quiz-option incorrect">
  <summary>A) Imagen &gt; Escalar la imagen</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Escalar la imagen redimensiona y deforma tanto el marco como todos los píxeles de la foto introducida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Herramientas &gt; Transformar &gt; Perspectiva</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La perspectiva inclina tridimensionalmente el contenido de una capa.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Imagen &gt; Tamaño del lienzo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Imagen > Tamaño del lienzo modifica únicamente las dimensiones del marco o contenedor exterior de la imagen sin escalar, estirar ni remuestrear los píxeles de las capas existentes. Permite reubicar la imagen original dentro del nuevo espacio creado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Filtros &gt; Mapa &gt; Resaltar</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros de mapa aplican efectos estilísticos, no modifican las dimensiones geométricas del documento.
  </div>
</details>

---

### Pregunta 12
Un diseñador tiene abierto un lienzo de trabajo en GIMP. Quiere incorporar dos fotografías almacenadas en su disco duro para que aparezcan directamente como dos capas nuevas independientes sobre el lienzo actual. ¿Qué opción del menú Archivo debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) Archivo &gt; Abrir (Ctrl + O).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Archivo > Abrir (Ctrl + O) abriría las imágenes en dos pestañas o ventanas de documentos totalmente independientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Archivo &gt; Importar fuentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    "Importar fuentes" no existe en el menú Archivo para insertar fotografías.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Archivo &gt; Crear &gt; Desde el portapapeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Crea un documento nuevo a partir de una captura de pantalla guardada en el portapapeles del sistema operativo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Archivo &gt; Abrir como capas (Ctrl + Alt + O).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La opción Archivo > Abrir como capas (atajo Ctrl + Alt + O) permite seleccionar uno o varios archivos de imagen del sistema e insertarlos directamente dentro del documento activo como capas individuales superpuestas, respetando el lienzo sobre el que se está trabajando.
  </div>
</details>

---

### Pregunta 13
Se maqueta un folleto publicitario en GIMP que contiene texto corporativo con una tipografía comercial muy específica. Para enviar el trabajo final a la imprenta en formato PDF garantizando que el texto se imprima correctamente sin depender de si la imprenta tiene o no esa fuente instalada, ¿qué proceso previo se debe realizar sobre las capas de texto?

<details class="quiz-option correct">
  <summary>A) Convertir el texto en trazado/vector o descartar la información de texto renderizándola como capa de píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Si el sistema receptor (imprenta) no dispone de la tipografía comercial instalada, sustituirá la fuente deformando la maquetación. Para evitarlo, se debe utilizar la función "Texto a ruta" (convertir la fuente en trazado vectorial) o renderizar/descartar la información de texto convirtiéndola en píxeles fijos en la capa antes de exportar el PDF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cambiar la resolución de la imagen a 72 ppp y exportar como GIF animado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reducir la resolución a 72 ppp arruina la impresión y el formato GIF limita la paleta a 256 colores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Aplicar un filtro de desenfoque gaussiano sobre la capa de texto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El desenfoque gaussiano vuelve el texto borroso e ilegible.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Borrar la capa de texto y escribirla a mano con la herramienta Lápiz.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Dibujar a mano alzada elimina el acabado profesional del diseño tipográfico.
  </div>
</details>

---

### Pregunta 14
¿Cuál es la diferencia de comportamiento gráfico al pintar sobre un lienzo en GIMP utilizando la herramienta Lápiz (N) en comparación con la herramienta Pincel (P)?

<details class="quiz-option incorrect">
  <summary>A) El Lápiz pinta únicamente líneas de color negro y el Pincel pinta en escala de grises.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas herramientas pueden utilizar cualquier color de la paleta activa.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El Lápiz produce trazos de bordes duros y pixelados (sin suavizado/antialiasing); el Pincel produce trazos con bordes suaves y difuminados gracias al suavizado de bordes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Lápiz (Pencil) dibuja trazos de precisión con bordes totalmente duros y sin suavizado (antialiasing), pintando píxeles puros (ideal para pixel art). La herramienta Pincel (Paintbrush) aplica bordes suaves y difuminados con gradación de opacidad en los extremos del trazo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El Lápiz borra los píxeles volviéndolos transparentes y el Pincel duplica capas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Para borrar píxeles se utiliza la herramienta Goma de borrar (Shift + E).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El Lápiz requiere el uso de una tableta gráfica obligatoria y el Pincel solo funciona con el teclado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas herramientas operan con ratón, ratón táctil o tableta gráfica indistintamente.
  </div>
</details>

---

### Pregunta 15
Un fotógrafo quiere ajustar de forma precisa la gama tonal de una fotografía en GIMP, modificando de forma independiente los tonos oscuros (sombras), los tonos medios y las altas luces (iluminaciones). ¿Qué herramienta del menú Colores ofrece el control gráfico más avanzado mediante una línea de curva modificable?

<details class="quiz-option incorrect">
  <summary>A) Brillo y contraste.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Brillo y contraste es un ajuste lineal básico que modifica toda la gama de luces uniformemente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Tono y saturación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tono y saturación modifica la pureza del color y la croma, no la distribución tonal del histograma.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Curvas de color (Colores &gt; Curvas).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Colores > Curvas representa el histograma tonal en un eje cartesiano X/Y. Al ajustar los puntos del trazado de la curva, permite manipular de forma independiente y no lineal la luminosidad de las sombras (parte inferior izquierda), tonos medios (centro) e iluminaciones (parte superior derecha).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Umbral de blanco y negro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Umbral convierte la imagen a blanco y negro puro dividiendo los píxeles por un límite rígido.
  </div>
</details>

---

### Pregunta 16
Se requiere eliminar un cable eléctrico que cruza el cielo en una fotografía. Para ello, el usuario selecciona la herramienta de Saneado (Healing Tool, H), toma una muestra del cielo azul limpio presionando Ctrl + Clic en una zona cercana, y pinta sobre el cable. ¿Cómo procesa esta herramienta la mezcla de píxeles?

<details class="quiz-option incorrect">
  <summary>A) Copia idéntica y rígida de los píxeles de origen sin modificar su brillo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La copia idéntica y rígida del píxel de origen la realiza la herramienta de Clonado (Clone Tool), dejando parches si la luz varía.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Borra la zona pintada convirtiéndola en un agujero blanco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La herramienta de Saneado no borra a blanco ni destruye la imagen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Dibuja una línea vectorial de color rojo sobre el cable.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No dibuja vectores ni añade trazos de pintura opaca.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Copia la textura de la zona de origen pero corrige y fusiona el brillo, el color y la iluminación adaptándolos al entorno de la zona de destino.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta de Saneado (Healing Tool) calcula algoritmos de mezcla inteligente: toma la textura de la zona muestreada y la combina de forma transparente con la iluminación, tono y brillo de la zona de destino, eliminando imperfecciones sin dejar parches visibles.
  </div>
</details>

---

### Pregunta 17
Al intentar borrar con la herramienta Goma parte del fondo de una capa en GIMP, el usuario observa que en lugar de aparecer la rejilla de ajedrez (que representa la transparencia) la zona borrada se pinta del color de fondo activo (blanco). ¿Qué propiedad le falta a la capa y cómo se añade?

<details class="quiz-option correct">
  <summary>A) Falta el Canal Alfa; se añade haciendo clic derecho sobre la capa y seleccionando Añadir canal alfa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Canal Alfa almacena la información de opacidad/transparencia de una capa. Si una capa de fondo no lo tiene activado, el programa no puede representar la transparencia al borrar y pinta con el color de fondo. Hacer clic derecho sobre la capa y pulsar Añadir canal alfa habilita la transparencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Falta la guía de maquetación; se añade presionando Ctrl + R.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las reglas (Ctrl + R) sirven para medir en píxeles o centímetros, no aportan transparencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La capa está en modo flotante; se soluciona pulsando la tecla Enter.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo de selección flotante impide editar otras capas pero no genera por sí mismo falta de canal alfa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Falta la máscara de texto; se añade desde el menú Filtros &gt; Luces.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros de luces no gestionan los canales de transparencia alfa del panel de capas.
  </div>
</details>

---

### Pregunta 18
¿Qué dispositivo periférico de captura de imágenes de oficina permite digitalizar documentos físicos en papel o fotografías impresas mediante un sensor óptico (CCD o CIS), convirtiéndolos en archivos gráficos de mapa de bits?

<details class="quiz-option incorrect">
  <summary>A) Plotter de corte.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un plotter de corte es un periférico de salida que troquela o corta vinilos mediante una cuchilla.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Escáner óptico.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El escáner es el periférico de entrada encargado de digitalizar documentos o fotografías impresas. Su sensor óptico desplaza una barra de luz registrando la intensidad reflejada para convertir la información analógica de papel en una matriz digital de píxeles.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Monitor CRT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un monitor CRT es un periférico de salida que despliega imágenes en pantalla mediante tubos de rayos catódicos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Impresora térmica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una impresora térmica es un periférico de salida para imprimir recibos mediante calor sobre papel reactivo.
  </div>
</details>

---

### Pregunta 19
Al seleccionar la herramienta de Texto (T) en GIMP y hacer clic sobre la imagen para escribir un título, ¿cómo organiza GIMP el nuevo contenido introducido dentro del panel de Capas?

<details class="quiz-option incorrect">
  <summary>A) Sobrescribe los píxeles de la capa activa sustituyendo la fotografía original.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No destruye los píxeles de la capa inferior; la aísla en una capa dedicada superior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Genera una selección flotante que borra automáticamente las máscaras de capa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No genera una selección flotante ni borra las máscaras creadas anteriormente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Crea automáticamente una capa dedicada de texto que mantiene las propiedades vectoriales de la fuente hasta que sea rasterizada.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cada vez que se utiliza la herramienta de Texto en GIMP, el programa crea una capa de texto especializada independiente (marcada con el icono T). Esta capa preserva la editabilidad tipográfica (cambiar tipo de letra, tamaño o corregir erratas) de forma vectorial sobre la imagen de fondo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Exporta el archivo directamente a formato de hoja de cálculo .xlsx.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .xlsx es el formato de hojas de cálculo de Microsoft Excel.
  </div>
</details>

---

### Pregunta 20
Tras copiar una selección de píxeles de una foto y pegarla sobre el lienzo de GIMP, la capa aparece listada en el panel como "Selección flotante (Capa pegada)". ¿Qué ocurre si el usuario intenta seleccionar otra herramienta o capa sin haber anclado o convertido previamente esa selección flotante?

<details class="quiz-option incorrect">
  <summary>A) Se apaga el ordenador de forma repentina por saturación de la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las selecciones flotantes forman parte del funcionamiento normal de la aplicación y no cuelgan el S.O.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La selección flotante se convierte automáticamente en una máscara de canal alfa permanente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se transforma automáticamente en máscara de canal alfa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se convierte en un gráfico vectorial comprimido en formato SVG.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los píxeles pegados mantienen su formato de mapa de bits (raster) y no se transforman en vectores SVG.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Las acciones de edición quedan bloqueadas sobre el resto del documento hasta que la selección flotante se ancle a una capa existente o se convierta en una Capa nueva.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Selección Flotante es un estado intermedio y temporal de GIMP tras operaciones de pegado. Mantiene bloqueadas las operaciones sobre las demás capas del documento hasta que el usuario decida anclarla (fijarla a la capa inferior mediante el icono del ancla) o hacer clic en el botón Capa nueva para independizarla como una capa regular.
  </div>
</details>
