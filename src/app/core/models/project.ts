export interface Project {
  projectId?: string;
  projectName: string;
  projectStartAt: Date | null;
  projectEndAt: Date | null;
  projectDuration: number;
  projectStatus: string;
  projectCreatorId: string;
}
