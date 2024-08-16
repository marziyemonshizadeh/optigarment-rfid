export interface PerformanceRecordGetEntity {
  id: string;
  row: any;
  code: string;
  name: string;
  processType: string;
  startTime: string;
  endTime: any;
}
export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  createdAt: Date;
};
