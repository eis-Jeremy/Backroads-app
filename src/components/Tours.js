import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title titleBlack='featured' titleBlue='tours'/>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour}/>
          )
        })}
      </div>
    </section>
  )
}
