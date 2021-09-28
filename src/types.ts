export interface ConfigStatusValue {
  key: string;
  value: string | null;
}

export interface ConfigStatus {
  isConfigured: boolean;
  values: ConfigStatusValue[];
  type: string;
}

export interface Config {
  name: string;
  status: ConfigStatus;
}

export interface Tag {
  name: string;
}

export interface Tags {
  tags: string[];
}

export interface Sources {
  sources: string[];
}

export interface DnsRecord {
  resource: string;
  value: string;
}

export interface Contact {
  name: string | null;
  organization: string | null;
}

export interface Registrar {
  name: string | null;
  organization: string | null;
}

export interface WhoisRecord {
  createdOn: Date | null;
  updatedOn: Date | null;
  expiresOn: Date | null;
  registrar: Registrar | null;
  contacts: Contact[];
}

export interface AutonomousSystem {
  asn: number;
}

export interface Geolocation {
  country: string;
  countryCode: string;
}

export interface ReverseDnsName {
  name: string;
}

export interface Artifact {
  id: number;
  data: string;
  dataType: string;
  createdAt: string;

  autonomousSystem: AutonomousSystem | null;
  whoisRecord: WhoisRecord | null;
  geolocation: Geolocation | null;

  dnsRecords: DnsRecord[] | null;
  reverseDnsNames: ReverseDnsName[] | null;
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
  asn: number | undefined;
  dnsRecord: string | undefined;
  reverseDnsName: string | undefined;
}

export interface CommandOutput {
  output: string;
  success: boolean;
}

export interface IPInfo {
  ip: string;
  hostname: string | null;
  loc: string;
  countryCode: string;
  asn: string;
}

export interface GCS {
  lat: number;
  long: number;
}

export interface Country {
  name: string;
  code: string;
  lat: number;
  long: number;
}

export type LinkType = "ip" | "domain" | "url" | "hash";

export interface Link {
  name: string;
  type: string;
  baseURL: string;
  favicon: string;
  // eslint-disable-next-line no-unused-vars
  href(data: string): string;
}
