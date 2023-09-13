import { EtapaOtorgamientoDto } from "src/gestion-convocatoria/dto/etapa-otorgamiento.dto";


export const calcularPorcentaje = (dto: EtapaOtorgamientoDto)  => {

  const montoConcedido = dto['monto-concedido'];
  const montoPrimerDesembolso = dto['monto-primer-desembolso'];
  
  if (typeof montoConcedido === 'number' && typeof montoPrimerDesembolso === 'number') {

    dto['porciento-primer-desembolso'] = (montoPrimerDesembolso / montoConcedido) * 100;
  } else {
    
    return 'Los valores de monto-concedido y monto-primer-desembolso deben ser números válidos.'
  }
  console.log(calcularPorcentaje)
  console.log(montoConcedido)
  console.log(montoPrimerDesembolso)
}

// parte/todo = %/100 formula para calcular el por ciento

