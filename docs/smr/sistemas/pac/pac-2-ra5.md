[← Volver al Índice de PACs](./index.md)

---

### Pregunta 1
¿Qué caracteriza a un hipervisor de tipo 1?

<details class="quiz-option incorrect">
  <summary>A) Se instala como una aplicación sobre un sistema operativo anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Instalarse como una aplicación convencional sobre un sistema operativo base es la definición de un hipervisor de tipo 2 (*hosted*).
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Se ejecuta directamente sobre el hardware físico</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los hipervisores de tipo 1 (o *bare-metal*) toman el control directo de la máquina física sin requerir un sistema operativo anfitrión intermedio, ofreciendo mayor rendimiento y menor sobrecarga (*overhead*).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Necesita que todas las máquinas virtuales utilicen el mismo sistema operativo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Permiten ejecutar de forma simultánea múltiples sistemas operativos invitados heterogéneos (por ejemplo, diversas distribuciones Linux y versiones de Windows).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Solo permite ejecutar una máquina virtual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Están concebidos precisamente para entornos de virtualización masiva y centros de datos con decenas o cientos de máquinas virtuales simultáneas.
  </div>
</details>

---

### Pregunta 2
¿Qué caracteriza a un hipervisor de tipo 2?

<details class="quiz-option incorrect">
  <summary>A) Solo sirve para virtualizar dispositivos de almacenamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Virtualiza plataformas completas de computación (procesador, memoria RAM, interfaces de red, almacenamiento y periféricos).
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Se instala y ejecuta sobre un sistema operativo anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un hipervisor de tipo 2 (o *hosted*) funciona como una aplicación más dentro del sistema operativo anfitrión (como Windows, macOS o Linux), dependiendo de su núcleo para la gestión de recursos de hardware.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Impide utilizar el ordenador físico mientras funciona.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema anfitrión sigue plenamente operativo y permite seguir utilizando otras aplicaciones del equipo en paralelo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Se instala exclusivamente en el firmware</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se instala en el espacio de usuario como cualquier software ejecutable estándar dentro del sistema de archivos.
  </div>
</details>

---

### Pregunta 3
¿Qué tipo de hipervisor es VirtualBox?

<details class="quiz-option incorrect">
  <summary>A) De tipo 1</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se ejecuta directamente sobre el hardware físico en bruto; requiere un sistema operativo de base previo.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Un gestor de arranque dual.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un gestor de arranque dual (como GRUB) permite elegir qué sistema arrancar al encender, mientras que VirtualBox ejecuta máquinas virtuales simultáneas en ventanas de escritorio.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) De tipo 2</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Oracle VM VirtualBox es un software de virtualización de escritorio que se instala como aplicación sobre sistemas Windows, Linux o macOS, clasificándose funcionalmente como hipervisor de tipo 2.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Un sistema operativo invitado</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VirtualBox es el monitor/hipervisor que hospeda a los sistemas operativos invitados, no el sistema huésped en sí.
  </div>
</details>

---

### Pregunta 4
¿Qué producto de VMware está destinado a crear máquinas virtuales en equipos Windows y Linux?

<details class="quiz-option correct">
  <summary>A) VMware Workstation Pro</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    VMware Workstation Pro es la suite de virtualización de tipo 2 de VMware orientada a entornos de desarrollo y estaciones de trabajo con sistemas anfitriones Windows y Linux.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) VMware Fusion Pro</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VMware Fusion es la solución específica de virtualización orientada de forma exclusiva a sistemas macOS.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Hyper-V</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Hyper-V es la plataforma de virtualización propietaria desarrollada por Microsoft, no por VMware.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) VMware ESXi</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VMware ESXi es un hipervisor *bare-metal* (tipo 1) destinado a servidores empresariales dedicados.
  </div>
</details>

---

### Pregunta 5
¿Qué producto de VMware está orientado a servidores?

<details class="quiz-option incorrect">
  <summary>A) VMware Fusion Pro</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Está enfocado a estaciones de trabajo de escritorio bajo macOS.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) VMware Tools</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    VMware Tools es un conjunto de controladores y utilidades que se instalan dentro del sistema operativo invitado para mejorar la integración y rendimiento gráfico.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) VMware ESXi</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    VMware ESXi forma parte de VMware vSphere y es un hipervisor de tipo 1 diseñado específicamente para servidores empresariales y centros de procesamiento de datos (CPD).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) VMware Workstation Pro</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una herramienta de escritorio para ordenadores cliente con Windows o Linux.
  </div>
</details>

---

### Pregunta 6
¿En qué ediciones de Windows está disponible Hyper-V?

<details class="quiz-option correct">
  <summary>A) En Windows Pro, Enterprise y Education, además de Windows Server</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Microsoft incluye la característica nativa de Hyper-V como rol o característica opcional en las ediciones profesionales, corporativas y educativas de Windows de 64 bits, así como en todas las versiones de Windows Server.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) En todas las ediciones de Windows sin excepción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las ediciones domésticas carecen de Hyper-V habilitado por defecto.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Solo en Windows Server.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Hyper-V también se encuentra disponible en versiones cliente de escritorio bajo las ramas Pro, Enterprise y Education.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Únicamente en Windows Home</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Windows Home no incluye el hipervisor Hyper-V en su catálogo de características de virtualización completas.
  </div>
</details>

---

### Pregunta 7
Después de crear una máquina virtual, ¿para qué se realizan pruebas de rendimiento?

<details class="quiz-option incorrect">
  <summary>A) Para instalar automáticamente otro hipervisor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las pruebas evalúan el comportamiento del sistema, no desencadenan la instalación de software adicional.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Para convertir el sistema invitado en anfitrión.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El sistema virtualizado permanece siempre en su capa subordinada sobre el hipervisor.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Para eliminar la necesidad de asignarle memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Toda máquina virtual requiere obligatoriamente una porción de memoria RAM física reservada para su arranque y ejecución.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Para comprobar su funcionamiento y detectar posibles problemas de fluidez o consumo de recursos.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El análisis de rendimiento permite monitorizar el uso de CPU, RAM, disco y red para verificar que el sistema invitado responde con agilidad y que no asfixia los recursos del equipo físico anfitrión.
  </div>
</details>

---

### Pregunta 8
¿Qué herramienta gráfica se utiliza para consultar el rendimiento en Ubuntu?

<details class="quiz-option incorrect">
  <summary>A) Explorador de archivos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Nautilus/Archivos gestiona directorios y ficheros, sin ofrecer métricas de consumo de hardware.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Administrador de tareas</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es el nombre de la utilidad homóloga en entornos Windows.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Gestor de arranque</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Configura los parámetros iniciales de carga del kernel en el encendido.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Monitor del sistema</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Monitor del sistema (<code>gnome-system-monitor</code>) proporciona gráficos e indicadores en tiempo real sobre el uso de procesador, memoria RAM, memoria de intercambio (swap) y actividad de red y almacenamiento en Ubuntu.
  </div>
</details>

---

### Pregunta 9
¿Qué comando de Linux permite consultar la memoria RAM y la memoria de intercambio disponibles y utilizadas?

<details class="quiz-option incorrect">
  <summary>A) top</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    <code>top</code> muestra una tabla dinámica e interactiva con los procesos en ejecución y estadísticas globales, pero no es la orden específica y directa para consultar de un vistazo el balance de RAM/Swap.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) pwd</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    <code>pwd</code> imprime la ruta del directorio de trabajo actual (*print working directory*).
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) df</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    <code>df</code> informa sobre el espacio libre y ocupado en los sistemas de archivos de los discos de almacenamiento (*disk free*).
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) free</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El comando <code>free</code> (frecuentemente ejecutado con el parámetro <code>-h</code> o <code>-m</code>) muestra de forma clara y directa la cantidad total, utilizada, libre y en caché de la memoria RAM y del espacio Swap.
  </div>
</details>

---

### Pregunta 10
Un alumno propone asignar casi toda la RAM del equipo físico a una única máquina virtual para que funcione más rápido. ¿Qué debe tener en cuenta?

<details class="quiz-option incorrect">
  <summary>A) Que las máquinas virtuales no utilizan RAM</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las máquinas virtuales consumen memoria RAM real asignada directamente del hardware físico.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Que el sistema operativo anfitrión también necesita recursos para funcionar</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Si se agota la memoria del equipo físico, el sistema operativo anfitrión entrará en hiperpaginación (*thrashing*) o congelará todo el equipo, provocando inestabilidad severa o el cierre inesperado del hipervisor y de la propia máquina virtual.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Que la RAM asignada se convierte automáticamente en espacio de disco</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La memoria volátil RAM y el almacenamiento no volátil en disco son componentes físicos y funcionales distintos.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Puede asignar la RAM que quiera, no supone ningún problema para el equipo anfitrión</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es imprescindible mantener un margen prudencial de RAM para el anfitrión (habitualmente entre 2 GB y 4 GB como mínimo según el sistema base).
  </div>
</details>
