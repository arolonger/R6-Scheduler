import helpers from "../src/helpers/helpers";

export default class R6Scheduler {
    dom: Element;
    currentDate: Date;
    locale: string;
    numerOfDaysInCurrentMonth: number;
    monthName: string;
    dayNumber: number;
    monthNumber: number;
    yearNumber: number;

    constructor (params: any) {
        this.dom = params.container;
        this.currentDate = params.currentDate;
        this.locale = "pl-PL";
        
        this.numerOfDaysInCurrentMonth = helpers.getDaysInMonth(this.currentDate);
        this.monthName = this._getMonthName(this.currentDate);
        
        this.dayNumber = this.currentDate.getDate();
        this.monthNumber = this.currentDate.getMonth();
        this.yearNumber = this.currentDate.getFullYear();
        
        this.dom.appendChild(this._drawTopHeader());
        this.dom.appendChild(this._drawHeader());
        this.dom.appendChild(this._drawDays());
    }
    
    _getWeekDays() {
        var baseDate = new Date(Date.UTC(2017, 0, 2)); // Monday
        var weekDays = [];

        for(let i = 0; i < 7; i++)         {       
            weekDays.push(baseDate.toLocaleDateString(this.locale, { weekday: 'narrow' }));
            baseDate.setDate(baseDate.getDate() + 1);       
        }
        
        return weekDays;
    }

    _getMonthName(date: Date) {
        return date.toLocaleString(this.locale, { month: "long"}).toUpperCase();
    }

    _drawTopHeader () {
        const wrapper = document.createElement("div");
        wrapper.classList.add("r6-month-name");
        wrapper.appendChild(document.createTextNode(this.monthName));

        return wrapper;
    }

    _drawHeader () {
        const headerWrapper = document.createElement("div");
        headerWrapper.classList.add("r6-header");

        const elements = this._getWeekDays();

        elements.forEach((el) => {
            var dayName = document.createElement("div");
            dayName.classList.add("r6-cell");
            dayName.appendChild(document.createTextNode(el));
            headerWrapper.appendChild(dayName);
        });

        return headerWrapper;
    }

    _drawDays () {
        const daysWrapper = document.createElement("div");
        
        const beginGap = this._findGaps(1);
        this._drawGap(beginGap, daysWrapper);

        for (var i:number = 1; i <= this.numerOfDaysInCurrentMonth; i++) {
            var day = document.createElement("div");
            day.classList.add("r6-day");
            day.appendChild(document.createTextNode(String(i)));
            daysWrapper.appendChild(day);
        }

        const endGap = this._findGaps(this.numerOfDaysInCurrentMonth);
        this._drawGap(endGap, daysWrapper);

        return daysWrapper;
    }

    _drawGap (gap: number, daysWrapper: Element) {
        if (gap !== 0) {
            for (let i = 1; i <= gap; i++) {
                const emptyDay = document.createElement("div");
                emptyDay.classList.add("r6-day");
                emptyDay.classList.add("r6-empty-day");
                emptyDay.appendChild(document.createTextNode("-"));
                daysWrapper.appendChild(emptyDay);
            }
        }
    }

    _findGaps (dayNumber: number) :any {
        let date = new Date(this.yearNumber, this.monthNumber, dayNumber);
        let gap = 0;

        if (dayNumber === 1) {
            if (helpers.isMonday(date)) {
                return gap;
            } else if(helpers.isTuesday(date)) {
                gap += 1;
                return gap;
            } else if (helpers.isWednesday(date)) {
                gap += 2;
                return gap;
            } else if (helpers.isThursday(date)) {
                gap += 3;
                return gap;
            } else if (helpers.isFriday(date)) {
                gap += 4;
                return gap;
            } else if (helpers.isSaturday(date)) {
                gap += 5;
                return gap;
            } else if (helpers.isSunday(date)) {
                gap += 6;
                return gap;
            }
        } else {
            //looking for last day

            if (helpers.isSunday(date)) {
                return gap;
            } else if(helpers.isSaturday(date)) {
                gap += 1;
                return gap;
            } else if (helpers.isFriday(date)) {
                gap += 2;
                return gap;
            } else if (helpers.isThursday(date)) {
                gap += 3;
                return gap;
            } else if (helpers.isWednesday(date)) {
                gap += 4;
                return gap;
            } else if (helpers.isTuesday(date)) {
                gap += 5;
                return gap;
            } else if (helpers.isMonday(date)) {
                gap += 6;
                return gap;
            }
        }
    }
}