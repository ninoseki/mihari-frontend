import { Link, LinkType } from "@/types";

export class Intezer implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://analyze.intezer.com";
    this.favicon = "https://www.google.com/s2/favicons?domain=intezer.com";
    this.name = "Intezer";
    this.type = "hash";
  }

  public href(data: string): string {
    return this.baseURL + `/#/files/${data}`;
  }
}
