import R6Scheduler from '../R6Scheduler';
import { Helpers } from './helpers/Helpers';

describe('Check require parameters', () => {
    beforeAll(() => {
        const body = document.getElementsByTagName('body')[0];
        const div = Helpers.div('', 'js-r6-scheduler');
        body.appendChild(div);
        // div.appendChild(Helpers.input('input1', false));
    });

    it('should has defined container for scheduler', () => {
        const scheduler = new R6Scheduler({
            container: document.querySelector('.js-r6-scheduler'),
        });

        expect(scheduler.container.classList.contains('js-r6-scheduler')).toBeTruthy();
    });
});
