# Test de Autoevaluación: Tema 1

[← Volver al Tema 1: Instalación de aplicaciones ofimáticas y arquitectura](../tema-1.md)

---

### Pregunta 1
Un procesador de un equipo informático trabaja a una frecuencia de reloj de 4 GHz. ¿Qué significa exactamente esta especificación técnica y cómo influye en el procesamiento de datos del sistema?

<details class="quiz-option correct">
  <summary>A) Realiza $4 \times 10^9$ ciclos u operaciones por segundo, determinando la velocidad de ejecución de las instrucciones del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La velocidad del microprocesador (CPU) se mide en Gigahertzios (GHz). Un Hertzio representa un ciclo por segundo; por tanto, $1 \text{ GHz} = 10^9$ operaciones/segundo. Una CPU a 4 GHz ejecuta $4 \times 10^9$ ciclos u operaciones por segundo, lo que marca el ritmo de procesamiento del hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Permite almacenar $4 \times 10^9$ bytes de información volátil en la memoria de trabajo del sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El almacenamiento de información volátil es función de la memoria RAM, cuya capacidad se mide en Gigabytes (GB), no en GHz.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Dispone de 4 núcleos físicos de procesamiento que ejecutan $10^6$ operaciones por minuto cada uno.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde la frecuencia de reloj (GHz) con el número de núcleos (cores) y comete un error de escala temporal (mide en minutos en lugar de segundos).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Transfiere información a través del bus de datos a una tasa constante de 4 GB/s entre el almacenamiento secundario y la RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La tasa de transferencia del bus de datos o almacenamiento se mide en MB/s o GB/s, no en GHz.
  </div>
</details>

---

### Pregunta 2
Un técnico de SMR debe explicar a un usuario la diferencia estructural entre la memoria RAM y la memoria ROM integradas en la placa base. ¿Cuál de las siguientes afirmaciones es técnicamente correcta?

<details class="quiz-option incorrect">
  <summary>A) La memoria RAM es no volátil y de solo lectura, mientras que la ROM es volátil y aloja las aplicaciones en ejecución.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Invierte completamente las propiedades de ambas memorias.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La memoria RAM es volátil y reutilizable para procesar datos en ejecución; la ROM es no volátil y almacena las instrucciones de arranque (BIOS/UEFI).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La memoria RAM (Random Access Memory) es de lectura/escritura, reutilizable y volátil (pierde su contenido al cortar la energía). La memoria ROM (Read Only Memory) es no volátil y de solo lectura, albergando el firmware inicial (BIOS/UEFI) para ejecutar la comprobación del hardware al encender el equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La memoria ROM pierde su contenido al apagar el equipo, lo que obliga al sistema a cargar la BIOS desde el disco duro SSD en cada encendido.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ROM es no volátil; si fuera volátil se borraría la BIOS al apagar el equipo y el ordenador no podría encender.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Ambas memorias son volátiles, pero la RAM permite lectura/escritura y la ROM permite únicamente escritura masiva en bloques.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ROM no es volátil y no permite la escritura masiva de datos por parte del usuario.
  </div>
</details>

---

### Pregunta 3
Se adquiere un monitor con una resolución nativa de alta definición Full HD ($1920 \times 1080$ píxeles). ¿Cuántos puntos de color independientes (píxeles) componen la superficie total de proyección de dicha pantalla?

<details class="quiz-option incorrect">
  <summary>A) $1.024.000$ píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Equivale a una resolución aproximada de $1280 \times 800$ píxeles (estándar WXGA).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) $1.440.000$ píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Representa una resolución de $1600 \times 900$ píxeles (HD+).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) $2.073.600$ píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La resolución representa el número total de píxeles dispuesto en una matriz de ancho por alto. Multiplicando la dimensión horizontal por la vertical: $1920 \times 1080 = 2.073.600$ píxeles independientes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) $3.840.216$ píxeles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se aproxima a la resolución 4K UHD ($3840 \times 2160 = 8.294.400$ píxeles).
  </div>
</details>

---

### Pregunta 4
Una empresa desarrolla una aplicación ofimática utilizando módulos de código libre bajo una licencia Copyleft. ¿Qué obligación legal estricta impone esta licencia sobre la redistribución del software derivado?

<details class="quiz-option incorrect">
  <summary>A) Exige el pago de un canon obligatorio a la Free Software Foundation por cada copia distribuida.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Copyleft no cobra canones ni regalías por copia distribuida.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Prohíbe de forma absoluta cualquier tipo de modificación del código fuente original por parte de terceros.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Garantizar la libertad de modificación del código fuente es uno de los pilares del software libre.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Permite cerrar el código fuente resultante y venderlo bajo una licencia propietaria privada sin restricciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Privatizar el código derivado viola el principio del Copyleft (característica de las licencias permisivas como MIT/BSD, no de Copyleft).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Obliga a citar la autoría original y exige que cualquier obra derivada se distribuya bajo los mismos términos de licencia libre.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La regla fundamental del Copyleft (presente en licencias como la GNU/GPL) exige garantizar la cita del autor original y obliga a que todas las modificaciones u obras derivadas se redistribuyan bajo la misma licencia libre, impidiendo que sea privatizado.
  </div>
</details>

---

### Pregunta 5
Durante una auditoría de software se detecta que varios usuarios utilizan un programa de compresión que se distribuye gratuitamente, pero muestra avisos de pago y bloquea funciones tras un periodo de evaluación de 30 días. ¿Bajo qué tipo de licencia se clasifica este programa?

<details class="quiz-option correct">
  <summary>A) Shareware.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Shareware es un modelo de distribución de software comercial donde se permite la prueba gratuita del programa durante un tiempo determinado (ej. 30 días) o con funciones limitadas, exigiendo el pago de la licencia para continuar su uso completo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Freeware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Freeware es gratuito de forma indefinida, sin periodo de prueba ni bloqueos temporales, aunque mantiene su código cerrado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Software Libre GPL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Software Libre permite el acceso y modificación del código fuente sin restricciones temporales de evaluación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Dominio Público.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Dominio Público carece de derechos de autor y restricciones de pago.
  </div>
</details>

---

### Pregunta 6
Un usuario redacta un documento en Microsoft Word 10 generando un archivo .docx. Necesita enviarlo a un cliente que únicamente dispone de Microsoft Word 97. ¿Cómo debe proceder para garantizar que el cliente pueda abrir el archivo sin errores de compatibilidad?

<details class="quiz-option incorrect">
  <summary>A) Cambiar manualmente la extensión del archivo de .docx a .doc mediante el explorador de archivos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Renombrar la extensión de un archivo no modifica su estructura de codificación interna y corromperá el documento al intentar abrirlo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Guardar el documento explícitamente en modo de compatibilidad de formato "Word 97-2003" (.doc).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Word 10 utiliza la estructura XML empaquetada (.docx), la cual no es reconocida nativamente por Word 97 (.doc). Para garantizar la interoperabilidad sin pérdidas de estructura, debe seleccionarse Guardar como en el formato explícito Word 97-2003 (.doc).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Exportar el archivo como un paquete comprimido ejecutable .zip con autoextracción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Comprimir un archivo .docx dentro de un .zip no altera el formato interno del documento contenido.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Convertir el documento a una plantilla dinámica .dotx antes de su envío por correo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La extensión .dotx es una plantilla de Word moderno que tampoco puede ser leída por Word 97.
  </div>
</details>

---

### Pregunta 7
¿Qué herramientas de software especializado se utilizan en el ámbito técnico para auditar de forma automatizada los componentes de hardware y software instalados en los equipos de una empresa antes de una migración?

<details class="quiz-option incorrect">
  <summary>A) Windows Update y App Store.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son servicios del sistema operativo destinados a la descarga y aplicación de actualizaciones de software, no a la auditoría de inventario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) PDF Creator y Adobe Acrobat Professional.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son herramientas para la creación y edición de documentos en formato PDF.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Everest! y Aida64.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Everest! y Aida64 son herramientas de auditoría e inventariado informático que escanean el sistema y generan informes detallados con las especificaciones del hardware (CPU, RAM, placa base) y del software instalado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) OpenShot y OBS Studio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son herramientas destinadas a la edición de vídeo (OpenShot) y a la captura/retransmisión de pantalla (OBS Studio).
  </div>
</details>

---

### Pregunta 8
Dentro del protocolo de un Centro de Atención al Usuario (CAU), ¿cuál es la secuencia ordenada de fases que debe seguir un técnico desde que se notifica una anomalía hasta su resolución?

<details class="quiz-option incorrect">
  <summary>A) [1. Asignación] $\rightarrow$ [2. Cierre] $\rightarrow$ [3. Recepción] $\rightarrow$ [4. Resolución].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La recepción del problema no puede ser el tercer paso; es obligatoriamente el primero.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) [1. Resolución] $\rightarrow$ [2. Recepción y Documentación] $\rightarrow$ [3. Asignación] $\rightarrow$ [4. Cierre].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No se puede resolver un problema antes de recibirlo e identificarlo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) [1. Recepción y Documentación] $\rightarrow$ [2. Cierre] $\rightarrow$ [3. Asignación] $\rightarrow$ [4. Resolución].</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ubica el cierre del ticket antes de la asignación y de la propia resolución.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) [1. Recepción y Documentación] $\rightarrow$ [2. Asignación de Tareas] $\rightarrow$ [3. Resolución] $\rightarrow$ [4. Cierre].</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El protocolo estándar de gestión de incidencias en un CAU sigue la secuencia lógica: 1. Recepción y Documentación (registro inicial de síntomas), 2. Asignación de Tareas (derivación al técnico especializado), 3. Resolución (aplicación de la medida correctora) y 4. Cierre (verificación y conformidad).
  </div>
</details>

---

### Pregunta 9
Un servidor corporativo ejecuta un sistema operativo capaz de procesar múltiples instrucciones simultáneamente y gestionar sesiones de varios usuarios en paralelo. ¿Cómo se clasifica técnicamente este sistema operativo?

<details class="quiz-option correct">
  <summary>A) Multitarea y Multiusuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un sistema es multitarea cuando ejecuta y conmuta múltiples procesos o hilos de programas de forma simultánea; y es multiusuario cuando permite que varios usuarios mantengan sesiones activas de trabajo independientes compartiendo los recursos del servidor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Monotarea y Multiusuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si procesa múltiples instrucciones simultáneamente no puede ser monotarea.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Multitarea y Monousuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si permite el trabajo simultáneo de varios usuarios no es monousuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Monotarea y Monousuario.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta categoría corresponde a sistemas primitivos en la línea de comandos como MS-DOS.
  </div>
</details>

---

### Pregunta 10
Una empresa de servicios informáticos repara la placa base de un equipo y vende al cliente un módulo de memoria RAM nuevo. Transcurridos 4 meses, el cliente reclama por un fallo en la mano de obra de la reparación. Atendiendo al marco legal de garantías, ¿cuál es la respuesta correcta?

<details class="quiz-option incorrect">
  <summary>A) La reclamación es procedente porque los servicios de reparación tienen una garantía legal de 2 años.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde el plazo de garantía de productos nuevos (2 años) con el de servicios de reparación (3 meses).
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) La reclamación no es procedente porque la garantía legal del servicio de reparación es de 3 meses, mientras que el módulo RAM nuevo mantiene sus 2 años de garantía de producto.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El marco legal establece diferencias claras: la garantía de productos físicos nuevos (hardware) es de 2 años, mientras que la cobertura de garantía para servicios de reparación y mano de obra es de 3 meses. Al haber transcurrido 4 meses, el servicio ha expirado, pero la memoria RAM mantiene su cobertura de producto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Ninguno de los dos elementos dispone de garantía por tratarse de una transacción en un entorno comercial.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los productos y servicios informáticos están sujetos a garantía legal predeterminada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Tanto el servicio de reparación como el producto nuevo tienen una plazo de garantía idéntico de 6 meses.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Fija un plazo de 6 meses no conforme con la normativa (2 años productos / 3 meses servicios).
  </div>
</details>

---

### Pregunta 11
Un técnico configura una aplicación ofimática para añadir diccionarios de corrección gramatical en varios idiomas y nuevas barras de herramientas. ¿Qué nombre recibe este tipo de software que añade órdenes y funciones personalizadas?

<details class="quiz-option incorrect">
  <summary>A) Controlador de dispositivo (Driver).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un driver es un componente de software que permite al sistema operativo comunicarse con un periférico de hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Firmware de sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El firmware es el código grabado en la memoria ROM que controla los componentes físicos de un dispositivo a bajo nivel.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Complemento (Add-in / Plugin).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Un complemento (add-in o plugin) es un módulo de software que se integra en una aplicación principal para ampliar sus funcionalidades, añadiendo herramientas específicas o utilidades de productividad sin modificar el núcleo del programa.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Servidor DNS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un servidor DNS es un servicio de red encargado de traducir nombres de dominio en direcciones IP.
  </div>
</details>

---

### Pregunta 12
En el ensamblaje de un equipo informático, ¿qué función desempeñan el disipador térmico y el ventilador montados directamente sobre la CPU?

<details class="quiz-option incorrect">
  <summary>A) Aumentar la frecuencia de reloj del procesador mediante refrigeración pasiva.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El disipador no modifica la frecuencia de reloj por sí mismo; evita que se queme el componente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Convertir la corriente alterna de la red eléctrica en corriente continua de bajo voltaje.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conversión de corriente alterna a continua es función de la fuente de alimentación del equipo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenar las instrucciones de la BIOS para acelerar el arranque del equipo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las instrucciones de la BIOS se almacenan en el chip de memoria ROM.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Extraer el calor por contacto físico desde la CPU y evacuar la temperatura fuera del encapsulado para evitar el sobrecalentamiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La CPU genera altas temperaturas durante el procesamiento de datos. El disipador (metálico) absorbe el calor por contacto térmico directo y el ventilador genera un flujo de aire constante para evacuar dicho calor fuera del componente y evitar fallos por exceso de temperatura.
  </div>
</details>

---

### Pregunta 13
Aunque las licencias de Software Libre y de Fuente Abierta (Open Source) comparten la apertura del código fuente, ¿qué restricción específica pueden incluir algunas licencias de Fuente Abierta respecto a la modificación?

<details class="quiz-option correct">
  <summary>A) Pueden exigir modificar el nombre del programa o la versión si el código fuente original ha sido alterado.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las licencias de Fuente Abierta (Open Source) garantizan el acceso al código, pero algunas cláusulas protegen la integridad del nombre original del autor exigiendo que, si se modifica el código, el software resultante deba redistribuirse bajo un nombre o número de versión diferente.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Prohíben ejecutar la aplicación con fines lucrativos o comerciales en empresas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Tanto el Software Libre como la Fuente Abierta permiten el uso comercial del software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Obligan a pagar una regalía al creador original por cada copia modificada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna de estas licencias exige pagos de regalías por modificaciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Exigen que la instalación del programa se ejecute exclusivamente en sistemas MS-DOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No imponen limitaciones de sistema operativo de esa naturaleza.
  </div>
</details>

---

### Pregunta 14
Para mantener la seguridad del sistema operativo y aplicar parches contra vulnerabilidades, ¿qué servicios integrados se encargan de gestionar e instalar actualizaciones en Windows y macOS respectivamente?

<details class="quiz-option incorrect">
  <summary>A) Everest! en Windows y Aida64 en macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Everest! y Aida64 son programas de auditoría de hardware y software, no de actualización de S.O.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Windows Update en Windows y App Store en macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el sistema operativo Microsoft Windows, el servicio nativo encargado del mantenimiento y actualización es Windows Update. En Apple macOS, el canal oficial para la distribución y actualización de componentes del sistema es la App Store.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Panel de Control en Windows y Finder en macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Panel de Control es una interfaz de configuración en Windows y Finder es el gestor de archivos en macOS.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Terminal en Windows y Safari en macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Terminal es el interprete de comandos y Safari es el navegador web nativo de macOS.
  </div>
</details>

---

### Pregunta 15
Se adquiere un disco duro secundario para almacenamiento con una capacidad nominal de 1 TB. ¿A cuántos bytes de información equivale esta capacidad en el sistema decimal?

<details class="quiz-option incorrect">
  <summary>A) $10^6$ bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10^6$ bytes equivale a 1 Megabyte ($\text{MB}$).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) $10^9$ bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10^9$ bytes equivale a 1 Gigabyte ($\text{GB}$).
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) $10^{12}$ bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En la escala del sistema decimal de unidades de almacenamiento informático: 1 Kilobyte ($\text{KB}$) = $10^3$ bytes, 1 Megabyte ($\text{MB}$) = $10^6$ bytes, 1 Gigabyte ($\text{GB}$) = $10^9$ bytes y 1 Terabyte ($\text{TB}$) = $10^{12}$ bytes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) $10^{15}$ bytes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    $10^{15}$ bytes equivale a 1 Petabyte ($\text{PB}$).
  </div>
</details>

---

### Pregunta 16
Un usuario intenta instalar un programa de edición gráfica en su equipo corporativo, pero el sistema bloquea la operación solicitando credenciales especiales. ¿Qué perfil de usuario se requiere para instalar software en el equipo?

<details class="quiz-option incorrect">
  <summary>A) Usuario Local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Usuario Local posee permisos restringidos para evitar modificaciones críticas de la configuración o la instalación de software no autorizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Usuario Invitado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El perfil Invitado no tiene privilegios de configuración ni de instalación de software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Usuario Estándar de Red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los usuarios estándar carecen de permisos de elevación (UAC) para la instalación de programas a nivel de sistema.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Usuario Administrador.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El perfil de Usuario Administrador posee el control total del sistema operativo, disponiendo de los privilegios necesarios para modificar configuraciones críticas, otorgar permisos y ejecutar procesos de instalación o desinstalación de programas.
  </div>
</details>

---

### Pregunta 17
Un sistema informático se define como el conjunto de elementos interrelacionados para procesar información. ¿Cuáles son los tres pilares fundamentales que constituyen la estructura de todo sistema informático?

<details class="quiz-option correct">
  <summary>A) Hardware, Software y Usuarios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Todo sistema informático se compone de tres pilares interconectados: el Hardware (componentes físicos), el Software (componentes lógicos y programas) y los Usuarios (personal técnico u operativo que opera los sistemas).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) CPU, RAM y Disco Duro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    CPU, RAM y Disco Duro son solo tres componentes que forman parte del bloque del Hardware.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Windows, Linux y macOS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Corresponden a tres marcas o distribuciones concretas del bloque de Software de Sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Entradas, Salidas y Procesos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Representan las fases funcionales del procesamiento de datos, no la estructura de pilares del sistema.
  </div>
</details>

---

### Pregunta 18
Una Pyme contrata el alojamiento web, el registro de su dominio y la administración de sus bases de datos con tres proveedores independientes. ¿Qué estructura de servicios informáticos representa este modelo?

<details class="quiz-option incorrect">
  <summary>A) Estructura centralizada en la nube.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una estructura centralizada unifica los servicios bajo una única plataforma o proveedor con administración integrada.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Estructura descentralizada de servicios.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una estructura descentralizada de servicios informáticos es aquella en la que la empresa gestiona sus recursos tecnológicos (alojamiento, dominios, bases de datos) contratando plataformas y proveedores independientes en lugar de unificar la gestión en un único panel corporativo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Estructura de software libre en red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No depende del tipo de licencia de software (libre/privado), sino del modelo de arquitectura de contratación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Estructura de monopolio de proveedor único.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Al haber tres proveedores distintos se descarta el monopolio de proveedor único.
  </div>
</details>

---

### Pregunta 19
Un desarrollador libera un paquete ofimático declarando expresamente que la obra queda en "Dominio Público". ¿Qué implica legalmente esta condición sobre los derechos de autor y las restricciones de uso?

<details class="quiz-option incorrect">
  <summary>A) Conserva los derechos patrimoniales pero permite la prueba gratuita durante 30 días.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta descripción corresponde al modelo Shareware, no al Dominio Público.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Exige mantener la licencia GPL y distribuir el código fuente modificado obligatoriamente.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La exigencia de mantener la GPL y distribuir el código fuente modificado corresponde al Copyleft.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Carece de derechos de autor, permitiendo su uso, modificación y comercialización sin ningún tipo de restricción ni pago.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El software en Dominio Público es aquel que carece de derechos de autor (por renuncia expresa o vencimiento legal). Puede ser utilizado, copiado, modificado, redistribuido y comercializado libremente sin pago de licencias ni restricciones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Restringe su uso exclusivamente a centros educativos e instituciones públicas sin ánimo de lucro.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Esta condición aplica a las licencias de tipo Educativo o Institucional.
  </div>
</details>

---

### Pregunta 20
Antes de instalar un paquete ofimático, un técnico debe verificar si la memoria RAM y el procesador del equipo cumplen con los requisitos mínimos del sistema. ¿Desde qué ruta nativa de Windows se consulta directamente esta información?

<details class="quiz-option incorrect">
  <summary>A) Administrador de Tareas > Pestaña Inicio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La pestaña Inicio del Administrador de Tareas gestiona los programas que se ejecutan al arrancar el S.O., no la información general del sistema.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Explorador de Archivos > Opciones de Carpeta.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Gestiona la visibilidad de archivos ocultos y extensiones en el sistema de archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Centro de Redes y Recursos Compartidos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Configura los adaptadores de red, direcciones IP y conexiones de red local o Internet.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Equipo > Propiedades o Panel de Control > Sistema.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el sistema operativo Windows, la información general del hardware (modelo de procesador, frecuencia en GHz, memoria RAM instalada y arquitectura del sistema de 32 o 64 bits) se consulta directamente en Equipo > Propiedades o a través del enlace Panel de Control > Sistema.
  </div>
</details>
