import c from "cors"

export const corsMiddleware = c({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
})
