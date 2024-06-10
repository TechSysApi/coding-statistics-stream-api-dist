var variables={
  "name": "@ch-post-logistics/coding-statistics-stream-api",
  "version": "0.2.0-feature-initial-api-setup.3",
  "description": "Statistic Data from the new Coding Solution",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "erkennen.codieren.pakete@post.ch",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.34",
    "apikana-defaults": "0.0.92",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "erkennen.codieren@post.ch",
    "namespace": "logistics.coding.statistics",
    "shortName": "coding-statistics",
    "projectName": "coding-statistics-stream-api",
    "title": "Coding Statistics Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.Logistics.Coding.Statistics.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Coding.Statistics.StreamApi",
    "mqs": "Kafka",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}