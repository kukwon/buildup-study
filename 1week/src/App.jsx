import clsx from 'clsx'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  function send(data) {
    console.log('- 검증이 완료된 데이터 : ', data)
  }

  console.log('- 비제어 컴포넌트 원리 기반의 React Hook Form 은 <input> 입력시 리렌더링 미발생')
  return (
    <>
      <h3 style={{ margin: 0 }}>유저 추가하기</h3>
      <form className='form-wrapper' onSubmit={handleSubmit(send)}>
        <input
          className={clsx('input', errors?.username && 'error-border')}
          {...register('username', {
            required: { value: true, message: '아이디를 입력해주세요' },
            maxLength: {
              value: 10,
              message: '아이디는 10자 이상이 될 수 없습니다',
            },
          })}
        />
        <div className={errors?.username ? 'error-text' : ''}>{errors?.username?.message}</div>
        <button type='button'>저장안됨</button>
        <button>저장하기</button>
        <input type='submit' value='저장하기' />
      </form>
    </>
  )
}

export default App
