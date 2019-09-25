import R6SchedulerDrawHeader from '../R6SchedulerDrawHeader';

describe('R6SchedulerDrawHeader - html', () => {
    it('should create html for header containing month and year set to November 2011', () => {
        const header = new R6SchedulerDrawHeader();

        header.getInitialHtml(new Date('11/13/2011'));

        expect(header.textWrapper.classList.contains('r6-month-year-title')).toBeTruthy();
        expect(header.textWrapper.innerText).toBe('November / 2011');
    });

    it('should update title to December 2011', () => {
        const header = new R6SchedulerDrawHeader();

        header.getInitialHtml(new Date('11/13/2011'));
        header.updateHeaderText(new Date('12/14/2011'));

        expect(header.textWrapper.innerText).toBe('December / 2011');
    });
});

describe('R6SchedulerDrawHeader - logic', () => {
    it('should call function when clicked prev button', () => {
        const header = new R6SchedulerDrawHeader();

        spyOn(header, 'onPrevClicked');
        header.onPrevClicked();

        expect(header.onPrevClicked).toHaveBeenCalled();
    });

    it('should call function when clicked next button', () => {
        const header = new R6SchedulerDrawHeader();

        spyOn(header, 'onNextClicked');
        header.onNextClicked();

        expect(header.onNextClicked).toHaveBeenCalled();
    });
});
