# Test de Autoevaluación: Tema 8

[← Volver al Tema 8: Gestión del correo y la agenda electrónica](../tema-8.md)

---

### Pregunta 1
¿Cuál es el protocolo de red estandarizado de la capa de aplicación encargado de la transferencia y envío de mensajes de correo electrónico entre clientes y servidores o entre servidores de correo saliente?

<details class="quiz-option correct">
  <summary>A) SMTP (Simple Mail Transfer Protocol).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El protocolo SMTP (Simple Mail Transfer Protocol) opera en la capa de aplicación (puerto 25 tradicional, 587 con cifrado/autenticación) y es el estándar universal diseñado exclusivamente para el envío y enrutamiento de mensajes de correo electrónico desde el cliente al servidor saliente, o entre diferentes MTA (Mail Transfer Agents) en Internet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) POP3 (Post Office Protocol v3).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3 es un protocolo exclusivo para la recepción y descarga de mensajes desde el servidor al cliente local.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) IMAP4 (Internet Message Access Protocol v4).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IMAP4 es un protocolo de recepción y sincronización remota de buzones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) FTP (File Transfer Protocol).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FTP se utiliza para la transferencia general de archivos en red, no para el enrutamiento de correo electrónico.
  </div>
</details>

---

### Pregunta 2
Un usuario configura su cuenta de correo laboral en su cliente de escritorio usando el protocolo POP3 sin activar la casilla de "Guardar una copia de los mensajes en el servidor". ¿Qué ocurre con sus mensajes tras ser descargados a la bandeja de entrada del ordenador local?

<details class="quiz-option incorrect">
  <summary>A) Se sincronizan en tiempo real en la nube para poder leerlos desde un smartphone.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sincronización bidireccional y multi-dispositivo en tiempo real es la función característica de IMAP, no de POP3.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Los mensajes se descargan al disco duro local y se eliminan del servidor central, impidiendo su lectura posterior desde otros dispositivos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Por diseño original, el protocolo POP3 funciona bajo el modelo de "descargar y borrar". Al conectar con el servidor, transfiere los correos al almacenamiento local del equipo cliente y los suprime de la bandeja del servidor, haciendo que no estén disponibles al intentar acceder desde un segundo dispositivo (smartphone o webmail).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se reenvían automáticamente con copia oculta (CCO) a todos los contactos de la libreta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3 no modifica los destinatarios ni reenvía correos a la lista de contactos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se convierten en un archivo comprimido de imágenes de mapa de bits .xcf.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No altera la naturaleza del texto ni genera archivos de imagen de GIMP.
  </div>
</details>

---

### Pregunta 3
Un técnico utiliza varios dispositivos (ordenador de sobremesa, portátil y smartphone) para gestionar su cuenta corporativa. Requiere que las carpetas, etiquetas, estado de leído/no leído y borradores se mantengan sincronizados bidireccionalmente y en tiempo real en todos sus equipos. ¿Qué protocolo de recepción debe configurar?

<details class="quiz-option incorrect">
  <summary>A) POP3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3 descarga los correos localmente sin mantener carpetas ni estados sincronizados entre múltiples equipos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) HTTP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HTTP es el protocolo de transferencia de hipertexto para la navegación web general.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) IMAP (Internet Message Access Protocol)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El protocolo IMAP trabaja directamente sobre la estructura de cabeceras y mensajes almacenados centralizadamente en el servidor de correo. Cualquier acción realizada en un cliente (leer, mover a una carpeta, borrar o guardar borrador) se refleja de forma sincronizada y bidireccional en todos los demás dispositivos conectados a la cuenta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SMTP</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SMTP solo se encarga del envío de correo saliente, no de la gestión de carpetas de recepción.
  </div>
</details>

---

### Pregunta 4
Al enviar un comunicado masivo por correo electrónico a 200 clientes externos para cumplir estrictamente con la normativa de protección de datos (RGPD) e impedir que los destinatarios vean las direcciones de correo de los demás, ¿en qué campo de cabecera se deben introducir sus direcciones?

<details class="quiz-option incorrect">
  <summary>A) Para: (To:)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo Para: muestra públicamente todas las direcciones a todos los receptores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) CC: (Con Copia / Carbon Copy)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo CC: (Con Copia) envía copias visibles a todos los destinatarios, exponiendo sus correos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Asunto: (Subject)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El campo Asunto: contiene el título o resumen textual del mensaje.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) CCO: / BCC: (Con Copia Oculta / Blind Carbon Copy)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El campo CCO (Con Copia Oculta) o BCC (Blind Carbon Copy) oculta las direcciones de correo de la lista de destinatarios en las cabeceras del mensaje transmitido. Ningún receptor puede ver las direcciones de los demás, cumpliendo obligatoriamente con la privacidad exigida por el RGPD.
  </div>
</details>

---

### Pregunta 5
Un administrativo necesita localizar en Gmail todos los correos recibidos que contengan archivos adjuntos (documentos o imágenes) y que además no hayan sido leídos aún. ¿Qué combinación de operadores de búsqueda avanzada debe escribir en el cajón de búsqueda?

<details class="quiz-option correct">
  <summary>A) has:attachment is:unread</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la sintaxis de filtros de búsqueda avanzada de Gmail y Google Workspace, has:attachment filtra los mensajes que poseen ficheros adjuntos y is:unread limita los resultados a los mensajes no leídos, combinándose mediante la lógica booleana implícita espacio/AND.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) file:pdf status:new</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    file:pdf limita a PDF concretos y status:new no es un operador válido de Gmail.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) with:files AND unseen</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    with:files y unseen no forman parte del conjunto de comandos de la barra de búsqueda de Gmail.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) attachment:true &amp; read:false</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza sintaxis no soportada por el motor de filtrado del correo web de Google.
  </div>
</details>

---

### Pregunta 6
Al configurar un cliente de correo para conectarse de forma cifrada mediante seguridad SSL/TLS a un servidor IMAP seguro (IMAPS), ¿cuál es el puerto de red estándar por defecto asignado a este servicio?

<details class="quiz-option incorrect">
  <summary>A) Puerto 25</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 25 es el puerto clásico sin cifrar para transmisiones SMTP entre servidores.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Puerto 993</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El servicio seguro IMAPS (IMAP over SSL/TLS) utiliza el puerto 993 asignado por la IANA para la recepción cifrada de correo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Puerto 110</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 110 es el puerto estándar sin cifrar para POP3.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Puerto 80</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El puerto 80 está reservado para el tráfico web HTTP sin cifrar.
  </div>
</details>

---

### Pregunta 7
Para garantizar la autenticidad del emisor, la integridad del mensaje y evitar el suplantamiento de identidad (phishing) en el envío de correos corporativos, ¿qué elemento de seguridad digital debe vincularse al mensaje usando la clave privada del remitente?

<details class="quiz-option incorrect">
  <summary>A) Una marca de agua diagonal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las marcas de agua son elementos estéticos de fondo en documentos de texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un filtro de correo no deseado basado en palabras clave.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los filtros de spam analizan el correo en recepción para clasificarlo, no garantizan la identidad del emisor.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Una firma digital basada en un certificado digital válido (estándar S/MIME o PGP).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La firma digital basada en certificados criptográficos de clave pública/privada (S/MIME o PGP) genera un resumen cifrado del mensaje. Garantiza de forma matemática la identidad del emisor (no repudio), asegura que el texto no ha sido alterado en tránsito (integridad) y combate el phishing.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un salto de sección continuo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un salto de sección es un elemento de maquetación en procesadores de texto.
  </div>
</details>

---

### Pregunta 8
¿Qué tecnología estandarizada basada en archivos XML permite a un usuario suscribirse a los titulares y novedades de blogs o portales técnicos para recibirlos centralizados en su cliente de correo sin visitar cada web individualmente?

<details class="quiz-option incorrect">
  <summary>A) Protocolo POP3S</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    POP3S es un protocolo cifrado para descargar mensajes de buzones de correo personal.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Filtros de seguridad AppSheet</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son reglas de servidor para restringir acceso a tablas en AppSheet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Etiquetas HTML5</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las etiquetas de vídeo sirven para incrustar reproductores multimedia en código HTML.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Fuentes de noticias RSS / Atom (Feeds)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las fuentes o canales RSS (Really Simple Syndication) / Atom son archivos estructurados en XML que publican resúmenes y enlaces de los nuevos contenidos de un sitio web. Los clientes de correo (como Thunderbird) o agregadores de feeds permiten suscribirse a estos canales para leer todas las novedades desde un único panel.
  </div>
</details>

---

### Pregunta 9
Un equipo de trabajo necesita compartir la agenda de eventos y reuniones en tiempo real entre sus dispositivos móviles Android e iOS. ¿Qué estándar o protocolo de sincronización de calendarios permite publicar e intercambiar eventos mediante el formato .ics?

<details class="quiz-option correct">
  <summary>A) CalDAV / Formato iCalendar (.ics).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    CalDAV es un protocolo de red cliente-servidor (basado en WebDAV) que permite acceder y sincronizar calendarios a través de la red. Utiliza la norma iCalendar (.ics) como formato estándar de intercambio de datos de eventos, citas y tareas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) SMTP / Formato .eml.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SMTP envía correos y .eml es el formato de archivo de un mensaje individual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) FTP / Formato .zip.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FTP transfiere archivos genéricos y .zip es un contenedor de archivos comprimidos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) GIMP / Formato .xcf.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    GIMP es un editor gráfico y .xcf su formato de imagen por capas.
  </div>
</details>

---

### Pregunta 10
¿Cuál es la diferencia operativa fundamental entre utilizar un cliente de correo de escritorio local (como Mozilla Thunderbird o Microsoft Outlook) y un servicio de Webmail (como la interfaz web de Gmail)?

<details class="quiz-option incorrect">
  <summary>A) El Webmail no permite enviar archivos adjuntos y el cliente local sí.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambos entornos permiten adjuntar archivos sin inconvenientes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El cliente de escritorio requiere instalación local de software y almacena/gestiona copias locales de mensajes en el disco duro; el Webmail funciona desde un navegador web accediendo directamente al servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un cliente de correo de escritorio es un programa cliente instalado que descarga, indexa y almacena los datos localmente en el disco duro (permitiendo trabajar sin conexión). El Webmail utiliza el navegador web como interfaz cliente, dependiendo de la sesión activa contra el servidor web/correo sin requerir instalación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El Webmail solo funciona con licencias de código cerrado y el cliente local es siempre un sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Existen servicios Webmail de código abierto (ej. Roundcube) y los clientes locales son programas, no sistemas operativos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El cliente de escritorio exige conexión a Internet constante y el Webmail funciona totalmente fuera de línea sin servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte el comportamiento: el Webmail requiere conexión web para cargar la interfaz del servidor.
  </div>
</details>

---

### Pregunta 11
Para autenticar el dominio emisor de una empresa y evitar que los servidores receptores clasifiquen sus correos legítimos como SPAM o correo no deseado, ¿qué registros DNS de autenticación deben configurarse?

<details class="quiz-option incorrect">
  <summary>A) Registros de dirección A y AAAA.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los registros A y AAAA traducen nombres de dominio a direcciones IP v4 e IPv6 generales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Registros de base de datos MySQL .db.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son archivos de bases de datos relacionales, no registros de resolución de nombres DNS.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Registros SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    SPF es un registro TXT en el DNS que especifica qué servidores/IPs están autorizados a enviar correo en nombre del dominio. DKIM añade una firma criptográfica verificable mediante clave pública en el DNS. Ambos registros son indispensables para evitar que el correo sea marcado como SPAM o suplantación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Registros de patrones de diapositivas en PowerPoint.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son elementos de maquetación de presentaciones multimedia.
  </div>
</details>

---

### Pregunta 12
Un técnico de ciberseguridad analiza un correo sospechoso de suplantación de identidad. Necesita verificar la ruta completa de servidores y las direcciones IP públicas por las que transitó el mensaje antes de llegar al buzón. ¿En qué sección interna del mensaje debe examinar las líneas Received: ?

<details class="quiz-option incorrect">
  <summary>A) En la imagen de la firma del pie del mensaje.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La imagen de la firma es contenido estético del cuerpo del mensaje.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En las notas al pie de página.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un elemento de maquetación de procesadores de texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) En un archivo adjunto comprimido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cabeceras forman parte del propio protocolo de transporte del mensaje, no de sus adjuntos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) En las cabeceras completas del mensaje (Email Headers).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las cabeceras completas del correo (Email Headers) contienen la metainformación técnica del mensaje. Cada servidor de correo (MTA) que procesa y reenvía el correo añade una línea Received: indicando su dirección IP, nombre de host y sello de tiempo, lo que permite auditar la trazabilidad del envío.
  </div>
</details>

---

### Pregunta 13
Un usuario de Gmail desea eliminar correos antiguos para liberar espacio de almacenamiento. Necesita buscar mensajes recibidos antes del 1 de enero de 2024 que ocupen más de 10 Megabytes. ¿Qué sintaxis de filtro de búsqueda avanzada debe emplear?

<details class="quiz-option correct">
  <summary>A) before:2024/01/01 size:10m</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el motor de búsqueda de Gmail, before:AAAA/MM/DD filtra correos anteriores a la fecha fijada y size:10m (o larger:10m) localiza correos cuyo tamaño supere los 10 Megabytes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) older_than:2024 AND MB&gt;10</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sintaxis inventada no soportada por la barra de Gmail.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) date&lt;2024-01-01 limit:10MB</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Utiliza operadores de comparación que no reconoce el cliente de correo de Google.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) DELETE FROM Gmail WHERE size&gt;10MB</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una sentencia de consulta SQL para bases de datos relacionales, no un comando de búsqueda de correo.
  </div>
</details>

---

### Pregunta 14
Al convocar una reunión técnica desde la agenda electrónica de Google Calendar o Microsoft Outlook, el organizador añade las direcciones de correo de los asistentes. ¿Qué función automática ejecuta la plataforma de agenda?

<details class="quiz-option incorrect">
  <summary>A) Descarga el disco duro de los invitados en formato .zip.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No ejecuta transferencias de archivos ni vulnera la privacidad de los invitados.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Envía una invitación de evento con opciones de respuesta (RSVP: Sí, No, Quizás) e integra automáticamente la cita en el calendario de los destinatarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las agendas electrónicas están integradas con el servicio de correo. Al añadir participantes, el sistema emite una notificación de evento en formato iCalendar (.ics) ofreciendo botones de RSVP (Répondez s'il vous plaît / Confirmar asistencia). Al aceptar, la cita se registra en el calendario del destinatario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Bloquea la conexión Wi-Fi de los invitados durante 24 horas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No interactúa con las interfaces de red inalámbrica de los dispositivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convierte la agenda en una aplicación AppSheet de pago.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No crea aplicaciones No-Code en plataformas externas.
  </div>
</details>

---

### Pregunta 15
Durante su periodo vacacional, un trabajador configura una respuesta automática de ausencia (Out of Office) en su cuenta corporativa. ¿Cuál es el comportamiento del servidor de correo al recibir mensajes entrantes durante ese periodo?

<details class="quiz-option incorrect">
  <summary>A) Borra los correos entrantes sin guardar copia en el buzón.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Conserva intactos todos los correos entrantes para su lectura posterior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Apaga el servidor de correo corporativo hasta el regreso del trabajador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El servidor de correo permanece activo prestando servicio a toda la organización.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Responde automáticamente al remitente de cada mensaje entrante con un texto de ausencia prefijado, guardando el mensaje original en la bandeja de entrada.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El agente de respuesta automática del servidor intercepta el correo entrante, almacena el mensaje original de forma normal en la bandeja de entrada del usuario y emite un correo de respuesta inmediata al remitente comunicando el texto de ausencia y la fecha de reincorporación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Redirige los correos a la carpeta de correo no deseado de toda la empresa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No altera la clasificación de SPAM de los demás usuarios de la red.
  </div>
</details>

---

### Pregunta 16
Un usuario necesita enviar un archivo de vídeo de 2 GB por correo electrónico, pero el servidor rechaza el envío por superar el límite del protocolo SMTP (habitualmente fijado entre 25 y 50 MB). ¿Cuál es la solución técnica recomendada?

<details class="quiz-option incorrect">
  <summary>A) Cambiar la extensión del archivo a .txt y enviarlo adjunto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar la extensión a .txt no reduce el tamaño físico de los bytes del archivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Dividir el correo en 100 mensajes individuales de 25 MB escribiendo código HTML.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es ineficiente e inviable para el protocolo de mensajes adjuntos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Reducir la resolución de la pantalla del ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La resolución de la pantalla no altera el peso en bytes del archivo almacenado en disco.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Subir el archivo a un servicio de almacenamiento en la nube (Google Drive, OneDrive) e incluir en el mensaje un enlace de descarga con permisos de acceso.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los protocolos de correo no están diseñados para transferir archivos pesados. La solución técnica estándar consiste en alojar el archivo en una plataforma de almacenamiento en la nube (Google Drive, Dropbox, OneDrive) e insertar en el cuerpo del correo la URL / enlace de descarga ajustando los permisos de acceso para los destinatarios.
  </div>
</details>

---

### Pregunta 17
Un administrativo desea que todos los correos procedentes del dominio @proveedor.com se muevan automáticamente a la carpeta "Compras" y se les aplique una etiqueta de prioridad sin intervención manual. ¿Qué función debe programar?

<details class="quiz-option correct">
  <summary>A) Una Regla / Filtro de correo entrante (Filter / Mail Rule).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las Reglas / Filtros de correo permiten automatizar la gestión de la bandeja de entrada. Evalúan condiciones (como el remitente, asunto o palabras clave) y aplican acciones automáticas inmediatas (mover a carpeta, etiquetar, reenviar, marcar como leído o eliminar).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un salto de sección continuo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un elemento de estructura en procesadores de texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Una fórmula condicional =SI() en una celda de Excel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una función de hoja de cálculo para evaluar condiciones lógicas en celdas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un filtro de seguridad de servidor en AppSheet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Administra el acceso a datos en aplicaciones móviles No-Code.
  </div>
</details>

---

### Pregunta 18
¿Cuál es el formato de archivo estándar internacional utilizado para la exportación e importación masiva de contactos (tarjetas de visita electrónicas) entre clientes de correo, smartphones y aplicaciones de agenda?

<details class="quiz-option incorrect">
  <summary>A) .mp3</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .mp3 es un formato de audio comprimido con pérdida.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) .vcf / vCard</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La especificación vCard (.vcf) es el estándar de la industria para el intercambio de información personal y de contacto. Almacena nombres, teléfonos, correos, direcciones, empresas y fotografías en un formato de texto estructurado compatible con todas las plataformas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) .exe</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .exe representa un programa ejecutable binario en Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) .png</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .png es un formato de imagen de mapa de bits con transparencia.
  </div>
</details>

---

### Pregunta 19
Una empresa desea crear la dirección soporte@empresa.com de modo que todos los correos enviados a ella se redirijan automáticamente a la bandeja de entrada del técnico juan@empresa.com, sin necesidad de crear un buzón de pago adicional con contraseña propia. ¿Qué recurso debe configurarse en el servidor?

<details class="quiz-option incorrect">
  <summary>A) Una base de datos relacional MySQL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un gestor de bases de datos relacionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un registro AAAA de IPv6.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mapea un nombre de dominio con una dirección IPv6 de 128 bits.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Un Alias de correo / Reenvío de dirección (Email Alias).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un Alias de correo es un sobrenombre o dirección alternativa vinculada a una cuenta de correo ya existente. No consume una licencia de buzón independiente; cualquier mensaje enviado al alias se redirige de forma transparente a la bandeja de entrada del buzón principal asignado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un archivo de mapa de bits sin canal alfa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un tipo de archivo de imagen digital.
  </div>
</details>

---

### Pregunta 20
En plataformas como Google Workspace o Microsoft 365, los clientes de correo integran un panel lateral de Tareas (Tasks / To-Do). ¿Qué acción permite convertir un correo electrónico recibido en una tarea pendiente de forma directa?

<details class="quiz-option incorrect">
  <summary>A) Exportar el correo a la carpeta de SPAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mover a SPAM entrena al filtro para bloquear correos no deseados, no crea tareas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Cambiar la tipografía del mensaje a Comic Sans.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Alterar la tipografía no afecta a la gestión de tareas ni a la agenda.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Apagar el router de la oficina.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Apagar el router corta la conectividad de red de la empresa.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Arrastrar y soltar el correo sobre el panel de Tareas (o seleccionar "Añadir a Tareas"), vinculando el mensaje a la nueva tarea.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La integración del correo con la agenda y listas de tareas permite arrastrar un mensaje o pulsar la opción "Añadir a Tareas". Esto crea una nueva tarea con el asunto del mensaje, fijando una fecha límite e incluyendo un enlace directo para abrir el correo original.
  </div>
</details>
