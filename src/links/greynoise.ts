import { Link, LinkType } from "@/types";

export class GreyNoise implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://www.greynoise.io";
    this.favicon = "https://www.google.com/s2/favicons?domain=greynoise.io";
    this.name = "GreyNoise";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/viz/query?gnql=ip:${data}`;
  }
}
