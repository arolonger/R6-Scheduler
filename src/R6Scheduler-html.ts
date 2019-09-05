import { getDaysInMonth } from 'date-fns/esm';

export default class R6SchedulerHtml {
    date: Date;

    constructor(date: Date) {
        this.date = new Date(date.getFullYear(), date.getMonth(), 1);
    }

    generate(date: Date) {
        const wholeHtmlContainer = document.createElement('div');
        const exampleDiv = document.createTextNode(String(getDaysInMonth(date)));

        return wholeHtmlContainer.appendChild(exampleDiv);
    }

    // drawTopHeader() {
    //     const wrapper = document.createElement('div');
    //     const prev = document.createElement('span');
    //     const next = document.createElement('span');

    //     wrapper.classList.add('r6-month-year-title');
    //     prev.classList.add('r6-prev-month');
    //     next.classList.add('r6-next-month');

    //     wrapper.appendChild(prev);
    //     wrapper.appendChild(document.createTextNode(`${this.monthName} / ${this.yearNumber}`));
    //     wrapper.appendChild(next);
    //     prev.addEventListener('click', this._prevMonth.bind(this));
    //     next.addEventListener('click', this._nextMonth.bind(this));

    //     return wrapper;
    // }
}
