moment.locale('pl');

let data0 = moment(prompt('Start od [DD-MM-RRRR]: '), 'DD-MM-YYYY').unix();
let data1 = moment(prompt('Do [DD-MM-RRRR]: '), 'DD-MM-YYYY').unix();

let godz0 = parseInt(prompt('Godzina startu [HH]: '), 10);
let godz1 = parseInt(prompt('Do [HH]: '), 10);

new Vue({
    el: '#main',
    data() {
        return {
            date0: data0,
            date1: data1,
        }
    },
    methods: {
        wysw(i) {
            let m = moment.unix(data0);
            m.add((i - 1), 'd');
            let ret = "";
            if (m.day() == 0) ret += "<span class='red'>";
            ret += m.format("dddd, Do MMM YYYY");
            if (m.day() == 0) ret += "</span>";
            return ret;
        },
        godz(i) {
            let m = moment('2000 1', 'Y DDD');
            m.add(godz0, 'h');
            m.add(30 * (i - 1), 'm');
            return m.format('HH:mm');
        },
    },
});

document.body.classList.add('loaded');
