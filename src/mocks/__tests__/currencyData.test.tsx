import { updateDatesInData } from "../currencyData";

describe("currencyData tests", () => {
  describe("updateDatesInData tests", () => {
    const sampleData = {
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
      ],
    };

    it("should updates dates in receiver data", () => {
      const updatedData = updateDatesInData(sampleData);

      expect(updatedData).toEqual({
        table: "A",
        currency: "dolar amerykański",
        code: "USD",
        rates: [
          {
            no: "182/A/NBP/2021",
            effectiveDate: "2022-09-21",
            mid: 3.9282,
          },
          {
            no: "183/A/NBP/2021",
            effectiveDate: "2022-09-22",
            mid: 3.9337,
          },
          {
            no: "184/A/NBP/2021",
            effectiveDate: "2022-09-23",
            mid: 3.946,
          },
        ],
      });
    });
  });
});
