var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('poxtxml-imgalt', function () {
    it('set alt', function () {
        test(
            '<img src="image.png">',
            '<img src="image.png" alt="">',
            {}
        );
    });
});
