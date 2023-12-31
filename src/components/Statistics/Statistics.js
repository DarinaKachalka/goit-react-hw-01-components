import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul key={stats.id} className={css.statList}>
    {stats.map(({id, label, percentage})=> {
        return (
             <li key={id} id={id} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
        )
    })}
   
    
  </ul>
</section>
    )
};