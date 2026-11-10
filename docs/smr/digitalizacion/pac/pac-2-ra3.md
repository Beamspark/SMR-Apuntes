[← Volver al Índice de PACs](./index.md)

---

# PAC 2 (RA3) - Cloud y Sistemas Conectados II

---

### Pregunta 1
Una empresa utiliza una aplicación de contabilidad desde el navegador y paga una cuota mensual. No instala el programa ni administra los servidores donde se ejecuta. ¿Qué modelo de servicio está utilizando?

<details class="quiz-option correct">
  <summary>A) Software como servicio (SaaS).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el modelo <strong>SaaS</strong> (*Software as a Service*), el proveedor aloja la aplicación en sus servidores, gestiona el mantenimiento, la seguridad y las actualizaciones, y el usuario final accede al servicio a través de un navegador web bajo una suscripción periódica.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Plataforma como servicio (PaaS).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PaaS proporciona entornos de desarrollo y ejecución gestionados para programadores, no una aplicación contable final empaquetada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Infraestructura como servicio (IaaS).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IaaS ofrece recursos brutos de hardware virtualizado (máquinas virtuales, almacenamiento y redes) que el cliente debe configurar y mantener.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Nube privada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La nube privada es un modelo de despliegue según el aislamiento del entorno, no un modelo de servicio de software aplicativo.
  </div>
</details>

---

### Pregunta 2
Una organización mantiene sus datos confidenciales en servidores internos, pero utiliza una nube pública cuando necesita aumentar temporalmente su capacidad de procesamiento. ¿Qué modelo de despliegue utiliza?

<details class="quiz-option incorrect">
  <summary>A) Nube pública.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe solo una parte de la infraestructura; no contempla los servidores locales donde residen los datos confidenciales.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Nube híbrida</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La <strong>nube híbrida</strong> combina una infraestructura privada local (para datos críticos y control estricto) con la escalabilidad y elasticidad de una nube pública para picos puntuales de demanda (*cloud bursting*).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Mist computing.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El mist computing es una arquitectura de computación periférica en el extremo de la red (sensores/microcontroladores), no un modelo de despliegue en la nube.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Nube privada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No contempla la externalización ni el uso complementario de recursos elásticos de proveedores públicos.
  </div>
</details>

---

### Pregunta 3
¿Qué sucede después de que el proveedor de internet lleva una solicitud del usuario hasta el servidor de destino?

<details class="quiz-option incorrect">
  <summary>A) El proveedor de internet sustituye al servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El proveedor de servicios de internet (ISP) actúa como medio de transmisión y enrutamiento, no como procesador de la lógica de negocio.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) El dispositivo del usuario almacena automáticamente toda la información del servidor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cliente solo recibe y procesa la porción de datos solicitada en la respuesta, no toda la base de datos del servidor.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) La conexión a internet deja de ser necesaria.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La conexión de red es indispensable para transportar el paquete de respuesta de vuelta al dispositivo cliente.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) El servidor procesa los datos y devuelve una respuesta.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En el modelo cliente-servidor estándar, tras recibir la petición (*request*) por la red, el software del servidor procesa la consulta y genera un paquete de respuesta (*response*) con el resultado solicitado.
  </div>
</details>

---

### Pregunta 4
Un equipo de programación quiere automatizar las pruebas y la publicación de una aplicación cada vez que modifica su código. ¿Qué recurso resulta más adecuado?

<details class="quiz-option incorrect">
  <summary>A) Un servicio de streaming de vídeo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Está orientado a la distribución continua de audio y vídeo, no a la integración ni despliegue de software.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Un sistema de almacenamiento de archivos multimedia.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Servicios de almacenamiento en objetos (como Amazon S3) guardan datos en reposo, pero carecen de motores para compilar o ejecutar pruebas automatizadas.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Una herramienta de integración y despliegue continuos, como GitHub Actions.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Las plataformas de **CI/CD** (*Continuous Integration / Continuous Deployment*) automatizan mediante flujos de trabajo (*pipelines*) la compilación del código, el paso de baterías de tests y el despliegue automático en los servidores de producción tras cada *push*.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Una red de distribución de contenido o CDN.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una CDN se limita a almacenar en caché contenido estático en servidores geográficamente cercanos a los usuarios.
  </div>
</details>

---

### Pregunta 5
Una aplicación móvil necesita identificar a los usuarios, enviar notificaciones y consultar una base de datos en tiempo real. ¿Qué servicio puede utilizarse para gestionar estas funciones?

<details class="quiz-option incorrect">
  <summary>A) Azure Backup</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es una solución de respaldo y recuperación ante desastres para copias de seguridad de máquinas y volúmenes de almacenamiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Amazon EC2</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Amazon EC2 suministra máquinas virtuales IaaS; no ofrece estos servicios móviles gestionados de forma lista para usar sin configuración manual.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Firebase</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    <strong>Google Firebase</strong> es una plataforma de tipo *Backend-as-a-Service* (BaaS) que integra autenticación delegada (Firebase Auth), bases de datos en tiempo real (Cloud Firestore / Realtime Database) y mensajería push (Firebase Cloud Messaging).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Microsoft Office 365</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Suite SaaS orientada a la ofimática, productividad y colaboración empresarial.
  </div>
</details>

---

### Pregunta 6
¿Cuál es la función principal de una red de distribución de contenido o CDN?

<details class="quiz-option incorrect">
  <summary>A) Crear redes internas privadas</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La creación de redes internas seguras corresponde a VPNs o infraestructuras de subred privada (VPC).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Ejecutar algoritmos de inteligencia artificial dentro de sensores</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ejecución directa en sensores físicos es propia del *mist computing* y microcontroladores Edge AI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Sustituir las copias de seguridad de una empresa</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cachés perimetrales de una CDN son volátiles y nunca reemplazan un sistema de copias de respaldo (*backups*).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Distribuir contenido multimedia de forma rápida y eficiente</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Una **CDN** (*Content Delivery Network*) reparte copias de archivos multimedia, scripts y contenido estático a lo largo de una red mundial de servidores perimetrales (*edge servers* o puntos de presencia PoP), reduciendo drásticamente la latencia y acelerando los tiempos de carga al servir los datos desde el punto geográfico más cercano al cliente.
  </div>
</details>

---

### Pregunta 7
¿Por qué el edge computing puede reducir el consumo de ancho de banda?

<details class="quiz-option incorrect">
  <summary>A) Porque aumenta la distancia entre los usuarios y los servidores</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El edge computing reduce radicalmente esa distancia acercando la computación al origen.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Porque procesa parte de los datos cerca de donde se generan y envía menos información a la nube</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al procesar, filtrar y consolidar los datos brutos en los nodos locales (*gateways* o servidores de borde), solo se transmiten a la nube los resúmenes consolidados o alertas necesarias, evitando el envío continuo de gigabytes de telemetría sin procesar a través de la red WAN.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Porque elimina todos los dispositivos conectados a internet</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No reduce ni elimina dispositivos; mejora la eficiencia del transporte de sus datos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Porque almacena obligatoriamente todos los datos durante años</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El almacenamiento a largo plazo es una característica de la nube centralizada, mientras que los nodos de borde operan con memoria y almacenamiento local más acotados.
  </div>
</details>

---

### Pregunta 8
Una empresa necesita analizar durante varios años una enorme cantidad de datos históricos mediante algoritmos complejos. ¿Dónde sería más adecuado realizar principalmente ese procesamiento?

<details class="quiz-option incorrect">
  <summary>A) En un sensor sin conexión</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un sensor aislado carece de memoria, capacidad de cálculo y acceso al repositorio global de datos históricos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) En la nube</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El análisis masivo de datos históricos (*Big Data* y minería de datos) requiere almacenamiento elástico escalable a nivel de petabytes y clústeres masivos de procesamiento en paralelo (CPU/GPU), recursos que ofrece la nube centralizada frente a las limitaciones de los dispositivos perimetrales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Exclusivamente en el dispositivo del usuario</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un equipo de usuario individual no dispone de la potencia de cálculo ni de la capacidad de almacenamiento necesarias para procesar volúmenes masivos de datos corporativos de varios años.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) En un dispositivo mist con recursos limitados</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los dispositivos de la capa mist están pensados para tareas inmediatas y ultra-específicas con muy bajo consumo de potencia.
  </div>
</details>

---

### Pregunta 9
¿Qué característica diferencia especialmente al fog computing del procesamiento realizado directamente en el dispositivo final?

<details class="quiz-option incorrect">
  <summary>A) No puede procesar datos en tiempo real.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una de las principales ventajas del *fog computing* es precisamente ofrecer latencias muy bajas para procesamiento en tiempo real.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Solo permite almacenar información en un servidor central.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El modelo fog se apoya en nodos de almacenamiento intermedios distribuidos, no en un único servidor centralizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Funciona únicamente dentro de teléfonos móviles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se despliega habitualmente en conmutadores de red gestionados, pasarelas industriales (*gateways* IoT) y servidores locales de borde.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Distribuye datos, comunicaciones y aplicaciones entre la fuente de los datos y la nube.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El **fog computing** actúa como una capa de enlace y computación distribuida intermedia que se extiende desde la red local donde están los sensores hasta el centro de datos de la nube, coordinando recursos de cómputo y enrutamiento intermedio.
  </div>
</details>

---

### Pregunta 10
Un sensor instalado en una explotación agrícola remota ejecuta un algoritmo sencillo de inteligencia artificial para decidir cuándo activar el riego, aunque la conexión a internet sea intermitente. ¿Qué modelo representa mejor este caso?

<details class="quiz-option correct">
  <summary>A) Mist computing</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Opción correcta según el temario</div>
    El **mist computing** se sitúa en el nivel más extremo de la periferia (directamente incrustado dentro de los microcontroladores y sensores con capacidad de procesamiento autónomo). Al ejecutar modelos de inferencia ligeros directamente en el chip del sensor, toma decisiones de actuación de forma completamente autónoma sin depender de una red o pasarela intermedia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Infraestructura como servicio</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IaaS implica el uso de servidores y redes virtuales en centros de datos remotos conectados a internet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Cloud computing</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El cloud computing requiere conectividad permanente a internet para enviar datos y esperar la respuesta del centro de datos remoto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Fog computing</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Marcada en el examen (Incorrecta en el test)</div>
    El <em>fog computing</em> ubica el procesamiento en dispositivos y nodos de red intermediarios (como routers, pasarelas locales o microservidores en la red local de la finca). Cuando el cómputo se ejecuta <strong>directamente en el hardware del propio sensor/nodo embebido</strong>, la taxonomía técnica lo clasifica estrictamente como <strong>mist computing</strong>.
  </div>
</details>
