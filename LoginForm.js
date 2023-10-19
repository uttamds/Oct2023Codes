
// https://www.react-hook-form.com/api/useform/
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type='email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}
      <br/>
      <label>Password</label>
      <input type="password" {...register("password", {minLength:8, required: true })} />
      {errors.password && <p>Password is required or is less than 8 chars long</p>}
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;