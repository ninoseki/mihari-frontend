import { Link } from "@/types";

import { Censys } from "./censys";
import { Crtsh } from "./crtsh";
import { SecurityTrailsForDomain, SecurityTrailsForIP } from "./securitytrails";
import { Shodan } from "./shodan";
import { UrlscanForDomain, UrlscanForIP, UrlscanForURL } from "./urlscan";
import {
  VirusTotalForDomain,
  VirusTotalForIP,
  VirusTotalForURL,
} from "./virustotal";

export const Links: Link[] = [
  new Censys(),
  new Crtsh(),
  new SecurityTrailsForDomain(),
  new SecurityTrailsForIP(),
  new Shodan(),
  new UrlscanForDomain(),
  new UrlscanForIP(),
  new UrlscanForURL(),
  new VirusTotalForDomain(),
  new VirusTotalForIP(),
  new VirusTotalForURL(),
];
