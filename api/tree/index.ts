import { TreeDTO } from "./dto/tree-request.interface";
import { Lambda } from "../../common/util/lambda.util";

export default Lambda((req, res) => {
  const tree = TreeDTO.from(req);

  return res.status(200).json({ tree });
});
