import { AccessControl } from "accesscontrol";

const ac = new AccessControl();

ac.grant("user")
  .createOwn("workout")
  .readOwn("workout")
  .deleteOwn("workout")
  .updateOwn("workout")
  .createOwn("account")
  .readOwn("account")
  .updateOwn("account")
  .deleteOwn("account");

ac.grant("admin")
  .extend("user")
  .readAny("workout")
  .deleteAny("workout")
  .updateAny("workout")
  .readAny("account", ["*", "!password"])
  .deleteAny("account")
  .updateAny("account");

export default ac;
