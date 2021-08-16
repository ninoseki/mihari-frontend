import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { getCountryByCode } from "@/countries";
import { Geolocation, IPInfo } from "@/types";

dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

export function getHumanizedRelativeTime(datetime: string): string {
  return dayjs(datetime).local().fromNow();
}

export function getGeolocation(ipinfo: IPInfo): Geolocation | undefined {
  if (ipinfo.loc !== undefined) {
    const numbers = ipinfo.loc.split(",");
    if (numbers.length === 2) {
      const lat = numbers[0];
      const long = numbers[1];

      return { lat: parseFloat(lat), long: parseFloat(long) };
    }
  }

  const country = getCountryByCode(ipinfo.country);
  if (country !== undefined) {
    return { lat: country.lat, long: country.long };
  }
}
