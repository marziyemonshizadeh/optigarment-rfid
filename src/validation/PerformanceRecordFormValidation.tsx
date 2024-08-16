import { z } from "zod";

export const performanceRecordFormSchema = z.object({
  ProcessType: z.string(),
});
export type PerformanceRecordFormType = z.infer<
  typeof performanceRecordFormSchema
>;
