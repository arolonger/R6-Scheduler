import { DomHelpers } from './helpers/DomHelpers';
import R6SchedulerDrawHeader from '../R6SchedulerDrawHeader';

describe('Check require parameters', () => {
    it('should create html for header containing month and year', () => {
        const header = new R6SchedulerDrawHeader();
        header.getInitialHtml(new Date('11/13/2011'));

        expect(header.textWrapper.innerText).toBe('November / 2011');
    });

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
