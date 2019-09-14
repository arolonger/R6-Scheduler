import { DomHelpers } from './helpers/DomHelpers';
import R6SchedulerDrawHeader from '../R6SchedulerDrawHeader';

describe('Check require parameters', () => {
    beforeAll(() => {
        const body = document.getElementsByTagName('body')[0];
        const div = DomHelpers.div('', 'r6-month-year-title');
        const prev = DomHelpers.span('', 'r6-prev-month');
        const next = DomHelpers.span('', 'r6-next-month');
        const text = document.createTextNode('November / 2011');

        div.appendChild(prev);
        div.appendChild(text);
        div.appendChild(next);
        body.appendChild(div);
    });

    it('should create html for header containg month and year', () => {
        const header = new R6SchedulerDrawHeader();
        const headerHtml = header.getHeaderHtml(new Date('11/13/2011'));

        expect(headerHtml.innerText).toBe('November / 2011');
    });
});
