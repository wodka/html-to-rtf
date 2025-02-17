const should = require('should');
const FontSize = require('./font-size.class');

describe('FontSizeTest', () => {
    describe('getFontSizeReferenceInPx()', () => {
        it('Should return a value in pt', () => {
            should(FontSize.getFontSizeReferenceInPx('10px;')).be.equal('\\fs7');
            should(FontSize.getFontSizeReferenceInPx('10.5px;')).be.equal('\\fs7');
            should(FontSize.getFontSizeReferenceInPx('9.8px;')).be.equal('\\fs7');
        });
    });

    describe('getRtfFontSizeReference()', () => {
        it('Should return a value in pt', () => {
            should(FontSize.getRtfFontSizeReference('10.5px;')).be.equal('\\fs7');
            should(FontSize.getRtfFontSizeReference('')).be.undefined();
        });
    });
});
