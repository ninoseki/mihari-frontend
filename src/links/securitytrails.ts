import { Link, LinkType } from "@/types";

class SecurityTrails {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://securitytrails.com";
    this.favicon =
      "https://www.google.com/s2/favicons?domain=securitytrails.com";
    this.name = "SecurityTrails";
    this.type = "domain";
  }
}

export class SecurityTrailsForDomain extends SecurityTrails implements Link {
  public constructor() {
    super();
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/domain/${data}/dns`;
  }
}

export class SecurityTrailsForIP extends SecurityTrails implements Link {
  public constructor() {
    super();
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/list/ip/${data}`;
  }
}
