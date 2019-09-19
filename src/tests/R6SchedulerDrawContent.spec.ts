import R6SchedulerDrawContent from '../R6SchedulerDrawContent';

describe('Check require parameters', () => {
    it('should create html', () => {
        const content = new R6SchedulerDrawContent();
        content.getInitialHtml(new Date('11/13/2011'));

        expect(content).toBeTruthy();
    });

    it('should return number of days in month', () => {
        const content = new R6SchedulerDrawContent();
        const daysCounter = content.getDaysInMonth(new Date('11/13/2011'));

        expect(daysCounter).toBe(30);
    });

    it('should return 0 as gap before', () => {
        const content = new R6SchedulerDrawContent();
        const gaps = content.findGap(new Date('7/13/2019'));

        expect(gaps.before).toBe(0);
    });
});
