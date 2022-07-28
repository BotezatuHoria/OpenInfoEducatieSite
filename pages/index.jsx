import Image from 'next/image';

export default function Home() {
  const appName = 'DigiWell';

  return (
    <div className='w-screen h-screen overflow-y-auto bg-white'>
      {/* navbar */}
      <section role='navbar' className='w-full h-1/6 bg-primary'>
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <div className='flex flex-row items-center justify-center w-1/3 h-full p-4 ml-10'>
            <span className='text-3xl text-white cursor-pointer hover:text-gray-300'> {appName} </span>
          </div>

          {/* <div className='flex flex-row items-center justify-center w-1/3 h-full p-4 ml-10'>
            <span className='text-6xl text-white cursor-pointer hover:text-gray-300'> MUIE </span>
          </div> */}

          <div className='flex flex-row items-center justify-center w-1/3 h-full gap-6 p-4'>
            <span className='text-xl text-white cursor-pointer hover:text-gray-300'>
              <a href="#articles">Articles</a>
            </span>

            <span className='text-xl text-white cursor-pointer hover:text-gray-300'>
              <a href="#quiz">Quiz</a>
            </span>

            <span className='text-xl text-white cursor-pointer hover:text-gray-300'>
              <a href="#tracker">Tracker</a>
            </span>

            <span className='text-xl text-white cursor-pointer hover:text-gray-300'>
              <a href="#notifications">Notifications</a>
            </span>
          </div>
        </div>
      </section>

      {/* image-quote-thing */}
      <section role='quote' className='flex flex-row justify-end w-full h-2/3'>
        <div className='flex flex-col items-center justify-center flex-grow gap-10 px-20'>
          <span className='w-full text-3xl text-center'>
            It requires education, principled thinking, awareness and discipline to use internet as a tool for development rather than a new way to waste time, alienate the mind and body, consume unnecessary stuff and become more indebted.
          </span>

          <span className='w-4/5 text-xl text-right'>
            - A. Inunza, Mexico&apos;s Federal Institute of Telecommunications
          </span>
        </div>

        <div className='relative flex flex-row items-center justify-center h-full aspect-square'>
          <Image alt='Digital wellbeing' src='/digital-wellbeing.jpg' fit='cover' layout='fill'/>
        </div>
      </section>

      {/* download */}
      <section id='download' role='download' className='flex flex-row items-center justify-center h-1/6'>
        <div className="flex flex-col items-center justify-center hover:text-gray-600">
          <span className='text-4xl cursor-pointer'>
            Ready to improve on your digital wellbeing?
          </span>

          <span className='text-4xl cursor-pointer'>
            <a href='https://github.com/BotezatuHoria/OpenInfoEducatieAppplication'>
              Download {appName} now!  
            </a>
          </span>
        </div>
      </section>

      {/* articles */}
      <section role='articles' id='articles' className='flex flex-row w-full bg-accent h-1/3'>
        <div className='flex flex-col items-center justify-center flex-grow w-full gap-10 px-20'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Learn more about digital wellbeing with our collection of handpicked articles!
          </span>

          <span className='w-3/4 text-2xl text-center text-white'>
            It is well known that every journey starts with a well-trusted source of information, which is why our team at {appName} has carefully selected a range of articles to help give you better insight into what digital wellbeing is all about.
          </span>
        </div>
      </section>

      {/* quiz */}
      <section role='quiz' id='quiz' className='flex flex-row w-full bg-accent2 h-1/3'>
        <div className='flex flex-row items-center justify-center flex-grow w-full gap-10 px-20'>
          <span className='w-1/3 text-4xl text-center text-white'>
            Ready for a quiz ?
          </span>

          <span className='w-2/3 text-2xl text-center text-white'>
            Quizzes are proven to help tremendously with retaining information, especially in the case of more abstract subjects such as digital wellbeing. After all, what other way of learning can be more fun than a quiz? Our team at {appName} has put together a set of carefully selected set of questions to help you challenge your knowledge in digital wellbeing!
          </span>
        </div>
      </section>

      {/* tracker */}
      <section role='tracker' id='tracker' className='flex flex-row w-full bg-accent3 h-1/3'>
        <div className='flex flex-col items-center justify-center flex-grow w-full gap-10 px-20'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Keep track of your habits with {appName} !
          </span>

          <span className='w-2/3 text-2xl text-center text-white'>
            {appName} comes with a tracker feature, allowing you to monitor your time spending habits and providing advice based on your data.
          </span>
        </div> 
      </section>

      {/* notifications */}
      <section role='notifications' id='notifications' className='flex flex-row w-full bg-primary h-1/3'>
        <div className='flex flex-row items-center justify-center flex-grow w-full gap-10 px-20'>
          <span className='w-3/5 text-3xl text-center text-white'>
            Never overwork with {appName}&apos;s notifications!
          </span>

          <span className='w-2/5 text-2xl text-center text-white'>
            {appName} will regularly send you a notification with our Pomodoro feature to make sure you&apos;re getting your well-deserved breaks. 
          </span>
        </div>
      </section>
    </div>
  );
};
