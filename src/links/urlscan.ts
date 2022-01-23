import { Link, LinkType } from "@/types";

class Urlscan {
  public favicon: string;
  public baseURL: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://urlscan.io";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://urlscan.io";
    this.name = "urlscan.io";
    this.type = "domain";
  }
}

export class UrlscanForDomain extends Urlscan implements Link {
  public constructor() {
    super();
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/domain/${data}`;
  }
}

export class UrlscanForIP extends Urlscan implements Link {
  public constructor() {
    super();
    this.type = "ip";
  }

  public href(data: string): string {
    return this.baseURL + `/ip/${data}`;
  }
}

export class UrlscanForURL extends Urlscan implements Link {
  public constructor() {
    super();
    this.type = "url";
  }

  public href(url: string): string {
    const query = encodeURIComponent(`page.url:"${url}" OR task.url:"${url}"`);
    return this.baseURL + `/search/#${query}`;
  }
}
