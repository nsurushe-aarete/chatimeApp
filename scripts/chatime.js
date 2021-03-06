var baseURL = "http://localhost:42734/";
    //http://108.61.96.106:85/ http://localhost:42734/
var RESTURL = "http://108.61.96.106:65/";
//var data = [];
//console.log(localStorage.getItem("userRole"));
//if (localStorage.getItem("userRole") == 1) {
var w_data_One = [{
        blockhead: "Quick Stats",
        blockid: "QuickStats",
        blockimage: "./assets/images/Quick-Stats-icon.svg",
        fontIconClass: "icon-graph",
        blockText:
            "Quick Stats module provides key live information for today & history with aggregated results.",
        submenu: ["Quick Stats", "Quick Stats LFL"]
    },
    {
        blockhead: "Scorecard",
        blockid: "Scorecard",
        blockimage: "./assets/images/scoreboard-icon.svg",
        fontIconClass: "icon-download",
        blockText:
            "Scorecard module reveals store insights on key areas with goals which will have direct effect on success of business operation.",
        submenu: ["Scorecard Summary", "Aggregated View", "Monthly Run Rate"]
    },
    {
        blockhead: "Operations",
        blockid: "Operations",

        blockimage: "./assets/images/Operations-Icon.svg",
        fontIconClass: "icon-settings",
        blockText:
            "Operations module offers practical insights into KPIs by assisting in critical decisions around rostering and staff training.",
        submenu: [
            "Operational Insights",
            "Daily Labour Analysis",
            "Actual Projected Labour",
            "Sales by Product Hierarchy",
            "Mystery Shopper & QAR"
        ]
    },
    {
        blockhead: "Finance",
        blockid: "Finance",
        blockimage: "./assets/images/finance-icon.svg",
        fontIconClass: "icon-money",
        blockText:
            "Finance module offers P&L insights which helps to understand sales and expenses in one view for effective decision making.",
        submenu: ["P&L FY View", "P&L Head Office View", "P&L Multi Location View"]
    },
    {
        blockhead: "Head Office",
        blockid: "HeadOffice",
        blockimage: "./assets/images/head-office.svg",
        fontIconClass: "icon-business",
        blockText:
            "HeadOffice module contains adhoc reports on Marketing and Finance module created for business teams.",
        submenu: ["Finance", "Marketing"]
    },
    {
        blockhead: "Help",
        blockid: "Help",
        blockimage: "./assets/images/exclamation-circle.svg",
        fontIconClass: "icon-alert",
        submenu: ["Dashboard Help"],
        blockText:
            "Help module provides understanding on KPI definitions and videos on each report for easy reference."
    }
    ];
//}
//else {
var w_data_zero = [
    {
        blockhead: "Quick Stats",
        blockid: "QuickStats",
        blockimage: "./assets/images/Quick-Stats-icon.svg",
        fontIconClass: "icon-graph",
        blockText:
            "Quick Stats module provides key live information for today & history with aggregated results.",
        submenu: ["Quick Stats", "Quick Stats LFL"]
    },
    {
        blockhead: "Scorecard",
        blockid: "Scorecard",
        blockimage: "./assets/images/scoreboard-icon.svg",
        fontIconClass: "icon-download",
        blockText:
            "Scorecard module reveals store insights on key areas with goals which will have direct effect on success of business operation.",
        submenu: ["Scorecard Summary", "Aggregated View", "Monthly Run Rate"]
    },
    {
        blockhead: "Operations",
        blockid: "Operations",
        blockimage: "./assets/images/Operations-Icon.svg",
        fontIconClass: "icon-settings",
        blockText:
            "Operations module offers practical insights into KPIs by assisting in critical decisions around rostering and staff training.",
        submenu: [
            "Operational Insights",
            "Daily Labour Analysis",
            "Actual Projected Labour",
            "Sales by Product Hierarchy",
            "Mystery Shopper & QAR"
        ]
    },
    {
        blockhead: "Help",
        blockid: "Help",
        blockimage: "./assets/images/exclamation-circle.svg",
        fontIconClass: "icon-alert",
        blockText:
            "Help module provides understanding on KPI definitions and videos on each report for easy reference.",
        submenu: ["Dashboard Help"]
    }
];
//}

var m_data = [
    {
        blockhead: "Quick Stats",
        blockid: "QuickStats",
        blockimage: "./assets/images/Quick-Stats-icon.svg",
        fontIconClass: "icon-graph",
        submenu: ["Quick Stats", "Quick Stats LFL"]
    },
    {
        blockhead: "Scorecard",
        blockid: "Scorecard",
        blockimage: "./assets/images/scoreboard-icon.svg",
        fontIconClass: "icon-download",
        submenu: ["Scorecard Summary"]
    },
    {
        blockhead: "Operations",
        blockid: "Operations",
        blockimage: "./assets/images/Operations-Icon.svg",
        fontIconClass: "icon-settings",
        submenu: [
            "Daily Labour Analysis"
        ]
    }
];
//var testData;
//var url = '../json-data/menu-option.json';
//$.ajax({
//    url: url,
//    type: 'GET',
//    dataType: "JSON",
//    contentType: 'application/json; charset=utf-8',
//    async: true,
//    success: function (response) {
//        testData = response;
//        console.log(testData);
//        sideBarNavigation(testData);
//    }
//})

//Loading SideBarNavigation for desktop
function sideBarNavigation() {
    var testData = "";
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        testData = m_data;
    }
    else {
        if (localStorage.getItem("userRole") == 1) {
            testData = w_data_One;
        }
        else {
            testData = w_data_zero;
        }
        
    }
    console.log(testData);
    var html = "";
    html += '<li class="topMenu" style="cursor:pointer">';
    html += '<a>';
    html += ' <i class="icon-menu" style="font-size: 13px;"></i>';
    html += '</a>';
    html += '</li>';
    for (var i = 0; i < testData.length; i++) {
        html += '<li class="head-block-list" id="' + testData[i].blockid + '">';
        html += '<span class="option-head"> ' + testData[i].blockhead + '</span>';
        html += '<i class="' + testData[i].fontIconClass + '"></i>';
        if (testData[i].submenu) {
            html += '<ul class="submenu">';
            for (var j = 0; j < testData[i].submenu.length; j++) {
                html += ' <li id="' + testData[i].submenu[j] + '">' + testData[i].submenu[j] + ' <span class="blueDot"><span></li>';
            }
            html += '</ul>';
            html += '<div class="submenuOnifHover">';
            html += '<ul class="submenu-new">';
            for (var j = 0; j < testData[i].submenu.length; j++) {
                html += ' <li id="' + testData[i].submenu[j] + '">' + testData[i].submenu[j] + ' <span class="blueDot"><span></li>';
            }
            html += '</ul>';
            html += '</div>';
        }
        html += '</li>';
    }
    $(".navbar-list").append(html);

    // loading data for landing page

    var html_landing = "";
    for (var i = 0; i < testData.length; i++) {
        html_landing += '<div class="container" id="' + testData[i].blockid + '" onclick="navigateToReportLoadingPage(this)">';
        html_landing += '<div class="inner-cont">';
        html_landing += '<i class="' + testData[i].fontIconClass + '"></i>';
        html_landing += '</div>';
        html_landing += '<div class="name">' + testData[i].blockhead + '</div>';
        html_landing += '<div class="details"><p>' + testData[i].blockText + '</p> </div>'
        html_landing += '</div>';
    }
    $(".dashboard-blocks").append(html_landing);


    //code for mobile
    var m_option = "";
    for (var i = 0; i < testData.length; i++) {
        m_option += '<div class="m_option_parent" id="' + testData[i].blockid + '"  onclick="navigateToReportLoadingPage(this)">';
        m_option += '<span><i class="' + testData[i].fontIconClass + '"></i></span>';
        m_option += '<span class="m_option_title">' + testData[i].blockhead + '</span>';
        m_option += '<span class="m_mobile_alert"><i class="icon-alert"></i></span>';
        m_option += '</div>';
    }

    var m_overlay_option = "";
    for (var i = 0; i < testData.length; i++) {
        m_overlay_option += '<div class="m_overlay_parent">';
        m_overlay_option += '   <div class="m_overoption_head"> ' + testData[i].blockhead + '</div>';
        if (testData[i].submenu) {
            m_overlay_option += '   <ul class="m_overlay_submenu">'
            for (var j = 0; j < testData[i].submenu.length; j++) {
                m_overlay_option += ' <li id="' + testData[i].submenu[j] + '">' + testData[i].submenu[j] + '</li>';
            }
            m_overlay_option += '   </ul>'
        }
        m_overlay_option += '</div>'
    }

    $(".mobile-landing-options").append(m_option);
    $(".append-options").append(m_overlay_option);
}

sideBarNavigation();

var d = new Date();
var date = d.getDate();
switch (new Date().getMonth()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}
$(".todays-date").append(date + " " + month);

function navigateToReportLoadingPage(element) {
    var id = $(element).attr("id");
    // alert(id);
    // window.location.href = "http://localhost:42734/Home/Report   http://172.16.17.66:75"
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        if (id === 'QuickStats') {
            window.location.href = baseURL + "/Home/EmbedReport?name=quick%20stats&d=m";
        }
        else if (id === "Scorecard") {
            window.location.href = baseURL + "Home/EmbedReport?name=scorecard%20sumary&d=m";
        }
        else {
            window.location.href = baseURL + "Home/EmbedReport?name=scorecard%20sumary&d=m";
        }
    }
    else {
        if (id === 'QuickStats') {
            window.location.href = baseURL + "/Home/EmbedReport?name=quick%20stats&d=d";
        }
        else if (id === "Scorecard") {
            window.location.href = baseURL + "Home/EmbedReport?name=scorecard%20summary&d=d";
        }
        else if (id === "Operations") {
            window.location.href = baseURL + "Home/EmbedReport?name=operational%20insights&d=d";
        }
        else if (id === "Finance") {
            window.location.href = baseURL + "Home/EmbedReport?name=pl%20fy%20view&d=d";
        }
        else if (id === "HeadOffice") {
            //EmbedReport?name=marketing&d=d
            window.location.href = baseURL + "Home/HeadOffice";
        }
        else if (id === "Help") {
            window.location.href = baseURL + "Home/EmbedReport?name=dashboard%20help&d=d";
        }
        else {
            window.location.href = baseURL;
        }
    }
    
}
