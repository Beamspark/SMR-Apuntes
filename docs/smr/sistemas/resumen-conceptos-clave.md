<h1 style="color: #ab47bc;">📌 Repaso General — Conceptos Clave de Sistemas Operativos</h1>

Este documento recopila y estructura de forma directa los fundamentos técnicos, arquitecturas del núcleo, gestión de recursos y procedimientos de administración del módulo de **Sistemas Operativos Monopuesto**, diseñado para repasos rápidos y preparación de exámenes.

---

<h2 style="color: #29b6f6;">💻 1. Caracterización del Sistema Informático y del Sistema Operativo</h2>

* **Arquitectura de Von Neumann:** Modelo que estructura el ordenador en:
    * **CPU:** Compuesta por la Unidad de Control (**UC**) y la Unidad Aritmético-Lógica (**ALU**).
    * **Memoria Principal:** Almacén único compartido donde conviven tanto las instrucciones del programa como los datos procesados.
    * **Unidad de Entrada/Salida (E/S):** Interfaz con periféricos y almacenamiento secundario.
    * **Bus del Sistema:** Conjunto de líneas compartidas para datos, direcciones y control.
* **Cuello de Botella de Von Neumann:** Limitación estructural de rendimiento producida por el tráfico compartido en el bus del sistema: la velocidad de la CPU se ve restringida por la tasa de transferencia de datos e instrucciones desde la memoria principal.
* **Ciclo de Instrucción de la CPU:** Secuencia ejecutada por el procesador en cuatro fases:
    1. **Búsqueda (*Fetch*):** La UC carga la instrucción apuntada por el Contador de Programa (**PC**) desde la memoria al Registro de Instrucción (**IR**).
    2. **Decodificación (*Decode*):** El decodificador interpreta la operación binaria y determina los operandos requeridos.
    3. **Ejecución (*Execute*):** La ALU realiza la operación matemática o lógica.
    4. **Almacenamiento (*Store*):** El resultado se almacena en registros internos o en memoria RAM.

### Jerarquía de Memorias

| Nivel de Memoria | Ubicación / Tipo | Velocidad | Capacidad | Coste por Bit | Volatilidad |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Registros** | Internos en CPU | Máxima (ciclo de reloj) | Bytes ($< 1\text{ KB}$) | Extremo | Volátil |
| **Memoria Caché** | Silicio CPU (L1, L2, L3) | Ultrarrápida (SRAM) | Megabytes ($2\text{--}64\text{ MB}$) | Muy alto | Volátil |
| **Memoria RAM** | Placa base (DRAM) | Rápida (bus memoria) | Gigabytes ($8\text{--}64\text{ GB}$) | Moderado | Volátil |
| **Almacenamiento Secundario** | NVMe, SSD, HDD | Lenta (bus I/O) | Terabytes ($512\text{ GB -- }4\text{ TB}$) | Muy bajo | No volátil |

* **Clasificación del Software por Función:**
    * **Software de Base / Sistema:** Sistema operativo, firmware (BIOS/UEFI) y controladores de dispositivo (*drivers*).
    * **Software de Aplicación:** Programas orientados al usuario final (ofimática, navegadores, diseño).
    * **Software de Desarrollo:** Herramientas para programadores (compiladores, enlazadores, entornos IDE).
* **Modelos de Licenciamiento:**
    * **Software Propietario:** Código fuente cerrado; restringe derechos de uso, copia, modificación y redistribución mediante EULA.
    * **Software Libre:** Respeta las cuatro libertades esenciales de la FSF (ejecutar, estudiar/modificar, redistribuir copias y distribuir mejoras).
    * **Freeware:** Gratuito pero de código cerrado; el autor retiene los derechos patrimoniales.
    * **Shareware:** Distribuido de forma gratuita con fines evaluativos, restringiendo funciones o tiempo de uso.
* **Representación Numérica e Información:**
    * **Bit:** Unidad elemental de computación ($0$ o $1$).
    * **Byte / Octeto:** Agrupación de 8 bits (mínima unidad direccionable en memoria RAM). Compuesto por el bit menos significativo (**LSB**, peso $2^0$) y el más significativo (**MSB**, peso $2^7$).
    * **Palabra de Computador:** Longitud de datos nativa que procesa la CPU en un solo ciclo ($32\text{ bits}$ en arquitecturas x86; $64\text{ bits}$ en x86-64).
    * **Sistemas Posicionales:** Binario (base 2), Octal (base 8; $3\text{ bits}$ por dígito) y Hexadecimal (base 16; $0\text{--}9$ y $\text{A--F}$; $4\text{ bits}$ por carácter).

---

<h2 style="color: #29b6f6;">🖧 2. Virtualización y Máquinas Virtuales</h2>

* **Virtualización:** Tecnología que permite generar representaciones virtuales de recursos de hardware mediante una capa de software, facilitando la ejecución concurrente de múltiples sistemas operativos aislados sobre una única máquina física.
* **Hipervisor (*Virtual Machine Monitor* — VMM):**
    * **Hipervisor de Tipo 1 (*Bare-Metal* / Nativo):** Se ejecuta de forma directa sobre el silicio del hardware sin requerir un sistema operativo anfitrión intermedio. Ofrece máximo rendimiento y eficiencia en centros de datos (ej. *VMware ESXi, Proxmox VE*).
    * **Hipervisor de Tipo 2 (*Hosted* / Alojado):** Se ejecuta como un proceso de software sobre un sistema operativo anfitrión que gestiona los controladores físicos (ej. *Oracle VirtualBox, VMware Workstation Pro*).
* **Controladores de Integración (*Guest Additions* / *VMware Tools*):** Módulos instalados dentro del sistema operativo invitado para permitir redimensionamiento dinámico de pantalla, captura fluida de puntero, carpetas compartidas y portapapeles bidireccional.

### Arranque Dual (*Dual Boot*) frente a Virtualización

| Criterio | Arranque Dual (*Dual Boot*) | Virtualización (Máquinas Virtuales) |
| :--- | :--- | :--- |
| **Ejecución de Sistemas** | Exclusiva: solo un SO activo en cada sesión. | Concurrente: varios SOs ejecutándose en paralelo. |
| **Acceso al Hardware** | Directo y nativo al 100% de los componentes. | Intermediado por la capa de abstracción del hipervisor. |
| **Cambio de Entorno** | Requiere reinicio físico completo de la máquina. | Inmediato mediante cambio de ventana gráfica. |
| **Consumo de Memoria RAM** | Consume únicamente los recursos del SO arrancado. | Agota la RAM física al sumar el anfitrión y las VMs. |

---

<h2 style="color: #29b6f6;">⚙️ 3. Arquitectura del Núcleo, Gestión de Recursos e Instalación</h2>

### Niveles de Privilegio de la CPU (*Ring 0* vs. *Ring 3*)
* **Modo Núcleo (*Kernel Mode* / Ring 0):** Modo de ejecución sin restricciones; el núcleo accede directamente a las instrucciones privilegiadas del hardware, interrupciones y memoria física.
* **Modo Usuario (*User Mode* / Ring 3):** Modo de ejecución protegido donde corren las aplicaciones de usuario. Para acceder a recursos físicos (disco, pantalla, red), la aplicación debe invocar una **Llamada al Sistema (*System Call*)** para transferir el control al núcleo de forma controlada.

### Modelos de Arquitectura de Kernel
* **Kernel Monolítico:** Todos los subsistemas (planificador, gestor de memoria, sistemas de archivos y controladores de hardware) se ejecutan dentro del mismo espacio de direcciones en modo núcleo. Máxima velocidad de ejecución pero menor tolerancia a fallos en drivers (ej. *GNU/Linux*).
* **Micronúcleo (*Microkernel*):** El núcleo solo contiene los mecanismos elementales (gestión básica de memoria, procesos y comunicación IPC). Los drivers y sistemas de archivos operan como procesos servidores en modo usuario. Mayor tolerancia a fallos pero mayor penalización por paso de mensajes (ej. *MINIX, QNX*).
* **Kernel Híbrido:** Estructura monolítica modularizada que ejecuta la mayoría de servicios críticos en espacio de núcleo para optimizar el rendimiento, reteniendo interfaces de micronúcleo (ej. *Windows NT, macOS XNU*).

### Gestión de Procesos y Planificación
* **Diferencia conceptual:** Un **programa** es una entidad pasiva almacenada en disco; un **proceso** es un programa cargado en memoria RAM en ejecución activa, asociado a recursos de hardware.
* **Bloque de Control de Proceso (PCB / BCP):** Estructura del núcleo que almacena los metadatos de ejecución: identificador del proceso (**PID**), estado actual, contador de programa, registros de CPU, prioridad y descriptores de archivos abiertos.
* **Transiciones de Estado de un Proceso:**
    * **Nuevo:** Proceso en fase de creación e inicialización de PCB.
    * **Preparado (*Ready*):** Cargado en memoria RAM en cola de espera de turno de CPU.
    * **En ejecución (*Running*):** Asignado a un núcleo de la CPU ejecutando instrucciones.
    * **Bloqueado (*Waiting*):** En espera de que concluya un evento externo o una operación de E/S.
    * **Terminado (*Terminated*):** Liberación de memoria y destrucción del PCB tras concluir su código.
* **Algoritmos de Planificación de CPU:**
    * **No expulsivos (*Non-preemptive*):** Una vez que el proceso toma la CPU no se le desaloja hasta que termina o se bloquea voluntariamente (ej. *FCFS/FIFO*, *SJF*).
    * **Expulsivos (*Preemptive*):** El planificador retira la CPU al proceso cuando expira su cuota temporal asignada (*quantum*) o llega un proceso de mayor prioridad (ej. *Round Robin*, *SRTF*).

### Gestión de Memoria Principal y Virtual
* **Paginación:** Divide el espacio lógico del proceso en páginas y la memoria física en marcos (*frames*) de tamaño fijo idéntico. Elimina la fragmentación externa, pero puede generar **fragmentación interna** en la última página de un bloque.
* **Segmentación:** Divide la memoria en bloques lógicos de tamaño variable según la estructura del programa (código, datos, pila). Elimina la fragmentación interna, pero produce **fragmentación externa** (bloques de memoria libres dispersos no contiguos).
* **Memoria Virtual y Espacio Swap:** Mecanismo gestionado por la **MMU** (*Memory Management Unit*) que asigna espacio de disco secundario para descargar páginas de RAM inactivas, permitiendo ejecutar programas de tamaño superior a la memoria física disponible.

### Firmware de Placa Base y Esquemas de Particionado

| Parámetro | Firmware BIOS (Legacy) / MBR | Firmware UEFI / GPT |
| :--- | :--- | :--- |
| **Esquema de Particionado** | MBR (*Master Boot Record*). | GPT (*GUID Partition Table*). |
| **Límite de Particiones** | 4 particiones primarias (o 3 primarias + 1 extendida). | Hasta 128 particiones primarias directas. |
| **Tamaño Máximo de Disco** | $2\text{ TB}$ (bloques direccionables de 32 bits). | Hasta $9{,}4\text{ ZB}$ (bloques de 64 bits). |
| **Seguridad de Arranque** | Sin validación de firmas digitales. | Arranque seguro (**Secure Boot**) con certificados PKI. |
| **Gestores de Arranque** | Código ejecutable en primer sector del disco (LBA 0). | Windows Boot Manager (`bootmgfw.efi`) o GNU GRUB en partición ESP. |

---

<h2 style="color: #29b6f6;">🖥️ 4. Entorno del Sistema, Gestión de Energía y Directorios</h2>

* **Estados de Energía y Apagado:**
    * **Suspensión (*Sleep / Standby*):** Detiene la CPU y apaga discos, pero mantiene energizada la memoria RAM para reanudar la sesión de forma instantánea (consumo eléctrico residual).
    * **Hibernación:** Vuelca la totalidad de la memoria RAM activa en el archivo `hiberfil.sys` en disco y apaga el equipo por completo (consumo energético nulo).
    * **Inicio Rápido (*Fast Startup* en Windows):** Cierra los procesos de usuario pero hiberna la sesión del núcleo para acelerar el encendido; la acción *"Reiniciar"* limpia la memoria y fuerza un arranque completo desde cero.
    * **Modo Seguro / Entorno de Recuperación:** Carga el sistema con un conjunto mínimo de controladores y servicios base para diagnosticar y reparar dependencias corruptas.
* **Interfaces de Usuario:**
    * **GUI (*Graphical User Interface*):** Interfaz visual interactiva basada en el paradigma WIMP (*Windows, Icons, Menus, Pointer*).
    * **CLI (*Command Line Interface*):** Interfaz textual compuesta por:
        * **Terminal:** Ventana o emulador gráfico de entrada/salida (ej. *Windows Terminal, GNOME Terminal*).
        * **Shell:** Intérprete de comandos subyacente que procesa y ejecuta las órdenes (ej. *PowerShell, CMD, Bash, Zsh*).
        * **Prompt:** Cadena de texto indicativa de que la shell está lista para recibir instrucciones.

### Arquitectura de Sistemas de Archivos: Windows vs. GNU/Linux

| Característica | Estructura en Microsoft Windows | Estructura en GNU/Linux |
| :--- | :--- | :--- |
| **Jerarquía de Directorios** | Árboles independientes por unidad de disco (`C:\`, `D:\`). | Árbol único unificado originado en la raíz (`/`). |
| **Separador de Rutas** | Barra invertida (`\`). | Barra inclinada convencional (`/`). |
| **Sensibilidad a Mayúsculas** | *Case-insensitive* (no distingue mayúsculas/minúsculas). | *Case-sensitive* (distingue mayúsculas y minúsculas estrictamente). |

### Directorios Estándar de la Jerarquía en GNU/Linux (FHS)
* `/boot`: Archivos estáticos del cargador de arranque (GRUB) y núcleos comprimidos del Kernel (`vmlinuz`).
* `/etc`: Ficheros de configuración del sistema y de servicios del equipo en formato de texto plano.
* `/home`: Directorios personales de los usuarios regulares del sistema.
* `/root`: Directorio personal exclusivo del superusuario administrador (`root`).
* `/media` y `/mnt`: Puntos de montaje automáticos para unidades extraíbles y montajes temporales manuales.
* `/tmp`: Archivos temporales eliminados automáticamente al reiniciar la máquina.
* `/usr`: Binarios, bibliotecas compartidas y documentación del software instalado.
* `/var`: Datos variables generados por el sistema (bases de datos temporales, colas de impresión y archivos de registro `/var/log`).

* **Automatización Programada:**
    * **Windows:** Consola del Programador de Tareas (`taskschd.msc`).
    * **Linux:** Demonio `cron`, gobernado mediante el archivo del usuario editado con `crontab -e`.
    ```text
    ┌───────────── Minuto (0 - 59)
    │ ┌─────────── Hora (0 - 23)
    │ │ ┌───────── Día del mes (1 - 31)
    │ │ │ ┌─────── Mes (1 - 12)
    │ │ │ │ ┌───── Día de la semana (0 - 7, donde 0 y 7 corresponden a Domingo)
    │ │ │ │ │
    * * * * *  /ruta/al/script.sh
    ```

---

<h2 style="color: #29b6f6;">🛠️ 5. Administración, Mantenimiento y Configuración</h2>

### Control de Accesos: Autenticación vs. Autorización
* **Autenticación:** Proceso de comprobación de identidad de un usuario ante el sistema (mediante credenciales de acceso, certificados o biometría).
* **Autorización:** Comprobación de que la identidad autenticada dispone de los privilegios, listas de control de acceso (**ACL**) y permisos necesarios para realizar una acción o acceder a un recurso.
* **Perfiles de Cuenta:**
    * **Usuario Estándar:** Ejecuta software en modo de privilegios limitados para proteger la integridad del sistema operativo.
    * **Administrador Local / Superusuario (`root`):** Control total e ilimitado sobre la totalidad del hardware, servicios y archivos. En Linux, las tareas administrativas se ejecutan mediante elevación temporal de privilegios con la orden `sudo`.

### Servicios del Sistema (Demonios)
Procesos que operan en segundo plano de manera continua sin requerir la interacción gráfica o terminal con el usuario para proveer funcionalidades esenciales (impresión, red, programación).
> *"Todos los servicios son procesos en ejecución, pero no todos los procesos son servicios del sistema."*

* **Gestión en Windows:** Consola de administración de servicios (`services.msc`) y cmdlets en PowerShell (`Get-Service`, `Start-Service`, `Stop-Service`).
* **Gestión en Linux:** Subsistema gestor `systemd`, controlado mediante la utilidad de terminal `systemctl`:
    * `systemctl status <servicio>`: Consulta el estado operativo del servicio.
    * `systemctl start / stop / restart <servicio>`: Inicia, detiene o reinicia la ejecución del servicio.
    * `systemctl enable / disable <servicio>`: Activa o desactiva el arranque automático del servicio durante el inicio de la máquina.

### Mantenimiento de Unidades de Almacenamiento

| Tipo de Unidad | Tarea de Optimización | Justificación Técnica |
| :--- | :--- | :--- |
| **Disco Mecánico (HDD)** | **Desfragmentación** periódica. | Reordena físicamente los sectores de los archivos de forma contigua para reducir los desplazamientos mecánicos del cabezal de lectura. |
| **Unidad de Silicio (SSD)** | Comando **TRIM** del sistema operativo. | Informa a la controladora SSD sobre qué bloques de celdas Flash NAND han sido liberados para agilizar los ciclos de borrado previo. |

!!! danger "Precaución en Unidades SSD"
    Está contraindicado y estrictamente desaconsejado desfragmentar un disco SSD: las celdas de silicio tienen un tiempo de acceso idéntico en cualquier dirección lógica y someterlas a reescrituras innecesarias degrada prematuramente la vida útil de los chips NAND Flash.

### Repositorios Centralizados de Configuración
* **Registro de Windows:** Base de datos jerárquica binaria unificada que almacena la configuración de bajo nivel del sistema operativo, controladores y aplicaciones (consultable mediante `regedit`):
    * **HKLM (*HKEY_LOCAL_MACHINE*):** Parámetros globales de hardware, red y software compartidos por todos los usuarios del equipo.
    * **HKCU (*HKEY_CURRENT_USER*):** Configuración personalizada del perfil del usuario con sesión activa (fondos, temas, preferencias).
    * **HKCR (*HKEY_CLASSES_ROOT*):** Asociaciones de tipos de archivo, extensiones y objetos OLE/COM.
    * **HKU (*HKEY_USERS*):** Perfiles individuales de todos los usuarios registrados en el equipo.
    * **HKCC (*HKEY_CURRENT_CONFIG*):** Configuración del perfil de hardware cargado durante la sesión actual.
* **Configuración en GNU/Linux:** Se administra mediante ficheros de texto plano modulares situados en el directorio jerárquico `/etc`:
    * `/etc/hostname`: Nombre de red configurado para la máquina.
    * `/etc/hosts`: Tabla estática local de resolución directa de nombres de dominio e identidades IP.
    * `/etc/fstab`: Tabla de configuración de montaje automático de sistemas de archivos y particiones durante el arranque.

### Comandos Esenciales de Diagnóstico y Mantenimiento

* **En Microsoft Windows:**
    * `systeminfo`: Muestra un informe pormenorizado del sistema operativo (versión del núcleo, parches de seguridad hotfix instalados, memoria física y red).
    * `sfc /scannow`: Escanea la integridad estructural de todos los binarios protegidos del sistema operativo y repara archivos corruptos usando la caché local.
    * `chkdsk C: /f /r`: Localiza y repara errores lógicos y sectores físicos dañados en el sistema de archivos NTFS.

* **En GNU/Linux (Distribuciones Debian / Ubuntu):**
    * `lsb_release -a`: Imprime la versión detallada y el nombre en clave de la distribución instalada.
    * `sudo apt update`: Sincroniza la lista local de paquetes indexados con los servidores de repositorios remotos.
    * `sudo apt upgrade`: Descarga e instala las versiones más recientes disponibles de todos los paquetes del sistema.
    * `sudo apt autoremove`: Purga del sistema bibliotecas y dependencias huérfanas que dejaron de ser requeridas tras desinstalar software.
    * `sudo apt clean`: Vacía la caché de paquetes de instalación descargados (`.deb`) en `/var/cache/apt/archives/` para liberar espacio en disco.

--8<-- "docs/includes/glosario.md"
