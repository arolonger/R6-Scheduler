import R6SchedulerHtml from '../R6Scheduler-html';
import { Helpers } from './helpers/Helpers';

describe('Check html - header', () => {
    beforeAll(() => {
        const body = document.getElementsByTagName('body')[0];
        const div = Helpers.div('', 'R6Scheduler__header');
        body.appendChild(div);
        // div.appendChild(Helpers.input('input1', false));
    });

    it('should find header container', () => {
        const headerContainerDom = document.querySelector('.R6Scheduler__header');

        expect(headerContainerDom).toBeTruthy();
    });

    it('should get valid date', () => {
        const html = new R6SchedulerHtml(new Date('11/11/2011'));

        expect(html.date).toBeTruthy();
    });

    it('should display month name', () => {
        const html = new R6SchedulerHtml(new Date('11/11/2011'));
        const headerContainerDom = document.querySelector('.R6Scheduler__header');

        expect(headerContainerDom)
    });
});
