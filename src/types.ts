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

export interface ArtifactWithTags extends Artifact {
  tags: string[];
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

export interface CommandOutput {
  output: string;
  success: boolean;
}

export interface IPInfo {
  ip: string;
  hostname: string | null;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
}

export interface Geolocation {
  lat: number;
  long: number;
}

export interface Country {
  name: string;
  code: string;
  lat: number;
  long: number;
}

export type LinkType = "ip" | "domain" | "url";

export interface Link {
  name: string;
  type: string;
  baseURL: string;
  favicon: string;
  // eslint-disable-next-line no-unused-vars
  href(data: string): string;
}
