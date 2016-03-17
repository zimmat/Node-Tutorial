var assert = require("assert");

describe("ReadFolder", function(){

    it('should find the lines syncronously', function(){
        var readFolder = require('../read-folder');
        var results = readFolder.linesInFiles('./files/week1');
        assert.equal(Array.isArray(results), true, 'results should be an array');
        assert.equal(11, results.length);
    });

    it('should find the lines asyncronously', function(done){
        var readFolder = require('../read-folder');
        readFolder.linesInFilesAsync('./files/week1', function(err, entries){
            assert.equal(Array.isArray(entries), true, 'entries should be an array');
            assert.equal(11, entries.length);
            done();
        });
    });

});
