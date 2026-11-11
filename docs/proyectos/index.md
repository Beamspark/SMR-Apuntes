# 🚀 Portfolio de Proyectos

Catálogo de desarrollos, herramientas de automatización y proyectos de software aplicados a entornos productivos y formación técnica.

---

## 🛠️ Automatización y Sistemas

### [SAT Workflow Automation & CRM Engine](https://github.com/Beamspark/sat-workflow-automation)
Sistema integral de gestión de incidencias de Servicio Técnico (SAT) multidepartamental en retail, desarrollado con arquitectura cliente-servidor desacoplada.

* **Arquitectura y funcionamiento:**
    * Ingesta y enrutado automático de partes mediante eventos `onFormSubmit` en hojas independientes.
    * Interfaz modal interactiva en el frontend (`formulario.html`) con comunicación asíncrona bidireccional (`google.script.run`).
    * Procesamiento en memoria de archivos binarios de Google Drive (`Blob`) para el envío transaccional de albaranes y placas técnicas por correo.
    * Tarea programada en segundo plano (*cron job*) para auditoría de SLA y escalado automático de alertas a mandos para equipos con más de 20 días de retraso.
* **Stack tecnológico:** JavaScript (ES6+), Google Apps Script, HTML5, CSS3, Google Workspace APIs.
* **Código fuente:** [Ver repositorio en GitHub ➔](https://github.com/Beamspark/sat-workflow-automation)

---

### [Price Comparison Agent](https://github.com/Beamspark/price-comparison-agent)
Agente automatizado para monitorización continua y comparación de precios en distribuidores comerciales locales del sector de herramientas y suministros.

* **Arquitectura y funcionamiento:**
    * Navegación emulada mediante navegador headless/controlado para interactuar con interfaces complejas.
    * Extracción, saneamiento y estructuración de tarifas en tiempo real.
    * Generación de históricos comparativos para optimizar la toma de decisiones comerciales.
* **Stack tecnológico:** Python, Playwright / CDP, automatización web.
* **Código fuente:** [Ver repositorio en GitHub ➔](https://github.com/Beamspark/price-comparison-agent)

---

## ☕ Desarrollo y Algoritmia

### [Java Programming MOOC (Helsinki)](https://github.com/Beamspark/java-programming-mooc)
Ruta práctica autodidacta de algoritmia, estructuras de datos y Programación Orientada a Objetos (POO) sobre el programa formativo de la Universidad de Helsinki.

* **Arquitectura y funcionamiento:**
    * Implementación de soluciones limpias en Java compilable bajo entorno JDK y NetBeans.
    * Casos prácticos de control de flujo, gestión de memoria (pila vs. montón), colecciones dinámicas y diseño modular de clases.
    * Repositorio desacoplado con documentación paso a paso por partes formativas.
* **Stack tecnológico:** Java, JDK, NetBeans TMC, Git.
* **Documentación en portal:** [Consultar ficha de seguimiento ➔](../autoaprendizaje/java.md)
* **Código fuente:** [Ver repositorio en GitHub ➔](https://github.com/Beamspark/java-programming-mooc)
