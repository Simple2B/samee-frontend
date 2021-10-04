import classes from "*.module.css";
import { FormControl, Select, MenuItem } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { CircleSlider } from "react-circle-slider";
import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import "./modifyParameters.css";

const useStyles = makeStyles({
  root: {
    color: "white !important",
    fontSize: "24px !important",
    fontFamily: '"Archivo Narrow" !important',
    borderBottom: "1px solid white !important",
  },
  select: {
    borderColor: "white !important",
  },
  nativeInput: {
    color: "#fff !important",
  },
  icon: {
    color: "white !important",
  },
  colorPrimary: {
    color: "#eac28c !important",
  },
});

export default function ModifyParameters(): ReactElement {
  const [period, setPeriod] = useState<any>("mensuel");
  const [salaryFromLocal, setSalaryFromLocal] = useState<any>(
    localStorage.getItem("salary")
  );
  const [sliderValue, setSliderValue] = useState(0);

  const history = useHistory();

  const classes = useStyles();

  const handleSalary = (e: { target: { value: any } }) => {
    setSalaryFromLocal(e.target.value);
  };

  const handlePeriod = (e: { target: { value: any } }) => {
    setPeriod(e.target.value);
  };

  const handleSliderChange = (e: number) => {
    console.log(e);
    setSliderValue(e);
  };

  const handleRecalculate = () => {
    localStorage.setItem("savingsPercent", JSON.stringify(sliderValue));
    localStorage.setItem("fondsPercent", JSON.stringify(100 - sliderValue));
    localStorage.setItem("salary", salaryFromLocal);
    localStorage.setItem("period", period);
  };

  return (
    <div className="modify_parameters">
      <div className="modify_parameters_text">
        Vous pouvez essayer avec un autre montant d'épargne
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={period}
            onChange={handlePeriod}
            label="salary"
            className={classes.root}
            classes={{
              nativeInput: classes.nativeInput,
            }}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
          >
            <MenuItem value="mensuel">mensuel</MenuItem>
            <MenuItem value="annuel">annuel</MenuItem>
          </Select>
        </FormControl>
        {period === "mensuel" ? (
          <input
            min="100"
            max="573"
            onChange={handleSalary}
            value={salaryFromLocal}
            type="number"
            className="employee_salary"
          />
        ) : (
          <input
            min="1200"
            max="6883"
            onChange={handleSalary}
            value={salaryFromLocal}
            type="number"
            className="employee_salary"
          />
        )}
      </div>

      <div className="modify_parameters_text">
        et avec une répartition différente
      </div>

      <div className="half-optimal-proportion_percents">
        <div className="proportion_percent">
          <div className="percent gold_text">{`${sliderValue}%`}</div>
          <div className="percent-desc">Epargne</div>
        </div>

        <div className="circle_button">
          <CircleSlider
            size={260}
            progressWidth={10}
            circleWidth={10}
            progressColor={"white"}
            stepSize={10}
            value={sliderValue}
            onChange={handleSliderChange}
          />

          <div className="circle"></div>
        </div>

        <div className="proportion_percent">
          <div className="percent gold_text">{`${100 - sliderValue}%`}</div>
          <div className="percent-desc">Fonds</div>
        </div>
      </div>

      <button
        onClick={handleRecalculate}
        className="next_button button_position"
      >
        Recalculer
      </button>
    </div>
  );
}
