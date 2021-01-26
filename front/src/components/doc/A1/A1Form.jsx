import React from 'react';
import { useForm } from 'react-hook-form';
import A1Bottom from './A1Bottom';
import A1Top from './A1Top';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';

const A1Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Info />
      <A1Top register={register} />
      <A1Bottom />
      <ButtonBox />
    </form>
  );
};

export default A1Form;
