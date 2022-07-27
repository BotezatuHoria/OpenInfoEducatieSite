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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis illo totam commodi, labore libero ullam et pariatur amet tempore?
          </span>

          <span className='w-1/2 text-lg text-right'>
            - Visual Studio Code &apos;lorem&apos; Tool
          </span>
        </div>

        <div className='relative h-full aspect-square flex flex-row items-center justify-center'>
          <Image alt='Digital wellbeing' src='/digital-wellbeing.jpg' fit='cover' layout='fill'/>
        </div>
      </section>

      

      {/* download */}
      <section id='download' role='download' className='flex flex-row items-center justify-center h-1/6'>
        <div className="flex flex-col items-center justify-center hover:text-gray-600">
          <span className='text-3xl cursor-pointer'>
            Ready to improve on your digital wellbeing?
          </span>

          <span className='text-3xl cursor-pointer'>
            Download {appName} now!
          </span>
        </div>
      </section>

      {/* articles */}
      <section role='articles' id='articles' className='bg-primary w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Learn more about digital wellbeing with our collection of handpicked articles!
          </span>

          <span className='w-1/3 text-lg text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reprehenderit nemo consequuntur labore, harum soluta tempore deleniti dolor eligendi ab explicabo dicta unde quae similique ipsum nisi optio iusto neque aperiam dolorem autem. Facilis impedit quas, sit ab facere optio atque repellendus ullam laboriosam nostrum odit animi fuga dolor repudiandae!
          </span>
        </div>
      </section>

      {/* quiz */}
      <section role='quiz' id='quiz' className='bg-primary w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Ready for a quiz ?
          </span>

          <span className='w-1/3 text-lg text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reprehenderit nemo consequuntur labore, harum soluta tempore deleniti dolor eligendi ab explicabo dicta unde quae similique ipsum nisi optio iusto neque aperiam dolorem autem. Facilis impedit quas, sit ab facere optio atque repellendus ullam laboriosam nostrum odit animi fuga dolor repudiandae!
          </span>
        </div>
      </section>

      {/* tracker */}
      <section role='tracker' id='tracker' className='bg-primary w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Keep track of your habits with {appName} !
          </span>

          <span className='w-1/3 text-lg text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reprehenderit nemo consequuntur labore, harum soluta tempore deleniti dolor eligendi ab explicabo dicta unde quae similique ipsum nisi optio iusto neque aperiam dolorem autem. Facilis impedit quas, sit ab facere optio atque repellendus ullam laboriosam nostrum odit animi fuga dolor repudiandae!
          </span>
        </div> 
      </section>

      {/* notifications */}
      <section role='notifications' id='notifications' className='bg-primary w-full h-1/3 flex flex-row'>
        <div className='w-full flex flex-row px-20 flex-grow items-center justify-center gap-10'>
          <span className='w-2/3 text-3xl text-center text-white'>
            Never miss anything with {appName}&apos;s notifications!
          </span>

          <span className='w-1/3 text-lg text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reprehenderit nemo consequuntur labore, harum soluta tempore deleniti dolor eligendi ab explicabo dicta unde quae similique ipsum nisi optio iusto neque aperiam dolorem autem. Facilis impedit quas, sit ab facere optio atque repellendus ullam laboriosam nostrum odit animi fuga dolor repudiandae!
          </span>
        </div>
      </section>

      {/* footer */}
      <section role='footer'>

      </section>
    </div>
  );
};
