import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/en";

dayjs.locale("en");

dayjs.extend(relativeTime);

export { dayjs };
