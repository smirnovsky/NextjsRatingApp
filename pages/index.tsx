import React from "react";
import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P, Tag } from "../components/index";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>text1</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='s'>Small</P>
      <P>Medium</P>
      <P size='l'>Large</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </>
  )
}
