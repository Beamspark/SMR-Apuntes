# Test de Autoevaluación: Tema 5

[← Volver al Tema 5: Administración de sistemas operativos libres y propietarios](../tema-5.md)

---

### Pregunta 1
En la administración de cuentas de un sistema operativo multiusuario, ¿cuál es la diferencia técnica fundamental entre los procesos de Autenticación y Autorización, y qué elemento almacena la configuración personalizada de un usuario?

<details class="quiz-option correct">
  <summary>A) La autenticación verifica la identidad del usuario (mediante contraseña, PIN o biometría) y la autorización determina los recursos y permisos a los que tiene acceso; las preferencias del usuario se guardan en su perfil de usuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La autenticación es la comprobación inicial de la identidad del usuario frente al sistema (credenciales como contraseña, huella o PIN). La autorización evalúa qué acciones y recursos concretos tiene permitido acceder o modificar dicho usuario ya identificado. El perfil de usuario es el contenedor y directorio personal (C:\Usuarios\nombre o /home/nombre) donde se almacenan sus preferencias, escritorio y documentos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La autenticación asigna las direcciones IP dinámicas y la autorización ejecuta el compilador del Kernel; las preferencias se guardan en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La asignación de direcciones IP es función del protocolo DHCP y no guarda relación con la partición ESP del firmware UEFI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La autenticación se ejecuta únicamente en modo núcleo y la autorización en el servicio cron; las preferencias se guardan en la memoria swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ni la autenticación/autorización se reparten entre Kernel y cron, ni las configuraciones de usuario se guardan en el espacio swap.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La autenticación es el borrado permanente con Shift + Supr y la autorización es la compresión en formato .tar.gz; las preferencias se guardan en hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla conceptos de borrado de archivos, compresión y el archivo de hibernación de Windows.
  </div>
</details>

---

### Pregunta 2
En el sistema operativo GNU/Linux Ubuntu, la cuenta de superusuario root posee privilegios ilimitados sobre todo el sistema. ¿Por qué razón técnica por defecto Ubuntu impide iniciar sesión gráfica directamente como root y qué mecanismo utiliza en su lugar?

<details class="quiz-option incorrect">
  <summary>A) Porque root no tiene acceso a la consola CLI; se utiliza el editor de registro regedit.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    root dispone de acceso total por consola y regedit es una herramienta exclusiva de Microsoft Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Por motivos de seguridad y prevención de errores catastróficos; en su lugar se utiliza la delegación de privilegios mediante el comando sudo, que solicita la contraseña del usuario estándar para ejecutar tareas administrativas concretas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Operar en una sesión gráfica continua como root eleva drásticamente el riesgo de accidentes irreversibles o brechas de seguridad por malware. Ubuntu bloquea el inicio de sesión directo de root y aplica el principio de mínimo privilegio a través de sudo (SuperUser DO), permitiendo a usuarios designados ejecutar órdenes de administración puntuales bajo autenticación y auditoría.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque la cuenta root solo funciona sobre discos formateados en FAT32; en su lugar se utiliza el comprobador sfc /scannow.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La cuenta root es independiente del sistema de archivos y sfc es una utilidad de reparación de Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque el Kernel monolítico desactiva las cuentas de superusuario en procesadores de 64 bits; se utiliza el comando apt clean.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los núcleos monolíticos admiten cuentas con privilegios completos en 64 bits y apt clean es un limpiador de paquetes.
  </div>
</details>

---

### Pregunta 3
Un administrador de red debe configurar los permisos de acceso a 50 carpetas del departamento de Contabilidad para 15 nuevos empleados. ¿Cuál es la estrategia de administración de grupos locales más eficiente y recomendada?

<details class="quiz-option incorrect">
  <summary>A) Asignar individualmente los permisos de cada una de las 50 carpetas usuario por usuario para las 15 cuentas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Exigiría realizar 750 asignaciones manuales, resultando ineficiente y muy propenso a inconsistencias.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Convertir a los 15 empleados en superusuarios root para omitir la configuración de permisos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Vulnera por completo el principio de mínimo privilegio y expone la seguridad del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Crear un grupo local (ej. Grp_Contabilidad), incluir a las 15 cuentas de usuario en dicho grupo y asignar los permisos de las carpetas directamente al grupo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La práctica recomendada en administración de sistemas consiste en asignar los permisos a grupos de seguridad y gestionar el acceso añadiendo o retirando usuarios de dichos grupos. Esto centraliza el control y simplifica el mantenimiento futuro de permisos departamentales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Modificar el archivo hiberfil.sys para que la memoria Caché L1 comparta las carpetas por la red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    hiberfil.sys gestiona la hibernación y la caché L1 es memoria interna volátil del microprocesador.
  </div>
</details>

---

### Pregunta 4
En el sistema operativo Microsoft Windows, ¿qué consola de administración avanzada en modo gráfico permite gestionar de forma centralizada las cuentas de usuarios locales, cambiar contraseñas y configurar la pertenencia a grupos locales?

<details class="quiz-option incorrect">
  <summary>A) La consola de servicios services.msc.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    services.msc se utiliza para iniciar, pausar o configurar servicios en segundo plano.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El editor del registro regedit.exe.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    regedit permite manipular la base de datos de configuración del sistema, no la administración gráfica de cuentas locales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El visor de eventos eventvwr.msc.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    eventvwr.msc se emplea para inspeccionar los registros de sucesos y eventos del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) La consola de Usuarios y grupos locales incluida en la Administración de equipos (lusrmgr.msc).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    lusrmgr.msc (Local Users and Groups) es el complemento MMC diseñado específicamente para crear cuentas locales, configurar directivas de contraseñas, habilitar/deshabilitar usuarios y organizar las membresías en grupos locales de Windows.
  </div>
</details>

---

### Pregunta 5
Un usuario intenta modificar y guardar cambios en un documento de texto guardado en su disco, pero el sistema le muestra un mensaje de error indicando que no se pueden guardar las modificaciones. Al revisar las propiedades del archivo, ¿qué atributo de archivo está activado?

<details class="quiz-option correct">
  <summary>A) Solo lectura (Read-only).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El atributo Solo lectura (Read-only) marca el archivo para que su contenido pueda consultarse pero no alterarse ni sobrescribirse. Debe desmarcarse en las propiedades del elemento para poder guardar cambios en él.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Oculto (Hidden).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El atributo Oculto no muestra el archivo en las vistas estándar del explorador, pero no bloquea su modificación si se abre.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Comprimido con pérdida (Lossy).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una técnica de compresión para ficheros multimedia, no un atributo del sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ejecutable en modo núcleo (Kernel Mode).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los documentos de texto no se ejecutan como código en el espacio privilegiado del Kernel.
  </div>
</details>

---

### Pregunta 6
Un técnico de soporte necesita eliminar de forma inmediata un archivo confidencial de gran tamaño almacenado en el disco duro de Windows sin que pase por la Papelera de reciclaje y sin posibilidad de restauración convencional. ¿Qué combinación de teclas debe utilizar?

<details class="quiz-option incorrect">
  <summary>A) Ctrl + Alt + Supr</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Abre la pantalla de seguridad de Windows con opciones de bloqueo, cambio de usuario y administrador de tareas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Shift + Supr (o Mayús + Supr)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La combinación Shift + Supr elude el envío del archivo a la Papelera de reciclaje, borrando su puntero en el índice de la tabla de archivos y liberando de inmediato el espacio de sus clusters en la unidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Win + L</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Bloquea la sesión de usuario activa en Windows.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Alt + F4</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Cierra la aplicación o ventana activa en primer plano.
  </div>
</details>

---

### Pregunta 7
En la arquitectura y administración de un sistema operativo, ¿cuál es la relación técnica y la distinción conceptual entre un Proceso y un Servicio (o Demonio)?

<details class="quiz-option incorrect">
  <summary>A) Un servicio es una aplicación con interfaz WIMP interactiva y un proceso es un script que corre en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los servicios se distinguen precisamente por ejecutarse en segundo plano sin interfaces gráficas interactivas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Los procesos se ejecutan exclusivamente a 16 bits y los servicios son algoritmos no expulsivos de la ALU.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde conceptos de ejecución de tareas con microcódigo de 16 bits de la ALU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Un proceso es cualquier programa en ejecución en la RAM; un servicio es un tipo especial de proceso diseñado para ejecutarse permanentemente en segundo plano (background) prestando soporte al SO sin interfaz gráfica directa. Por tanto: "Todos los servicios son procesos, pero no todos los procesos son servicios".</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cualquier programa cargado en RAM con tiempo de CPU es un proceso. Los servicios (o demonios) son procesos de sistema especializados que trabajan de forma desatendida en background, ofreciendo funciones continuas de red, seguridad, impresión o gestión sin requerir sesión gráfica interactiva.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Un servicio es una cuenta de usuario con privilegios de root y un proceso es un comando de compresión .tar.gz.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ni los servicios son cuentas de usuario ni los procesos son utilidades de archivado.
  </div>
</details>

---

### Pregunta 8
Al configurar un servicio en el sistema operativo Windows mediante la consola de administración, ¿qué modo de inicio se debe seleccionar para asegurar que el servicio se arranque de forma autónoma con el sistema, pero retrasando su carga unos segundos para reducir la saturación de la CPU durante el inicio de sesión?

<details class="quiz-option incorrect">
  <summary>A) Manual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Manual no arranca el servicio por sí solo; espera a que un usuario u otra aplicación lo solicite.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Deshabilitado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Impide por completo la inicialización del servicio bajo cualquier circunstancia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Automático.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modo Automático estándar inicializa el servicio de inmediato en la fase de carga del SO, sumando carga a la CPU.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Automático (inicio retrasado).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modo Automático (inicio retrasado) posterga el encendido del servicio hasta que los componentes básicos del sistema operativo han finalizado su carga, suavizando picos de concurrencia sobre la CPU y el disco.
  </div>
</details>

---

### Pregunta 9
En el entorno de administración de Windows PowerShell, un técnico necesita comprobar el estado de ejecución del servicio de cola de impresión (Spooler) y posteriormente detenerlo mediante cmdlets de comandos. ¿Cuáles son los comandos de PowerShell adecuados?

<details class="quiz-option correct">
  <summary>A) Consulta: Get-Service Spooler | Detención: Stop-Service Spooler</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    PowerShell emplea la estructura verbo-sustantivo: Get-Service permite inspeccionar el estado actual de uno o más servicios, y Stop-Service envía la señal de detención al servicio especificado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Consulta: sfc /scannow | Detención: systeminfo /stop</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc repara archivos de sistema y systeminfo muestra especificaciones técnicas del equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Consulta: systemctl status Spooler | Detención: sudo systemctl stop Spooler</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    systemctl es la herramienta de control de servicios nativa de distribuciones Linux con systemd, no de PowerShell.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Consulta: crontab -l Spooler | Detención: powercfg /off</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab gestiona tareas programadas en entornos Linux y powercfg administra la energía en Windows.
  </div>
</details>

---

### Pregunta 10
En la distribución Ubuntu Linux, el sistema de inicialización moderno systemd administra los servicios (demonios) del sistema. ¿Qué comando de consola permite verificar si el servicio de impresión cups está activo y funcionando correctamente?

<details class="quiz-option incorrect">
  <summary>A) services.msc cups</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    services.msc es una consola gráfica propia de Windows.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) systemctl status cups</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando systemctl status cups reporta si el demonio está activo (running), su identificador de proceso (PID), uso de recursos y las líneas de log más recientes registradas por journald.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Get-Service cups</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Get-Service es un cmdlet exclusivo de Windows PowerShell.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) lsb_release -a cups</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    lsb_release muestra la versión y datos de distribución del sistema Linux, no el estado de demonios.
  </div>
</details>

---

### Pregunta 11
El servidor web Apache (apache2) en un equipo Ubuntu no responde a las peticiones del navegador tras editar su archivo de configuración. El administrador realiza los cambios necesarios en la configuración y desea que el servicio vuelva a cargar sus parámetros inmediatamente sin necesidad de reiniciar todo el servidor físico. ¿Qué comando debe ejecutar con privilegios elevados?

<details class="quiz-option incorrect">
  <summary>A) sudo reboot -f</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fuerza el reinicio completo de la máquina física, desconectando el resto de servicios activos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow apache2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Herramienta exclusiva de Microsoft Windows para comprobar ficheros protegidos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) sudo systemctl restart apache2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    sudo systemctl restart apache2 detiene el proceso y lo vuelve a lanzar inmediatamente, permitiendo recargar configuraciones y restablecer el demonio sin afectar a otros servicios del servidor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) crontab -e apache2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    crontab -e edita la tabla de tareas automatizadas del usuario, no reinicia demonios en ejecución.
  </div>
</details>

---

### Pregunta 12
Un administrador de Windows detecta que un software malicioso o una aplicación secundaria intenta activar continuamente un servicio no deseado en segundo plano. Desea bloquear completamente la ejecución de dicho servicio para que no pueda ser iniciado bajo ninguna circunstancia, ni manualmente ni por otras aplicaciones. ¿Qué modo de inicio debe asignarle en services.msc?

<details class="quiz-option incorrect">
  <summary>A) Automático (inicio retrasado).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Inicia el servicio por sí solo tras estabilizarse la carga de arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Manual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Permite que aplicaciones dependientes o procesos secundarios levanten el servicio cuando lo soliciten.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Automático.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Carga el servicio durante el inicio ordinario del equipo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Deshabilitado (Disabled).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El estado Deshabilitado bloquea la llamada al servicio por completo: el sistema impide su ejecución tanto si se intenta arrancar a mano como si lo invoca una aplicación o script dependiente.
  </div>
</details>

---

### Pregunta 13
En la administración de un sistema Linux Ubuntu, un usuario perteneciente al grupo de administradores (sudoers) necesita iniciar el servicio de red networking. ¿Qué ocurre si ejecuta directamente la orden systemctl start networking sin anteceder la palabra sudo?

<details class="quiz-option incorrect">
  <summary>A) El sistema operativo formatea el disco duro automáticamente en sistema de archivos APFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un error de privilegios nunca causa el formateo de una unidad de almacenamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El servicio se inicia en modo seguro de 16 bits sin consumir memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No existe tal modalidad de ejecución en el subsistema de servicios de Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El comando se ejecuta con privilegios de Kernel sustituyendo el gestor de arranque GRUB.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La falta de privilegios detiene la ejecución; no altera GRUB ni eleva accesos de Kernel automáticamente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El sistema deniega la operación mostrando un error de "Permiso denegado" (Access denied), ya que la gestión de servicios altera el sistema y requiere privilegios de superusuario que deben elevarse con sudo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La gestión de servicios con systemctl modifica configuraciones y recursos de bajo nivel del sistema operativo. Al invocarse desde una cuenta no privilegiada sin sudo, las llamadas al sistema son rechazadas por falta de permisos administrativos.
  </div>
</details>

---

### Pregunta 14
En el sistema operativo Microsoft Windows, un administrador necesita examinar los registros de auditoría de inicio de sesión, los errores del sistema y las advertencias de controladores de dispositivos. ¿Qué consola de administración nativa debe abrir y qué registro almacena las auditorías de seguridad?

<details class="quiz-option correct">
  <summary>A) La herramienta Visor de eventos (eventvwr.msc); las auditorías de inicio de sesión se almacenan en el registro de Seguridad.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    eventvwr.msc centraliza los registros de eventos de Windows. Su registro de Seguridad almacena eventos auditados como intentos de inicio y cierre de sesión, modificaciones en privilegios y accesos a recursos protegidos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La herramienta Editor del Registro (regedit.exe); las auditorías se almacenan en la clave HKLM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    regedit gestiona parámetros de configuración en el registro, no la visualización de logs de eventos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La consola de servicios (services.msc); las auditorías se almacenan en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    services.msc supervisa demonios y hiberfil.sys guarda el volcado de memoria de hibernación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El comprobador de archivos (sfc.exe); las auditorías se almacenan en la carpeta /var/log.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc escanea la integridad de archivos y /var/log pertenece a la estructura de directorios de Linux.
  </div>
</details>

---

### Pregunta 15
Un administrador de un servidor Ubuntu Linux detecta un comportamiento anómalo en la red y desea auditar las autenticaciones de usuarios, accesos por SSH y los comandos ejecutados mediante sudo. ¿En qué archivo de la carpeta de registros /var/log/ se almacenan estos eventos?

<details class="quiz-option incorrect">
  <summary>A) /var/log/boot.log</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    boot.log registra los mensajes emitidos durante la secuencia de arranque del equipo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) /var/log/auth.log</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En distribuciones Debian/Ubuntu, /var/log/auth.log centraliza los registros de autenticación y autorización: accesos SSH, elevaciones mediante sudo, sesiones PAM y fallos en introducción de contraseñas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) /var/log/dpkg.log</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    dpkg.log registra operaciones del gestor de paquetes de instalación de software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /var/log/cups/error_log</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Contiene registros de errores asociados al servidor de impresión CUPS.
  </div>
</details>

---

### Pregunta 16
En el mantenimiento y optimización de unidades de almacenamiento secundario, ¿por qué razón técnica está estrictamente PROHIBIDO desfragmentar un disco de estado sólido (SSD) y qué tecnología se utiliza en su lugar?

<details class="quiz-option incorrect">
  <summary>A) Porque la desfragmentación convierte el formato GPT en MBR; en su lugar se utiliza el comando chkdsk /f.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La desfragmentación no modifica el esquema de particionado de la unidad.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Porque los SSD solo pueden funcionar con el sistema de archivos FAT32; en su lugar se utiliza el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los SSD operan con sistemas de archivos avanzados como NTFS, ext4 o APFS sin restricción a FAT32.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Porque los SSD tienen un tiempo de acceso aleatorio casi instantáneo (no sufren la penalización mecánica del HDD) y realizar desfragmentaciones genera escrituras masivas innecesarias que degradan y acortan la vida útil de los chips de memoria NAND Flash; en su lugar se utiliza el comando TRIM.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los SSD carecen de cabezales móviles y acceden a cualquier celda con latencias mínimas. Desfragmentarlos somete a las celdas NAND Flash a ciclos de escritura masivos que agotan prematuramente su vida útil. En su lugar se emplea TRIM, que indica al controlador SSD qué bloques han sido eliminados por el sistema de archivos para prepararlos de forma electrónica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque la desfragmentación borra la partición ESP del firmware UEFI; en su lugar se utiliza el comando sudo apt clean.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No suprime la partición ESP de arranque ni apt clean sustituye la optimización de almacenamiento.
  </div>
</details>

---

### Pregunta 17
Un técnico necesita comprobar la integridad de la estructura lógica del sistema de archivos NTFS en la unidad C: de un equipo Windows y reparar sectores defectuosos en el disco físico. ¿Qué herramienta de consola de comandos debe ejecutar?

<details class="quiz-option incorrect">
  <summary>A) cleanmgr.exe</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    cleanmgr es el liberador de espacio en disco para suprimir temporales y archivos no requeridos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) sfc /scannow</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc examina y repara archivos de sistema dañados, no la integridad de bloques y sectores físicos del disco.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) resmon.exe</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    resmon es el Monitor de recursos para inspeccionar CPU, red y memoria en tiempo real.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) chkdsk C: /f /r</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando chkdsk C: con el parámetro /f repara inconsistencias lógicas en las estructuras del sistema de archivos, y con /r localiza sectores físicos defectuosos, intenta recuperar información legible y marca el sector para que no se use.
  </div>
</details>

---

### Pregunta 18
Al compartir una carpeta en la red local desde un equipo con Windows 11 sobre una partición formateada en NTFS, existen dos capas independientes de control de acceso: los Permisos de Recurso Compartido (red) y los Permisos de Seguridad NTFS (locales). ¿Qué regla rige la combinación de ambos permisos cuando un usuario accede a la carpeta a través de la red?

<details class="quiz-option correct">
  <summary>A) Prevalece siempre el permiso más restrictivo de la combinación entre los permisos de red y los permisos NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Cuando se combinan permisos de recurso compartido y permisos locales NTFS en un acceso remoto, el sistema operativo calcula la intersección más restrictiva. Por ejemplo, si en la pestaña Compartir se otorga Control total pero en la pestaña Seguridad NTFS solo se permite Lectura, el usuario solo tendrá permisos efectivos de lectura.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Prevalece siempre el permiso de red, ignorando por completo los permisos de seguridad NTFS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los permisos NTFS locales siempre se comprueban y nunca se anulan por los de recurso compartido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Prevalecen los permisos del archivo hiberfil.sys guardado en la partición ESP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El archivo de hibernación no forma parte de la jerarquía de permisos de red ni del sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Prevalece el permiso más permisivo, otorgando siempre Control total al usuario autenticado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aplicar el permiso más permisivo comprometería la seguridad local definida en el sistema de archivos.
  </div>
</details>

---

### Pregunta 19
Un usuario en un equipo Windows necesita acceder por red a una carpeta compartida llamada Documentos ubicada en un servidor de archivos cuyo nombre de red es SERVIDOR01. ¿Cuál es la sintaxis de notación UNC (Universal Naming Convention) estándar que debe introducir en el explorador de archivos?

<details class="quiz-option incorrect">
  <summary>A) C:\SERVIDOR01\Documentos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El prefijo C:\ designa una unidad local de disco del equipo propio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) \\SERVIDOR01\Documentos</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La notación UNC (Universal Naming Convention) en redes Windows utiliza la sintaxis \\NombreServidor_o_IP\NombreRecurso para localizar e interactuar con carpetas o impresoras compartidas en la red local.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) http://SERVIDOR01/Documentos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una URL para navegación sobre protocolo web HTTP, no una ruta UNC para el explorador de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /dev/SERVIDOR01/Documentos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /dev es el directorio que contiene nodos de dispositivos físicos en el árbol de Linux.
  </div>
</details>

---

### Pregunta 20
En el sistema operativo Microsoft Windows, ¿qué es el Registro de Windows (regedit.exe) y cuál es su función dentro de la arquitectura del sistema?

<details class="quiz-option incorrect">
  <summary>A) Es una carpeta de texto plano en /var/log que almacena las tareas programadas del servicio cron.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /var/log y cron pertenecen a la arquitectura de sistemas tipo Unix/Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es una utilidad de línea de comandos para formatear discos duros en sistema de archivos ext4.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es una herramienta para dar formato a discos en ext4.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Es una base de datos jerárquica centralizada donde el sistema operativo almacena todas las configuraciones del hardware, controladores, opciones del sistema, preferencias de usuario y aplicaciones instaladas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Registro de Windows es el repositorio central binario estructurado en ramas, claves y valores que contiene la configuración integral del hardware, componentes del Kernel, servicios, software instalado y perfiles de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un compilador de firmware UEFI de 16 bits que sustituye a la memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un compilador de firmware ni sustituye a la memoria principal del equipo.
  </div>
</details>

---

### Pregunta 21
El Registro de Windows se organiza lógicamente en cinco ramas principales de primer nivel (denominadas HKEY o colmenas). Si un técnico desea modificar una configuración global que afecte a todos los usuarios del equipo y al hardware del sistema operativo, ¿en qué rama debe aplicar los cambios?

<details class="quiz-option incorrect">
  <summary>A) HKEY_CURRENT_USER (HKCU)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCU contiene únicamente las preferencias del usuario que ha iniciado la sesión actual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) HKEY_CLASSES_ROOT (HKCR)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCR gestiona las asociaciones de extensiones de archivo y componentes COM.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) HKEY_CURRENT_CONFIG (HKCC)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    HKCC almacena la información relativa al perfil de hardware activo detectado durante el inicio.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) HKEY_LOCAL_MACHINE (HKLM)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    HKEY_LOCAL_MACHINE (HKLM) alberga los parámetros globales del equipo físico: controladores instalados, configuración de red, directivas del sistema y software disponible para cualquier cuenta que inicie sesión en la máquina.
  </div>
</details>

---

### Pregunta 22
Dentro del Registro de Windows (regedit), ¿cuál es la función de las ramas HKEY_CLASSES_ROOT (HKCR) y HKEY_CURRENT_CONFIG (HKCC) respectivamente?

<details class="quiz-option correct">
  <summary>A) HKCR almacena las asociaciones de extensiones de archivos y controladores OLE; HKCC almacena la información sobre el perfil de hardware actual activo en el sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    HKCR define cómo responde el sistema operativo ante cada extensión de archivo (qué programa la ejecuta e iconos asociados) y registros COM/OLE. HKCC es un alias dinámico que apunta a la configuración del perfil de hardware actual recopilado en el arranque.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) HKCR almacena las contraseñas de red de sudo; HKCC borra las carpetas temporales de /tmp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sudo y la carpeta /tmp son conceptos propios del entorno GNU/Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) HKCR gestiona las tareas del servicio cron; HKCC compila los controladores en el archivo hiberfil.sys.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    cron no pertenece al registro de Windows y HKCC no realiza compilaciones sobre hiberfil.sys.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) HKCR configura las cuentas de usuario local; HKCC es el cargador de arranque MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cuentas locales se gestionan mediante SAM/HKLM y HKCC no interviene como cargador MBR.
  </div>
</details>

---

### Pregunta 23
A diferencia de Microsoft Windows (que utiliza la base de datos binaria del Registro), ¿cómo gestiona GNU/Linux (Ubuntu) la configuración del sistema operativo y de sus servicios, y en qué directorio principal se ubican dichos archivos?

<details class="quiz-option incorrect">
  <summary>A) Mediante una base de datos binaria única ubicada en /boot/kernel.reg.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Linux no emplea una base de datos centralizada de tipo registro en la carpeta /boot.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Mediante multitud de archivos de texto plano independientes ubicados en el directorio /etc/, editables con cualquier editor de texto (como nano o vim).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La arquitectura de configuración en Linux se apoya en el principio de que los parámetros se gestionan mediante ficheros de texto estructurado en el directorio /etc/. Esto facilita su edición directa por terminal, su versionado y su auditoría sin necesidad de motores de bases de datos propietarios.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Mediante comandos de la consola services.msc guardados en la memoria swap.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    services.msc es una herramienta de Windows y la memoria swap no almacena ficheros de configuración.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Mediante la compilación del firmware UEFI en la partición MBR.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La configuración del sistema no requiere compilar código en firmwares ni tablas de particiones.
  </div>
</details>

---

### Pregunta 24
Un administrador necesita cambiar el nombre del equipo en un servidor Ubuntu y añadir una entrada fija de resolución local de nombres e IPs para no depender del servidor DNS. ¿Qué dos archivos del directorio /etc/ debe editar respectivamente?

<details class="quiz-option incorrect">
  <summary>A) /etc/boot y /etc/swap</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No son archivos de configuración de nombres ni de resolución de red en Linux.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) /etc/systemd y /etc/apt</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /etc/systemd configura el gestor de inicio y /etc/apt los orígenes de paquetes del sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) /etc/hostname (para el nombre del equipo) y /etc/hosts (para la resolución local de nombres e IPs).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Linux, /etc/hostname almacena la cadena que identifica al host en la red. El archivo /etc/hosts define correspondencias estáticas entre direcciones IP y nombres de dominio o equipo, resolviéndose con prioridad antes de consultar servidores DNS externos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) /etc/fstab y /etc/crontab</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    /etc/fstab define los montajes de discos y /etc/crontab las tareas programadas de cron.
  </div>
</details>

---

### Pregunta 25
Para finalizar la auditoría de un sistema dual en una estación de trabajo, el técnico necesita resumir las herramientas de diagnóstico clave de ambos entornos. Indique la pareja de comandos/herramientas CORRECTA para consultar los datos generales de hardware/software en Windows y Linux respectivamente:

<details class="quiz-option incorrect">
  <summary>A) Windows: sfc /scannow | Linux: crontab -r</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    sfc repara archivos protegidos y crontab -r suprime la tabla de tareas cron del usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Windows: cleanmgr | Linux: apt clean</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas herramientas liberan espacio en disco borrando temporales o cachés, no muestran resúmenes del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Windows: regedit /format | Linux: sudo reboot</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Parámetro inexistente para regedit y comando de reinicio inmediato en Linux.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Windows: systeminfo (o msinfo32) | Linux: lsb_release -a (o uname -a)</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En Windows, systeminfo por consola (o msinfo32 en entorno gráfico) presenta un informe completo del hardware, compilación y parches. En Linux, lsb_release -a muestra los datos de la distribución y versión, mientras que uname -a detalla la versión del Kernel y la arquitectura de la máquina.
  </div>
</details>
