const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAlmost = require('chai-almost')

chai.use(sinonChai)
chai.use(chaiAlmost(10))
