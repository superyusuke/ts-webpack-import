import * as express from "express";
import { Request, Response } from "express";
import { music } from "src/music";
import { testStrings } from "others/testString";

const app = express();
const { PORT = 3000 } = process.env;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world!" + music + testStrings
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("server started at http://localhost:" + PORT);
  });
}

export default app;
