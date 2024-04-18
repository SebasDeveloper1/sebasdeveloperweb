export const formatDate = (fecha: string): string => {
  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  const date = new Date(fecha);
  const mes = meses[date.getMonth()];
  const año = date.getFullYear();

  return `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${año}`;
};
