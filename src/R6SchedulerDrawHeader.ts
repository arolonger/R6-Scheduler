import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';

export default class R6SchedulerDrawHeader {
    constructor() {
        // TODO: assign click handlers for next/prev
    }

    public getHeaderHtml(date: Date) {
        const wrapper = document.createElement('div');
        const prev = document.createElement('span');
        const next = document.createElement('span');
        const headerText = this.getHeaderText(date);
        const text = document.createTextNode(headerText);

        wrapper.classList.add('r6-month-year-title');
        prev.classList.add('r6-prev-month');
        next.classList.add('r6-next-month');

        wrapper.appendChild(prev);
        wrapper.appendChild(text);
        wrapper.appendChild(next);
        //     prev.addEventListener("click", this._prevMonth.bind(this));
        //     next.addEventListener("click", this._nextMonth.bind(this));

        return wrapper;
    }

    private getHeaderText(date: Date) {
        const helper = new R6SchedulerDateHelpers(date);

        return `${helper.getMonthName()} / ${helper.getYear()}`;
    }
}
