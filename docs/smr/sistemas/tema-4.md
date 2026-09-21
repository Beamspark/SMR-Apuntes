<h1 style="color: #ab47bc;">:gear: Tema 4 — Configuración de Sistemas Operativos Libres y Propietarios</h1>

<h2 style="color: #29b6f6;">4.1. Arranque y Parada del Sistema</h2>

Cada vez que se enciende o apaga un ordenador, el sistema operativo ejecuta una serie de procesos internos encargados de preparar los componentes hardware para su utilización o de detener ordenadamente las tareas activas para proteger la integridad de los datos.

---

### 4.1.1. Arranque del sistema
Es el proceso que se inicia al pulsar el botón de encendido del ordenador y concluye cuando el usuario tiene acceso al entorno de trabajo.

* **Arranque normal:** Es el modo habitual de inicio. Durante esta fase se cargan en la memoria RAM todos los controladores (*drivers*), servicios del sistema y programas configurados para ejecutarse automáticamente. Si el arranque completa sin errores, el sistema muestra la pantalla de autenticación para introducir las credenciales.
* **Modos especiales de arranque (Modo Seguro / Entorno de Recuperación):**
  Cuando el sistema experimenta fallos graves, incompatibilidades de controladores o errores tras una actualización, se recurre a modos especiales como el **Modo seguro** o entornos de recuperación (como *WinRE* en Windows o *Recovery Mode* en Linux).
  * **Mecanismo:** Estos modos cargan únicamente los controladores y servicios mínimos e imprescindibles para el funcionamiento básico, permitiendo al técnico diagnosticar fallos, desinstalar controladores defectuosos o restaurar el sistema.

---

### 4.1.2. Parada del sistema
Consiste en finalizar de forma ordenada la ejecución de los programas y servicios activos, cerrando las sesiones de usuario y liberando los recursos antes de cortar la alimentación del hardware.

#### 1. Apagar el equipo (*Shutdown*) e Inicio Rápido
* **Apagado convencional:** Cierra todas las aplicaciones, finaliza las sesiones y corta la corriente eléctrica del equipo.
* **Inicio Rápido (*Fast Startup*) en Windows:** Desde Windows 8, la opción *"Apagar"* no realiza un apagado completo, sino un modelo híbrido entre apagado e hibernación. Windows cierra las aplicaciones del usuario, pero hiberna el núcleo del sistema operativo (*Kernel*), guardando su estado en el archivo `hiberfil.sys`. Esto permite que el siguiente arranque sea mucho más rápido.
* **Desactivación:** Se puede deshabilitar desde **Panel de control $\rightarrow$ Opciones de energía $\rightarrow$ Elegir el comportamiento de los botones de encendido**.

#### 2. Reiniciar el equipo (*Restart* / *Reboot*)
A diferencia del apagado con Inicio Rápido, el reinicio cierra por completo el Kernel y realiza un arranque completamente limpio cargando nuevamente todos los componentes desde cero.

* **Uso:** Es imprescindible tras instalar actualizaciones del sistema operativo, parches de seguridad o nuevos controladores.
* **Comandos en Consola (CLI):**
  * **Windows:** `shutdown /r /t 0` *(reinicia inmediatamente)*. Para cancelar un reinicio programado: `shutdown /a`.
  * **Ubuntu:** `sudo reboot` o `sudo shutdown -r now`. Para cancelar: `sudo shutdown -c`.

#### 3. Suspender el equipo
Mantiene abierta la sesión del usuario deteniendo la mayoría de los componentes físicos, pero conservando la alimentación eléctrica en la memoria RAM.

* **Ventaja:** Recupera el estado de trabajo de forma casi instantánea al pulsar cualquier tecla.
* **Inconveniente:** Consume una pequeña cantidad de energía continua. Si la batería se agota o se corta la corriente eléctrica, la información no guardada en la RAM se pierde.

#### 4. Hibernar el equipo
Guarda el contenido completo de la memoria RAM dentro de un archivo reservado en el disco duro (`hiberfil.sys` en la raíz `C:\` de Windows) y apaga completamente el equipo, reduciendo el consumo eléctrico a cero. Al encender de nuevo el ordenador, se lee el archivo y se restaura el trabajo en el punto exacto donde se dejó.

* **Uso:** Especialmente útil en ordenadores portátiles que no van a utilizarse durante varias horas.
* **Comando de verificación en Windows:** `powercfg /a` *(para activar la hibernación si está deshabilitada: `powercfg /hibernate on` en consola de administrador)*.

---

### 4.1.3. Apagado incorrecto del equipo
Ocurre cuando el ordenador se apaga de manera abrupta (desconectando el cable de alimentación, por un fallo de corriente o manteniendo pulsado el botón de encendido).

* **Consecuencias:** Puede causar la pérdida de datos no guardados, dejar transacciones a medio escribir y provocar la corrupción del sistema de archivos o de archivos protegidos del sistema operativo.

---

<h2 style="color: #29b6f6;">4.2. Gestión de Sesiones de Usuario</h2>

Una sesión de usuario es el entorno personalizado que se genera cuando una persona se autentica en el sistema operativo. Incluye la carga de sus preferencias visuales, escritorio, documentos personales, aplicaciones y permisos.

```text
                  +-----------------------------------+
                  |        INICIO DE SESIÓN           |
                  |  (Autenticación de Credenciales)  |
                  +-----------------+-----------------+
                                    |
            +-----------------------+-----------------------+
            |                       |                       |
            v                       v                       v
   [Cerrar Sesión]         [Cambiar de Usuario]     [Bloquear Sesión]
 (Finaliza programas y    (Mantiene apps activas   (Mantiene apps activas
  libera memoria RAM)      de usuarios simultáneos) e impide accesos)
```

* **Inicio de sesión:** Proceso de verificación de la identidad del usuario (mediante contraseña, PIN o biometría) para cargar su perfil privado almacenado en el disco.
* **Cerrar sesión:** Finaliza los procesos abiertos por el usuario, solicita guardar los cambios pendientes y libera la memoria RAM ocupada por su perfil, dejando el equipo listo para que entre otro usuario.
* **Cambiar de usuario:** Permite que un segundo usuario inicie su sesión sin cerrar los programas del primer usuario, los cuales permanecen suspendidos en segundo plano. Aumenta el consumo de memoria RAM.
* **Bloquear la sesión:** Protege el equipo de accesos no autorizados cuando el usuario se ausenta temporalmente. Todas las aplicaciones y documentos continúan ejecutándose en segundo plano.

!!! tip "Atajos de teclado rápidos"
    * **Windows:** <kbd>Win</kbd> + <kbd>L</kbd>
    * **Ubuntu:** <kbd>Super</kbd> + <kbd>L</kbd> *(la tecla Super equivale a la tecla Windows)*.

---

<h2 style="color: #29b6f6;">4.3. Interfaces de Usuario</h2>

La interfaz de usuario es el conjunto de componentes lógicos y visuales que permite la comunicación e interacción entre la persona y el sistema operativo.

### 1. Interfaz Gráfica de Usuario (GUI)
Permite la interacción mediante elementos visuales gráficos (ventanas, botones, iconos).

* **Modelo WIMP:** Es el estándar en el que se basan las GUIs modernas:
  * **W (*Windows* / Ventanas):** Áreas rectangulares donde se ejecutan las aplicaciones.
  * **I (*Icons* / Iconos):** Representaciones gráficas de archivos, carpetas y programas.
  * **M (*Menus* / Menús):** Listados organizados de comandos y opciones.
  * **P (*Pointer* / Puntero):** Indicador gráfico controlado por el ratón o pantalla táctil.
* **Ventajas:** Alta facilidad de uso e intuición.
* **Inconvenientes:** Mayor consumo de memoria RAM y recursos gráficos.

---

### 2. Interfaz de Línea de Comandos (CLI)
Permite comunicarse con el sistema mediante la introducción de comandos de texto.

#### Conceptos clave de la CLI:
* **Terminal / Consola:** Ventana o contenedor visual donde se escribe el texto.
* **Shell / Intérprete de comandos:** Programa que lee, interpreta y ejecuta las instrucciones escritas (ejemplos: `CMD` y `PowerShell` en Windows; `Bash` en Linux).
* **Prompt:** Indicador de texto mostrado al inicio de la línea que señala que el sistema está listo para recibir un comando.
* **Directorio de trabajo actual:** Ubicación dentro del árbol de carpetas sobre la cual se aplican los comandos emitidos.
* **Ventajas:** Gran rapidez, consumo de recursos mínimo y capacidad de automatizar tareas mediante scripts.

---

<h2 style="color: #29b6f6;">4.4. Configuración del Entorno Personal</h2>

Conjunto de ajustes que permiten adaptar la apariencia y comportamiento del sistema operativo a las preferencias de cada usuario. Las configuraciones se guardan dentro del perfil de usuario de forma independiente.

#### Categorías principales de personalización:
* **Apariencia visual:** Fondos de pantalla, temas, colores de énfasis y modo claro/oscuro.
* **Pantalla y energía:** Resolución, escala de texto, brillo, tiempo de inactividad antes de apagar el monitor o entrar en suspensión.
* **Idioma y región:** Idioma de la interfaz, zona horaria y distribución del teclado.
* **Accesibilidad:** Herramientas adaptativas (lupa, lector de pantalla, teclado en pantalla, alto contraste).
* **Notificaciones y sonido:** Ajustes de avisos visuales y volumen de dispositivos de audio.

#### Acceso a la configuración:
* **Windows 11:** Mediante la aplicación **Configuración** (atajo <kbd>Win</kbd> + <kbd>I</kbd>).
* **Ubuntu:** Mediante el panel **Configuración** accesible desde el menú de aplicaciones o la barra superior del escritorio.

---

<h2 style="color: #29b6f6;">4.5. Estructura del Árbol de Directorios</h2>

El sistema operativo organiza la información en el disco utilizando una estructura jerárquica en forma de árbol invertido compuesta por directorios (carpetas) y ficheros (archivos).

```text
         ESTRUCURA EN WINDOWS                        ESTRUCTURA EN LINUX
                C:\ (Unidad)                              / (Directorio Raíz)
         +-------+-------+                      +---------+---------+---------+
         |               |                      |         |         |         |
    \Archivos de     \Usuarios                /boot     /etc      /home     /var
     Programa        |                                            |
                     \NombreUsuario                               \NombreUsuario
```

### Diferencias estructurales entre Windows y Linux

#### En Windows
* Cada unidad física o partición dispone de su propio árbol independiente, identificado con una letra seguida de dos puntos (`C:\`, `D:\`).
* La separación en las rutas de acceso se realiza mediante la barra invertida (`\`).
* **Carpeta personal de usuario:** `C:\Usuarios\nombre_usuario` *(o `C:\Users\nombre_usuario`)*.

#### En Linux / Ubuntu
* Existe un único árbol de directorios global cuyo origen es el directorio raíz (`/`). Las unidades secundarias o memorias USB se integran (*"montan"*) dentro de este árbol único.
* La separación en las rutas se realiza mediante la barra normal (`/`).
* **Carpeta personal de usuario:** `/home/nombre_usuario`.

#### Carpetas fundamentales del directorio raíz (/) en Linux:
* `/boot`: Archivos necesarios para el arranque (Kernel y GRUB).
* `/etc`: Archivos de configuración del sistema operativo y aplicaciones.
* `/home`: Directorios personales de los usuarios del equipo.
* `/media`: Punto de montaje automático para dispositivos extraíbles (memorias USB, discos externos).
* `/tmp`: Archivos temporales (se borran al reiniciar).
* `/usr`: Aplicaciones, librerías y utilidades del sistema.
* `/var`: Archivos de datos cambiantes (archivos de registro/logs, cachés, colas de impresión).

#### Rutas de acceso (*Paths*)
* **Ruta Absoluta:** Muestra el camino completo desde el origen o raíz del sistema (`C:\Users\Eva\Documentos\archivo.txt` o `/home/eva/Documentos/archivo.txt`).
* **Ruta Relativa:** Muestra la ubicación partiendo desde el directorio en el que se encuentra posicionado el usuario en ese momento.

---

<h2 style="color: #29b6f6;">4.6. Compresión y Descompresión</h2>

Permite empaquetar y reducir el tamaño de archivos y carpetas para optimizar el almacenamiento o facilitar su envío a través de la red.

#### Formatos más comunes:
* **ZIP:** El formato estándar más extendido. Compatible de forma nativa en Windows y Linux.
* **RAR:** Formato propietario con alta tasa de compresión (requiere software especializado como WinRAR).
* **7Z:** Formato de código abierto (7-Zip) con altos índices de compresión mediante algoritmos avanzados.
* **TAR / TAR.GZ:** Estándar en entornos Linux. TAR agrupa archivos sin comprimir, mientras que `.tar.gz` aplica la compresión GZIP (muy utilizado para distribuir software y copias de seguridad).

#### Tipos de algoritmos de compresión:
* **Compresión sin pérdida (*Lossless*):** Permite recuperar exactamente el archivo original bit a bit tras descomprimirlo. Se utiliza en documentos, bases de datos, código y ejecutables (formatos ZIP, RAR, 7Z).
* **Compresión con pérdida (*Lossy*):** Elimina información imperceptible para reducir enormemente el tamaño. No se puede recuperar el original exacto. Se utiliza en archivos multimedia (imágenes JPEG, audio MP3, vídeo MP4).

---

<h2 style="color: #29b6f6;">4.7. Instalación y Desinstalación de Aplicaciones</h2>

El sistema operativo controla el ciclo de vida completo de las aplicaciones (instalación, actualización y desinstalación).

#### Métodos de instalación:
* **Mediante Asistente de instalación:** Común en Windows. Se ejecuta un instalador (`.exe` o `.msi`) y un asistente guía los pasos de copia de archivos y registro.
* **Desde Tiendas Oficiales:** Plataformas centralizadas seguras que simplifican la búsqueda e instalación (*Microsoft Store* en Windows y *Centro de Aplicaciones* en Ubuntu).
* **Mediante Gestores de Paquetes (Línea de Comandos):** Herramientas que descargan e instalan software y sus dependencias automáticamente desde repositorios oficiales.
  * **En Ubuntu:** Gestor APT (*Advanced Package Tool*). Comando de instalación: `sudo apt install nombre_paquete`.
* **Programas Portables:** Aplicaciones que no requieren instalación ni modifican el sistema; se ejecutan directamente desde una carpeta o memoria USB.

#### Desinstalación:
Proceso de eliminación limpia del programa. Debe realizarse siempre desde las herramientas del sistema (panel *Aplicaciones instaladas* en Windows o `sudo apt remove nombre_paquete` en Ubuntu) para evitar dejar archivos huérfanos o entradas corruptas en la configuración.

---

<h2 style="color: #29b6f6;">4.8. Automatización de Tareas</h2>

Permite programar la ejecución periódica y automática de comandos, scripts o mantenimientos sin necesidad de intervención manual del usuario.

### 1. Automatización en Windows: Programador de Tareas (*Task Scheduler*)
Herramienta gráfica que permite definir tareas basadas en:

* **Desencadenadores:** Momento o evento de inicio (una hora concreta, al arrancar el sistema, al iniciar sesión, periódicamente).
* **Acciones:** El programa, script o archivo ejecutable que se va a lanzar.

---

### 2. Automatización en Linux: El servicio *cron* y el archivo *crontab*
En Ubuntu y sistemas Linux, la automatización se gestiona mediante el demonio/servicio `cron`. Cada usuario puede editar su tabla de tareas programadas ejecutando en la terminal el comando: `crontab -e`.

#### Estructura de una línea en crontab (5 Campos de tiempo + Comando)

```text
  +------------------- Minuto (0 - 59)
  |   +--------------- Hora (0 - 23)
  |   |   +----------- Día del Mes (1 - 31)
  |   |   |   +------- Mes (1 - 12)
  |   |   |   |   +--- Día de la Semana (0 - 7, donde 0 y 7 son Domingo)
  |   |   |   |   |
  *   *   *   *   *   /ruta/del/comando_o_script
```

* **Ejemplo 1:** `0 10 * * 1-5 gedit` $\rightarrow$ Abre el editor de texto `gedit` de lunes a viernes (días 1 al 5) a las 10:00 AM.
* **Ejemplo 2:** `30 8 * * * firefox` $\rightarrow$ Abre el navegador `Firefox` todos los días a las 08:30 AM.
* **Ejemplo 3:** `0 22 * * 0 sudo apt update` $\rightarrow$ Actualiza la lista de paquetes los domingos a las 22:00 PM.

--8<-- "docs/includes/glosario.md"
