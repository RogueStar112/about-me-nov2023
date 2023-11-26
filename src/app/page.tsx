import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import imageHero from './assets/bw_hero.JPG'
import imageSelfie from './assets/bw_selfie.jpg'
import flames from './assets/flames.png'
import cogs from './assets/cogs.png'
import pin from './assets/pin.png'

import Project from './components/Project'

import { merriweather } from "./layout"

export default function Home() {
  return (
    <div className='mx-3'>
    <Header />
    
    <main className="flex flex-col">

      <div className='hidden md:flex /flex-col md:flex-row relative justify-between mt-6 '>
          <Image className='' width={128} height={128} src={flames} alt=''/>
          <h1 className='text-4xl w-full text-center'>Forging websites with a fiery passion</h1>
          <Image className='scale-[-1]' width={128} height={128} src={flames} alt=''/>
      </div>


      <div className='flex flex-col md:flex-row relative mt-[100px] my-[420px]'>
        {/* <article className='w-1/2'>
          <section>
            <h2 className='text-2xl'>One</h2>
            <p></p>
          </section>
        </article> */}

        <div className='w-full mr-3'>
          
          {/* <h2 className={`${merriweather.className} text-5xl`}>P O R T F O L I O</h2>
          <h2 className={`text-5xl`}>S K I L L S</h2>
          <h2 className={`text-2xl`}>Experience</h2>
          <h2 className={`${merriweather.className} text-2xl`}>Frameworks</h2> */}

          <h2 className='text-5xl tracking-[.25em] border-b-2 border-white mb-4'>ABOUT</h2>

          <div className='flex justify-between '>

            <div className='grid grid-cols-3 [&>*]:flex'>
              <div className=''>
                <Image src={pin} width={32} height={32} alt='pin'></Image>
                <p>Cambridge, UK</p>
              </div>
            </div>

          </div>

          {/* <p className={`${merriweather.className}`}>
            I'm a Junior Web Developer based in Cambridge, UK.
          </p> */}

          <br />

          <p className={`${merriweather.className}`}>My experience as a web developer didn't come overnight. It's tempered by strikes of ideas, which is moulded
             into any shape the client desires.
          </p>

          <br />

          <p className={`${merriweather.className}`}>Outside of the computer, I immerse myself in nature to clear my mind.</p>
        </div>
        
        <div className='flex relative w-full'>
          
          <Image className='' width={1920} height={1024} src={imageSelfie} alt='hero'/>
          <div aria-label="gradient-bg"  className="bg-gradient-to-r from-transparent to-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>

      <div className='flex w-full justify-between [&>*]:mt-6'>



      {/* <section className='w-1/2 text-justify' aria-label='about-me-text'>
          <h1 className={`${merriweather.className} text-2xl font-extrabold mb-4 drop-shadow-2xl`}>About Me</h1>
          <p>
           Within the realm of code, I want my analytical skills to be seen thoroughly in my work.</p>
          <p>When fingers clash on the keys, I have a vision planned, and I set to bring that vision to life.</p>
          <p></p>
      </section> */}


      {/* <Image className='justify-self-end /rounded-full drop-shadow-2xl' src={profilePic} alt='My face' width={256} height={256}></Image>
 */}

      </div>

      <div className='flex mt-4'>
        <Image className="pr-4 border-r-2 border-white min-w-[178px] max-h-[185px]" src={cogs} width={178} height={185} alt="skills"></Image>

        <div className='flex flex-col ml-4 bg-gradient-to-l from-[#8E0010] p-4'>
          <h2 className='text-5xl tracking-[.25em]'>SKILLS & PROJECTS</h2>
          <p className={`${merriweather.className}`}>HTML+CSS+JS | PHP | Laravel | React | Next.js</p>
          {/* <p className='w-[300px] border-b border-2 border-white'></p> */}
          <Project title={`MoodCanvas`} skillset={`HTML+CSS+JS`} when={`Oct 2023`} deploy_href={`https://roguestar112.github.io/mood-journal/`} description={`Working as a group, we've assembled a warm and inviting website that allows users to keep track of their mood through journalling and ratings.`} />

          <Project title={`Todo App`} skillset={`React`} when={`Nov 2022`} deploy_href={`https://todoproject-dev.vercel.app/`} description={`A stepping stone project for my React knowledge, with extra features such as preset tasks, deadlines, and statistics.`} />

          <Project title={`Pizza Game`} skillset={`React`} when={`Sep 2022`} deploy_href={`https://pizza-game-oct2023.vercel.app/`} description={`A drag and drop game simulating (roughly) how pizzas are assembled.`} />

        </div>
      </div>

      {/* <h2 className={`${merriweather.className} text-2xl font-extrabold mb-4`}>My Vision</h2> */}

      <p></p>

    </main>
    
    {/* <Footer /> */}
    </div>
  
  )
}
