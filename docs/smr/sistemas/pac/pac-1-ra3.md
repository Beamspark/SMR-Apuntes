[← Volver al Índice de PACs](./index.md)

---

# PAC (RA3) - Tareas Básicas de Configuración y Mantenimiento sobre Sistemas Operativos

---

### Pregunta 1
¿Para qué sirve iniciar el sistema operativo en modo seguro o en modo de recuperación?

<details class="quiz-option incorrect">
  <summary>A) Para aumentar físicamente la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La capacidad de memoria RAM es una limitación física del hardware instalado en la placa base y no puede ampliarse mediante modos de arranque de software.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Para diagnosticar y solucionar problemas utilizando los componentes necesarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modo seguro (<em>Safe Mode</em>) arranca el sistema operativo cargando únicamente los controladores genéricos y servicios esenciales mínimos, aislando software de terceros o controladores corruptos para facilitar el diagnóstico, la desinfección de malware y la reparación del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Para eliminar todas las cuentas de usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El arranque en modo seguro conserva intactos los perfiles, permisos y datos de las cuentas registradas en el equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Para cargar todas las aplicaciones instaladas automáticamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ocurre precisamente lo contrario: deshabilita la ejecución de programas residentes y servicios no esenciales en el inicio.
  </div>
</details>

---

### Pregunta 2
¿Cuál es la diferencia principal entre suspender e hibernar un equipo?

<details class="quiz-option incorrect">
  <summary>A) Ambas opciones cierran todas las aplicaciones sin conservar la sesión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cierre completo de procesos y sesión corresponde al apagado tradicional (<em>Shutdown</em>), mientras que tanto la suspensión como la hibernación preservan el estado de trabajo abierto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La suspensión guarda la sesión en el disco; la hibernación la conserva únicamente en RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los mecanismos de almacenamiento de estado están invertidos en este enunciado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La hibernación solo apaga la pantalla y mantiene el resto del equipo activo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La hibernación corta por completo la alimentación eléctrica del equipo tras volcar la memoria a disco (consumo nulo).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La suspensión conserva la sesión en RAM; la hibernación la guarda en el almacenamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la <strong>suspensión</strong> (estado ACPI S3), el sistema entra en bajo consumo manteniendo energizada únicamente la memoria RAM volátil para reanudar en segundos. En la <strong>hibernación</strong> (estado ACPI S4), vuelca el contenido de la RAM a un fichero en el disco (<code>hiberfil.sys</code> en Windows) y apaga el equipo por completo sin riesgo de pérdida ante cortes eléctricos.
  </div>
</details>

---

### Pregunta 3
¿Qué comando permite reiniciar inmediatamente Windows desde la línea de comandos?

<details class="quiz-option incorrect">
  <summary>A) powercfg /h on</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Este comando habilita la función de hibernación en la configuración de energía de Windows, pero no reinicia el sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) shutdown /r /t 0</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modificador <code>/r</code> indica reinicio completo (<em>restart</em>) tras el apagado y <code>/t 0</code> establece un tiempo de espera de <strong>0 segundos</strong>, ejecutando el reinicio de forma inmediata.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) shutdown /s /t 0</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El parámetro <code>/s</code> ordena el <strong>apagado</strong> completo del equipo (<em>shutdown</em>), sin volver a arrancarlo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) shutdown /a</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El parámetro <code>/a</code> sirve para <strong>anular</strong> (<em>abort</em>) un apagado o reinicio que estuviera programado en cuenta atrás.
  </div>
</details>

---

### Pregunta 4
¿Qué sucede al seleccionar «Cambiar de usuario»?

<details class="quiz-option incorrect">
  <summary>A) Se cambia el nombre de la cuenta que está abierta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No modifica atributos ni credenciales de la cuenta activa; alterna entre perfiles distintos del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Otro usuario puede iniciar sesión sin cerrar necesariamente la sesión actual.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El cambio rápido de usuario (<em>Fast User Switching</em>) bloquea la pantalla de la sesión actual manteniendo sus procesos y ventanas abiertas en segundo plano en memoria RAM mientras otro usuario inicia su propio escritorio de forma independiente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Se eliminan los documentos del usuario actual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos personales y el entorno de trabajo de cada cuenta permanecen aislados e intactos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Se reinicia obligatoriamente el ordenador.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cambio de sesión ocurre en caliente sin interrumpir ni reiniciar el núcleo del sistema operativo.
  </div>
</details>

---

### Pregunta 5
¿Qué elementos forman el modelo WIMP de una interfaz gráfica?

<details class="quiz-option incorrect">
  <summary>A) Procesador, memoria, disco y red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a los subsistemas físicos fundamentales de la arquitectura hardware de un ordenador.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Ventanas, iconos, menús y puntero.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El acrónimo <strong>WIMP</strong> proviene del inglés <em>Windows, Icons, Menus, Pointer</em>, paradigma clásico de interacción visual en interfaces gráficas de usuario (GUI) popularizado por Xerox PARC, Apple Macintosh y Microsoft Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Terminal, comandos, scripts y directorios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son elementos característicos de una interfaz de línea de comandos (CLI), no del entorno gráfico WIMP.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Usuarios, contraseñas, archivos y permisos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Forman parte del modelo de seguridad, autenticación y control de acceso del sistema operativo.
  </div>
</details>

---

### Pregunta 6
¿Qué es el prompt de una interfaz de línea de comandos?

<details class="quiz-option incorrect">
  <summary>A) Un archivo que contiene los comandos ejecutados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El registro de órdenes anteriores se almacena en el historial del intérprete (como el archivo <code>~/.bash_history</code>).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El nombre del directorio raíz.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque el prompt suele mostrar el directorio de trabajo actual como referencia visual, su definición no es el nombre de la raíz.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) El texto que indica que el intérprete está preparado para recibir una orden.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El <strong>prompt</strong> (o símbolo del sistema, como <code>C:\Users\Luis&gt;</code> en CMD o <code>usuario@equipo:~$</code> en Bash) es la cadena de caracteres que muestra la terminal para señalar al usuario que el intérprete de comandos (<em>shell</em>) está libre y a la espera de recibir instrucciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un programa para instalar aplicaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Eso define a un gestor de paquetes (como <code>apt</code>, <code>dnf</code> o <code>winget</code>).
  </div>
</details>

---

### Pregunta 7
¿Cómo se representa el directorio raíz del árbol de directorios de Linux?

<details class="quiz-option incorrect">
  <summary>A) /home</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    <code>/home</code> es el subdirectorio destinado a alojar las carpetas personales de los usuarios estándar del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) C:\</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La asignación de letras de unidad seguidas de barra invertida es propia de sistemas MS-DOS y Windows, no de sistemas tipo UNIX/Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) /root/sistema</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    <code>/root</code> es el directorio personal del superusuario administrador (<em>root</em>), no la base jerárquica del sistema de archivos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) /</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el estándar FHS (<em>Filesystem Hierarchy Standard</em>) de GNU/Linux, todo el sistema de archivos parte de una única estructura jerárquica invertida cuyo origen absoluto se representa mediante la barra inclinada <strong><code>/</code></strong>.
  </div>
</details>

---

### Pregunta 8
¿Qué tipo de información se almacena principalmente en `/etc`?

<details class="quiz-option incorrect">
  <summary>A) Los documentos personales de todos los usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los archivos personales de cada cuenta residen dentro de <code>/home/&lt;usuario&gt;</code>.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Los archivos necesarios para comprimir carpetas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los binarios ejecutables de utilidades del sistema (como <code>tar</code>, <code>gzip</code> o <code>zip</code>) se ubican en <code>/bin</code> o <code>/usr/bin</code>.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Los archivos de configuración del sistema y de muchas aplicaciones</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El directorio <strong><code>/etc</code></strong> alberga los ficheros de configuración global del equipo y de los servicios instalados (como <code>/etc/passwd</code>, <code>/etc/fstab</code>, <code>/etc/hosts</code> o configuraciones de red y demonios), mayoritariamente en formato texto plano.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Las imágenes utilizadas como fondo de escritorio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los recursos multimedia estáticos compartidos por el entorno gráfico suelen guardarse en <code>/usr/share/backgrounds</code>.
  </div>
</details>

---

### Pregunta 9
¿Qué caracteriza a una ruta absoluta?

<details class="quiz-option correct">
  <summary>A) Indica la ubicación desde la raíz y no depende del directorio de trabajo actual.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una <strong>ruta absoluta</strong> especifica la trayectoria completa desde el directorio raíz del sistema de archivos (por ejemplo, <code>/var/log/syslog</code> en Linux o <code>C:\Windows\System32</code> en Windows), apuntando siempre al mismo recurso con independencia de dónde esté situado el usuario en ese momento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Solo contiene el nombre del archivo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Indicar únicamente el nombre del fichero es una <strong>ruta relativa</strong> respecto al directorio actual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Solo puede utilizarse en Windows</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Todos los sistemas operativos jerárquicos (Linux, macOS, Windows, BSD) emplean tanto rutas absolutas como relativas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Siempre comienza en el directorio donde está situado el usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta es la definición de una <strong>ruta relativa</strong> (que parte del directorio actual <code>.</code> o padre <code>..</code>).
  </div>
</details>

---

### Pregunta 10
¿Qué es una aplicación portable?

<details class="quiz-option correct">
  <summary>A) Una aplicación que puede ejecutarse sin realizar una instalación convencional.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una <strong>aplicación portable</strong> contiene todos sus ejecutables, bibliotecas dinámicas (DLL) y ficheros de configuración autocontenidos en una misma carpeta, permitiendo ejecutarla directamente desde una memoria USB o unidad externa sin escribir entradas en el Registro de Windows ni modificar directorios del sistema anfitrión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Una aplicación que debe instalarse en todas las cuentas del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Eso describe una instalación tradicional multiusuario (<em>All Users</em>) en el equipo local.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Una aplicación que solo funciona en portátiles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El término <em>portable</em> hace referencia a la portabilidad del software entre distintos equipos sin depender de instalación, no al factor de forma del ordenador.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una aplicación que solo funciona con conexión a Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Eso corresponde a una aplicación web o servicio SaaS en la nube.
  </div>
</details>
