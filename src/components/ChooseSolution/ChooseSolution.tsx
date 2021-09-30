import { styled } from "@material-ui/styles";
import { Checkbox, Radio } from "@mui/material";
import React, { ReactElement } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/styles";
import "./chooseSolution.css";
import { JsxEmit } from "typescript";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    color: "white !important",
  },
  checked: {
    color: "white",
  },
});

export default function ChooseSolution(): ReactElement {
  const [choiceFirst, setChoiceFirst] = useState(false);
  const [choiceSecond, setChoiceSecond] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoiceFirst(state => !state);
  };

  const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoiceSecond(state => !state);
  };

  // console.log(choiceFirst);
  // console.log(choiceSecond);

  useEffect(() => {
    console.log(choiceFirst);
    console.log(choiceSecond);


  }, [choiceSecond, choiceFirst])

  const handleSubmit = () => {
    let solutionChoiceObject;

    const solutionChoice = localStorage.getItem("solutionChoice");

    if (solutionChoice) {
      solutionChoiceObject = JSON.parse(solutionChoice);
    } else {
      solutionChoiceObject = {};
    }

    solutionChoiceObject["solutionChoice"] = []

    choiceFirst && solutionChoiceObject["solutionChoice"].push("garanties");
    choiceSecond && solutionChoiceObject["solutionChoice"].push("rendement");

    localStorage.setItem('solutionChoice', JSON.stringify(solutionChoiceObject.solutionChoice))

    // history.push("/");
  };

  return (
    <div className="choose_solution">
      <div className="choose_solution_title">
        Choisir son profil d'investisseur
      </div>
      <div className="choose_solution_text">
        L'argument de la sécurité en cas d'invalidité et de décès est choisi
        dans la grande majorité des cas. Cependant, certains cherchent juste à
        placer un capital tout en économisant aux impôts.
      </div>
      <div className="choose_solution_text">
        Veuillez cocher la case qui vous correspond le mieux. (vous pouvez
        cocher les deux cases)
      </div>
      <div className="choose_solution_text">
        Il est bien de savoir que nous pourrons toujours trouver une solution
        sur-mesure. Ce calculateur est là pour vous aider à mieux visualiser les
        opportunités offertes par le troisième pilier.
      </div>

      <div className="choose_solution_blocks">
        <div className="choose_solution_block">
          <ul className="choose_solution_list">
            <li className="choose_solution_list-item">
              Les garanties m'intéressent
            </li>
          </ul>
          <Checkbox
            value={choiceFirst}
            onChange={handleChangeFirst}
            classes={{ root: classes.root, checked: classes.checked }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
          />
        </div>

        <div className="choose_solution_block">
          <ul className="choose_solution_list">
            <li className="choose_solution_list-item">
              Le rendement m'intéresse
            </li>
          </ul>
          <Checkbox
            value={choiceSecond}
            onChange={handleChangeSecond}
            classes={{ root: classes.root, checked: classes.checked }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
          />
        </div>
      </div>

      <button onClick={handleSubmit} className="next_button button_position">
        Continuer
      </button>
    </div>
  );
}
