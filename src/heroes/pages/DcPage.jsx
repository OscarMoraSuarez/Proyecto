import { useLocation } from "react-router-dom";
import { HeroList } from "../components";
export const DcPage = () => {
  const publisher = 'DC Comics';
  return (
    <>
      <h4 className="text-info firstTitle mt-1">DC Comics</h4>
          <hr />
          <HeroList publisher={publisher}/>

    </>
  )
}
