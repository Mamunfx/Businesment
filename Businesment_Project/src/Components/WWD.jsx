const WWD = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-6">
            <h1 className="text-5xl font-bold  lg:w-9/12">
              We help business get the data they need
            </h1>
            <p className="py-6  lg:w-9/12">
              Get fast delivery from widespread locations, anywheere you need
              us, we will recruit, train and get our sheperds there to carry out
              your checks.
            </p>

            <div>
              <ul className="steps steps-vertical ">
                <li className="step step-primary mt-4 ">
                    <div className="text-left lg:w-8/12 space-y-4 ml-4">
                        <h1 className="text-4xl">We go anywhere</h1>
                        <p>We can work anywhere there are people with smartphones, mobilizing thousands of people simultenously.</p>
                    </div>
                    
                </li>
                <li className="step step-primary mt-4">
                    <div className="text-left lg:w-8/12 space-y-4 ml-4">
                        <h1 className="text-4xl">A greener alternative</h1>
                        <p>We can work anywhere there are people with smartphones, mobilizing thousands of people simultenously.</p>

                    </div>
                </li>
                <li className="step step-primary mt-4">
                    <div className="text-left lg:w-8/12 space-y-4 ml-4">
                        <h1 className="text-4xl">Take care everything</h1>
                        <p>We can work anywhere there are people with smartphones, mobilizing thousands of people simultenously.</p>
                    </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center lg:text-left">
            <img
              src="https://i.ibb.co/9krZcLnZ/2496-1.jpg"
              alt="Sideimg"
              className="max-h-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WWD;
