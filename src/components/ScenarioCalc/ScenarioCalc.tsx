import React, { ReactElement, useState } from "react";
import NumberFormat from "react-number-format";
import Chart from "react-apexcharts";
import "./scenarioCalc.css";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";

export default function ScenarioCalc(): ReactElement {
  const [scenarioPessimistic, setScenarioPessimistic] = useState<number>();
  const [scenarioRealistic, setScenarioRealistic] = useState<number>();
  const [scenarioOptimistic, setScenarioOptimistic] = useState<number>();

  const [amountEpargneFromStorage] = useState<any>(
    localStorage.getItem("amountEpargne")
  );
  const [amountFondsFromStorage] = useState<any>(
    localStorage.getItem("amount Fonds")
  );
  const [savingYears] = useState<any>(localStorage.getItem("age"));

  const [
    amountEpargneScenarioPessimistic,
    setAmountEpargneScenarioPessimistic,
  ] = useState<number | undefined>();
  const [amountEpargneScenarioRealistic, setAmountEpargneScenarioRealistic] =
    useState<number | undefined>();
  const [amountEpargneScenarioOptimistic, setAmountEpargneScenarioOptimistic] =
    useState<number | undefined>();

  const [amountFondsScenarioPessimistic, setAmountFondsScenarioPessimistic] =
    useState<number | undefined>();
  const [amountFondsScenarioRealistic, setAmountFondsScenarioRealistic] =
    useState<number | undefined>();
  const [amountFondsScenarioOptimistic, setAmountFondsScenarioOptimistic] =
    useState<number | undefined>();

  const history = useHistory();

  console.log(amountEpargneScenarioPessimistic);
  console.log(amountFondsScenarioPessimistic);
  console.log(amountEpargneScenarioRealistic);
  console.log(amountFondsScenarioRealistic);
  console.log(amountEpargneScenarioOptimistic);
  console.log(amountFondsScenarioOptimistic);

  const statePessimistic = {
    series: [amountEpargneScenarioPessimistic, amountFondsScenarioPessimistic],
    options: {
      fill: {
        colors: ["#eac28c", "#5cbbbb"],
      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
        fixed: {
          enabled: true,
          position: "topRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      plotOptions: {
        expandOnClick: false,
        pie: {
          donut: {
            size: "90px",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "white",
              },
              value: {
                show: true,
                fontSize: "40px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "#eac28c",
              },
              total: {
                show: true,
                showAlways: true,
                label: "Scénario pessimiste",
                fontSize: "24px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "white",
              },
            },
          },
        },
      },
    },
  };

  const stateRealistic = {
    series: [amountEpargneScenarioRealistic, amountFondsScenarioRealistic],
    options: {
      fill: {
        colors: ["#eac28c", "#5cbbbb"],
      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
        fixed: {
          enabled: false,
          position: "topRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "90px",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "white",
              },
              value: {
                show: true,
                fontSize: "40px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "#eac28c",
                formatter: function (val: any) {
                  return `CHF ${val}`;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: "Scénario réaliste",
                fontSize: "24px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "white",
              },
            },
          },
        },
      },
    },
  };

  const stateOptimistic = {
    series: [amountEpargneScenarioOptimistic, amountFondsScenarioOptimistic],
    options: {
      fill: {
        colors: ["#eac28c", "#5cbbbb"],
      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
        fixed: {
          enabled: true,
          position: "topRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "90px",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "blue",
              },
              value: {
                show: true,
                fontSize: "40px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "#eac28c",
              },
              total: {
                show: true,
                showAlways: true,
                label: "Scénario optimiste",
                fontSize: "24px",
                fontFamily: "Archivo Narrow, sans-serif",
                fontWeight: 400,
                color: "white",
              },
            },
          },
        },
      },
    },
  };

  const calcPessimistic = () => {
    const amountEpargneNew = Math.floor(
      amountEpargneFromStorage *
        (((1 + 0.001) ** savingYears - 1) / (0.001 / 1))
    );
    const amountFondsNew = Math.floor(amountFondsFromStorage * (1 + 0.02));
    const scenario = amountEpargneNew + amountFondsNew;
    setAmountEpargneScenarioPessimistic(amountEpargneNew);
    setAmountFondsScenarioPessimistic(amountFondsNew);
    setScenarioPessimistic(scenario);
  };

  const calcRealistic = () => {
    const amountEpargneNew = Math.floor(
      amountEpargneFromStorage *
        (((1 + 0.001) ** savingYears - 1) / (0.001 / 1))
    );
    const amountFondsNew = Math.floor(amountFondsFromStorage * (1 + 0.035));
    const scenario = amountEpargneNew + amountFondsNew;
    setAmountEpargneScenarioRealistic(amountEpargneNew);
    setAmountFondsScenarioRealistic(amountFondsNew);
    setScenarioRealistic(scenario);
  };

  const calcOptimistic = () => {
    const amountEpargneNew = Math.floor(
      amountEpargneFromStorage *
        (((1 + 0.001) ** savingYears - 1) / (0.001 / 1))
    );
    const amountFondsNew = Math.floor(amountFondsFromStorage * (1 + 0.05));
    const scenario = amountEpargneNew + amountFondsNew;
    setAmountEpargneScenarioOptimistic(amountEpargneNew);
    setAmountFondsScenarioOptimistic(amountFondsNew);
    setScenarioOptimistic(scenario);
  };

  useEffect(() => {
    calcPessimistic();
    calcRealistic();
    calcOptimistic();
  }, []);

  const handleSubmitModify = () => {
    localStorage.setItem(
      "scenarioPessimistic",
      JSON.stringify(scenarioPessimistic)
    );
    localStorage.setItem(
      "scenarioRealistic",
      JSON.stringify(scenarioRealistic)
    );
    localStorage.setItem(
      "scenarioOptimistic",
      JSON.stringify(scenarioOptimistic)
    );
    history.push("/modify-parameters");
  };

  return (
    <div className="scenario-calc">
      <div className="scenario-calc_text">
        La partie <span className="blue_text">bleue</span> correspond à la part
        en épargne et la partie <span className="gold_text">jaune</span> à la
        partie en fonds de placement. Avec{" "}
        <NumberFormat
          value={amountEpargneFromStorage}
          className="gold_text"
          displayType={"text"}
          thousandSeparator={`'`}
          prefix={"CHF "}
        />{" "}
        en épargne et{" "}
        <NumberFormat
          value={amountFondsFromStorage}
          className="gold_text"
          displayType={"text"}
          thousandSeparator={`'`}
          prefix={"CHF "}
        />{" "}
        en fonds, vous pourriez obtenir :
      </div>

      <div className="charts_blocks">
        {amountEpargneScenarioPessimistic && (
          <Chart
            type="donut"
            width="400"
            options={statePessimistic.options}
            series={statePessimistic.series}
          />
        )}
        {amountFondsScenarioRealistic && (
          <Chart
            type="donut"
            width="400"
            options={stateRealistic.options}
            series={stateRealistic.series}
          />
        )}
        {amountEpargneScenarioOptimistic && (
          <Chart
            type="donut"
            width="400"
            options={stateOptimistic.options}
            series={stateOptimistic.series}
          />
        )}
      </div>

      <div className="button_set button_position">
        <button className="next_button">Continuer</button>
        <button onClick={handleSubmitModify} className="modif_button">
          Modifier les paramètres
        </button>
      </div>

      <Popup
        modal
        trigger={
          <div className="pop_up_triger">
            Comment définissez-vous ces scénarios et les pourcentages de
            rendement ?
          </div>
        }
      >
        {(
          close:
            | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
            | undefined
        ) => (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <div className="pop_up">
              <div className="pop_up_title">
                Comment définissez-vous ces scénarios et les pourcentages de
                rendement ?
              </div>
              <div className="pop_up_text">
                La part épargne, en bleu sur la page, reste identique dans les
                trois scénarios. C'est uniquement la partie en fonds de
                placement qui varie selon les performances du marché.
              </div>
              <div className="pop_up_text">
                En règle générale, la partie en fond a un meilleur rendement que
                la partie épargne, c'est pourquoi elle représente une plus
                grande partie de votre capital total que votre choix initial.
              </div>

              <div className="pop_up_text">
                Par exemple, vous choisissez une solution 50% épargne et 50% en
                fonds de placement. D'après les performances historiques, à
                votre retraite, la partie en fonds de placement représentera
                plus de 50% de votre épargne totale.
              </div>

              <div className="pop_up_text">
                Pour définir les 3 scénarios, nous nous basons sur la moyenne
                historique des performances de différents produits de plusieurs
                compagnies d'assurances et de banques.
              </div>

              <div className="pop_up_text">
                Attention, les résultats sont à titre indicatif et spécifiques à
                chaque institution. Ce sont des estimations pour mieux vous
                aider à visualiser votre épargne.
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
