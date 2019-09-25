import { addMonths } from 'date-fns';
import R6SchedulerDrawHeader from './R6SchedulerDrawHeader';
import R6SchedulerDrawContent from './R6SchedulerDrawContent';

interface IR6Scheduler {
    container: HTMLElement;
    initialDate?: Date;
}

export default class R6Scheduler {
    private container: HTMLElement;
    date: Date;
    private header: R6SchedulerDrawHeader;
    private content: R6SchedulerDrawContent;

    constructor(params: IR6Scheduler) {
        this.container = params.container;
        this.date = params.initialDate || new Date();

        this.validateParameters();
        this.initialDraw(this.date);
    }

    private validateParameters() {
        if (this.container === null) {
            throw new Error('defined container is null');
        }
    }

    private initialDraw(date: Date) {
        this.header = new R6SchedulerDrawHeader({
            onPrevCallback: this.prevDate.bind(this),
            onNextCallback: this.nextDate.bind(this),
        });
        this.content = new R6SchedulerDrawContent();

        const headerHtml = this.header.getInitialHtml(date);
        const contentHtml = this.content.getInitialHtml(date);

        this.container.appendChild(headerHtml);
        this.container.appendChild(contentHtml);
    }

    private prevDate() {
        const prevDate = addMonths(this.date, -1);

        this.header.updateHeaderText(prevDate);
        this.content.updateContentHtml(prevDate);

        this.date = prevDate;
    }

    private nextDate() {
        const nextDate = addMonths(this.date, 1);

        this.header.updateHeaderText(nextDate);
        this.content.updateContentHtml(nextDate);

        this.date = nextDate;
    }
}
