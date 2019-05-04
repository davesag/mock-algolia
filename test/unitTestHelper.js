const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const chaiAlmost = require('chai-almost')

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiAlmost(10))
