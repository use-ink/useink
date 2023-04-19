import { Config } from "../providers/config/model.ts";
import { ConfigContext } from "../providers/config/context.ts";
import { useContext } from "react";

export const useConfig = () => useContext<Config>(ConfigContext);
