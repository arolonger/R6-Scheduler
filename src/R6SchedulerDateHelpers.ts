import { getDaysInMonth, isValid } from 'date-fns';

export default class R6SchedulerDateHelpers {
    date: Date;
    locales: string[];

    constructor(date: Date = new Date(), locales: string[] = ['en-US']) {
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

    private getWeekDays(options: Intl.DateTimeFormatOptions) {
        const baseDate = new Date(Date.UTC(2017, 0, 2)); // Monday
        const weekDays = [];

        for (let i = 0; i < 7; i += 1) {
            weekDays.push(baseDate.toLocaleDateString(this.locales, options));
            baseDate.setDate(baseDate.getDate() + 1);
        }

        return weekDays;
    }

    getShortWeekDays() {
        return this.getWeekDays({ weekday: 'narrow' });
    }

    getLongWeekDays() {
        return this.getWeekDays({ weekday: 'long' });
    }
}
