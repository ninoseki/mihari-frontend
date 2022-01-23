import { Link, LinkType } from "@/types";

export class DNSlyticsForIP implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://dnslytics.com";
    this.favicon = "https://www.google.com/s2/favicons?domain=dnslytics.com";
    this.name = "DNSlytics";
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/ip/${data}`;
  }
}

export class DNSlyticsForDomain implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://dnslytics.com";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dnslytics.com";
    this.name = "DNSlytics";
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/domain/${data}`;
  }
}
