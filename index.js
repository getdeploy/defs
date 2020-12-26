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

const goClient = `
package <%- v.toLowerCase() %>

import (
	"sync"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/grpc-opentracing/go/otgrpc"
	"github.com/lileio/lile/v2"
	opentracing "github.com/opentracing/opentracing-go"
	"google.golang.org/grpc"
)

var (
	cm     = &sync.Mutex{}
	Client <%- v %>Client
)

func GetClient() <%- v %>Client {
	cm.Lock()
	defer cm.Unlock()

	if Client != nil {
		return Client
	}

	serviceURL := lile.URLForService("<%- v.toLowerCase() %>")

	// We don't need to error here, as this creates a pool and connections
	// will happen later
	conn, _ := grpc.Dial(
		serviceURL,
		grpc.WithInsecure(),
		grpc.WithUnaryInterceptor(
			grpc_middleware.ChainUnaryClient(
				lile.ContextClientInterceptor(),
				otgrpc.OpenTracingClientInterceptor(opentracing.GlobalTracer()),
			),
		))

	cli := New<%- v %>Client(conn)
	Client = cli
	return cli
}
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
      if (!k.includes("validations")) {
        var goclientOut = ejs.render(goClient, { v: camelize(k) });
        fs.writeFileSync(`./${k}/client.go`, goclientOut, { flag: "w" });
      }

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
