import { useRouter } from "next/router";

const TitleBar = () => {
   
    const router = useRouter();
    console.log(router.pathname)

    return ( 
        <div>
            <h1>ma1</h1>
        </div>
     );
}
 
export default TitleBar;