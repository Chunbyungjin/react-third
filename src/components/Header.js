import React from "react";
import {Grid, Text, Button} from "../elements";
import { getCookie, deleteCookie} from "../shared/Cookie";

const Header = (props) => {
    const[is_login, setIsLogin] = React.useState(false);

    React.useEffect(() => {

        let cookie=getCookie("user_id");
        console.log(cookie);
    });


    if(is_login){
        return(
     <React.Fragment>
         <Grid is_flex padding="4px 16px">
             <Grid>
                 <Text margin="0px" size="24px" bold>헬로</Text>
             </Grid>
             
             <Grid is_flex>
                 <Button text="내 정보"></Button>
                 <Button text="강의 왜이래"></Button>
                 <Button text="로그아웃"></Button>
             </Grid>
         </Grid>
     </React.Fragment>

 )
 }

    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>
                
                <Grid is_flex>
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;