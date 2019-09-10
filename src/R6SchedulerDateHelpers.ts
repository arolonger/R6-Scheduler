import { getDaysInMonth, isValid } from 'date-fns';
export default class R6SchedulerDateHelpers {
    date: Date;
    locales: string;

    constructor(date: Date, locales = 'en-US') {
        this.date = new Date(date.getFullYear(), date.getMonth(), 1);
        this.locales = locales;

        this.isValid();
    }

    isValid() {
        if (isValid(this.date)) {
            return true;
        }

        throw new Error('invalid date object');
    }

    getDaysInMonths() {
        return getDaysInMonth(this.date);
    }

    getMonthName() {
        return this.date.toLocaleString(this.locales, { month: 'long' });
    }
    // generate(date: Date) {
    //     const wholeHtmlContainer = document.createElement('div');
    //     const exampleDiv = document.createTextNode(String(getDaysInMonth(date)));

    //     return wholeHtmlContainer.appendChild(exampleDiv);
    // }

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
