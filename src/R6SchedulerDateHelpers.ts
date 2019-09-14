import { getDaysInMonth, isValid } from 'date-fns';
export default class R6SchedulerDateHelpers {
    date: Date;
    locales: string[];

    constructor(date: Date, locales: string[] = ['en-US']) {
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

    getYear() {
        return String(this.date.getFullYear());
    }
}
