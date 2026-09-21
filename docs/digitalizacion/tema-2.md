<h1 style="color: #ab47bc;">🏭 Tema 2 — Cuarta Revolución Industrial y Sistemas Ciberfísicos</h1>

<h2 style="color: #29b6f6;">2.1. Concepto y Evolución Histórica de la Industria</h2>

#### Origen del Término y Definición
* **Acuñación del término:** Concepto introducido por el economista alemán Klaus Schwab, fundador del Foro Económico Mundial (FEM), en el año 2016.
* **Definición:** Período de transformación tecnológica iniciado a principios de la década de 2010, caracterizado por la convergencia entre tecnologías digitales, físicas y biológicas (robótica, computación en la nube, inteligencia artificial, nanotecnología e Internet de las cosas - IoT).
* **Impacto:** Provoca rupturas profundas en la economía y la sociedad mediante la automatización avanzada, la reducción de costes y el aumento de la flexibilidad y calidad en los procesos productivos.

#### Evolución Histórica de las Revoluciones Industriales

| Revolución Industrial | Período / Hito | Tecnologías Clave | Impacto Principal |
| :--- | :--- | :--- | :--- |
| **Primera (1.0)** | 1760 - 1840 (Inglaterra) | Carbón, máquina de vapor y telares mecánicos. | Mecanización de la producción textil y siderúrgica; paso del taller artesanal a la fábrica. |
| **Segunda (2.0)** | 1870 - 1914 (EE.UU. / Europa) | Electricidad, petróleo, motor de combustión, telégrafo, teléfono y cadena de montaje Ford (1913). | Producción en masa, electrificación urbana, transporte a escala y abaratamiento de bienes de consumo. |
| **Tercera (3.0)** | Década de 1950 - 2000s | Circuitos integrados, microprocesadores, ordenadores, PLC e Internet. | Automatización programada de procesos industriales, digitalización de oficinas y auge de la microelectrónica. |
| **Cuarta (4.0)** | Década de 2010 - Actualidad | Sistemas Ciberfísicos (CPS), IoT/IIoT, IA, Big Data, Cloud Computing y Cobots. | Fábricas inteligentes, convergencia del mundo virtual y físico, toma de decisiones autónoma y personalización masiva. |

---

<h2 style="color: #29b6f6;">2.2. Sistemas Ciberfísicos (CPS)</h2>

* **Definición de CPS (*Cyber-Physical Systems*):** Sistemas integrados de computación y redes capaces de monitorizar, coordinar y controlar procesos físicos (máquinas, sensores y actuadores) en tiempo real mediante bucles continuos de retroalimentación.
* **Capacidades autónomas:** Recopilan y analizan datos en tiempo real, ejecutan funciones de autoevaluación, autocomprobación y autoconfiguración, y toman decisiones autónomas para optimizar su rendimiento sin intervención humana constante.
* **Campos de aplicación:** Drones, vehículos autónomos, domótica, robótica quirúrgica de alta precisión, prótesis biónicas, fábricas inteligentes, agricultura de precisión, aviación, redes eléctricas inteligentes (*Smart Grids*) y ciudades inteligentes (*Smart Cities*).

#### Componentes Fundamentales de un CPS
1. **Sensores:** Detectan variables del entorno físico (temperatura, humedad, presión, vibración, posición, luz) y las transforman en señales eléctricas interpretables por los sistemas digitales.
2. **Actuadores:** Traducen las órdenes digitales del sistema en acciones mecánicas o físicas (encender/apagar motores, regular válvulas hidráulicas, desplazar brazos robóticos).
3. **Procesadores y unidades de control:** Microcontroladores, PLC avanzados y nodos de cómputo que analizan los datos de los sensores y ejecutan algoritmos de control en tiempo real.
4. **Redes de comunicación:** Infraestructura cableada o inalámbrica (Ethernet industrial, Wi-Fi 6, 5G, TSN, MQTT, OPC-UA) que interconecta sensores, controladores y la nube.
5. **Software y algoritmos:** Plataformas encargadas del procesamiento analítico, la toma de decisiones basada en reglas o modelos de IA y la sincronización general del sistema.
6. **Interfaces Hombre-Máquina (HMI):** Paneles de control táctiles, plataformas web y aplicaciones móviles que permiten supervisar, parametrizar y actuar sobre el sistema.

#### Capas de Funcionamiento de un CPS
* **Capa de Percepción:** Recopilación ininterrumpida de parámetros del entorno físico mediante sensores. Se encarga de detectar anomalías, desviaciones en las tolerancias de piezas y fallos prematuros en los equipos.
* **Capa de Transmisión:** Canal de comunicación seguro que transporta los flujos de datos entre el hardware de campo, las unidades locales y la nube. Integra pasarelas (*gateways* industriales), cortafuegos, sincronización temporal estricta y protección perimetral (sistemas IDS/IPS).
* **Capa de Aplicación:** Nivel superior de cómputo donde se ejecutan los algoritmos de analítica avanzada y control predictivo. Responsable del almacenamiento masivo de datos históricos, la fusión sensorial de fuentes heterogéneas, el cumplimiento normativo de privacidad y la optimización continua del proceso productivo.

!!! example "Caso de Estudio: Smart City en Singapur (Sistema de Transporte Inteligente - ITS)"
    Singapur destaca como referente mundial en el despliegue práctico de CPS aplicado a la gestión del tráfico urbano mediante un **Sistema de Transporte Inteligente (ITS)**:
    
    * **Peaje electrónico ERP (*Electronic Road Pricing*):** Dispositivos en pórticos que ajustan y cobran dinámicamente las tarifas de peaje según el nivel de saturación de la vía y la franja horaria mediante comunicación por radiofrecuencia (RFID).
    * **Semáforos adaptativos:** Regulan en tiempo real la duración de las fases verdes y rojas en cruces críticos calculando el flujo real de vehículos y peatones mediante sensores y visión artificial.
    * **Transporte público digitalizado:** Pantallas con estimación de llegada en tiempo real en paradas, autobuses monitorizados por GPS y ticketing sin contacto (NFC/móvil).
    * **Plataformas de movilidad compartida:** Ecosistema integrado que agrupa alquiler de vehículos eléctricos, patinetes y bicicletas geolocalizados desde una única aplicación.

---

<h2 style="color: #29b6f6;">2.3. Tecnologías de Automatización y Entornos 4.0</h2>

#### Herramientas Clave de la Automatización
* **RPA (*Robotic Process Automation*):** Software configurado para emular acciones humanas al interactuar con aplicaciones digitales, ejecutando tareas repetitivas basadas en reglas fijas (extracción de datos, procesamiento de facturas, generación de informes).
* **APIs (*Application Programming Interfaces*):** Conjuntos de definiciones y protocolos que permiten la interoperabilidad y el intercambio ágil de datos entre plataformas de software heterogéneas (ej. comunicación entre el ERP y el sistema de planta MES).
* **WFMS (*Workflow Management Systems*):** Plataformas especializadas en diseñar, coordinar, automatizar y supervisar flujos de trabajo organizativos, garantizando la ejecución ordenada de cada etapa operativa.
* **Herramientas de scripting:** Lenguajes versátiles (Python, PowerShell, Bash, JavaScript) para programar rutinas de mantenimiento, automatizar copias de seguridad o integrar componentes informáticos.
* **Inteligencia Artificial y Machine Learning (ML):** Algoritmos que identifican patrones, procesan lenguaje natural, clasifican documentos y anticipan fallos de maquinaria mediante mantenimiento predictivo.
* **Herramientas de monitorización y analítica:** Cuadros de mando (dashboards) que ofrecen telemetría en tiempo real sobre el estado de la planta, disparando alertas proactivas ante cuellos de botella.
* **Seguridad y gestión de identidades (IAM):** Control de accesos basado en roles (RBAC), autenticación multifactor (MFA) y cifrado de extremo a extremo en las comunicaciones industriales.

#### Ventajas de la Automatización en la Industria 4.0
* **Aumento de la productividad:** Continuidad operativa ininterrumpida ($24/7$), eliminando tiempos muertos y optimizando los ciclos de fabricación.
* **Reducción de costes y tiempos:** Minimización del error humano, descenso de mermas de material y aceleración en el tratamiento de grandes volúmenes de datos.
* **Mejora de la seguridad laboral:** Delegación de tareas ergonómicamente lesivas, tóxicas o peligrosas en cobots y autómatas programados.
* **Personalización en masa (*Mass Customization*):** Facilidad de reconfigurar y reprogramar líneas de producción basadas en CPS para fabricar tiradas cortas o personalizadas sin incurrir en costes desproporcionados de utillaje.
* **Optimización basada en Big Data:** Trazabilidad integral de cada producto a lo largo de su ciclo, extrayendo conclusiones analíticas para la mejora continua del proceso productivo.

#### Interrelación entre el Mundo Virtual y Físico
* **Internet de las Cosas (IoT / IIoT):** Enlace bidireccional que conecta sensores y actuadores físicos con servidores virtuales para capturar telemetría y enviar consignas de control.
* **Realidad Aumentada (RA):** Superposición de planos, instrucciones paso a paso o datos de telemetría directamente sobre la maquinaria real mediante gafas inteligentes o tablets, acelerando las labores de mantenimiento y montaje.
* **Realidad Virtual (RV):** Inmersión en entornos simulados para capacitar a los técnicos en protocolos críticos sin riesgo físico o validar prototipos en fases previas a la fabricación (*Gemelos Digitales*).
* **Comercio unificado (físico y digital):** Sincronización en tiempo real del inventario físico de las tiendas con la plataforma de comercio electrónico mediante lectores RFID y analítica de datos.
* **Inteligencia Artificial integrada:** Procesamiento continuo de datos de ventas, incidencias de taller y consumo de componentes para prever compras y ajustar la producción en fábrica.

#### Características y Ventajas de los Entornos 4.0
Un **Entorno 4.0** es el ecosistema industrial interconectado, flexible e inteligente donde convergen los sistemas ciberfísicos, las redes ultrarrápidas y la computación en la nube:

* **Eficiencia operativa integral:** Coordinación milimétrica entre la cadena de suministro, la línea de montaje y la distribución logística.
* **Toma de decisiones fundamentada en datos:** Sustitución de intuiciones por analítica prescriptiva y descriptiva procesada al instante.
* **Detección temprana de ineficiencias:** Monitorización térmica, acústica y de vibraciones para resolver anomalías antes de que provoquen averías críticas.
* **Aceleración de la innovación:** Capacidad de prototipar virtualmente, probar escenarios de estrés en gemelos digitales y lanzar productos al mercado en tiempos récord.

--8<-- "docs/includes/glosario.md"
