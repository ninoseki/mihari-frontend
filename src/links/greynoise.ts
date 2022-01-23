import { Link, LinkType } from "@/types";

export class GreyNoise implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://www.greynoise.io";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.greynoise.io";
    this.name = "GreyNoise";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/viz/query?gnql=ip:${data}`;
  }
}
