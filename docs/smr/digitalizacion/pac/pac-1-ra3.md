[← Volver al Índice de PACs](./index.md)

---

# PAC - Cloud Computing, Edge Computing e IoT

---

### Pregunta 1
¿Cuál de las siguientes afirmaciones describe correctamente el funcionamiento del cloud computing?

<details class="quiz-option correct">
  <summary>A) Los usuarios acceden a los servidores en la nube de forma remota, permitiendo el almacenamiento y procesamiento de datos desde cualquier parte del mundo.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    El modelo de computación en la nube se fundamenta en el acceso bajo demanda a través de internet a un conjunto compartido de recursos informáticos configurables (servidores, almacenamiento, aplicaciones y servicios), permitiendo operar desde cualquier ubicación y dispositivo autorizado.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Los servidores en la nube están siempre ubicados en centros de datos locales de las empresas.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los servidores de nube pública están distribuidos en centros de datos globales propiedad de proveedores de servicios en la nube (CSP como AWS, Azure o GCP), no en dependencias locales del cliente.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Solo las grandes empresas pueden utilizar servicios en la nube debido a su alto coste y complejidad.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Una de las principales ventajas de la nube es el modelo de pago por uso (<em>Pay-as-you-go</em>), lo que democratiza el acceso a infraestructura de alta gama tanto para particulares y pymes como para grandes corporaciones.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) El acceso a los servidores en la nube es limitado a dispositivos fijos como ordenadores de escritorio.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Se puede acceder desde múltiples tipos de clientes: ordenadores portátiles, teléfonos inteligentes, tabletas e incluso dispositivos IoT embebidos.
  </div>
</details>

---

### Pregunta 2
¿Cuál de las siguientes opciones describe correctamente el nivel más alto de prestación de servicios en la nube?

<details class="quiz-option correct">
  <summary>A) Infraestructura como servicio (IaaS), que ofrece servidores, redes y almacenamiento bajo demanda a través de internet.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ Opción marcada por el temario</div>
    En el criterio pedagógico de esta evaluación se considera IaaS como el nivel de mayor alcance en cuanto a capacidad bruta de infraestructura y control de hardware virtualizado (servidores físicos/virtuales, almacenamiento en bloque y configuraciones de red de bajo nivel), sobre el cual se construyen los demás niveles de servicio.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Plataforma como servicio (PaaS), que proporciona aplicaciones y software a través de suscripción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Ofrecer aplicaciones finales bajo modelo de suscripción es la definición de SaaS, no de PaaS.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Software como servicio (SaaS), que ofrece aplicaciones a los usuarios bajo suscripción.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque SaaS se sitúa en la cúspide de la pirámide en cuanto a abstracción para el usuario final, no representa la provisión de infraestructura o recursos de computación base.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Plataforma como servicio (PaaS), que permite a los desarrolladores crear y desplegar aplicaciones sin gestionar la infraestructura.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque describe correctamente la función de PaaS (entorno gestionado para desarrollo), el enunciado clasifica IaaS como el servicio base de provisión directa de recursos de infraestructura pura.
  </div>
</details>

---

### Pregunta 3
¿Cuál de las siguientes es una de las principales ventajas del uso de bases de datos en la nube?

<details class="quiz-option correct">
  <summary>A) Permite gestionar bases de datos sin la necesidad de hardware propio.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Los servicios de bases de datos gestionadas (DBaaS como Amazon RDS, Azure SQL Database o Google Cloud SQL) eliminan la inversión en servidores locales (CapEx), externalizando el mantenimiento físico, las copias de seguridad automáticas y el aprovisionamiento de hardware al proveedor.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Requiere que la empresa gestione su propio hardware.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Precisamente evita la adquisición, instalación, ventilación y mantenimiento de servidores físicos propietarios en centros de datos locales.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Solo es útil para grandes corporaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La escalabilidad elástica permite que proyectos de cualquier envergadura ajusten la capacidad según sus necesidades puntuales.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) No ofrece servicios fácilmente accesibles.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Proporciona accesibilidad continua a través de endpoints seguros y consolas web de administración desde cualquier ubicación.
  </div>
</details>

---

### Pregunta 4
¿Qué servicio en la nube se utiliza para el desarrollo de aplicaciones web?

<details class="quiz-option incorrect">
  <summary>A) Heroku.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Opción no contemplada en el test</div>
    Aunque Heroku es una plataforma PaaS muy popular para desplegar código web, el banco de preguntas oficial del curso establece <strong>AWS Elastic Beanstalk</strong> como la respuesta de referencia del catálogo de servicios en la nube.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) AWS Lambda.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    AWS Lambda es un servicio de computación sin servidor (<em>Serverless / FaaS</em>) orientado a ejecutar funciones activadas por eventos, no una plataforma integral para el ciclo completo de empaquetado y despliegue de servidores de aplicaciones web completas.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Google Cloud SQL.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Es un servicio enfocado exclusivamente en bases de datos relacionales gestionadas (MySQL, PostgreSQL, SQL Server), no en la ejecución del código de la aplicación web.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) AWS Elastic Beanstalk.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    <strong>AWS Elastic Beanstalk</strong> es una plataforma PaaS diseñada específicamente para desplegar y escalar aplicaciones y servicios web (Java, .NET, PHP, Node.js, Python, Ruby, Go o Docker). El desarrollador solo sube el código y el servicio automatiza el aprovisionamiento, balanceo de carga, escalado automático y monitorización.
  </div>
</details>

---

### Pregunta 5
¿Cuál es el papel de la nube en las aplicaciones de IoT (Internet de las cosas) como la domótica?

<details class="quiz-option incorrect">
  <summary>A) Elimina la necesidad de dispositivos inteligentes en el hogar.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Los dispositivos periféricos físicos (sensores, bombillas inteligentes, termostatos) siguen siendo indispensables para medir magnitudes y actuar sobre el entorno.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Permite conectar los dispositivos IoT sin necesidad de procesar datos.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Sin el procesamiento, almacenamiento y análisis de telemetría, los dispositivos no tendrían capacidad de automatización ni toma de decisiones inteligentes.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Facilita el control manual de los dispositivos IoT desde solo una ubicación.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    La computación en la nube permite el control ubicuo y deslocalizado desde cualquier conexión a internet, no desde un punto único.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Proporciona una plataforma segura y escalable para almacenar, procesar y analizar los datos generados por los dispositivos IoT.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La nube actúa como el núcleo central (<em>backend</em>) que recopila masivamente la telemetría de millones de sensores, almacena los históricos de datos y ejecuta algoritmos de aprendizaje o reglas de automatización domótica.
  </div>
</details>

---

### Pregunta 6
¿Cuál es una de las principales ventajas del edge computing frente al cloud computing?

<details class="quiz-option incorrect">
  <summary>A) Mayor capacidad de almacenamiento a largo plazo.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El almacenamiento masivo y retención a largo plazo es el fuerte del <em>cloud computing</em> gracias a su capacidad prácticamente infinita en centros de datos.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Uso exclusivo en aplicaciones no relacionadas con el IoT</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El edge computing está estrechamente vinculado a entornos IoT, vehículos autónomos y robótica industrial.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Mayor consumo de ancho de banda debido a la transferencia constante de datos</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Al procesar y filtrar localmente la información en el origen, el edge computing <strong>reduce drásticamente</strong> la necesidad de saturar la red enviando datos en bruto hacia la nube central.
  </div>
</details>
<details class="quiz-option correct">
  <summary>D) Mayor velocidad, procesamiento más rápido y menor latencia al estar más cerca del usuario</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Al ubicar los nodos de computación en el extremo de la red (en la misma fábrica, vehículo o antena), se eliminan los tiempos de propagación por internet hacia servidores remotos, logrando respuestas en milisegundos esenciales para aplicaciones de tiempo real.
  </div>
</details>

---

### Pregunta 7
¿En qué tipo de aplicaciones es especialmente útil el uso del edge computing?

<details class="quiz-option incorrect">
  <summary>A) Aplicaciones de procesamiento masivo de datos exclusivamente en la nube</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Las cargas de trabajo por lotes (*batch processing*) masivas o almacenamiento de grandes volúmenes de datos históricos encajan en el modelo centralizado de la nube.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) Aplicaciones que requieren un procesamiento rápido, eficiente y seguro de datos en tiempo real</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Resulta fundamental para sistemas críticos donde cualquier retardo (latencia) es inaceptable, como el frenado de vehículos autónomos, la telecirugía médica asistida, el control de drones o la monitorización de cadenas de montaje industriales.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) Aplicaciones que necesitan una alta capacidad de procesamiento centralizado</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El procesamiento intensivo que requiere clusters centralizados (como el entrenamiento de modelos de IA) se delega a la nube.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Aplicaciones que no requieren procesamiento de datos en tiempo real</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Si los datos no requieren respuesta inmediata, la arquitectura tradicional de envío y procesamiento en la nube suele ser más económica y sencilla de desplegar.
  </div>
</details>

---

### Pregunta 8
Relaciona cada descripción o situación con el tipo de servicio o modelo de nube que le corresponde:

| Modelo / Servicio | Situación / Caso Práctico | Justificación Técnica |
| :--- | :--- | :--- |
| **Infraestructura como servicio (IaaS)** | Una startup contrata almacenamiento y capacidad de cómputo bajo demanda en Amazon Web Services. | La empresa alquila máquinas virtuales (EC2) y volúmenes de disco (EBS/S3), asumiendo la instalación y configuración del sistema operativo y aplicaciones. |
| **Plataforma como servicio (PaaS)** | Una empresa desarrolla una aplicación web sin encargarse de administrar servidores ni sistemas operativos. Utiliza un entorno con herramientas integradas para programar, probar y desplegar. | Se abstrae el sistema operativo y el middleware; el proveedor suministra el runtime de ejecución y las herramientas de despliegue. |
| **Software como servicio (SaaS)** | Una compañía utiliza Google Workspace para que sus empleados colaboren en documentos y hojas de cálculo desde cualquier dispositivo. | Aplicación lista para usar a través de navegador web donde el cliente únicamente administra cuentas de usuario y permisos. |
| **Nube privada** | Una organización gubernamental aloja sus aplicaciones en servidores internos y con acceso restringido, por motivos de seguridad. | Infraestructura dedicada en exclusiva a una única entidad, garantizando soberanía del dato y aislamiento total frente a terceros. |

---

### Pregunta 9
Una empresa tecnológica desarrolla una aplicación médica que permite a los doctores consultar historiales clínicos en línea, realizar videollamadas con pacientes y analizar datos de salud en tiempo real.  
Este caso es un ejemplo de la aplicación del cloud computing en el ámbito de:

<details class="quiz-option incorrect">
  <summary>A) Desarrollo de software y aplicaciones</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Aunque se desarrolla software, el foco de la pregunta es el sector vertical o área de actividad económica impactada por la solución.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>B) Internet de las cosas (IoT)</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El caso describe una plataforma de telemedicina y consulta telemática entre personas y expedientes médicos, no una red de sensores automatizados.
  </div>
</details>
<details class="quiz-option correct">
  <summary>C) Salud y asistencia sanitaria</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    Representa un despliegue directo de servicios en la nube en el sector de la salud (*eHealth* y telemedicina), mejorando la trazabilidad de historiales clínicos, la accesibilidad de las consultas médicas y la agilidad asistencial.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) Educación</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Correspondería a plataformas de teleformación o campus virtuales educativos (LMS).
  </div>
</details>

---

### Pregunta 10
Un hospital decide migrar todos sus registros médicos a una plataforma en la nube que permite a los médicos acceder a la información de los pacientes desde cualquier dispositivo autorizado. Además, el sistema utiliza herramientas de inteligencia artificial para detectar posibles diagnósticos.  
¿Cuál de las siguientes ventajas del uso del cloud computing está mejor representada en este caso?

<details class="quiz-option incorrect">
  <summary>A) El aumento de la capacidad de entretenimiento y streaming.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    No guarda relación con los servicios médicos ni con el análisis diagnóstico asistencial.
  </div>
</details>
<details class="quiz-option correct">
  <summary>B) La mejora en la accesibilidad, el análisis de datos y la toma de decisiones médicas.</summary>
  <div class="feedback">
    <div class="feedback-title">✓ ¡Exacto!</div>
    La ubicuidad de acceso a los expedientes clínicos junto con el aprovechamiento de motores de aprendizaje automático en la nube facilita diagnósticos precoces y optimiza las decisiones clínicas asistidas por ordenador.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>C) La reducción del costo de desarrollo de nuevas aplicaciones.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    El hospital es consumidor de una solución operativa final, no una empresa desarrolladora buscando abaratar su stack de desarrollo de software.
  </div>
</details>
<details class="quiz-option incorrect">
  <summary>D) La automatización de tareas domésticas mediante dispositivos inteligentes.</summary>
  <div class="feedback">
    <div class="feedback-title">✗ Incorrecto</div>
    Describe soluciones de domótica residencial, no la gestión de un entorno hospitalario crítico.
  </div>
</details>
