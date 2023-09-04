import { HeroList } from "../components";

export const MarvelPage = () => {
  const publisher = 'Marvel Comics';
  return (
    <>
       <h4 className='text-danger firstTitle mt-1'>Marvel Comics</h4> 
       <hr />
       <HeroList publisher={publisher} />
    </>
  )
}
