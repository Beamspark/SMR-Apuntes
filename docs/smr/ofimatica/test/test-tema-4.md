# Test de Autoevaluación: Tema 4

[← Volver al Tema 4: Bases de datos y desarrollo no-code con AppSheet](../tema-4.md)

---

### Pregunta 1
¿Cuál es la diferencia estructural fundamental entre organizar la información en una hoja de cálculo tradicional y utilizar un sistema de gestión de bases de datos relacionales (RDBMS)?

<details class="quiz-option correct">
  <summary>A) Las bases de datos relacionales organizan la información en tablas independientes interconectadas mediante relaciones formales (claves primarias y externas), garantizando la integridad referencial y evitando la redundancia de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    A diferencia de una hoja de cálculo plana donde los datos suelen duplicarse en múltiples pestañas, una base de datos relacional fragmenta la información en tablas especializadas (ej. Clientes, Pedidos, Productos). Estas tablas se vinculan mediante claves primarias (identificadores únicos) y claves externas, garantizando la integridad referencial y eliminando la redundancia de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Las hojas de cálculo no permiten almacenar datos de tipo texto ni fechas, siendo de uso exclusivo para operaciones matemáticas elementales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las hojas de cálculo gestionan habitualmente cadenas de texto, números, fechas y booleanos sin inconvenientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Las bases de datos relacionales no utilizan filas ni columnas, sino que almacenan la información exclusivamente en archivos comprimidos de texto plano .txt.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las bases de datos relacionales se estructuran precisamente en tablas formadas por filas (registros) y columnas (campos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Las hojas de cálculo imponen un límite estricto de un único usuario por empresa y requieren licencias de código abierto de tipo GPL para funcionar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las hojas de cálculo modernas en la nube (como Google Sheets) admiten edición colaborativa multiusuario y no imponen licencias GPL obligatorias.
  </div>
</details>

---

### Pregunta 2
En la pestaña Data > Columns de AppSheet, se requiere configurar una columna que actúe como Clave Primaria (Key) para identificar inequívocamente cada registro de la tabla. ¿Qué función de expresión es el estándar recomendado para generar automáticamente un código alfanumérico único e indivisible de 8 caracteres al crear un nuevo formulario?

<details class="quiz-option incorrect">
  <summary>A) =TODAY()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =TODAY() devuelve la fecha actual, lo cual genera claves duplicadas si se crean dos registros el mismo día.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) =UNIQUEID()</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función =UNIQUEID() es la expresión estándar recomendada en AppSheet para generar una cadena alfanumérica aleatoria de 8 caracteres única a nivel mundial (ej. a3f89e12). Asignada en la propiedad Initial Value de la columna clave, garantiza que jamás existan dos registros con el mismo identificador primario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) =USEREMAIL()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =USEREMAIL() devuelve el correo del usuario activo, repitiendo la clave cada vez que ese mismo usuario cree varios registros.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) =RANDBETWEEN(1; 1000)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    =RANDBETWEEN() genera enteros aleatorios en un rango con un alto riesgo de colisión de duplicados en bases de datos extensas.
  </div>
</details>

---

### Pregunta 3
Un desarrollador diseña una aplicación en AppSheet con dos tablas: Clientes y Pedidos. En la tabla Pedidos desea crear una relación que vincule cada pedido con un cliente existente en la tabla Clientes. ¿Qué tipo de dato (Type) debe asignarse a la columna ID_Cliente dentro de la configuración de AppSheet para establecer esta relación de clave externa?

<details class="quiz-option incorrect">
  <summary>A) EnumList</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    EnumList permite elegir múltiples opciones de una lista fija, pero no establece relaciones de integridad referencial entre tablas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Text</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tipo Text almacena cadenas alfanuméricas simples sin vincular lógicamente la tabla con el registro origen.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Ref (referenciando a la tabla Clientes)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El tipo de dato Ref (Referencia) en AppSheet se utiliza específicamente para implementar relaciones de clave externa (Foreign Key). Al asignar el tipo Ref y apuntar a la tabla destino Clientes, AppSheet despliega automáticamente un menú desplegable con los clientes válidos y crea una lista relacionada (Related Pedidos) en la vista del cliente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) ChangeCounter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    ChangeCounter es un tipo especial que incrementa un contador cada vez que se modifica otra columna.
  </div>
</details>

---

### Pregunta 4
En el panel de desarrollo de AppSheet, se necesita configurar la apariencia visual de la aplicación, definiendo si los datos de una tabla se desplegarán en forma de vista de Tabla, Formulario, Mapa, Gráfico o Galería. ¿En qué pestaña principal de la interfaz de AppSheet se gestionan estas configuraciones visuales?

<details class="quiz-option incorrect">
  <summary>A) Data</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pestaña Data gestiona la conexión con las tablas de origen, tipos de datos de columnas, claves y fórmulas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Behavior</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pestaña Behavior define botones de acción personalizada y eventos de navegación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Security</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pestaña Security administra la autenticación, permisos de usuario y filtros de seguridad.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) UX (User Experience)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La pestaña UX (User Experience) agrupa todos los elementos de interfaz visual de AppSheet: creación de vistas (Views), elección de tipos de vista (Tabla, Formulario, Mapa, Dashboard), definición de colores/logos corporativos (Brand) y formateo condicional de iconos (Format Rules).
  </div>
</details>

---

### Pregunta 5
Se requiere restringir el acceso a los datos de una aplicación en AppSheet para que cada usuario comercial pueda visualizar exclusivamente los registros de ventas asignados a su dirección de correo electrónico corporativo. ¿Qué propiedad y en qué pestaña de AppSheet debe configurarse?

<details class="quiz-option correct">
  <summary>A) La propiedad Security Filter dentro de la pestaña Security &gt; Data, aplicando la expresión = [Email_Comercial] = USEREMAIL().</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los Security Filters (Filtros de Seguridad), ubicados en la pestaña Security &gt; Data, evalúan una condición lógica a nivel de servidor antes de descargar los datos al dispositivo del usuario. Al aplicar = [Email_Comercial] = USEREMAIL(), el servidor filtra y descarga únicamente las filas donde la columna del comercial coincide con el correo autenticado en la sesión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El menú UX &gt; Brand, cambiando el color de la interfaz a rojo para los comerciales no autorizados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El menú UX &gt; Brand modifica temas y colores estéticos, no filtra la descarga de datos por seguridad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La pestaña Behavior &gt; Actions, creando un botón que elimine los registros ajenos del servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las acciones en Behavior no filtran datos de forma segura y borrar registros destruiría la base de datos corporativa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La pestaña Data &gt; Tables, convirtiendo la tabla de origen en una hoja de cálculo de solo lectura.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Convertir la tabla a solo lectura impide modificar datos a todos los usuarios por igual, sin filtrar por correo.
  </div>
</details>

---

### Pregunta 6
Una empresa necesita que cada vez que se cree un nuevo registro en la tabla Incidencias con prioridad "Alta", la aplicación envíe automáticamente un correo electrónico de notificación al equipo técnico e incluya un informe adjunto en formato PDF. ¿Qué módulo de la interfaz de AppSheet se utiliza para programar esta automatización?

<details class="quiz-option incorrect">
  <summary>A) UX &gt; Views</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    UX &gt; Views gestiona la pantalla visual para el usuario humano, no ejecuta tareas en segundo plano.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Automation / Intelligence (creando un Bot compuesto por un Evento y un Proceso/Tarea)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El módulo Automation (o Intelligence) permite diseñar flujos de trabajo desatendidos denominados Bots. Un Bot se compone de un Evento desencadenante (ej. inserción de fila con condición [Prioridad]="Alta") y una Tarea (Task) ejecutora que envía un correo electrónico dinámico o genera documentos PDF.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Data &gt; Column Values</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Column Values define los tipos de datos y fórmulas de cálculo de una columna individual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Security &gt; Domain Users</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Administra el listado de dominios autorizados para iniciar sesión.
  </div>
</details>

---

### Pregunta 7
Al configurar una Tarea (Task) de generación de informes PDF dentro de un Bot de AppSheet, ¿qué sintaxis estricta exige la plantilla en Google Docs para incrustar dinámicamente el valor almacenado en la columna "Nombre_Cliente"?

<details class="quiz-option incorrect">
  <summary>A) @Nombre_Cliente</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El símbolo @ se utiliza para mencionar usuarios en comentarios de Google Docs.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) {{Nombre_Cliente}}</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La sintaxis {{...}} de llaves dobles se utiliza en lenguajes como Jinja2 o Mustache, no en plantillas de AppSheet.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) &lt;&lt;[Nombre_Cliente]&gt;&gt;</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El motor de generación de documentos de AppSheet exige la sintaxis de etiquetas dobles angulares con corchetes &lt;&lt;[Nombre_Columna]&gt;&gt;. Durante la generación del archivo PDF, AppSheet escanea la plantilla de Google Docs o Word, sustituyendo &lt;&lt;[Nombre_Cliente]&gt;&gt; por el valor real almacenado en el registro.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) %Nombre_Cliente%</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    %...% corresponde a variables de entorno en sistemas operativos Windows/MS-DOS.
  </div>
</details>

---

### Pregunta 8
Un técnico de campo realiza revisiones en zonas rurales sin cobertura de red móvil. Al guardar nuevos registros en su aplicación de AppSheet, ¿cómo gestiona la plataforma el trabajo en modo fuera de línea (offline)?

<details class="quiz-option incorrect">
  <summary>A) La aplicación bloquea el botón de guardar e impide la introducción de datos hasta detectar conexión 5G.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AppSheet no bloquea la entrada de datos; permite trabajar y guardar normalmente sin red.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Borra las fotos y datos introducidos para evitar la corrupción del archivo local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Conserva los datos y archivos multimedia almacenados temporalmente en la caché del dispositivo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Muestra un error irrecuperable y reinicia el dispositivo móvil a valores de fábrica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pérdida de conectividad es un evento normalizado que jamás provoca el reinicio del dispositivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Almacena los cambios localmente en el dispositivo y ejecuta una Sincronización Retrasada (Delayed Sync) automática al recuperar la cobertura de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    AppSheet está diseñado bajo la filosofía Offline-First. Cuando el dispositivo carece de conexión a Internet, la aplicación guarda las operaciones en una base de datos local del móvil y las añade a una cola de pendientes. Mediante el mecanismo de Sincronización Retrasada (Delayed Sync), al recuperar la conexión procesa e impacta automáticamente los cambios pendientes en el servidor central.
  </div>
</details>

---

### Pregunta 9
Se desea añadir un botón personalizado en la interfaz de la aplicación que permita realizar una llamada telefónica directa al cliente o abrir la aplicación de mapas con su dirección al pulsar sobre él. ¿En qué sección de AppSheet se definen estos botones de acceso rápido?

<details class="quiz-option correct">
  <summary>A) Behavior &gt; Actions</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la pestaña Behavior &gt; Actions se crean botones de acción personalizados (Actions). Permiten definir comportamientos interactivos al pulsar sobre un registro, tales como realizar llamadas (phone), abrir enlaces externos (Open URL), navegar a otra vista o modificar valores de columnas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Data &gt; User Settings</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    User Settings define campos de configuración personalizados que el usuario ajusta en su perfil.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Security &gt; Authentication</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Gestiona los proveedores de identidad (Google, Microsoft, Apple) para el inicio de sesión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) UX &gt; Localize</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Permite traducir los textos predeterminados de la interfaz (ej. cambiar "Save" por "Guardar").
  </div>
</details>

---

### Pregunta 10
En una aplicación de gestión de mantenimiento se requiere que los operarios capturen la firma manuscrita de conformidad del cliente al finalizar un trabajo. ¿Qué tipo de dato (Type) debe asignarse a esa columna en AppSheet?

<details class="quiz-option incorrect">
  <summary>A) Text</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El tipo Text solo permite la entrada de caracteres mediante el teclado alfanumérico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Signature</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El tipo de dato Signature despliega un recuadro de lienzo táctil interactivo en la pantalla del dispositivo móvil donde el usuario puede trazar su firma manuscrita mediante el dedo o un lápiz óptico, guardando el trazo como una imagen PNG vinculada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) LongText</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    LongText es un área de texto multilínea para observaciones o descripciones extensas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Enum</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Enum presenta una lista de opciones exclusivas prefijadas.
  </div>
</details>

---

### Pregunta 11
¿Qué función de expresión de AppSheet permite consultar y extraer el valor de una columna específica de otra tabla buscando por una clave coincidente, siguiendo la sintaxis LOOKUP(valor_buscado, tabla_destino, columna_clave, columna_retorno)?

<details class="quiz-option incorrect">
  <summary>A) SELECT()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SELECT() devuelve una lista (List) de valores filtrados, no un valor escalar único de una fila.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) INDEX()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    INDEX() extrae un elemento de una lista por su número de posición ordinal.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) LOOKUP()</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función LOOKUP() es equivalente al BUSCARV de las hojas de cálculo. Su sintaxis estricta es LOOKUP(valor_buscado, "Tabla_Destino", "Columna_Clave", "Columna_A_Devolver"), buscando la coincidencia del valor en la columna clave de la tabla destino y retornando el contenido del campo solicitado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) FILTER()</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    FILTER() devuelve una lista de claves primarias que cumplen una condición lógica.
  </div>
</details>

---

### Pregunta 12
Un administrador necesita auditar los fallos de sincronización y verificar la secuencia histórica de operaciones de lectura/escritura realizadas por los usuarios en la aplicación. ¿Qué herramienta de diagnóstico integrada en AppSheet proporciona este registro de auditoría?

<details class="quiz-option incorrect">
  <summary>A) Performance Profile</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Performance Profile mide los tiempos de respuesta y segundos de carga de las tablas, no el historial detallado de transacciones de usuarios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) UX Options</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ajusta parámetros estéticos y de comportamiento de las vistas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Data Tables View</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Muestra la estructura de celdas de las tablas de datos origen.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Audit Log (ubicado en la sección Manage &gt; Monitor)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Audit Log (Registro de Auditoría), situado en la sección Manage &gt; Monitor, es la herramienta de diagnóstico centralizada de AppSheet. Muestra la lista cronológica detallada de todas las solicitudes de sincronización, adiciones, ediciones, borrados, errores de reglas y envíos de correo de los usuarios.
  </div>
</details>

---

### Pregunta 13
¿Cuál es la diferencia funcional entre el tipo de dato Enum y el tipo de dato EnumList al configurar una columna en AppSheet?

<details class="quiz-option correct">
  <summary>A) Enum permite seleccionar un único valor de una lista desplegable fija; EnumList permite seleccionar múltiples valores simultáneamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Ambos tipos representan listas de valores predefinidos (enumeraciones). Sin embargo, Enum (Enumeración) es de selección única exclusiva (ej. Estado: "Abierto" O "Cerrado"), mientras que EnumList (Lista de Enumeraciones) permite al usuario marcar varias casillas de verificación simultáneamente (ej. Servicios: "Wi-Fi", "Parking", "Desayuno").
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Enum permite cargar archivos de vídeo MP4; EnumList se usa exclusivamente para contraseñas de cifrado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos de vídeo o contraseñas utilizan los tipos Video o ChangeTimestamp/Text.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Enum convierte el texto a minúsculas; EnumList borra la columna de la base de datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna de estas propiedades modifica la caja de la tipografía ni destruye columnas en la base de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas son exactamente idénticas y solo cambian el color del botón en la vista de usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tienen un comportamiento funcional totalmente diferente respecto a la cardinalidad de la selección.
  </div>
</details>

---

### Pregunta 14
Para optimizar el tiempo de carga inicial de una aplicación en los dispositivos móviles de los usuarios, el desarrollador desea medir qué tabla o consulta tarda más segundos en procesarse durante el arranque. ¿Qué herramienta de análisis de rendimiento ofrece AppSheet?

<details class="quiz-option incorrect">
  <summary>A) Security Filter Test</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Security Filter Test evalúa la corrección de las fórmulas lógicas de filtro de seguridad, no los tiempos de carga.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Performance Profile</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Performance Profile (Perfil de Rendimiento) analiza los tiempos de ejecución de la aplicación, desglosando exactamente cuántos milisegundos consume cada tabla en descargarse, el tiempo de evaluación de fórmulas de App y la latencia de procesamiento de imágenes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Audit Email Monitor</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Monitoriza exclusivamente el estado de entrega de los correos electrónicos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Data Source Connector</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Administra las credenciales de conexión con los proveedores de hojas de cálculo o bases de datos SQL.
  </div>
</details>

---

### Pregunta 15
Un desarrollador escribe la expresión =USEREMAIL() en el parámetro Initial Value de la columna "Creado_Por". ¿Qué dato almacenará automáticamente AppSheet cuando un usuario abra el formulario para crear un nuevo registro?

<details class="quiz-option incorrect">
  <summary>A) La dirección IP pública de la conexión Wi-Fi del dispositivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La dirección IP se captura mediante la propiedad de auditoría de red del servidor, no con USEREMAIL().
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El nombre del modelo y marca del teléfono móvil.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modelo del dispositivo se puede obtener con la función CONTEXT("Device").
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La dirección de correo electrónico autenticada de la cuenta del usuario que tiene abierta la sesión en la aplicación.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La función USEREMAIL() captura dinámicamente la dirección de correo electrónico con la que el usuario ha iniciado sesión autenticada en AppSheet (ej. tecnico@empresa.com). Al situarse en Initial Value, rellena de forma transparente la columna de auditoría sin que el usuario deba escribirla manualmente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El número de teléfono de la tarjeta SIM insertada en el dispositivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AppSheet no accede a información privada de la tarjeta SIM del teléfono.
  </div>
</details>

---

### Pregunta 16
En la tabla Facturas, se requiere que la columna "Importe_Total" sea visible en la pantalla para el usuario, pero que este no pueda modificar manualmente su contenido bajo ninguna circunstancia (ya que se calcula automáticamente mediante fórmula). ¿Cómo deben configurarse las casillas Show? y Editable? en AppSheet?

<details class="quiz-option incorrect">
  <summary>A) Show? desmarcado (FALSE) y Editable? marcado (TRUE).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocultaría el campo en pantalla y permitiría modificarlo si se accediera a él.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ambas casillas Show? y Editable? marcadas (TRUE).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Permitiría que el usuario borrase o alterase manualmente el importe calculado por la fórmula.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ambas casillas Show? y Editable? desmarcadas (FALSE).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocultaría la columna por completo en las vistas de la aplicación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Show? marcado (TRUE) y Editable? desmarcado (FALSE).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La casilla Show? controla la visibilidad del campo en la interfaz (marcada como TRUE para que el usuario pueda leer el total). La casilla Editable? controla si el campo acepta escritura manual (desmarcada como FALSE bloquea el campo como lectura para evitar manipulaciones).
  </div>
</details>

---

### Pregunta 17
¿Qué problema de diseño se produce en una base de datos cuando la información de la dirección de un cliente se repite duplicada en 500 filas de pedidos independientes en lugar de estar almacenada en una única tabla de Clientes vinculada?

<details class="quiz-option correct">
  <summary>A) Redundancia de datos y riesgo de inconsistencia ante futuras actualizaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Duplicar datos en múltiples filas genera redundancia de datos. Esto incrementa innecesariamente el espacio de almacenamiento y genera riesgos de inconsistencia: si el cliente cambia de domicilio y solo se actualiza en algunos registros, la base de datos mostrará direcciones contradictorias para un mismo sujeto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Error de compilación de hardware en la memoria RAM del servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La redundancia es un fallo de diseño lógico del modelo de datos, no un error físico del hardware de la memoria RAM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Conversión automática de la base de datos a un archivo de vídeo MP4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La redundancia no altera el formato de archivo de la base de datos a contenedores de vídeo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Incompatibilidad obligatoria con teléfonos móviles de sistema Android.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La redundancia no genera incompatibilidades con sistemas operativos móviles.
  </div>
</details>

---

### Pregunta 18
En la pestaña UX > Views, un desarrollador configura una vista de tipo Form (Formulario). ¿Qué propiedad de la vista permite definir la pantalla a la que será redirigido el usuario inmediatamente después de pulsar el botón "Save" (Guardar)?

<details class="quiz-option incorrect">
  <summary>A) Display Icon</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Display Icon define el icono gráfico desplegado en la barra de navegación inferior.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Event Actions &gt; Finish View</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La propiedad Event Actions > Finish View dentro de una vista de formulario especifica la vista de destino a la que AppSheet debe llevar al usuario tras guardar con éxito un formulario (ej. redirigir a la vista de detalle del registro recién creado o volver a la tabla general).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Security Filter</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Security Filter filtra filas a nivel de servidor de datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Show Name</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Show Name determina si se muestra el título de la vista en la cabecera.
  </div>
</details>

---

### Pregunta 19
Se requiere configurar una columna "Fecha_Registro" para que tome de forma predeterminada la fecha actual del sistema al abrir un nuevo formulario de entrada en AppSheet, permitiendo al usuario modificarla si lo desea. ¿En qué propiedad de la columna debe introducirse la expresión =TODAY()?

<details class="quiz-option incorrect">
  <summary>A) En la propiedad App Formula (fórmula de aplicación).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    App Formula sobrescribe y calcula el valor de forma obligatoria, bloqueando la edición manual por parte del usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) En la propiedad Security Filter.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Security Filter se usa para restringir la descarga de filas completas de la tabla.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) En la propiedad Initial Value (valor inicial).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La propiedad Initial Value propone un valor por defecto al crear un nuevo registro (mediante =TODAY()), pero permite que el usuario sobrescriba manualmente el campo. Si se hubiese usado App Formula, el valor quedaría recalculado y bloqueado permanentemente sin opción a edición manual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En la propiedad Display Name.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Display Name cambia el rótulo visual o etiqueta de la columna en la pantalla.
  </div>
</details>

---

### Pregunta 20
Un desarrollador desea crear una pantalla interactiva en la aplicación que muestre simultáneamente en un mismo panel varias vistas existentes (un mapa con ubicaciones, un gráfico de ventas y una lista de clientes). ¿Qué tipo de vista (View Type) debe seleccionarse en la pestaña UX?

<details class="quiz-option incorrect">
  <summary>A) Deck</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La vista Deck muestra registros en formato de tarjetas individuales dispuestas en lista vertical.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Gallery</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Gallery despliega una cuadrícula centrada en imágenes o archivos multimedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Detail</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Detail muestra la ficha de datos pormenorizada de un único registro seleccionado.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Dashboard</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La vista de tipo Dashboard (Cuadro de Mando) es un contenedor multivisual en AppSheet. Permite combinar en una única pantalla de tablet o PC múltiples vistas secundarias (mapas, tablas, gráficos, galerías) interactuando entre sí en tiempo real.
  </div>
</details>
