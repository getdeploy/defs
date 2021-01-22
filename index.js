const glob = require("glob");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");
const prettier = require("prettier");

const mainIndexjs = `
<% for (const [k, value] of Object.entries(packages)) { -%>
const <%- k %> = require("./<%- k %>/index.js");
<% } -%>

module.exports = { <%= Object.keys(packages).join(", "); %> }
`;

const mainIndexdts = `
<% for (const [k, value] of Object.entries(packages)) { -%>
import * as <%- k %> from "./<%- k %>";
<% } -%>

export { <%= Object.keys(packages).join(", "); %> }
`;

const packageIndexjs = `
module.exports = Object.assign(
  {},
<% package.map(v => { -%>
  require("./<%- v %>"),
<% }) -%>
);
`;

const packageIndexdts = `
<% package.map(v => { -%>
export * from "./<%- v %>";
<% }) -%>
`;

const folders = ["clients/grpcweb", "clients/node"];

// This would look something like
// {
//    accounts: [ 'accounts_pb.js' ],
//    auth: [ 'auth_pb.js' ]
// }

folders.forEach((f) => {
  const packages = {};
  glob(`./${f}/*/*.js`, null, function (er, files) {
    if (er) {
      console.log(er);
      return;
    }

    files.forEach((x) => {
      if (x.includes("node_modules") || x.includes("index.js")) {
        return;
      }

      if (!packages[path.dirname(x).split(path.sep).pop()]) {
        packages[path.dirname(x).split(path.sep).pop()] = [];
      }

      packages[path.dirname(x).split(path.sep).pop()].push(path.basename(x));
    });

    console.log(packages);

    var indexjsOut = ejs.render(mainIndexjs, { packages });
    indexjsOut = prettier.format(indexjsOut, { parser: "babel" });
    fs.writeFileSync(`./${f}/index.js`, indexjsOut, { flag: "w" });

    indexjsOut = ejs.render(mainIndexdts, { packages });
    indexjsOut = prettier.format(indexjsOut, { parser: "babel" });
    fs.writeFileSync(`./${f}/index.d.ts`, indexjsOut, { flag: "w" });

    for (const [k, package] of Object.entries(packages)) {
      indexjsOut = ejs.render(packageIndexjs, { package });
      indexjsOut = prettier.format(indexjsOut, { parser: "babel" });
      fs.writeFileSync(`./${f}/${k}/index.js`, indexjsOut, { flag: "w" });

      indexjsOut = ejs.render(packageIndexdts, { package });
      indexjsOut = prettier.format(indexjsOut, { parser: "babel" });
      fs.writeFileSync(`./${f}/${k}/index.d.ts`, indexjsOut, { flag: "w" });
    }
  });
});

function camelize(str) {
  str = str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
  return str.charAt(0).toUpperCase() + str.slice(1);
}
