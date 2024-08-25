import { parse, format } from "date-fns";

/**
 * Convert a date string in 'yyyy-MM-dd' format to a three-letter day of the week.
 * @param {string} dateString - The date string in 'yyyy-MM-dd' format.
 * @returns {string} - The three-letter abbreviation for the day of the week.
 */

export function getDayOfWeek(dateString) {
  try {
    // Parse the date string
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    // Ensure that date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    // Format the parsed date to get the three-letter day of the week
    return format(date, "eee").toUpperCase(); // eee for three-letter day of the week
  } catch (error) {
    console.error("Error parsing date:", error);
    return null;
  }
}
