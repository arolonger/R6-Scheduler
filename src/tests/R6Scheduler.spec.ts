import R6Scheduler from '../R6Scheduler';
import { DomHelpers } from './helpers/DomHelpers';

describe('Check require parameters', () => {
    beforeAll(() => {
        const body = document.getElementsByTagName('body')[0];
        const div = DomHelpers.div('', 'js-r6-scheduler');
        body.appendChild(div);
        // div.appendChild(DomHelpers.input('input1', false));
    });

    it('should throw an error when defined container doesn\'t exists', () => {
        expect(() => {
            new R6Scheduler({
                container: document.querySelector('.js-r6-scheduler-that-doesnt-exists'),
            });
        }).toThrowError('defined container is null');
    });
});
