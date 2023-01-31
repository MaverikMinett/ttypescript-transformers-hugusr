import * as ts from 'typescript';

export default function(opts?) {
    function transformer(ctx: ts.TransformationContext, node: ts.Node) {
        const visitor: ts.Visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
            console.log(node)
            return ts.visitEachChild(node, visitor, ctx)
        }
        return visitor
    }

    return (ctx: ts.TransformationContext): ts.Transformer<ts.Node> => {
        return (node: ts.Node) =>  ts.visitNode(node, transformer(ctx, node));
    };
}


// // import * as ts from 'typescript';

// // const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
// //     return sourceFile => {

// //         const visitor = (node: ts.Node) => {

// //             if ( ts.isIdentifier(node) ) {
// //                 switch (node.escapedText) {
// //                     case 'babel':
// //                         return ts.createIdentifier('typescript')
// //                     case 'plugins':
// //                         return ts.createIdentifier('transformers')
// //                 }
// //             }

// //             return ts.visitEachChild(sourceFile, visitor, context)
// //         }

// //         return ts.visitNode(sourceFile, visitor)
// //     }
// // }

// // export default transformer


// import * as ts from 'typescript';

// const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
//   return sourceFile => {
//     return sourceFile
//     // const visitor = (node: ts.Node): ts.Node => {
//     //   if (ts.isIdentifier(node)) {
//     //     switch (node.escapedText) {
//     //       case 'babel':
//     //         return ts.createIdentifier('typescript');

//     //       case 'plugins':
//     //         return ts.createIdentifier('transformers');
//     //     }
//     //   }

//     //   return ts.visitEachChild(node, visitor, context);
//     // };

//     // return ts.visitNode(sourceFile, visitor);
//   };
// };

// export default transformer;
