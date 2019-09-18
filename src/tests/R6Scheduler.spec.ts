import R6Scheduler from '../R6Scheduler';
import { DomHelpers } from './helpers/DomHelpers';

describe('Check require parameters', () => {
    beforeAll(() => {
        const body = document.getElementsByTagName('body')[0];
        const div = DomHelpers.div('', 'js-r6-scheduler');
        body.appendChild(div);
    });

    it('should throw an error when defined container doesn\'t exists', () => {
        expect(() => {
            new R6Scheduler({
                container: document.querySelector('.js-r6-scheduler-that-doesnt-exists'),
            });
        }).toThrowError('defined container is null');
    });

    it('should use today date when no initial date passed', () => {
        const scheduler = new R6Scheduler({
            container: document.querySelector('.js-r6-scheduler'),
        });

        expect(scheduler.date.getDate()).toBe(new Date().getDate());
        expect(scheduler.date.getMonth()).toBe(new Date().getMonth());
        expect(scheduler.date.getFullYear()).toBe(new Date().getFullYear());
    });

    it('should use 11/13/2011 as initial date', () => {
        const scheduler = new R6Scheduler({
            container: document.querySelector('.js-r6-scheduler'),
            initialDate: new Date('11/13/2011'),
        });

        expect(scheduler.date.getDate()).toBe(13);
        expect(scheduler.date.getMonth()).toBe(10);
        expect(scheduler.date.getFullYear()).toBe(2011);
    });
});
