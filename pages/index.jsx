import Image from 'next/image';

export default function Home() {
  const appName = 'DigiWell';

  return (
    <div className='w-screen h-screen overflow-y-auto bg-white'>
      {/* navbar */}
      <section role='navbar' className=' w-full h-1/6 bg-primary'>
        <div className='h-full w-full flex flex-row justify-center items-center'>
          <div className='ml-10 p-4 h-full w-1/2 flex flex-row justify-start items-center'>
            <span className='text-white cursor-pointer text-3xl hover:text-gray-300'> {appName} </span>
          </div>

          <div className='p-4 h-full w-1/2 flex flex-row justify-center items-center gap-6'>
            <span className='text-white hover:text-gray-300 cursor-pointer text-xl'>
              <a href="#articles">Articles</a>
            </span>

            <span className='text-white hover:text-gray-300 cursor-pointer text-xl'>
              <a href="#quiz">Quiz</a>
            </span>

            <span className='text-white hover:text-gray-300 cursor-pointer text-xl'>
              <a href="#tracker">Tracker</a>
            </span>

            <span className='text-white hover:text-gray-300 cursor-pointer text-xl'>
              <a href="#notifications">Notifications</a>
            </span>
          </div>
        </div>
      </section>

      {/* image-quote-thing */}
      <section role='quote' className='w-full h-2/3 flex flex-row justify-end'>
        <div className='flex flex-col px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-full text-3xl text-center'>
            It requires education, principled thinking, awareness and discipline to use internet as a tool for development rather than a new way to waste time, alienate the mind and body, consume unnecessary stuff and become more indebted.
          </span>

          <span className='w-4/5 text-xl text-right'>
            - A. Inunza, Mexico&apos;s Federal Institute of Telecommunications
          </span>
        </div>

        <div className='relative h-full aspect-square flex flex-row items-center justify-center'>
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
            Download {appName} now!
          </span>
        </div>
      </section>

      {/* articles */}
      <section role='articles' id='articles' className='bg-accent w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-col px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Learn more about digital wellbeing with our collection of handpicked articles!
          </span>

          <span className='w-3/4 text-2xl text-white text-center'>
            It is well known that every journey starts with a well-trusted source of information, which is why our team at {appName} has carefully selected a range of articles to help give you better insight into what digital wellbeing is all about.
          </span>
        </div>
      </section>

      {/* quiz */}
      <section role='quiz' id='quiz' className='bg-accent2 w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-1/3 text-4xl text-center text-white'>
            Ready for a quiz ?
          </span>

          <span className='w-2/3 text-2xl text-white text-center'>
            Quizzes are proven to help tremendously with retaining information, especially in the case of more abstract subjects such as digital wellbeing. After all, what other way of learning can be more fun than a quiz? Our team at {appName} has put together a set of carefully selected set of questions to help you challenge your knowledge in digital wellbeing!
          </span>
        </div>
      </section>

      {/* tracker */}
      <section role='tracker' id='tracker' className='bg-accent3 w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-col px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Keep track of your habits with {appName} !
          </span>

          <span className='w-2/3 text-2xl text-white text-center'>
            {appName} comes with a tracker feature, allowing you to monitor your time spending habits and providing advice based on your data.
          </span>
        </div> 
      </section>

      {/* notifications */}
      <section role='notifications' id='notifications' className='bg-primary w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-3/5 text-3xl text-center text-white'>
            Never overwork with {appName}&apos;s notifications!
          </span>

          <span className='w-2/5 text-2xl text-white text-center'>
            {appName} will regularly send you a notification with our Pomodoro feature to make sure you&apos;re getting your well-deserved breaks. 
          </span>
        </div>
      </section>
    </div>
  );
};
