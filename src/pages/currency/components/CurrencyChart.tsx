import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CurrencyRate } from "../../../api/currency/models";
import styles from "./CurrencyChart.module.scss";
import { Box, Skeleton, useTheme } from "@mui/material";
import cx from "classnames";

interface CurrencyChartProps {
  rates: CurrencyRate["rates"] | undefined;
  isFetching: boolean;
}

const CurrencyChart = ({ rates, isFetching }: CurrencyChartProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
        flex: "auto",
        mb: "1rem",
      }}
    >
      <ResponsiveContainer
        width="96%"
        height={550}
        className={cx({ [styles.reFetching]: isFetching })}
      >
        {isFetching && !rates ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        ) : (
          <AreaChart
            width={730}
            height={250}
            data={rates}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="effectiveDate" />
            <YAxis
              domain={([dataMin, dataMax]: [number, number]) => {
                const stroke = dataMax - dataMin;

                return [
                  Math.floor((dataMin - 0.1 * stroke) * 100) / 100,
                  Math.ceil((dataMax + 0.1 * stroke) * 100) / 100,
                ];
              }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelStyle={{ color: theme.palette.text.primary }}
              contentStyle={{
                backgroundColor: theme.palette.background.default,
              }}
            />
            <Area
              type="monotone"
              dataKey="mid"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
              name="rate"
              // legendType="diamond"
              // label
            />
            {/* <Legend content={renderLegend} /> */}
            <Legend />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
};

export default CurrencyChart;
