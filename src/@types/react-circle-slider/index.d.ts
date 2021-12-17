declare module "react-circle-slider" {
  export interface CircleSliderProps {
    value: number;
    stepSize: number;
    progressColor: string;
    progressWidth: number;
    circleWidth: number;
    onChange: function;
    min?: number;
    max?: number;
    size: number;
  }

  export function onChange(params: type): void;

  export function CircleSlider(props: CircleSliderProps): JSX.Element;
}
