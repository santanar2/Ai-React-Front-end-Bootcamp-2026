interface Props {
  number: number;
}

export function DoubleNumber({ number }: Props) {
  return (
    <p>
      <b>N{"\u00FA"}mero: </b>
      {number} - <b>Dobro do n{"\u00FA"}mero: </b>
      {number * 2}
    </p>
  );
}
