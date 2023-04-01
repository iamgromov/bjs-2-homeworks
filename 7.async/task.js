class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        } 
        
        if (this.alarmCollection.some((elem) => elem.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } 
        
        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date().toLocaleTimeString("ru-Ru", {hour: 'numeric', minute: 'numeric'});
        return now;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        function asyncFunction() {
            this.alarmCollection.forEach(elem => {
                if (elem.time === this.getCurrentFormattedTime()) {
                    elem.canCall = false;
                    elem.callback();
                }
            });
        }

        const bindedFunc = asyncFunction.bind(this);
        this.intervalId = setInterval(bindedFunc);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((elem) => elem.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}