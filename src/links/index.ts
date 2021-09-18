import { Link } from "@/types";

import { AnyRun } from "./anyrun";
import { Censys } from "./censys";
import { Crtsh } from "./crtsh";
import { Intezer } from "./intezer";
import { SecurityTrailsForDomain, SecurityTrailsForIP } from "./securitytrails";
import { Shodan } from "./shodan";
import { UrlscanForDomain, UrlscanForIP, UrlscanForURL } from "./urlscan";
import {
  VirusTotalForDomain,
  VirusTotalForHash,
  VirusTotalForIP,
  VirusTotalForURL,
} from "./virustotal";

export const Links: Link[] = [
  new Intezer(),
  new AnyRun(),
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
  new VirusTotalForHash(),
];
