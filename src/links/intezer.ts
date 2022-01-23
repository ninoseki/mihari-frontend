import { Link, LinkType } from "@/types";

export class Intezer implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://analyze.intezer.com";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://analyze.intezer.com";
    this.name = "Intezer";
    this.type = "hash";
  }

  public href(data: string): string {
    return this.baseURL + `/#/files/${data}`;
  }
}
