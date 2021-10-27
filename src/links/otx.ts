import { Link, LinkType } from "@/types";

export class OtxForIP implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://otx.alienvault.com";
    this.favicon =
      "https://www.google.com/s2/favicons?domain=otx.alienvault.com";
    this.name = "OTX";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/indicator/ip/${data}`;
  }
}

export class OtxForDomain implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://otx.alienvault.com";
    this.favicon =
      "https://www.google.com/s2/favicons?domain=otx.alienvault.com";
    this.name = "OTX";
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/indicator/domain/${data}`;
  }
}
