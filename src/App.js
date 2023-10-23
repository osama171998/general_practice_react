import React,{lazy,Suspense} from "react";
const FormHookPractice = lazy(()=>import("../src/components/form-hook-practice"))
function App() {
  return (
        <React.Fragment>
              <Suspense fallback={<div>Something went wrong</div>}>
                      <FormHookPractice/>
              </Suspense>
        </React.Fragment>
  );
}

export default App;
