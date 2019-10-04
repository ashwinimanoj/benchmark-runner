const reporter = require('./report');

describe('ReportTest', () => {
    describe('repeatStr', () => {
        it('should call process.stdout.write', () => {
            const spy = jest.spyOn(process.stdout, 'write');
            reporter([]);
            expect(process.stdout.write).toHaveBeenCalled();
        });
    });
});