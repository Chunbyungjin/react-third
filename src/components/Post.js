import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.src} />
          </Grid>
          <Grid padding="16px">
            <Text bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "byungjin",
    user_profile: "https://newsimg.hankookilbo.com/cms/articlerelease/2016/03/08/201603081451987621_1.jpg?t=20210421124729",
  },
  image_url: "https://newsimg.hankookilbo.com/cms/articlerelease/2016/03/08/201603081451987621_1.jpg?t=20210421124729",
  contents: "깨비깨비",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;