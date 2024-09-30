import { Schedule } from "@services/enums";

export const getScheduleInSpanish = (schedule: Schedule): string => {
  switch (schedule) {
    case Schedule.Weekly:
      return "Semanal";
    case Schedule.TenDayIntervals:
      return "Intervalos de 10 días";
    case Schedule.Biweekly:
      return "Quincenal";
    case Schedule.Semimonthly:
      return "Bimensual";
    case Schedule.Monthly:
      return "Mensual";
    case Schedule.Bimonthly:
      return "Bimestral";
    case Schedule.Quarterly:
      return "Trimestral";
    case Schedule.Semiannually:
      return "Semestral";
    case Schedule.Annually:
      return "Anual";
    default:
      return schedule;
  }
};
