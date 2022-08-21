import { CurrencyRate } from "../api/currency/models";
import { dateToShortDateISO } from "../utilities/date/dateToShortDateISO";

export const updateDatesInData = (data: CurrencyRate) => {
  return {
    ...data,
    rates: data.rates.reduce<CurrencyRate["rates"]>((prev, value, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (data.rates.length - 1 - index));

      return prev.concat({
        ...value,
        effectiveDate: dateToShortDateISO(date),
      });
    }, []),
  };
};

const currencyUsdBaseData = {
  table: "A",
  currency: "dolar amerykański",
  code: "USD",
  rates: [
    {
      no: "182/A/NBP/2021",
      effectiveDate: "2021-09-20",
      mid: 3.9282,
    },
    {
      no: "183/A/NBP/2021",
      effectiveDate: "2021-09-21",
      mid: 3.9337,
    },
    {
      no: "184/A/NBP/2021",
      effectiveDate: "2021-09-22",
      mid: 3.946,
    },
    {
      no: "185/A/NBP/2021",
      effectiveDate: "2021-09-23",
      mid: 3.9256,
    },
    {
      no: "186/A/NBP/2021",
      effectiveDate: "2021-09-24",
      mid: 3.9268,
    },
    {
      no: "187/A/NBP/2021",
      effectiveDate: "2021-09-27",
      mid: 3.9276,
    },
    {
      no: "188/A/NBP/2021",
      effectiveDate: "2021-09-28",
      mid: 3.9546,
    },
    {
      no: "189/A/NBP/2021",
      effectiveDate: "2021-09-29",
      mid: 3.9684,
    },
    {
      no: "190/A/NBP/2021",
      effectiveDate: "2021-09-30",
      mid: 3.9925,
    },
    {
      no: "191/A/NBP/2021",
      effectiveDate: "2021-10-01",
      mid: 3.9678,
    },
    {
      no: "192/A/NBP/2021",
      effectiveDate: "2021-10-04",
      mid: 3.9368,
    },
    {
      no: "193/A/NBP/2021",
      effectiveDate: "2021-10-05",
      mid: 3.9688,
    },
    {
      no: "194/A/NBP/2021",
      effectiveDate: "2021-10-06",
      mid: 3.9992,
    },
    {
      no: "195/A/NBP/2021",
      effectiveDate: "2021-10-07",
      mid: 3.9334,
    },
    {
      no: "196/A/NBP/2021",
      effectiveDate: "2021-10-08",
      mid: 3.9775,
    },
    {
      no: "197/A/NBP/2021",
      effectiveDate: "2021-10-11",
      mid: 3.9862,
    },
    {
      no: "198/A/NBP/2021",
      effectiveDate: "2021-10-12",
      mid: 3.9664,
    },
    {
      no: "199/A/NBP/2021",
      effectiveDate: "2021-10-13",
      mid: 3.9638,
    },
    {
      no: "200/A/NBP/2021",
      effectiveDate: "2021-10-14",
      mid: 3.9403,
    },
    {
      no: "201/A/NBP/2021",
      effectiveDate: "2021-10-15",
      mid: 3.9413,
    },
    {
      no: "202/A/NBP/2021",
      effectiveDate: "2021-10-18",
      mid: 3.9471,
    },
    {
      no: "203/A/NBP/2021",
      effectiveDate: "2021-10-19",
      mid: 3.9212,
    },
    {
      no: "204/A/NBP/2021",
      effectiveDate: "2021-10-20",
      mid: 3.9428,
    },
    {
      no: "205/A/NBP/2021",
      effectiveDate: "2021-10-21",
      mid: 3.9449,
    },
    {
      no: "206/A/NBP/2021",
      effectiveDate: "2021-10-22",
      mid: 3.9576,
    },
    {
      no: "207/A/NBP/2021",
      effectiveDate: "2021-10-25",
      mid: 3.9502,
    },
    {
      no: "208/A/NBP/2021",
      effectiveDate: "2021-10-26",
      mid: 3.974,
    },
    {
      no: "209/A/NBP/2021",
      effectiveDate: "2021-10-27",
      mid: 3.9815,
    },
    {
      no: "210/A/NBP/2021",
      effectiveDate: "2021-10-28",
      mid: 3.9938,
    },
    {
      no: "211/A/NBP/2021",
      effectiveDate: "2021-10-29",
      mid: 3.9664,
    },
    {
      no: "212/A/NBP/2021",
      effectiveDate: "2021-11-02",
      mid: 3.9772,
    },
    {
      no: "213/A/NBP/2021",
      effectiveDate: "2021-11-03",
      mid: 3.9681,
    },
    {
      no: "214/A/NBP/2021",
      effectiveDate: "2021-11-04",
      mid: 3.9807,
    },
    {
      no: "215/A/NBP/2021",
      effectiveDate: "2021-11-05",
      mid: 3.9911,
    },
    {
      no: "216/A/NBP/2021",
      effectiveDate: "2021-11-08",
      mid: 3.9747,
    },
    {
      no: "217/A/NBP/2021",
      effectiveDate: "2021-11-09",
      mid: 3.9622,
    },
    {
      no: "218/A/NBP/2021",
      effectiveDate: "2021-11-10",
      mid: 3.9737,
    },
    {
      no: "219/A/NBP/2021",
      effectiveDate: "2021-11-12",
      mid: 4.0559,
    },
    {
      no: "220/A/NBP/2021",
      effectiveDate: "2021-11-15",
      mid: 4.0497,
    },
    {
      no: "221/A/NBP/2021",
      effectiveDate: "2021-11-16",
      mid: 4.1061,
    },
    {
      no: "222/A/NBP/2021",
      effectiveDate: "2021-11-17",
      mid: 4.1204,
    },
    {
      no: "223/A/NBP/2021",
      effectiveDate: "2021-11-18",
      mid: 4.1114,
    },
    {
      no: "224/A/NBP/2021",
      effectiveDate: "2021-11-19",
      mid: 4.1457,
    },
    {
      no: "225/A/NBP/2021",
      effectiveDate: "2021-11-22",
      mid: 4.1855,
    },
    {
      no: "226/A/NBP/2021",
      effectiveDate: "2021-11-23",
      mid: 4.1893,
    },
    {
      no: "227/A/NBP/2021",
      effectiveDate: "2021-11-24",
      mid: 4.1764,
    },
    {
      no: "228/A/NBP/2021",
      effectiveDate: "2021-11-25",
      mid: 4.16,
    },
    {
      no: "229/A/NBP/2021",
      effectiveDate: "2021-11-26",
      mid: 4.1754,
    },
    {
      no: "230/A/NBP/2021",
      effectiveDate: "2021-11-29",
      mid: 4.1627,
    },
    {
      no: "231/A/NBP/2021",
      effectiveDate: "2021-11-30",
      mid: 4.1214,
    },
    {
      no: "232/A/NBP/2021",
      effectiveDate: "2021-12-01",
      mid: 4.1051,
    },
    {
      no: "233/A/NBP/2021",
      effectiveDate: "2021-12-02",
      mid: 4.0625,
    },
    {
      no: "234/A/NBP/2021",
      effectiveDate: "2021-12-03",
      mid: 4.0653,
    },
    {
      no: "235/A/NBP/2021",
      effectiveDate: "2021-12-06",
      mid: 4.0619,
    },
    {
      no: "236/A/NBP/2021",
      effectiveDate: "2021-12-07",
      mid: 4.0788,
    },
    {
      no: "237/A/NBP/2021",
      effectiveDate: "2021-12-08",
      mid: 4.071,
    },
    {
      no: "238/A/NBP/2021",
      effectiveDate: "2021-12-09",
      mid: 4.0837,
    },
    {
      no: "239/A/NBP/2021",
      effectiveDate: "2021-12-10",
      mid: 4.0887,
    },
    {
      no: "240/A/NBP/2021",
      effectiveDate: "2021-12-13",
      mid: 4.1003,
    },
    {
      no: "241/A/NBP/2021",
      effectiveDate: "2021-12-14",
      mid: 4.1088,
    },
    {
      no: "242/A/NBP/2021",
      effectiveDate: "2021-12-15",
      mid: 4.0999,
    },
    {
      no: "243/A/NBP/2021",
      effectiveDate: "2021-12-16",
      mid: 4.0938,
    },
    {
      no: "244/A/NBP/2021",
      effectiveDate: "2021-12-17",
      mid: 4.0882,
    },
    {
      no: "245/A/NBP/2021",
      effectiveDate: "2021-12-20",
      mid: 4.1182,
    },
    {
      no: "246/A/NBP/2021",
      effectiveDate: "2021-12-21",
      mid: 4.0937,
    },
    {
      no: "247/A/NBP/2021",
      effectiveDate: "2021-12-22",
      mid: 4.0984,
    },
    {
      no: "248/A/NBP/2021",
      effectiveDate: "2021-12-23",
      mid: 4.095,
    },
    {
      no: "249/A/NBP/2021",
      effectiveDate: "2021-12-24",
      mid: 4.0785,
    },
    {
      no: "250/A/NBP/2021",
      effectiveDate: "2021-12-27",
      mid: 4.0889,
    },
    {
      no: "251/A/NBP/2021",
      effectiveDate: "2021-12-28",
      mid: 4.062,
    },
    {
      no: "252/A/NBP/2021",
      effectiveDate: "2021-12-29",
      mid: 4.0779,
    },
    {
      no: "253/A/NBP/2021",
      effectiveDate: "2021-12-30",
      mid: 4.0631,
    },
    {
      no: "254/A/NBP/2021",
      effectiveDate: "2021-12-31",
      mid: 4.06,
    },
    {
      no: "001/A/NBP/2022",
      effectiveDate: "2022-01-03",
      mid: 4.0424,
    },
    {
      no: "002/A/NBP/2022",
      effectiveDate: "2022-01-04",
      mid: 4.0468,
    },
    {
      no: "003/A/NBP/2022",
      effectiveDate: "2022-01-05",
      mid: 4.0396,
    },
    {
      no: "004/A/NBP/2022",
      effectiveDate: "2022-01-07",
      mid: 4.0279,
    },
    {
      no: "005/A/NBP/2022",
      effectiveDate: "2022-01-10",
      mid: 4.0064,
    },
    {
      no: "006/A/NBP/2022",
      effectiveDate: "2022-01-11",
      mid: 4.0106,
    },
    {
      no: "007/A/NBP/2022",
      effectiveDate: "2022-01-12",
      mid: 3.9879,
    },
    {
      no: "008/A/NBP/2022",
      effectiveDate: "2022-01-13",
      mid: 3.9463,
    },
    {
      no: "009/A/NBP/2022",
      effectiveDate: "2022-01-14",
      mid: 3.9597,
    },
    {
      no: "010/A/NBP/2022",
      effectiveDate: "2022-01-17",
      mid: 3.9567,
    },
    {
      no: "011/A/NBP/2022",
      effectiveDate: "2022-01-18",
      mid: 3.9734,
    },
    {
      no: "012/A/NBP/2022",
      effectiveDate: "2022-01-19",
      mid: 3.993,
    },
    {
      no: "013/A/NBP/2022",
      effectiveDate: "2022-01-20",
      mid: 3.9833,
    },
    {
      no: "014/A/NBP/2022",
      effectiveDate: "2022-01-21",
      mid: 3.9953,
    },
    {
      no: "015/A/NBP/2022",
      effectiveDate: "2022-01-24",
      mid: 4.0049,
    },
    {
      no: "016/A/NBP/2022",
      effectiveDate: "2022-01-25",
      mid: 4.0593,
    },
    {
      no: "017/A/NBP/2022",
      effectiveDate: "2022-01-26",
      mid: 4.0684,
    },
    {
      no: "018/A/NBP/2022",
      effectiveDate: "2022-01-27",
      mid: 4.083,
    },
    {
      no: "019/A/NBP/2022",
      effectiveDate: "2022-01-28",
      mid: 4.1048,
    },
    {
      no: "020/A/NBP/2022",
      effectiveDate: "2022-01-31",
      mid: 4.1147,
    },
    {
      no: "021/A/NBP/2022",
      effectiveDate: "2022-02-01",
      mid: 4.0689,
    },
    {
      no: "022/A/NBP/2022",
      effectiveDate: "2022-02-02",
      mid: 4.0283,
    },
    {
      no: "023/A/NBP/2022",
      effectiveDate: "2022-02-03",
      mid: 4.0267,
    },
    {
      no: "024/A/NBP/2022",
      effectiveDate: "2022-02-04",
      mid: 3.9657,
    },
    {
      no: "025/A/NBP/2022",
      effectiveDate: "2022-02-07",
      mid: 3.9872,
    },
    {
      no: "026/A/NBP/2022",
      effectiveDate: "2022-02-08",
      mid: 3.9693,
    },
    {
      no: "027/A/NBP/2022",
      effectiveDate: "2022-02-09",
      mid: 3.953,
    },
    {
      no: "028/A/NBP/2022",
      effectiveDate: "2022-02-10",
      mid: 3.9218,
    },
    {
      no: "029/A/NBP/2022",
      effectiveDate: "2022-02-11",
      mid: 3.9665,
    },
    {
      no: "030/A/NBP/2022",
      effectiveDate: "2022-02-14",
      mid: 4.0439,
    },
    {
      no: "031/A/NBP/2022",
      effectiveDate: "2022-02-15",
      mid: 3.974,
    },
    {
      no: "032/A/NBP/2022",
      effectiveDate: "2022-02-16",
      mid: 3.9478,
    },
    {
      no: "033/A/NBP/2022",
      effectiveDate: "2022-02-17",
      mid: 3.9687,
    },
    {
      no: "034/A/NBP/2022",
      effectiveDate: "2022-02-18",
      mid: 3.9798,
    },
    {
      no: "035/A/NBP/2022",
      effectiveDate: "2022-02-21",
      mid: 3.9769,
    },
    {
      no: "036/A/NBP/2022",
      effectiveDate: "2022-02-22",
      mid: 4.012,
    },
    {
      no: "037/A/NBP/2022",
      effectiveDate: "2022-02-23",
      mid: 3.9937,
    },
    {
      no: "038/A/NBP/2022",
      effectiveDate: "2022-02-24",
      mid: 4.1281,
    },
    {
      no: "039/A/NBP/2022",
      effectiveDate: "2022-02-25",
      mid: 4.1683,
    },
    {
      no: "040/A/NBP/2022",
      effectiveDate: "2022-02-28",
      mid: 4.1965,
    },
    {
      no: "041/A/NBP/2022",
      effectiveDate: "2022-03-01",
      mid: 4.2193,
    },
    {
      no: "042/A/NBP/2022",
      effectiveDate: "2022-03-02",
      mid: 4.3302,
    },
    {
      no: "043/A/NBP/2022",
      effectiveDate: "2022-03-03",
      mid: 4.3257,
    },
    {
      no: "044/A/NBP/2022",
      effectiveDate: "2022-03-04",
      mid: 4.391,
    },
    {
      no: "045/A/NBP/2022",
      effectiveDate: "2022-03-07",
      mid: 4.5722,
    },
    {
      no: "046/A/NBP/2022",
      effectiveDate: "2022-03-08",
      mid: 4.5115,
    },
    {
      no: "047/A/NBP/2022",
      effectiveDate: "2022-03-09",
      mid: 4.4147,
    },
    {
      no: "048/A/NBP/2022",
      effectiveDate: "2022-03-10",
      mid: 4.3482,
    },
    {
      no: "049/A/NBP/2022",
      effectiveDate: "2022-03-11",
      mid: 4.3694,
    },
    {
      no: "050/A/NBP/2022",
      effectiveDate: "2022-03-14",
      mid: 4.3221,
    },
    {
      no: "051/A/NBP/2022",
      effectiveDate: "2022-03-15",
      mid: 4.2992,
    },
    {
      no: "052/A/NBP/2022",
      effectiveDate: "2022-03-16",
      mid: 4.2828,
    },
    {
      no: "053/A/NBP/2022",
      effectiveDate: "2022-03-17",
      mid: 4.2403,
    },
    {
      no: "054/A/NBP/2022",
      effectiveDate: "2022-03-18",
      mid: 4.2707,
    },
    {
      no: "055/A/NBP/2022",
      effectiveDate: "2022-03-21",
      mid: 4.2444,
    },
    {
      no: "056/A/NBP/2022",
      effectiveDate: "2022-03-22",
      mid: 4.272,
    },
    {
      no: "057/A/NBP/2022",
      effectiveDate: "2022-03-23",
      mid: 4.2772,
    },
    {
      no: "058/A/NBP/2022",
      effectiveDate: "2022-03-24",
      mid: 4.331,
    },
    {
      no: "059/A/NBP/2022",
      effectiveDate: "2022-03-25",
      mid: 4.3125,
    },
    {
      no: "060/A/NBP/2022",
      effectiveDate: "2022-03-28",
      mid: 4.2784,
    },
    {
      no: "061/A/NBP/2022",
      effectiveDate: "2022-03-29",
      mid: 4.2917,
    },
    {
      no: "062/A/NBP/2022",
      effectiveDate: "2022-03-30",
      mid: 4.1688,
    },
    {
      no: "063/A/NBP/2022",
      effectiveDate: "2022-03-31",
      mid: 4.1801,
    },
    {
      no: "064/A/NBP/2022",
      effectiveDate: "2022-04-01",
      mid: 4.1978,
    },
    {
      no: "065/A/NBP/2022",
      effectiveDate: "2022-04-04",
      mid: 4.2073,
    },
    {
      no: "066/A/NBP/2022",
      effectiveDate: "2022-04-05",
      mid: 4.2233,
    },
    {
      no: "067/A/NBP/2022",
      effectiveDate: "2022-04-06",
      mid: 4.2606,
    },
    {
      no: "068/A/NBP/2022",
      effectiveDate: "2022-04-07",
      mid: 4.2727,
    },
    {
      no: "069/A/NBP/2022",
      effectiveDate: "2022-04-08",
      mid: 4.2703,
    },
    {
      no: "070/A/NBP/2022",
      effectiveDate: "2022-04-11",
      mid: 4.2586,
    },
    {
      no: "071/A/NBP/2022",
      effectiveDate: "2022-04-12",
      mid: 4.2926,
    },
    {
      no: "072/A/NBP/2022",
      effectiveDate: "2022-04-13",
      mid: 4.2872,
    },
    {
      no: "073/A/NBP/2022",
      effectiveDate: "2022-04-14",
      mid: 4.2581,
    },
    {
      no: "074/A/NBP/2022",
      effectiveDate: "2022-04-15",
      mid: 4.2865,
    },
    {
      no: "075/A/NBP/2022",
      effectiveDate: "2022-04-19",
      mid: 4.2887,
    },
    {
      no: "076/A/NBP/2022",
      effectiveDate: "2022-04-20",
      mid: 4.2708,
    },
    {
      no: "077/A/NBP/2022",
      effectiveDate: "2022-04-21",
      mid: 4.2596,
    },
    {
      no: "078/A/NBP/2022",
      effectiveDate: "2022-04-22",
      mid: 4.2935,
    },
    {
      no: "079/A/NBP/2022",
      effectiveDate: "2022-04-25",
      mid: 4.3188,
    },
    {
      no: "080/A/NBP/2022",
      effectiveDate: "2022-04-26",
      mid: 4.3469,
    },
    {
      no: "081/A/NBP/2022",
      effectiveDate: "2022-04-27",
      mid: 4.4453,
    },
    {
      no: "082/A/NBP/2022",
      effectiveDate: "2022-04-28",
      mid: 4.4613,
    },
    {
      no: "083/A/NBP/2022",
      effectiveDate: "2022-04-29",
      mid: 4.4072,
    },
    {
      no: "084/A/NBP/2022",
      effectiveDate: "2022-05-02",
      mid: 4.4454,
    },
    {
      no: "085/A/NBP/2022",
      effectiveDate: "2022-05-04",
      mid: 4.4456,
    },
    {
      no: "086/A/NBP/2022",
      effectiveDate: "2022-05-05",
      mid: 4.4017,
    },
    {
      no: "087/A/NBP/2022",
      effectiveDate: "2022-05-06",
      mid: 4.4502,
    },
    {
      no: "088/A/NBP/2022",
      effectiveDate: "2022-05-09",
      mid: 4.4784,
    },
    {
      no: "089/A/NBP/2022",
      effectiveDate: "2022-05-10",
      mid: 4.4223,
    },
    {
      no: "090/A/NBP/2022",
      effectiveDate: "2022-05-11",
      mid: 4.419,
    },
    {
      no: "091/A/NBP/2022",
      effectiveDate: "2022-05-12",
      mid: 4.4863,
    },
    {
      no: "092/A/NBP/2022",
      effectiveDate: "2022-05-13",
      mid: 4.4849,
    },
    {
      no: "093/A/NBP/2022",
      effectiveDate: "2022-05-16",
      mid: 4.4785,
    },
    {
      no: "094/A/NBP/2022",
      effectiveDate: "2022-05-17",
      mid: 4.4379,
    },
    {
      no: "095/A/NBP/2022",
      effectiveDate: "2022-05-18",
      mid: 4.4279,
    },
    {
      no: "096/A/NBP/2022",
      effectiveDate: "2022-05-19",
      mid: 4.4231,
    },
    {
      no: "097/A/NBP/2022",
      effectiveDate: "2022-05-20",
      mid: 4.3832,
    },
    {
      no: "098/A/NBP/2022",
      effectiveDate: "2022-05-23",
      mid: 4.3369,
    },
    {
      no: "099/A/NBP/2022",
      effectiveDate: "2022-05-24",
      mid: 4.3071,
    },
    {
      no: "100/A/NBP/2022",
      effectiveDate: "2022-05-25",
      mid: 4.3069,
    },
    {
      no: "101/A/NBP/2022",
      effectiveDate: "2022-05-26",
      mid: 4.3189,
    },
    {
      no: "102/A/NBP/2022",
      effectiveDate: "2022-05-27",
      mid: 4.2966,
    },
    {
      no: "103/A/NBP/2022",
      effectiveDate: "2022-05-30",
      mid: 4.2617,
    },
    {
      no: "104/A/NBP/2022",
      effectiveDate: "2022-05-31",
      mid: 4.2651,
    },
    {
      no: "105/A/NBP/2022",
      effectiveDate: "2022-06-01",
      mid: 4.2817,
    },
    {
      no: "106/A/NBP/2022",
      effectiveDate: "2022-06-02",
      mid: 4.2931,
    },
    {
      no: "107/A/NBP/2022",
      effectiveDate: "2022-06-03",
      mid: 4.2689,
    },
    {
      no: "108/A/NBP/2022",
      effectiveDate: "2022-06-06",
      mid: 4.2675,
    },
    {
      no: "109/A/NBP/2022",
      effectiveDate: "2022-06-07",
      mid: 4.2935,
    },
    {
      no: "110/A/NBP/2022",
      effectiveDate: "2022-06-08",
      mid: 4.2904,
    },
    {
      no: "111/A/NBP/2022",
      effectiveDate: "2022-06-09",
      mid: 4.2764,
    },
    {
      no: "112/A/NBP/2022",
      effectiveDate: "2022-06-10",
      mid: 4.3363,
    },
    {
      no: "113/A/NBP/2022",
      effectiveDate: "2022-06-13",
      mid: 4.4209,
    },
    {
      no: "114/A/NBP/2022",
      effectiveDate: "2022-06-14",
      mid: 4.4478,
    },
    {
      no: "115/A/NBP/2022",
      effectiveDate: "2022-06-15",
      mid: 4.4455,
    },
    {
      no: "116/A/NBP/2022",
      effectiveDate: "2022-06-17",
      mid: 4.463,
    },
    {
      no: "117/A/NBP/2022",
      effectiveDate: "2022-06-20",
      mid: 4.44,
    },
    {
      no: "118/A/NBP/2022",
      effectiveDate: "2022-06-21",
      mid: 4.3917,
    },
    {
      no: "119/A/NBP/2022",
      effectiveDate: "2022-06-22",
      mid: 4.4338,
    },
    {
      no: "120/A/NBP/2022",
      effectiveDate: "2022-06-23",
      mid: 4.4881,
    },
    {
      no: "121/A/NBP/2022",
      effectiveDate: "2022-06-24",
      mid: 4.4656,
    },
    {
      no: "122/A/NBP/2022",
      effectiveDate: "2022-06-27",
      mid: 4.4369,
    },
    {
      no: "123/A/NBP/2022",
      effectiveDate: "2022-06-28",
      mid: 4.4377,
    },
    {
      no: "124/A/NBP/2022",
      effectiveDate: "2022-06-29",
      mid: 4.4533,
    },
    {
      no: "125/A/NBP/2022",
      effectiveDate: "2022-06-30",
      mid: 4.4825,
    },
    {
      no: "126/A/NBP/2022",
      effectiveDate: "2022-07-01",
      mid: 4.5106,
    },
    {
      no: "127/A/NBP/2022",
      effectiveDate: "2022-07-04",
      mid: 4.5032,
    },
    {
      no: "128/A/NBP/2022",
      effectiveDate: "2022-07-05",
      mid: 4.5947,
    },
    {
      no: "129/A/NBP/2022",
      effectiveDate: "2022-07-06",
      mid: 4.6796,
    },
    {
      no: "130/A/NBP/2022",
      effectiveDate: "2022-07-07",
      mid: 4.7029,
    },
    {
      no: "131/A/NBP/2022",
      effectiveDate: "2022-07-08",
      mid: 4.7417,
    },
    {
      no: "132/A/NBP/2022",
      effectiveDate: "2022-07-11",
      mid: 4.7416,
    },
    {
      no: "133/A/NBP/2022",
      effectiveDate: "2022-07-12",
      mid: 4.8284,
    },
    {
      no: "134/A/NBP/2022",
      effectiveDate: "2022-07-13",
      mid: 4.8221,
    },
    {
      no: "135/A/NBP/2022",
      effectiveDate: "2022-07-14",
      mid: 4.8274,
    },
    {
      no: "136/A/NBP/2022",
      effectiveDate: "2022-07-15",
      mid: 4.7966,
    },
    {
      no: "137/A/NBP/2022",
      effectiveDate: "2022-07-18",
      mid: 4.7152,
    },
    {
      no: "138/A/NBP/2022",
      effectiveDate: "2022-07-19",
      mid: 4.6594,
    },
    {
      no: "139/A/NBP/2022",
      effectiveDate: "2022-07-20",
      mid: 4.6524,
    },
    {
      no: "140/A/NBP/2022",
      effectiveDate: "2022-07-21",
      mid: 4.6682,
    },
    {
      no: "141/A/NBP/2022",
      effectiveDate: "2022-07-22",
      mid: 4.692,
    },
    {
      no: "142/A/NBP/2022",
      effectiveDate: "2022-07-25",
      mid: 4.6171,
    },
    {
      no: "143/A/NBP/2022",
      effectiveDate: "2022-07-26",
      mid: 4.6222,
    },
    {
      no: "144/A/NBP/2022",
      effectiveDate: "2022-07-27",
      mid: 4.7142,
    },
    {
      no: "145/A/NBP/2022",
      effectiveDate: "2022-07-28",
      mid: 4.6952,
    },
    {
      no: "146/A/NBP/2022",
      effectiveDate: "2022-07-29",
      mid: 4.6365,
    },
    {
      no: "147/A/NBP/2022",
      effectiveDate: "2022-08-01",
      mid: 4.629,
    },
    {
      no: "148/A/NBP/2022",
      effectiveDate: "2022-08-02",
      mid: 4.5984,
    },
    {
      no: "149/A/NBP/2022",
      effectiveDate: "2022-08-03",
      mid: 4.6164,
    },
    {
      no: "150/A/NBP/2022",
      effectiveDate: "2022-08-04",
      mid: 4.634,
    },
    {
      no: "151/A/NBP/2022",
      effectiveDate: "2022-08-05",
      mid: 4.6024,
    },
    {
      no: "152/A/NBP/2022",
      effectiveDate: "2022-08-08",
      mid: 4.6127,
    },
    {
      no: "153/A/NBP/2022",
      effectiveDate: "2022-08-09",
      mid: 4.5919,
    },
    {
      no: "154/A/NBP/2022",
      effectiveDate: "2022-08-10",
      mid: 4.6112,
    },
    {
      no: "155/A/NBP/2022",
      effectiveDate: "2022-08-11",
      mid: 4.5206,
    },
    {
      no: "156/A/NBP/2022",
      effectiveDate: "2022-08-12",
      mid: 4.5459,
    },
    {
      no: "157/A/NBP/2022",
      effectiveDate: "2022-08-16",
      mid: 4.6282,
    },
    {
      no: "158/A/NBP/2022",
      effectiveDate: "2022-08-17",
      mid: 4.6119,
    },
    {
      no: "159/A/NBP/2022",
      effectiveDate: "2022-08-18",
      mid: 4.6468,
    },
    {
      no: "160/A/NBP/2022",
      effectiveDate: "2022-08-19",
      mid: 4.7061,
    },
    {
      no: "161/A/NBP/2022",
      effectiveDate: "2022-08-22",
      mid: 4.7427,
    },
    {
      no: "162/A/NBP/2022",
      effectiveDate: "2022-08-23",
      mid: 4.803,
    },
    {
      no: "163/A/NBP/2022",
      effectiveDate: "2022-08-24",
      mid: 4.8029,
    },
    {
      no: "164/A/NBP/2022",
      effectiveDate: "2022-08-25",
      mid: 4.7546,
    },
    {
      no: "165/A/NBP/2022",
      effectiveDate: "2022-08-26",
      mid: 4.7465,
    },
    {
      no: "166/A/NBP/2022",
      effectiveDate: "2022-08-29",
      mid: 4.7821,
    },
    {
      no: "167/A/NBP/2022",
      effectiveDate: "2022-08-30",
      mid: 4.721,
    },
    {
      no: "168/A/NBP/2022",
      effectiveDate: "2022-08-31",
      mid: 4.736,
    },
    {
      no: "169/A/NBP/2022",
      effectiveDate: "2022-09-01",
      mid: 4.6959,
    },
    {
      no: "170/A/NBP/2022",
      effectiveDate: "2022-09-02",
      mid: 4.7276,
    },
    {
      no: "171/A/NBP/2022",
      effectiveDate: "2022-09-05",
      mid: 4.769,
    },
    {
      no: "172/A/NBP/2022",
      effectiveDate: "2022-09-06",
      mid: 4.7367,
    },
    {
      no: "173/A/NBP/2022",
      effectiveDate: "2022-09-07",
      mid: 4.7584,
    },
    {
      no: "174/A/NBP/2022",
      effectiveDate: "2022-09-08",
      mid: 4.7268,
    },
    {
      no: "175/A/NBP/2022",
      effectiveDate: "2022-09-09",
      mid: 4.6599,
    },
    {
      no: "176/A/NBP/2022",
      effectiveDate: "2022-09-12",
      mid: 4.6225,
    },
    {
      no: "177/A/NBP/2022",
      effectiveDate: "2022-09-13",
      mid: 4.6363,
    },
    {
      no: "178/A/NBP/2022",
      effectiveDate: "2022-09-14",
      mid: 4.7233,
    },
    {
      no: "179/A/NBP/2022",
      effectiveDate: "2022-09-15",
      mid: 4.7202,
    },
    {
      no: "180/A/NBP/2022",
      effectiveDate: "2022-09-16",
      mid: 4.7384,
    },
    {
      no: "181/A/NBP/2022",
      effectiveDate: "2022-09-19",
      mid: 4.7255,
    },
    {
      no: "182/A/NBP/2022",
      effectiveDate: "2022-09-20",
      mid: 4.7118,
    },
    {
      no: "183/A/NBP/2022",
      effectiveDate: "2022-09-21",
      mid: 4.7919,
    },
    {
      no: "184/A/NBP/2022",
      effectiveDate: "2022-09-22",
      mid: 4.8343,
    },
  ],
};

export const currencyUsdData: CurrencyRate =
  updateDatesInData(currencyUsdBaseData);

const currencyEurBaseData = {
  table: "A",
  currency: "euro",
  code: "EUR",
  rates: [
    {
      no: "182/A/NBP/2021",
      effectiveDate: "2021-09-20",
      mid: 4.5999,
    },
    {
      no: "183/A/NBP/2021",
      effectiveDate: "2021-09-21",
      mid: 4.6154,
    },
    {
      no: "184/A/NBP/2021",
      effectiveDate: "2021-09-22",
      mid: 4.6308,
    },
    {
      no: "185/A/NBP/2021",
      effectiveDate: "2021-09-23",
      mid: 4.6012,
    },
    {
      no: "186/A/NBP/2021",
      effectiveDate: "2021-09-24",
      mid: 4.6085,
    },
    {
      no: "187/A/NBP/2021",
      effectiveDate: "2021-09-27",
      mid: 4.5912,
    },
    {
      no: "188/A/NBP/2021",
      effectiveDate: "2021-09-28",
      mid: 4.6192,
    },
    {
      no: "189/A/NBP/2021",
      effectiveDate: "2021-09-29",
      mid: 4.6287,
    },
    {
      no: "190/A/NBP/2021",
      effectiveDate: "2021-09-30",
      mid: 4.6329,
    },
    {
      no: "191/A/NBP/2021",
      effectiveDate: "2021-10-01",
      mid: 4.5941,
    },
    {
      no: "192/A/NBP/2021",
      effectiveDate: "2021-10-04",
      mid: 4.5716,
    },
    {
      no: "193/A/NBP/2021",
      effectiveDate: "2021-10-05",
      mid: 4.6034,
    },
    {
      no: "194/A/NBP/2021",
      effectiveDate: "2021-10-06",
      mid: 4.6203,
    },
    {
      no: "195/A/NBP/2021",
      effectiveDate: "2021-10-07",
      mid: 4.5472,
    },
    {
      no: "196/A/NBP/2021",
      effectiveDate: "2021-10-08",
      mid: 4.5956,
    },
    {
      no: "197/A/NBP/2021",
      effectiveDate: "2021-10-11",
      mid: 4.612,
    },
    {
      no: "198/A/NBP/2021",
      effectiveDate: "2021-10-12",
      mid: 4.5859,
    },
    {
      no: "199/A/NBP/2021",
      effectiveDate: "2021-10-13",
      mid: 4.5806,
    },
    {
      no: "200/A/NBP/2021",
      effectiveDate: "2021-10-14",
      mid: 4.577,
    },
    {
      no: "201/A/NBP/2021",
      effectiveDate: "2021-10-15",
      mid: 4.5733,
    },
    {
      no: "202/A/NBP/2021",
      effectiveDate: "2021-10-18",
      mid: 4.5715,
    },
    {
      no: "203/A/NBP/2021",
      effectiveDate: "2021-10-19",
      mid: 4.5717,
    },
    {
      no: "204/A/NBP/2021",
      effectiveDate: "2021-10-20",
      mid: 4.5841,
    },
    {
      no: "205/A/NBP/2021",
      effectiveDate: "2021-10-21",
      mid: 4.593,
    },
    {
      no: "206/A/NBP/2021",
      effectiveDate: "2021-10-22",
      mid: 4.6072,
    },
    {
      no: "207/A/NBP/2021",
      effectiveDate: "2021-10-25",
      mid: 4.6018,
    },
    {
      no: "208/A/NBP/2021",
      effectiveDate: "2021-10-26",
      mid: 4.6134,
    },
    {
      no: "209/A/NBP/2021",
      effectiveDate: "2021-10-27",
      mid: 4.6165,
    },
    {
      no: "210/A/NBP/2021",
      effectiveDate: "2021-10-28",
      mid: 4.6284,
    },
    {
      no: "211/A/NBP/2021",
      effectiveDate: "2021-10-29",
      mid: 4.6208,
    },
    {
      no: "212/A/NBP/2021",
      effectiveDate: "2021-11-02",
      mid: 4.6129,
    },
    {
      no: "213/A/NBP/2021",
      effectiveDate: "2021-11-03",
      mid: 4.6,
    },
    {
      no: "214/A/NBP/2021",
      effectiveDate: "2021-11-04",
      mid: 4.5987,
    },
    {
      no: "215/A/NBP/2021",
      effectiveDate: "2021-11-05",
      mid: 4.6065,
    },
    {
      no: "216/A/NBP/2021",
      effectiveDate: "2021-11-08",
      mid: 4.595,
    },
    {
      no: "217/A/NBP/2021",
      effectiveDate: "2021-11-09",
      mid: 4.5942,
    },
    {
      no: "218/A/NBP/2021",
      effectiveDate: "2021-11-10",
      mid: 4.6007,
    },
    {
      no: "219/A/NBP/2021",
      effectiveDate: "2021-11-12",
      mid: 4.6412,
    },
    {
      no: "220/A/NBP/2021",
      effectiveDate: "2021-11-15",
      mid: 4.6365,
    },
    {
      no: "221/A/NBP/2021",
      effectiveDate: "2021-11-16",
      mid: 4.6652,
    },
    {
      no: "222/A/NBP/2021",
      effectiveDate: "2021-11-17",
      mid: 4.6614,
    },
    {
      no: "223/A/NBP/2021",
      effectiveDate: "2021-11-18",
      mid: 4.6592,
    },
    {
      no: "224/A/NBP/2021",
      effectiveDate: "2021-11-19",
      mid: 4.6844,
    },
    {
      no: "225/A/NBP/2021",
      effectiveDate: "2021-11-22",
      mid: 4.721,
    },
    {
      no: "226/A/NBP/2021",
      effectiveDate: "2021-11-23",
      mid: 4.7171,
    },
    {
      no: "227/A/NBP/2021",
      effectiveDate: "2021-11-24",
      mid: 4.6811,
    },
    {
      no: "228/A/NBP/2021",
      effectiveDate: "2021-11-25",
      mid: 4.6688,
    },
    {
      no: "229/A/NBP/2021",
      effectiveDate: "2021-11-26",
      mid: 4.7038,
    },
    {
      no: "230/A/NBP/2021",
      effectiveDate: "2021-11-29",
      mid: 4.6982,
    },
    {
      no: "231/A/NBP/2021",
      effectiveDate: "2021-11-30",
      mid: 4.6834,
    },
    {
      no: "232/A/NBP/2021",
      effectiveDate: "2021-12-01",
      mid: 4.6494,
    },
    {
      no: "233/A/NBP/2021",
      effectiveDate: "2021-12-02",
      mid: 4.6002,
    },
    {
      no: "234/A/NBP/2021",
      effectiveDate: "2021-12-03",
      mid: 4.5934,
    },
    {
      no: "235/A/NBP/2021",
      effectiveDate: "2021-12-06",
      mid: 4.5889,
    },
    {
      no: "236/A/NBP/2021",
      effectiveDate: "2021-12-07",
      mid: 4.5991,
    },
    {
      no: "237/A/NBP/2021",
      effectiveDate: "2021-12-08",
      mid: 4.5941,
    },
    {
      no: "238/A/NBP/2021",
      effectiveDate: "2021-12-09",
      mid: 4.6226,
    },
    {
      no: "239/A/NBP/2021",
      effectiveDate: "2021-12-10",
      mid: 4.6129,
    },
    {
      no: "240/A/NBP/2021",
      effectiveDate: "2021-12-13",
      mid: 4.6204,
    },
    {
      no: "241/A/NBP/2021",
      effectiveDate: "2021-12-14",
      mid: 4.6436,
    },
    {
      no: "242/A/NBP/2021",
      effectiveDate: "2021-12-15",
      mid: 4.6214,
    },
    {
      no: "243/A/NBP/2021",
      effectiveDate: "2021-12-16",
      mid: 4.6315,
    },
    {
      no: "244/A/NBP/2021",
      effectiveDate: "2021-12-17",
      mid: 4.6334,
    },
    {
      no: "245/A/NBP/2021",
      effectiveDate: "2021-12-20",
      mid: 4.6381,
    },
    {
      no: "246/A/NBP/2021",
      effectiveDate: "2021-12-21",
      mid: 4.6238,
    },
    {
      no: "247/A/NBP/2021",
      effectiveDate: "2021-12-22",
      mid: 4.6244,
    },
    {
      no: "248/A/NBP/2021",
      effectiveDate: "2021-12-23",
      mid: 4.6359,
    },
    {
      no: "249/A/NBP/2021",
      effectiveDate: "2021-12-24",
      mid: 4.6252,
    },
    {
      no: "250/A/NBP/2021",
      effectiveDate: "2021-12-27",
      mid: 4.6239,
    },
    {
      no: "251/A/NBP/2021",
      effectiveDate: "2021-12-28",
      mid: 4.6028,
    },
    {
      no: "252/A/NBP/2021",
      effectiveDate: "2021-12-29",
      mid: 4.5997,
    },
    {
      no: "253/A/NBP/2021",
      effectiveDate: "2021-12-30",
      mid: 4.5915,
    },
    {
      no: "254/A/NBP/2021",
      effectiveDate: "2021-12-31",
      mid: 4.5994,
    },
    {
      no: "001/A/NBP/2022",
      effectiveDate: "2022-01-03",
      mid: 4.5889,
    },
    {
      no: "002/A/NBP/2022",
      effectiveDate: "2022-01-04",
      mid: 4.5737,
    },
    {
      no: "003/A/NBP/2022",
      effectiveDate: "2022-01-05",
      mid: 4.5672,
    },
    {
      no: "004/A/NBP/2022",
      effectiveDate: "2022-01-07",
      mid: 4.5576,
    },
    {
      no: "005/A/NBP/2022",
      effectiveDate: "2022-01-10",
      mid: 4.5377,
    },
    {
      no: "006/A/NBP/2022",
      effectiveDate: "2022-01-11",
      mid: 4.5454,
    },
    {
      no: "007/A/NBP/2022",
      effectiveDate: "2022-01-12",
      mid: 4.5332,
    },
    {
      no: "008/A/NBP/2022",
      effectiveDate: "2022-01-13",
      mid: 4.527,
    },
    {
      no: "009/A/NBP/2022",
      effectiveDate: "2022-01-14",
      mid: 4.5372,
    },
    {
      no: "010/A/NBP/2022",
      effectiveDate: "2022-01-17",
      mid: 4.5201,
    },
    {
      no: "011/A/NBP/2022",
      effectiveDate: "2022-01-18",
      mid: 4.5275,
    },
    {
      no: "012/A/NBP/2022",
      effectiveDate: "2022-01-19",
      mid: 4.5279,
    },
    {
      no: "013/A/NBP/2022",
      effectiveDate: "2022-01-20",
      mid: 4.5201,
    },
    {
      no: "014/A/NBP/2022",
      effectiveDate: "2022-01-21",
      mid: 4.5303,
    },
    {
      no: "015/A/NBP/2022",
      effectiveDate: "2022-01-24",
      mid: 4.5358,
    },
    {
      no: "016/A/NBP/2022",
      effectiveDate: "2022-01-25",
      mid: 4.5821,
    },
    {
      no: "017/A/NBP/2022",
      effectiveDate: "2022-01-26",
      mid: 4.592,
    },
    {
      no: "018/A/NBP/2022",
      effectiveDate: "2022-01-27",
      mid: 4.5713,
    },
    {
      no: "019/A/NBP/2022",
      effectiveDate: "2022-01-28",
      mid: 4.5697,
    },
    {
      no: "020/A/NBP/2022",
      effectiveDate: "2022-01-31",
      mid: 4.5982,
    },
    {
      no: "021/A/NBP/2022",
      effectiveDate: "2022-02-01",
      mid: 4.582,
    },
    {
      no: "022/A/NBP/2022",
      effectiveDate: "2022-02-02",
      mid: 4.55,
    },
    {
      no: "023/A/NBP/2022",
      effectiveDate: "2022-02-03",
      mid: 4.5439,
    },
    {
      no: "024/A/NBP/2022",
      effectiveDate: "2022-02-04",
      mid: 4.5459,
    },
    {
      no: "025/A/NBP/2022",
      effectiveDate: "2022-02-07",
      mid: 4.555,
    },
    {
      no: "026/A/NBP/2022",
      effectiveDate: "2022-02-08",
      mid: 4.5274,
    },
    {
      no: "027/A/NBP/2022",
      effectiveDate: "2022-02-09",
      mid: 4.5167,
    },
    {
      no: "028/A/NBP/2022",
      effectiveDate: "2022-02-10",
      mid: 4.4879,
    },
    {
      no: "029/A/NBP/2022",
      effectiveDate: "2022-02-11",
      mid: 4.5163,
    },
    {
      no: "030/A/NBP/2022",
      effectiveDate: "2022-02-14",
      mid: 4.5743,
    },
    {
      no: "031/A/NBP/2022",
      effectiveDate: "2022-02-15",
      mid: 4.5091,
    },
    {
      no: "032/A/NBP/2022",
      effectiveDate: "2022-02-16",
      mid: 4.4916,
    },
    {
      no: "033/A/NBP/2022",
      effectiveDate: "2022-02-17",
      mid: 4.5088,
    },
    {
      no: "034/A/NBP/2022",
      effectiveDate: "2022-02-18",
      mid: 4.5256,
    },
    {
      no: "035/A/NBP/2022",
      effectiveDate: "2022-02-21",
      mid: 4.5193,
    },
    {
      no: "036/A/NBP/2022",
      effectiveDate: "2022-02-22",
      mid: 4.5416,
    },
    {
      no: "037/A/NBP/2022",
      effectiveDate: "2022-02-23",
      mid: 4.5352,
    },
    {
      no: "038/A/NBP/2022",
      effectiveDate: "2022-02-24",
      mid: 4.6284,
    },
    {
      no: "039/A/NBP/2022",
      effectiveDate: "2022-02-25",
      mid: 4.6608,
    },
    {
      no: "040/A/NBP/2022",
      effectiveDate: "2022-02-28",
      mid: 4.6909,
    },
    {
      no: "041/A/NBP/2022",
      effectiveDate: "2022-03-01",
      mid: 4.7241,
    },
    {
      no: "042/A/NBP/2022",
      effectiveDate: "2022-03-02",
      mid: 4.7989,
    },
    {
      no: "043/A/NBP/2022",
      effectiveDate: "2022-03-03",
      mid: 4.7931,
    },
    {
      no: "044/A/NBP/2022",
      effectiveDate: "2022-03-04",
      mid: 4.8363,
    },
    {
      no: "045/A/NBP/2022",
      effectiveDate: "2022-03-07",
      mid: 4.9647,
    },
    {
      no: "046/A/NBP/2022",
      effectiveDate: "2022-03-08",
      mid: 4.9121,
    },
    {
      no: "047/A/NBP/2022",
      effectiveDate: "2022-03-09",
      mid: 4.8429,
    },
    {
      no: "048/A/NBP/2022",
      effectiveDate: "2022-03-10",
      mid: 4.8013,
    },
    {
      no: "049/A/NBP/2022",
      effectiveDate: "2022-03-11",
      mid: 4.7924,
    },
    {
      no: "050/A/NBP/2022",
      effectiveDate: "2022-03-14",
      mid: 4.7465,
    },
    {
      no: "051/A/NBP/2022",
      effectiveDate: "2022-03-15",
      mid: 4.7311,
    },
    {
      no: "052/A/NBP/2022",
      effectiveDate: "2022-03-16",
      mid: 4.7055,
    },
    {
      no: "053/A/NBP/2022",
      effectiveDate: "2022-03-17",
      mid: 4.6876,
    },
    {
      no: "054/A/NBP/2022",
      effectiveDate: "2022-03-18",
      mid: 4.7221,
    },
    {
      no: "055/A/NBP/2022",
      effectiveDate: "2022-03-21",
      mid: 4.693,
    },
    {
      no: "056/A/NBP/2022",
      effectiveDate: "2022-03-22",
      mid: 4.6975,
    },
    {
      no: "057/A/NBP/2022",
      effectiveDate: "2022-03-23",
      mid: 4.7036,
    },
    {
      no: "058/A/NBP/2022",
      effectiveDate: "2022-03-24",
      mid: 4.7589,
    },
    {
      no: "059/A/NBP/2022",
      effectiveDate: "2022-03-25",
      mid: 4.7459,
    },
    {
      no: "060/A/NBP/2022",
      effectiveDate: "2022-03-28",
      mid: 4.702,
    },
    {
      no: "061/A/NBP/2022",
      effectiveDate: "2022-03-29",
      mid: 4.7144,
    },
    {
      no: "062/A/NBP/2022",
      effectiveDate: "2022-03-30",
      mid: 4.6507,
    },
    {
      no: "063/A/NBP/2022",
      effectiveDate: "2022-03-31",
      mid: 4.6525,
    },
    {
      no: "064/A/NBP/2022",
      effectiveDate: "2022-04-01",
      mid: 4.6428,
    },
    {
      no: "065/A/NBP/2022",
      effectiveDate: "2022-04-04",
      mid: 4.6373,
    },
    {
      no: "066/A/NBP/2022",
      effectiveDate: "2022-04-05",
      mid: 4.6317,
    },
    {
      no: "067/A/NBP/2022",
      effectiveDate: "2022-04-06",
      mid: 4.6539,
    },
    {
      no: "068/A/NBP/2022",
      effectiveDate: "2022-04-07",
      mid: 4.6478,
    },
    {
      no: "069/A/NBP/2022",
      effectiveDate: "2022-04-08",
      mid: 4.6405,
    },
    {
      no: "070/A/NBP/2022",
      effectiveDate: "2022-04-11",
      mid: 4.6451,
    },
    {
      no: "071/A/NBP/2022",
      effectiveDate: "2022-04-12",
      mid: 4.6626,
    },
    {
      no: "072/A/NBP/2022",
      effectiveDate: "2022-04-13",
      mid: 4.646,
    },
    {
      no: "073/A/NBP/2022",
      effectiveDate: "2022-04-14",
      mid: 4.6447,
    },
    {
      no: "074/A/NBP/2022",
      effectiveDate: "2022-04-15",
      mid: 4.6378,
    },
    {
      no: "075/A/NBP/2022",
      effectiveDate: "2022-04-19",
      mid: 4.6361,
    },
    {
      no: "076/A/NBP/2022",
      effectiveDate: "2022-04-20",
      mid: 4.6295,
    },
    {
      no: "077/A/NBP/2022",
      effectiveDate: "2022-04-21",
      mid: 4.6523,
    },
    {
      no: "078/A/NBP/2022",
      effectiveDate: "2022-04-22",
      mid: 4.6361,
    },
    {
      no: "079/A/NBP/2022",
      effectiveDate: "2022-04-25",
      mid: 4.6405,
    },
    {
      no: "080/A/NBP/2022",
      effectiveDate: "2022-04-26",
      mid: 4.6429,
    },
    {
      no: "081/A/NBP/2022",
      effectiveDate: "2022-04-27",
      mid: 4.7076,
    },
    {
      no: "082/A/NBP/2022",
      effectiveDate: "2022-04-28",
      mid: 4.6915,
    },
    {
      no: "083/A/NBP/2022",
      effectiveDate: "2022-04-29",
      mid: 4.6582,
    },
    {
      no: "084/A/NBP/2022",
      effectiveDate: "2022-05-02",
      mid: 4.6806,
    },
    {
      no: "085/A/NBP/2022",
      effectiveDate: "2022-05-04",
      mid: 4.6777,
    },
    {
      no: "086/A/NBP/2022",
      effectiveDate: "2022-05-05",
      mid: 4.6658,
    },
    {
      no: "087/A/NBP/2022",
      effectiveDate: "2022-05-06",
      mid: 4.6979,
    },
    {
      no: "088/A/NBP/2022",
      effectiveDate: "2022-05-09",
      mid: 4.7059,
    },
    {
      no: "089/A/NBP/2022",
      effectiveDate: "2022-05-10",
      mid: 4.6761,
    },
    {
      no: "090/A/NBP/2022",
      effectiveDate: "2022-05-11",
      mid: 4.67,
    },
    {
      no: "091/A/NBP/2022",
      effectiveDate: "2022-05-12",
      mid: 4.6841,
    },
    {
      no: "092/A/NBP/2022",
      effectiveDate: "2022-05-13",
      mid: 4.6679,
    },
    {
      no: "093/A/NBP/2022",
      effectiveDate: "2022-05-16",
      mid: 4.6724,
    },
    {
      no: "094/A/NBP/2022",
      effectiveDate: "2022-05-17",
      mid: 4.6558,
    },
    {
      no: "095/A/NBP/2022",
      effectiveDate: "2022-05-18",
      mid: 4.6528,
    },
    {
      no: "096/A/NBP/2022",
      effectiveDate: "2022-05-19",
      mid: 4.6429,
    },
    {
      no: "097/A/NBP/2022",
      effectiveDate: "2022-05-20",
      mid: 4.6366,
    },
    {
      no: "098/A/NBP/2022",
      effectiveDate: "2022-05-23",
      mid: 4.6171,
    },
    {
      no: "099/A/NBP/2022",
      effectiveDate: "2022-05-24",
      mid: 4.6107,
    },
    {
      no: "100/A/NBP/2022",
      effectiveDate: "2022-05-25",
      mid: 4.5955,
    },
    {
      no: "101/A/NBP/2022",
      effectiveDate: "2022-05-26",
      mid: 4.6135,
    },
    {
      no: "102/A/NBP/2022",
      effectiveDate: "2022-05-27",
      mid: 4.6102,
    },
    {
      no: "103/A/NBP/2022",
      effectiveDate: "2022-05-30",
      mid: 4.5869,
    },
    {
      no: "104/A/NBP/2022",
      effectiveDate: "2022-05-31",
      mid: 4.5756,
    },
    {
      no: "105/A/NBP/2022",
      effectiveDate: "2022-06-01",
      mid: 4.5891,
    },
    {
      no: "106/A/NBP/2022",
      effectiveDate: "2022-06-02",
      mid: 4.5876,
    },
    {
      no: "107/A/NBP/2022",
      effectiveDate: "2022-06-03",
      mid: 4.5908,
    },
    {
      no: "108/A/NBP/2022",
      effectiveDate: "2022-06-06",
      mid: 4.588,
    },
    {
      no: "109/A/NBP/2022",
      effectiveDate: "2022-06-07",
      mid: 4.5855,
    },
    {
      no: "110/A/NBP/2022",
      effectiveDate: "2022-06-08",
      mid: 4.5817,
    },
    {
      no: "111/A/NBP/2022",
      effectiveDate: "2022-06-09",
      mid: 4.5826,
    },
    {
      no: "112/A/NBP/2022",
      effectiveDate: "2022-06-10",
      mid: 4.603,
    },
    {
      no: "113/A/NBP/2022",
      effectiveDate: "2022-06-13",
      mid: 4.6313,
    },
    {
      no: "114/A/NBP/2022",
      effectiveDate: "2022-06-14",
      mid: 4.6548,
    },
    {
      no: "115/A/NBP/2022",
      effectiveDate: "2022-06-15",
      mid: 4.6642,
    },
    {
      no: "116/A/NBP/2022",
      effectiveDate: "2022-06-17",
      mid: 4.6951,
    },
    {
      no: "117/A/NBP/2022",
      effectiveDate: "2022-06-20",
      mid: 4.6731,
    },
    {
      no: "118/A/NBP/2022",
      effectiveDate: "2022-06-21",
      mid: 4.646,
    },
    {
      no: "119/A/NBP/2022",
      effectiveDate: "2022-06-22",
      mid: 4.659,
    },
    {
      no: "120/A/NBP/2022",
      effectiveDate: "2022-06-23",
      mid: 4.7096,
    },
    {
      no: "121/A/NBP/2022",
      effectiveDate: "2022-06-24",
      mid: 4.7094,
    },
    {
      no: "122/A/NBP/2022",
      effectiveDate: "2022-06-27",
      mid: 4.6965,
    },
    {
      no: "123/A/NBP/2022",
      effectiveDate: "2022-06-28",
      mid: 4.7004,
    },
    {
      no: "124/A/NBP/2022",
      effectiveDate: "2022-06-29",
      mid: 4.6809,
    },
    {
      no: "125/A/NBP/2022",
      effectiveDate: "2022-06-30",
      mid: 4.6806,
    },
    {
      no: "126/A/NBP/2022",
      effectiveDate: "2022-07-01",
      mid: 4.7176,
    },
    {
      no: "127/A/NBP/2022",
      effectiveDate: "2022-07-04",
      mid: 4.7002,
    },
    {
      no: "128/A/NBP/2022",
      effectiveDate: "2022-07-05",
      mid: 4.7358,
    },
    {
      no: "129/A/NBP/2022",
      effectiveDate: "2022-07-06",
      mid: 4.7942,
    },
    {
      no: "130/A/NBP/2022",
      effectiveDate: "2022-07-07",
      mid: 4.7965,
    },
    {
      no: "131/A/NBP/2022",
      effectiveDate: "2022-07-08",
      mid: 4.7958,
    },
    {
      no: "132/A/NBP/2022",
      effectiveDate: "2022-07-11",
      mid: 4.7976,
    },
    {
      no: "133/A/NBP/2022",
      effectiveDate: "2022-07-12",
      mid: 4.8337,
    },
    {
      no: "134/A/NBP/2022",
      effectiveDate: "2022-07-13",
      mid: 4.8399,
    },
    {
      no: "135/A/NBP/2022",
      effectiveDate: "2022-07-14",
      mid: 4.8371,
    },
    {
      no: "136/A/NBP/2022",
      effectiveDate: "2022-07-15",
      mid: 4.8115,
    },
    {
      no: "137/A/NBP/2022",
      effectiveDate: "2022-07-18",
      mid: 4.777,
    },
    {
      no: "138/A/NBP/2022",
      effectiveDate: "2022-07-19",
      mid: 4.7731,
    },
    {
      no: "139/A/NBP/2022",
      effectiveDate: "2022-07-20",
      mid: 4.7603,
    },
    {
      no: "140/A/NBP/2022",
      effectiveDate: "2022-07-21",
      mid: 4.7578,
    },
    {
      no: "141/A/NBP/2022",
      effectiveDate: "2022-07-22",
      mid: 4.7643,
    },
    {
      no: "142/A/NBP/2022",
      effectiveDate: "2022-07-25",
      mid: 4.7196,
    },
    {
      no: "143/A/NBP/2022",
      effectiveDate: "2022-07-26",
      mid: 4.7183,
    },
    {
      no: "144/A/NBP/2022",
      effectiveDate: "2022-07-27",
      mid: 4.7811,
    },
    {
      no: "145/A/NBP/2022",
      effectiveDate: "2022-07-28",
      mid: 4.7973,
    },
    {
      no: "146/A/NBP/2022",
      effectiveDate: "2022-07-29",
      mid: 4.7399,
    },
    {
      no: "147/A/NBP/2022",
      effectiveDate: "2022-08-01",
      mid: 4.7475,
    },
    {
      no: "148/A/NBP/2022",
      effectiveDate: "2022-08-02",
      mid: 4.7092,
    },
    {
      no: "149/A/NBP/2022",
      effectiveDate: "2022-08-03",
      mid: 4.7032,
    },
    {
      no: "150/A/NBP/2022",
      effectiveDate: "2022-08-04",
      mid: 4.723,
    },
    {
      no: "151/A/NBP/2022",
      effectiveDate: "2022-08-05",
      mid: 4.7053,
    },
    {
      no: "152/A/NBP/2022",
      effectiveDate: "2022-08-08",
      mid: 4.7013,
    },
    {
      no: "153/A/NBP/2022",
      effectiveDate: "2022-08-09",
      mid: 4.7021,
    },
    {
      no: "154/A/NBP/2022",
      effectiveDate: "2022-08-10",
      mid: 4.7138,
    },
    {
      no: "155/A/NBP/2022",
      effectiveDate: "2022-08-11",
      mid: 4.6745,
    },
    {
      no: "156/A/NBP/2022",
      effectiveDate: "2022-08-12",
      mid: 4.6832,
    },
    {
      no: "157/A/NBP/2022",
      effectiveDate: "2022-08-16",
      mid: 4.6928,
    },
    {
      no: "158/A/NBP/2022",
      effectiveDate: "2022-08-17",
      mid: 4.6921,
    },
    {
      no: "159/A/NBP/2022",
      effectiveDate: "2022-08-18",
      mid: 4.7244,
    },
    {
      no: "160/A/NBP/2022",
      effectiveDate: "2022-08-19",
      mid: 4.748,
    },
    {
      no: "161/A/NBP/2022",
      effectiveDate: "2022-08-22",
      mid: 4.7493,
    },
    {
      no: "162/A/NBP/2022",
      effectiveDate: "2022-08-23",
      mid: 4.7706,
    },
    {
      no: "163/A/NBP/2022",
      effectiveDate: "2022-08-24",
      mid: 4.7772,
    },
    {
      no: "164/A/NBP/2022",
      effectiveDate: "2022-08-25",
      mid: 4.7584,
    },
    {
      no: "165/A/NBP/2022",
      effectiveDate: "2022-08-26",
      mid: 4.7413,
    },
    {
      no: "166/A/NBP/2022",
      effectiveDate: "2022-08-29",
      mid: 4.7529,
    },
    {
      no: "167/A/NBP/2022",
      effectiveDate: "2022-08-30",
      mid: 4.7328,
    },
    {
      no: "168/A/NBP/2022",
      effectiveDate: "2022-08-31",
      mid: 4.7265,
    },
    {
      no: "169/A/NBP/2022",
      effectiveDate: "2022-09-01",
      mid: 4.7133,
    },
    {
      no: "170/A/NBP/2022",
      effectiveDate: "2022-09-02",
      mid: 4.7144,
    },
    {
      no: "171/A/NBP/2022",
      effectiveDate: "2022-09-05",
      mid: 4.7263,
    },
    {
      no: "172/A/NBP/2022",
      effectiveDate: "2022-09-06",
      mid: 4.7168,
    },
    {
      no: "173/A/NBP/2022",
      effectiveDate: "2022-09-07",
      mid: 4.7137,
    },
    {
      no: "174/A/NBP/2022",
      effectiveDate: "2022-09-08",
      mid: 4.7244,
    },
    {
      no: "175/A/NBP/2022",
      effectiveDate: "2022-09-09",
      mid: 4.7098,
    },
    {
      no: "176/A/NBP/2022",
      effectiveDate: "2022-09-12",
      mid: 4.7113,
    },
    {
      no: "177/A/NBP/2022",
      effectiveDate: "2022-09-13",
      mid: 4.7082,
    },
    {
      no: "178/A/NBP/2022",
      effectiveDate: "2022-09-14",
      mid: 4.7195,
    },
    {
      no: "179/A/NBP/2022",
      effectiveDate: "2022-09-15",
      mid: 4.7164,
    },
    {
      no: "180/A/NBP/2022",
      effectiveDate: "2022-09-16",
      mid: 4.7176,
    },
    {
      no: "181/A/NBP/2022",
      effectiveDate: "2022-09-19",
      mid: 4.7142,
    },
    {
      no: "182/A/NBP/2022",
      effectiveDate: "2022-09-20",
      mid: 4.7165,
    },
    {
      no: "183/A/NBP/2022",
      effectiveDate: "2022-09-21",
      mid: 4.7449,
    },
    {
      no: "184/A/NBP/2022",
      effectiveDate: "2022-09-22",
      mid: 4.7758,
    },
  ],
};

export const currencyEurData: CurrencyRate =
  updateDatesInData(currencyEurBaseData);
