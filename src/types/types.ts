export enum JobStatus {
  Scheduled = "Scheduled",
  Active = "Active",
  Invoicing = "Invoicing",
  Priced = "Priced",
  Completed = "Completed",
}

export enum AllJobStatuses {
  All = "all",
}

export type JobStatusFilter = JobStatus | AllJobStatuses;

export type ClientDetails = {
  name: string;
  phoneNumber: string;
};

export type Note = {
  id: string;
  createdAt: Date;
  note: string;
};

export type Job = {
  id: string;
  status: JobStatus;
  createdAt: Date;
  client: ClientDetails;
  notes: Note[];
};
