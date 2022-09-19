import './App.css';

function App() {
  return (
    <form>
      {' '}
      //handleSubmit(onSubmit){' '}
      {/* register your input into the hook by invoking the "register" function */}{' '}
      {/* <input defaultValue="test" {...register('example')} /> */}
      {/* include validation with required or other standard HTML validation rules */}{' '}
      <input
      // {...register('exampleRequired', {
      // required: true,
      // })}
      />{' '}
      {/* errors will return when field validation fails  */}{' '}
      {/* {errors.exampleRequired && <p> This field is required </p>} */}
      <input type="submit" />
    </form>
  );
}

export default App;
