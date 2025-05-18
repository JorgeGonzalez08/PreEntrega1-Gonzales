import { Command } from "commander";

const args = new Command();

args.option("--mode <mode>","to specify mode", "dev")

args.parse()

export default args.opts()