let a=Number(-1);
    let response = JSON.parse(Result);
    return (
      <div className="my-0 mx-0 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-grey-800 scrollbar-track-black-600">
        <aside id="cta-button-sidebar" className="" aria-label="Sidebar">
          {
          testcases.map((item) => {
            a=Number(a)+1;
            return (
              <div className="h-full px-3 py-2 overflow-y-auto bg-white-50 "
              key={a}
                onClick={
                  ()=>{
                    if(ResultStatus == "run"){
                      console.log("__________________________________________")
                      input = TextConverter.utf8ToBase64(item.input);
                      expected_output = TextConverter.utf8ToBase64(item.output);
                      output = response[a].stdout;
                      // if(response[a].status.description == "Accepted"){
                      //   setResultTypeMessage({
                      //     input: input,
                      //     expected_output: expected_output,
                      //     output: (response[a].stdout),
                      //     // message: response[`${a}`].status.description,
                      //   });}
                      //   else{
                      //     setResultTypeMessage({
                      //       input: input,
                      //       expected_output: expected_output,
                      //       output: response[`${a}`].stdout,
                      //       message: TextConverter.utf8ToBase64(response[`${a}`].status.description),
                      //       compile_output: response[`${a}`].compile_output,
                      //     });
                      //   }

                    }else{
                      alert("no run");
                      alert(item.input + " " + item.output);
                      setResultTypeMessage({
                        input: TextConverter.utf8ToBase64(item.input),
                        expected_output: TextConverter.utf8ToBase64(item.output),
                        output: "",
                      });
                    }
                  }
                }
              >
                <ul className="space-y-2 font-medium">
                  <li>
                    <div className="flex items-center p-1 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                      {/* {item &&
                      item.status &&
                      item.status.description === "Accepted" ? (
                        <>
                          <svg
                            className="h-5 w-5 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 19 21 12 17 5 21 12 2" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg
                            className="h-5 w-5 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </>
                      )} */}

                      <span className="ms-3">
                        <svg
                          className="h-5 w-5 text-neutral-900"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          />{" "}
                          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                        </svg>
                      </span>
                      <span className="ms-3">
                        <h2 className="text-lg">sample TestCase {a}</h2>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            );
          
          })}
        </aside>
      </div>
    );