# Test de Autoevaluación: Tema 3

[← Volver al Tema 3: Cloud y sistemas conectados](../tema-3.md)

---

### Pregunta 1
Al analizar la infraestructura tecnológica de una corporación, un arquitecto de sistemas explica que los servidores utilizados para la computación en la nube difieren de los servidores físicos tradicionales. ¿Cuál es la característica técnica principal de los servidores de cloud computing según el temario?

<details class="quiz-option correct">
  <summary>A) Son predominantemente virtuales, gestionados por proveedores de servicios externos y accesibles de forma remota a través de red.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El manual precisa que, a diferencia de los servidores físicos tradicionales ubicados en instalaciones locales, los servidores en la nube son mayoritariamente virtuales, están gestionados por proveedores de servicios especializados y se accede a ellos de forma remota a través de Internet.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Son obligatoriamente locales, ubicados en las instalaciones del cliente y alimentados exclusivamente por energía fotovoltaica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La localización local y física es propia de los servidores tradicionales, mientras que el modelo cloud elimina la dependencia del servidor local.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Son dispositivos mecánicos analógicos que no requieren direcciones IP ni navegadores web para transmitir información.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los servidores de la nube son sistemas digitales avanzados que requieren direcciones IP o web para el protocolo de transmisión.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Son discos de cinta magnética situados en el borde de la red (edge) sin capacidad de procesamiento de software.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Confunde las cintas magnéticas antiguas con los servidores virtuales e introduce erróneamente el concepto de edge.
  </div>
</details>

---

### Pregunta 2
Durante una solicitud web cotidiana (como la consulta de correo electrónico en Gmail), ¿cuál es el orden secuencial del protocolo básico de funcionamiento en la nube descrito en el manual?

<details class="quiz-option incorrect">
  <summary>A) El servidor remoto ejecuta una copia de seguridad en cinta; la red envía un paquete analógico; el usuario enciende un microcontrolador local.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Altera los elementos y menciona paquetes analógicos y cintas, ajenos al protocolo de respuesta web en tiempo real.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) El usuario utiliza un dispositivo para conectarse a Internet; el proveedor lleva los datos al servidor de destino mediante dirección IP/web; el servidor procesa los datos y devuelve una respuesta.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El protocolo básico de funcionamiento en cloud computing sigue 3 pasos: 1) El usuario realiza una solicitud desde su dispositivo; 2) El proveedor de Internet canaliza los datos hacia el servidor de destino usando una dirección IP o web; 3) El servidor procesa la información y devuelve la respuesta a la pantalla del usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) El actuador físico modifica la válvula; el software de RPA genera un informe; la nube privada cierra la conexión a Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla componentes de ejecución física de Sistemas Ciberfísicos (actuadores) y RPA, sin describir la secuencia de la nube.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) La base de datos NoSQL traduce la solicitud a lenguaje ensamblador; la red local destruye la dirección IP; el usuario recibe una confirmación impresa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Enunciado ficticio formulado con jerga técnica incoherente para actuar como distractor.
  </div>
</details>

---

### Pregunta 3
Un departamento de TI decide contratar un servicio en la nube en el que el proveedor le proporciona almacenamiento masivo, potencia de cálculo de procesadores y recursos de red virtualizados, manteniendo el cliente el control total sobre los sistemas operativos y aplicaciones. ¿A qué nivel de servicio pertenece esta contratación y qué empresas son citadas como líderes en el manual?

<details class="quiz-option incorrect">
  <summary>A) Software como Servicio (SaaS); representado por Salesforce, Mailchimp y Moodle.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    SaaS ofrece aplicaciones de usuario final bajo suscripción, no la infraestructura básica de redes y servidores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Plataforma como Servicio (PaaS); representada por Heroku, Google App Engine y Android Studio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PaaS se sitúa en el nivel intermedio entregando entornos de desarrollo y bases de datos para programadores, no el control directo de la infraestructura física virtualizada.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Infraestructura como Servicio (IaaS); representada por Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El nivel IaaS (Infraestructura como Servicio) es el nivel más alto de infraestructura; ofrece servidores virtuales, redes y almacenamiento bajo el modelo de pago por uso. Los proveedores principales destacados en el texto son AWS, GCP y Microsoft Azure.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Tecnología como Servicio (TaaS); representada por MongoDB, Redis y Cassandra.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    TaaS es una sigla inexistente en la clasificación del temario y las empresas citadas son bases de datos NoSQL.
  </div>
</details>

---

### Pregunta 4
Un equipo de desarrolladores de software necesita probar y desplegar una nueva aplicación web sin asumir la gestión, configuración o mantenimiento de los servidores subyacentes ni de la red. ¿Qué nivel de servicio de cloud computing deben contratar según la clasificación del temario?

<details class="quiz-option incorrect">
  <summary>A) IaaS (Infrastructure as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IaaS requiere que el usuario administre y configure los sistemas operativos y capas superiores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) CaaS (Containers as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Acrónimo de contenedorización que no figura como la categoría de servicio intermedia del manual.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) BaaS (Backend as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Término específico de servicios de backend que no constituye la definición general de PaaS en el temario.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) PaaS (Platform as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El nivel PaaS (Plataforma como Servicio) corresponde al nivel intermedio de servicios cloud. Proporciona a los desarrolladores una plataforma completa que incluye entornos de desarrollo, herramientas de bases de datos y middleware, permitiéndoles crear y desplegar aplicaciones sin gestionar la infraestructura subyacente.
  </div>
</details>

---

### Pregunta 5
¿A qué nivel de prestación de servicios pertenecen aplicaciones empresariales como Google Workspace (antes G Suite), Microsoft Office 365 y Salesforce, donde el usuario accede directamente al software completo mediante suscripción a través de Internet?

<details class="quiz-option correct">
  <summary>A) SaaS (Software as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El nivel SaaS (Software como Servicio) entrega al usuario final programas informáticos y aplicaciones completamente desarrollados listos para su uso bajo suscripción, siendo Google Workspace, Office 365 y Salesforce los ejemplos paradigmáticos del texto.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) IaaS (Infrastructure as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    IaaS proporciona hardware virtualizado (servidores, red), no aplicaciones comerciales terminadas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) PaaS (Platform as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    PaaS está orientado a entornos de desarrollo para programadores, no a suites de ofimática o CRM de usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) DaaS (Data as a Service).</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Término ajeno a los tres niveles principales de cloud computing establecidos en el libro (IaaS, PaaS, SaaS).
  </div>
</details>

---

### Pregunta 6
Una entidad bancaria maneja datos financieros de alta confidencialidad que no pueden compartirse en infraestructuras públicas, pero desea utilizar aplicaciones analíticas de una nube pública para picos estacionales de tráfico. ¿Qué modelo de despliegue cloud debe adoptar para combinar ambas necesidades?

<details class="quiz-option incorrect">
  <summary>A) Nube privada exclusiva de acceso analógico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una nube puramente privada no permitiría aprovechar la escalabilidad de la nube pública para los picos estacionales.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Nube híbrida.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La nube híbrida es el modelo de despliegue que combina e interconecta infraestructuras de nube pública y nube privada, permitiendo compartir datos y servicios entre ambas en función de los requerimientos de seguridad, privacidad o rendimiento.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Nube pública monolítica sin cifrado.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La nube pública pura obligaría a alojar los datos confidenciales bancarios en servidores compartidos abiertos al público general.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Nube comunitaria no estructurada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Categoría que no corresponde a la clasificación de despliegue del manual (pública, privada, híbrida).
  </div>
</details>

---

### Pregunta 7
En las posibilidades del trabajo en la nube para almacenamiento de archivos y bases de datos relacionales administradas, ¿cuáles son los servicios equivalentes ofrecidos por los proveedores Amazon Web Services y Google Cloud señalados en el texto?

<details class="quiz-option incorrect">
  <summary>A) Amazon EC2 y Google Compute Engine.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son los servicios de máquinas virtuales (IaaS), no de almacenamiento estático o bases de datos relacionales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) AWS Lambda y Google Cloud Functions.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son los servicios de computación sin servidor (serverless), no de almacenamiento.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Amazon S3 / Amazon RDS y Google Cloud Storage / Google Cloud SQL.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para almacenamiento de archivos, el manual destaca Amazon S3 y Google Cloud Storage; para bases de datos relacionales administradas, cita Amazon RDS y Google Cloud SQL.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) AWS Shield y Google Cloud Security.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son las herramientas específicas de seguridad y protección contra ataques DDoS.
  </div>
</details>

---

### Pregunta 8
Dentro del desarrollo de software en la nube, ¿qué concepto define la ejecución de código en la nube sin necesidad de gestionar o aprovisionar servidores físicos o virtuales, y qué herramienta de Amazon se cita como ejemplo?

<details class="quiz-option incorrect">
  <summary>A) Desarrollo por microcontroladores de cobots; mediante AWS Shield.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcló cobótica industrial con AWS Shield (herramienta de ciberseguridad).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Contenedorización NoSQL; mediante Amazon EC2.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Amazon EC2 es un servicio de máquinas virtuales tradicionales que requiere gestión del entorno, no un modelo serverless.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Almacenamiento distribuido en memoria RAM; mediante Amazon Redshift.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Amazon Redshift es un sistema de almacenamiento NoSQL en columnas para Business Intelligence, no un entorno serverless de ejecución de código.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Computación sin servidor (serverless); mediante AWS Lambda.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La computación sin servidor (serverless) permite a los desarrolladores ejecutar código y construir aplicaciones sin tener que administrar servidores, escalando automáticamente. El manual cita AWS Lambda (junto a Google Cloud Functions y Azure Functions) como solución de referencia.
  </div>
</details>

---

### Pregunta 9
Un equipo de ingeniería de software implementa herramientas para automatizar el flujo de trabajo de integración y despliegue continuos (CI/CD). ¿Qué soluciones tecnológicas son destacadas en el manual para este cometido?

<details class="quiz-option correct">
  <summary>A) Jenkins, GitHub Actions y GitLab CI.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para la automatización de flujos de trabajo de desarrollo mediante CI/CD (Integración Continua / Despliegue Continuo), el texto cita explícitamente a Jenkins, GitHub Actions y GitLab CI.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Moodle, Canvas y Blackboard.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son Sistemas de Gestión del Aprendizaje (LMS) utilizados en educación.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Salesforce, HubSpot y Zoho CRM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son herramientas de Gestión de Relaciones con Clientes (CRM).
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) SAP, Oracle ERP y Microsoft Dynamics.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son sistemas de Planificación de Recursos Empresariales (ERP).
  </div>
</details>

---

### Pregunta 10
El concepto de Business Intelligence (BI) se define en el manual como la transformación de datos brutos en información valiosa. ¿Cuál es el objetivo estratégico final de la aplicación del BI en las organizaciones?

<details class="quiz-option incorrect">
  <summary>A) Reducir la velocidad de conexión de los routers locales a menos de 1 Gbps.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El BI no busca limitar las velocidades de red.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Mejorar y facilitar el proceso de toma de decisiones empresariales basadas en evidencias.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El término Business Intelligence (BI) se refiere a las tecnologías y estrategias que transforman los datos de la compañía (sobre clientes, proveedores, mercado) en información valiosa para optimizar y acelerar la toma de decisiones.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Eliminar la necesidad de utilizar bases de datos en la nube o servidores virtuales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El BI se apoya intensivamente en la capacidad de procesamiento de las bases de datos en la nube.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sustituir la inteligencia artificial por sistemas de archivo en soporte físico de papel.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un contrasentido opuesto al proceso de digitalización empresarial.
  </div>
</details>

---

### Pregunta 11
Para el modelado y entrenamiento de algoritmos avanzados de Inteligencia Artificial y Machine Learning, ¿qué plataformas cloud específicas menciona el manual?

<details class="quiz-option incorrect">
  <summary>A) AWS Shield, Google Cloud Security y Azure Security Center.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son soluciones de seguridad y protección en la nube.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Heroku, Google App Engine y Salesforce.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son plataformas PaaS de desarrollo general y SaaS de CRM.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Google AI Platform, AWS SageMaker y Azure Machine Learning.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El manual cita específicamente a Google AI Platform, AWS SageMaker y Azure Machine Learning como los entornos cloud destinados al modelado y entrenamiento de modelos de IA y ML.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Firebase, IBM Watson y Slack.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mezcla Firebase (backend móvil) y Slack (comunicación) con IBM Watson.
  </div>
</details>

---

### Pregunta 12
Una empresa startup desarrolla una aplicación móvil de entrega a domicilio y necesita gestionar el backend (autenticación de usuarios, bases de datos en tiempo real y notificaciones push) sin infraestructura propia. ¿Qué plataforma cloud de Google destaca el manual para este uso?

<details class="quiz-option incorrect">
  <summary>A) Google Compute Engine.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un servicio de máquinas virtuales IaaS generalista.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Google Cloud SQL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un servicio de bases de datos relacionales, no una suite integrada de backend móvil.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Google Workspace.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es la suite de productividad de software ofimático (SaaS).
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Firebase.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El manual señala a Firebase de Google como el servicio de referencia para gestionar el backend de aplicaciones móviles, incluyendo funciones de autenticación, bases de datos en tiempo real y envío de notificaciones push.
  </div>
</details>

---

### Pregunta 13
En la gestión de infraestructuras cloud, ¿cuáles son los servicios de Máquinas Virtuales (VM) ofrecidos por Amazon, Google y Microsoft listados en el temario?

<details class="quiz-option correct">
  <summary>A) Amazon EC2, Google Compute Engine y Azure Virtual Machines.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los servicios de creación y gestión de máquinas virtuales en la nube destacados son Amazon EC2, Google Compute Engine y Azure Virtual Machines.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Amazon S3, Google Cloud Storage y Azure Blob Storage.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son servicios de almacenamiento de objetos/archivos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Amazon RDS, Google Cloud SQL y Azure SQL Database.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son servicios de bases de datos relacionales administradas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) AWS Lambda, Google Cloud Functions y Azure Functions.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son servicios de computación sin servidor (serverless).
  </div>
</details>

---

### Pregunta 14
En el ámbito de las herramientas empresariales en la nube, ¿cuáles son los servicios destinados específicamente a la protección contra ataques cibernéticos (como cortafuegos y prevención de intrusiones) indicados en el manual?

<details class="quiz-option incorrect">
  <summary>A) AWS Media Services, Google Cloud Media y Azure Media.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son servicios para transmisión de streaming y contenidos multimedia.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) AWS Shield, Google Cloud Security y Azure Security Center.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Para la protección de infraestructuras empresariales mediante servicios de seguridad (cortafuegos, cifrado, detección de amenazas), el manual cita AWS Shield, Google Cloud Security y Azure Security Center.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) AWS Backup, Google Cloud Storage y Azure Backup.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son soluciones de copias de seguridad y recuperación ante desastres.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) AWS IoT, Google Cloud IoT Core y Azure IoT Hub.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Son plataformas de gestión e interconexión de dispositivos IoT.
  </div>
</details>

---

### Pregunta 15
Para garantizar la transmisión rápida y eficiente de contenidos multimedia en alta definición sin interrupciones a usuarios de todo el mundo, ¿qué arquitectura tecnológica basada en la nube se utiliza?

<details class="quiz-option incorrect">
  <summary>A) Redes de almacenamiento distribuido en cintas analógicas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cintas analógicas son incompatibles con el streaming digital en tiempo real.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Servidores locales de una sola vía sin conexión a Internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Un servidor local aislado no puede dar cobertura global a usuarios remotos.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Redes de Distribución de Contenido (CDN) y servicios de streaming como AWS Media Services.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La transmisión masiva de audio y vídeo en streaming se apoya en Redes de Distribución de Contenido (CDN) y servicios especializados como AWS Media Services, que distribuyen el contenido desde servidores cercanos al usuario.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Sistemas NoSQL orientados a grafos sin ancho de banda.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las bases de datos en grafo (Neo4j) gestionan redes de relaciones, no la distribución de vídeo.
  </div>
</details>

---

### Pregunta 16
¿Cómo se define el concepto de «Edge Computing» y cuál es la variable técnica clave que logra reducir de forma drástica frente al Cloud Computing tradicional?

<details class="quiz-option incorrect">
  <summary>A) Es la centralización de datos en un único servidor; reduciendo el volumen de memoria RAM.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Edge es un modelo descentralizado, no centralizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es la eliminación de los sensores industriales; reduciendo la velocidad de transmisión a cero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Edge requiere sensores para capturar datos en tiempo real.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es la ejecución de programas en cintas magnéticas; reduciendo el coste de la energía hidráulica.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Enunciado ficticio sin rigor técnico.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Es el procesamiento de datos realizado en puntos muy cercanos a la fuente u origen; reduciendo el tiempo de respuesta o latencia.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Edge Computing (Computación en el Borde) procesa la información cerca de donde se genera (en el propio dispositivo o pasarela). Esto incrementa la velocidad y disminuye drásticamente la latencia (el tiempo que tarda la información en ir al servidor y volver).
  </div>
</details>

---

### Pregunta 17
En la relación entre el Edge Computing y el Cloud Computing, el manual enfatiza que ambas tecnologías no se excluyen. ¿Cómo se caracteriza su relación operativa y qué tareas se asignan a cada una?

<details class="quiz-option correct">
  <summary>A) Es una relación complementaria y sinérgica; la nube se utiliza para almacenamiento a largo plazo y procesamiento intensivo, mientras que el edge se utiliza para respuestas rápidas en tiempo real.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El manual establece que la relación entre Edge y Cloud es complementaria y sinérgica: la nube asume el procesamiento intensivo, gran volumen de datos y análisis a largo plazo, mientras que el edge asume la analítica inmediata en tiempo real y baja latencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es una relación antagónica; el edge destruye los servidores de la nube pública para evitar el uso de direcciones IP.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El edge no destruye la nube, sino que se apoya en ella para tareas complejas.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es una relación jerárquica obsoleta; el edge computing solo funciona cuando la nube está apagada por mantenimiento.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ambas arquitecturas operan simultáneamente en ecosistemas conectados.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es una relación idéntica; ambos modelos procesan los datos en el mismo centro de datos remoto.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Procesan los datos en ubicaciones distintas (Edge en el borde local; Cloud en centros remotos).
  </div>
</details>

---

### Pregunta 18
¿Qué ventaja específica en materia de ciberseguridad aporta la arquitectura de Edge Computing frente a la concentración de datos en un único servidor centralizado?

<details class="quiz-option incorrect">
  <summary>A) Elimina la necesidad de utilizar contraseñas o cifrado en la red.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La ciberseguridad en el edge sigue requiriendo cifrado y controles de acceso.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Al estar la información diversificada y repartida en múltiples dispositivos locales, se minimizan los daños de un posible ciberataque.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al estar la información distribuida en múltiples nodos y dispositivos locales en el borde (edge), la superficie de impacto se fragmenta, de modo que un ciberataque a un nodo no compromete la totalidad del sistema centralizado.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Garantiza que los hackers no puedan acceder a ningún dispositivo físico.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ninguna tecnología garantiza la imposibilidad absoluta de acceso físico o ataque, pero sí mitiga el alcance del daño.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Desconecta automáticamente las antenas 5G en caso de detectar datos no estructurados.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Acción ficticia e incoherente con el estándar 5G.
  </div>
</details>

---

### Pregunta 19
En el entorno de las fábricas inteligentes, ¿qué aplicación crítica del Edge Computing destaca el manual para garantizar la seguridad de los trabajadores?

<details class="quiz-option incorrect">
  <summary>A) La impresión 3D de maquetas de plástico para la oficina de administración.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La fabricación aditiva de prototipos no es la aplicación de seguridad en tiempo real en planta.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) La gestión de nóminas y contratos mediante software SaaS.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La gestión de nóminas (HRMS) es una función administrativa, no un control crítico de seguridad física.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) La interacción fluida y en tiempo real entre cobots (robots colaborativos) y humanos, previniendo accidentes laborales.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    En las fábricas inteligentes, la baja latencia del Edge Computing permite que los cobots procesen los datos de sus sensores en milisegundos, reaccionando de inmediato ante la presencia de un trabajador para evitar colisiones y accidentes.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) El envío masivo de correos de marketing mediante Mailchimp.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Mailchimp es una herramienta de automatización de marketing.
  </div>
</details>

---

### Pregunta 20
Al analizar la arquitectura de Fog Computing (Computación en la Niebla), ¿cómo se define este modelo y cuál es su diferencia organizativa frente al Edge Computing según la tabla comparativa del manual?

<details class="quiz-option incorrect">
  <summary>A) Es una tecnología centralizada ubicada en un único servidor de un país extranjero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Fog es una arquitectura descentralizada y no centralizada.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es un tipo de memoria RAM que solo funciona en smartphones de consumo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No es un tipo de memoria de teléfono, sino una infraestructura de red industrial.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un sistema que elimina los procesadores intermedios para depender únicamente de la nube pública.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El Fog introduce precisamente nodos intermedios de computación.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Es una arquitectura descentralizada que distribuye datos, aplicaciones y comunicaciones en nodos situados entre la fuente de datos y la nube, permitiendo procesar datos combinando múltiples fuentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Fog Computing es una arquitectura distribuida que actúa como capa intermedia entre los dispositivos finales (fuente) y la nube. A diferencia del Edge (que procesa en el propio dispositivo), el Fog permite evaluar y combinar datos procedentes de múltiples fuentes heterogéneas.
  </div>
</details>

---

### Pregunta 21
¿Qué es el «Mist Computing» (o Edge Intelligence) y en qué tipo de dispositivos y aplicaciones se centra su ejecución según el temario?

<details class="quiz-option correct">
  <summary>A) Es una extensión del Fog Computing centrada en la ejecución de algoritmos de IA y Machine Learning directamente en los propios dispositivos finales o microcontroladores.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El Mist Computing (o Edge Intelligence) lleva el procesamiento al extremo más remoto, ejecutando algoritmos de Inteligencia Artificial y Aprendizaje Automático directamente en los microcontroladores y sensores de los dispositivos finales.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Es un software de gestión de almacenes basado en papel para la economía lineal.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Concepto analógico opuesto a la inteligencia en el extremo.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Es un servicio de almacenamiento masivo de vídeo en HD ubicado en centros de datos remotos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe las funciones de una CDN o almacenamiento cloud masivo, no la inteligencia en microcontroladores.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Es un protocolo de red de telefonía 2G sin capacidad de cómputo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Categoría obsoleta de red móvil sin relación con el Mist Computing.
  </div>
</details>

---

### Pregunta 22
A pesar de sus ventajas para entornos aislados, ¿cuál es el inconveniente técnico principal de los dispositivos de Mist Computing señalado en la matriz comparativa?

<details class="quiz-option incorrect">
  <summary>A) Tienen un consumo de energía mil veces superior a un centro de datos entero.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los microcontroladores del Mist Computing son de muy bajo consumo.
  </div>
</details>

<details class="quiz-option correct">
  <summary>B) Suelen contar con recursos de procesamiento y memoria extremadamente limitados, lo que restringe la complejidad de las tareas que pueden ejecutar.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El manual indica que la principal limitación del Mist Computing reside en que los dispositivos finales (sensores, microchips) poseen recursos de memoria y computación reducidos, lo que impide ejecutar modelos de IA sumamente complejos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Exigen la instalación obligatoria de cables de fibra óptica hasta cada sensor.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Suelen utilizar conexiones inalámbricas o de baja potencia.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) No pueden funcionar sin estar conectados permanentemente a una nube privada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una de las virtudes del Mist es operar precisamente en entornos con conectividad intermitente a la nube.
  </div>
</details>

---

### Pregunta 23
Entre las ventajas generales del uso de recursos en la nube para las empresas, ¿qué garantías ofrece en relación con la ciberseguridad y la continuidad de negocio?

<details class="quiz-option incorrect">
  <summary>A) Elimina la necesidad de realizar copias de seguridad al destruir los datos tras cada jornada.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La nube automatiza los backups, no destruye la información.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Garantiza que no se requerirán actualizaciones de software durante 50 años.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una de las ventajas es precisamente la actualización automática y frecuente de parches de seguridad.
  </div>
</details>

<details class="quiz-option correct">
  <summary>C) Ofrece medidas avanzadas como cifrado, autenticación multifactor (MFA), monitorización continua y sistemas automáticos de respaldo y recuperación ante desastres (Disaster Recovery).</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Entre los beneficios clave de la nube destacan la seguridad avanzada (cifrado, MFA, monitorización en tiempo real) y los servicios de respaldo y recuperación automática de datos, asegurando la continuidad del negocio tras fallos.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>D) Traslada la responsabilidad legal de los delitos a los usuarios finales sin posibilidad de recuperación de archivos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Afirmación falsa que contradice los acuerdos de nivel de servicio (SLA) de los proveedores cloud.
  </div>
</details>

---

### Pregunta 24
Desde el punto de vista de la rentabilidad financiera y la gestión de costes, ¿cómo transforma la computación en la nube la estructura de gasto de TI de una empresa?

<details class="quiz-option incorrect">
  <summary>A) Obliga a realizar masivas inversiones iniciales de capital (CapEx) en la compra de servidores físicos locales.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe el modelo tradicional de compra física que la nube precisamente elimina.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>B) Aumenta los costes fijos de electricidad y mantenimiento de salas de servidores en la sede corporativa.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La eliminación de servidores locales reduce los gastos de climatización y energía en la sede.
  </div>
</details>

<details class="quiz-option incorrect">
  <summary>C) Prohíbe la modificación de la capacidad contratada durante un periodo mínimo de diez años.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La nube destaca por su flexibilidad e inmediatez para escalar o reducir capacidad en cualquier momento.
  </div>
</details>

<details class="quiz-option correct">
  <summary>D) Elimina la necesidad de adquirir infraestructura física costosa, convirtiendo la inversión en un gasto operativo (OpEx) flexible basado en el pago por uso y la escalabilidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La nube sustituye las grandes inversiones de capital en hardware local (CapEx) por un gasto operativo (OpEx) bajo el modelo de pago por uso. Esto permite a las empresas escalar sus recursos según la demanda sin mantener servidores infrautilizados.
  </div>
</details>
