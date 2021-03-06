import React, {ReactElement, useContext, useState} from 'react';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';
import Chart from 'react-apexcharts';
import './scenarioCalc.css';
import {useEffect} from 'react';
import Popup from 'reactjs-popup';
import {useHistory} from 'react-router-dom';
import {chownSync} from 'fs';
import {ProgressContext} from '../../context/progressContext';

export default function ScenarioCalc(): ReactElement {
  const [period, setPeriod] = useState(localStorage.getItem('period'));
  const [savings, setSevings] = useState<any>(localStorage.getItem('salary'));
  const [savingsAmount, setSevingsAmount] = useState<any>(
    localStorage.getItem('savings'),
  );
  const [scenarioPessimistic, setScenarioPessimistic] = useState<number>();
  const [scenarioRealistic, setScenarioRealistic] = useState<number>();
  const [scenarioOptimistic, setScenarioOptimistic] = useState<number>();

  const [savingYears] = useState<any>(localStorage.getItem('age'));
  const [savingsPercent, setSavingsPercent] = useState<any>(
    localStorage.getItem('savingsPercent'),
  );
  const [fondsPercent, setFondsPercent] = useState<any>(
    localStorage.getItem('fondsPercent'),
  );

  const [amountEpargneFromStorage, setAmountEpargneFromStorage] = useState<any>(
    localStorage.getItem('amountEpargne'),
  );
  const [amountFondsFromStorage, setAmountFondsFromStorage] = useState<any>(
    localStorage.getItem('amount Fonds'),
  );

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

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(22);
  }, []);

  const amountCapitalCalc = () => {
    const capitalCalc = Math.floor(savingsAmount * (savingsPercent / 100));
    setAmountEpargneFromStorage(capitalCalc);
  };

  const amountFondsCalc = () => {
    const fondsCalc = Math.floor(savingsAmount * (fondsPercent / 100));
    setAmountFondsFromStorage(fondsCalc);
  };

  const statePessimistic = {
    series: [amountEpargneScenarioPessimistic, amountFondsScenarioPessimistic],
    options: {
      fill: {
        colors: ['#eac28c', '#5cbbbb'],
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
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              width: 300,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 769,
          options: {
            chart: {
              width: 250,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 426,
          options: {
            chart: {
              width: 180,
            },
            plotOptions: {},
          },
        },
      ],
      plotOptions: {
        expandOnClick: false,
        pie: {
          donut: {
            size: '90px',
            labels: {
              show: false,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'white',
              },
              value: {
                show: true,
                fontSize: '40px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: '#eac28c',
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Sc??nario pessimiste',
                fontSize: '24px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'white',
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
        colors: ['#eac28c', '#5cbbbb'],
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
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              width: 350,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 769,
          options: {
            chart: {
              width: 300,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 426,
          options: {
            chart: {
              width: 210,
            },
            plotOptions: {},
          },
        },
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '90px',
            labels: {
              show: false,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'white',
              },
              value: {
                show: true,
                fontSize: '40px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: '#eac28c',
                formatter: function (val: any) {
                  return `CHF ${val}`;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Sc??nario r??aliste',
                fontSize: '24px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'white',
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
        colors: ['#eac28c', '#5cbbbb'],
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
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              width: 300,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 769,
          options: {
            chart: {
              width: 250,
            },
            plotOptions: {},
          },
        },
        {
          breakpoint: 426,
          options: {
            chart: {
              width: 180,
            },
            plotOptions: {},
          },
        },
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '90px',
            labels: {
              show: false,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'blue',
              },
              value: {
                show: true,
                fontSize: '40px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: '#eac28c',
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Sc??nario optimiste',
                fontSize: '24px',
                fontFamily: 'Archivo Narrow, sans-serif',
                fontWeight: 400,
                color: 'white',
              },
            },
          },
        },
      },
    },
  };

  const calcPessimistic = () => {
    if (period === 'mensuel') {
      const amountFondsNew = Math.floor(
        savings *
          12 *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings *
          12 *
          (fondsPercent / 100) *
          ((1 + 0.02) ** savingYears - 1)) /
          (0.02 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioPessimistic(amountEpargneNew);
      setAmountFondsScenarioPessimistic(amountFondsNew);
      setScenarioPessimistic(scenario);
    } else if (period === 'annuel') {
      const amountFondsNew = Math.floor(
        savings *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings * (fondsPercent / 100) * ((1 + 0.02) ** savingYears - 1)) /
          (0.02 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioPessimistic(amountEpargneNew);
      setAmountFondsScenarioPessimistic(amountFondsNew);
      setScenarioPessimistic(scenario);
    }
  };

  const calcRealistic = () => {
    if (period === 'mensuel') {
      const amountFondsNew = Math.floor(
        savings *
          12 *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings *
          12 *
          (fondsPercent / 100) *
          ((1 + 0.035) ** savingYears - 1)) /
          (0.035 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioRealistic(amountEpargneNew);
      setAmountFondsScenarioRealistic(amountFondsNew);
      setScenarioRealistic(scenario);
    } else if (period === 'annuel') {
      const amountFondsNew = Math.floor(
        savings *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings * (fondsPercent / 100) * ((1 + 0.035) ** savingYears - 1)) /
          (0.035 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioRealistic(amountEpargneNew);
      setAmountFondsScenarioRealistic(amountFondsNew);
      setScenarioRealistic(scenario);
    }
  };

  const calcOptimistic = () => {
    if (period === 'mensuel') {
      const amountFondsNew = Math.floor(
        savings *
          12 *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings *
          12 *
          (fondsPercent / 100) *
          ((1 + 0.05) ** savingYears - 1)) /
          (0.05 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioOptimistic(amountEpargneNew);
      setAmountFondsScenarioOptimistic(amountFondsNew);
      setScenarioOptimistic(scenario);
    } else if (period === 'annuel') {
      const amountFondsNew = Math.floor(
        savings *
          (savingsPercent / 100) *
          (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );
      const amountEpargneNew = Math.floor(
        (savings * (fondsPercent / 100) * ((1 + 0.05) ** savingYears - 1)) /
          (0.05 / 1),
      );
      const scenario = amountEpargneNew + amountFondsNew;
      setAmountEpargneScenarioOptimistic(amountEpargneNew);
      setAmountFondsScenarioOptimistic(amountFondsNew);
      setScenarioOptimistic(scenario);
    }
  };

  useEffect(() => {
    amountCapitalCalc();
    amountFondsCalc();
    calcPessimistic();
    calcRealistic();
    calcOptimistic();
  }, []);

  const handleSubmitModify = () => {
    localStorage.setItem(
      'scenarioPessimistic',
      JSON.stringify(scenarioPessimistic),
    );
    localStorage.setItem(
      'scenarioRealistic',
      JSON.stringify(scenarioRealistic),
    );
    localStorage.setItem(
      'scenarioOptimistic',
      JSON.stringify(scenarioOptimistic),
    );
    history.push('/mi-garantie-mi-rendement-recalcul');
  };

  const handleSubmit = () => {
    localStorage.setItem(
      'scenarioPessimistic',
      JSON.stringify(scenarioPessimistic),
    );
    localStorage.setItem(
      'scenarioRealistic',
      JSON.stringify(scenarioRealistic),
    );
    localStorage.setItem(
      'scenarioOptimistic',
      JSON.stringify(scenarioOptimistic),
    );
    history.push('./resume');
  };

  return (
    <div className="scenario-calc">
      <div className="main_content">
        <div className="scenario-calc_text">
          La partie <span className="blue_text">bleue</span> correspond ?? la
          part en <span className="blue_text">??pargne</span> et la partie{' '}
          <span className="gold_text">jaune</span> ?? la partie en{' '}
          <span className="gold_text">fonds de placement</span>. Avec{' '}
          <NumberFormat
            value={amountEpargneFromStorage}
            className="blue_text"
            displayType={'text'}
            thousandSeparator={`'`}
            prefix={'CHF '}
          />{' '}
          en ??pargne et{' '}
          <NumberFormat
            value={amountFondsFromStorage}
            className="gold_text"
            displayType={'text'}
            thousandSeparator={`'`}
            prefix={'CHF '}
          />{' '}
          en fonds, vous pourriez obtenir :
        </div>

        <div className="charts_blocks">
          <div className="chart_block pessimistic">
            <div className="gold_text chart_block_label-up">
              <NumberFormat
                value={amountEpargneScenarioPessimistic}
                className="gold_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="blue_text chart_block_label-down">
              <NumberFormat
                value={amountFondsScenarioPessimistic}
                className="blue_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="chart_block_title title-little">
              Sc??nario pessimiste
            </div>
            <NumberFormat
              value={scenarioPessimistic}
              className="gold_text chart_block_amount amount-little"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
            {amountEpargneScenarioPessimistic && (
              <Chart
                type="donut"
                width="320"
                options={statePessimistic.options}
                series={statePessimistic.series}
              />
            )}
          </div>

          <div className="chart_block">
            <div className="gold_text chart_block_label-up-big">
              <NumberFormat
                value={amountEpargneScenarioRealistic}
                className="gold_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="blue_text chart_block_label-down-big">
              <NumberFormat
                value={amountFondsScenarioRealistic}
                className="blue_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="chart_block_title real-text">Sc??nario r??aliste</div>
            <NumberFormat
              value={scenarioRealistic}
              className="gold_text chart_block_amount real-amount"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
            {amountFondsScenarioRealistic && (
              <Chart
                type="donut"
                width="400"
                options={stateRealistic.options}
                series={stateRealistic.series}
              />
            )}
          </div>

          <div className="chart_block optimistic">
            <div className="gold_text chart_block_label-up ">
              <NumberFormat
                value={amountEpargneScenarioOptimistic}
                className="gold_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="blue_text chart_block_label-down">
              <NumberFormat
                value={amountFondsScenarioOptimistic}
                className="blue_text display_none"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="chart_block_title title-little">
              Sc??nario optimiste
            </div>
            <NumberFormat
              value={scenarioOptimistic}
              className="gold_text chart_block_amount amount-little"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
            {amountEpargneScenarioOptimistic && (
              <Chart
                type="donut"
                width="320"
                options={stateOptimistic.options}
                series={stateOptimistic.series}
              />
            )}
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="button_set button_position">
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>
          <button onClick={handleSubmitModify} className="modif_button">
            Modifier les param??tres
          </button>
        </div>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger triger_inline">
              Comment d??finissez-vous ces sc??narios et les pourcentages de
              rendement ?
            </div>
          }>
          {(
            close:
              | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                ) => void)
              | undefined,
          ) => (
            <>
              <button className="close" onClick={close}></button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Comment d??finissez-vous ces sc??narios et les pourcentages de
                  rendement ?
                </div>
                <div className="pop_up_text">
                  {/* La part ??pargne, en bleu sur la page, reste identique dans les
                  trois sc??narios. C'est uniquement la partie en fonds de
                  placement qui varie selon les performances du march??. */}
                  La partie??bleue??correspond ?? la part en????pargne??et la
                  partie??jaune???? la part en??fonds de placement.
                </div>
                <div className="pop_up_text">
                  En r??gle g??n??rale, la partie en fond a un meilleur rendement
                  que la partie ??pargne, c'est pourquoi elle repr??sente une plus
                  grande partie de votre capital total que votre choix initial.
                </div>

                <div className="pop_up_text">
                  Par exemple, vous choisissez une solution 50% ??pargne et 50%
                  en fonds de placement. D'apr??s les performances historiques, ??
                  votre retraite, la partie en fonds de placement repr??sentera
                  plus de 50% de votre ??pargne totale.
                </div>

                <div className="pop_up_text">
                  Pour d??finir les 3 sc??narios, nous nous basons sur la moyenne
                  historique des performances de diff??rents produits de
                  plusieurs compagnies d'assurances et de banques.
                </div>

                <div className="pop_up_text">
                  Attention, les r??sultats sont ?? titre indicatif et sp??cifiques
                  ?? chaque institution. Ce sont des estimations pour mieux vous
                  aider ?? visualiser votre ??pargne.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
