import R6SchedulerDateHelpers from '../R6SchedulerDateHelpers';

describe('R6Scheduler data logic', () => {
    it('should get valid date', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.isValid()).toBeTruthy();
    });

    it('should throw an exception if defined date is not valid date object', () => {
        expect(() => {
            new R6SchedulerDateHelpers(new Date('1x1/13/2011'));
        }).toThrowError('invalid date object');
    });

    it('should has "1" as a day in date', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.date.getDate()).toEqual(1);
    });

    it('should return "30" as number of days in defined month', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getDaysInMonths()).toBe(30);
    });

    it('should return "November" for default en-US locale', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getMonthName()).toBe('November');
    });

    it('should return "listopad" for polish locale', () => {
        const dateHelper = new R6SchedulerDateHelpers(
            new Date('11/13/2011'),
            ['pl-PL'],
        );

        expect(dateHelper.getMonthName()).toBe('listopad');
    });

    it('should return "2011" from defined date', () => {
        const dateHelper = new R6SchedulerDateHelpers(new Date('11/13/2011'));

        expect(dateHelper.getYear()).toBe('2011');
    });

    it('should return short english week days', () => {
        const dateHelper = new R6SchedulerDateHelpers();
        const weekDays = dateHelper.getShortWeekDays();

        expect(weekDays.length).toBe(7);
        expect(weekDays).toEqual(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
    });

    it('should return long english week days', () => {
        const dateHelper = new R6SchedulerDateHelpers();
        const weekDays = dateHelper.getLongWeekDays();

        expect(weekDays.length).toBe(7);
        expect(weekDays).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
    });
});
