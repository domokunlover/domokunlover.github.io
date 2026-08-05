/*

Calendar Widget By 404City. Visit https://404city.neocities.org/ For More!
Copyright 404City All Rights Reserved

*/
(function() {
    const scriptTag = document.currentScript;
    scriptTag.insertAdjacentHTML('beforebegin', "<!--Calendar Widget By 404City. Visit https://404city.neocities.org/ for more!--><!--Copyright 404City All Rights Reserved-->");
    scriptTag.insertAdjacentHTML('afterend', `
        <div id='calendar'>
            <div id='calendarHeader'>Loading...</div>
            <div id='calendarGrid'>
                <div class='calendarDayOfTheWeek'>S</div>
                <div class='calendarDayOfTheWeek'>M</div>
                <div class='calendarDayOfTheWeek'>T</div>
                <div class='calendarDayOfTheWeek'>W</div>
                <div class='calendarDayOfTheWeek'>T</div>
                <div class='calendarDayOfTheWeek'>F</div>
                <div class='calendarDayOfTheWeek'>S</div>
                <div class='calendarCell' id='calendarCell0'>-</div>
                <div class='calendarCell' id='calendarCell1'>-</div>
                <div class='calendarCell' id='calendarCell2'>-</div>
                <div class='calendarCell' id='calendarCell3'>-</div>
                <div class='calendarCell' id='calendarCell4'>-</div>
                <div class='calendarCell' id='calendarCell5'>-</div>
                <div class='calendarCell' id='calendarCell6'>-</div>
                <div class='calendarCell' id='calendarCell7'>-</div>
                <div class='calendarCell' id='calendarCell8'>-</div>
                <div class='calendarCell' id='calendarCell9'>-</div>
                <div class='calendarCell' id='calendarCell10'>-</div>
                <div class='calendarCell' id='calendarCell11'>-</div>
                <div class='calendarCell' id='calendarCell12'>-</div>
                <div class='calendarCell' id='calendarCell13'>-</div>
                <div class='calendarCell' id='calendarCell14'>-</div>
                <div class='calendarCell' id='calendarCell15'>-</div>
                <div class='calendarCell' id='calendarCell16'>-</div>
                <div class='calendarCell' id='calendarCell17'>-</div>
                <div class='calendarCell' id='calendarCell18'>-</div>
                <div class='calendarCell' id='calendarCell19'>-</div>
                <div class='calendarCell' id='calendarCell20'>-</div>
                <div class='calendarCell' id='calendarCell21'>-</div>
                <div class='calendarCell' id='calendarCell22'>-</div>
                <div class='calendarCell' id='calendarCell23'>-</div>
                <div class='calendarCell' id='calendarCell24'>-</div>
                <div class='calendarCell' id='calendarCell25'>-</div>
                <div class='calendarCell' id='calendarCell26'>-</div>
                <div class='calendarCell' id='calendarCell27'>-</div>
                <div class='calendarCell' id='calendarCell28'>-</div>
                <div class='calendarCell' id='calendarCell29'>-</div>
                <div class='calendarCell' id='calendarCell30'>-</div>
                <div class='calendarCell' id='calendarCell31'>-</div>
                <div class='calendarCell' id='calendarCell32'>-</div>
                <div class='calendarCell' id='calendarCell33'>-</div>
                <div class='calendarCell' id='calendarCell34'>-</div>
                <div class='calendarCell' id='calendarCell35'>-</div>
                <div class='calendarCell' id='calendarCell36'>-</div>
                <div class='calendarCell' id='calendarCell37'>-</div>
                <div class='calendarCell' id='calendarCell38'>-</div>
                <div class='calendarCell' id='calendarCell39'>-</div>
                <div class='calendarCell' id='calendarCell40'>-</div>
                <div class='calendarCell' id='calendarCell41'>-</div>
            </div>
        </div>
        <style>
            body {
                width; 260px;
                height: 260px;
                background-color: none !important;
                background: none !important;
                overflow: hidden;
            }
            :where(#calendarHeader, .calendarDayOfTheWeek, .calendarCell) {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                cursor: var(--default-cur), default;
                user-select: none;
            }
            :where(#calendar) {
                box-sizing: border-box;
                display: grid;
                grid-template-rows: 1.25fr 7fr;
                height: 175px;
                width: 262px;
                padding: 2px;
                gap: 2px;
                font-size: 10px;
            }
            :where(#calendarGrid) {
                box-sizing: border-box;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 2px;
            }
            :where(#calendarHeader) {
                font-weight: bold;
                font-size: 1.25em;
                white-space: nowrap;
            }
            :where(.calendarDayOfTheWeek) {font-weight: bold;}
            :where(.calendarNonMonthDay) {color: gray;}
            :where(.calendarToday) {
                color: var(--text);
                background: var(--red);
            }
            :where(.calendarCell) {
                border: 1px solid var(--line);
            }
            :where(.calendarCell):hover {
                outline: 1px solid var(--red);
            }
        </style>
        <!--End Of The Calendar Widget-->
    `);
    renderCalendar();
    setInterval(renderCalendar, 60000);
    function renderCalendar() {
        var today = new Date();
        var curMonth = today.getMonth();
        var curYear = today.getFullYear();
        var firstDay = new Date(curYear, curMonth, 1);
        var lastDay = new Date(curYear, curMonth + 1, 0).getDate();
        var startDay = firstDay.getDay();
        var prevMonthLastDay = new Date(curYear, curMonth, 0).getDate();
        document.getElementById("calendarHeader").innerText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][curMonth] + " " + curYear;
        for(let i = 0; i < 42; i++) {
            var calendarCell = document.getElementById("calendarCell" + i);
            calendarCell.classList.remove("calendarNonMonthDay");
            calendarCell.classList.remove("calendarToday");
            if(i < startDay) {
                calendarCell.classList.add("calendarNonMonthDay");
                calendarCell.textContent = (prevMonthLastDay - startDay + 1 + i).toString();
            }
            else if(i >= startDay + lastDay) {
                calendarCell.classList.add("calendarNonMonthDay");
                calendarCell.textContent = (i - startDay - lastDay + 1).toString();
            }
            else {
                var dayNumber = i - startDay + 1;
                calendarCell.textContent = dayNumber.toString();
                if(dayNumber == today.getDate() && curMonth == today.getMonth() && curYear == today.getFullYear()) {
                    calendarCell.classList.add("calendarToday");
                }
            }
        }
    }
})();