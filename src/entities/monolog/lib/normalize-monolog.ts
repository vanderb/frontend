import { EVENT_TYPES, ServerEvent } from "~/src/shared/types";
import { Monolog, NormalizedMonolog } from "../types";

export const normalizeMonolog = (event: ServerEvent<Monolog>): NormalizedMonolog => ({
  id: event.uuid,
  type: EVENT_TYPES.VAR_DUMP,
  labels: [EVENT_TYPES.VAR_DUMP],
  origin: {
    file: event.payload.context!.source.file,
    line_number: event.payload.context!.source.line,
    name: event.payload.context!.source.name,
  },
  serverName: "",
  date: event.timestamp ? new Date(event.timestamp * 1000) : null,
  payload: event.payload
})
