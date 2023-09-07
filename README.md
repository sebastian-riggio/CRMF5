# CRM de Gestión de Convocatorias y Subvenciones

## Cliente

Fundación Somos F5


## Objetivo

El objetivo de este proyecto es desarrollar un sistema CRM (Customer Relationship Management) especializado en la gestión de convocatorias de subvenciones, tanto de entidades públicas como privadas.

## Descripción del Problema

Para llevar a cabo una gestión eficiente de las subvenciones, es necesario manejar cuatro bases de datos distintas que eventualmente deberán vincularse para generar análisis integrales y monitorear el ciclo de gestión de una subvención. Se requiere una herramienta, preferiblemente en línea, que permita registrar información sobre las convocatorias de subvenciones y sus calendarios, así como los detalles de cada etapa del proceso de gestión y los proyectos asociados.

Idealmente, en cualquier momento del proceso, debería ser posible generar informes en formatos como hojas de cálculo o archivos .pdf, permitiendo realizar cruces de información para crear informes personalizados y realizar análisis.

## Elementos a Integrar

La herramienta debe incluir cuatro bases de datos interconectadas:

1. Registro de Financiadores
2. Registro de Convocatorias y Calendario
3. Registro de Proyectos
4. Gestión de Convocatorias

## Información Adicional

Campos Obligatorios para cada Base de Datos:

1. Registro de Financiadores

    - Nombre de Entidad
    - Código de Registro (generado automáticamente)
    - CIF
    - Tipo (Organismo Público, Empresa Privada, Entidad Privada sin Ánimo de Lucro)
    - Tipo de Sociedad (Mercantil, Asociación, Fundación, Cooperativa, Organismo Público)
    - Sitio Web
    - Fecha de Alta en la Base de Datos
    - Relación (Cliente o Donante)
    - Dirección Principal
    - Teléfono Principal
    - Correo Electrónico
    - Persona de Contacto Principal:
        - Nombre
        - Apellidos
        - Departamento o Área
        - Cargo
        - Teléfono
        - Correo Electrónico

2. Registro de Convocatorias y Calendario

    - Entidad Convocante (enlazada con el Registro de Financiadores)
    - Departamento o Área Convocante
    - Título de la Convocatoria
    - Enlace al Boletín o Publicación Oficial
    - Enlace a las Bases de la Convocatoria
    - Temática
    - Líneas Específicas de Trabajo
    - Entidades Destinatarias
    - Fechas de Apertura, Cierre, Límite de Resolución, Máximo Periodo de Ejecución y Límite de Justificación
    - Auditoría Externa Obligatoria (Sí/No)
    - Presupuesto Máximo Solicitable
    - Otra Información Relevante
    - Documentación Adjunta:
        - Modelo de Memoria Técnica (1 archivo)
        - Modelo de Presupuesto (1 archivo)
        - Modelo de Formulario de Solicitud (1 archivo)
        - Otra Documentación (máx. 10 archivos)

3. Registro de Proyectos

    - Nombre del Proyecto
    - Código de Proyecto (generado automáticamente)
    - Departamento o Centro Gestor
    - Persona Responsable en Factoría F5
    - Duración en Meses del Proyecto
    - Presupuesto Global del Proyecto
    - Presupuesto Aportado por Factoría F5

4. Gestión de Convocatorias

    - Etapa Solicitud
        - Convocatoria a la que se presenta (desplegable)
        - Entidad Financiadora (se rellena automáticamente al elegir convocatoria)
        - Técnico Responsable de Gestión en F5
        - Fecha de Entrega de la Propuesta
        - Número de Trámite
        - Número de Expediente
        - Código Interno de Subvención/Donación (generado automáticamente)
        - Acuse de Recibo Oficial Adjunto
    - Etapa Negociación Resolución
    - Etapa Otorgamiento
    - Etapa Justificación
    - Etapa Cierre

## Requerimientos de UI

Al acceder a la herramienta, se mostrará una pantalla de bienvenida con el siguiente resumen de la gestión de convocatorias:

- Calendario de Próximas Convocatorias Abiertas (las 5 más próximas en fecha)
- 3 Gráficos:
    1. Número de Convocatorias en Cada Etapa de Solicitud
    2. Número de Convocatorias en Cada Etapa de Ejecución
    3. Presupuesto Solicitado vs Presupuesto Alcanzado por F5

## Generación de Informes

La herramienta debe permitir la extracción de informes en formato Excel, permitiendo al usuario seleccionar los campos deseados entre todos los disponibles en el sistema.