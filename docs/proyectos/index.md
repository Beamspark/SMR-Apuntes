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

### [Price Comparison Agent & AI Surveillance Engine](https://github.com/Beamspark/price-comparison-agent)
Motor autónomo de vigilancia de precios y análisis de competitividad en tiempo real entre distribuidores del sector técnico y construcción (Obramat Murcia-Churra, Leroy Merlin Murcia Sur, Bauhaus Alfafar).

* **Arquitectura y funcionamiento:**
    * **Evasión perimetral de WAF (CDP):** Conexión de Playwright mediante Chrome DevTools Protocol (`--remote-debugging-port=9222`) sobre una instancia nativa de Chrome. Hereda huella de hardware real, perfiles locales y geolocalización de almacén, eliminando bloqueos por Cloudflare o DataDome.
    * **Homologación semántica con Google Gemini API:** Normalización cognitiva de fichas técnicas para resolver asimetrías comerciales de catálogo (`HOMOLOGADO_DIRECTO`, `HOMOLOGADO_CON_DIFERENCIAS` o descarte inmediato) según motorización, litrajes y accesorios.
    * **Integridad de datos (Zero-Fallback):** Política estricta de cero datos fósiles (sin arrastre de precios antiguos ante roturas de stock) y selectores defensivos contra precios tachados en contenedores ADEO (*ZONE_OFFRE*) y tipografías Tailwind con superíndices.
    * **Reporting ejecutivo:** Cálculo de desviaciones frente al precio suelo del almacén y despacho de alertas automáticas maquetadas en HTML dirigidas a Jefatura de Sector.
* **Stack tecnológico:** Python, Playwright (CDP over Chrome Local), Google Gemini API, Regex, HTML/CSS.
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
