/**
 * Formats a given date string into a human-readable format.
 * @param {string} fecha - The date string to be formatted.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (fecha: string): string => {
  // Array containing the names of months in Spanish
  const months = [
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

  // Create a new Date object from the provided date string
  const date = new Date(fecha);

  // Get the month name from the months array based on the month index of the date
  const month = months[date.getMonth()];

  // Get the year from the date
  const year = date.getFullYear();

  // Format the date string with capitalized month name and year
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};
