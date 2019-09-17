import R6SchedulerDateHelpers from '../R6SchedulerDateHelpers';

describe('R6Scheduler data logic', () => {
    it('should get valid date', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.isValid()).toBeTruthy();
    });

    it('should throw an exception if date is not valid date object', () => {
        expect(() => {
            new R6SchedulerDateHelpers(new Date('1x1/13/2011'));
        }).toThrowError('invalid date object');
    });

    it('should has "1" as a day in date', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.date.getDate()).toEqual(1);
    });

    it('should return number of days in month', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getDaysInMonths()).toBe(30);
    });

    it('should return full month name for default en-US locale', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getMonthName()).toBe('November');
    });

    it('should return full month name for polish locale', () => {
        const dateHelper = new R6SchedulerDateHelpers(
            new Date('11/13/2011'),
            ['pl-PL'],
        );

        expect(dateHelper.getMonthName()).toBe('listopad');
    });

    it('should return year', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getYear()).toBe('2011');
    });
});
