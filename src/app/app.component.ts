import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tier = 5;
  start = new Date('2018/03/07');
  finish = new Date('2018/03/09');
  resetAttempts = 3;

  items = [{
    'name': 'Delara Exibil',
    'day1_total': 13109275,
    'day2_new': 18545691,
    'day2_total': 31654966,
    'day3_new': 28922472,
    'day3_total': 60577438
  }, {
    'name': 'Crowley',
    'day1_total': 9209873,
    'day2_new': 13832867,
    'day2_total': 23042740,
    'day3_new': 17740392,
    'day3_total': 40783132
  }, {
    'name': 'Полет',
    'day1_total': 12022987,
    'day2_new': 13475863,
    'day2_total': 25498850,
    'day3_new': 5275042,
    'day3_total': 30773892
  }, {
    'name': 'Ureal Grand',
    'day1_total': 15648458,
    'day2_new': 8040538,
    'day2_total': 23688996,
    'day3_new': 4953664,
    'day3_total': 28642660
  }, {
    'name': 'glebfox',
    'day1_total': 9288477,
    'day2_new': 8708518,
    'day2_total': 17996995,
    'day3_new': 7807085,
    'day3_total': 25804080
  }, {
    'name': 'Grizli',
    'day1_total': 2213365,
    'day2_new': 11022928,
    'day2_total': 13236293,
    'day3_new': 5110313,
    'day3_total': 18346606
  }, {
    'name': 'Baron Miron',
    'day1_total': 6716961,
    'day2_new': 6640938,
    'day2_total': 13357899,
    'day3_new': 2742572,
    'day3_total': 16100471
  }, {
    'name': 'EpicFail',
    'day1_total': 4177496,
    'day2_new': 6859875,
    'day2_total': 11037371,
    'day3_new': 4092542,
    'day3_total': 15129913
  }, {
    'name': 'Kanzi',
    'day1_total': 6711834,
    'day2_new': 6629360,
    'day2_total': 13341194,
    'day3_new': 1474115,
    'day3_total': 14815309
  }, {
    'name': 'vertyy',
    'day1_total': 1023990,
    'day2_new': 7028462,
    'day2_total': 8052452,
    'day3_new': 3019037,
    'day3_total': 11071489
  }, {
    'name': 'Palp',
    'day1_total': 3458797,
    'day2_new': 4586062,
    'day2_total': 8044859,
    'day3_new': 1756966,
    'day3_total': 9801825
  }, {
    'name': 'Fallen',
    'day1_total': 1859668,
    'day2_new': 5895741,
    'day2_total': 7755409,
    'day3_new': 1440742,
    'day3_total': 9196151
  }, {
    'name': 'Bugazavr',
    'day1_total': 7817256,
    'day2_new': 0,
    'day2_total': 7817256,
    'day3_new': 897619,
    'day3_total': 8714875
  }, {
    'name': 'Tim ko',
    'day1_total': 3844085,
    'day2_new': 4390147,
    'day2_total': 8234232,
    'day3_new': 459247,
    'day3_total': 8693479
  }, {
    'name': 'SergL70',
    'day1_total': 2702325,
    'day2_new': 3166232,
    'day2_total': 5868557,
    'day3_new': 2591320,
    'day3_total': 8459877
  }, {
    'name': 'Тринадцатый',
    'day1_total': 1951573,
    'day2_new': 3113165,
    'day2_total': 5064738,
    'day3_new': 3048931,
    'day3_total': 8113669
  }, {
    'name': 'VladislavD',
    'day1_total': 1552429,
    'day2_new': 2172467,
    'day2_total': 3724896,
    'day3_new': 4065164,
    'day3_total': 7790060
  }, {
    'name': 'Mol Eliza',
    'day1_total': 1703304,
    'day2_new': 4805893,
    'day2_total': 6509197,
    'day3_new': 1239290,
    'day3_total': 7748487
  }, {
    'name': 'VanLost',
    'day1_total': 2148826,
    'day2_new': 3073030,
    'day2_total': 5221856,
    'day3_new': 2143038,
    'day3_total': 7364894
  }, {
    'name': 'Oberon Calad',
    'day1_total': 1484937,
    'day2_new': 3054195,
    'day2_total': 4539132,
    'day3_new': 2785926,
    'day3_total': 7325058
  }, {
    'name': 'Jaksso',
    'day1_total': 1906158,
    'day2_new': 2179069,
    'day2_total': 4085227,
    'day3_new': 2746221,
    'day3_total': 6831448
  }, {
    'name': 'Dart Andrius',
    'day1_total': 2453281,
    'day2_new': 3226667,
    'day2_total': 5679948,
    'day3_new': 1049683,
    'day3_total': 6729631
  }, {
    'name': 'Sergio elk',
    'day1_total': 1603744,
    'day2_new': 1866478,
    'day2_total': 3470222,
    'day3_new': 2983407,
    'day3_total': 6453629
  }, {
    'name': 'Fekete Lyuk',
    'day1_total': 3904562,
    'day2_new': 1613644,
    'day2_total': 5518206,
    'day3_new': 707241,
    'day3_total': 6225447
  }, {
    'name': 'CME Kai Valirsky',
    'day1_total': 2744829,
    'day2_new': 1784601,
    'day2_total': 4529430,
    'day3_new': 1536787,
    'day3_total': 6066217
  }, {
    'name': 'LordSith',
    'day1_total': 1748785,
    'day2_new': 2781226,
    'day2_total': 4530011,
    'day3_new': 1495167,
    'day3_total': 6025178
  }, {
    'name': 'CME Agrampus',
    'day1_total': 959521,
    'day2_new': 3099298,
    'day2_total': 4058819,
    'day3_new': 1738091,
    'day3_total': 5796910
  }, {
    'name': 'Adeko',
    'day1_total': 2751827,
    'day2_new': 3036167,
    'day2_total': 5787994,
    'day3_new': 0,
    'day3_total': 5787994
  }, {
    'name': 'Swift',
    'day1_total': 945604,
    'day2_new': 3187430,
    'day2_total': 4133034,
    'day3_new': 1401947,
    'day3_total': 5534981
  }, {
    'name': 'BaronDark',
    'day1_total': 0,
    'day2_new': 5197849,
    'day2_total': 5197849,
    'day3_new': 0,
    'day3_total': 5197849
  }, {
    'name': 'CME Geserka',
    'day1_total': 5117886,
    'day2_new': 0,
    'day2_total': 5117886,
    'day3_new': 0,
    'day3_total': 5117886
  }, {
    'name': 'FiliMax',
    'day1_total': 2123161,
    'day2_new': 1794231,
    'day2_total': 3917392,
    'day3_new': 1086521,
    'day3_total': 5003913
  }, {
    'name': 'SID',
    'day1_total': 4610858,
    'day2_new': 0,
    'day2_total': 4610858,
    'day3_new': 0,
    'day3_total': 4610858
  }, {
    'name': 'Loc00',
    'day1_total': 0,
    'day2_new': 4605062,
    'day2_total': 4605062,
    'day3_new': 0,
    'day3_total': 4605062
  }, {
    'name': 'Sexsagol',
    'day1_total': 1914583,
    'day2_new': 2612967,
    'day2_total': 4527550,
    'day3_new': 0,
    'day3_total': 4527550
  }, {
    'name': 'MyWhiteLord',
    'day1_total': 1510985,
    'day2_new': 2864679,
    'day2_total': 4375664,
    'day3_new': 0,
    'day3_total': 4375664
  }, {
    'name': 'RealPeep',
    'day1_total': 0,
    'day2_new': 2727234,
    'day2_total': 2727234,
    'day3_new': 1291334,
    'day3_total': 4018568
  }, {
    'name': 'СМЕ Дядя Саша',
    'day1_total': 1239635,
    'day2_new': 2763358,
    'day2_total': 4002993,
    'day3_new': 0,
    'day3_total': 4002993
  }, {
    'name': 'Arh',
    'day1_total': 1343030,
    'day2_new': 1539125,
    'day2_total': 2882155,
    'day3_new': 610480,
    'day3_total': 3492635
  }, {
    'name': 'Kadr',
    'day1_total': 1348714,
    'day2_new': 1833699,
    'day2_total': 3182413,
    'day3_new': 0,
    'day3_total': 3182413
  }, {
    'name': 'vA Ladorielle',
    'day1_total': 0,
    'day2_new': 2794717,
    'day2_total': 2794717,
    'day3_new': 0,
    'day3_total': 2794717
  }, {
    'name': 'Ve4erOK',
    'day1_total': 0,
    'day2_new': 1173473,
    'day2_total': 1173473,
    'day3_new': 1530704,
    'day3_total': 2704177
  }, {
    'name': 'Solovej',
    'day1_total': 1722567,
    'day2_new': 0,
    'day2_total': 1722567,
    'day3_new': 640806,
    'day3_total': 2363373
  }, {
    'name': 'vA Sam',
    'day1_total': 1303432,
    'day2_new': 0,
    'day2_total': 1303432,
    'day3_new': 712404,
    'day3_total': 2015836
  }, {
    'name': 'rider',
    'day1_total': 672670,
    'day2_new': 0,
    'day2_total': 672670,
    'day3_new': 1275991,
    'day3_total': 1948661
  }, {
    'name': 'oa3is',
    'day1_total': 916927,
    'day2_new': 562330,
    'day2_total': 1479257,
    'day3_new': 0,
    'day3_total': 1479257
  }, {
    'name': 'msasin',
    'day1_total': 1384913,
    'day2_new': 0,
    'day2_total': 1384913,
    'day3_new': 0,
    'day3_total': 1384913
  }, {
    'name': 'СМЕ Миротворець',
    'day1_total': 1319253,
    'day2_new': 0,
    'day2_total': 1319253,
    'day3_new': 0,
    'day3_total': 1319253
  }, {
    'name': 'CME Anna Muzyra',
    'day1_total': 718779,
    'day2_new': 0,
    'day2_total': 718779,
    'day3_new': 0,
    'day3_total': 718779
  }, {
    'name': 'Джимми2куртки',
    'day1_total': 255417,
    'day2_new': 0,
    'day2_total': 255417,
    'day3_new': 0,
    'day3_total': 255417
  }];

  total = {
    day1_total: 0,
    day2_new: 0,
    day2_total: 0,
    day3_new: 0,
    day3_total: 0
  };

  ngOnInit() {
    for (const entry of this.items) {
      this.total.day1_total += entry.day1_total;
      this.total.day2_new += entry.day2_new;
      this.total.day2_total += entry.day2_total;
      this.total.day3_new += entry.day3_new;
      this.total.day3_total += entry.day3_total;
    }
  }
}