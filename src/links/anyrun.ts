import { Link, LinkType } from "@/types";

export class AnyRun implements Link {
  public baseURL: string;
  public favicon: string;
  public name: string;
  public type: LinkType;

  public constructor() {
    this.baseURL = "https://app.any.run";
    this.favicon =
      "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://app.any.run";
    this.name = "ANY.RUN";
    this.type = "hash";
  }

  public href(data: string): string {
    return this.baseURL + `/submissions/#filehash:${data}`;
  }
}
