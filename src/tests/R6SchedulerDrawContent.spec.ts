import R6SchedulerDrawContent from '../R6SchedulerDrawContent';

describe('Check require parameters', () => {
    it('should create html', () => {
        const content = new R6SchedulerDrawContent();
        content.getInitialHtml(new Date('11/13/2011'));

        expect(content).toBeTruthy();
    });

    // it('should return 0 as gap before when first day is Monday', () => {
    //     const content = new R6SchedulerDrawContent();
    //     const gaps = content.findGap(new Date('7/13/2019'));

    //     expect(gaps.before).toBe(0);
    // });

    // it('should return 6 as gap before when first day is Sunday', () => {
    //     const content = new R6SchedulerDrawContent();
    //     const gaps = content.findGap(new Date('9/13/2019'));

    //     expect(gaps.before).toBe(6);
    // });

    // it('should return 4 as gap before and 1 as gap after', () => {
    //     const content = new R6SchedulerDrawContent();
    //     const gaps = content.findGap(new Date('11/13/2019'));

    //     expect(gaps.before).toBe(4);
    //     expect(gaps.after).toBe(1);
    // });

    it('should return [28, 29, 30, 31] as days to render before November 2019', () => {
        const expectedValue = [28, 29, 30, 31];
        const content = new R6SchedulerDrawContent();
        const dateManager = content.prepareDataToDrawContent(new Date('11/13/2019'));

        expect(dateManager.daysBefore).toEqual(expectedValue);
    });
});
