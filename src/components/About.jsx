
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBook, IoRestaurantSharp } from "react-icons/io5";



import MDResume from "../assets/MDResume.pdf"
import MD from "../assets/md-portrait.jpg";




const About = () => {


  return (
    <div className='top container-fluid'>
      <div className='row'>
        <div className='aboutMe col-8 mx-5 mt-5'>
          <h3 className='my-4'>Michael Degginger's Story <span>so far...</span></h3>
          <img src={MD} alt="" />
          <div id='readOpac'>
            <h5>Growing up in the Seattle area, I was fortunate that it immersed me in the burgeoning technology wave that has propelled our culture forward. Unlike most of my peers who ended up working at Microsoft, Starbucks or Amazon, my familial love of food led me into the world of Restaurants and Hospitality.
            </h5>
            <p>
              But it was really when I made station check lists and cheat sheets to survive my first line cook position that I really saw how a computer would unlock the world for me. I could now create tools that enabled organization, quickness, and accuracy.
              The systems I used became more refined and as I progressed to running my own kitchens, they became “the system”.
              </p>
            <p>
              As my culinary career grew, so did my growing interest in learning more about how I could use computers and software to leverage positive results. The passions for people, food and technology propelled me to a point where I opened 29 new restaurants, became the training store for new managers and chefs entering a new company culture, and often brought in as a consultant to tackle some of the toughest issues that face restaurants.
              </p>
            <p>
              Many of the peers I encountered had formal training at prestigious schools. Never letting that stop or intimidate me, I was a self taught successful Chef, and a self motivated Developer.
                </p>
            <p>
              There is a trend here, if I haven’t beaten you over the head enough with it yet, I am very motivated to succeed.
                </p>
            <p>
              It’s my belief that the successful software development career that I am currently building, will demand the same tenacity and drive that leads to success. The only missing ingredient in this recipe for success is you, the person who will add a proven achiever to their team.
                </p>

          </div>
        </div>
        {/* <div className="col-1"></div> */}
        <div className='col-1 btn-group-vertical btn-link mt-5'>
          <button className='rounded border border-white btn btn-outline-light  text-white'>
            <a className='iconBtn text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool'>
            <FaGithubAlt size={29} /></a>
            
          </button>

          <button className='rounded border border-white btn btn-outline-light  text-white'>
            <a className='iconBtn text-white' target="_blank" rel="noreferrer" href={MDResume}>
            <IoBook size={29} /></a>
            
            </button>
          <button className='rounded border border-white btn btn-outline-light  text-white'>
             <a className='iconBtn text-white' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/michael-degginger-a00b581ab/'>
            <FaLinkedin size={29} />
            </a>

          </button>
          <button className='rounded border border-white btn btn-outline-light  text-white'>
             <a className='iconBtn text-white' target="_blank" rel="noreferrer" href='https://www.myfoodielove.com/'>
            <IoRestaurantSharp size={29} />
            </a>

          </button>
          <button className='rounded border border-white btn btn-outline-light  text-white'>
             <a className='iconBtn text-white' target="_blank" rel="noreferrer" href='mailto:michaeldegginger@protonmail.com'>
            <MdEmail size={29} />
            </a>

          </button>
        </div>
      </div>

    </div>
  );
};

export default About;
