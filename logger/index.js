import { appendLogLine, writeLogLine, readLogFile } from "./logger";
writeLogLine("log.txt", "test line\n");
readLogFile("log.txt");
appendLogLine("log.txt", "second line\n");
readLogFile("log.txt");
