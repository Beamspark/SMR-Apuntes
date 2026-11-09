[← Volver al Índice de PACs](./index.md)

---

# PAC 2 (RA4) - Mantenimiento de Equipos II

---

### Pregunta 1
La solución de una avería informática puede llevarse a cabo...

<details class="quiz-option incorrect">
  <summary>A) Por control remoto</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    El soporte remoto (mediante herramientas como AnyDesk, TeamViewer o SSH) es habitual para incidencias de software y configuración, pero no es la única vía.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Presencialmente (in situ)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    La asistencia física in situ es indispensable para averías de hardware o fallos de conectividad física, pero convive con otros canales de soporte.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Todas son correctas</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La asistencia técnica y resolución de incidencias en microinformática se articula a través de múltiples niveles de soporte: telefónico (Nivel 1 para primer triaje), remoto (Nivel 2 para resolución lógica a distancia) y presencial/in situ (imprescindible ante fallos físicos de componentes o sustitución de piezas).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Telefónicamente</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    El soporte por voz o *helpdesk* telefónico permite guiar al usuario en comprobaciones básicas (cables, reinicios, verificación de LEDs), pero no cubre la totalidad de intervenciones técnicas.
  </div>
</details>

---

### Pregunta 2
Asocia las siguientes definiciones con los términos técnicos correspondientes:

#### 2.1. Dispositivo que permite la comunicación entre diferentes redes.
<details class="quiz-option correct">
  <summary>Router</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Dispositivo de capa 3 (nivel de red en el modelo OSI) encargado de enrutar paquetes IP determinando la mejor ruta métrica entre subredes distintas.
  </div>
</details>

#### 2.2. Dispositivo que regula el flujo de corriente eléctrica en un circuito.
<details class="quiz-option correct">
  <summary>Diodo</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Componente semiconductor que permite el paso de corriente eléctrica exclusivamente en un sentido (polarización directa) y lo bloquea en sentido contrario (polarización inversa), fundamental en fuentes de alimentación como rectificador.
  </div>
</details>

#### 2.3. Parte del disco duro donde se almacena la información de forma magnética.
<details class="quiz-option correct">
  <summary>Plato</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Disco circular metálico o de vidrio recubierto por una película ferromagnética donde los cabezales leen y graban los sectores orientando los dominios magnéticos.
  </div>
</details>

#### 2.4. Programa que realiza un seguimiento de la actividad en la red.
<details class="quiz-option correct">
  <summary>Sniffer</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Analizador de protocolos de red (como Wireshark o tcpdump) que captura y decodifica las tramas que circulan por una interfaz para diagnóstico, monitorización o auditoría de tráfico.
  </div>
</details>

---

### Pregunta 3
¿Qué función tiene la pila CMOS en un ordenador?

<details class="quiz-option incorrect">
  <summary>A) Detectar errores en el sistema operativo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El diagnóstico de errores del sistema operativo corresponde a registros de sucesos (*logs*) y controladores del propio kernel, no a un componente eléctrico pasivo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Mantener la configuración más simple del equipo, aunque no tenga suministro eléctrico.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La pila de botón (habitualmente de litio CR2032 de 3V) alimenta de forma continua el circuito RTC (*Real Time Clock*) y la memoria CMOS volátil de la placa base, preservando la fecha, la hora del sistema y los parámetros esenciales de configuración de la BIOS/UEFI cuando la fuente se desconecta de la red eléctrica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Administrar la memoria RAM</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La gestión de la memoria RAM la realizan la controladora de memoria (integrada en la CPU) y el subsistema de gestión de memoria del SO.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Controlar el suministro de energía al equipo</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La regulación y entrega de energía recae sobre la fuente de alimentación (PSU) y los módulos reguladores de voltaje (VRM) de la placa base.
  </div>
</details>

---

### Pregunta 4
¿Cuáles son los fallos más comunes en los ventiladores de un ordenador?

<details class="quiz-option incorrect">
  <summary>A) Desconexión</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    La desconexión física o mal contacto del conector PWM/Molex de 3 o 4 pines es una avería común, pero no es la única.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Todas son correctas</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los ventiladores pueden fallar por problemas mecánicos debidos a acumulación de pelusa y polvo (bloqueando las aspas), desgaste del rodamiento o caída de tensión/potencia insuficiente (girando a RPMs anormalmente bajas), o por simple desconexión del cable de alimentación/sensor tacométrico en la placa base.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Obstrucción por suciedad</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    La pelusa acumulada en el eje y las aletas reduce el caudal de aire (*airflow*) y frena el giro, pero concurre junto a otros fallos habituales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Poca potencia</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción incompleta</div>
    Una señal eléctrica inestable o un fallo en la curva de control de voltaje impide que alcance las revoluciones necesarias para refrigerar el componente.
  </div>
</details>

---

### Pregunta 5
Relaciona las siguientes averías con sus posibles causas:

#### 5.1. Pantalla en negro al encender el equipo
<details class="quiz-option correct">
  <summary>Fallo en la tarjeta gráfica</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    La ausencia de señal de vídeo tras superar el POST suele estar provocada por un problema en la controladora gráfica (GPU averiada, PCIe mal asentado o falta de alimentación auxiliar PCIe).
  </div>
</details>

#### 5.2. Teclado no responde al presionar las teclas
<details class="quiz-option correct">
  <summary>Cortocircuito en la conexión del teclado</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Un cortocircuito en los pines del puerto USB/PS2 o derivación en la pista de datos bloquea el envío de señales de interrupción (*scan codes*) hacia la placa base.
  </div>
</details>

#### 5.3. Equipo se apaga repentinamente
<details class="quiz-option correct">
  <summary>Sobrecalentamiento del procesador</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Al alcanzar el límite térmico crítico ($T_j\text{ max}$), los mecanismos de protección de la CPU (PROCHOT) fuerzan el corte inmediato de energía por hardware para evitar la degradación térmica del chip.
  </div>
</details>

#### 5.4. Lectura lenta del disco duro
<details class="quiz-option correct">
  <summary>Sector defectuoso en el disco duro</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Correcto</div>
    Cuando una unidad mecánica HDD encuentra sectores defectuosos (*bad sectors*), reintenta la lectura múltiples veces mediante operaciones I/O bloqueantes antes de reasignar el bloque, desplomando la tasa de transferencia.
  </div>
</details>
