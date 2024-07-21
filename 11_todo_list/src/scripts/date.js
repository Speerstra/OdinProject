import { format } from "date-fns";

export function formatDate(dueDate) {
  return format(new Date(dueDate), "MMMM d");
}
