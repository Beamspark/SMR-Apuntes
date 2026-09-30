# Examen Global 2: Aplicaciones Ofimáticas

[← Volver al Índice de Tests](./index.md)

---

### Pregunta 1
¿Qué tipo de software permite la evaluación y uso gratuito por parte del usuario durante un tiempo o con funciones limitadas, exigiendo el pago de una licencia o registro para su uso prolongado o comercial?

<details class="quiz-option correct">
  <summary>A) Shareware</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Shareware es un modelo de distribución de software comercial propietario que permite la evaluación gratuita durante un periodo determinado (ej. 30 días) o con capacidades reducidas. Transcurrido ese plazo, el usuario debe adquirir la licencia de pago para continuar usando el programa de forma legal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Software en Dominio Público</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software en Dominio Público no tiene derechos de autor ni exige pagos en ningún momento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Licencia GNU/GPL v3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La GNU/GPL es una licencia de software libre que garantiza la ejecución, modificación y redistribución indefinida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Software Libre BSD</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La licencia BSD es una licencia de software libre permisiva sin limitaciones temporales de pago.
  </div>
</details>

---

### Pregunta 2
En Microsoft Word o Google Docs, ¿qué combinación de teclas permite insertar de forma inmediata un Salto de Página manual sin necesidad de pulsar repetidamente la tecla Enter?

<details class="quiz-option incorrect">
  <summary>A) Shift + Enter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Shift + Enter inserta un salto de línea manual dentro del mismo párrafo (sin crear un nuevo párrafo).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ctrl + Enter</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La combinación Ctrl + Enter es el atajo de teclado universal en procesadores de texto para insertar un Salto de página, forzando al cursor a continuar la redacción al inicio de la página siguiente de forma limpia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Alt + Enter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + Enter se utiliza en Excel para insertar un salto de línea dentro de una misma celda.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ctrl + Shift + Enter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Shift + Enter inserta un salto de columna en maquetaciones multicolumna.
  </div>
</details>

---

### Pregunta 3
En un documento maquetado en varias secciones, se necesita cambiar el encabezado de la Sección 2 sin que se modifique el encabezado de la Sección 1. ¿Qué opción debe desactivarse en la barra de herramientas de encabezados?

<details class="quiz-option incorrect">
  <summary>A) "Mostrar notas al pie"</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las notas al pie son aclaraciones situadas en la parte inferior de la página, ajenas al encabezado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) "Incrustar fuentes TrueType"</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una opción de guardado para incrustar tipografías en el archivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) "Vincular al anterior" (Link to Previous)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Por defecto, las secciones heredan el encabezado de la sección precedente. Para romper la herencia y permitir que la Sección 2 tenga un encabezado independiente, es obligatorio desactivar la casilla "Vincular al anterior" (Link to Previous).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) "Alinear al centro"</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un formato de alineación de texto.
  </div>
</details>

---

### Pregunta 4
Al evaluar la fórmula =BUSCARV("ClienteX"; A1:B10; 2; FALSO) en Excel o Google Sheets, la celda devuelve el error #N/A. ¿Cuál es la causa técnica exacta de esta notificación?

<details class="quiz-option incorrect">
  <summary>A) Se ha intentado dividir un número entre cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La división entre cero genera el código de error #DIV/0!.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La fórmula contiene una referencia circular hacia su propia celda.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las referencias circulares generan avisos de advertencia, no el error #N/A.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El nombre de la función está mal escrito o no existe.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un nombre de función inexistente o mal escrito provoca el error #¿NOMBRE?.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El valor buscado ("ClienteX") no se encuentra presente en la primera columna del rango de búsqueda A1:B10.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El error #N/A (Not Available / No disponible) se produce en las funciones de búsqueda cuando el motor no localiza ninguna coincidencia que cumpla el criterio especificado (en este caso, el texto "ClienteX" no existe en la columna A del rango).
  </div>
</details>

---

### Pregunta 5
En la celda A1 se almacena la cadena de texto "ESPAÑA-2026". ¿Qué función de texto extraerá exactamente los últimos 4 caracteres numéricos ("2026")?

<details class="quiz-option correct">
  <summary>A) =DERECHA(A1; 4)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función DERECHA(texto; num_caracteres) extrae la cantidad especificada de caracteres comenzando desde el extremo derecho de la cadena. =DERECHA("ESPAÑA-2026"; 4) devuelve los 4 caracteres finales: "2026".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =IZQUIERDA(A1; 4)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =IZQUIERDA(A1; 4) devolvería los cuatro primeros caracteres de la izquierda: "ESPA".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =LARGO(A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    LARGO(A1) devuelve la longitud total de la cadena en número de caracteres (11).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =NOMPROPIO(A1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    NOMPROPIO convierte la primera letra de cada palabra a mayúscula y el resto a minúscula.
  </div>
</details>

---

### Pregunta 6
En la propiedad Initial Value de la columna clave primaria de una tabla en AppSheet, ¿qué expresión de cálculo es la recomendada para generar automáticamente un código alfanumérico único e indivisible de 8 caracteres?

<details class="quiz-option incorrect">
  <summary>A) =TODAY()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =TODAY() devuelve la fecha actual, repitiendo la clave en registros creados el mismo día.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =UNIQUEID()</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función =UNIQUEID() es la expresión estándar recomendada por AppSheet para generar identificadores únicos universales (UUID de 8 caracteres). Asignada en Initial Value, evita colisiones de claves primarias al insertar nuevos registros.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =USEREMAIL()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =USEREMAIL() asigna el correo del usuario activo, duplicando la clave si crea varios registros.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =COUNT(Tabla[ID])</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =COUNT() devuelve el número total de filas, lo que genera fallos de clave si se borran registros intermedios.
  </div>
</details>

---

### Pregunta 7
¿Qué diferencia técnica existe en GIMP entre la herramienta "Selección por color" (Shift + O) y la herramienta "Selección difusa / Varita mágica" (U)?

<details class="quiz-option incorrect">
  <summary>A) "Selección por color" invierte la imagen a negativo y "Selección difusa" borra la capa activa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna de las dos invierte colores a negativo ni borra capas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) "Selección por color" solo opera en imágenes JPG y "Selección difusa" solo en PNG.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Operan sobre la matriz de píxeles del lienzo de GIMP independientemente del formato de archivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) "Selección por color" selecciona todos los píxeles de esa tonalidad en la totalidad de la imagen aunque no estén en contacto; "Selección difusa" limita la selección a píxeles contiguos o adyacentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Selección por color escanea todo el lienzo global y selecciona cualquier píxel del mismo color, sin importar dónde esté ubicado. La Selección difusa (Varita mágica) requiere contigüidad espacial: solo selecciona los píxeles vecinos adyacentes que estén en contacto directo y dentro del umbral.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas herramientas son idénticas y ejecutan exactamente el mismo algoritmo de corte.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tienen un comportamiento de delimitación espacial completamente diferente.
  </div>
</details>

---

### Pregunta 8
¿Qué formato contenedor multimedia de código abierto, desarrollado por la Fundación Xiph.Org, es utilizado de forma estandarizada para empaquetar audio comprimido con los códecs libres Vorbis u Opus?

<details class="quiz-option incorrect">
  <summary>A) WMV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WMV es un contenedor y códec propietario desarrollado por Microsoft.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) MOV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MOV es un formato contenedor comercial propiedad de Apple.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) AVI</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AVI es un formato contenedor clásico desarrollado por Microsoft en 1992.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) OGG</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    OGG es un formato contenedor libre de patentes desarrollado por Xiph.Org. Es el estándar abierto utilizado para encapsular flujos de audio codificados con Vorbis u Opus en desarrollo web y videojuegos.
  </div>
</details>

---

### Pregunta 9
En una presentación de Google Slides o PowerPoint, se desea que un cuadro de texto aparezca progresivamente en pantalla en el momento en que se avance la secuencia dentro de la diapositiva. ¿Qué tipo de efecto de animación debe aplicarse sobre el objeto?

<details class="quiz-option correct">
  <summary>A) Animación de Entrada (Entrance)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las Animaciones de Entrada (Entrance Animations, como Disolver, Aparecer o Volar hacia dentro) controlan cómo un objeto invisible se hace visible en la pantalla durante el pase de la diapositiva.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Animación de Salida (Exit)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las animaciones de salida hacen desaparecer de la pantalla un objeto que ya estaba visible.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Transición por Empuje (Push)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las transiciones se aplican al paso entre diapositivas completas, no a objetos individuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Desencadenador de borrado (Trigger Wipe)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un tipo estandarizado de animación de objetos.
  </div>
</details>

---

### Pregunta 10
¿Qué registro público de DNS de tipo TXT permite a los servidores de correo receptores verificar qué direcciones IP están autorizadas oficialmente para enviar correo en nombre de un dominio corporativo, combatiendo el SPAM?

<details class="quiz-option incorrect">
  <summary>A) Registro CNAME</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro CNAME crea un alias de un nombre de dominio hacia otro nombre canónico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Registro SPF (Sender Policy Framework)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El registro SPF (Sender Policy Framework) publica en la zona DNS del dominio una lista de las IPs/servidores autorizados para remitir correo. Los servidores de destino consultan este registro para validar la legitimidad del emisor y filtrar envíos no autorizados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Registro MX</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro MX (Mail Exchange) especifica los servidores encargados de recibir correo para el dominio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Registro NS</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro NS (Name Server) delega la autoridad del servidor de nombres DNS.
  </div>
</details>

---

### Pregunta 11
¿Cuál de las siguientes intervenciones forma parte directa de un protocolo de Mantenimiento Preventivo de Hardware en un equipamiento microinformático?

<details class="quiz-option incorrect">
  <summary>A) Formatear la unidad de disco duro cada vez que el usuario apague el equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear continuamente es una medida destructiva e ineficiente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Modificar la dirección de correo electrónico corporativo todas las semanas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar las direcciones de correo es una tarea administrativa de gestión de usuarios, no de mantenimiento de hardware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Limpieza periódica del polvo en disipadores, comprobación de ventiladores y sustitución de la pasta térmica del procesador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El mantenimiento preventivo de hardware agrupa las tareas físicas programadas (limpieza interna de polvo, verificación de flujo de aire en ventiladores y sustitución de la pasta térmica) orientadas a evitar el sobrecalentamiento y alargar la vida útil de los componentes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Reinstalar el sistema operativo Windows desde cero diariamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reinstalar el SO a diario paralizaría la productividad del usuario sin aportar mantenimiento físico.
  </div>
</details>

---

### Pregunta 12
¿Cómo se clasifica técnicamente una pantalla táctil (Touchscreen) dentro del esquema general de periféricos de un sistema informático?

<details class="quiz-option incorrect">
  <summary>A) Periférico exclusivo de entrada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Omitiría su capacidad de representación visual de datos (salida).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Periférico exclusivo de salida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Omitiría su capacidad de captura de datos táctiles (entrada).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Unidad Central de Proceso (CPU).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La CPU es el microprocesador principal de procesamiento de instrucciones, no un periférico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Periférico mixto de Entrada/Salida (E/S).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una pantalla táctil es un periférico mixto de Entrada/Salida: actúa como dispositivo de salida (desplegando la interfaz gráfica visual) y simultáneamente como dispositivo de entrada (capturando las pulsaciones del usuario mediante el digitalizador táctil).
  </div>
</details>

---

### Pregunta 13
¿Qué tipo de sangría en un párrafo de Word o Google Docs desplaza hacia la derecha todas las líneas del párrafo excepto la primera línea, que permanece alineada con el margen izquierdo?

<details class="quiz-option correct">
  <summary>A) Sangría francesa (Hanging Indent)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La sangría francesa (Hanging Indent) mantiene la primera línea pegada al margen izquierdo y aplica una sangría hacia la derecha en la segunda línea y subsiguientes del párrafo. Es muy utilizada en bibliografías y listas numeradas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Sangría de primera línea</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sangría de primera línea desplaza hacia la derecha únicamente la primera línea del párrafo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sangría derecha absoluta</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sangría derecha desplaza todo el bloque respecto al margen derecho.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sangría simétrica de libro</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ajusta los márgenes para documentos impresos a doble cara.
  </div>
</details>

---

### Pregunta 14
En la celda C1 se introduce la fórmula =CONTAR.SI(A1:A10; ">=10"). Si el rango contiene los valores [5, 10, 12, 3, 8, 15, 20, 2, 9, 10], ¿qué resultado numérico devolverá la celda?

<details class="quiz-option incorrect">
  <summary>A) 4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Contaría solo los valores estrictamente mayores que 10 (>10), excluyendo los dos 10.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 5</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función CONTAR.SI evalúa cuántas celdas cumplen la condición >=10. Evaluando la lista [5, 10, 12, 3, 8, 15, 20, 2, 9, 10], existen exactamente 5 celdas cuyo valor es mayor o igual a 10.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es la cantidad total de celdas del rango, sin filtrar por la condición.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 94</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Correspondería a la suma acumulada de los valores, no a la cuenta de celdas.
  </div>
</details>

---

### Pregunta 15
Al configurar una Tarea de automatización (Bot) en AppSheet para generar un informe en formato PDF a partir de una plantilla de Google Docs, ¿qué sintaxis exacta de etiquetas se debe escribir para incrustar dinámicamente el valor almacenado en la columna "Precio"?

<details class="quiz-option incorrect">
  <summary>A) @Precio</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El símbolo @ se utiliza para menciones a usuarios en comentarios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) {{Precio}}</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    {{...}} corresponde a lenguajes de plantillas como Jinja2 o Mustache, no soportados por AppSheet.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) &lt;&lt;[Precio]&gt;&gt;</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El motor de generación de documentos de AppSheet exige la sintaxis de etiquetas dobles angulares con corchetes internos &lt;&lt;[Nombre_Columna]&gt;&gt; para sustituir la variable por el valor real del registro durante la exportación a PDF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) %Precio%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    %...% representa variables de entorno en sistemas Windows/MS-DOS.
  </div>
</details>

---

### Pregunta 16
Un usuario en GIMP desea ampliar el marco o espacio de trabajo de $800 \times 600$ a $1000 \times 1000$ píxeles para añadir un borde exterior, pero sin deformar ni escalar la fotografía colocada dentro. ¿Qué menú debe seleccionar?

<details class="quiz-option incorrect">
  <summary>A) Imagen &gt; Escalar la imagen</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Escalar la imagen redimensiona y estira tanto el lienzo como todos los píxeles de la foto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Herramientas &gt; Transformar &gt; Escala</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Escala manualmente una capa específica mediante tiradores de transformación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Filtros &gt; Distorsiones &gt; Resaltar</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros aplican efectos gráficos, no modifican las dimensiones del lienzo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Imagen &gt; Tamaño del lienzo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta Imagen > Tamaño del lienzo modifica únicamente el marco o contenedor exterior de la imagen sin estirar, redimensionar ni remuestrear los píxeles de las capas existentes.
  </div>
</details>

---

### Pregunta 17
Al conmutar entre dos tomas consecutivas del mismo personaje durante el montaje de una secuencia de vídeo, se aplica la "Ley de los 30°". ¿Cuál es el propósito fundamental de esta norma de lenguaje audiovisual?

<details class="quiz-option correct">
  <summary>A) Evitar el salto de raccord o jump cut, asegurando que la variación angular entre tomas sea de al menos 30 grados para que la transición resulte natural.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Ley de los 30° establece que si se cambia de toma sobre el mismo sujeto, la cámara debe variar su ángulo al menos 30 grados. Si el cambio es inferior a 30°, el ojo humano no percibe una nueva perspectiva sino un parpadeo o "salto de raccord" (jump cut) desagradable.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Forzar a que la exportación del vídeo se realice obligatoriamente a 30 fotogramas por segundo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tasa de fotogramas (fps) es un parámetro independiente de la posición de la cámara.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Elevar la ganancia del micrófono de solapa en 30 decibelios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No guarda relación con los niveles de intensidad de audio en decibelios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir automáticamente la secuencia de vídeo en un archivo de sonido MP3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ejecuta conversiones de formatos de archivo multimedia.
  </div>
</details>

---

### Pregunta 18
Para evitar la sobrecarga visual y mantener la síntesis en las presentaciones, ¿qué establece la regla de composición conocida como "6x6"?

<details class="quiz-option incorrect">
  <summary>A) Utilizar un máximo de 6 colores y 6 imágenes por cada diapositiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utilizar 6 colores e imágenes saturaría por completo el diseño de la diapositiva.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Un máximo de 6 líneas de texto o viñetas por diapositiva, y no más de 6 palabras por línea.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La regla 6x6 es una directriz de maquetación multimedia que recomienda no superar las 6 viñetas o líneas por diapositiva y no escribir más de 6 palabras en cada viñeta, forzando la concisión y la legibilidad a distancia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Dedicar 6 minutos de exposición a cada grupo de 6 diapositivas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No impone límites rígidos sobre la cadencia de tiempo por diapositiva.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Guardar el archivo de la presentación en 6 carpetas distintas del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es una norma de almacenamiento de archivos.
  </div>
</details>

---

### Pregunta 19
Un técnico de seguridad examina la autenticidad de un correo entrante. ¿En qué sección interna del mensaje se registran las líneas Received: que contienen las direcciones IP y nombres de host de los servidores por los que transitó el mensaje?

<details class="quiz-option incorrect">
  <summary>A) En el campo de asunto (Subject)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo Asunto: contiene únicamente el título textual del correo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En el archivo adjunto comprimido</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los adjuntos son archivos independientes y no contienen la trazabilidad del protocolo SMTP.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) En las cabeceras completas del correo (Email Headers)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las cabeceras completas (Email Headers) almacenan la metainformación de transporte del correo. Cada servidor (MTA) que reenvía el correo estampa una línea Received: indicando su dirección IP, nombre de host y sello de tiempo, lo que permite auditar su origen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En la firma estática en formato HTML</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La firma HTML es contenido del cuerpo del mensaje redactado por el usuario.
  </div>
</details>

---

### Pregunta 20
Cuando un técnico de Soporte de Nivel 1 no puede resolver una incidencia en el tiempo comprometido en el Acuerdo de Nivel de Servicio (SLA), ¿qué procedimiento debe aplicar?

<details class="quiz-option incorrect">
  <summary>A) Eliminar el ticket para no penalizar el tiempo medio de resolución.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Borrar tickets altera las métricas e incumple el contrato de servicio (mala práctica).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Apagar el servidor central sin avisar a los usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Apagar servidores sin justificación causa caídas no planificadas en la empresa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Formatear inmediatamente el ordenador del usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear sin diagnóstico previo es una medida desproporcionada que destruye datos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ejecutar el escalado funcional hacia Nivel 2, documentando en el ticket las comprobaciones y diagnósticos realizados.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El escalado funcional transfiere la responsabilidad del caso al equipo técnico especializado de Nivel 2. Para no perder tiempo y cumplir el SLA, el técnico de Nivel 1 debe registrar en el ticket todas las pruebas realizadas antes de derivarlo.
  </div>
</details>

---

### Pregunta 21
En la gestión de un sistema de archivos corporativo (NTFS o Linux ext4), ¿cuál es la diferencia de comportamiento entre el permiso de Lectura (Read) y el permiso de Escritura (Write) sobre un archivo?

<details class="quiz-option correct">
  <summary>A) El permiso de lectura autoriza la apertura y visualización del contenido; el de escritura autoriza modificar, guardar cambios o truncar el archivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El permiso de lectura (Read) permite abrir, examinar o copiar el contenido del archivo sin alterar los bytes originales. El permiso de escritura (Write) concede autorización para modificar, añadir, sobreescribir o guardar cambios en la estructura de los datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El permiso de lectura borra el archivo y el de escritura lo comprime en .zip.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El borrado depende del permiso de eliminación o modificación sobre el directorio contenedor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El permiso de lectura solo se aplica a administradores y el de escritura a usuarios invitados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los permisos se asignan granularmente a cualquier usuario o grupo de la red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambos permisos son idénticos y solo varían según el color del icono.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tienen funciones totalmente distintas en la matriz de seguridad del sistema de archivos.
  </div>
</details>

---

### Pregunta 22
Al exportar un documento de texto al formato estándar abierto .epub, ¿para qué tipo de entornos y dispositivos está optimizada la maquetación de dicho archivo?

<details class="quiz-option incorrect">
  <summary>A) Impresoras industriales offset de gran formato.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las impresoras industriales de gran formato exigen archivos estáticos PDF a 300 ppp.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Lectores de libros electrónicos (e-readers) y pantallas móviles con maquetación de texto auto-ajustable (reflowable).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato .epub (Electronic Publication) es el estándar abierto para libros digitales. Su característica clave es la maquetación redimensionable/auto-ajustable (reflowable): el texto se adapta dinámicamente al tamaño de pantalla y fuente del lector digital (e-reader o smartphone).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Servidores de bases de datos relacionales SQL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un formato de intercambio de datos para bases de datos relacionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Reproductores de audio MP3 sin pantalla.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un formato de lectura gráfica de texto e imágenes, no de audio puro.
  </div>
</details>

---

### Pregunta 23
En una hoja de cálculo, si se introduce la fórmula =A$1*2 en la celda B1 y se copia pegando a la celda B2, ¿qué fórmula exacta figurará en la celda B2?

<details class="quiz-option incorrect">
  <summary>A) =A$2*2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha modificado el número de fila a pesar de tener el signo de fijación $1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =B$1*2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha cambiado la columna A a B al desplazarse hacia abajo (las columnas solo cambian al desplazarse horizontalmente).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =A$1*2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    A$1 es una referencia mixta donde la columna A es relativa y la fila $1 está congelada mediante el signo $. Al copiar la fórmula verticalmente de la fila 1 (B1) a la fila 2 (B2), la fila permanece bloqueada en 1, resultando exactamente =A$1*2.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =A1*2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha eliminado el signo $ de la referencia.
  </div>
</details>

---

### Pregunta 24
Al configurar la función =USEREMAIL() en el parámetro Initial Value de una columna en AppSheet, ¿qué dato se registra automáticamente al abrir el formulario para crear un registro?

<details class="quiz-option incorrect">
  <summary>A) La dirección IP pública del router Wi-Fi.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La IP pública no es capturada por la función USEREMAIL().
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El número de serie de la tarjeta SIM del dispositivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AppSheet no accede a datos privados del hardware de la tarjeta SIM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La clave privada de cifrado del servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No expone las claves criptográficas del servidor.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La dirección de correo electrónico autenticada de la cuenta activa del usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función USEREMAIL() captura la dirección de correo con la que el usuario ha iniciado sesión autenticada en AppSheet, completando automáticamente el campo de auditoría sin intervención manual.
  </div>
</details>

---

### Pregunta 25
En el modelo aditivo de color RGB utilizado en pantallas e imágenes digitales en GIMP, ¿cuáles son los tres canales primarios que componen la información cromática de cada píxel?

<details class="quiz-option correct">
  <summary>A) Rojo (Red), Verde (Green) y Azul (Blue)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modelo RGB es un sistema de síntesis aditiva basado en la emisión de luz en tres canales primarios: Rojo (Red), Verde (Green) y Azul (Blue), asignando a cada canal intensidades de 0 a 255.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cian, Magenta y Amarillo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde al modelo sustractivo CMYK para mezcla de tintas de impresión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Tono, Saturación y Luminosidad</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a las coordenadas de percepción del modelo HSL.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Negro, Blanco y Gris</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Representa imágenes monocromáticas o en escala de grises.
  </div>
</details>

---

### Pregunta 26
¿Qué característica técnica define al formato contenedor WebM impulsado por la comunidad de código abierto y Google?

<details class="quiz-option incorrect">
  <summary>A) Es un formato ejecutable comercial propietario de Microsoft.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WMV es el formato comercial propietario de Microsoft.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Es un formato contenedor abierto y libre de regalías diseñado para la web HTML5 con códecs libres VP8/VP9 y Vorbis/Opus.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    WebM es un contenedor libre de derechos (royalty-free) diseñado para la etiqueta &lt;video&gt; de HTML5 en la web. Agrupa flujos codificados con los códecs de vídeo libres VP8/VP9 y audio Vorbis u Opus.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Exige pagar cánones a Apple por cada reproducción en navegadores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    WebM es 100% libre de regalías y no exige pagos a ninguna entidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Solo almacena archivos de texto plano sin soporte para vídeo ni sonido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un contenedor audiovisual para secuencias de vídeo y sonido de alta definición.
  </div>
</details>

---

### Pregunta 27
¿Para qué tarea de edición está optimizada la vista "Clasificador de diapositivas" (Slide Sorter) en programas como PowerPoint o Google Slides?

<details class="quiz-option incorrect">
  <summary>A) Redactar párrafos extensos de texto sin ver los gráficos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La Vista de Esquema está enfocada a la edición de texto jerárquico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Formatear celdas numéricas de hojas de cálculo vinculadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una función de hojas de cálculo como Excel o Google Sheets.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Reorganizar, mover, duplicar o eliminar diapositivas mediante una vista matricial de miniaturas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La vista Clasificador de diapositivas despliega la totalidad de las diapositivas del documento en forma de miniaturas. Facilita reordenar bloques, mover elementos por arrastre, aplicar transiciones masivas y evaluar el flujo de la presentación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Grabar la locución de voz del orador con calidad de estudio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La grabación de voz se realiza desde la función de Ensayo o Grabación de presentación.
  </div>
</details>

---

### Pregunta 28
¿Qué tipo de información estandarizada se almacena e intercambia mediante archivos con extensión .vcf (vCard) entre clientes de correo y aplicaciones de agenda?

<details class="quiz-option incorrect">
  <summary>A) Grabaciones de vídeo comprimidas en alta definición.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos de vídeo utilizan contenedores como MP4, AVI o MKV.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Bases de datos cifradas de contraseñas de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un formato de gestión de bóvedas de contraseñas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Registros de fallos de la tarjeta gráfica del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los registros de fallos de hardware se almacenan en archivos de log de sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Contactos y tarjetas de visita electrónicas con datos personales y corporativos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La especificación vCard (.vcf) es el estándar internacional para el intercambio de información de contactos (tarjetas de visita electrónicas), conteniendo nombres, teléfonos, correos, empresas y direcciones.
  </div>
</details>

---

### Pregunta 29
¿Cuál es la principal ventaja de programar una Copia de Seguridad Diferencial respecto a una Copia Incremental durante la fase de restauración del sistema tras un fallo?

<details class="quiz-option correct">
  <summary>A) Requiere únicamente la última copia Completa y la última copia Diferencial para restaurar el sistema por completo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La copia Diferencial guarda todos los datos cambiados desde la última copia Completa. Para restaurar, solo se necesitan 2 archivos: la copia Completa inicial y la última copia Diferencial. La Incremental exige restaurar la Completa más todas las incrementales intermedias una a una.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) No consume espacio de almacenamiento en el disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocupa un espacio acumulativo en disco que crece con cada día que pasa desde la completa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Elimina automáticamente los virus informáticos de la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un backup no actúa como antivirus en memoria RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se ejecuta en menos de un segundo sin importar el volumen de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tiempo de copia depende del volumen de bytes modificados.
  </div>
</details>

---

### Pregunta 30
¿En qué se diferencia jurídicamente el Software Libre bajo licencia GNU/GPL del software en Dominio Público?

<details class="quiz-option incorrect">
  <summary>A) El software GPL es siempre de pago y el de Dominio Público es ilegal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software libre GPL se puede distribuir gratuitamente y el Dominio Público es totalmente legal.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El software GPL impone la cláusula copyleft para obligar a que los trabajos derivados sigan siendo libres, mientras que el Dominio Público renuncia a los derechos de autor permitiendo que terceros cierren o privaticen el código derivado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La licencia GPL utiliza el mecanismo del copyleft para obligar a que cualquier modificación se redistribuya bajo la misma licencia libre. El Dominio Público implica la renuncia total a los derechos de autor, permitiendo que una empresa coja ese código, lo modifique y lo venda como software propietario de código cerrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El software GPL solo funciona en Linux y el Dominio Público solo en Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las licencias son marcos jurídicos independientes del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) No existe ninguna diferencia entre ambos conceptos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Poseen un tratamiento de los derechos de autor y herencia de código totalmente opuesto.
  </div>
</details>

---

### Pregunta 31
En Google Docs o Microsoft Word, ¿cuál es el atajo de teclado estándar para abrir la ventana de inserción de un hipervínculo o enlace sobre el texto seleccionado?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + H</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + H abre la función de Reemplazar texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + Shift + L</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + Shift + L aplica viñetas en algunas suites.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Ctrl + K</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La combinación de teclas Ctrl + K abre la ventana de inserción de hipervínculo, permitiendo vincular el texto seleccionado a una URL externa o a un marcador interno del documento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Alt + F4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alt + F4 es el atajo del sistema para cerrar la aplicación activa.
  </div>
</details>

---

### Pregunta 32
En la sintaxis de la función =BUSCARV(valor_buscado; matriz_tabla; indicador_columnas; [ordenado]), ¿qué valor debe asignarse al cuarto parámetro [ordenado] para exigir una coincidencia exacta de texto?

<details class="quiz-option incorrect">
  <summary>A) El primer argumento (valor_buscado).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es el dato que se pretende buscar en la primera columna.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El segundo argumento (matriz_tabla).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es el rango de celdas que contiene la tabla de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El tercer argumento (indicador_columnas).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es el número ordinal de la columna de la que se extraerá el valor devuelto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El cuarto argumento ([ordenado]), asignando el valor FALSO o 0.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El cuarto argumento opcional [ordenado] (o coincidencia_exacta) determina el modo de búsqueda. Si se configura como FALSO (o 0), la función exige localizar exactamente la cadena indicada. Si se omite o se pone VERDADERO, realiza una búsqueda aproximada en rangos ordenados.
  </div>
</details>

---

### Pregunta 33
En AppSheet, ¿en qué pestaña y propiedad se configura una regla lógica como =[Email]=USEREMAIL() para garantizar que cada comercial solo pueda descargar a su dispositivo sus propios registros de ventas?

<details class="quiz-option correct">
  <summary>A) Pestaña Security &gt; Data, en la propiedad Security Filter.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los Security Filters, configurados en la pestaña Security &gt; Data, evalúan expresiones lógicas a nivel de servidor antes de la sincronización. Al aplicar =[Email]=USEREMAIL(), el servidor filtra y descarga únicamente las filas asociadas al correo autenticado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Pestaña UX &gt; Brand, en la propiedad Theme Color.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UX &gt; Brand modifica los aspectos visuales y colores de la interfaz.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Pestaña Behavior &gt; Actions, en el botón Delete.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Define botones de acción interactiva sobre los datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Pestaña Data &gt; Tables, convirtiendo la hoja en un documento PDF.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No realiza filtrado de seguridad por usuario.
  </div>
</details>

---

### Pregunta 34
Si al borrar con la herramienta Goma sobre una capa en GIMP aparece el color de fondo en lugar de la rejilla de ajedrez transparente, ¿qué propiedad le falta a la capa y cómo se activa?

<details class="quiz-option incorrect">
  <summary>A) Pulsar la combinación Ctrl + Alt + Supr.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Abre el Administrador de tareas de Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Le falta el Canal Alfa; se activa haciendo clic derecho sobre la capa y seleccionando Añadir canal alfa.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Canal Alfa almacena la información de transparencia de una capa. Si una capa no lo tiene activado, el programa no puede representar la transparencia al borrar y pinta con el color de fondo. Hacer clic derecho sobre la capa y pulsar Añadir canal alfa resuelve el problema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cambiar la resolución del monitor a 72 ppp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La resolución de salida a pantalla no añade canales de transparencia alfa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Exportar la imagen a un archivo de texto plano .txt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No convierte datos de capas gráficos a archivos de texto.
  </div>
</details>

---

### Pregunta 35
En la línea de tiempo del editor de vídeo OpenShot, ¿qué herramienta permite dividir o cortar un clip de vídeo o audio largo en dos fragmentos totalmente independientes?

<details class="quiz-option incorrect">
  <summary>A) Herramienta Varita Mágica</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una herramienta de selección de color en editores fotográficos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Filtro de Desenfoque Gaussiano</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un filtro de suavizado de imagen.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Herramienta de Navaja / Tijeras (Razor Tool)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Herramienta de Navaja / Tijeras (Razor Tool) transforma el cursor en una línea de corte que, al hacer clic sobre cualquier punto de un clip en la línea de tiempo, lo fracciona en dos bloques independientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Creador de Títulos 3D con Blender</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Genera textos animados tridimensionales.
  </div>
</details>

---

### Pregunta 36
Durante la reproducción a pantalla completa de una presentación, ¿qué ocurre si el ponente presiona la tecla N (o la tecla B en teclados con atajos en inglés)?

<details class="quiz-option incorrect">
  <summary>A) La presentación se borra del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ejecuta comandos de borrado de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Se reinicia el sistema operativo del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No interactúa con el reinicio del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se abre la ventana de configuración de impresión de la diapositiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El menú de impresión se abre mediante Ctrl + P.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La pantalla se apaga temporalmente en negro (Blackscreen) para pausar la proyección y centrar la atención en el orador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Presionar la tecla N (o B por Blackscreen) durante el pase a pantalla completa vuelve la pantalla totalmente negra, pausando la imagen para redirigir la mirada de la audiencia hacia el ponente. Al pulsar cualquier tecla se restaura la diapositiva.
  </div>
</details>

---

### Pregunta 37
¿Qué protocolo estándar cliente-servidor se utiliza para la sincronización remota e intercambio de datos de eventos y citas de agendas electrónicas a través de la red?

<details class="quiz-option correct">
  <summary>A) CalDAV / Formato iCalendar (.ics)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    CalDAV es el protocolo de red (basado en WebDAV) diseñado para sincronizar agendas y calendarios de forma remota, utilizando la norma iCalendar (.ics) para la estructura de los eventos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) POP3S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3S es el protocolo cifrado de descarga de correo electrónico.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) FTP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FTP es el protocolo de transferencia de archivos genéricos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SNMP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SNMP es un protocolo de monitorización de dispositivos de red.
  </div>
</details>

---

### Pregunta 38
¿Qué ventaja técnica ofrece arrancar un sistema operativo Windows en Modo Seguro (Safe Mode) ante una infección de malware o fallos graves de controladores?

<details class="quiz-option incorrect">
  <summary>A) Duplica la memoria RAM del ordenador de forma virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria RAM física no se modifica por el tipo de arranque.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Inicia el sistema con un conjunto mínimo de controladores básicos y sin cargar servicios o aplicaciones de terceros en el inicio, facilitando la desinfección y reparación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Modo Seguro (Safe Mode) carga un entorno básico del núcleo (kernel) omitiendo software de terceros y controladores no esenciales. Esto impide que el malware o los drivers corruptos se ejecuten en el arranque, permitiendo su limpieza.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite navegar por Internet sin necesidad de tarjeta de red ni Wi-Fi.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Requiere interfaz de red si se arranca en "Modo Seguro con funciones de red".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convierte las ventanas del sistema a archivos de audio MP3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No realiza conversiones de entorno a formato de audio.
  </div>
</details>

---

### Pregunta 39
Al maquetar un documento con fuentes tipográficas corporativas personalizadas en Microsoft Word para enviarlo a un cliente externo, ¿qué opción en Opciones de Word &gt; Guardar permite garantizar que el texto no cambie de apariencia si el equipo destino no tiene instalada esa fuente?

<details class="quiz-option incorrect">
  <summary>A) Exportar a formato de texto plano .txt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .txt elimina todos los estilos, fuentes e imágenes del documento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Convertir las imágenes a formato GIF animado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No afecta a las tipografías ni al renderizado del texto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Incrustar fuentes en el archivo (Embed fonts in the file).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La opción Incrustar fuentes en el archivo (Embed fonts in the file) guarda las definiciones de los tipos de letra TrueType/OpenType dentro del propio archivo .docx. Al abrirlo en otro equipo que no tenga esas fuentes instaladas, el sistema utiliza los tipos incrustados manteniendo la maquetación exacta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cambiar la orientación de la página a horizontal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Modifica la disposición de la hoja, no la presencia de fuentes tipográficas en el equipo cliente.
  </div>
</details>

---

### Pregunta 40
¿Qué diferencia operativa existe entre un salto de sección de "Página siguiente" y un salto de sección "Continuo" en un procesador de texto?

<details class="quiz-option incorrect">
  <summary>A) El de página siguiente borra el texto y el continuo duplica las imágenes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno de los dos borra texto ni duplica imágenes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El de página siguiente solo funciona en Google Docs y el continuo solo en Word.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos tipos de salto son estándares disponibles en las principales suites ofimáticas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ninguna, ambos realizan la misma acción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Difieren en la posición de inicio del nuevo bloque de sección.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El de página siguiente inicia la nueva sección en la hoja subsiguiente; el continuo arranca la nueva sección inmediatamente en la misma página donde se insertó.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un salto de sección de página siguiente fuerza la creación de un nuevo bloque de sección empezando en la parte superior de la página posterior. Un salto de sección continuo inicia la nueva sección en la misma página (muy útil para cambiar de 1 a 2 columnas en mitad de una hoja).
  </div>
</details>
