# :material-shield-account: Tema 5 — Administración de Sistemas Operativos Libres y Propietarios

<h2 style="color: #29b6f6;">5.1. Gestión de Usuarios y Grupos Locales</h2>

Los sistemas operativos actuales son entornos multiusuario que permiten a varias personas compartir un mismo ordenador manteniendo sus archivos, aplicaciones e interfaces completamente aisladas e independientes.

---

### Conceptos Fundamentales

* **Usuario:** Persona identificada mediante una cuenta de usuario única que le otorga acceso al sistema informático.
* **Autenticación vs. Autorización:**
  * **Autenticación:** Proceso de verificación de la identidad del usuario (mediante contraseña, PIN, huella o rostro).
  * **Autorización:** Determinación de las acciones y recursos a los que puede acceder el usuario una vez verificada su identidad.
* **Perfil de usuario:** Conjunto de configuraciones, preferencias visuales, documentos personales, marcadores e historial asociados exclusivamente a una cuenta de usuario. La primera vez que un usuario inicia sesión, el sistema operativo crea automáticamente su perfil personal.
* **Directorio personal:** Carpeta reservada en el disco para almacenar los documentos privados de cada usuario (`C:\Usuarios\nombre_usuario` en Windows o `/home/nombre_usuario` en Linux).

---

### Tipos de Cuentas de Usuario

* **Usuario Estándar:** Cuenta recomendada para el uso cotidiano. Permite ejecutar aplicaciones instaladas, modificar opciones personales y gestionar sus propios archivos, pero no puede instalar programas globales ni alterar la configuración del sistema.
* **Usuario Administrador:** Cuenta con permisos elevados que permite realizar tareas globales como instalar o desinstalar software, gestionar otras cuentas de usuario, configurar dispositivos e interfaces de red.
* **Cuenta Root (Superusuario en Linux):** Cuenta de control absoluto en sistemas GNU/Linux con privilegios ilimitados. Por motivos de seguridad, distribuciones como Ubuntu impiden iniciar sesión gráfica directamente como `root`; en su lugar, se utiliza el comando `sudo`, que concede temporalmente permisos de superusuario para ejecutar una tarea administrativa concreta tras reintroducir la contraseña.

---

### Grupos Locales

Un grupo es una agrupación lógica de cuentas de usuario que comparten las mismas necesidades de acceso y permisos sobre los recursos.

!!! tip "Ventaja administrativa"
    En lugar de asignar permisos archivo por archivo a cada usuario individualmente, el administrador concede los permisos al grupo entero y añade o elimina cuentas dentro de dicho grupo, simplificando enormemente la gestión masiva.

#### Herramientas de Gestión de Usuarios

* **En Windows:**
  * **Interfaz gráfica simplificada:** **Configuración $\rightarrow$ Cuentas $\rightarrow$ Familia y otros usuarios**. Al crear un usuario local se debe elegir la opción *"No tengo la información de inicio de sesión de esta persona"* y *"Agregar un usuario sin cuenta de Microsoft"*.
  * **Consola avanzada:** Administración de equipos (`lusrmgr.msc`).
* **En Ubuntu:**
  * **Interfaz gráfica:** **Configuración $\rightarrow$ Sistema $\rightarrow$ Usuarios** *(requiere pulsar el botón "Desbloquear..." e introducir la contraseña de administrador)*.

---

<h2 style="color: #29b6f6;">5.2. Gestión del Sistema de Archivos</h2>

Una administración estructurada del almacenamiento garantiza que los datos permanezcan organizados, seguros y accesibles para los usuarios autorizados.

### Propiedades de Archivos y Directorios

Cada elemento guardado en el disco almacena metadatos administrativos esenciales: nombre, extensión, tamaño real, espacio ocupado en bloque de disco, ruta de ubicación, fecha de creación, fecha de última modificación, propietario del archivo y permisos de acceso.

### Atributos de Archivo

Módulos de configuración que modifican el comportamiento básico del fichero:

* **Solo lectura (*Read-only*):** Impide que los usuarios puedan guardar cambios o modificar el contenido del archivo.
* **Oculto (*Hidden*):** Evita que el archivo aparezca visibilizado en la vista estándar del explorador de archivos o del gestor gráfico.

### Eliminación y Recuperación

* **Borrado temporal:** Al eliminar un archivo con la tecla <kbd>Supr</kbd> o desde el menú contextual, el archivo no se borra físicamente; se traslada a la **Papelera de reciclaje** (Windows) o **Papelera** (Ubuntu), permitiendo su restauración a la ubicación original.
* **Borrado permanente:** Al vaciar la papelera o al eliminar un archivo utilizando la combinación de teclas <kbd>Shift</kbd> + <kbd>Supr</kbd>, el sistema operativo elimina la referencia del índice y marca sus bloques físicos como libres, haciendo imposible recuperar el archivo de forma convencional.

---

<h2 style="color: #29b6f6;">5.3. Administración de Servicios</h2>

Un servicio (o demonio en sistemas Unix/Linux) es un programa especial que se ejecuta en segundo plano (*background*) para proporcionar funcionalidades esenciales al sistema operativo o a las aplicaciones, operando generalmente sin interfaz gráfica ni intervención del usuario.

### Diferencia Técnica entre Proceso y Servicio

* **Proceso:** Cualquier programa en ejecución activa en la memoria RAM (aplicaciones de usuario o tareas internas).
* **Servicio:** Un tipo específico de proceso diseñado para ejecutarse de forma permanente en segundo plano proporcionando soporte continuo al sistema (por ejemplo, servicios de impresión, actualización, red o reloj).

> **Regla fundamental:** Todos los servicios son procesos, pero no todos los procesos son servicios.

### Estados y Modos de Inicio de un Servicio

* **Estados de un servicio:** En ejecución (*Running*), Detenido (*Stopped*), Pausado (*Paused*).
* **Tipos / Modos de inicio:**
  * **Automático:** Se inicia de forma autónoma durante el arranque del sistema operativo.
  * **Automático (inicio retrasado):** Se arranca unos segundos después de completar el inicio para reducir la sobrecarga de la CPU.
  * **Manual:** Permanece detenido hasta que el usuario o una aplicación lo solicita explícitamente.
  * **Deshabilitado:** Se bloquea su ejecución; no puede iniciarse bajo ninguna circunstancia hasta ser rehabilitado.
* **Dependencias:** Relación jerárquica por la cual un servicio requiere que otros servicios previos estén activos en memoria para poder funcionar.

---

### 5.3.1. Administración de Servicios en Windows

* **Consola gráfica:** Se accede mediante el comando `services.msc` desde la ventana Ejecutar (<kbd>Win</kbd> + <kbd>R</kbd>). Permite consultar, iniciar, detener, pausar o cambiar el tipo de inicio de servicios clave (como la *Cola de impresión* / *Spooler*).
* **Administración por PowerShell:**
  * **Consultar todos los servicios:** `Get-Service`
  * **Consultar un servicio específico:** `Get-Service Spooler`
  * **Detener un servicio:** `Stop-Service Spooler`
  * **Iniciar un servicio:** `Start-Service Spooler`

---

### 5.3.2. Administración de Servicios en Ubuntu

En distribuciones Linux modernas como Ubuntu, la gestión de servicios se realiza mediante el sistema de inicialización `systemd` utilizando el comando `systemctl` en la terminal:

* **Consultar estado:** `systemctl status nombre_servicio` *(ejemplo: `systemctl status cups` para la gestión de impresoras)*.
* **Detener un servicio:** `sudo systemctl stop cups`
* **Iniciar un servicio:** `sudo systemctl start cups`
* **Reiniciar un servicio:** `sudo systemctl restart cups`

!!! info "Ventaja de reiniciar un servicio"
    Permite resolver incidencias, bloqueos o reaplicar configuraciones en un servicio concreto de forma inmediata sin necesidad de reiniciar todo el sistema operativo.

---

<h2 style="color: #29b6f6;">5.4. Seguimiento y Análisis de la Actividad del Sistema</h2>

Permite a los administradores supervisar el estado de salud del hardware y del software, analizar el rendimiento global y diagnosticar las causas de fallos o ralentizaciones.

### Indicadores de Rendimiento del Hardware

* **Procesador (CPU):** Porcentaje global de ocupación de núcleos y velocidad de reloj.
* **Memoria RAM:** Uso de memoria física activa frente a la memoria de intercambio (*swap*) utilizada.
* **Dispositivos de almacenamiento:** Tasa de lectura/escritura (MB/s) y tiempo de respuesta del disco.
* **Red:** Tráfico enviado y recibido a través de las interfaces de red.
* **Procesador gráfico (GPU):** Carga de renderizado y uso de memoria de vídeo dedicada (VRAM).

### Registros del Sistema (Logs) y Eventos

* **Eventos del sistema:** Acciones o sucesos significativos registrados por el SO (inicio/apagado del equipo, arranque de servicios, instalaciones, errores de hardware o advertencias).
* **Archivos de Registro (*Logs*):** Ficheros especiales en los que el SO guarda un historial cronológico de todas las incidencias. En Windows se consultan mediante el **Visor de eventos** (`eventvwr.msc`), mientras que en Linux se almacenan en el directorio `/var/log`.

---

<h2 style="color: #29b6f6;">5.5. Optimización de los Dispositivos de Almacenamiento</h2>

Conjunto de tareas preventivas periódicas diseñadas para liberar espacio, corregir errores del sistema de archivos y prolongar la vida útil de los discos.

### Tareas de Mantenimiento

* **Liberación de espacio:** Eliminación periódica de archivos temporales, cachés de aplicaciones, archivos de registro antiguos, instaladores descargados y vaciado de la papelera de reciclaje.
* **Comprobación de errores:** Análisis de la integridad lógica de la tabla de archivos para corregir inconsistencias o sectores defectuosos tras un apagado inesperado.

### Optimización Según la Tecnología de la Unidad Física

```text
                      OPTIMIZACIÓN DE DISCOS
                                |
          +---------------------+---------------------+
          |                                           |
  Discos Mecánicos (HDD)                    Unidades de Estado Sólido (SSD)
          |                                           |
  DESFRAGMENTACIÓN                          Comando TRIM
  (Agrupa bloques contiguos)                (Limpia bloques invalidados)
                                            * ¡NUNCA desfragmentar un SSD!
```

* **Discos Duros Mecánicos (HDD):**
  * **Técnica:** Desfragmentación. Reorganiza los bloques de datos dispersos de un mismo archivo para almacenarlos de forma contigua en los sectores del disco. Esto reduce los desplazamientos del cabezal magnético y mejora la velocidad de lectura.
* **Unidades de Estado Sólido (SSD):**
  * **Técnica:** Comando TRIM. Notifica a la unidad de memoria flash qué bloques de datos han sido eliminados por el sistema de archivos para que la controladora los limpie internamente en segundo plano.

!!! warning "Regla técnica fundamental"
    Los sistemas operativos **NUNCA** realizan una desfragmentación tradicional sobre un SSD, ya que no acelera su rendimiento al carecer de partes mecánicas y acelera de forma innecesaria el desgaste de sus celdas de memoria.

---

<h2 style="color: #29b6f6;">5.6. Compartición de Recursos</h2>

Permite poner elementos locales (carpetas, documentos o impresoras) a disposición de otros equipos conectados a la misma red local (LAN), fomentando el trabajo colaborativo.

### Niveles de Permisos de Red

* **Solo lectura:** Permite a los usuarios de la red abrir, visualizar y copiar los archivos, pero impide editarlos, modificarlos o borrarlos.
* **Lectura y escritura:** Permite visualizar, crear, modificar y eliminar archivos dentro del recurso compartido.
* **Control total:** Otorga permisos absolutos sobre el recurso, incluyendo la modificación de los propios permisos de red.

---

<h2 style="color: #29b6f6;">5.7. Información de Configuración del Sistema</h2>

Lugar y estructura lógica donde el sistema operativo guarda los parámetros de configuración global del equipo, controladores hardware, perfiles de usuario y opciones de las aplicaciones.

### Comparativa entre Windows y Linux

```text
                         Estructuras de Configuración
                                       |
          +----------------------------+----------------------------+
          |                                                         |
    WINDOWS: Registro de Windows                            LINUX: Archivos de Texto
    (Base de datos jerárquica - regedit)                   (Ficheros planos en /etc)
```

#### En Windows: El Registro de Windows (*Registry*)

Es una base de datos jerárquica centralizada donde Windows almacena toda la configuración del sistema.

* **Herramienta de acceso:** `regedit` (Editor del Registro).
* **Las 5 Claves o Ramas Principales (*Root Keys*):**
  * `HKEY_CLASSES_ROOT` (**HKCR**): Guarda información sobre los tipos de archivos, extensiones y sus aplicaciones asociadas.
  * `HKEY_CURRENT_USER` (**HKCU**): Almacena las preferencias y configuraciones del usuario que tiene la sesión activa (fondo, temas, accesos).
  * `HKEY_LOCAL_MACHINE` (**HKLM**): Contiene la configuración global del equipo (hardware instalado, controladores y datos del SO).
  * `HKEY_USERS` (**HKU**): Guarda los perfiles de todos los usuarios registrados en el equipo.
  * `HKEY_CURRENT_CONFIG` (**HKCC**): Almacena datos temporales sobre el perfil de hardware utilizado en el arranque actual.

#### En Linux / Ubuntu: Archivos de Texto en `/etc`

En lugar de una base de datos centralizada binaria, los sistemas Linux almacenan toda la configuración mediante archivos de texto plano distribuidos principalmente dentro del directorio `/etc`.

* **Ventaja:** Permite consultar y modificar la configuración del sistema utilizando cualquier editor de texto plano o comando de consola (`cat`, `nano`).
* **Archivos de configuración fundamentales en `/etc`:**
  * `/etc/hostname`: Almacena el nombre del equipo dentro de la red.
  * `/etc/hosts`: Archivo de resolución local que vincula direcciones IP con nombres de dominio o de equipos (`127.0.0.1 localhost`).
  * **Comando de lectura en terminal:** `cat /etc/hosts`

--8<-- "docs/includes/glosario.md"
