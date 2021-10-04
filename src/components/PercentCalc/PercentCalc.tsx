import React, { ReactElement, useState } from "react";
import NumberFormat from "react-number-format";

import { useEffect } from "react";
import "./percentCalc.css";
import { useHistory } from "react-router-dom";

const savingYears: string | null = localStorage.getItem("age");
const savings: any = localStorage.getItem("savings");
const tax: string | null = localStorage.getItem("savingsTax");

export default function PercentCalc(): ReactElement {
  const [amountCapital, setAmountCapital] = useState<number>();
  const [amountFonds, setAmountFonds] = useState<number>();

  const [savingsPercent] = useState<any>(
    localStorage.getItem("savingsPercent")
  );
  const [fondsPercent] = useState<any>(localStorage.getItem("fondsPercent"));

  const history = useHistory();

  const amountCapitalCalc = () => {
    const capitalCalc = Math.floor((savings * savingsPercent) / 100);
    setAmountCapital(capitalCalc);
  };

  const amountFondsCalc = () => {
    const fondsCalc = Math.floor((savings * fondsPercent) / 100);
    setAmountFonds(fondsCalc);
  };

  useEffect(() => {
    amountCapitalCalc();
    amountFondsCalc();
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("amountEpargne", JSON.stringify(amountCapital));
    localStorage.setItem("amount Fonds", JSON.stringify(amountFonds));
    history.push("/scenario-calculation");
  };

  return (
    <div className="percent_calc">
      <div className="percent_calc_title">
        Dans <span className="gold_text">{savingYears} ans</span>, vous aurez:
      </div>

      <ul className="percent_calc_list">
        <li className="percent_calc_list-item">
          épargné{" "}
          <span className="gold_text">
            <NumberFormat
              value={savings}
              className="gold_text"
              displayType={"text"}
              thousandSeparator={`'`}
              prefix={"CHF "}
            />
          </span>
        </li>
        <li className="percent_calc_list-item">
          jusqu'à{" "}
          <span className="gold_text">
            <NumberFormat
              value={tax}
              className="gold_text"
              displayType={"text"}
              thousandSeparator={`'`}
              prefix={"CHF "}
            />
          </span>{" "}
          d'économie sur vos impôts
        </li>
      </ul>

      <div className="percent_calc_blocks">
        <div className="percent_calc_block">
          <div className="percent_calc_image">
            <img
              src="image/analys.png"
              className="percent_calc_img"
              alt="percent"
            />
          </div>

          <div className="percent_calc_block_text">
            <div className="percent_calc_amount gold_text">
              <NumberFormat
                value={amountCapital}
                className="gold_text percent_calc_amount"
                displayType={"text"}
                thousandSeparator={`'`}
                prefix={"CHF "}
              />
            </div>
            <div className="percent_calc_perc">
              <span className="gold_text">{savingsPercent}% </span> en capital
              garanti
            </div>
          </div>
        </div>

        <div className="percent_calc_block">
          <div className="percent_calc_image">
            <img
              src="image/lock.png"
              className="percent_calc_img"
              alt="percent"
            />
          </div>

          <div className="percent_calc_text">
            <div className="percent_calc_amount gold_text">
              <NumberFormat
                value={amountFonds}
                className="gold_text percent_calc_amount"
                displayType={"text"}
                thousandSeparator={`'`}
                prefix={"CHF "}
              />
            </div>
            <div className="percent_calc_perc">
              <span className="gold_text">{fondsPercent}% </span> en fonds
            </div>
          </div>
        </div>
      </div>

      <div className="percent_calc_text">
        Selon les conditions du marché, votre partie en fonds ramènera un taux
        d'intérêts plus ou moins grand.
      </div>

      <div onClick={handleSubmit} className="next_button button_position">
        Continuer
      </div>
    </div>
  );
}