import React, { ReactElement, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { taxCoefficient } from "../../helpers/consts";
import './savingCalculation.css'

export default function SavingCalculation(): ReactElement {
  const [amount, setAmount] = useState<any>();
  const [tax, setTax] = useState<any>();

  const history = useHistory();

  const savingYears: any = localStorage.getItem("age");
  const period: any = localStorage.getItem("period");
  const salary: any = localStorage.getItem("salary");
  const occupation: any = localStorage.getItem("occupation");

  const savingCalc = () => {
    let amount: any;
    if (period === "mensuel") {
      amount = savingYears * (salary * 12);
      setAmount(amount);
    } else if (period === "annuel") {
      amount = savingYears * salary;
      setAmount(amount);
    }
  };

  const taxCalc = () => {
    const tax = savingYears * taxCoefficient;
    setTax(tax);
  };

  useEffect(() => {
    savingCalc();
    taxCalc();
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("savings", amount);
    localStorage.setItem("savingsTax", tax);
    history.push("/additional-guaranties");
  };

  return (
    <div className="saving_calc">
      <div className="saving_calc_title">
        En tant que <span className="gold_text">{occupation}</span>, vous aurez
        en <span className="gold_text">{savingYears}</span> ans:{" "}
      </div>

      <ul className="saving_calc_list">
        <li className="saving_calc_list-item">
          cotisé jusqu'à{" "}
          <NumberFormat
            value={amount}
            className="gold_text"
            displayType={"text"}
            thousandSeparator={`'`}
            prefix={"CHF "}
          />
          {" "}sur votre troisième pilier.
        </li>
        <li className="saving_calc_list-item">
          économisé jusqu'à{" "}
          <NumberFormat
            value={tax}
            className="gold_text"
            displayType={"text"}
            thousandSeparator={`'`}
            prefix={"CHF "}
          />
          {" "}sur vos impôts.
        </li>
      </ul>


      <button onClick={handleSubmit} className="next_button button_position">
        Continuer
      </button>
    </div>
  );
}
