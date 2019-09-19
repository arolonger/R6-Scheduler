import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';
import { getDaysInMonth, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns/esm';

interface IR6SchedulerDrawContentGaps {
    before: number;
    after: number;
}

export default class R6SchedulerDrawContent {
    constructor() {
    }

    public getInitialHtml(date: Date) {
        const contentContainer = document.createElement('div');
        const weekDaysHtml = this.getWeekDaysHtml();
        const daysHtml = this.getDaysHtml(date);

        contentContainer.appendChild(weekDaysHtml);
        contentContainer.appendChild(daysHtml);

        return contentContainer;
    }

    public getWeekDaysHtml() {
        const headerWrapper = document.createElement('div');
        headerWrapper.classList.add('r6-header');

        const dateHelper = new R6SchedulerDateHelpers();
        const weekDays = dateHelper.getShortWeekDays();

        weekDays.forEach((weekDay) => {
            const dayName = document.createElement('div');
            dayName.classList.add('r6-cell');
            dayName.appendChild(document.createTextNode(weekDay));
            headerWrapper.appendChild(dayName);
        });

        return headerWrapper;
    }

    public getDaysHtml(date: Date) {
        const daysContainer = document.createElement('div');
        daysContainer.classList.add('r6-content');

        const daysInMonth = String(this.getDaysInMonth(date));

        daysContainer.append(daysInMonth);

        return daysContainer;

        //     const beginGap = this._findNumberOfDaysToFillUpGap(1);
        //     this._drawGap(beginGap, daysWrapper, "begin");

        //     for (var i: number = 1; i <= this.numerOfDaysInCurrentMonth; i++) {
        //         var day = document.createElement("div");
        //         day.classList.add("r6-day");
        //         day.appendChild(document.createTextNode(String(i)));
        //         daysWrapper.appendChild(day);
        //     }

        //     const endGap = this._findNumberOfDaysToFillUpGap(this.numerOfDaysInCurrentMonth);
        //     this._drawGap(endGap, daysWrapper, "end");

        //     return daysWrapper;
    }

    public getDaysInMonth(date: Date) {
        return getDaysInMonth(date);
    }

    public findGap(date: Date): IR6SchedulerDrawContentGaps {
        const numberOfDays = this.getDaysInMonth(date);
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        let gapBefore = 0;

        if (isTuesday(firstDayOfMonth)) {
            gapBefore = 1;
        }

        if (isWednesday(firstDayOfMonth)) {
            gapBefore = 2;
        }

        if (isThursday(firstDayOfMonth)) {
            gapBefore = 3;
        }

        if (isFriday(firstDayOfMonth)) {
            gapBefore = 4;
        }

        if (isSaturday(firstDayOfMonth)) {
            gapBefore = 5;
        }

        if (isSunday(firstDayOfMonth)) {
            gapBefore = 6;
        }

        return {
            before: gapBefore,
            after: this.findGapAfter(numberOfDays + gapBefore),
        };
    }

    private findGapAfter(daysBefore: number): number {
        return 7 - (daysBefore % 7);
    }
}
