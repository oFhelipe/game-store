import { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './styles.scss'
import dotBackground from '../../assets/images/dot-simple-background.svg'

import api from '../../services/api'
function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function RecuperarSenha () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const query = useQuery()
  const [changeToken,setChangeToken] = useState(query.get('changeToken'))
  const history = useHistory()

  async function handleClickOnEnviarEmail (e) {
    e.preventDefault()
    if (
      email.length < 6 ||
      email.indexOf('@') <= 1 ||
      email.indexOf('.') <= 0
    ) {
      document.querySelector('.msg-warning').style.display = 'inherit'
      return false
    }
    document.querySelector('.msg-warning').style.display = 'none'

    const url = `${window.location.protocol}//${window.location.host}`

    await api.post('/user/forgot', {
      email,
      url
    })

    alert("Um email está sendo enviado para o endereço especificado")
  }

  async function handleClickOnConfirmar (e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Senhas não coincidem")
      return
    }

    const response = await api.put('/user/changePassword',{
      token: changeToken,
      password,
      confirmPassword
    })

    alert(response.data.message)
    history.push('/login')
  }

  return (
    <div id='screen-passlost'>
      <div id='container-form'>
        <form id='passlost-form'>
          <h1 className='passlost-title'>
            {changeToken ? 'Insira a nova senha' : 'Esqueceu a senha?'}
          </h1>
          {!changeToken ? (
            <>
              <p className='passlost-text'>
                Preencha com o e-mail que você usou para se cadastrar. Você
                receberá um e-mail com instruções sobre como redefinir sua
                senha.
              </p>
              <input
                onChange={e => {
                  setEmail(e.currentTarget.value)
                }}
                className='input-email'
                id='id-input-email'
                type='email'
                placeholder='Email'
              />
              <span className='msg-warning'>Email invalido</span>
              <button
                className='btn-passlost'
                onClick={handleClickOnEnviarEmail}
              >
                ENVIAR EMAIL
              </button>
              <div className='enter-accont-container'>
                <p>Lembra sua senha?</p>
                <Link to='/login'>Entrar</Link>
              </div>
            </>
          )
            :
            <>
              <p className='passlost-text'>
                Insira as informações para recuperar sua senha.
              </p>
              <input
                onChange={e => {
                  setPassword(e.currentTarget.value)
                }}
                className='input-email password'
                id='id-input-email'
                type='text'
                placeholder='Senha'
              />
              <input
                onChange={e => {
                  setConfirmPassword(e.currentTarget.value)
                }}
                className='input-email password'
                id='id-input-email'
                type='text'
                placeholder='Confirmar senha'
              />
              <button
                className='btn-passlost'
                onClick={handleClickOnConfirmar}
              >
                CONFIRMAR
              </button>
            </>
        }
        </form>
      </div>
      <div className='imagens-background'>
        <img className='image-dots' src={dotBackground} alt='imagem de fundo' />
        <img className='image-dots' src={dotBackground} alt='imagem de fundo' />
      </div>
    </div>
  )
}
export default RecuperarSenha
