import { Stack, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useState } from "react";

interface HideProps {
  value: number;
}

const Hide = ({ value }: HideProps) => {
  const [internalState, setInternalState] = useState(0);

  let element: React.ReactNode | null = (
    <>
      <button onClick={() => setInternalState((prev) => prev + 1)}>
        stan wewnetrzny {internalState}
      </button>
    </>
  );

  if (value === 5) {
    element = null;
  }

  return element;
};

const UnderConstruction = () => {
  const [internalState, setInternalState] = useState(0);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      <button onClick={() => setInternalState((prev) => prev + 1)}>
        stan wewnetrzny {internalState}
      </button>
      <AutoFixHighIcon sx={{ fontSize: "10rem", mb: "3rem" }} />
      <Typography variant="h2" component="h1" align="center">
        Under Construction
      </Typography>

      <Hide value={internalState} />

      <button
        onClick={() => console.log((Math.round(0.1 * 10) / 10).toString())}
      >
        sprawdznie
      </button>

      <button onClick={() => console.log((1 / 10).toString())}>
        sprawdznie3
      </button>

      <button
        onClick={() => {
          console.log(-11 % 2);
        }}
      >
        sprawdznie4
      </button>

      <button
        onClick={() => {
          const zmienna: String = "null";

          if (zmienna instanceof String) {
            console.log("TEST 111");
          }
        }}
      >
        sprawdznie5
      </button>

      <button
        onClick={() => {
          const newDate = new Date();

          console.log("newDate =", newDate);

          console.log("newDate.getHours() =", newDate.getHours());
          console.log("newDate.toISOString() =", newDate.toISOString());

          console.log("newDate.getHours() =", newDate.setHours(22));
          console.log("newDate.getHours() =", newDate.getHours());
          console.log("newDate.toISOString() =", newDate.toISOString());

          const newDate2 = new Date("2022-01-01T12:00");
          console.log("newDate.getHours() =", newDate2.getHours());
          console.log("newDate.toISOString() =", newDate2.toISOString());
          console.log(
            "newDate.toLocaleTimeString() =",
            newDate2.toLocaleString()
          );
        }}
      >
        date
      </button>

      <button
        onClick={() => {
          const obj1111 = {
            a: "a",
            b: "b",
            aa: "aa",
            set setAA(value: string) {
              console.log("setAA");
              this.aa = value;
            },
            get getAA() {
              console.log("getAA");
              return this.aa;
            },
          };
          const obj2222 = {
            c: "c",
            d: "d",
            cc: "cc",
            set setCC(value: string) {
              console.log("setCC");
              this.cc = value;
            },
            get getCC() {
              console.log("getCC");
              return this.cc;
            },
          };

          console.log("obj1 =", obj1111);
          console.log("obj2 =", obj2222);

          const obj3333 = { ...obj2222 };
          // const obj3333 = Object.assign(obj1111, obj2222);

          console.log("obj1 =", obj1111);
          console.log("obj2 =", obj2222);
          console.log("obj3 =", obj3333);

          // obj3.setAA = "nowe aa";
          // console.log("obj3.setAA =", obj3.setAA);
          // console.log("obj3.aa =", obj3.aa);
          // console.log("obj3.getAA =", obj3.getAA);

          obj3333.getCC = "nowe cc";
          console.log("obj3.setCC =", obj3333.setCC);
          console.log("obj3.cc =", obj3333.cc);
          console.log("obj3.getCC =", obj3333.getCC);
        }}
      >
        Object.assign
      </button>
    </Stack>
  );
};

export default UnderConstruction;
