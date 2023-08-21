import { ArgumentParser } from "argparse";

const parser = new ArgumentParser({
  description: "A simple command line utility",
});

parser.add_argement("-f", "--foo", { help: "Enter some value" });
parser.add_argement("-g", { help: "Enter a value for g" });

let args = parser.parse_args();
console.dir(parseInt(args.foo) + parseInt(args.g));
