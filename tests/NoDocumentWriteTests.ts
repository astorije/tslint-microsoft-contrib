/// <reference path="../typings/mocha.d.ts" />
/// <reference path="../typings/chai.d.ts" />

/* tslint:disable:quotemark */
import TestHelper = require('./TestHelper');

/**
 * Unit tests.
 */
describe('noDocumentWriteRule', () : void => {
    let RULE_NAME : string = 'no-document-write';

    it('should not produce violations ', () : void => {
        let inputFile : string = 'test-data/NoDocumentWritePassingTestInput.ts';
        TestHelper.assertViolations(RULE_NAME, inputFile, []);
    });

    it('should produce violations ', () : void => {
        let inputFile : string = 'test-data/NoDocumentWriteFailingTestInput.ts';
        TestHelper.assertViolations(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 7, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 8, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 9, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 10, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 11, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 12, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 14, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 15, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.write",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 18, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.writeln",
                "name": "test-data/NoDocumentWriteFailingTestInput.ts",
                "ruleName": "no-document-write",
                "startPosition": { "line": 19, "character": 1 }
            }
        ]);
    });

});
/* tslint:enable:quotemark */
