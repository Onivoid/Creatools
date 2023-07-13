import TypeIt from 'typeit-react'

const HeaderTypeIt = () => {
    return(
        <div>
            <TypeIt className='text-4xl font-bold text-violet-700' 
                getBeforeInit={(instance) => {
                    instance
                    .options({speed: 80, lifeLike: false, loop: true})
                    .type("Favicons ?")
                    .pause(500)
                    .move(-2, {instant: true})
                    .delete(8)
                    .type("Outil 2")
                    .pause(500)
                    .delete(7)
                    .type("Outil 3")
                    .pause(500)
                    .move(2 , {instant: true})
                    .delete(9);
                return instance;
            }}/>
        </div>
    )
  }
  
  export default HeaderTypeIt;