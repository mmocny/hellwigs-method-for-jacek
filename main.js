#!/usr/bin/env node

if (require.main === module) {
  require('./tests')();
} else {
  // TODO what do we do when we are required() ?
}
