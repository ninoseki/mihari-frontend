import { Link, LinkType } from "@/types";

export class Crtsh implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://crt.sh";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://crt.sh";
    this.name = "crt.sh";
    this.type = "domain";
  }

  public href(data: string): string {
    return this.baseURL + `/?q=${data}`;
  }
}
