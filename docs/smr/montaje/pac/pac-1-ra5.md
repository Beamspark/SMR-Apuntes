[← Volver al Índice de PACs](./index.md)

---

# PAC 1 (RA5) - Instalaciones I

---

### Pregunta 1
¿Qué elemento es necesario para realizar una instalación masiva?

<details class="quiz-option incorrect">
  <summary>A) Una imagen de un disco duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    La imagen maestra o clonada del sistema de referencia es imprescindible, pero necesita combinarse con la red de distribución y los parámetros automatizados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un archivo de respuesta para realizar la instalación masiva de forma desatendida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    El archivo de respuesta automatiza la configuración (nombre de equipo, dominio, particiones, regionalización) sin intervención manual, pero requiere los demás componentes de despliegue.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Una red para restaurar la imagen en diferentes equipos a la vez.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    La infraestructura de red (habitualmente mediante arranque PXE y difusión multicast/unicast) es el canal de transporte, pero requiere de la imagen y de la automatización.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Todas las respuestas son correctas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El despliegue masivo de sistemas operativos en entornos empresariales o aulas requiere integrar los tres pilares: una <strong>imagen maestra</strong> preconfigurada (con herramientas como Sysprep), un <strong>archivo de respuesta</strong> desatendido (como <code>unattend.xml</code>) para personalizar cada nodo y una <strong>red local</strong> para distribuir la imagen simultáneamente a múltiples equipos cliente.
  </div>
</details>

---

### Pregunta 2
Un script es un archivo de respuesta que tiene todos los parámetros necesarios para poder realizar cualquier configuración que ofrezca respuestas a las preguntas que se plantea el sistema operativo en un proceso de instalación desatendida.

<details class="quiz-option correct">
  <summary>A) Verdadero</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los scripts o archivos de respuesta automatizados (como <code>unattend.xml</code> en Windows o los archivos <em>Preseed / Kickstart</em> en distribuciones GNU/Linux) contienen las directivas y parámetros predefinidos (idioma, distribución de teclado, particionado de disco, clave de producto, credenciales de usuario y red) para responder automáticamente a todos los asistentes durante la instalación sin intervención humana.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Falso</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La automatización de respuestas del asistente del instalador se apoya precisamente en estos archivos de configuración estructurada.
  </div>
</details>

---

### Pregunta 3
¿Qué es la instalación estándar?

<details class="quiz-option incorrect">
  <summary>A) Ninguna respuesta es correcta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La opción C recoge la definición correcta del proceso estándar.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es aquella que se lleva a cabo sin que actúe ningún usuario en el proceso.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta definición corresponde a la <strong>instalación desatendida</strong>.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Es la que utilizamos cuando comienza desde cero la instalación del sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La instalación estándar (o instalación limpia/atendida desde cero) parte de un medio de arranque (USB o ISO) sobre un equipo sin sistema operativo previo o formateando la unidad de destino, requiriendo que el técnico o usuario responda manualmente paso a paso a cada pantalla del asistente.
  </div>
</details>

---

### Pregunta 4
¿Qué es la instalación desatendida?

<details class="quiz-option incorrect">
  <summary>A) Ninguna respuesta es correcta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La opción C define exactamente este método de despliegue.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es la que utilizamos cuando comienza desde cero la instalación del sistema operativo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Eso describe una instalación limpia estándar interactiva.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Es aquella que se lleva a cabo sin que actúe ningún usuario en el proceso.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la instalación desatendida (*unattended installation*), todo el flujo de configuración se ejecuta de manera autónoma leyendo los parámetros desde un archivo de respuesta previo, eliminando la necesidad de que un operador esté presente pulsando opciones frente a cada equipo.
  </div>
</details>

---

### Pregunta 5
¿Qué es Symantec Ghost Corporate Edition?

<details class="quiz-option incorrect">
  <summary>A) Una hoja de cálculo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a herramientas ofimáticas como Microsoft Excel o LibreOffice Calc.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un procesador de textos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponde a programas como Microsoft Word o LibreOffice Writer.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ninguna respuesta es correcta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La opción D identifica con precisión la categoría del software.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Un software de instalación masiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    <strong>Symantec Ghost</strong> (*General Hardware-Oriented System Transfer*, posteriormente integrado en <em>Ghost Solution Suite</em>) es una conocida suite empresarial de clonación de discos, creación de imágenes de sistema y despliegue masivo en red mediante difusión multicast (similar en propósito a herramientas libres como <strong>Clonezilla</strong> o <strong>FOG Project</strong>).
  </div>
</details>
