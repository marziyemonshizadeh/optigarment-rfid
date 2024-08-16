import { z } from "zod";

export const requestRecordFormSchema = z.object({
  requestType: z.string(),
  requestName: z.string(),
  degreeOfImportance: z.string(),
  descriptionOfTheProblem: z.string(),
});
export type requestRecordFormType = z.infer<typeof requestRecordFormSchema>;
