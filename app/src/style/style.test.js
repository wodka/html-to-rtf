const should = require('should');
const Style = require('./style.class');
const Color = require('./../color/color.class');

describe('StyleTest', () => {
    describe('getRtfReferenceColor()', () => {
        before(() => Color.cleanColorTable());

        it('should return rtf reference color', () => {
            should(Style.getRtfReferenceColor('#333')).be.equal('\\cf1');
        });
    });

    describe('getRtfColorTable()', () => {
        before(() => {
            Color.cleanColorTable();
            Color.addColorInColorTable([255, 255, 255]);
        });

        it('should return rtf structure of color table', () => {
            const RTF_COLOR_TABLE_OPENING = '{\\colortbl ;';
            const RTF_COLOR_TABLE_CLOSING = '}';

            should(Style.getRtfColorTable()).be.equal(`${RTF_COLOR_TABLE_OPENING}\\red255\\green255\\blue255;${RTF_COLOR_TABLE_CLOSING}`);
        });
    });

    describe('getRtfAlignmentReference()', () => {
        it('should return rtf reference', () => {
            should(Style.getRtfAlignmentReference('center')).be.equal('\\qc');
            should(Style.getRtfAlignmentReference('left')).be.equal('\\ql');
            should(Style.getRtfAlignmentReference('right')).be.equal('\\qr');
            should(Style.getRtfAlignmentReference('justify')).be.equal('\\qj');
            should(Style.getRtfAlignmentReference('')).be.undefined();
        });
    });

    describe('getRtfFontSizeReference()', () => {
        const FONT_SIZE_RTF_REFERENCE = '\\fs';
        const ONE_PIXEL_IN_POINT = 0.75;

        it('PX', () => {
            should(Style.getRtfFontSizeReference('15px')).be.equal(FONT_SIZE_RTF_REFERENCE + 11);
            should(Style.getRtfFontSizeReference('15px;')).be.equal(FONT_SIZE_RTF_REFERENCE + 11);
            should(Style.getRtfFontSizeReference('15')).be.undefined();
            should(Style.getRtfFontSizeReference('')).be.undefined();
        });
    });

    describe('getRtfReferencesInStyleProperty()', () => {
        before(() => Color.cleanColorTable());

        it('color: #333; font-size: 20px; align-text: center;', () => {
            should(Style.getRtfReferencesInStyleProperty('color: #333; font-size: 20px; text-align: center;')).be.equal('\\cf1\\fs15\\qc');
        });

        it('Style empty', () => {
            should(Style.getRtfReferencesInStyleProperty('')).be.undefined();
        });
    });
});
