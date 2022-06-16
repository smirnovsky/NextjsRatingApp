import React, { useState } from "react";
import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P, Rating, Tag } from "../components/index";
import { withLayout } from "../layout/Layout";


function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'></Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='s'>Small</P>
      <P>Medium</P>
      <P size='l'>Large</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  )
}

export default withLayout(Home);