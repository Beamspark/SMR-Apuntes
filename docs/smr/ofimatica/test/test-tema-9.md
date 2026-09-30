# Test de Autoevaluación: Tema 9

[← Volver al Tema 9: Técnicas de soporte al usuario, documentación técnica, gestión de incidencias y salvaguarda de información](../tema-9.md)

---

### Pregunta 1
¿Cuál es la diferencia estructural y de contenido fundamental entre una Guía de Usuario (manual de usuario) y un Manual Técnico de un sistema o aplicación informática?

<details class="quiz-option correct">
  <summary>A) La guía de usuario está orientada a procedimientos operacionales finales explicados sin jerga técnica; el manual técnico describe la arquitectura interna, dependencias, APIs, configuración de servidor y procedimientos de mantenimiento y despliegue.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La guía de usuario es un documento enfocado al cliente o empleado final, redactado en lenguaje divulgativo y estructurado en pasos prácticos para operar la herramienta. El manual técnico está dirigido a administradores de sistemas y desarrolladores; detalla la arquitectura, esquemas de bases de datos, APIs, requisitos de infraestructura, variables de entorno y protocolos de resolución de fallos avanzados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La guía de usuario es una plantilla .dotx de Word y el manual técnico es siempre una base de datos AppSheet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Asocia erróneamente los tipos de documentos con formatos de archivo o plataformas de desarrollo No-Code particulares.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El manual técnico no contiene texto y se compone únicamente de capturas de pantalla editadas en GIMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un manual técnico requiere descripciones escritas rigurosas, diagramas de arquitectura y sintaxis de comandos, no solo imágenes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La guía de usuario solo la pueden leer programadores con licencias GPL y el manual técnico es público en el BOE.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde tipos de licencias de software con el público objetivo de la documentación técnica.
  </div>
</details>

---

### Pregunta 2
En un centro de atención a usuarios (Helpdesk / Service Desk), un técnico de Nivel 1 (Tier 1) recibe una incidencia que no puede resolver tras aplicar los procedimientos básicos de la Guía de Resolución de Problemas. ¿Qué acción estandarizada debe ejecutar según las buenas prácticas de gestión de servicios (ITIL)?

<details class="quiz-option incorrect">
  <summary>A) Borrar el ticket del sistema para no penalizar el tiempo medio de resolución (MTTR) del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Borrar tickets falsifica las métricas del servicio y deja la incidencia del usuario desatendida (mala práctica grave).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Escalar la incidencia a Nivel 2 (Tier 2 / Soporte Especializado), registrando en el ticket todos los diagnósticos, trazas y pruebas ya realizadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El escalado funcional de una incidencia traslada la responsabilidad de la resolución al equipo de Nivel 2 o Nivel 3. Para evitar duplicar el trabajo y minimizar el impacto operacional, el técnico de Nivel 1 debe documentar meticulosamente en la herramienta de ticketing todas las comprobaciones previas, capturas y mensajes de error recopilados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Reiniciar el servidor de dominio principal de la empresa sin previo aviso para intentar corregir el fallo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reiniciar infraestructura crítica sin diagnóstico previo genera caídas del servicio no planificadas en toda la organización.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Formatear inmediatamente el equipo del usuario y reinstalar el sistema operativo desde cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Formatear sin diagnóstico es una medida desproporcionada que puede provocar la pérdida de datos del usuario.
  </div>
</details>

---

### Pregunta 3
Una empresa realiza una copia de seguridad Completa el domingo por la noche. Durante la semana, desea ejecutar copias diarias que almacenen únicamente los datos modificados desde la última copia completa del domingo, permitiendo una restauración rápida con solo 2 conjuntos de datos. ¿Qué tipo de copia de seguridad debe programar de lunes a sábado?

<details class="quiz-option incorrect">
  <summary>A) Copia de seguridad Incremental.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La copia Incremental guarda los cambios respecto a la última copia realizada (ya sea completa o incremental), exigiendo restaurar la completa inicial más todas las incrementales intermedias una a una.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Copia de seguridad Espejo sincrónica en RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria RAM es un soporte volátil e inservible para el almacenamiento de copias de seguridad.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Copia de seguridad Diferencial.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La copia de seguridad Diferencial guarda todos los archivos que han cambiado desde la última copia Completa. Para recuperar el sistema ante un desastre, solo se necesitan dos elementos: el archivo de la copia Completa del domingo y el archivo de la copia Diferencial del día anterior al fallo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Copia de seguridad Sintética desatendida en disquete.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los disquetes carecen de capacidad técnica para alojar respaldos de datos modernos.
  </div>
</details>

---

### Pregunta 4
Un usuario de la red corporativa reporta que sus archivos locales de trabajo han cambiado de extensión a .locked y que al intentarlos abrir aparece una ventana notificando el cifrado de su disco y solicitando un pago en criptomonedas. ¿A qué tipo de malware corresponde este ataque y qué medida inmediata debe aplicar el técnico?

<details class="quiz-option incorrect">
  <summary>A) Adware; se soluciona cambiando el color del tema en Windows.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Adware despliega publicidad no deseada, no cifra archivos de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Troyano de canal alfa; se soluciona exportando la imagen a formato PNG en GIMP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde conceptos de manipulación de imagen en GIMP con malware informático.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Spyware keylogger; se soluciona ejecutando Ctrl + Shift + V en Google Sheets.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Spyware busca la interceptación silenciosa de credenciales y un atajo de teclado no erradica el malware.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Ransomware; se debe aislar/desconectar inmediatamente el equipo de la red física y Wi-Fi para evitar la propagación lateral y proceder al plan de respuesta a incidentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Ransomware es un tipo de malware malicioso que cifra la información del equipo y exige un rescate económico. La primera medida de contención técnica crítica es aislar el equipo de la red (desconectando el cable de red y desactivando Wi-Fi) para evitar que el ransomware infecte recursos compartidos de red o servidores corporativos de forma lateral.
  </div>
</details>

---

### Pregunta 5
Un técnico necesita prestar asistencia remota a un usuario de Windows en red local sin instalar software de terceros. ¿Qué protocolo propietario del entorno Microsoft y qué puerto TCP estándar utiliza por defecto la herramienta de Conexión a Escritorio Remoto?

<details class="quiz-option correct">
  <summary>A) Protocolo RDP (Remote Desktop Protocol) en el puerto TCP 3389.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La herramienta integrada en Windows para administración y soporte remoto utiliza el protocolo RDP (Remote Desktop Protocol), el cual escucha de forma nativa en el puerto TCP 3389.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Protocolo VNC (Virtual Network Computing) en el puerto TCP 80.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VNC utiliza habitualmente los puertos 5900+ y el puerto 80 corresponde al protocolo HTTP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Protocolo SSH (Secure Shell) en el puerto TCP 21.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SSH utiliza el puerto TCP 22 (el puerto 21 corresponde a FTP).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Protocolo SMTP en el puerto TCP 25.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SMTP es el protocolo de transporte de correo electrónico saliente.
  </div>
</details>

---

### Pregunta 6
¿Cuál es el objetivo principal y el ámbito de actuación de un técnico de soporte de Nivel 1 (Tier 1 / Primera Línea) en un Service Desk corporativo?

<details class="quiz-option incorrect">
  <summary>A) Rediseñar el código fuente de las aplicaciones en lenguaje C++ y reprogramar los firmware de los switches de la red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El desarrollo de software y la programación de firmware competen al área de ingeniería/desarrollo (Nivel 3 / Proveedores).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Actuar como Punto Único de Contacto (SPOC), recepción, categorización, triaje, resolución de incidencias sencillas/frecuentes mediante guías y derivación/escalado documentado de casos complejos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Nivel 1 es la interfaz primaria con los usuarios (SPOC - Single Point of Contact). Sus funciones principales incluyen recibir las solicitudes, registrar las incidencias en el sistema de tickets, aplicar procedimientos estándar de resolución rápida (preguntas frecuentes, reinicios básicos, gestión de contraseñas) y escalar las incidencias que requieran análisis avanzado hacia Niveles 2 o 3.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Administrar en exclusiva el CPD físico y contratar las líneas de fibra óptica de la multinacional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La gestión del CPD y la negociación con proveedores corresponde a la dirección de infraestructura o administradores Senior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Fabricar el cableado estructurado UTP en fábrica y reparar soldaduras de placas base en laboratorio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La reparación física a nivel de componente electrónico es una tarea de laboratorio especializado de hardware.
  </div>
</details>

---

### Pregunta 7
En la planificación de la salvaguarda de datos corporativos se aplica la famosa "Regla 3-2-1" de copias de seguridad. ¿Qué especificación técnica establece esta norma para garantizar la recuperación ante desastres?

<details class="quiz-option incorrect">
  <summary>A) 3 copias diarias, 2 usuarios administradores y 1 contraseña de 8 dígitos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No define requisitos de cuentas ni de longitud de contraseñas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) 3 gigabytes de tamaño máximo, 2 discos duros HDD y 1 pendrive USB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No limita las capacidades de almacenamiento a 3 Gigabytes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Conservar al menos 3 copias de los datos, en 2 soportes de almacenamiento de tecnología distinta, con 1 de las copias guardada fuera del sitio físico (off-site / nube).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Regla 3-2-1 es el pilar de las directrices de respaldo:
    - Mantener 3 copias de los datos (la original más dos respaldos).
    - Guardar las copias en 2 soportes o medios de almacenamiento diferentes (ej. disco local y cinta magnética/NAS).
    - Almacenar 1 de las copias fuera de las instalaciones físicas (off-site o en la nube) para garantizar la recuperación si el edificio sufre un incendio, robo o inundación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) 3 horas de backup, 2 formatos de vídeo MP4 y 1 archivo ejecutable .exe.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No relaciona la regla con formatos de archivo multimedia o ejecutables.
  </div>
</details>

---

### Pregunta 8
Un departamento de IT necesita auditar automáticamente todo el parque informático de la empresa (200 equipos), recogiendo el hardware instalado, la versión del sistema operativo, el software licenciado y los parches de seguridad sin pasar físicamente equipo por equipo. ¿Qué tipo de herramientas automatizadas deben desplegarse?

<details class="quiz-option incorrect">
  <summary>A) Servidores de correo POP3 con reglas de filtrado en CCO.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los servidores POP3 gestionan la recepción de correo electrónico personal, no auditan hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Tablas dinámicas en Google Sheets introducidas a mano por los usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La recopilación manual introducida por usuarios genera errores y no es una auditoría automatizada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Formatos de vídeo H.264 procesados con OpenShot.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    OpenShot es un editor de secuencias de vídeo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Herramientas de inventariado de red basadas en agentes (como AIDA64 Network Audit, OCS Inventory o GLPI).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las herramientas de inventariado e auditoría de red (como AIDA64, OCS Inventory o GLPI) utilizan un pequeño agente software que se ejecuta en segundo plano en los equipos clientes. Este agente escanea el hardware y el software instalado y envía automáticamente un informe detallado a una base de datos centralizada.
  </div>
</details>

---

### Pregunta 9
Tras resolver una caída crítica del servidor de archivos que afectó a toda la empresa durante 3 horas, el técnico debe redactar un Informe de Incidencia (Post-Mortem). ¿Cuáles son las secciones mínimas y obligatorias que debe incluir este documento técnico?

<details class="quiz-option correct">
  <summary>A) Identificación del sistema, cronología del evento, causa raíz (Root Cause), acciones correctivas aplicadas y medidas preventivas para evitar la reincidencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un informe de incidencia (Post-Mortem) documenta formalmente un fallo crítico de infraestructura. Debe detallar la identificación del activo, la línea temporal u horas del evento, el diagnóstico de la causa raíz (Root Cause Analysis), las soluciones de contingencia aplicadas y las medidas preventivas a implementar para evitar que el fallo se repita.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Nombre del fabricante de la tarjeta gráfica, código de color de la caja y tabla de valores de Google Sheets.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los aspectos estéticos o de color de componentes no aportan relevancia técnica sobre la causa raíz del fallo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Un archivo de audio OGG Vorbis de 15 minutos con música de fondo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un informe de incidencia es un documento estructurado de lectura técnica, no un archivo de sonido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una lista de 20 preguntas tipo test con opciones A, B, C y D.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un examen de autoevaluación no constituye un informe técnico de auditoría.
  </div>
</details>

---

### Pregunta 10
Tras la instalación de un controlador de dispositivo incompatible, un equipo con Windows 11 sufre pantallas azules intermitentes (BSOD). El técnico desea revertir el sistema operativo al estado estable inmediatamente anterior a la instalación del driver, sin perder los documentos y archivos creados por el usuario en sus carpetas personales. ¿Qué utilidad integrada del sistema debe utilizar?

<details class="quiz-option incorrect">
  <summary>A) Formateo completo de la unidad C: mediante el comando format C: /FS:NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El formateo destruye todo el contenido de la partición, borrando los datos del usuario.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Restauración del sistema (System Restore) a partir de un Punto de Restauración previo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La Restauración del Sistema (System Restore) devuelve los archivos de sistema, claves del registro y controladores instalados al estado en que se encontraban en un Punto de Restauración anterior, conservando intactos los archivos personales del usuario (documentos, imágenes, correos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Limpieza de disco con la herramienta Disk Cleanup borrando la papelera de reciclaje.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Disk Cleanup elimina archivos temporales para liberar espacio, pero no revierte archivos de sistema ni controladores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Reinstalación de la suite AppSheet en el teléfono móvil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reinstalar una aplicación No-Code en un teléfono móvil no resuelve el fallo de un controlador de Windows.
  </div>
</details>

---

### Pregunta 11
¿Qué entorno de arranque de diagnóstico de Windows carga únicamente los controladores y servicios estrictamente esenciales del sistema básico, deshabilitando programas de inicio de terceros para permitir desinstalar software conflictivo o limpiar malware resistente?

<details class="quiz-option incorrect">
  <summary>A) Modo de compatibilidad Windows 95.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo de compatibilidad ajusta el entorno para ejecutar programas antiguos diseñados para otros SOs.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Modo de alta resolución 4K.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Modifica la resolución visual de salida hacia la pantalla.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Modo Seguro / Modo a prueba de fallos (Safe Mode).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Modo Seguro (Safe Mode) arranca el sistema operativo en un estado mínimo, utilizando un conjunto reducido de controladores y archivos del núcleo (kernel). Al no cargar aplicaciones de terceros ni servicios opcionales en el inicio, facilita la desinfección de malware y la eliminación de software conflictivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Modo de presentación a pantalla completa (F5).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es la función de reproducción a pantalla completa de presentaciones en PowerPoint.
  </div>
</details>

---

### Pregunta 12
Una gran empresa implementa un Portal de Autoservicio de IT para sus empleados. ¿Qué ventajas aporta este canal de soporte asíncrono tanto a los usuarios como al departamento de TI?

<details class="quiz-option incorrect">
  <summary>A) Obliga a los usuarios a llamar por teléfono a un número de tarificación especial 902.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los portales de autoservicio buscan canalizar peticiones vía web para evitar costes telefónicos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Elimina la necesidad de realizar copias de seguridad de los servidores.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No exime a la empresa de la obligación de respaldar su infraestructura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Convierte las contraseñas de los usuarios en archivos de imagen PNG transparentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No altera los métodos de almacenamiento de credenciales ni las convierte en formato gráfico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Permite a los usuarios consultar soluciones a problemas frecuentes en la base de conocimiento (KB), restablecer contraseñas de forma autónoma y registrar tickets sin saturar la línea telefónica.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un Portal de Autoservicio (Self-Service Portal) empodera al usuario ofreciéndole acceso 24/7 a una Base de Conocimiento (Knowledge Base / KB) para resolver problemas conocidos, ejecutar herramientas de autorrestablecimiento (como reseteo de contraseñas) y registrar solicitudes de servicio, reduciendo la carga de llamadas entrantes en el Helpdesk.
  </div>
</details>

---

### Pregunta 13
Un administrador de sistemas necesita instalar de forma masiva y desatendida una actualización de software en 100 ordenadores de un dominio Active Directory. Necesita ejecutar el instalador sin que aparezcan ventanas interactivas ni asistentes que requieran clics por parte de los usuarios. ¿Qué parámetro o técnica de instalación debe emplear?

<details class="quiz-option correct">
  <summary>A) Instalación silenciosa o desatendida (uso de conmutadores/switches como /quiet, /qn o /silent distribuidos por GPO/MDM).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una instalación silenciosa (Silent / Unattended Install) ejecuta el paquete de software en segundo plano utilizando parámetros por línea de comandos (/quiet, /qn, /s). Combinada con herramientas de despliegue centralizado como las Directivas de Grupo (GPO) o sistemas MDM, permite desplegar aplicaciones en cientos de equipos sin intervención humana.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Creación de una plantilla de PowerPoint en formato .potx.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    .potx es una plantilla de diseño para presentaciones multimedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Envío manual de un correo electrónico en CCO con el instalador adjunto a cada usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Requiere que cada usuario ejecute manualmente la instalación, además de violar los límites de tamaño de adjuntos por SMTP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Creación de un mapa de bits en GIMP con canal alfa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    GIMP es una aplicación de retoque fotográfico.
  </div>
</details>

---

### Pregunta 14
En el diseño de un Plan de Recuperación ante Desastres (DRP) se definen los parámetros RTO (Recovery Time Objective) y RPO (Recovery Point Objective). ¿Cuál es la definición correcta de cada uno de estos indicadores técnicos?

<details class="quiz-option incorrect">
  <summary>A) RTO es el número de módulos RAM del servidor y RPO es el número de copias enviadas por SMTP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde componentes de hardware de memoria con métricas de continuidad de negocio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) RTO es el tiempo máximo aceptable que un sistema puede estar fuera de servicio tras un fallo; RPO es la cantidad máxima de pérdida de datos tolerable medida en tiempo desde el último backup.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    - RTO (Recovery Time Objective / Tiempo Objetivo de Recuperación): Es la duración máxima de tiempo durante la cual un proceso de negocio puede estar interrumpido sin causar un impacto inaceptable.
    - RPO (Recovery Point Objective / Punto Objetivo de Recuperación): Es el volumen de datos que la empresa se puede permitir perder medido en intervalo de tiempo entre la incidencia y la última copia de seguridad válida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) RTO es el precio de la licencia de Windows y RPO es el número de megapíxeles del escáner.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No tiene ninguna relación con costes de licencias informáticas ni características del escáner.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambos parámetros son idénticos y miden los minutos que tarda una presentación en cargarse en Google Slides.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son dos métricas distintas y no miden tiempos de carga de suites ofimáticas.
  </div>
</details>

---

### Pregunta 15
Para diagnosticar un fallo intermitente en un disco duro o investigar la causa de un apagado inesperado del sistema informático, ¿qué dos herramientas de diagnóstico de hardware y software debe consultar el técnico respectivamente?

<details class="quiz-option incorrect">
  <summary>A) Google Docs y el reproductor VLC Media Player.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son aplicaciones de edición de texto y reproducción multimedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El panel de animación de PowerPoint y el atajo Ctrl + Shift + V.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla funciones de diseño de diapositivas con el atajo de pegar sin formato.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El estado S.M.A.R.T. del disco duro y el Visor de Eventos del Sistema Operativo (Event Viewer / syslog).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tecnología S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) está integrada en los discos duros para supervisar atributos de salud física (sectores defectuosos, temperatura, errores de lectura). El Visor de Eventos (Event Viewer / syslog) registra los eventos del sistema, errores de controladores y advertencias críticas del sistema operativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El modulador de frecuencia de radio FM y el protocolo POP3.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No corresponden a herramientas de diagnóstico de hardware o software del sistema informático.
  </div>
</details>

---

### Pregunta 16
Un empleado recibe un correo urgente haciéndose pasar por el Director Financiero exigiendo la transferencia inmediata de 5.000 € a una cuenta bancaria desconocida bajo la amenaza de despido. ¿A qué técnica de ataque de ingeniería social orientada a engañar al factor humano corresponde esta situación?

<details class="quiz-option incorrect">
  <summary>A) Ataque de denegación de servicio distribuido (DDoS).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un ataque DDoS busca colapsar un servidor o red enviando tráfico masivo, no engaña a personas vía correo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Inyección de código SQL en la celda A1 de Excel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La inyección SQL ataca vulnerabilidades de bases de datos relacionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Salto de eje de cámara en vídeo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un error de gramática de lenguaje audiovisual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Spear Phishing / Fraude del CEO (Phishing dirigido por ingeniería social).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Fraude del CEO (una variante especializada de Spear Phishing) utiliza técnicas de ingeniería social impersonando la identidad de un alto directivo mediante correos manipulados para engañar a un empleado con capacidad de realizar pagos o transferencias de dinero.
  </div>
</details>

---

### Pregunta 17
¿En qué consiste la ejecución de un Plan de Mantenimiento Preventivo de Sistemas Microinformáticos?

<details class="quiz-option correct">
  <summary>A) Realizar acciones periódicas programadas (limpieza interna de polvo, revisión de ventiladores, actualización de parches de seguridad, desfragmentación/optimización y comprobación de backups) para evitar fallos antes de que ocurran.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El mantenimiento preventivo contempla intervenciones sistemáticas y programadas tanto en el hardware (limpieza de componentes, cambio de pasta térmica) como en el software (instalación de parches de seguridad, optimización de discos, comprobación de antivirus y backups) con el fin de anticiparse a las averías y reducir la probabilidad de paradas del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Esperar a que el equipo se queme por sobrecalentamiento para cambiar la placa base por una nueva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde al modelo de mantenimiento correctivo por fallo total, que incrementa los costes operacionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Borrar el sistema operativo cada viernes por la tarde y volverlo a instalar los lunes por la mañana.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Reinstalar el sistema operativo semanalmente es ineficiente y destructivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Cambiar la dirección de correo electrónico corporativo todas las semanas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cambiar direcciones de correo crea desorganización y rompe la comunicación de la empresa.
  </div>
</details>

---

### Pregunta 18
Al actualizar un Manual de Procedimientos Técnicos de la empresa, el autor debe registrar la versión del documento como "v2.1" e incluir un historial de cambios (Changelog). ¿Qué información obligatoria debe figurar en la tabla de control de versiones?

<details class="quiz-option incorrect">
  <summary>A) El precio del ordenador en el mercado de segunda mano.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los costes de mercado de segunda mano son irrelevantes para el control documental de procesos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Número de versión, fecha de modificación, autor del cambio y descripción sintética de las modificaciones realizadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El control de versiones en documentación técnica exige trazabilidad de los cambios. La tabla de control debe reflejar obligatoriamente el número de versión (ej. v1.0, v2.1), la fecha de la revisión, el nombre o cargo del autor y el resumen de las modificaciones respecto a la versión anterior.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La lista de los 200 contactos de la libreta en CCO.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde al envío de correos respetando el RGPD, no a las cabeceras de documentos técnicos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El número de fotogramas por segundo del vídeo explicativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tasa de fotogramas es un parámetro de secuencias de vídeo.
  </div>
</details>

---

### Pregunta 19
Para almacenar copias de seguridad históricas de gran volumen (decenas de Terabytes) que requieren custodia a largo plazo a un bajo coste por Gigabyte y alta durabilidad física, ¿qué soporte de almacenamiento magnético se sigue utilizando masivamente en Centros de Datos?

<details class="quiz-option incorrect">
  <summary>A) Tarjetas de memoria MicroSD de 32 GB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las tarjetas MicroSD están diseñadas para dispositivos móviles pequeños y no ofrecen la durabilidad ni capacidad requerida en servidores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Discos ópticos CD-R de 700 MB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un CD-R de 700 MB tiene una capacidad insignificante para volúmenes de Terabytes.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Unidades y cintas magnéticas LTO (Linear Tape-Open).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La tecnología de cintas magnéticas LTO (Linear Tape-Open) sigue siendo el estándar predominante en Centros de Datos para copias de seguridad profundas y archivo (Cold Storage). Ofrece un coste por Terabyte muy bajo, vidas útiles que superan los 30 años y aislamiento físico inmune a ataques cibernéticos (Air-Gap).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Disquetes flexibles de 3,5 pulgadas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los disquetes de 1,44 MB están obsoletos y carecen de capacidad técnica.
  </div>
</details>

---

### Pregunta 20
Un acuerdo de nivel de servicio (SLA) establece que las incidencias críticas deben ser atendidas en menos de 15 minutos. Si el técnico de Nivel 1 no ha podido diagnosticar el problema en los primeros 10 minutos, ¿qué protocolo debe activarse inmediatamente?

<details class="quiz-option incorrect">
  <summary>A) Cerrar el ticket marcándolo como "Resuelto sin datos".</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Marcar un ticket como resuelto sin estar solucionado destruye la fiabilidad del servicio e incumple el SLA.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Desconectar la línea telefónica para no recibir más avisos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Desconectar los canales de atención constituye una falta grave en la prestación del servicio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Apagar los servidores para forzar el reinicio completo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Apagar servidores de forma no planificada amplifica el impacto de la avería en la empresa.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Procedimiento de escalado funcional/jerárquico de la incidencia hacia el equipo de soporte especializado antes de incurrir en un incumplimiento del SLA (SLA breach).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando una incidencia se aproxima al límite de tiempo comprometido en el SLA (Service Level Agreement), los procedimientos exigen activar el escalado automático para reasignar el caso inmediatamente al personal especializado de Nivel 2 o a la dirección técnica, previniendo el incumplimiento del compromiso del contrato de servicio (SLA breach).
  </div>
</details>
