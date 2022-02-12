import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import navigation from "./navigation";
import navigationLink from "./navigationLink";
import page from "./page";
import section from "./section";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([page, section, navigation, navigationLink]),
});
