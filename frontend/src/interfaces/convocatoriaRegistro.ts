export interface ConvocatoriaRegistro {
_id:string
entidadConvocante: string;
departamentoConvocante: string;
titulo: string;
publicacionOficial: string;
convocatoriaEnlace: string;
tematica: string;
trabajoLineas: string;
dirigidoEntidades: string;
fechaApertura: Date;
fechaCierre:Date;
fechaResolucion: Date;
periodoEjecucion: string;
fechaJustificacion: Date;
auditoria: boolean;
presupuesto: number;
otraInformacion: string;
memoriaTecnica: string;
modeloPresupuesto: string;
formularioSolicitud: string;
}
