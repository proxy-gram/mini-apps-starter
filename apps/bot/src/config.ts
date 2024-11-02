import {get} from "env-var"

export const config = {
  botToken: get("TELEGRAM_BOT_TOKEN").required().asString(),
  webAppUrl: get("WEB_APP_URL").required().asString(),
}
