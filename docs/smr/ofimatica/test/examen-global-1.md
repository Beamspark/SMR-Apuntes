# Examen Global 1: Aplicaciones Ofimáticas

[← Volver al Índice de Tests](./index.md)

---

### Pregunta 1
En la celda A1 se introduce la expresión =5+10*2 y en la celda A2 se escribe = (5+10)*2. ¿Qué valores numéricos mostrarán respectivamente ambas celdas tras pulsar la tecla Enter?

<details class="quiz-option correct">
  <summary>A) 25 en la celda A1 y 30 en la celda A2.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las hojas de cálculo aplican la jerarquía matemática estándar (PEMDAS). En =5+10*2, la multiplicación se evalúa antes que la suma ($10 \times 2 = 20$; $20 + 5 = 25$). En = (5+10)*2, los paréntesis fuerzan la prioridad de la adición primero ($5 + 10 = 15$; $15 \times 2 = 30$).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 30 en la celda A1 y 30 en la celda A2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Asume erróneamente que en A1 se realiza la suma de izquierda a derecha sin respetar la jerarquía de operadores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 25 en la celda A1 y #¡VALOR! en la celda A2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El uso de paréntesis para alterar la prioridad de operaciones es totalmente válido y no genera errores de tipo #¡VALOR!.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) #REF! en ambas celdas por sintaxis inválida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No hay destrucción de referencias que justifique el código #REF!.
  </div>
</details>

---

### Pregunta 2
Un desarrollador publica un programa informático adjuntando su código fuente original. Permite que cualquier usuario ejecute, estudie, modifique y distribuya copias del software, pero impone la condición legal de que cualquier versión derivada deba distribuirse obligatoriamente bajo la misma licencia de código abierto. ¿A qué tipo de licencia corresponde este requisito de herencia?

<details class="quiz-option incorrect">
  <summary>A) Licencia Shareware de evaluación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Shareware es un modelo comercial propietario de prueba temporal con código cerrado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Licencia Copyleft (como la GNU/GPL).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El principio de Copyleft (característico de la licencia GNU/GPL) exige que los trabajos derivados de un software libre mantengan de forma hereditaria la misma libertad y tipo de licencia original, impidiendo que terceros privaticen el código modificado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Licencia Propietaria con DRM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La licencia propietaria restringe la copia, modificación y el acceso al código fuente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Licencia de Dominio Público sin restricciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El software en Dominio Público carece de derechos de autor y permite que alguien cierre el código derivado.
  </div>
</details>

---

### Pregunta 3
Para cumplir con la directriz de seguridad de almacenamiento y respaldo denominada "Regla 3-2-1", ¿cuál de las siguientes configuraciones de almacenamiento debe implementar una empresa?

<details class="quiz-option incorrect">
  <summary>A) Guardar 3 copias en la misma memoria USB de 2 Terabytes dividida en 1 partición primaria.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Almacenar todas las copias en el mismo pendrive USB genera un punto único de fallo por pérdida física del dispositivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Mantener 3 servidores web activos en el mismo edificio comunicados por cable UTP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mantener todos los servidores en el mismo edificio expone las 3 copias a incendios o robos locales.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Disponer de 3 copias de los datos, almacenadas en 2 medios/soportes de tecnología diferente, con 1 de las copias ubicada fuera del emplazamiento físico (off-site / nube).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Regla 3-2-1 exige técnicamente: 3 copias totales de la información (la primaria más 2 respaldos), en 2 soportes o tecnologías físicamente distintas (ej. disco duro e impresoras de cinta/NAS) y 1 de las copias custodiada fuera de la sede central (off-site) para sobrevivir a desastres físicos locales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Realizar 3 copias de seguridad cada 2 horas durante 1 solo día del año.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No guarda relación con la diversidad de soportes ni con la ubicación geográfica.
  </div>
</details>

---

### Pregunta 4
Se requiere exportar desde GIMP un logotipo corporativo con fondo transparente para incrustarlo en una página web. ¿Qué formato de archivo gráfico admite canal alfa de transparencia de alta calidad manteniendo una compresión sin pérdida?

<details class="quiz-option incorrect">
  <summary>A) JPG</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    JPG utiliza compresión con pérdida y no soporta transparencia (asigna fondo blanco opaco).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) BMP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    BMP es un mapa de bits plano sin compresión ni gestión nativa de transparencias web.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) EPS</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    EPS es un contenedor vectorial de impresión, no un mapa de bits estándar de salida web.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) PNG</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato PNG (Portable Network Graphics) soporta canal alfa (transparencias completas y gradaciones de opacidad) e implementa un algoritmo de compresión sin pérdida (lossless), siendo el estándar web de elección para gráficos con fondos transparentes.
  </div>
</details>

---

### Pregunta 5
Un usuario de Google Docs o Microsoft Word desea distribuir un informe oficial garantizando que la maquetación, tipografías e imágenes permanezcan totalmente inalterables al abrirse en cualquier dispositivo móvil o sistema operativo. ¿En qué formato debe exportarse?

<details class="quiz-option correct">
  <summary>A) .pdf</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El formato PDF (Portable Document Format) es el estándar estático de intercambio de documentos. Fija de forma vectorial la maquetación y tipografías, impidiendo descuadres al visualizarse o imprimirse desde distintas plataformas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) .docx</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .docx es un formato editable cuyo reencuadre depende de las fuentes instaladas en el equipo cliente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) .txt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .txt almacena texto plano sin estilos, imágenes ni formatos de página.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .rtf</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .rtf conserva estilos básicos pero descuadra maquetaciones complejas de objetos o columnas.
  </div>
</details>

---

### Pregunta 6
En la plataforma AppSheet, al configurar la estructura de columnas de una tabla en la pestaña Data, ¿cuál es la función de la propiedad de columna "Key" (Clave Primaria)?

<details class="quiz-option incorrect">
  <summary>A) Cambiar el color de fondo de los botones de la vista a rojo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La estética de los botones se configura en UX > Format Rules o UX > Brand.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Identificar de forma única e indivisible cada registro o fila de la tabla para garantizar la integridad referencial.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Key (Clave Primaria) en AppSheet es el identificador único obligatorio de cada registro (frecuentemente generado con la función =UNIQUEID()). Impide duplicados en la base de datos y permite vincular tablas mediante relaciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Enviar un correo masivo a todos los usuarios de la base de datos al iniciar sesión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El envío de notificaciones desatendidas se programa mediante Bots en el módulo Automation.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir la hoja de cálculo de Google Sheets en un archivo comprimido .zip.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AppSheet trabaja contra la hoja de cálculo origen sin comprimir su formato físico.
  </div>
</details>

---

### Pregunta 7
Un editor de vídeo necesita reducir masivamente el tamaño en bytes de un archivo grabado en bruto (raw) sin alterar su resolución Full HD. ¿Qué elemento de software o algoritmo matemático realiza el proceso de compresión y descompresión del flujo de vídeo?

<details class="quiz-option incorrect">
  <summary>A) El servidor web Apache.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Apache es un servidor HTTP para alojamiento web, no un compresor de vídeo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El contenedor .mkv.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .mkv es el archivo contenedor, no el motor matemático de compresión.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El códec de vídeo (como H.264 o VP9).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El códec (Coder-Decoder) es el algoritmo encargado de procesar y comprimir los datos de imagen y audio eliminando redundancias. El contenedor (ej. .mkv o .mp4) solo empaqueta los flujos procesados por el códec.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El conector físico del cable HDMI.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HDMI es una interfaz física de transmisión de señal de vídeo y audio sin comprimir.
  </div>
</details>

---

### Pregunta 8
Al diseñar una plantilla en Google Slides o PowerPoint, ¿qué vista o elemento maestro debe modificarse para que un logotipo aparezca automáticamente en la misma esquina en las 40 diapositivas de la presentación?

<details class="quiz-option incorrect">
  <summary>A) La vista Clasificador de diapositivas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Clasificador de diapositivas permite reordenar o mover miniaturas, no edita plantillas maestras.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El panel de Notas del orador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Contiene anotaciones de apoyo privadas para la locución del ponente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La vista de Lectura individual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un modo de visualización del documento en ventana reducida.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El Patrón de diapositivas (Slide Master).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Patrón de diapositivas (Slide Master) almacena las directrices globales de diseño. Cualquier objeto (como un logotipo) o cambio tipográfico aplicado sobre el patrón se hereda instantáneamente en todas las diapositivas del documento.
  </div>
</details>

---

### Pregunta 9
¿Qué protocolo de red de la capa de aplicación se utiliza de forma estandarizada para el transporte y envío de mensajes de correo electrónico desde el cliente al servidor saliente?

<details class="quiz-option correct">
  <summary>A) SMTP</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    SMTP (Simple Mail Transfer Protocol) es el protocolo estándar diseñado para la transferencia y enrutamiento de correo saliente entre clientes y servidores (puerto 25 o 587 con cifrado).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) POP3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3 se encarga exclusivamente de la descarga de correo de entrada desde el servidor al cliente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) IMAP4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IMAP4 gestiona la sincronización remota de bandejas de entrada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) CalDAV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CalDAV es un protocolo para la sincronización de agendas y calendarios (.ics).
  </div>
</details>

---

### Pregunta 10
Se evalúa la fórmula =SI(A1>=5; "Aprobado"; "Suspenso"). Si la celda A1 contiene exactamente la cifra 5, ¿qué cadena de texto devolverá la función?

<details class="quiz-option incorrect">
  <summary>A) Suspenso</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Devolvería Suspenso si el valor fuese estrictamente menor que 5 (ej. 4,99).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Aprobado</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El operador relacional >= evalúa "mayor o igual que". Al ser el valor de A1 exactamente 5, la prueba lógica 5>=5 resulta VERDADERO, ejecutando el segundo argumento de la función y devolviendo Aprobado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) #¡VALOR!</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La comparación entre números es sintácticamente correcta y no causa error.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 5</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra la cadena asignada al valor de verdadero, no la nota evaluada.
  </div>
</details>

---

### Pregunta 11
Para cambiar la orientación de la página de vertical a horizontal únicamente en la página 3 de un documento de Word o Google Docs sin alterar las páginas 1, 2 y 4, ¿qué elemento de maquetación debe insertarse previamente?

<details class="quiz-option incorrect">
  <summary>A) Un salto de línea manual (Shift + Enter).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El salto de línea baja el cursor al siguiente renglón dentro del mismo párrafo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un salto de página simple (Ctrl + Enter).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El salto de página fuerza el paso a la siguiente hoja pero mantiene la misma sección y orientación global.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Un salto de sección (siguiente página).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los saltos de sección dividen el documento en bloques independientes con sus propias propiedades de página (márgenes, orientación, encabezados). Para cambiar la orientación en una sola página se debe aislar mediante saltos de sección al inicio y al final de la misma.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una nota al pie de página.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las notas al pie añaden aclaraciones de texto al final de la página.
  </div>
</details>

---

### Pregunta 12
Un equipo sufre el cifrado malicioso de sus unidades de disco y la aparición de una nota exigiendo el pago de un rescate en criptomonedas. ¿A qué tipo de ataque informático corresponde y cuál es la primera medida de contención técnica?

<details class="quiz-option incorrect">
  <summary>A) Phishing; se soluciona enviando un correo al administrador en CCO.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Phishing es una estafa de suplantación de identidad para capturar credenciales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Adware; se soluciona cambiando el fondo de pantalla en Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Adware despliega ventanas publicitarias no solicitadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Spyware; se soluciona ejecutando Ctrl + Shift + V en la consola.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Spyware espía de forma transparente la actividad y pulsaciones de teclado (keylogger).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ransomware; la primera medida es aislar e desconectar inmediatamente el equipo de la red física y Wi-Fi para evitar la propagación lateral.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Ransomware es malware que secuestra/cifra los datos locales. Para evitar que el virus se propague a carpetas compartidas en red o a los servidores corporativos, se debe desconectar la máquina de la red inmediatamente.
  </div>
</details>

---

### Pregunta 13
¿Qué componente de hardware de acceso aleatorio actúa como memoria volátil del sistema, cargando los programas e instrucciones durante su ejecución y borrando todo su contenido al apagar el ordenador?

<details class="quiz-option correct">
  <summary>A) Memoria RAM (Random Access Memory).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria RAM es la memoria principal de trabajo del ordenador, de acceso aleatorio, reutilizable y volátil (pierde toda la información almacenada al cortar la alimentación eléctrica).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Disco duro SSD.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El SSD es un medio de almacenamiento secundario no volátil que conserva datos permanentemente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Fuente de alimentación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fuente de alimentación convierte la corriente alterna en continua para los componentes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) ROM BIOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ROM almacena firmware básico no volátil (BIOS/UEFI) de solo lectura.
  </div>
</details>

---

### Pregunta 14
En GIMP, un diseñador desea modificar la visibilidad de partes de una capa mediante una gradación de grises (donde el blanco muestra y el negro oculta) sin borrar físicamente los píxeles de la imagen original. ¿Qué herramienta de edición no destructiva debe utilizar?

<details class="quiz-option incorrect">
  <summary>A) Una ruta vectorial sin renderizar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las rutas vectoriales definen contornos pero no controlan por sí mismas la opacidad de píxeles.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Una Máscara de capa (Layer Mask).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Máscara de capa es un mapa en escala de grises vinculado a una capa. El blanco otorga 100% de opacidad (visibilidad) y el negro 100% de transparencia, permitiendo ocultar y recuperar partes de la imagen sin destruir los píxeles originales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un filtro de desenfoque gaussiano.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El desenfoque altera la nitidez de la imagen, no su transparencia por zonas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una selección flotante sin anclar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La selección flotante es un estado temporal de pegado que bloquea la edición hasta anclarse.
  </div>
</details>

---

### Pregunta 15
En AppSheet, se desea vincular la tabla Pedidos con la tabla Clientes para que el usuario elija un cliente válido de una lista desplegable. ¿Qué tipo de dato (Type) debe asignarse a la columna ID_Cliente en la tabla Pedidos?

<details class="quiz-option incorrect">
  <summary>A) Text</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Text guarda cadenas alfanuméricas simples sin crear enlaces de integridad entre tablas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) EnumList</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    EnumList permite elegir múltiples opciones fijas pero no genera relaciones entre tablas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Ref (Referencia)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El tipo de dato Ref establece relaciones de clave externa (Foreign Key) en AppSheet, conectando la tabla actual con la tabla de destino seleccionada y desplegando listas de selección validadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) ChangeCounter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ChangeCounter incrementa un contador ante cambios en otra columna.
  </div>
</details>

---

### Pregunta 16
¿A qué especificaciones técnicas de diseño e impartición se refiere la regla "10/20/30" enunciada por Guy Kawasaki para presentaciones ejecutivas?

<details class="quiz-option incorrect">
  <summary>A) 10 minutos de introducción, 20 diapositivas y 30 palabras por frase.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alterar el número de diapositivas y las palabras por frase viola la síntesis propuesta por Kawasaki.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 10 Megabytes de peso, 20 imágenes y 30 transiciones de pantalla.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No impone límites de peso ni exige cantidades de transiciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 10 colores primarios, 20 fuentes y 30 segundos por diapositiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utilizar 10 colores y 20 fuentes distintas atenta contra la sobriedad visual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Un máximo de 10 diapositivas, no más de 20 minutos de duración total y un tamaño de fuente no inferior a 30 puntos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La regla 10/20/30 establece que una presentación efectiva no debe superar las 10 diapositivas, durar más de 20 minutos de exposición oral ni utilizar un tamaño tipográfico menor a 30 puntos.
  </div>
</details>

---

### Pregunta 17
Para enviar una circular a 500 clientes cumpliendo estrictamente con la normativa de protección de datos (RGPD) e impidiendo que los destinatarios vean los correos de los demás, ¿en qué campo se deben colocar sus direcciones?

<details class="quiz-option correct">
  <summary>A) CCO: / BCC: (Con Copia Oculta)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El campo CCO (Con Copia Oculta) oculta la lista de destinatarios en las cabeceras del correo. Ningún receptor puede ver las direcciones de los demás, garantizando la privacidad exigida por el RGPD.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Para: (To:)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo Para: expone públicamente la dirección a todos los demás receptores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) CC: (Con Copia)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo CC: envía copias con visibilidad pública de las direcciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Asunto: (Subject)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Asunto: contiene el título del mensaje, no las direcciones de correo.
  </div>
</details>

---

### Pregunta 18
En el editor de vídeo OpenShot, ¿qué atajo de teclado abre directamente la ventana de configuración y renderizado de Exportar vídeo final?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + N</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + N abre un proyecto nuevo en blanco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ctrl + E</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En OpenShot, el atajo directo de teclado Ctrl + E abre la ventana de Exportar vídeo, permitiendo configurar el perfil, códecs, tasa de bits y contenedor final.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ctrl + S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + S guarda el archivo de proyecto activo (.osp).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ctrl + Shift + O</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No corresponde al comando de exportación de vídeo.
  </div>
</details>

---

### Pregunta 19
Si en la celda B2 se introduce la fórmula =A2*$D$1 y se copia arrastrando hacia abajo a la celda B3, ¿qué fórmula exacta se evaluará en la celda B3?

<details class="quiz-option incorrect">
  <summary>A) =A2*$D$1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha dejado A2 inalterada a pesar de ser una referencia relativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) =A3*$D$2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha modificado la fila de la celda congelada $D$1.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) =A3*$D$1</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    A2 es una referencia relativa y se incrementa en 1 fila al desplazarse hacia abajo, convirtiéndose en A3. Por su parte, $D$1 es una referencia absoluta fija con signos $, por lo que permanece congelada e inalterada. El resultado final en B3 es =A3*$D$1.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =A3*D1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ha eliminado los signos de fijación $ de la celda absoluta.
  </div>
</details>

---

### Pregunta 20
En procesadores de texto en español (Word / Docs), ¿qué atajo de teclado se utiliza para aplicar o quitar el formato de texto en Negrita sobre la selección activa?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + N</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    En Word en español Ctrl + N abre un documento nuevo (en software en inglés Ctrl + B activa Bold, pero la norma oficial en español asigna Ctrl + B a Negrita).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ctrl + S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + S en versión en español aplica el Subrayado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ctrl + K</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ctrl + K aplica el estilo de Cursiva (o insertar hipervínculo en Google Docs).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ctrl + B</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En las versiones en español de Microsoft Word y Google Docs, Ctrl + B es el atajo de teclado para conmutar el formato de Negrita (Bold).
  </div>
</details>

---

### Pregunta 21
En un Plan de Recuperación ante Desastres (DRP), ¿qué representa la métrica RPO (Recovery Point Objective)?

<details class="quiz-option correct">
  <summary>A) La cantidad máxima de pérdida de datos tolerable medida en tiempo entre la incidencia y la última copia de seguridad realizada.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El RPO (Recovery Point Objective) mide la cantidad de datos que una organización se puede permitir perder ante un fallo, calculada en función del intervalo de tiempo transcurrido desde el último backup válido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El tiempo que tarda el técnico en reiniciar la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tiempo para restablecer el servicio es el RTO (Recovery Time Objective).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El coste financiero de la sustitución de la tarjeta gráfica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No mide costes económicos directos de sustitución de piezas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El número de usuarios conectados a la red Wi-Fi.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tiene ninguna relación con la densidad de usuarios Wi-Fi.
  </div>
</details>

---

### Pregunta 22
En Google Sheets, se ejecuta la consulta =QUERY(A1:C50; "SELECT A, B WHERE C > 100"). ¿Qué filas y columnas extraerá la fórmula?

<details class="quiz-option incorrect">
  <summary>A) Muestra solo la columna C filtrando los valores menores a 100.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La columna C no forma parte del SELECT de salida y el filtro es de valores mayores a 100.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Extrae las columnas A y B de aquellas filas cuyo valor en la columna C sea estrictamente mayor que 100.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La cláusula SELECT A, B determina las columnas proyectadas en el resultado y la cláusula WHERE C > 100 aplica el filtro condicional sobre la columna C, devolviendo A y B solo cuando C supera 100.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Devuelve todas las columnas del rango de forma incondicional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La cláusula WHERE filtra e impide que salgan filas incondicionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Genera un error #REF! porque la columna C no está en el SELECT.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    QUERY permite usar columnas en la cláusula WHERE aunque no se proyecten en el SELECT.
  </div>
</details>

---

### Pregunta 23
¿Qué herramienta de GIMP permite realizar selecciones contiguas de píxeles basándose en la semejanza de su tono o color al hacer clic sobre una zona de la imagen?

<details class="quiz-option incorrect">
  <summary>A) Lazo de selección libre.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Lazo exige trazar el contorno manualmente a mano alzada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Selección rectangular.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La selección rectangular crea un marco geométrico rígido sin evaluar colores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Selección difusa / Varita mágica (U).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Selección Difusa (Varita Mágica, atajo U) analiza el color del píxel sobre el que se hace clic y extiende la selección contigua a todos los píxeles adyacentes que estén dentro del umbral de tolerancia fijado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Tijeras inteligentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las tijeras buscan bordes por contraste de forma semiautomática, no por tono contiguo.
  </div>
</details>

---

### Pregunta 24
Un desarrollador desea crear en AppSheet una pantalla interactiva que combine simultáneamente un mapa de ubicaciones, una tabla de clientes y un gráfico de ventas. ¿Qué tipo de vista (View Type) debe seleccionar en la pestaña UX?

<details class="quiz-option incorrect">
  <summary>A) Deck</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Deck muestra registros en forma de lista de tarjetas individuales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Form</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Form es un formulario para la introducción o edición de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Gallery</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Gallery despliega una cuadrícula visual enfocada a imágenes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Dashboard</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La vista de tipo Dashboard (Cuadro de mando) actúa como un contenedor multivisual en AppSheet, permitiendo incrustar en un mismo panel varias vistas secundarias que interactúan entre sí.
  </div>
</details>

---

### Pregunta 25
¿Qué software de auditoría e inventariado de red permite recopilar automáticamente el hardware, software y parches instalados en todos los ordenadores de un dominio?

<details class="quiz-option correct">
  <summary>A) AIDA64 / OCS Inventory / GLPI.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las herramientas de inventariado automatizado (como AIDA64, OCS Inventory o GLPI) ejecutan agentes que escanean los componentes de hardware y programas de los equipos clientes y centralizan los informes en una base de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Microsoft Word.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un procesador de texto para la redacción de documentos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Google Slides.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una suite de presentaciones multimedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) OpenShot Video Editor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una aplicación de montaje y edición de vídeo.
  </div>
</details>

---

### Pregunta 26
¿Cuál es la diferencia operativa fundamental entre los protocolos de recepción de correo POP3 e IMAP?

<details class="quiz-option incorrect">
  <summary>A) POP3 funciona exclusivamente en teléfonos iPhone y IMAP en ordenadores Android.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son protocolos independientes de la marca del sistema operativo del cliente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) POP3 descarga por defecto los mensajes al disco local eliminándolos del servidor; IMAP trabaja directamente sobre el servidor manteniendo buzones y estados sincronizados en tiempo real en múltiples dispositivos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    POP3 descarga las cabeceras/mensajes al cliente local y suele borrarlos del servidor (modelo monodispositivo). IMAP sincroniza las carpetas y estados (leído/no leído) en el servidor de forma bidireccional y multi-dispositivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) POP3 cifra los mensajes en formato de imagen PNG e IMAP los convierte a PDF.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguno altera los formatos de archivo a imágenes o PDFs.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambos protocolos son idénticos y solo varían en la velocidad del cable de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tienen arquitecturas de gestión de datos completamente distintas.
  </div>
</details>

---

### Pregunta 27
Durante una exposición con proyector, el ponente desea ver en su pantalla privada sus notas de apoyo y la diapositiva siguiente, mientras el público solo ve la diapositiva actual a pantalla completa. ¿Qué modo debe activar?

<details class="quiz-option incorrect">
  <summary>A) Vista de Esquema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La Vista de Esquema muestra solo el texto estructurado del documento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Vista Clasificador de diapositivas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra la matriz de miniaturas para reordenar diapositivas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Vista de Presentador (Presenter View).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Vista de Presentador (Presenter View) extiende el escritorio: proyecta la diapositiva limpia al público y despliega un panel de control privado con cronómetro, vista previa y notas para el orador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Vista de Edición Normal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra la interfaz de trabajo de la aplicación con barras de herramientas.
  </div>
</details>

---

### Pregunta 28
Al rodar o editar una conversación entre dos personajes, ¿qué fallo de continuidad espacial (salto de eje) ocurre si la cámara cruza involuntariamente la línea imaginaria de los 180°?

<details class="quiz-option incorrect">
  <summary>A) El vídeo se borra del disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un error de lenguaje audiovisual no destruye archivos en disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La resolución baja automáticamente a 240p.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La resolución de renderizado es independiente del encuadre de la cámara.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se invierte la pista de audio a formato mono.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El procesamiento de pistas de audio no depende del ángulo de toma visual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La posición relativa de los personajes se invierte en la pantalla, dando la impresión de que ambos miran hacia la misma dirección y desorientando al espectador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cruzar el eje de acción de 180° provoca un salto de eje: la orientación izquierda/derecha de los sujetos se invierte en el racord, rompiendo la coherencia espacial para la audiencia.
  </div>
</details>

---

### Pregunta 29
¿Qué requisito técnico previo se exige en Word o Google Docs para que la función de Tabla de contenidos / Índice automático pueda estructurar la jerarquía del documento?

<details class="quiz-option correct">
  <summary>A) Haber aplicado los Estilos de Párrafo de encabezados (Título 1, Título 2, Título 3) sobre los títulos de las secciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El generador de índices automáticos rastrea las marcas estructurales del documento proporcionadas por los Estilos de Párrafo (Encabezado 1/2/3), compilando los títulos y sus números de página correspondientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Convertir todas las imágenes del documento a formato .gif.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los formatos de imágenes no intervienen en la jerarquización del texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Guardar el documento en un pendrive USB de 8 GB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es independiente del soporte físico de almacenamiento utilizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Pintar el fondo de todas las páginas de color amarillo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El color de fondo del lienzo es un estilo estético no estructural.
  </div>
</details>

---

### Pregunta 30
Si se introduce la cifra decimal 0,25 en una celda de Google Sheets y se le aplica el formato visual "Porcentaje", ¿qué valor desplegará la celda en pantalla?

<details class="quiz-option incorrect">
  <summary>A) 0,25%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    0,25% requeriría haber introducido la cifra almacenada 0,0025.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) 25,00%</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la lógica de las hojas de cálculo, la unidad 1 representa el 100%. Por tanto, la fracción decimal 0,25 equivale visualmente al 25,00% (multiplica internamente por 100 y añade el símbolo %).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) 250,00%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    250,00% correspondería al valor decimal 2,5.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 2,5%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Correspondería a 0,025.
  </div>
</details>

---

### Pregunta 31
En la gestión de incidentes de un Helpdesk (Service Desk), ¿cuál es la función de un técnico de Soporte de Nivel 1 (Tier 1)?

<details class="quiz-option incorrect">
  <summary>A) Diseñar los microprocesadores de los servidores en la fábrica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a la ingeniería de hardware de semiconductores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Modificar la ley de protección de datos en el BOE.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las leyes son promulgadas por órganos legislativos estatales.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Actuar como Punto Único de Contacto (SPOC), registrar la incidencia en el sistema de tickets, resolver problemas sencillos mediante guías y escalarlo a Nivel 2 si no se soluciona.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Nivel 1 es la primera línea y punto de contacto (SPOC). Se encarga de la recepción, categorización, triaje, resolución rápida de incidencias frecuentes y el escalado documentado de casos complejos hacia los especialista de Nivel 2 o 3.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Instalar la fibra óptica submarina transatlántica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La infraestructura de telecomunicaciones submarinas compete a operadores globales de red.
  </div>
</details>

---

### Pregunta 32
Un operario utiliza una aplicación AppSheet en una zona rural sin cobertura móvil. ¿Cómo gestiona AppSheet la introducción de datos en modo fuera de línea (offline)?

<details class="quiz-option incorrect">
  <summary>A) Bloquea el teclado y apaga el teléfono móvil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AppSheet no bloquea los terminales ni interrumpe su uso fuera de línea.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Borra los datos introducidos para no saturar la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Conserva de forma segura los datos en la caché local para no perderlos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Muestra un error irrecuperable y reinstala el sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Trabajar sin red es una condición contemplada que jamás fuerza la reinstalación del SO.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Guarda los cambios localmente en el dispositivo y ejecuta una Sincronización Retrasada (Delayed Sync) automática al recuperar la cobertura de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    AppSheet es una plataforma Offline-First. Registra las transacciones en el almacenamiento local del terminal móvil y, mediante el mecanismo Delayed Sync, sube y sincroniza automáticamente las filas en el servidor al detectar red.
  </div>
</details>

---

### Pregunta 33
Se requiere eliminar un elemento no deseado (un cable) sobre el fondo de una foto. Al usar la herramienta Saneado (Healing Tool, H), ¿qué diferencia existe con la herramienta Clonado (C)?

<details class="quiz-option correct">
  <summary>A) Saneado copia la textura de origen pero adapta e integra inteligentemente el tono, color e iluminación de la zona de destino; Clonado realiza una copia rígida e idéntica de los píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta de Saneado (Healing) fusiona algorítmicamente la textura muestreada con el brillo y color circundante del punto de destino. La herramienta de Clonado realiza una duplicación fotográfica idéntica e inalterada de los píxeles de origen.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Saneado convierte la imagen a blanco y negro y Clonado borra la capa a blanco.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna de las dos herramientas altera la escala de grises de forma global.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Saneado exporta la imagen en formato MP4 y Clonado en PDF.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son herramientas de retoque de pincel sobre el lienzo, no funciones de exportación de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas herramientas son idénticas y solo cambia la tecla de atajo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Poseen comportamientos de tratamiento de píxeles significativamente diferentes.
  </div>
</details>

---

### Pregunta 34
En la barra de búsqueda avanzada de Gmail, ¿qué sintaxis permite filtrar todos los correos que contengan un archivo adjunto y que pertenezcan a la carpeta de recibidos no leídos?

<details class="quiz-option incorrect">
  <summary>A) attachment:yes AND new:true</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    attachment:yes y new:true no son comandos válidos de la API de búsqueda de Gmail.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) has:attachment is:unread</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el motor de comandos de búsqueda de Gmail, has:attachment filtra los mensajes con adjuntos e is:unread limita los resultados a aquellos que no han sido leídos aún.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) with:file status:unseen</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sintaxis inventada que no reconoce la barra de correo de Google.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) files=true & read=false</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza operadores de comparación booleana no soportados por el entorno Webmail.
  </div>
</details>

---

### Pregunta 35
Para enviar una presentación de PowerPoint a un cliente de forma que al hacer doble clic sobre el icono se inicie directamente la presentación a pantalla completa sin abrir el editor, ¿con qué extensión debe guardarse?

<details class="quiz-option incorrect">
  <summary>A) .pptx</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .pptx es el formato de trabajo que abre el entorno de edición de PowerPoint.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) .potx</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .potx es una plantilla de diseño de PowerPoint.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) .ppsx</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La extensión .ppsx (PowerPoint Show) guarda el archivo en formato autoejecutable. Al abrirlo, el sistema lanza directamente la reproducción a pantalla completa omitiendo el entorno de edición.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .pdf</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .pdf abre el visor estático de documentos PDF.
  </div>
</details>

---

### Pregunta 36
¿Cuál de los siguientes pares representa respectivamente un formato de audio digital sin compresión/sin pérdida (lossless) y un formato con compresión destructiva (lossy)?

<details class="quiz-option incorrect">
  <summary>A) MP4 y MKV</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    MP4 y MKV son formatos contenedores multimedia, no audio dedicado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) PNG y JPG</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PNG y JPG son formatos de imagen fija de mapa de bits.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) PDF y DOCX</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PDF y DOCX son formatos de procesamiento de texto y documentos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) WAV (PCM puro sin compresión) y MP3 (compresión psicoacústica con pérdida)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    WAV almacena audio en bruto mediante codificación PCM sin pérdida de calidad (lossless). MP3 aplica compresión destructiva (lossy) eliminando frecuencias imperceptibles para reducir sustancialmente el peso del archivo.
  </div>
</details>

---

### Pregunta 37
En la especificación técnica de un equipo informático se indican un procesador a 3,8 GHz, 16 GB de Memoria RAM y un disco SSD de 1 TB. ¿Cuál de estos tres elementos determina la velocidad de ejecución de operaciones lógicas por segundo del núcleo del sistema?

<details class="quiz-option correct">
  <summary>A) El procesador (CPU), medido en gigahercios (GHz).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La CPU (Unidad Central de Proceso) gestiona la velocidad de ejecución de las instrucciones de la máquina. Su frecuencia de reloj en GHz (gigahercios) determina el número de ciclos de cómputo por segundo (3,8 GHz = $3,8 \times 10^9$ operaciones/segundo).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El disco SSD de 1 TB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El disco SSD determina la velocidad de lectura/escritura y la capacidad de almacenamiento permanente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La memoria RAM de 16 GB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La RAM determina el espacio volátil para mantener programas abiertos simultáneamente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La tarjeta de sonido estéreo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tarjeta de sonido procesa y convierte la señal de audio digital a analógica.
  </div>
</details>

---

### Pregunta 38
Se requiere unir el texto de la celda A1 ("Juan") y B1 ("Pérez") en una sola celda añadiendo un espacio en blanco entre ellos. ¿Qué fórmula de concatenación es la adecuada?

<details class="quiz-option incorrect">
  <summary>A) =SUMA(A1; B1)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SUMA es una función aritmética y genera #¡VALOR! al intentar sumar cadenas de texto.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =A1 &amp; " " &amp; B1</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El operador &amp; es el operador de concatenación de texto. La expresión =A1 &amp; " " &amp; B1 une la cadena de A1, un carácter de espacio intermedio " " y la cadena de B1, resultando en "Juan Pérez".
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =A1 + " " + B1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El símbolo + es el operador de adición matemática, no de concatenación alfanumérica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =SI(A1; "Pérez")</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La función SI evalúa pruebas lógicas, no concatena nombres.
  </div>
</details>

---

### Pregunta 39
Al maquetar un documento de texto impreso formal, ¿cuál es la diferencia visual entre una tipografía Serif (como Times New Roman) y una Sans Serif (como Arial o Helvetica)?

<details class="quiz-option incorrect">
  <summary>A) Serif no permite letras mayúsculas y Sans Serif solo imprime en color rojo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas familias contienen el alfabeto completo con mayúsculas y minúsculas en cualquier color.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Serif es una fuente manuscrita decorativa y Sans Serif se usa solo para fórmulas matemáticas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las fuentes manuscritas (Script) son una categoría independiente de las tipografías Serif/Sans Serif.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Las fuentes Serif cuentan con remates, adornos o terminaciones en los extremos de los trazos de las letras; las Sans Serif ("sin remate") presentan trazos limpios y rectos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las tipografías Serif poseen pequeñas serifas o remates en los finales de las letras (guiando la lectura en papel impreso). Las tipografías Sans Serif ("sin remate" o palo seco) carecen de adornos, siendo más legibles en pantallas digitales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas son idénticas y solo cambia la versión de Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son categorías históricas de clasificación tipográfica independientes del sistema operativo.
  </div>
</details>

---

### Pregunta 40
Un administrador de redes necesita conectarse mediante Escritorio Remoto a un servidor de la LAN para resolver una incidencia. ¿Qué protocolo propietario e integrado en Windows y qué puerto TCP se utilizan por defecto?

<details class="quiz-option incorrect">
  <summary>A) Protocolo SMTP en el puerto TCP 25.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 25 con SMTP transporta correo saliente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Protocolo POP3 en el puerto TCP 110.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 110 con POP3 transfiere la descarga de correos entrantes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Protocolo IMAP en el puerto TCP 993.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 993 se utiliza para la sincronización cifrada de correo vía IMAPS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Protocolo RDP (Remote Desktop Protocol) en el puerto TCP 3389.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta de Conexión a Escritorio Remoto de Windows utiliza el protocolo RDP (Remote Desktop Protocol), escuchando de forma nativa en el puerto TCP 3389.
  </div>
</details>
