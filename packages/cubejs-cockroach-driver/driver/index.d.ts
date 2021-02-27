import { BaseDriver } from "@cubejs-backend/query-orchestrator";
import { PoolConfig } from "pg";

declare module "@cubejs-backend/cockroach-driver" {
  export default class CockroachDriver extends BaseDriver {
    constructor(options?: PoolConfig);
    release(): Promise<void>
  }
}
