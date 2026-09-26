<h1 style="color: #ab47bc;">📌 Repaso General — Conceptos Clave de Digitalización Aplicada</h1>

Este documento sintetiza de forma estructurada, técnica y directa los fundamentos conceptuales y tecnológicos del módulo de **Digitalización Aplicada a los Sectores Productivos**, orientado a repasos integrales y preparación de evaluaciones.

---

<h2 style="color: #29b6f6;">🌱 1. Digitalización y Sostenibilidad Ambiental</h2>

* **Impactos de la Transformación Digital:**
    * **Impactos positivos:** Monitorización y optimización en tiempo real de recursos críticos (agua, electricidad y materias primas), reducción de la huella de carbono mediante teletrabajo y desmaterialización, y trazabilidad avanzada de residuos.
    * **Impactos negativos:** Demanda energética intensiva y continua en centros de datos (*Data Centers*), sobreexplotación extractiva de tierras raras y generación acelerada de basura electrónica (**e-waste**) que libera metales pesados altamente tóxicos (plomo, mercurio, cadmio).
* **Desarrollo Sostenible (Informe Brundtland, ONU 1987):** Modelo que «satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades». Articula de forma indisociable tres pilares: **sostenibilidad ambiental, económica y social**.
* **Tecnologías Habilitadoras de Sostenibilidad:**
    * **Energías renovables:** Generación fotovoltaica, eólica, minihidráulica y biomasa gestionadas por redes eléctricas inteligentes (*Smart Grids*).
    * **Eficiencia energética:** Alumbrado LED, estándares de consumo (Energy Star) y arquitectura bioclimática/edificios inteligentes.
    * **Transporte limpio:** Flotas híbridas y vehículos eléctricos puros (**EV**).
    * **Agricultura de precisión:** Sistemas hidropónicos, aeropónicos y sensórica de humedad en suelo.

### Modelos Económicos: Lineal vs. Circular

| Dimensión | Economía Lineal (EL) | Economía Circular (EC) |
| :--- | :--- | :--- |
| **Flujo de Materiales** | Secuencia abierta: *Extraer $\rightarrow$ Producir $\rightarrow$ Consumir $\rightarrow$ Desechar*. | Bucle cerrado: *Reducir $\rightarrow$ Reutilizar $\rightarrow$ Reciclar $\rightarrow$ Regenerar*. |
| **Vida Útil del Bien** | Diseñado para obsolescencia y renovación rápida. | Extensión del ciclo de vida mediante mantenimiento preventivo y modularidad. |
| **Valor de los Residuos** | Desperdicio sin valor añadido destinado a vertedero. | El residuo se reincorpora como materia prima secundaria (*upcycling*). |
| **Estrategias Clave** | Fabricación masiva no diferenciada. | **Reparación** (restauración funcional) y **Remanufactura** (calidad original de fábrica). |

* **ODS Ambientales de la Agenda 2030:** ODS 6 (Agua limpia y saneamiento), ODS 7 (Energía asequible y no contaminante), ODS 12 (Producción y consumo responsables), ODS 13 (Acción por el clima), ODS 14 (Vida submarina) y ODS 15 (Ecosistemas terrestres).
* **Retrato Robot del Ecodiseño:** Selección de materiales biodegradables o reciclados no tóxicos, diseño estructuralmente modular para facilitar la actualización de componentes individuales, reducción del consumo energético pasivo, desmontaje rápido sin herramientas especiales y empaquetado mínimo biodegradable.

---

<h2 style="color: #29b6f6;">⚙️ 2. Cuarta Revolución Industrial y Sistemas Ciberfísicos (CPS)</h2>

* **Evolución Histórica de la Industria:**
    1. **1.ª Revolución Industrial (1760-1840):** Máquina de vapor alimentada por carbón, desarrollo de la siderurgia e implantación del telar mecánico en Gran Bretaña.
    2. **2.ª Revolución Industrial (1870-1914):** Electrificación masiva, derivados del petróleo, motor de combustión interna y líneas de montaje en serie (fordismo, Detroit 1913).
    3. **3.ª Revolución Industrial (década de 1950 - Digital):** Invención del transistor y circuitos integrados, microprocesadores, autómatas programables (**PLC**), informática corporativa y red Internet.
    4. **4.ª Revolución Industrial (Industria 4.0, década de 2010):** Concepto acuñado por Klaus Schwab (Foro Económico Mundial 2016) para definir la convergencia e interpenetración de tecnologías físicas, digitales y biológicas.

### Sistemas Ciberfísicos (CPS)
Sistemas que integran capacidades de computación, almacenamiento y comunicación para monitorizar y controlar procesos físicos en tiempo real mediante bucles de retroalimentación autónomos, dotados de funciones de autoevaluación y reconfiguración dinámica.

* **Arquitectura de Tres Capas del CPS:**
    1. **Capa de Percepción (Física):** Monitorización del entorno y captura analógica/digital de variables mediante sensores (temperatura, presión, visión artificial) y ejecución física de acciones correctivas mediante actuadores.
    2. **Capa de Transmisión (Red):** Interconexión inalámbrica o cableada en tiempo real (protocolos industriales, sincronización horaria de precisión y blindaje mediante firewalls e IDS/IPS).
    3. **Capa de Aplicación (Ciberespacio):** Algoritmos de optimización, analítica de datos masivos, toma de decisiones autónoma y gemelos digitales.
    * *Caso paradigmático Smart City:* Singapur (peaje electrónico predictivo ERP vía radiofrecuencia, semáforos inteligentes adaptativos y sistemas de transporte ITS).

### Automatización Inteligente en el Entorno 4.0
* **Automatización Robótica de Procesos (RPA):** Agentes de software programados para emular la interacción humana con interfaces de usuario en tareas repetitivas y basadas en reglas deterministas.
* **Mecanismos de Enlace:** Interfaces **API** para la comunicación directa entre plataformas heterogéneas, sistemas de gestión de flujos de trabajo (**WFMS**) y automatización mediante scripts de infraestructura (Python, JavaScript, PowerShell).

---

<h2 style="color: #29b6f6;">☁️ 3. Computación en la Nube y Procesamiento Distribuido</h2>

* **Cloud Computing:** Modelo de acceso bajo demanda a un catálogo compartido de recursos informáticos configurables (cómputo, almacenamiento, redes) a través de Internet, operado sobre infraestructura virtualizada remota.

### Modelos de Servicio y Despliegue Cloud

| Modelo de Servicio | Capa Gestionada por el Proveedor | Capa Gestionada por el Cliente | Ejemplos Representativos |
| :--- | :--- | :--- | :--- |
| **IaaS** (*Infrastructure as a Service*) | Virtualización, servidores físicos, almacenamiento y redes. | Sistema operativo, middleware, runtime, datos y aplicaciones. | AWS EC2, Google Compute Engine, Microsoft Azure VMs. |
| **PaaS** (*Platform as a Service*) | Infraestructura física, sistema operativo, base de datos y entorno de ejecución. | Desarrollo de código de la aplicación y gestión de datos. | Heroku, Google App Engine, Red Hat OpenShift. |
| **SaaS** (*Software as a Service*) | La totalidad de la pila tecnológica (hardware, SO, software y parches). | Configuración básica de usuario y consumo del servicio. | Google Workspace, Microsoft 365, Salesforce. |

* **Modelos de Despliegue:** Nube Pública (multinquilino, compartida en centros del proveedor), Nube Privada (dedicada exclusivamente a una organización, en sus instalaciones o alojada) y Nube Híbrida (orquestación combinada que permite la portabilidad de cargas sensibles en privada y picos de demanda en pública).
* **Paradigmas de Cómputo Perimetral:**
    * **Cloud Computing Centralizado:** Gran potencia de cómputo en servidores lejanos; penalizado por la latencia y el consumo intensivo de ancho de banda.
    * **Fog Computing:** Nivel intermedio descentralizado situado en pasarelas de red locales que agrega, filtra y procesa datos procedentes de múltiples sensores antes de reenviarlos a la nube.
    * **Edge Computing:** Cómputo procesado en el extremo de la red, directamente en los dispositivos de captura o *gateways* locales, garantizando tiempos de respuesta de milisegundos.
    * **Mist Computing / Edge Intelligence:** Ejecución directa de modelos reducidos de Machine Learning sobre microcontroladores y sensores (*TinyML*).
* **Impacto Económico:** Transición estructural de gastos de capital fijos en hardware físico (**CapEx**) a un modelo operativo dinámico y variable por uso (**OpEx**).

---

<h2 style="color: #29b6f6;">🏭 4. Tecnologías Habilitadoras Digitales (THD) y Sistemas Corporativos</h2>

* **Inteligencia Artificial y Analítica:** Algoritmos de aprendizaje automático (*Machine Learning*), procesamiento del lenguaje natural (**NLP**) y visión computacional integrados con arquitecturas de macrodatos (**Big Data**):
    * *Datos Estructurados:* Registros tabulares relacionales tipificados (SQL).
    * *Datos Semiestructurados:* Esquemas flexibles autodescriptivos (XML, JSON, BSON).
    * *Datos No Estructurados:* Archivos binarios de texto libre, audio, imágenes y vídeo.
* **Internet de las Cosas (IoT / IIoT):** Despliegue masivo de sensórica interconectada en plantas de producción para habilitar el mantenimiento predictivo antes de la avería.
* **Redes Móviles 5G:** Conectividad ultrarrápida con anchos de banda de hasta $10\text{ Gbps}$, latencias de transmisión inferiores a $1\text{ ms}$ y densidad masiva de hasta un millón de dispositivos conectados por $\text{km}^2$.
* **Cobots (Robots Colaborativos):** Brazos robóticos industriales provistos de sensores de par y visión espacial diseñados para operar de forma segura codo con codo con técnicos humanos, prescindiendo de barreras de enjaulamiento físico.
* **Tecnología Blockchain:** Libro mayor distribuido, inmutable y descentralizado cuyos bloques de transacciones se validan por consenso criptográfico sin intermediarios.
* **Ciberseguridad Integral:** Marco operativo estructurado en cinco pilares (*Prevención, Detección, Respuesta, Recuperación y Concienciación*). Empleo de sistemas de correlación de eventos (**SIEM**), autenticación multifactor (**MFA**) y cortafuegos de nueva generación para mitigar vectores de ransomware y phishing.
* **Gemelo Digital (*Digital Twin*):** Réplica virtual exacta de un activo físico que se actualiza continuamente mediante flujos de telemetría IoT en tiempo real para simular fatigas de material y ensayar escenarios de estrés sin riesgo.
* **Fabricación Aditiva (Impresión 3D):** Conformación tridimensional capa sobre capa a partir de modelos CAD, optimizando geometrías internas y eliminando el desperdicio por desbaste de material.

### Ecosistema de Sistemas de Información Empresarial
* **ERP:** Planificación de Recursos Empresariales; centraliza finanzas, compras, producción y logística en una base de datos común (SAP, Oracle).
* **CRM:** Gestión de Relaciones con Clientes; administración de la fuerza de ventas, soporte y fidelización (Salesforce, HubSpot).
* **SCM:** Gestión de la Cadena de Suministro; trazabilidad integral de aprovisionamiento.
* **ECM / LMS / HRMS:** Gestión de contenidos documentales corporativos (SharePoint), plataformas de formación virtual (Moodle) y administración de recursos humanos (Workday).

### Tipología de Bases de Datos NoSQL

| Modelo NoSQL | Principio de Almacenamiento | Motores Principales | Casos de Uso Óptimos |
| :--- | :--- | :--- | :--- |
| **Orientadas a Documentos** | Estructuras jerárquicas JSON/BSON sin esquema rígido. | MongoDB, CouchDB. | Portales web dinámicos, catálogos e-commerce. |
| **Familias de Columnas** | Datos agrupados en columnas dispersas escalables. | Apache Cassandra, HBase, BigQuery. | Series temporales, analítica Big Data masiva. |
| **Orientadas a Grafos** | Estructura de nodos interconectados mediante aristas. | Neo4j, Amazon Neptune. | Redes sociales, motores de fraude, logística. |
| **En Memoria (*In-Memory*)** | Almacenamiento directo en RAM volatil/persistente. | Redis, Memcached, SAP HANA. | Tablas de clasificación, sesiones, cachés ultra veloces. |

---

<h2 style="color: #29b6f6;">📈 5. Estrategia y Planes de Transformación Digital</h2>

### Paradigmas Organizacionales: Tradicional vs. Digital

| Atributo | Organización Clásica Tradicional | Organización Digital Nativa / Adaptada |
| :--- | :--- | :--- |
| **Estructura Interna** | Jerárquica, vertical, departamentos en silos estancos. | Horizontal, plana, organizada en células ágiles multidisciplinares (*squads*). |
| **Flujo Comunicativo** | Descendente, formal, burocratizado. | Bidireccional, transparente, en tiempo real. |
| **Toma de Decisiones** | Basada en jerarquía, antigüedad o intuición personal. | Basada empíricamente en datos contrastados (**Data-Driven**). |
| **Metodología de Trabajo** | Modelo en cascada (*Waterfall*), resistente a variaciones. | Metodologías ágiles (**Scrum, Lean, Kanban**) con iteraciones cortas. |
| **Cultura Corporativa** | Aversión al error y castigo del fallo. | Mentalidad orientada a la experimentación (*fail fast, learn faster*). |

* **Nuevos Roles en el Comité de Dirección (C-Level):**
    * **CDO (*Chief Data Officer*):** Custodio del gobierno, calidad y monetización de los activos de datos.
    * **CTO (*Chief Technology Officer*):** Arquitecto de la infraestructura técnica y del desarrollo tecnológico.
    * **CPO (*Chief Product Officer*):** Responsable de la visión, diseño y ciclo de vida de los productos digitales.
    * **VP CX (*Customer Experience*):** Director del mapa de experiencia del usuario en todos los puntos de contacto digitales.
* **Fases Canónicas del Plan de Transformación Digital:**
    1. **Fase 1 — Evaluación y Diagnóstico:** Auditoría de madurez digital, inventario de sistemas legados (*legacy*) y detección de cuellos de botella operativos.
    2. **Fase 2 — Definición Estratégica:** Formulación de **Objetivos SMART** asociados a indicadores clave de rendimiento (**KPIs** cuantitativos).
    3. **Fase 3 — Diseño de la Hoja de Ruta (*Roadmap*):** Selección del stack tecnológico (SaaS/IaaS), priorización de iniciativas por impacto/esfuerzo, asignación presupuestaria y gobernanza.
    4. **Fase 4 — Implementación y Gestión del Cambio:** Despliegue por sprints, capacitación técnica del personal, transformación cultural (*mindset*) y revisión cíclica de mejora continua.
* **Integración Práctica de Software en Pymes (Ejemplo Comercio Minorista):**
    * **Front-end / Ventas:** CMS e-commerce web (Shopify) interconectado con software de terminal punto de venta físico en tienda (Vend/Lightspeed).
    * **Marketing y Fidelización:** Campañas segmentadas de emailing (Mailchimp) y analítica de redes sociales (Hootsuite).
    * **Atención y Logística:** Mesa de ayuda multicanal unificada (Zendesk) enlazada a pasarela de transportes e impresión de etiquetas de paquetería (ShipStation).
    * **Gestión Contable:** Libro contable sincronizado en nube en tiempo real (QuickBooks).

--8<-- "docs/includes/glosario.md"
