import { Link, LinkType } from "@/types";

export class Censys implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://search.censys.io";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://search.censys.io";
    this.name = "Censys";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/hosts/${data}`;
  }
}
