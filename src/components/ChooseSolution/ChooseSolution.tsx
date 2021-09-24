import { styled } from "@material-ui/styles";
import { Checkbox, Radio } from "@mui/material";
import React, { ReactElement } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/styles";
import "./chooseSolution.css";

const useStyles = makeStyles({
  root: {
    color: "white !important",
  },
  checked: {
    color: "white",
  },
});

export default function ChooseSolution(): ReactElement {
  const [choice, setChoice] = useState("");

  const history = useHistory();

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("solutionChoice", choice);
    history.push("/");
  };

  return (
    <div className="choose_solution">
      <div className="choose_solution_text">
        Afin de connaître les montants que vous pourrez obtenir grâce à votre
        troisième pilier, veuillez choisir les solutions qui vous intéressent.
        (cochez la ou les cases - à la fin du calculateur vous aurez accès à un
        résumé basé sur vos choix)
      </div>
      <div className="choose_solution_blocks">
        <div className="choose_solution_block">
          <div className="choose_solution_block_wrapper">
            <div className="choose_solution_block-title gold_text">
              Solution {"\n"} épargne
            </div>
            <Radio
              checked={choice === "Solution épargne"}
              onChange={handleChange}
              value="Solution épargne"
              name="radio-buttons"
              classes={{ root: classes.root }}
            />
          </div>

          <Popup
            modal
            trigger={<div className="pop_up_triger">Revoir la vidéo</div>}
          >
            {(
              close:
                | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => void)
                | undefined
            ) => (
              <>
                <button className="close" onClick={close}>
                  X
                </button>
                <div className="pop_up">
                  <video width="700" height="auto" controls>
                    <source
                      src="video/video.sol.epargne.mp4"
                      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="choose_solution_block">
          <div className="choose_solution_block_wrapper">
            <div className="choose_solution_block-title gold_text">
              Solution{"\n"}
              mi-garantie/mi-rendement
            </div>
            <Radio
              checked={choice === "Solution mi-garantie/mi-rendement"}
              onChange={handleChange}
              value="Solution mi-garantie/mi-rendement"
              name="radio-buttons"
              classes={{ root: classes.root }}
            />
          </div>

          <Popup
            modal
            trigger={<div className="pop_up_triger">Revoir la vidéo</div>}
          >
            {(
              close:
                | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => void)
                | undefined
            ) => (
              <>
                <button className="close" onClick={close}>
                  X
                </button>
                <div className="pop_up">
                  <video width="700" height="auto" controls>
                    <source
                      src="video/video.sol.mi-mi.mp4"
                      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="choose_solution_block">
          <div className="choose_solution_block_wrapper">
            <div className="choose_solution_block-title gold_text">
              Solution{"\n"}
              100% Fonds de placement
            </div>
            <Radio
              checked={choice === "Solution 100% Fonds de placement"}
              onChange={handleChange}
              value="Solution 100% Fonds de placement"
              name="radio-buttons"
              classes={{ root: classes.root }}
            />
          </div>

          <Popup
            modal
            trigger={<div className="pop_up_triger">Revoir la vidéo</div>}
          >
            {(
              close:
                | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => void)
                | undefined
            ) => (
              <>
                <button className="close" onClick={close}>
                  X
                </button>
                <div className="pop_up">
                  <video width="700" height="auto" controls>
                    <source
                      src="video/video.sol.fonds.mp4"
                      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
      <button onClick={handleSubmit} className="next_button">
        Continuer
      </button>
    </div>
  );
};
