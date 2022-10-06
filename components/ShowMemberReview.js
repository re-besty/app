import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getApi} from "@src/services";

const GetMemberReview = (props) => {
  if (!props.user.id) {
    return <></>
  }

  const [apiResponse, setApiResponse] = useState({});
  
  useEffect(() => {
    const api = getApi(props.config);
    api.customRequest(
      // 'wp-json/buddyboss/v1/members', // success
      'wp-json/buddyboss/v1/members/' + props.user.id, // success
      'get'
    ).then(response => setApiResponse(response.data));
  }, []);

  return <Text>平均レビュー点数: {JSON.stringify(apiResponse)}/5点</Text>
  // return <Text>showing user id after header, {props.user.id}</Text>
}

const mapStateToProps = (state) => ({
  config: state.config,  // not needed if axios or fetch is used
  accessToken: state.auth.token,
});

const ShowMemberReview = connect(mapStateToProps)(GetMemberReview);

export default ShowMemberReview;
