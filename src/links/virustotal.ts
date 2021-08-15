import { sha256 } from "js-sha256";
import URL from "url-parse";

import { Link, LinkType } from "@/types";

class VirusTotal {
  public favicon: string;
  public baseURL: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.name = "VirusTotal";
    this.baseURL = "https://www.virustotal.com";
    this.favicon = "https://www.google.com/s2/favicons?domain=virustotal.com";
    this.type = "domain";
  }
}

export class VirusTotalForDomain extends VirusTotal implements Link {
  public constructor() {
    super();
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/gui/domain/${data}/detection`;
  }
}

export class VirusTotalForIP extends VirusTotal implements Link {
  public constructor() {
    super();
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/gui/ip-address/${data}/details`;
  }
}

export class VirusTotalForURL extends VirusTotal implements Link {
  public constructor() {
    super();
    this.type = "url";
  }

  public href(data: string): string {
    const hash = sha256(this.normalizeURL(data));
    return this.baseURL + `/gui/url/${hash}/details`;
  }

  private normalizeURL(uri: string): string {
    const parsedUrl = new URL(uri);
    if (parsedUrl.pathname === "/" && !uri.endsWith("/")) {
      return `${uri}/`;
    }
    return uri;
  }
}
