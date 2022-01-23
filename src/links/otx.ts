import { Link, LinkType } from "@/types";

export class OtxForIP implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://otx.alienvault.com";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://otx.alienvault.com";
    this.name = "OTX";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/indicator/ip/${data}`;
  }
}

export class OtxForDomain extends OtxForIP implements Link {
  public type: LinkType;

  public constructor() {
    super();
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/indicator/domain/${data}`;
  }
}
