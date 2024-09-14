import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

// const getJSXRuntime = (filePath) => {
//   if (filePath.includes('solid')) {
//     return {
//       jsxImportSource: 'solid-js',
//       jsxInject: `import { h, Fragment } from 'solid-js'`,
//     };
//   }
//   // Default to React if not Solid.js
//   return {
//     jsxImportSource: 'react',
//     jsxInject: `import React from 'react'`,
//   };
// };

// https://astro.build/config
export default defineConfig({
  server: { port: 4000 },
  vite: {
    // plugins: [{
    //   name: 'conditional-jsx-runtime',
    //   transform(code, id) {
    //     if (id.includes("jsx")) {
    //       const solidComment = "/** @jsxImportSource solid-js */"
    //       const content = readFileSync(id, "utf8") || ""
    //       if (content.includes(solidComment)) {
    //         console.log(`content`, content)
    //       }
    //     }
    //     if (/\.(jsx|tsx)$/.test(id)) {
    //       const { jsxImportSource, jsxInject } = getJSXRuntime(id);
    //       return {
    //         code: `/** @jsxImportSource ${jsxImportSource} */\n${jsxInject}\n${code}`,
    //         map: null, // provide source map if necessary
    //       };
    //     }
    //     return null;
    //   },
    // }]
    // esbuild: {
    //   jsx: "preserve",
    //   jsxInject: readFileSync("/home/royaltsp/tsp/astro/start-astro/solid-js-transform.js", "utf8"),
    //   // jsxFactory: 'h',
    //   // jsxFragment: 'Fragment',
    // },
    // optimizeDeps: {
    //   esbuildOptions: {
    //     plugins: [
    //       {
    //         name: "solid-inject",
    //         setup: (build) => {
    //           console.log(`build`, build)
    //           build.onLoad({ filter: /jsx/, }, (args) => {
    //             console.log(`args`, args.path)
    //             return { loader: "jsx", contents: "" }
    //           })
    //         }
    //       }
    //     ]
    //   }
    // },
  },
  integrations: [
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    solid({
      include: ['**/solid/*'],
    }),
  ],
});
