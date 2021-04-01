export interface ConfigItemValue {
  key: string;
  value: string | null;
}

export interface ConfigItem {
  isConfigured: boolean;
  values: ConfigItemValue[];
  type: string;
}

export interface Config {
  [key: string]: ConfigItem;
}

export interface Tag {
  name: string;
}

export interface Artifact {
  id: number;
  data: string;
  dataType: string;
  createdAt: string;
}

export interface Alert {
  id: number;
  title: string;
  description: string | null;
  source: string;
  createdAt: string;

  tags: Tag[];
  artifacts: Artifact[];
}

export interface Alerts {
  alerts: Alert[];
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface SearchParams {
  artifact: string | undefined;
  description: string | undefined;
  page: number | undefined;
  source: string | undefined;
  tag: string | undefined;
  title: string | undefined;
  fromAt: string | undefined;
  toAt: string | undefined;
}
