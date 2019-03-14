$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-B0624647-02EB-47AD-AD5C-1C8442F7DD8C&format=JSON",
    }).done(function (msg) {

        var toJson = JSON.stringify(msg);
        var rep = toJson.replace(/(location)/gm, "country");
        var successrep = JSON.parse(rep);
        var Btn = document.getElementsByClassName("btn");



        function Changecountry(localNumber) {
            return `
            <thead>
                    <tr>
                        <th scope="col">${successrep.records.countrys[0].country[localNumber].countryName}</th>
                        <th scope="col">溫度</th>
                        <th scope="col">天氣狀況</th>
                        <th scope="col">降雨機率</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">今天晚上18:00~明天早上6:00</th>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[0].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[0].elementValue[0].value + "°"}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[0].elementValue[0].value}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[0].time[0].elementValue[0].value + "%"}</td>
                    </tr>
                    <tr>
                        <th scope="row">明天早上6:00~明天晚上18:00</th>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[1].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[1].elementValue[0].value + "°"}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[1].elementValue[0].value}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[0].time[1].elementValue[0].value + "%"}</td>
                    </tr>
                    <tr>
                        <th scope="row">明天晚上18:00~後天早上6:00</th>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[2].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[2].elementValue[0].value + "°"}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[2].elementValue[0].value}</td>
                        <td>${successrep.records.countrys[0].country[localNumber].weatherElement[0].time[2].elementValue[0].value + "%"}</td>
                    </tr>
                </tbody>
            `
        };

        function aWeekWeather(localNumber) {
            var Today = new Date();

            return `
            <thead>
            <tr>
                <th scope="col">${successrep.records.countrys[0].country[localNumber].countryName}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 1}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 2}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 3}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 4}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 5}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 6}</th>
                <th scope="col">${Today.getMonth() + 1}/${Today.getDate() + 7}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" rowspan="2">白天</th>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[1].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[1].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[3].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[3].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[5].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[5].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[7].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[7].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[9].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[9].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[11].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[11].elementValue[0].value + "°"}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[13].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[13].elementValue[0].value + "°"}</td>
            </tr>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[1].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[3].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[5].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[7].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[9].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[11].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[13].elementValue[0].value}</td>

            <tr>
                <th scope="row" rowspan="2">晚上</th>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[2].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[2].elementValue[0].value + "°"}</td>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[4].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[4].elementValue[0].value + "°"}</td>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[6].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[6].elementValue[0].value + "°"}</td>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[8].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[8].elementValue[0].value + "°"}</td>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[10].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[10].elementValue[0].value + "°"}</td>
                <td>${successrep.records.countrys[0].country[localNumber].weatherElement[8].time[12].elementValue[0].value + "°~" + successrep.records.countrys[0].country[localNumber].weatherElement[12].time[12].elementValue[0].value + "°"}</td>
                
            </tr>

            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[2].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[4].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[6].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[8].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[10].elementValue[0].value}</td>
            <td>${successrep.records.countrys[0].country[localNumber].weatherElement[6].time[12].elementValue[0].value}</td>
        </tbody>
        `
        }

        $("#Yunlin").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(0);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(0);
        })

        $("#Nantou").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(1);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(1);
        })

        $("#Lienchiang").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(2);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(2);
        })

        $("#Taitung").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(3);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(3);
        })

        $("#Kinmen").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(4);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(4);
        })

        $("#Yilan").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(5);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(5);
        })

        $("#Pingtung").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(6);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(6);
        })

        $("#Miaoli").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(7);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(7);
        })

        $("#Penghu").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(8);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(8);
        })

        $("#Taipei").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(9);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(9);
        })

        $("#HsinchuCountry").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(10);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(10);
        })

        $("#Hualien").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(11);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(11);
        })

        $("#Kaohsiung").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(12);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(12);
        })

        $("#Changhua").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(13);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(13);
        })

        $("#Hsinchu").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(14);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(14);
        })

        $("#NewTaipei").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(15);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(15);
        })

        $("#Keelung").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(16);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(16);
        })

        $("#Taichung").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(17);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(17);
        })

        $("#Tainan").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(18);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(18);
        })

        $("#Taoyuan").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(19);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(19);
        })

        $("#ChiayiCountry").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(20);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(20);
        })

        $("#Chiayi").click(function () {
            document.getElementById("threeDaysWeather").innerHTML = Changecountry(21);
            document.getElementById("aWeekWeather").innerHTML = aWeekWeather(21);
        })


    })
})

