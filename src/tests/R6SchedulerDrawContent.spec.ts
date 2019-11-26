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

    it('should return "1" as number of next month days to fill 7 cells in single row', () => {
        const expectedValue = 1;
        const numberOfDaysInNovember = 30;
        const numberOfDaysBeforeNovemberToFillSingleRow = 4;
        const content = new R6SchedulerDrawContent();
        const numberOfCellsAfterDate = content.getCellsNumberAfter(numberOfDaysInNovember + numberOfDaysBeforeNovemberToFillSingleRow);

        expect(numberOfCellsAfterDate).toBe(expectedValue);
    });

    it('should return "5" as number of next month days to fill 7 cells in single row', () => {
        const expectedValue = 5;
        const numberOfDaysInDecember = 31;
        const numberOfDaysBeforeDecemberToFillSingleRow = 6;
        const content = new R6SchedulerDrawContent();
        const numberOfCellsAfterDate = content.getCellsNumberAfter(numberOfDaysInDecember + numberOfDaysBeforeDecemberToFillSingleRow);

        expect(numberOfCellsAfterDate).toBe(expectedValue);
    });

    it('should return [28, 29, 30, 31] as days to render before November 2019', () => {
        const expectedValue = [28, 29, 30, 31];
        const content = new R6SchedulerDrawContent();
        const valuesBeforeNovember = content.findValuesForCellsBeforeCurrentMonth(new Date('11/13/2019'), 4);

        expect(valuesBeforeNovember).toEqual(expectedValue);
    });

    it('should return [25, 26, 27, 28, 29, 30] as days to render before December 2019', () => {
        const expectedValue = [25, 26, 27, 28, 29, 30];
        const content = new R6SchedulerDrawContent();
        const valuesBeforeDecember = content.findValuesForCellsBeforeCurrentMonth(new Date('12/13/2019'), 6);

        expect(valuesBeforeDecember).toEqual(expectedValue);
    });

    it('should return [1] as days to render after November 2019', () => {
        const expectedValue = [1];
        const content = new R6SchedulerDrawContent();
        const valuesAfterNovember = content.findValuesForCellsAfterCurrentMonth(1);

        expect(valuesAfterNovember).toEqual(expectedValue);
    });

    it('should return [1, 2, 3, 4, 5] as days to render after December 2019', () => {
        const expectedValue = [1, 2, 3, 4, 5];
        const content = new R6SchedulerDrawContent();
        const valuesAfterNovember = content.findValuesForCellsAfterCurrentMonth(5);

        expect(valuesAfterNovember).toEqual(expectedValue);
    });
});
