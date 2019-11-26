import R6SchedulerDrawHeader from '../R6SchedulerDrawHeader';

describe('R6SchedulerDrawHeader - html', () => {
    let header: R6SchedulerDrawHeader = null;

    beforeEach(() => {
        header = new R6SchedulerDrawHeader();
        header.getInitialHtml(new Date('11/13/2011'));
    });

    it('should create html containing "r6-month-year-title" class', () => {
        expect(header.textWrapper.classList.contains('r6-month-year-title')).toBeTruthy();
    });

    it('should display title "November / 2011"', () => {
        const expectedValue = 'November / 2011';

        expect(header.textWrapper.innerText).toBe(expectedValue);
    });

    it('should update title to December 2011', () => {
        const expectedValue = 'December / 2011';

        header.updateHeaderText(new Date('12/14/2011'));

        expect(header.textWrapper.innerText).toBe(expectedValue);
    });
});

describe('R6SchedulerDrawHeader - prev/next logic', () => {
    it('should change value to "21" when clicked prev button', () => {
        const expectedValue = 21;
        let value = null;
        const header = new R6SchedulerDrawHeader({
            onPrevCallback: () => value = 21,
        });

        header.onPrevCallback();

        expect(value).toBe(expectedValue);
    });

    it('should change value to "22" when clicked next button', () => {
        const expectedValue = 22;
        let value = null;
        const header = new R6SchedulerDrawHeader({
            onNextCallback: () => value = 22,
        });

        header.onNextCallback();

        expect(value).toBe(expectedValue);
    });
});
