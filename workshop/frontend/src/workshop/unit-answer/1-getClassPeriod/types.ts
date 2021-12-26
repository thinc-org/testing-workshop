export interface Period {
  start: string;
  end: string;
}

export interface Class {
  period?: Period | null;
  building?: string | null;
  room?: string | null;
  teachers: string[];
}
