import {
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
    isSunday,
    addMonths,
    addDays,
    lastDayOfMonth,
    getDaysInMonth,
} from 'date-fns';
import R6SchedulerHtml from './R6Scheduler-html';

interface IR6Scheduler {
    container: HTMLElement;
}

export default class R6Scheduler {
    container: HTMLElement;
    // currentDate: Date;
    // fillGaps: boolean; 
    // locales: string;
    // numerOfDaysInCurrentMonth: number;
    // monthName: string;
    // dayNumber: number;
    // monthNumber: number;
    // yearNumber: number;

    constructor(params: IR6Scheduler) {
        this.container = params.container;
        // this.currentDate = this._overwriteCurrentDate(params.initialDate);
        // this.fillGaps = params.fillGaps;
        // this.locales = params.locales || []; 

        // this._generate(this.currentDate)
        const html = new R6SchedulerHtml(new Date());
        this.container.appendChild(html.generate(new Date()));
    }

    // _overwriteCurrentDate(date: Date): Date {
    //     this.dayNumber = 1;
    //     this.monthNumber = date.getMonth();
    //     this.yearNumber = date.getFullYear();

    //     return new Date(this.yearNumber, this.monthNumber, this.dayNumber);
    // }

    // _generate(date: Date): void {
    //     let wholeHtmlContainer = document.createElement("div");
    //     this.numerOfDaysInCurrentMonth = getDaysInMonth(date);
    //     this.monthName = this._getMonthName(date);

    //     this.currentDate = this._overwriteCurrentDate(date);

    //     wholeHtmlContainer.appendChild(this._drawTopHeader());
    //     wholeHtmlContainer.appendChild(this._drawWeekDays());
    //     wholeHtmlContainer.appendChild(this._drawDays());
    //     this._finalDraw(wholeHtmlContainer);
    // }

    // _finalDraw(wholeHtmlToRender: Element) {
    //     if (this.dom.firstChild) {
    //         this.dom.removeChild(this.dom.firstChild);
    //     }
    //     this.dom.appendChild(wholeHtmlToRender);
    // }

    // _getWeekDays() {
    //     var baseDate = new Date(Date.UTC(2017, 0, 2)); // Monday
    //     var weekDays = [];

    //     for (let i = 0; i < 7; i++) {
    //         weekDays.push(baseDate.toLocaleDateString(this.locales, { weekday: 'narrow' }));
    //         baseDate.setDate(baseDate.getDate() + 1);
    //     }

    //     return weekDays;
    // }

    // _getMonthName(date: Date) {
    //     return date.toLocaleString(this.locales, { month: "long" }).toUpperCase();
    // }

    // _prevMonth() {
    //     this._generate(addMonths(this.currentDate, -1));
    // }

    // _nextMonth() {
    //     this._generate(addMonths(this.currentDate, 1));
    // }

    // _drawTopHeader() {
    //     const wrapper = document.createElement("div");
    //     const prev = document.createElement("span");
    //     const next = document.createElement("span");

    //     wrapper.classList.add("r6-month-year-title");
    //     prev.classList.add("r6-prev-month");
    //     next.classList.add("r6-next-month");

    //     wrapper.appendChild(prev);
    //     wrapper.appendChild(document.createTextNode(`${this.monthName} / ${this.yearNumber}`));
    //     wrapper.appendChild(next);
    //     prev.addEventListener("click", this._prevMonth.bind(this));
    //     next.addEventListener("click", this._nextMonth.bind(this));

    //     return wrapper;
    // }

    // _drawWeekDays() {
    //     const headerWrapper = document.createElement("div");
    //     headerWrapper.classList.add("r6-header");

    //     const elements = this._getWeekDays();

    //     elements.forEach((el) => {
    //         var dayName = document.createElement("div");
    //         dayName.classList.add("r6-cell");
    //         dayName.appendChild(document.createTextNode(el));
    //         headerWrapper.appendChild(dayName);
    //     });

    //     return headerWrapper;
    // }

    // _drawDays() {
    //     const daysWrapper = document.createElement("div");
    //     daysWrapper.classList.add("r6-content");

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
    // }

    // _drawGap(gap: number, daysWrapper: Element, direction: string) {
    //     if (gap !== 0) {
    //         for (let i = 1; i <= gap; i++) {
    //             const emptyDay = document.createElement("div");
    //             emptyDay.classList.add("r6-day");

    //             if (this.fillGaps) {
    //                 emptyDay.classList.add("r6-different-month-day");
    //                 let valueToInsert = this._findDayNumberToAddToTheGap(gap, i, direction);
    //                 emptyDay.appendChild(document.createTextNode(String(valueToInsert)));
    //             } else {
    //                 emptyDay.classList.add("r6-empty-day");
    //                 emptyDay.appendChild(document.createTextNode("-"));
    //             }

    //             daysWrapper.appendChild(emptyDay);
    //         }
    //     }
    // }

    // _findDayNumberToAddToTheGap(numberOfElementsToGenerate: number, elementIndex: number, direction: string) {
    //     let newDateToShareDayNumber;
    //     if (direction === "begin") {
    //         newDateToShareDayNumber = addDays(this.currentDate, -numberOfElementsToGenerate + elementIndex - 1);
    //     } else if (direction === "end") {
    //         newDateToShareDayNumber = addDays(lastDayOfMonth(this.currentDate), elementIndex);
    //     }

    //     return newDateToShareDayNumber.getDate();
    // }

    // _findNumberOfDaysToFillUpGap(dayNumber: number): any {
    //     let date = new Date(this.yearNumber, this.monthNumber, dayNumber);
    //     let gap = 0;

    //     if (dayNumber === 1) {
    //         if (isMonday(date)) {
    //         } else if (isTuesday(date)) {
    //             gap += 1;
    //         } else if (isWednesday(date)) {
    //             gap += 2;
    //         } else if (isThursday(date)) {
    //             gap += 3;
    //         } else if (isFriday(date)) {
    //             gap += 4;
    //         } else if (isSaturday(date)) {
    //             gap += 5;
    //         } else if (isSunday(date)) {
    //             gap += 6;
    //         }
    //     } else {
    //         //looking for last day
    //         if (isSunday(date)) {
    //         } else if (isSaturday(date)) {
    //             gap += 1;
    //         } else if (isFriday(date)) {
    //             gap += 2;
    //         } else if (isThursday(date)) {
    //             gap += 3;
    //         } else if (isWednesday(date)) {
    //             gap += 4;
    //         } else if (isTuesday(date)) {
    //             gap += 5;
    //         } else if (isMonday(date)) {
    //             gap += 6;
    //         }
    //     }

    //     return gap;
    // }
}
