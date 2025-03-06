import styles from './Skills/skills.module.css'

export const SkillCard = ({iconPath, name, link, skillStyle}) => {
  return (
    <div className={`${styles.skillCard} ${skillStyle}`}>
      <a href={link} target='_blank'>
        <picture>
          <img src={iconPath} alt={`${name} Icon`} />
        </picture>
        <p>{name}</p>
      </a>
    </div>
  )
}
