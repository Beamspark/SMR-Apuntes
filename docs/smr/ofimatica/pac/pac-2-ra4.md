[← Volver al Índice de PACs](./index.md)

---

# PAC 2 (RA4) - Gestión de Alumnos y Calificaciones con AppSheet
**PAC de desarrollo (D) | Aplicaciones Ofimáticas**

[:octicons-file-pdf-24: Descargar Memoria Oficial en PDF](./GonzalezMartinez_LuisAlejandro_Practica_AppSheet.pdf){ .md-button .md-button--primary target="_blank" }

---

### Resumen de la práctica entregada

* **Herramienta:** AppSheet conectado a Google Drive.
* **Origen de datos:** Archivo `PAC_Desarrollo APP Sheet` (Google Sheets).
* **Configuración del modelo:**
    * Clave primaria (**Key**): `ID_Alumno`.
    * Etiqueta (**Label**): `Nombre`.
    * Tipos de campo: `Number` (ID, Asistencia), `Text` (Nombre, Curso, Asignatura) y `Decimal` (Nota).
* **Vistas implementadas:**
    1. **Tabla:** Listado completo con todas las columnas de rendimiento académico.
    2. **Gráfico (Chart):** Modelo de columnas por serie para comparar calificaciones por alumno.
    3. **Suspensos (Slice):** Filtro lógico por fila con la condición `[Nota] < 5`.

---

### Memoria completa en PDF

<iframe src="../GonzalezMartinez_LuisAlejandro_Practica_AppSheet.pdf" width="100%" height="900px" style="border: 1px solid #444; border-radius: 6px;"></iframe>
