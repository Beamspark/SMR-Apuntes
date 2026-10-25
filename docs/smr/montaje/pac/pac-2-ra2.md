[← Volver al Índice de PACs](./index.md)

---

# PAC Desarrollo - Montaje y Mantenimiento de Equipos (MME)
## Caso Práctico: Configuración de PC a medida en ATXINC - Computer Store

---

### 1. Requisitos Técnicos del Cliente

La empresa nos encomienda la configuración de una estación de trabajo / gaming compacta con especificaciones mínimas estrictas y un presupuesto límite:

* **Procesador:** AMD o Intel de al menos 8 núcleos físicos.
* **Placa Base:** Factor de forma MicroATX con socket compatible.
* **Memoria RAM:** Mínimo 64 GB DDR4.
* **Tarjeta Gráfica:** Mínimo 8 GB de VRAM dedicada.
* **Almacenamiento:** Mínimo 4 TB totales mediante unidades SSD NVMe M.2.
* **Refrigeración líquida:** Radiador de al menos 240 mm.
* **Fuente de alimentación:** Al menos 750 W con certificación de eficiencia.
* **Caja (Chasis):** Formato MicroATX compatible con el resto de componentes.
* **Presupuesto Máximo:** 2.500,00 € (impuestos incluidos).

---

### 2. Ficha Técnica de Componentes Seleccionados

Configuración validada y generada en la plataforma **PCPartPicker**:

| Componente | Modelo Seleccionado | Características Clave | Precio Estimado |
| :--- | :--- | :--- | :--- |
| **CPU** | AMD Ryzen 7 5800X3D (10th Anniv. Ed.) | 8 núcleos / 16 hilos, 3.4 GHz (Boost 4.5 GHz), Socket AM4, 96 MB 3D V-Cache | 349,99 € |
| **Refrigeración** | Corsair NAUTILUS 240 RS ARGB | Refrigeración líquida AIO, radiador de 240 mm, 74.37 CFM | 85,99 € |
| **Placa Base** | Asus PRIME B550M-A WIFI II | Chipset AMD B550, formato MicroATX, 4 ranuras DDR4, 2 ranuras M.2 NVMe, Wi-Fi 6 | 115,69 € |
| **Memoria RAM** | Corsair Vengeance RGB Pro SL (4x16 GB) | 64 GB DDR4-3200 MHz, CL16, arquitectura Dual-Channel (4 módulos) | 690,90 € |
| **SSD M.2 (Principal)**| Samsung 990 Pro 2 TB | M.2-2280, PCIe 4.0 x4 NVMe (Lectura hasta 7450 MB/s) | 369,95 € |
| **SSD M.2 (Secundario)**| SanDisk Extreme 2 TB | M.2-2280, PCIe 4.0 x4 NVMe (Almacenamiento masivo complementario) | 269,99 € |
| **Tarjeta Gráfica** | Sparkle ROC Luna OC Arc A750 | 8 GB GDDR6, 256-bit, PCIe 4.0 x16, soporte DirectX 12 Ultimate / XeSS | 341,93 € |
| **Caja (Chasis)** | Corsair Crystal 280X RGB | Torre MicroATX con doble cámara, paneles de cristal templado, soporte radiador 240 mm | 111,44 € |
| **Fuente Alimentación**| Gigabyte P750GM | 750 W, 80+ Gold, 100% Modular, protecciones OVP/OPP/SCP/UVP/OCP/OTP | 83,69 € |
| **TOTAL** | — | **Consumo estimado: 483 W** | **2.419,57 €** |

!!! success "Presupuesto y Compatibilidad Verificados"
    * **Presupuesto:** El total de **2.419,57 €** se mantiene por debajo del límite de 2.500,00 € (margen restante: 80,43 €).
    * **PCPartPicker Check:** `Compatibility: See details below` aparece en verde con cero conflictos mecánicos o eléctricos.

---

### 3. Justificación Técnica de Compatibilidad y Elección

#### 3.1. Procesador y Placa Base (Socket y Chipset)
* El **AMD Ryzen 7 5800X3D** cuenta con 8 núcleos y 16 hilos bajo la arquitectura *Zen 3* sobre el socket **AM4**.
* La placa base **Asus PRIME B550M-A WIFI II** incorpora el chipset B550 y factor de forma **MicroATX**, cumpliendo estrictamente con el estándar requerido. Soporta PCIe 4.0 para la GPU y el almacenamiento ultrarrápido.

#### 3.2. Memoria RAM y Arquitectura de Canales
* Se han integrado 4 módulos de 16 GB (**Corsair Vengeance RGB Pro SL**) alcanzando los **64 GB DDR4 a 3200 MHz CL16**.
* Ocupan los cuatro slots DIMM de la placa base aprovechando el controlador de memoria de doble canal (*Dual-Channel*).

#### 3.3. Configuración del Almacenamiento (4 TB NVMe)
* Para cumplir el requisito de 4 TB en formato M.2, se aprovechan las **dos ranuras M.2 NVMe** que ofrece la placa Asus PRIME B550M-A:
    1. **Slot 1 (PCIe 4.0 x4 - CPU):** Samsung 990 Pro de 2 TB para el sistema operativo y programas de carga intensiva.
    2. **Slot 2 (PCIe 3.0/4.0 x4 - Chipset):** SanDisk Extreme de 2 TB para almacenamiento masivo de datos.

#### 3.4. Refrigeración Líquida y Factor de Forma del Chasis
* El procesador 5800X3D presenta un TDP de 105 W; el kit **Corsair NAUTILUS 240 RS** (240 mm) disipa con holgura dicha carga térmica.
* La caja **Corsair Crystal 280X RGB** (MicroATX) cuenta con espacio dedicado para radiadores de hasta 240 mm en la parte superior o frontal sin colisionar con la GPU ni con la placa.

#### 3.5. GPU y Dimensionamiento Eléctrico
* La **Sparkle Intel Arc A750** aporta 8 GB de memoria GDDR6, ideal para cargas aceleradas por hardware y renderizado.
* Con un consumo pico estimado de **483 W**, la fuente **Gigabyte P750GM de 750 W 80+ Gold** trabaja en su rango óptimo de eficiencia (alrededor del 60% de carga), permitiendo un margen de seguridad amplio.

---

### 4. Enlace y Exportación de Entrega

* **Enlace público de la configuración:** [https://es.pcpartpicker.com/list/zjdnXf](https://es.pcpartpicker.com/list/zjdnXf)

#### Formato de entrega requerido (`NombreApellido1Apellido2.txt`):

```text
PCPartPicker Part List: [https://es.pcpartpicker.com/list/zjdnXf](https://es.pcpartpicker.com/list/zjdnXf)

CPU: AMD Ryzen 7 5800X3D 10th Anniversary Edition 3.4 GHz 8-Core Processor  (€349.99 @ Amazon Espana) 
CPU Cooler: Corsair NAUTILUS 240 RS ARGB 74.37 CFM Liquid CPU Cooler  (€85.99 @ Amazon Espana) 
Motherboard: Asus PRIME B550M-A WIFI II Micro ATX AM4 Motherboard  (€115.69 @ Coolmod) 
Memory: Corsair Vengeance RGB Pro SL 64 GB (4 x 16 GB) DDR4-3200 CL16 Memory  (€690.90 @ Alternate) 
Storage: Samsung 990 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive  (€369.95 @ Amazon Espana) 
Storage: SanDisk Extreme 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive  (€269.99 @ Amazon Espana) 
Video Card: Sparkle ROC Luna OC Arc A750 8 GB Video Card  (€341.93 @ Amazon Espana) 
Case: Corsair Crystal 280X RGB MicroATX Mid Tower Case  (€111.44 @ Amazon Espana) 
Power Supply: Gigabyte P750GM 750 W 80+ Gold Certified Fully Modular ATX Power Supply  (€83.69 @ Coolmod) 
Total: €2419.57
Prices include shipping, taxes, and discounts when available
Generated by PCPartPicker 2026-10-25 13:18 CET+0100
