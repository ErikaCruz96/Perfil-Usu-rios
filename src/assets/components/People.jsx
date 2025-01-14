import style from './People.module.css'

const People = ({nome, foto, job}) => {
  return (
    <>
        <div className={style.cards}>
            <h2>{nome}</h2>
            <div className={style.div_fotos}>
            <img className={style.fotos} src={foto} alt="Imagem pessoa" />
            </div>
            <p>{job}</p>
        </div>
    </>
  )
}

export default People